import { PageHero } from "@/components/PageHero";
import { WaitlistForm } from "@/components/WaitlistForm";

export const metadata = { title: "Submission Waitlist" };

export default function SubmitPage() {
  return (
    <main>
      <PageHero eyebrow="Submission Access" title="Join the ASG waitlist.">
        <p>ASG is controlling intake while capacity is expanded. Join the list to receive information about public submission openings, dealer access, and supported card categories.</p>
      </PageHero>
      <section className="section section--light">
        <div className="shell waitlist-layout">
          <div>
            <p className="eyebrow eyebrow--dark">What Happens Next</p>
            <h2>No cards should be mailed until ASG confirms an opening.</h2>
            <div className="number-list">
              <article><span>01</span><div><h3>Send the request</h3><p>The form prepares an email with your contact information and collecting interest.</p></div></article>
              <article><span>02</span><div><h3>Watch for an opening</h3><p>ASG will publish or email service details, supported card types, pricing, and current terms.</p></div></article>
              <article><span>03</span><div><h3>Follow the submission instructions</h3><p>Only ship after receiving the correct form, packaging requirements, and delivery instructions.</p></div></article>
            </div>
          </div>
          <div className="form-card">
            <h2>Prepare your waitlist request</h2>
            <WaitlistForm />
          </div>
        </div>
      </section>
    </main>
  );
}
