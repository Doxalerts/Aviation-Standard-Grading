import { PageHero } from "@/components/PageHero";

const criteria = [
  ["Centering", "Border balance is measured front and back. Greater imbalance reduces the grade according to the severity and visibility of the shift."],
  ["Corners", "All corners are reviewed for whitening, rounding, compression, fraying, bends, and manufacturing defects."],
  ["Edges", "Edges are inspected for chipping, whitening, dents, rough cuts, foil lift, and other interruptions to the original finish."],
  ["Surface", "The front and back are examined for scratches, print lines, indentations, stains, creases, loss of gloss, and coating defects."]
];

const scale = [
  ["10", "Gem Mint", "Exceptional presentation with only negligible manufacturing tolerance. Strong centering and no distracting wear."],
  ["9", "Mint", "A high-end card with excellent eye appeal and only a minor flaw visible under close inspection."],
  ["8", "Near Mint–Mint", "Clean overall with a small number of light defects that do not dominate presentation."],
  ["7", "Near Mint", "Minor wear or manufacturing defects are present, but the card remains sharp and collectible."],
  ["6", "Excellent–Near Mint", "Noticeable light wear may be present across more than one grading category."],
  ["5", "Excellent", "Moderate wear is visible, while the card remains structurally sound and visually complete."],
  ["4", "Very Good–Excellent", "Multiple defects or heavier wear are present, without severe structural damage."],
  ["3", "Very Good", "Significant wear, creasing, or surface damage is visible but the card remains intact."],
  ["2", "Good", "Heavy wear and substantial defects are present, potentially including stronger creases or staining."],
  ["1", "Poor", "Severe damage, alteration, or structural compromise significantly affects the card."]
];

export const metadata = { title: "Grading Standard" };

export default function GradingPage() {
  return (
    <main>
      <PageHero eyebrow="The ASG Standard" title="A clear framework for every final grade.">
        <p>ASG evaluates the complete card, not a single flaw in isolation. The final grade reflects how centering, corners, edges, and surface combine to determine overall condition and eye appeal.</p>
      </PageHero>
      <section className="section section--light">
        <div className="shell criteria-grid">
          {criteria.map(([title, copy], index) => (
            <article className="criteria-card" key={title}>
              <span>0{index + 1}</span>
              <h2>{title}</h2>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="section section--dark">
        <div className="shell standards-layout">
          <div className="sticky-copy">
            <p className="eyebrow">Decision Method</p>
            <h2>The final grade is holistic.</h2>
            <p>
              The lowest category matters, but ASG does not reduce grading to a single automatic formula. Severity, location, visibility, manufacturing context, and total eye appeal are reviewed together.
            </p>
          </div>
          <div className="rule-list">
            <article><strong>Consistency first</strong><p>The same inspection order and condition language are used from card to card.</p></article>
            <article><strong>No hidden subgrade promise</strong><p>ASG’s public label shows the final grade. Internal observations support that grade but are not presented as separate guaranteed subgrades.</p></article>
            <article><strong>Authenticity before condition</strong><p>A card must pass identity and authenticity review before it can receive a numeric condition grade.</p></article>
            <article><strong>Alterations are disclosed</strong><p>Evidence of trimming, recoloring, restoration, cleaning, or other alteration can prevent a standard numeric grade.</p></article>
          </div>
        </div>
      </section>
      <section className="section section--light" id="scale">
        <div className="shell section-heading">
          <p className="eyebrow eyebrow--dark">1–10 Grading Scale</p>
          <h2>Condition language collectors can understand.</h2>
        </div>
        <div className="shell scale-list">
          {scale.map(([grade, label, description]) => (
            <article className="scale-row" key={grade}>
              <strong>{grade}</strong>
              <h3>{label}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
        <div className="shell disclaimer-card">
          <h2>Important grading note</h2>
          <p>These descriptions are practical standards, not a guarantee that every card with one listed characteristic will receive a particular grade. Counterfeit, altered, oversized, undersized, or otherwise ineligible cards may be returned ungraded or receive a non-numeric designation when that service is available.</p>
        </div>
      </section>
    </main>
  );
}
