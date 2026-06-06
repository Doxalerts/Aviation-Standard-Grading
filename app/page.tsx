export default function Home() {
  return (
    <main className="site-shell">
      <nav className="nav">
        <a className="brand" href="#top" aria-label="Aviation Standard Grading home">
          <span className="brand-mark">ASG</span>
          <span className="brand-text">Aviation Standard Grading</span>
        </a>

        <div className="nav-links">
          <a href="#process">Process</a>
          <a href="#slabs">Slabs</a>
          <a href="#pricing">Pricing</a>
          <a href="/cert">Cert Lookup</a>
          <a href="#waitlist">Waitlist</a>
        </div>
      </nav>

      <section id="top" className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Aviation discipline. Collector-grade presentation.</p>
          <h1>Precision card grading built like a flight standard.</h1>
          <p className="hero-text">
            Aviation Standard Grading brings a clean, consistent, and documented
            inspection mindset to collectible cards — designed for collectors,
            sellers, and slabs that deserve a premium presentation.
          </p>

          <div className="status-card">
            <span className="status-dot" />
            <div>
              <strong>Submission intake is currently paused.</strong>
              <p>
                ASG is not accepting new public submissions while we work through
                current volume and prepare the next intake window.
              </p>
            </div>
          </div>

          <div className="hero-actions">
            <a className="button primary" href="/cert">Search a Cert</a>
            <a className="button secondary" href="#waitlist">Join Waitlist</a>
          </div>
        </div>

        <div className="hero-panel" aria-label="ASG slab showcase">
          <div className="scan-line" />
          <div className="slab-card">
            <div className="slab-label">
              <span>ASG</span>
              <strong>PRISTINE 10</strong>
            </div>
            <div className="card-window">
              <span>Featured Slab</span>
            </div>
            <div className="cert-strip">CERTIFIED · VERIFIED · ARCHIVED</div>
          </div>
        </div>
      </section>

      <section className="trust-strip">
        <div>
          <strong>Consistent inspection</strong>
          <span>Centering · Surface · Corners · Edges</span>
        </div>
        <div>
          <strong>Premium slab display</strong>
          <span>Clean labels with a collector-first look</span>
        </div>
        <div>
          <strong>Online verification</strong>
          <span>Cert lookup and organized records</span>
        </div>
      </section>

      <section id="process" className="section split">
        <div>
          <p className="eyebrow">The ASG standard</p>
          <h2>Built from aviation-level discipline.</h2>
        </div>

        <div className="feature-grid">
          <article>
            <span>01</span>
            <h3>Pre-flight Review</h3>
            <p>
              Every card starts with a controlled visual check for condition,
              presentation, and obvious defects before detailed review.
            </p>
          </article>

          <article>
            <span>02</span>
            <h3>Precision Inspection</h3>
            <p>
              Surface, corners, edges, centering, print quality, and overall eye
              appeal are reviewed with consistency in mind.
            </p>
          </article>

          <article>
            <span>03</span>
            <h3>Slab & Archive</h3>
            <p>
              Cards are sealed, labeled, documented, and prepared for cert lookup
              so collectors can verify the slab record.
            </p>
          </article>
        </div>
      </section>

      <section id="slabs" className="section showcase">
        <div className="section-header">
          <p className="eyebrow">Slab showcase</p>
          <h2>Clean. Premium. Display-ready.</h2>
          <p>
            ASG slabs are designed to feel official without looking loud. The goal:
            sharp label presence, strong contrast, and a vault-style collector feel.
          </p>
        </div>

        <div className="showcase-grid">
          <div className="mock-slab gold">
            <div className="mock-label">ASG · GOLD STANDARD</div>
            <div className="mock-card">Card Image</div>
          </div>

          <div className="mock-slab navy">
            <div className="mock-label">ASG · AIR COMMAND</div>
            <div className="mock-card">Card Image</div>
          </div>

          <div className="mock-slab silver">
            <div className="mock-label">ASG · VAULT VERIFIED</div>
            <div className="mock-card">Card Image</div>
          </div>
        </div>
      </section>

      <section id="pricing" className="section pricing">
        <div className="section-header">
          <p className="eyebrow">Pricing</p>
          <h2>Simple grading options.</h2>
          <p>
            Public intake is paused right now. These options show the current ASG
            pricing structure for future availability.
          </p>
        </div>

        <div className="pricing-grid">
          <article className="price-card">
            <span>Bulk Grading</span>
            <h3>
              $8 <small>/ card</small>
            </h3>
            <p>Estimated turnaround: 4–6 weeks once intake is active.</p>
          </article>

          <article className="price-card featured">
            <span>Priority Express</span>
            <h3>
              $12 <small>/ card</small>
            </h3>
            <p>Estimated turnaround: 2–3 weeks once intake is active.</p>
          </article>
        </div>
      </section>

      <section id="waitlist" className="section waitlist">
        <div>
          <p className="eyebrow">Stay ready</p>
          <h2>Join the next ASG intake window.</h2>
          <p>
            Submissions are paused while ASG works through current demand. When the
            next opening is available, waitlist collectors will be prioritized.
          </p>
        </div>

        <form className="waitlist-form" name="asg-waitlist">
          <label>
            Name
            <input type="text" name="name" placeholder="Your name" />
          </label>

          <label>
            Email
            <input type="email" name="email" placeholder="you@example.com" />
          </label>

          <button type="submit">Request Waitlist Access</button>

          <p>
            No personal email address is displayed publicly.
          </p>
        </form>
      </section>

      <footer className="footer">
        <strong>Aviation Standard Grading</strong>
        <span>Tulsa, Oklahoma · Certification lookup available online</span>
      </footer>
    </main>
  );
}
