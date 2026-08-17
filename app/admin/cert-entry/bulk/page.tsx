import { BulkPasteImport } from "@/components/BulkPasteImport";

export const metadata = {
  title: "ASG Fast Bulk Import"
};

export default function BulkCertEntryPage() {
  return (
    <main className="record-page">
      <section className="shell cert-admin-page">
        <p className="eyebrow">ASG Internal Tool</p>
        <h1>Fast Bulk Import</h1>
        <p className="cert-admin-intro">
          Paste certificate rows directly, select the matching slab photos, and import the batch into the ASG Vault.
        </p>
        <BulkPasteImport />
      </section>
    </main>
  );
}
