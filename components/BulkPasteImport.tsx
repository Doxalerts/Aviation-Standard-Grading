"use client";

import { FormEvent, useMemo, useState } from "react";
import {
  loginAdmin,
  upsertCertificate,
  uploadCertImage,
  verifyAsgAdmin,
  type NewCertificateInput,
} from "@/lib/supabaseRest";

type RecordRow = NewCertificateInput;
type ImagePair = { front?: File; back?: File };

const columns = [
  "cert_number",
  "card_name",
  "game",
  "year",
  "set_name",
  "card_number",
  "variant",
  "grade",
  "grade_label",
  "status",
  "certified_on",
  "notes",
];

function today() {
  return new Date().toISOString().slice(0, 10);
}

function normalizeCert(value: string) {
  return value.trim().toUpperCase().replace(/\s+/g, "");
}

function certKey(value: string) {
  return normalizeCert(value).replace(/[^A-Z0-9]/g, "");
}

function parseTabRows(text: string): RecordRow[] {
  const lines = text
    .replace(/\r/g, "")
    .split("\n")
    .map((line) => line.trimEnd())
    .filter((line) => line.trim());

  if (!lines.length) throw new Error("Paste at least one certificate row.");

  const firstCells = lines[0].split("\t");
  const hasHeader = firstCells[0]?.trim().toLowerCase() === "cert_number";
  const dataLines = hasHeader ? lines.slice(1) : lines;

  if (!dataLines.length) throw new Error("No certificate rows found under the header.");

  const seen = new Set<string>();

  return dataLines.map((line, index) => {
    const cells = line.split("\t");
    const data: Record<string, string> = {};
    columns.forEach((name, i) => {
      data[name] = (cells[i] ?? "").trim();
    });

    const certNumber = normalizeCert(data.cert_number || "");
    const required = [
      ["cert number", certNumber],
      ["card name", data.card_name],
      ["year", data.year],
      ["set", data.set_name],
      ["card number", data.card_number],
      ["grade", data.grade],
    ];
    const missing = required.filter(([, value]) => !value).map(([name]) => name);
    if (missing.length) {
      throw new Error(`Row ${index + 1}: missing ${missing.join(", ")}`);
    }

    const key = certKey(certNumber);
    if (seen.has(key)) throw new Error(`Duplicate cert in pasted rows: ${certNumber}`);
    seen.add(key);

    return {
      cert_number: certNumber,
      card_name: data.card_name,
      game: data.game || "Pokémon",
      year: data.year,
      set_name: data.set_name,
      card_number: data.card_number,
      variant: data.variant || "",
      grade: data.grade,
      grade_label: data.grade_label || (data.grade === "10" ? "GEM MINT" : data.grade),
      status: data.status?.toLowerCase() === "inactive" ? "Inactive" : "Verified",
      certified_on: data.certified_on || today(),
      front_image_path: null,
      back_image_path: null,
      notes: data.notes || null,
    };
  });
}

function parseImageName(file: File) {
  // Accept normal names and Windows-style double extensions such as .jpg.jpeg.
  const base = file.name.replace(/(?:\.(?:jpe?g|png|webp))+$/i, "");
  const match = base.match(/^(.*?)(?:[-_ ]+)?(front|back)$/i);
  if (!match) return null;
  return {
    key: certKey(match[1]),
    side: match[2].toLowerCase() as "front" | "back",
  };
}

async function parallel<T>(items: T[], limit: number, worker: (item: T) => Promise<void>) {
  let next = 0;
  const runners = Array.from({ length: Math.min(limit, items.length) }, async () => {
    while (true) {
      const i = next++;
      if (i >= items.length) return;
      await worker(items[i]);
    }
  });
  await Promise.all(runners);
}

