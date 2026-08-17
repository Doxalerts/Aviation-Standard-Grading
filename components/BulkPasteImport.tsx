"use client";

import { FormEvent, useMemo, useState } from "react";
import {
  loginAdmin,
  upsertCertificate,
  updateCertificateImages,
  uploadCertImage,
  verifyAsgAdmin,
  type NewCertificateInput,
} from "@/lib/supabaseRest";

type RecordRow = NewCertificateInput;
type ImagePair = { front?: File; back?: File };
type Mode = "new" | "attach";

const columns = [
  "cert_number", "card_name", "game", "year", "set_name", "card_number",
  "variant", "grade", "grade_label", "status", "certified_on", "notes",
];

function today() { return new Date().toISOString().slice(0, 10); }
function normalizeCert(value: string) { return value.trim().toUpperCase().replace(/\s+/g, ""); }
function certKey(value: string) { return normalizeCert(value).replace(/[^A-Z0-9]/g, ""); }

function parseRows(text: string, mode: Mode): RecordRow[] {
  const lines = text.replace(/\r/g, "").split("\n").map((line) => line.trimEnd()).filter((line) => line.trim());
  if (!lines.length) throw new Error("Paste at least one row.");
  const first = lines[0].split("\t");
  const dataLines = first[0]?.trim().toLowerCase() === "cert_number" ? lines.slice(1) : lines;
  const seen = new Set<string>();

  return dataLines.map((line, index) => {
    const cells = line.split("\t");
    const data: Record<string, string> = {};
    columns.forEach((name, i) => { data[name] = (cells[i] ?? "").trim(); });
    const cert = normalizeCert(data.cert_number || cells[0] || "");
    if (!cert) throw new Error(`Row ${index + 1}: missing cert number`);
    const key = certKey(cert);
    if (seen.has(key)) throw new Error(`Duplicate cert: ${cert}`);
    seen.add(key);

    if (mode === "new") {
      const required = [["card name", data.card_name], ["year", data.year], ["set", data.set_name], ["card number", data.card_number], ["grade", data.grade]];
      const missing = required.filter(([, v]) => !v).map(([n]) => n);
      if (missing.length) throw new Error(`Row ${index + 1}: missing ${missing.join(", ")}`);
    }

    return {
      cert_number: cert,
      card_name: data.card_name || "Existing certificate",
      game: data.game || "Pokémon",
      year: data.year || "",
      set_name: data.set_name || "",
      card_number: data.card_number || "",
      variant: data.variant || "",
      grade: data.grade || "",
      grade_label: data.grade_label || (data.grade === "10" ? "GEM MINT" : data.grade || ""),
      status: data.status?.toLowerCase() === "inactive" ? "Inactive" : "Verified",
      certified_on: data.certified_on || today(),
      front_image_path: null,
      back_image_path: null,
      notes: data.notes || null,
    };
  });
}

function parseNamedImage(file: File) {
  const base = file.name.replace(/(?:\.(?:jpe?g|png|webp))+$/i, "");
  const match = base.match(/^(.*?)(?:[-_ ]+)?(front|back)$/i);
  return match ? { key: certKey(match[1]), side: match[2].toLowerCase() as "front" | "back" } : null;
}

