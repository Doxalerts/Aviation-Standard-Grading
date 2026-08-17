"use client";

import { FormEvent, useState } from "react";
import {
  loginAdmin,
  upsertCertificate,
  uploadCertImage,
  verifyAsgAdmin,
  type NewCertificateInput,
} from "@/lib/supabaseRest";

type QuickForm = {
  certNumber: string;
  cardName: string;
  game: string;
  year: string;
  setName: string;
  cardNumber: string;
  variant: string;
  grade: string;
  gradeLabel: string;
  certifiedOn: string;
  notes: string;
};

function today() {
  return new Date().toISOString().slice(0, 10);
}

function freshForm(): QuickForm {
  return {
    certNumber: "",
    cardName: "",
    game: "Pokémon",
    year: "",
    setName: "",
    cardNumber: "",
    variant: "",
    grade: "10",
    gradeLabel: "GEM MINT",
    certifiedOn: today(),
    notes: "",
  };
}

export function QuickCertEntry() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [accessToken, setAccessToken] = useState("");
  const [loginError, setLoginError] = useState("");
  const [loggingIn, setLoggingIn] = useState(false);

  const [form, setForm] = useState<QuickForm>(freshForm());
  const [frontFile, setFrontFile] = useState<File | null>(null);
  const [backFile, setBackFile] = useState<File | null>(null);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  function setField(field: keyof QuickForm, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
    setMessage("");
    setError("");
  }

  async function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoginError("");
    setLoggingIn(true);
    try {
      const session = await loginAdmin(email.trim(), password);
      const allowed = await verifyAsgAdmin(session.access_token);
      if (!allowed) throw new Error("This account is not authorized for ASG certificate entry.");
      setAccessToken(session.access_token);
      setPassword("");
    } catch (loginFailure) {
      setLoginError(loginFailure instanceof Error ? loginFailure.message : "Login failed");
    } finally {
      setLoggingIn(false);
    }
  }

  async function saveCertificate(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!accessToken || saving) return;

    setSaving(true);
    setMessage("");
    setError("");

    try {
      const certNumber = form.certNumber.trim().toUpperCase().replace(/\s+/g, "");
      if (!certNumber) throw new Error("Certification number is required.");
      if (!form.cardName.trim()) throw new Error("Card name is required.");
      if (!form.year.trim()) throw new Error("Year is required.");
      if (!form.setName.trim()) throw new Error("Set name is required.");
      if (!form.cardNumber.trim()) throw new Error("Card number is required.");
      if (!form.grade.trim()) throw new Error("Grade is required.");

      let frontPath: string | null = null;
      let backPath: string | null = null;

      if (frontFile) {
        frontPath = await uploadCertImage(accessToken, certNumber, "front", frontFile);
      }
      if (backFile) {
        backPath = await uploadCertImage(accessToken, certNumber, "back", backFile);
      }

      const record: NewCertificateInput = {
        cert_number: certNumber,
        card_name: form.cardName.trim(),
        game: form.game.trim() || "Pokémon",
        year: form.year.trim(),
        set_name: form.setName.trim(),
        card_number: form.cardNumber.trim(),
        variant: form.variant.trim(),
        grade: form.grade.trim(),
        grade_label: form.gradeLabel.trim() || form.grade.trim(),
        status: "Verified",
        certified_on: form.certifiedOn || today(),
        front_image_path: frontPath,
        back_image_path: backPath,
        notes: form.notes.trim() || null,
      };

      await upsertCertificate(accessToken, record);
      setMessage(`${certNumber} saved to the ASG Vault.`);
      setForm(freshForm());
      setFrontFile(null);
      setBackFile(null);

      const frontInput = document.getElementById("asg-front-photo") as HTMLInputElement | null;
      const backInput = document.getElementById("asg-back-photo") as HTMLInputElement | null;
      if (frontInput) frontInput.value = "";
      if (backInput) backInput.value = "";
    } catch (saveFailure) {
      setError(saveFailure instanceof Error ? saveFailure.message : "Could not save certificate.");
    } finally {
      setSaving(false);
    }
  }

  if (!accessToken) {
    return (
      <div className="bulk-import-shell bulk-login-shell">
        <div>
          <p className="eyebrow">Authorized Staff Only</p>
          <h2>ASG Vault Login</h2>
          <p>Sign in with the ASG admin account.</p>
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
          <p className="eyebrow">Quick Add</p>
          <h2>Add One Certificate</h2>
          <p>Enter the slab, attach front/back photos, then click Save & Add Next.</p>
        </div>
        <a className="button button--ghost" href="/admin/cert-entry/bulk">Bulk Import</a>
      </div>

      <form className="cert-admin-form" onSubmit={saveCertificate}>
        <div className="cert-admin-fields">
          <label>Certification Number<input required value={form.certNumber} onChange={(event) => setField("certNumber", event.target.value)} placeholder="ASG116651" /></label>
          <label>Card Name<input required value={form.cardName} onChange={(event) => setField("cardName", event.target.value)} placeholder="DACHSBUN EX" /></label>
          <label>Game<input required value={form.game} onChange={(event) => setField("game", event.target.value)} /></label>
          <label>Year<input required value={form.year} onChange={(event) => setField("year", event.target.value)} placeholder="2026" /></label>
          <label>Set<input required value={form.setName} onChange={(event) => setField("setName", event.target.value)} placeholder="CSV7 CS" /></label>
          <label>Card Number<input required value={form.cardNumber} onChange={(event) => setField("cardNumber", event.target.value)} placeholder="106/204" /></label>
          <label>Variant<input value={form.variant} onChange={(event) => setField("variant", event.target.value)} placeholder="Holo" /></label>
          <label>Grade<input required value={form.grade} onChange={(event) => setField("grade", event.target.value)} placeholder="10" /></label>
          <label>Grade Label<input required value={form.gradeLabel} onChange={(event) => setField("gradeLabel", event.target.value)} placeholder="GEM MINT" /></label>
          <label>Certified Date<input type="date" required value={form.certifiedOn} onChange={(event) => setField("certifiedOn", event.target.value)} /></label>
          <label>Front Slab Photo<input id="asg-front-photo" type="file" accept="image/jpeg,image/png,image/webp" onChange={(event) => setFrontFile(event.target.files?.[0] || null)} /></label>
          <label>Back Slab Photo<input id="asg-back-photo" type="file" accept="image/jpeg,image/png,image/webp" onChange={(event) => setBackFile(event.target.files?.[0] || null)} /></label>
        </div>

        <label className="cert-admin-notes">
          Notes
          <textarea value={form.notes} onChange={(event) => setField("notes", event.target.value)} placeholder="Optional" />
        </label>

        {error ? <p className="form-error">{error}</p> : null}
        {message ? <p className="form-message">{message}</p> : null}

        <button className="button button--primary" type="submit" disabled={saving}>
          {saving ? "Saving…" : "Save & Add Next"}
        </button>
      </form>
    </div>
  );
}
