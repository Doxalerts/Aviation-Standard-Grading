import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";

export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <main>
      <PageHero eyebrow="About ASG" title="A grading company shaped by inspection discipline.">
        <p>Aviation Standard Grading was created around a simple belief: collectible cards deserve the same respect for procedure, consistency, and traceability found in high-accountability technical work.</p>
      </PageHero>
      <section className="section section--light">
        <div className="shell about-grid">
          <div>
            <p className="eyebrow eyebrow--dark">Why Aviation?</p>
            <h2>Because precision is a habit.</h2>
            <p className="large-copy">Aviation maintenance depends on controlled procedures, careful observation, accurate documentation, and the willingness to stop when something does not look right. Those principles translate naturally to grading.</p>
            <p>ASG does not claim that cards and aircraft are the same. The connection is the mindset: inspect the actual object, follow a defined sequence, record identity correctly, and never let speed replace judgment.</p>
          </div>
          <div className="media-frame about-image">
            <Image src="/asg-hero-tech.png" alt="ASG precision inspection environment" fill sizes="(max-width: 900px) 100vw, 50vw" />
          </div>
        </div>
      </section>
      <section className="section section--dark">
        <div className="shell values-grid">
          <article><span>01</span><h2>Precision</h2><p>Use appropriate tools and repeatable inspection conditions to see the card clearly.</p></article>
          <article><span>02</span><h2>Integrity</h2><p>Assign the grade supported by the card, even when a different result would be easier or more popular.</p></article>
          <article><span>03</span><h2>Traceability</h2><p>Connect the physical holder, label data, cert number, and online record into one verifiable identity.</p></article>
          <article><span>04</span><h2>Improvement</h2><p>Review difficult cards, recurring defects, and process failures so the system becomes stronger over time.</p></article>
        </div>
      </section>
      <section className="section section--blue">
        <div className="shell centered-callout">
          <p className="eyebrow">Build With Us</p>
          <h2>ASG is expanding carefully—not recklessly.</h2>
          <p>Collectors, dealers, and hobby businesses can join the waitlist or contact ASG about future grading access.</p>
          <div className="button-row button-row--center"><Link className="button button--light" href="/submit">Join Waitlist</Link><Link className="button button--outline" href="/contact">Contact ASG</Link></div>
        </div>
      </section>
    </main>
  );
}
