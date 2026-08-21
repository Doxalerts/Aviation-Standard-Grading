import Link from "next/link";
import { PageHero } from "@/components/PageHero";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <main>
      <PageHero eyebrow="Contact ASG" title="Talk to the grading team.">
        <p>Use email for certification questions, dealer inquiries, submission issues, and general support. Include the certification or submission number whenever one exists.</p>
      </PageHero>
      <section className="section section--light">
        <div className="shell contact-grid">
          <article className="contact-primary">
            <p className="eyebrow eyebrow--dark">ASG Support Email</p>
            <h2>info@aviationstandardgrading.com</h2>
            <p>For the fastest review, use a clear subject line and attach sharp front-and-back photos when asking about a holder or certification record.</p>
            <a className="button button--primary" href="mailto:info@aviationstandardgrading.com">Email ASG Support</a>
          </article>
          <div className="contact-topics">
            <article><h2>Certification issue</h2><p>Include the full cert number, photos of the front and back of the slab, and a description of the mismatch.</p></article>
            <article><h2>Dealer inquiry</h2><p>Include expected monthly volume, card categories, average submission size, and your business name.</p></article>
            <article><h2>Submission support</h2><p>Include the submitter name, tracking number, and submission number when available.</p></article>
          </div>
        </div>
      </section>
      <section className="section section--dark">
        <div className="shell response-note">
          <div><p className="eyebrow">Before Sending</p><h2>Never email passwords or full payment-card details.</h2></div>
          <p>ASG support should not request your account password. Sensitive shipping, payment, or identity information should only be provided through an approved secure process when submissions open.</p>
        </div>
      </section>
      <section className="section section--light compact-cta">
        <div className="shell compact-cta__inner"><div><h2>Looking for submission access?</h2><p>The waitlist is the best place to start.</p></div><Link className="button button--dark" href="/submit">Join Waitlist</Link></div>
      </section>
    </main>
  );
}
