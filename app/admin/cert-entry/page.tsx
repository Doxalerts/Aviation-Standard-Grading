import { CertEntryForm } from "@/components/CertEntryForm";

export const metadata = {
  title: "ASG Cert Entry"
};

export default function CertEntryPage() {
  return (
    <main className="record-page">
      <section className="shell cert-admin-page">
        <p className="eyebrow">ASG Internal Tool</p>
        <h1>Certificate Entry</h1>
        <p className="cert-admin-intro">
          Enter the certified card information below. This tool generates
          the exact ASG certificate-library record for the Vault.
        </p>

        <CertEntryForm />
      </section>
    </main>
  );
}
