import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { CertSearch } from "@/components/CertSearch";
import { normalizeCert } from "@/lib/certs";
import {
  fetchCertificateByNumber,
  getPublicCertImageUrl
} from "@/lib/supabaseRest";

type PageProps = {
  params: Promise<{ certNumber: string }>;
};

async function getRecord(certNumber: string) {
  try {
    return await fetchCertificateByNumber(certNumber);
  } catch (error) {
    console.error("ASG certificate lookup error", error);
    return null;
  }
}

export async function generateMetadata({
  params
}: PageProps): Promise<Metadata> {
  const { certNumber } = await params;
  const record = await getRecord(certNumber);

  return {
    title: record
      ? `${record.cert_number} — ${record.card_name}`
      : "Certification Not Found",
    robots: record
      ? { index: true, follow: true }
      : { index: false, follow: true }
  };
}

export default async function CertRecordPage({ params }: PageProps) {
  const { certNumber } = await params;
  const record = await getRecord(certNumber);
  const searched = normalizeCert(certNumber);

  if (!record) {
    return (
      <main className="record-page">
        <section className="shell record-not-found">
          <span className="record-status record-status--error">
            No record found
          </span>

          <h1>We could not verify “{searched}”.</h1>

          <p>
            Check the certification number on the label and try again.
          </p>

          <CertSearch />

          <Link className="text-link text-link--light" href="/contact">
            Report a certification issue <span>→</span>
          </Link>
        </section>
      </main>
    );
  }

  const frontImage = getPublicCertImageUrl(record.front_image_path);
  const backImage = getPublicCertImageUrl(record.back_image_path);

  return (
    <main className="record-page">
      <section className="shell record-heading">
        <Link href="/cert" className="back-link">
          ← New certification search
        </Link>

        <span className="record-status">
          <i /> ASG {record.status}
        </span>

        <p className="eyebrow">
          Certification {record.cert_number}
        </p>

        <h1>{record.card_name}</h1>

        <p>
          {record.year} · {record.set_name}
          {record.variant ? ` · ${record.variant}` : ""}
        </p>
      </section>

      <section className="shell record-grid">
        <div className="record-images">
          <div className="record-image-panel">
            <p className="record-image-label">Front</p>

            <div className="record-image">
              {frontImage ? (
                <Image
                  src={frontImage}
                  alt={`${record.card_name} ASG slab front`}
                  width={760}
                  height={1000}
                  priority
                />
              ) : (
                <p>Front slab image pending.</p>
              )}
            </div>
          </div>

          <div className="record-image-panel">
            <p className="record-image-label">Back</p>

            <div className="record-image">
              {backImage ? (
                <Image
                  src={backImage}
                  alt={`${record.card_name} ASG slab back`}
                  width={760}
                  height={1000}
                />
              ) : (
                <p>Back slab image pending.</p>
              )}
            </div>
          </div>
        </div>

        <div className="record-data">
          <div className="record-grade">
            <strong>{record.grade}</strong>
            <span>{record.grade_label}</span>
          </div>

          <dl>
            <div>
              <dt>Certification</dt>
              <dd>{record.cert_number}</dd>
            </div>

            <div>
              <dt>Card</dt>
              <dd>{record.card_name}</dd>
            </div>

            <div>
              <dt>Game</dt>
              <dd>{record.game}</dd>
            </div>

            <div>
              <dt>Year</dt>
              <dd>{record.year}</dd>
            </div>

            <div>
              <dt>Set</dt>
              <dd>{record.set_name}</dd>
            </div>

            <div>
              <dt>Card number</dt>
              <dd>{record.card_number}</dd>
            </div>

            <div>
              <dt>Variant</dt>
              <dd>{record.variant || "—"}</dd>
            </div>

            <div>
              <dt>Certified</dt>
              <dd>{record.certified_on}</dd>
            </div>

            <div>
              <dt>Record status</dt>
              <dd>{record.status}</dd>
            </div>
          </dl>

          {record.notes ? (
            <p className="record-note">{record.notes}</p>
          ) : null}
        </div>
      </section>

      <section className="shell authenticity-note">
        <h2>Verification guidance</h2>

        <p>
          This page verifies that the displayed certification record exists
          in the ASG Vault. Compare the certification number, card details,
          grade, and slab images to the physical holder.
        </p>
      </section>
    </main>
  );
}
