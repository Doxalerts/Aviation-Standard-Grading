"use client";

import { FormEvent, useMemo, useState } from "react";

type CertFormData = {
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
  frontImage: string;
  backImage: string;
  notes: string;
};

const initialData: CertFormData = {
  certNumber: "",
  cardName: "",
  game: "Pokémon",
  year: "",
  setName: "",
  cardNumber: "",
  variant: "",
  grade: "10",
  gradeLabel: "Gem Mint",
  certifiedOn: "",
  frontImage: "",
  backImage: "",
  notes: ""
};

function escapeValue(value: string) {
  return value
    .replace(/\\/g, "\\\\")
    .replace(/"/g, '\\"');
}

function createAliases(certNumber: string) {
  const clean = certNumber
    .trim()
    .toUpperCase()
    .replace(/^ASG-?/, "");

  if (!clean) return [];

  const numeric = clean.replace(/\D/g, "");

  const aliases = new Set<string>();

  aliases.add(clean);

  if (numeric) {
    aliases.add(numeric);

    const stripped = numeric.replace(/^0+/, "");

    if (stripped) {
      aliases.add(stripped);
    }
  }

  return [...aliases];
}

export function CertEntryForm() {
  const [form, setForm] = useState<CertFormData>(initialData);
  const [copied, setCopied] = useState(false);

  function updateField(
    field: keyof CertFormData,
    value: string
  ) {
    setCopied(false);

    setForm((current) => ({
      ...current,
      [field]: value
    }));
  }

  const generatedRecord = useMemo(() => {
    const aliases = createAliases(form.certNumber);

    const lines = [
      "  {",
      `    certNumber: "${escapeValue(form.certNumber.trim().toUpperCase())}",`,
      `    aliases: [${aliases
        .map((alias) => `"${escapeValue(alias)}"`)
        .join(", ")}],`,
      `    cardName: "${escapeValue(form.cardName)}",`,
      `    game: "${escapeValue(form.game)}",`,
      `    year: "${escapeValue(form.year)}",`,
      `    setName: "${escapeValue(form.setName)}",`,
      `    cardNumber: "${escapeValue(form.cardNumber)}",`,
      `    variant: "${escapeValue(form.variant)}",`,
      `    grade: "${escapeValue(form.grade)}",`,
      `    gradeLabel: "${escapeValue(form.gradeLabel)}",`,
      `    status: "Verified",`,
      `    certifiedOn: "${escapeValue(form.certifiedOn)}",`,
      `    frontImage: "${escapeValue(form.frontImage)}",`,
      `    backImage: "${escapeValue(form.backImage)}",`
    ];

    if (form.notes.trim()) {
      lines.push(
        `    notes: "${escapeValue(form.notes)}"`
      );
    } else {
      const last = lines.length - 1;
      lines[last] = lines[last].replace(/,$/, "");
    }

    lines.push("  }");

    return lines.join("\n");
  }, [form]);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  async function copyRecord() {
    await navigator.clipboard.writeText(generatedRecord);
    setCopied(true);
  }

  function clearForm() {
    setForm(initialData);
    setCopied(false);
  }

  return (
    <div className="cert-admin-grid">
      <form className="cert-admin-form" onSubmit={submit}>
        <div className="cert-admin-fields">
          <label>
            Certification Number
            <input
              required
              value={form.certNumber}
              onChange={(event) =>
                updateField("certNumber", event.target.value)
              }
              placeholder="ASG-000002"
            />
          </label>

          <label>
            Card Name
            <input
              required
              value={form.cardName}
              onChange={(event) =>
                updateField("cardName", event.target.value)
              }
              placeholder="Victini"
            />
          </label>

          <label>
            Game
            <input
              required
              value={form.game}
              onChange={(event) =>
                updateField("game", event.target.value)
              }
            />
          </label>

          <label>
            Year
            <input
              required
              value={form.year}
              onChange={(event) =>
                updateField("year", event.target.value)
              }
              placeholder="2025"
            />
          </label>

          <label>
            Set
            <input
              required
              value={form.setName}
              onChange={(event) =>
                updateField("setName", event.target.value)
              }
              placeholder="Journey Together"
            />
          </label>

          <label>
            Card Number
            <input
              required
              value={form.cardNumber}
              onChange={(event) =>
                updateField("cardNumber", event.target.value)
              }
              placeholder="12/86"
            />
          </label>

          <label>
            Variant
            <input
              value={form.variant}
              onChange={(event) =>
                updateField("variant", event.target.value)
              }
              placeholder="Holo Rare"
            />
          </label>

          <label>
            Grade
            <input
              required
              value={form.grade}
              onChange={(event) =>
                updateField("grade", event.target.value)
              }
              placeholder="10"
            />
          </label>

          <label>
            Grade Label
            <input
              required
              value={form.gradeLabel}
              onChange={(event) =>
                updateField("gradeLabel", event.target.value)
              }
              placeholder="Gem Mint"
            />
          </label>

          <label>
            Certified Date
            <input
              type="date"
              required
              value={form.certifiedOn}
              onChange={(event) =>
                updateField("certifiedOn", event.target.value)
              }
            />
          </label>

          <label>
            Front Image Path
            <input
              required
              value={form.frontImage}
              onChange={(event) =>
                updateField("frontImage", event.target.value)
              }
              placeholder="/certs/ASG-000002-front.jpg"
            />
          </label>

          <label>
            Back Image Path
            <input
              required
              value={form.backImage}
              onChange={(event) =>
                updateField("backImage", event.target.value)
              }
              placeholder="/certs/ASG-000002-back.jpg"
            />
          </label>
        </div>

        <label className="cert-admin-notes">
          Notes
          <textarea
            value={form.notes}
            onChange={(event) =>
              updateField("notes", event.target.value)
            }
            placeholder="Optional internal/public certification note"
          />
        </label>

        <button
          className="button button--ghost"
          type="button"
          onClick={clearForm}
        >
          Clear Form
        </button>
      </form>

      <section className="cert-code-panel">
        <p className="eyebrow">Generated Record</p>

        <h2>Ready for the ASG Vault</h2>

        <p>
          Copy this record and paste it into the certificate library.
        </p>

        <pre>
          <code>{generatedRecord}</code>
        </pre>

        <button
          className="button button--primary"
          type="button"
          onClick={copyRecord}
        >
          {copied ? "Copied" : "Copy Cert Record"}
        </button>
      </section>
    </div>
  );
}
