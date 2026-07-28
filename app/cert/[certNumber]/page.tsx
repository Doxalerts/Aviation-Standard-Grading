import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { CertSearch } from "@/components/CertSearch";
import { findCertification, normalizeCert } from "@/lib/certs";

type PageProps = { params: Promise<{ certNumber: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { certNumber } = await params;
  const record = findCertification(certNumber);
  return {
    title: record ? `${record.certNumber} — ${record.cardName}` : "Certification Not Found",
    robots: record ? { index: true, follow: true } : { index: false, follow: true }
  };
}

export default async function CertRecordPage({ params }: PageProps) {
  const { certNumber } = await params;
  const record = findCertification(certNumber);
  const searched = normalizeCert(certNumber);

  if (!record) {
    return (
      <main className="record-page">
        <section className="shell record-not-found">
          <span className="record-status record-status--error">No record found</span>
          <h1>We could not verify “{searched}”.</h1>
          <p>Check the label and try again. Include the ASG prefix when it appears on the holder.</p>
          <CertSearch />
          <Link className="text-link text-link--light" href="/contact">Report a certification issue <span>→</span></Link>
        </section>
      </main>
    );
  }

  return (
    <main className="record-page">
      <section className="shell record-heading">
        <Link href="/cert" className="back-link">← New certification search</Link>
        <span className="record-status"><i /> ASG {record.status}</span>
        <p className="eyebrow">Certification {record.certNumber}</p>
        <h1>{record.cardName}</h1>
        <p>{record.year} · {record.setName} · {record.variant}</p>
      </section>
      <section className="shell record-grid">
        <div className="record-image">
          <Image src={record.image} alt={`${record.cardName} in ASG holder`} width={760} height={1000} priority />
        </div>
        <div className="record-data">
          <div className="record-grade"><strong>{record.grade}</strong><span>{record.gradeLabel}</span></div>
          <dl>
            <div><dt>Certification</dt><dd>{record.certNumber}</dd></div>
            <div><dt>Card</dt><dd>{record.cardName}</dd></div>
            <div><dt>Game</dt><dd>{record.game}</dd></div>
            <div><dt>Year</dt><dd>{record.year}</dd></div>
            <div><dt>Set</dt><dd>{record.setName}</dd></div>
            <div><dt>Card number</dt><dd>{record.cardNumber}</dd></div>
            <div><dt>Variant</dt><dd>{record.variant}</dd></div>
            <div><dt>Certified</dt><dd>{record.certifiedOn}</dd></div>
            <div><dt>Record status</dt><dd>{record.status}</dd></div>
          </dl>
          {record.notes ? <p className="record-note">{record.notes}</p> : null}
        </div>
      </section>
      <section className="shell authenticity-note">
        <h2>Verification guidance</h2>
        <p>This page verifies that the displayed certification record exists in the ASG Vault. Always compare every listed detail to the physical holder and inspect the holder for signs of alteration or tampering.</p>
      </section>
    </main>
  );
}
