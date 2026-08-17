import { QuickCertEntry } from "@/components/QuickCertEntry";

export const metadata = {
  title: "ASG Quick Cert Entry"
};

export default function CertEntryPage() {
  return (
    <main className="record-page">
      <section className="shell cert-admin-page">
        <p className="eyebrow">ASG Internal Tool</p>
        <h1>Certificate Entry</h1>
        <p className="cert-admin-intro">
          Add one slab at a time with front and back photos, or switch to Bulk Import for large batches.
        </p>

        <QuickCertEntry />
      </section>
    </main>
  );
}
