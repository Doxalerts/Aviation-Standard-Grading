import Image from "next/image";
import Link from "next/link";
import { CertSearch } from "@/components/CertSearch";
import { WingMark } from "@/components/Brand";

const pillars = [
  ["01", "Repeatable inspection", "Cards are evaluated against a defined sequence for centering, edges, corners, and surface—not a grader’s mood."],
  ["02", "Evidence-led decisions", "Lighting, magnification, and measurement support the final grade while trained human review controls the outcome."],
  ["03", "Secure presentation", "Tamper-evident encapsulation and a searchable certification record protect the card and its identity."],
  ["04", "Clear accountability", "Every ASG label links the collectible to a cert number that can be checked in the ASG Vault."]
];

const steps = [
  ["01", "Intake & identity", "Submission details are matched to the physical card and assigned a controlled record."],
  ["02", "Condition analysis", "Centering, corners, edges, and surface are inspected under consistent conditions."],
  ["03", "Final grade review", "The evidence is reviewed together and the final grade is authorized."],
  ["04", "Encapsulation & vault", "The card is sealed, labeled, imaged, and connected to its online certification record."]
];

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <Image className="hero__image" src="/asg-hero-tech.png" alt="ASG graded collectible card in a precision inspection lab" fill priority sizes="100vw" />
        <div className="hero__veil" />
        <div className="hero__grid" aria-hidden="true" />
        <div className="shell hero__content">
          <div className="hero__copy">
            <p className="eyebrow">Aviation Standard Grading</p>
            <h1>Precision.<br />Integrity.<br /><span>Altitude.</span></h1>
            <p className="hero__lead">
              Collectible card grading engineered around disciplined inspection, transparent standards, and secure digital verification.
            </p>
            <div className="button-row">
              <Link className="button button--primary" href="/cert">Search a Cert</Link>
              <Link className="button button--ghost" href="/submit">Join the Waitlist</Link>
            </div>
          </div>
          <div className="hero__panel">
            <span className="status-dot" />
            <span>ASG Vault Online</span>
            <strong>Verify a certification</strong>
            <CertSearch compact />
          </div>
        </div>
      </section>

      <section className="trust-strip" aria-label="ASG service highlights">
        <div className="shell trust-strip__inner">
          <span>Defined grading standard</span>
          <span>Multi-point inspection</span>
          <span>Tamper-evident slab</span>
          <span>Online cert verification</span>
        </div>
      </section>

      <section className="section section--light">
        <div className="shell split-intro">
          <div>
            <p className="eyebrow eyebrow--dark">The ASG Standard</p>
            <h2>Built like an inspection system, not a guessing game.</h2>
          </div>
          <div>
            <p className="large-copy">
              ASG applies an aviation-inspired quality mindset to collectible cards: controlled steps, clear checkpoints, documented identity, and a final decision supported by observable evidence.
            </p>
            <Link className="text-link" href="/grading">Explore the grading standard <span>→</span></Link>
          </div>
        </div>
        <div className="shell pillar-grid">
          {pillars.map(([number, title, copy]) => (
            <article className="pillar-card" key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--dark media-section">
        <div className="shell media-grid">
          <div className="media-frame">
            <Image src="/asg-lab-workflow.png" alt="ASG cards undergoing a controlled inspection workflow" fill sizes="(max-width: 900px) 100vw, 55vw" />
          </div>
          <div className="media-copy">
            <p className="eyebrow">The Process</p>
            <h2>One card. Four controlled stages.</h2>
            <p>From intake to the final vault record, every stage exists to protect identity, consistency, and trust.</p>
            <div className="step-stack">
              {steps.map(([number, title, copy]) => (
                <div className="mini-step" key={number}>
                  <span>{number}</span>
                  <div><h3>{title}</h3><p>{copy}</p></div>
                </div>
              ))}
            </div>
            <Link className="button button--outline" href="/process">See the full process</Link>
          </div>
        </div>
      </section>

      <section className="section section--blue vault-home">
        <div className="shell media-grid media-grid--reverse">
          <div className="media-copy">
            <p className="eyebrow">ASG Vault</p>
            <h2>A slab should be verifiable from anywhere.</h2>
            <p>
              Search the certification number to confirm the card identity, declared grade, and current record status. The route works whether a collector types the full ASG number or follows the cert link directly.
            </p>
            <CertSearch />
          </div>
          <div className="media-frame media-frame--vault">
            <Image src="/asg-vault-tech.png" alt="ASG digital certification vault interface" fill sizes="(max-width: 900px) 100vw, 55vw" />
          </div>
        </div>
      </section>

      <section className="section section--light">
        <div className="shell grade-preview">
          <div className="grade-orbit" aria-hidden="true">
            <WingMark className="grade-orbit__mark" />
            <strong>10</strong>
            <span>Gem Mint</span>
          </div>
          <div>
            <p className="eyebrow eyebrow--dark">The Scale</p>
            <h2>A grade that explains the card’s condition.</h2>
            <p className="large-copy">ASG uses a 1–10 whole-number scale with condition language designed to be easy to understand and consistent to apply.</p>
            <div className="grade-bands">
              <span><strong>10</strong> Gem Mint</span>
              <span><strong>9</strong> Mint</span>
              <span><strong>8</strong> Near Mint–Mint</span>
              <span><strong>7</strong> Near Mint</span>
            </div>
            <Link className="text-link" href="/grading#scale">View the complete grading scale <span>→</span></Link>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="shell cta-band__inner">
          <div>
            <p className="eyebrow">Ready for the next opening?</p>
            <h2>Get in line for ASG submissions.</h2>
          </div>
          <Link className="button button--light" href="/submit">Join the Waitlist</Link>
        </div>
      </section>
    </main>
  );
}
