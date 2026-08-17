import { CertEntryForm } from "@/components/CertEntryForm";

export const metadata = {
  title: "ASG Vault Bulk Import"
};

export default function CertEntryPage() {
  return (
    <main className="record-page">
      <section className="shell cert-admin-page">
        <p className="eyebrow">ASG Internal Tool</p>
        <h1>Vault Import</h1>
        <p className="cert-admin-intro">
          Import certificate records and matching slab images into the ASG Vault in bulk.
        </p>

        <CertEntryForm />
      </section>
    </main>
  );
}