function naturalSort(a: File, b: File) {
  return a.name.localeCompare(b.name, undefined, { numeric: true, sensitivity: "base" });
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
  const [mode, setMode] = useState<Mode>("attach");
  const [paste, setPaste] = useState("");
  const [records, setRecords] = useState<RecordRow[]>([]);
  const [images, setImages] = useState<Map<string, ImagePair>>(new Map());
  const [selectedCount, setSelectedCount] = useState(0);
  const [notice, setNotice] = useState("");
  const [error, setError] = useState("");
  const [result, setResult] = useState("");
  const [working, setWorking] = useState(false);
  const [progress, setProgress] = useState({ done: 0, total: 0 });

  const stats = useMemo(() => {
    let fronts = 0, backs = 0, pairs = 0;
    records.forEach((r) => {
      const pair = images.get(certKey(r.cert_number));
      if (pair?.front) fronts++;
      if (pair?.back) backs++;
      if (pair?.front && pair?.back) pairs++;
    });
    return { fronts, backs, pairs };
  }, [records, images]);

  async function login(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setLoggingIn(true); setLoginError("");
    try {
      const session = await loginAdmin(email.trim(), password);
      if (!(await verifyAsgAdmin(session.access_token))) throw new Error("Not authorized for ASG Vault.");
      setToken(session.access_token); setPassword("");
    } catch (e) { setLoginError(e instanceof Error ? e.message : "Login failed"); }
    finally { setLoggingIn(false); }
  }

  function resetForMode(nextMode: Mode) {
    setMode(nextMode); setRecords([]); setImages(new Map()); setSelectedCount(0); setNotice(""); setError(""); setResult("");
  }

  function readRows() {
    setError(""); setResult(""); setImages(new Map()); setSelectedCount(0); setNotice("");
    try { setRecords(parseRows(paste, mode)); }
    catch (e) { setRecords([]); setError(e instanceof Error ? e.message : "Could not read rows"); }
  }

  function chooseImages(files: FileList | null) {
    const all = Array.from(files || []);
    setSelectedCount(all.length); setError(""); setResult("");
    if (!records.length) { setImages(new Map()); setNotice("Read the cert rows first."); return; }

    const named = new Map<string, ImagePair>();
    let namedCount = 0;
    all.forEach((file) => {
      const parsed = parseNamedImage(file);
      if (!parsed) return;
      const pair = named.get(parsed.key) || {};
      pair[parsed.side] = file; named.set(parsed.key, pair); namedCount++;
    });

    if (namedCount === all.length && namedCount > 0) {
      setImages(named);
      setNotice(`Matched ${namedCount} images by cert filename.`);
      return;
    }

    if (all.length !== records.length * 2) {
      setImages(new Map());
      setNotice(`Need exactly ${records.length * 2} photos for ${records.length} slabs. You selected ${all.length}.`);
      return;
    }

    const sorted = [...all].sort(naturalSort);
    const ordered = new Map<string, ImagePair>();
    records.forEach((record, i) => ordered.set(certKey(record.cert_number), { front: sorted[i * 2], back: sorted[i * 2 + 1] }));
    setImages(ordered);
    setNotice(`Paired ${records.length} slabs by IMG photo order: front, back, front, back.`);
  }

  async function runImport() {
    if (!token || !records.length || stats.pairs !== records.length || working) return;
    setWorking(true); setResult(""); setError(""); setProgress({ done: 0, total: records.length });
    const errors: string[] = []; let done = 0;
    await parallel(records, 4, async (record) => {
      try {
        const pair = images.get(certKey(record.cert_number));
        if (!pair?.front || !pair?.back) throw new Error("missing image pair");
        const frontPath = await uploadCertImage(token, record.cert_number, "front", pair.front);
        const backPath = await uploadCertImage(token, record.cert_number, "back", pair.back);
        if (mode === "attach") await updateCertificateImages(token, record.cert_number, frontPath, backPath);
        else await upsertCertificate(token, { ...record, front_image_path: frontPath, back_image_path: backPath });
      } catch (e) { errors.push(`${record.cert_number}: ${e instanceof Error ? e.message : "failed"}`); }
      finally { done++; setProgress({ done, total: records.length }); }
    });
    setWorking(false);
    if (errors.length) setError(`Completed ${records.length - errors.length}/${records.length}. ${errors.slice(0, 3).join(" | ")}`);
    else setResult(mode === "attach" ? `Success — images attached to ${records.length} existing certificates.` : `Success — ${records.length} certificates imported.`);
  }

  if (!token) return (
    <div className="bulk-import-shell bulk-login-shell" style={{ maxWidth: 620, margin: "40px auto" }}>
      <div><p className="eyebrow">Authorized Staff Only</p><h2 style={{ fontSize: "2rem" }}>ASG Vault Login</h2></div>
      <form className="bulk-login-form" onSubmit={login}>
        <label>Email<input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} /></label>
        <label>Password<input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} /></label>
        {loginError ? <p className="form-error">{loginError}</p> : null}
        <button className="button button--primary" disabled={loggingIn} type="submit">{loggingIn ? "Signing in…" : "Sign In"}</button>
      </form>
    </div>
  );

  const ready = records.length > 0 && stats.pairs === records.length;
  return (
    <div className="bulk-import-shell" style={{ maxWidth: 980, margin: "0 auto" }}>
      <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 24 }}>
        <button type="button" className={`button ${mode === "attach" ? "button--primary" : "button--dark"}`} onClick={() => resetForMode("attach")}>Attach Images to Existing Slabs</button>
        <button type="button" className={`button ${mode === "new" ? "button--primary" : "button--dark"}`} onClick={() => resetForMode("new")}>Import New Slabs</button>
      </div>

      <div style={{ padding: 24, border: "1px solid #d9e0e6", borderRadius: 18, background: "white" }}>
        <h2 style={{ fontSize: "1.8rem", marginBottom: 8 }}>{mode === "attach" ? "Attach Photos Only" : "Import New Slabs"}</h2>
        <p style={{ color: "#586675", marginBottom: 22 }}>{mode === "attach" ? "This mode only updates front/back image fields. Existing card data is left untouched." : "Paste full slab rows and import them with images."}</p>

        <label className="cert-admin-notes"><strong>1. Paste {mode === "attach" ? "the same cert rows (or just cert numbers) in photo order" : "certificate rows"}</strong><textarea value={paste} onChange={(e) => setPaste(e.target.value)} style={{ minHeight: 150 }} /></label>
        <div style={{ margin: "12px 0 22px" }}><button className="button button--dark" type="button" onClick={readRows}>Read Rows</button></div>

        <label className="bulk-drop-card"><strong>2. Select all photos</strong><span>{selectedCount ? `${selectedCount} selected` : "Front, back, front, back..."}</span><input type="file" accept="image/jpeg,image/png,image/webp" multiple onChange={(e) => chooseImages(e.target.files)} /></label>
        {notice ? <p style={{ marginTop: 12, color: "#586675" }}>{notice}</p> : null}
        {error ? <p className="form-error" style={{ marginTop: 14 }}>{error}</p> : null}
        {result ? <p className="form-message" style={{ marginTop: 14 }}>{result}</p> : null}

        {records.length ? <>
          <div className="bulk-stats" style={{ marginTop: 22 }}><article><strong>{records.length}</strong><span>slabs</span></article><article><strong>{stats.fronts}</strong><span>fronts</span></article><article><strong>{stats.backs}</strong><span>backs</span></article><article><strong>{stats.pairs}</strong><span>complete pairs</span></article></div>
          <div style={{ marginTop: 20, display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
            <strong>{working ? `Working ${progress.done}/${progress.total}…` : ready ? "Ready" : "Match all images first"}</strong>
            <button className="button button--primary" disabled={!ready || working} type="button" onClick={runImport}>{working ? `Working ${progress.done}/${progress.total}` : mode === "attach" ? `Attach Images to ${records.length} Slabs` : `Import ${records.length} Slabs`}</button>
          </div>
        </> : null}
      </div>
    </div>
  );
}
