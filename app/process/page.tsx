import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";

const stages = [
  ["01", "Submission intake", "The package is received, counted, and matched against submission details. Each card is assigned an internal identity before grading begins."],
  ["02", "Pre-screen & authentication", "Card dimensions, print characteristics, construction, and known security details are reviewed for consistency with an authentic example."],
  ["03", "Condition inspection", "The card is examined under controlled lighting and magnification. Centering, corners, edges, and surface observations are documented."],
  ["04", "Grade authorization", "The complete evidence is reviewed and a final grade is assigned. Unusual or borderline cards receive additional review."],
  ["05", "Label & encapsulation", "The authorized card data is printed, checked, and sealed with the card in a tamper-evident ASG holder."],
  ["06", "Imaging & vault record", "The cert number, card identity, grade, image, and status are added to the online ASG Vault before return shipping."]
];

export const metadata = { title: "Grading Process" };

export default function ProcessPage() {
  return (
    <main>
      <PageHero eyebrow="Inspection Workflow" title="Controlled from arrival to return.">
        <p>The ASG process is designed to preserve identity, reduce handling risk, and make every important decision traceable to a specific certification record.</p>
      </PageHero>
      <section className="section section--dark">
        <div className="shell process-image-grid">
          <div className="media-frame process-image">
            <Image src="/asg-lab-workflow.png" alt="ASG laboratory card inspection workflow" fill sizes="(max-width: 900px) 100vw, 50vw" priority />
          </div>
          <div>
            <p className="eyebrow">Handling Principles</p>
            <h2>Protect the card while evaluating the card.</h2>
            <div className="rule-list rule-list--compact">
              <article><strong>Controlled custody</strong><p>Cards remain connected to their submission and internal identity throughout the workflow.</p></article>
              <article><strong>Minimal handling</strong><p>Inspection steps are ordered to avoid unnecessary movement and contact.</p></article>
              <article><strong>Independent verification</strong><p>Card identity, label data, and final holder are checked before the certification record goes live.</p></article>
            </div>
          </div>
        </div>
      </section>
      <section className="section section--light">
        <div className="shell timeline">
          {stages.map(([number, title, copy]) => (
            <article className="timeline__item" key={number}>
              <span>{number}</span>
              <div><h2>{title}</h2><p>{copy}</p></div>
            </article>
          ))}
        </div>
      </section>
      <section className="section section--blue">
        <div className="shell centered-callout">
          <p className="eyebrow">Submission Openings</p>
          <h2>ASG is building capacity before accepting broad public volume.</h2>
          <p>Join the waitlist to receive opening information and service updates.</p>
          <Link className="button button--light" href="/submit">Join the Waitlist</Link>
        </div>
      </section>
    </main>
  );
}
