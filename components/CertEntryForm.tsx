"use client";

import { FormEvent, useMemo, useState } from "react";
import {
  loginAdmin,
  upsertCertificate,
  uploadCertImage,
  verifyAsgAdmin,
  type NewCertificateInput,
} from "@/lib/supabaseRest";

type CsvRecord = NewCertificateInput;
type ImagePair = { front?: File; back?: File };

const templateHeaders = [
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

function parseCsv(text: string) {
  const rows: string[][] = [];
  let row: string[] = [];
  let value = "";
  let quoted = false;

  for (let i = 0; i < text.length; i += 1) {
    const char = text[i];
    const next = text[i + 1];

    if (char === '"' && quoted && next === '"') {
      value += '"';
      i += 1;
    } else if (char === '"') {
      quoted = !quoted;
    } else if (char === "," && !quoted) {
      row.push(value);
      value = "";
    } else if ((char === "\n" || char === "\r") && !quoted) {
      if (char === "\r" && next === "\n") i += 1;
      row.push(value);
      value = "";
      if (row.some((cell) => cell.trim() !== "")) rows.push(row);
      row = [];
    } else {
      value += char;
    }
  }

  row.push(value);
  if (row.some((cell) => cell.trim() !== "")) rows.push(row);
  return rows;
}

function headerKey(value: string) {
  return value.trim().toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_|_$/g, "");
}

function normalizeCertKey(value: string) {
  return value.trim().toUpperCase().replace(/[^A-Z0-9]/g, "");
}

function normalizeCertNumber(value: string) {
  return value.trim().toUpperCase().replace(/\s+/g, "");
}

function today() {
  return new Date().toISOString().slice(0, 10);
}

function recordFromCsv(headers: string[], cells: string[], line: number): CsvRecord {
  const data: Record<string, string> = {};
  headers.forEach((header, index) => {
    data[header] = (cells[index] ?? "").trim();
  });

  const certNumber = normalizeCertNumber(data.cert_number || "");
  const required: Array<[string, string]> = [
    ["cert_number", certNumber],
    ["card_name", data.card_name],
    ["year", data.year],
    ["set_name", data.set_name],
    ["card_number", data.card_number],
    ["grade", data.grade],
  ];

  const missing = required.filter(([, value]) => !value).map(([name]) => name);
  if (missing.length) {
    throw new Error(`CSV line ${line}: missing ${missing.join(", ")}`);
  }

  const status = data.status?.toLowerCase() === "inactive" ? "Inactive" : "Verified";

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
    status,
    certified_on: data.certified_on || today(),
    front_image_path: null,
    back_image_path: null,
    notes: data.notes || null,
  };
}

function parseImageFile(file: File) {
  const base = file.name.replace(/\.[^.]+$/, "");
  const match = base.match(/^(.*?)(?:[-_ ]+)?(front|back)$/i);
  if (!match) return null;
  return {
    certKey: normalizeCertKey(match[1]),
    side: match[2].toLowerCase() as "front" | "back",
  };
}

async function runWithConcurrency<T>(
  items: T[],
  limit: number,
  worker: (item: T, index: number) => Promise<void>
) {
  let next = 0;
  const runners = Array.from({ length: Math.min(limit, items.length) }, async () => {
    while (true) {
      const index = next;
      next += 1;
      if (index >= items.length) return;
      await worker(items[index], index);
    }
  });
  await Promise.all(runners);
}

