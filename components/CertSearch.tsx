"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export function CertSearch({ compact = false }: { compact?: boolean }) {
  const router = useRouter();
  const [cert, setCert] = useState("");
  const [error, setError] = useState("");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const clean = cert.trim().replace(/^#/, "");
    if (!clean) {
      setError("Enter a certification number.");
      return;
    }
    setError("");
    router.push(`/cert/${encodeURIComponent(clean)}`);
  }

  return (
    <form className={`cert-search ${compact ? "cert-search--compact" : ""}`} onSubmit={submit}>
      <label htmlFor={compact ? "cert-compact" : "cert-main"}>Certification number</label>
      <div className="cert-search__row">
        <input
          id={compact ? "cert-compact" : "cert-main"}
          value={cert}
          onChange={(event) => setCert(event.target.value)}
          placeholder="Example: ASG-000001"
          autoComplete="off"
        />
        <button className="button button--primary" type="submit">Verify Cert</button>
      </div>
      {error ? <p className="form-error" role="alert">{error}</p> : null}
    </form>
  );
}
