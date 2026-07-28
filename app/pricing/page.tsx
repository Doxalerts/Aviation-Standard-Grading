import Link from "next/link";
import { PageHero } from "@/components/PageHero";

const services = [
  {
    name: "Bulk",
    price: "$8",
    unit: "per card",
    turnaround: "Estimated 4–6 weeks",
    description: "Best for collectors and dealers submitting larger groups of standard-size cards.",
    features: ["10-card minimum", "Standard ASG holder", "Online cert record", "Final-grade label"]
  },
  {
    name: "Priority Express",
    price: "$12",
    unit: "per card",
    turnaround: "Estimated 2–3 weeks",
    description: "Faster handling for smaller submissions that need priority through the ASG workflow.",
    features: ["No large bulk minimum", "Priority queue", "Standard ASG holder", "Online cert record"],
    featured: true
  }
];

export const metadata = { title: "Pricing" };

export default function PricingPage() {
  return (
    <main>
      <PageHero eyebrow="Services & Pricing" title="Straightforward grading without the maze.">
        <p>Simple service levels, clear per-card pricing, and no manufactured declared-value tiers. Final availability and current turnaround are confirmed when a submission opening is announced.</p>
      </PageHero>
      <section className="section section--light">
        <div className="shell pricing-grid">
          {services.map((service) => (
            <article className={`price-card ${service.featured ? "price-card--featured" : ""}`} key={service.name}>
              {service.featured ? <span className="price-card__flag">Most flexible</span> : null}
              <p className="eyebrow eyebrow--dark">{service.name}</p>
              <div className="price"><strong>{service.price}</strong><span>{service.unit}</span></div>
              <p className="price-card__turnaround">{service.turnaround}</p>
              <p>{service.description}</p>
              <ul>{service.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
              <Link className={`button ${service.featured ? "button--primary" : "button--dark"}`} href="/submit">Join Waitlist</Link>
            </article>
          ))}
        </div>
        <div className="shell fees-grid">
          <article><h2>Return shipping</h2><p>Charged separately based on package size, insurance, destination, and selected carrier service.</p></article>
          <article><h2>Insurance</h2><p>Submitters are responsible for selecting appropriate inbound coverage. Return coverage is quoted with shipping.</p></article>
          <article><h2>Oversized or unusual cards</h2><p>Not included in standard pricing unless ASG confirms holder compatibility before submission.</p></article>
        </div>
      </section>
      <section className="section section--dark">
        <div className="shell faq-layout">
          <div><p className="eyebrow">Pricing FAQ</p><h2>Before you submit.</h2></div>
          <div className="faq-list">
            <details><summary>Are submissions open right now?</summary><p>Broad public submissions are currently managed through opening announcements and the waitlist. This prevents more volume from entering the system than ASG can inspect responsibly.</p></details>
            <details><summary>Is the turnaround guaranteed?</summary><p>No. Turnaround ranges are estimates from confirmed receipt and can change with volume, research requirements, or cards needing additional review.</p></details>
            <details><summary>Do ungraded cards receive a refund?</summary><p>Eligibility and research work still require handling. The specific fee treatment for cards returned ungraded will be stated in the submission terms for each opening.</p></details>
            <details><summary>Can dealers request volume pricing?</summary><p>Dealer and high-volume arrangements may be reviewed separately. Use the contact page and include expected monthly volume.</p></details>
          </div>
        </div>
      </section>
    </main>
  );
}