export function CertEntryForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [accessToken, setAccessToken] = useState("");
  const [loginError, setLoginError] = useState("");
  const [loggingIn, setLoggingIn] = useState(false);

  const [records, setRecords] = useState<CsvRecord[]>([]);
  const [csvName, setCsvName] = useState("");
  const [csvError, setCsvError] = useState("");
  const [images, setImages] = useState<Map<string, ImagePair>>(new Map());
  const [imageCount, setImageCount] = useState(0);
  const [importing, setImporting] = useState(false);
  const [progress, setProgress] = useState({ done: 0, total: 0 });
  const [result, setResult] = useState("");

  const matchedImageStats = useMemo(() => {
    let fronts = 0;
    let backs = 0;
    let complete = 0;
    for (const record of records) {
      const pair = images.get(normalizeCertKey(record.cert_number));
      if (pair?.front) fronts += 1;
      if (pair?.back) backs += 1;
      if (pair?.front && pair?.back) complete += 1;
    }
    return { fronts, backs, complete };
  }, [records, images]);

  async function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoginError("");
    setLoggingIn(true);
    try {
      const session = await loginAdmin(email.trim(), password);
      const allowed = await verifyAsgAdmin(session.access_token);
      if (!allowed) throw new Error("This account is not authorized for ASG certificate imports.");
      setAccessToken(session.access_token);
      setPassword("");
    } catch (error) {
      setLoginError(error instanceof Error ? error.message : "Login failed");
    } finally {
      setLoggingIn(false);
    }
  }

  async function handleCsv(file: File | undefined) {
    setCsvError("");
    setResult("");
    setRecords([]);
    setCsvName("");
    if (!file) return;

    try {
      const text = await file.text();
      const rows = parseCsv(text);
      if (rows.length < 2) throw new Error("CSV needs a header row and at least one certificate row.");

      const headers = rows[0].map(headerKey);
      if (!headers.includes("cert_number")) throw new Error("CSV must include a cert_number column.");

      const parsed = rows.slice(1).map((cells, index) => recordFromCsv(headers, cells, index + 2));
      const seen = new Set<string>();
      for (const record of parsed) {
        const key = normalizeCertKey(record.cert_number);
        if (seen.has(key)) throw new Error(`Duplicate cert number in CSV: ${record.cert_number}`);
        seen.add(key);
      }

      setRecords(parsed);
      setCsvName(file.name);
    } catch (error) {
      setCsvError(error instanceof Error ? error.message : "Could not read CSV");
    }
  }

  function handleImages(files: FileList | null) {
    setResult("");
    const map = new Map<string, ImagePair>();
    let accepted = 0;

    if (files) {
      Array.from(files).forEach((file) => {
        const parsed = parseImageFile(file);
        if (!parsed) return;
        const current = map.get(parsed.certKey) || {};
        current[parsed.side] = file;
        map.set(parsed.certKey, current);
        accepted += 1;
      });
    }

    setImages(map);
    setImageCount(accepted);
  }

  function downloadTemplate() {
    const sample = [
      templateHeaders.join(","),
      'ASG116652,"Victini ex",Pokémon,2026,"Example Set",12/86,Holo,10,"GEM MINT",Verified,' + today() + ",",
    ].join("\n");
    const blob = new Blob([sample], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "asg-cert-import-template.csv";
    anchor.click();
    URL.revokeObjectURL(url);
  }

  async function importAll() {
    if (!accessToken || !records.length || importing) return;
    setImporting(true);
    setResult("");
    setProgress({ done: 0, total: records.length });
    const errors: string[] = [];
    let completed = 0;

    try {
      await runWithConcurrency(records, 4, async (record) => {
        try {
          const pair = images.get(normalizeCertKey(record.cert_number));
          let frontPath: string | null = null;
          let backPath: string | null = null;

          if (pair?.front) {
            frontPath = await uploadCertImage(accessToken, record.cert_number, "front", pair.front);
          }
          if (pair?.back) {
            backPath = await uploadCertImage(accessToken, record.cert_number, "back", pair.back);
          }

          await upsertCertificate(accessToken, {
            ...record,
            front_image_path: frontPath,
            back_image_path: backPath,
          });
        } catch (error) {
          errors.push(`${record.cert_number}: ${error instanceof Error ? error.message : "failed"}`);
        } finally {
          completed += 1;
          setProgress({ done: completed, total: records.length });
        }
      });

      if (errors.length) {
        setResult(`Imported ${records.length - errors.length} of ${records.length}. Errors: ${errors.slice(0, 5).join(" | ")}${errors.length > 5 ? " …" : ""}`);
      } else {
        setResult(`Success — ${records.length} certificate${records.length === 1 ? "" : "s"} imported into the ASG Vault.`);
      }
    } finally {
      setImporting(false);
    }
  }

  if (!accessToken) {
    return (
      <div className="bulk-import-shell bulk-login-shell">
        <div>
          <p className="eyebrow">Authorized Staff Only</p>
          <h2>ASG Vault Login</h2>
          <p>Use the ASG admin account authorized in Supabase.</p>
        </div>
        <form className="bulk-login-form" onSubmit={handleLogin}>
          <label>
            Email
            <input type="email" required value={email} onChange={(event) => setEmail(event.target.value)} autoComplete="username" />
          </label>
          <label>
            Password
            <input type="password" required value={password} onChange={(event) => setPassword(event.target.value)} autoComplete="current-password" />
          </label>
          {loginError ? <p className="form-error">{loginError}</p> : null}
          <button className="button button--primary" disabled={loggingIn} type="submit">
            {loggingIn ? "Signing In…" : "Sign In to ASG Vault"}
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="bulk-import-shell">
      <div className="bulk-import-actions">
        <div>
          <p className="eyebrow">Bulk Certificate Import</p>
          <h2>Load the ASG Vault</h2>
          <p>Import hundreds of certificates at once. Existing cert numbers are updated instead of duplicated.</p>
        </div>
        <button className="button button--ghost" type="button" onClick={downloadTemplate}>Download CSV Template</button>
      </div>

      <div className="bulk-upload-grid">
        <label className="bulk-drop-card">
          <strong>1. Upload certificate CSV</strong>
          <span>{csvName || "Choose .csv file"}</span>
          <input type="file" accept=".csv,text/csv" onChange={(event) => handleCsv(event.target.files?.[0])} />
        </label>

        <label className="bulk-drop-card">
          <strong>2. Select slab images</strong>
          <span>{imageCount ? `${imageCount} matching image filenames found` : "Optional — select all front/back images at once"}</span>
          <input type="file" accept="image/jpeg,image/png,image/webp" multiple onChange={(event) => handleImages(event.target.files)} />
        </label>
      </div>

      <p className="bulk-file-rule">
        Image names: <code>ASG116651-front.jpg</code> and <code>ASG116651-back.jpg</code>. PNG and WebP work too.
      </p>

      {csvError ? <p className="form-error bulk-error">{csvError}</p> : null}

      {records.length ? (
        <>
          <div className="bulk-stats">
            <article><strong>{records.length}</strong><span>CSV records</span></article>
            <article><strong>{matchedImageStats.fronts}</strong><span>front images matched</span></article>
            <article><strong>{matchedImageStats.backs}</strong><span>back images matched</span></article>
            <article><strong>{matchedImageStats.complete}</strong><span>complete image pairs</span></article>
          </div>

          <div className="bulk-preview-wrap">
            <table className="bulk-preview-table">
              <thead>
                <tr><th>Cert</th><th>Card</th><th>Year / Set</th><th>Grade</th><th>Images</th></tr>
              </thead>
              <tbody>
                {records.slice(0, 12).map((record) => {
                  const pair = images.get(normalizeCertKey(record.cert_number));
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
            {records.length > 12 ? <p className="form-note">Previewing first 12 of {records.length} rows.</p> : null}
          </div>

          <div className="bulk-import-footer">
            <div>
              {importing ? <p>Importing {progress.done} / {progress.total}…</p> : <p>Ready to import {records.length} certificate{records.length === 1 ? "" : "s"}.</p>}
              {result ? <p className="form-message">{result}</p> : null}
            </div>
            <button className="button button--primary" type="button" disabled={importing} onClick={importAll}>
              {importing ? `Importing ${progress.done}/${progress.total}` : `Import ${records.length} to ASG Vault`}
            </button>
          </div>
        </>
      ) : null}
    </div>
  );
}