export function BulkPasteImport() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [loginError, setLoginError] = useState("");
  const [loggingIn, setLoggingIn] = useState(false);

  const [paste, setPaste] = useState("");
  const [records, setRecords] = useState<RecordRow[]>([]);
  const [parseError, setParseError] = useState("");
  const [images, setImages] = useState<Map<string, ImagePair>>(new Map());
  const [selectedImages, setSelectedImages] = useState(0);
  const [importing, setImporting] = useState(false);
  const [progress, setProgress] = useState({ done: 0, total: 0 });
  const [result, setResult] = useState("");

  const stats = useMemo(() => {
    let fronts = 0;
    let backs = 0;
    let pairs = 0;
    records.forEach((record) => {
      const pair = images.get(certKey(record.cert_number));
      if (pair?.front) fronts += 1;
      if (pair?.back) backs += 1;
      if (pair?.front && pair?.back) pairs += 1;
    });
    return { fronts, backs, pairs };
  }, [records, images]);

  async function login(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoggingIn(true);
    setLoginError("");
    try {
      const session = await loginAdmin(email.trim(), password);
      if (!(await verifyAsgAdmin(session.access_token))) {
        throw new Error("This account is not authorized for ASG Vault imports.");
      }
      setToken(session.access_token);
      setPassword("");
    } catch (error) {
      setLoginError(error instanceof Error ? error.message : "Login failed");
    } finally {
      setLoggingIn(false);
    }
  }

  function readPaste() {
    setParseError("");
    setResult("");
    try {
      setRecords(parseTabRows(paste));
    } catch (error) {
      setRecords([]);
      setParseError(error instanceof Error ? error.message : "Could not read pasted rows");
    }
  }

  function chooseImages(files: FileList | null) {
    const map = new Map<string, ImagePair>();
    let count = 0;
    Array.from(files || []).forEach((file) => {
      const parsed = parseImageName(file);
      if (!parsed) return;
      const pair = map.get(parsed.key) || {};
      pair[parsed.side] = file;
      map.set(parsed.key, pair);
      count += 1;
    });
    setImages(map);
    setSelectedImages(count);
    setResult("");
  }

  async function importRows() {
    if (!token || !records.length || importing) return;
    setImporting(true);
    setResult("");
    setProgress({ done: 0, total: records.length });
    const errors: string[] = [];
    let done = 0;

    try {
      await parallel(records, 4, async (record) => {
        try {
          const pair = images.get(certKey(record.cert_number));
          const frontPath = pair?.front
            ? await uploadCertImage(token, record.cert_number, "front", pair.front)
            : null;
          const backPath = pair?.back
            ? await uploadCertImage(token, record.cert_number, "back", pair.back)
            : null;

          await upsertCertificate(token, {
            ...record,
            front_image_path: frontPath,
            back_image_path: backPath,
          });
        } catch (error) {
          errors.push(`${record.cert_number}: ${error instanceof Error ? error.message : "failed"}`);
        } finally {
          done += 1;
          setProgress({ done, total: records.length });
        }
      });

      setResult(
        errors.length
          ? `Imported ${records.length - errors.length} of ${records.length}. ${errors.slice(0, 4).join(" | ")}`
          : `Success — ${records.length} certificate${records.length === 1 ? "" : "s"} imported into the ASG Vault.`
      );
    } finally {
      setImporting(false);
    }
  }

  if (!token) {
    return (
      <div className="bulk-import-shell bulk-login-shell">
        <div>
          <p className="eyebrow">Authorized Staff Only</p>
          <h2>ASG Vault Login</h2>
          <p>Sign in with the ASG admin account.</p>
        </div>
        <form className="bulk-login-form" onSubmit={login}>
          <label>Email<input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} /></label>
          <label>Password<input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} /></label>
          {loginError ? <p className="form-error">{loginError}</p> : null}
          <button className="button button--primary" disabled={loggingIn} type="submit">{loggingIn ? "Signing In…" : "Sign In"}</button>
        </form>
      </div>
    );
  }

  return (
    <div className="bulk-import-shell">
      <div className="bulk-import-actions">
        <div>
          <p className="eyebrow">Fast Bulk Entry</p>
          <h2>Paste. Match. Import.</h2>
          <p>No spreadsheet app required. Paste rows directly from ChatGPT or any tab-separated list.</p>
        </div>
      </div>

      <label className="cert-admin-notes">
        <strong>1. Paste certificate rows</strong>
        <textarea
          value={paste}
          onChange={(e) => setPaste(e.target.value)}
          placeholder={"ASG116651\tDACHSBUN EX\tPokémon\t2026\tCSV7 CS\t106/204\tHolo\t10\tGEM MINT\tVerified\t2026-08-17\t"}
          style={{ minHeight: 190 }}
        />
      </label>

      <div className="button-row" style={{ marginTop: 14, marginBottom: 26 }}>
        <button className="button button--primary" type="button" onClick={readPaste}>Read Pasted Rows</button>
      </div>

      <label className="bulk-drop-card">
        <strong>2. Select all slab images</strong>
        <span>{selectedImages ? `${selectedImages} image files recognized` : "Select front/back photos for the whole batch"}</span>
        <input type="file" accept="image/jpeg,image/png,image/webp" multiple onChange={(e) => chooseImages(e.target.files)} />
      </label>

      <p className="bulk-file-rule">Names like <code>ASG116651-front.jpg</code>, <code>ASG116651-back.jpg</code>, and even <code>ASG116651-front.jpg.jpeg</code> are accepted.</p>

      {parseError ? <p className="form-error bulk-error">{parseError}</p> : null}

      {records.length ? (
        <>
          <div className="bulk-stats">
            <article><strong>{records.length}</strong><span>records</span></article>
            <article><strong>{stats.fronts}</strong><span>front images matched</span></article>
            <article><strong>{stats.backs}</strong><span>back images matched</span></article>
            <article><strong>{stats.pairs}</strong><span>complete image pairs</span></article>
          </div>

          <div className="bulk-preview-wrap">
            <table className="bulk-preview-table">
              <thead><tr><th>Cert</th><th>Card</th><th>Year / Set</th><th>Grade</th><th>Images</th></tr></thead>
              <tbody>
                {records.slice(0, 15).map((record) => {
                  const pair = images.get(certKey(record.cert_number));
                  return (
                    <tr key={record.cert_number}>
                      <td>{record.cert_number}</td>
                      <td>{record.card_name}<small>{record.card_number}</small></td>
                      <td>{record.year}<small>{record.set_name}</small></td>
                      <td>{record.grade}<small>{record.grade_label}</small></td>
                      <td>{pair?.front ? "F ✓" : "F —"} &nbsp; {pair?.back ? "B ✓" : "B —"}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="bulk-import-footer">
            <div>
              <p>{importing ? `Importing ${progress.done}/${progress.total}…` : `Ready to import ${records.length} certificate${records.length === 1 ? "" : "s"}.`}</p>
              {result ? <p className="form-message">{result}</p> : null}
            </div>
            <button className="button button--primary" disabled={importing} type="button" onClick={importRows}>
              {importing ? `Importing ${progress.done}/${progress.total}` : `Import ${records.length} to ASG Vault`}
            </button>
          </div>
        </>
      ) : null}
    </div>
  );
}
