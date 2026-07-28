import Image from "next/image";
import { CertSearch } from "@/components/CertSearch";
import { PageHero } from "@/components/PageHero";

export const metadata = { title: "Certification Lookup" };

export default function CertLookupPage() {
  return (
    <main>
      <PageHero eyebrow="ASG Vault" title="Verify an ASG certification.">
        <p>Enter the certification number printed on the label. The lookup accepts the full ASG number and supported numeric aliases.</p>
      </PageHero>
      <section className="section section--blue cert-lookup-section">
        <div className="shell cert-lookup-grid">
          <div className="cert-lookup-card">
            <span className="vault-status"><i /> Vault online</span>
            <h2>Search the certification database</h2>
            <p>Use the number exactly as shown on the holder whenever possible.</p>
            <CertSearch />
            <div className="example-cert"><span>Demonstration record</span><code>ASG-000001</code></div>
          </div>
          <div className="media-frame cert-vault-image">
            <Image src="/asg-vault-tech.png" alt="ASG Vault certification lookup interface" fill sizes="(max-width: 900px) 100vw, 50vw" priority />
          </div>
        </div>
      </section>
      <section className="section section--light">
        <div className="shell info-grid">
          <article><span>01</span><h2>Match the label</h2><p>Confirm the card name, year, set, number, variant, and grade shown in the online record match the physical slab.</p></article>
          <article><span>02</span><h2>Check record status</h2><p>A verified status means the cert is active in the ASG Vault. Contact ASG when a record appears inactive or inconsistent.</p></article>
          <article><span>03</span><h2>Inspect the holder</h2><p>A matching cert record does not replace physical inspection. Review the slab for tampering, label changes, or signs the card was removed.</p></article>
        </div>
      </section>
    </main>
  );
}
