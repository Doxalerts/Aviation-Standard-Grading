import { CertEntryForm } from "@/components/CertEntryForm";

export const metadata = {
  title: "ASG Bulk Cert Import"
};

export default function BulkCertEntryPage() {
  return (
    <main className="record-page">
      <section className="shell cert-admin-page">
        <p className="eyebrow">ASG Internal Tool</p>
        <h1>Bulk Certificate Import</h1>
        <p className="cert-admin-intro">
          Upload a CSV and matching slab images to load large batches into the ASG Vault.
        </p>
        <CertEntryForm />
      </section>
    </main>
  );
}
