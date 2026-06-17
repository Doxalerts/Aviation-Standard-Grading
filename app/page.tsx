export default function Home() {
  const standards = [
    { icon: "◎", label: "Centering" },
    { icon: "☷", label: "Surface" },
    { icon: "⌜", label: "Corners" },
    { icon: "☰", label: "Edges" },
    { icon: "⊙", label: "Print Quality" },
    { icon: "◉", label: "Eye Appeal" },
  ];

  const steps = [
    {
      number: "01",
      icon: "⌕",
      title: "Pre-Flight Review",
      text: "Initial inspection for condition, presentation, and obvious defects.",
    },
    {
      number: "02",
      icon: "▣",
      title: "Precision Inspection",
      text: "Detailed review of surface, corners, edges, centering, and print quality.",
    },
    {
      number: "03",
      icon: "◎",
      title: "Grade Assignment",
      text: "Final grade assigned based on the card’s full condition profile.",
    },
    {
      number: "04",
      icon: "▯",
      title: "Slab & Seal",
      text: "Card sealed with a professional Aviation Standard Grading label.",
    },
    {
      number: "05",
      icon: "☁",
      title: "Cert Archive",
      text: "Online record created so collectors can verify the slab.",
    },
  ];

  return (
    <main className="asg-site">
      <header className="asg-nav">
        <a href="#home" className="asg-brand">
          <div className="asg-logo">
            <span>ASG</span>
          </div>

          <div>
            <div className="asg-brand-main">AVIATION</div>
            <div className="asg-brand-sub">STANDARD GRADING</div>
          </div>
        </a>

        <nav className="asg-nav-links">
          <a href="#home">Home</a>
          <a href="#standard">The Standard</a>
          <a href="#process">Process</a>
          <a href="#pricing">Pricing</a>
          <a href="#cert">Cert Lookup</a>
          <a href="#waitlist">Waitlist</a>
        </nav>

        <a href="#cert" className="asg-nav-button">
          Search Cert
        </a>
      </header>

      <section id="home" className="asg-hero">
        <div className="asg-hero-bg" />

        <div className="asg-hero-copy">
          <p className="asg-kicker">Precision Card Grading</p>

          <h1>
            Built on
            <br />
            Aviation Discipline.
          </h1>

          <div className="asg-divider">
            <span>✈</span>
          </div>

          <p className="asg-hero-text">
            Aviation Standard Grading was created for collectors who want their
            cards inspected, sealed, and presented with a higher level of care.
            Our process is focused on consistency, documentation, presentation,
            and trust.
          </p>

          <div className="asg-notice">
            <div className="asg-notice-icon">!</div>
            <div>
              <strong>Submissions are currently paused</strong>
              <p>
                while we complete existing volume and prepare for the next
                intake window.
              </p>
            </div>
          </div>

          <div className="asg-buttons">
            <a href="#cert" className="asg-button asg-button-gold">
              Search a Cert
            </a>

            <a href="#waitlist" className="asg-button">
              Join the Waitlist
            </a>
          </div>
        </div>

        <div className="asg-slab-stage">
          <div className="asg-glow" />

          <div className="asg-slab">
            <div className="asg-slab-inner">
              <div className="asg-label">
                <div>
                  <small>✈ AVIATION STANDARD GRADING</small>
                  <h3>
                    2023 Pokémon
                    <br />
                    Charizard ex
                    <br />
                    Cert #000128
                  </h3>
                </div>

                <div className="asg-grade">
                  <strong>10</strong>
                  <span>Pristine</span>
                </div>
              </div>

              <div className="asg-card">
                <div className="asg-card-title">
                  <strong>Charizard ex</strong>
                  <span>330</span>
                </div>

                <div className="asg-card-fire">🔥</div>

                <div className="asg-card-attack">Brave Wing — 60+</div>
                <div className="asg-card-attack">Explosive Vortex — 330</div>
              </div>
            </div>
          </div>

          <div className="asg-platform" />
        </div>
      </section>

      <section className="asg-trust-row">
        <div>
          <div className="asg-trust-icon">⌕</div>
          <h3>Inspection</h3>
          <p>Detailed card review across major grading categories.</p>
        </div>

        <div>
          <div className="asg-trust-icon">◇</div>
          <h3>Protection</h3>
          <p>Cards are sealed in clean, durable slabs for long-term preservation.</p>
        </div>

        <div>
          <div className="asg-trust-icon">▤</div>
          <h3>Certification</h3>
          <p>Every slab receives a unique cert record that can be verified online.</p>
        </div>

        <div>
          <div className="asg-trust-icon">✈</div>
          <h3>Consistency</h3>
          <p>A grading approach inspired by aviation-level discipline.</p>
        </div>
      </section>

      <section className="asg-split">
        <div id="standard" className="asg-panel">
          <p className="asg-kicker">The Standard</p>
          <h2>Built Around Inspection, Not Hype.</h2>

          <p>
            Every card deserves a careful review. Our grading process is
            designed around the same mindset used in aviation: slow down,
            inspect clearly, document the result, and protect the final product.
          </p>

          <div className="asg-standard-grid">
            {standards.map((item) => (
              <div key={item.label}>
                <span>{item.icon}</span>
                <strong>{item.label}</strong>
              </div>
            ))}
          </div>
        </div>

        <div id="process" className="asg-panel asg-panel-border">
          <p className="asg-kicker">The Process</p>
          <h2>The ASG Grading Process</h2>

          <div className="asg-steps">
            {steps.map((step) => (
              <div className="asg-step" key={step.number}>
                <div className="asg-step-number">{step.number}</div>
                <div className="asg-step-icon">{step.icon}</div>

                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="asg-split">
        <div id="pricing" className="asg-panel">
          <p className="asg-kicker">Current Pricing</p>
          <h2>Public Submissions Paused</h2>

          <p>
            Pricing is displayed for collectors preparing for the next intake
            window.
          </p>

          <div className="asg-pricing-table">
            <div className="asg-table-head">
              <span>Tier</span>
              <span>Price</span>
              <span>Est. Turnaround</span>
            </div>

            <div className="asg-table-row">
              <span>Bulk Grading</span>
              <span>$8 / Card</span>
              <span>4–6 Weeks</span>
            </div>

            <div className="asg-table-row">
              <span>Priority Express</span>
              <span>$12 / Card</span>
              <span>2–3 Weeks</span>
            </div>
          </div>

          <small>Turnaround estimates apply once intake is active.</small>

          <br />

          <a href="#waitlist" className="asg-button asg-button-small asg-button-gold">
            Join the Waitlist
          </a>
        </div>

        <div id="cert" className="asg-panel asg-panel-border">
          <p className="asg-kicker">Verify a Cert</p>
          <h2>Cert Lookup</h2>

          <p>Enter your certification number to verify the slab record.</p>

          <div className="asg-cert-search">
            <input placeholder="Enter cert number" />
            <button>Search Cert</button>
          </div>

          <div className="asg-cert-result">
            <div className="asg-cert-thumb">🔥</div>

            <div>
              <h3>
                Cert #000128 <span>● Verified</span>
              </h3>
              <p>2023 Pokémon Charizard ex</p>
              <p>Grade: PRISTINE 10</p>
              <p>Date Graded: June 10, 2026</p>
            </div>
          </div>
        </div>
      </section>

      <section id="waitlist" className="asg-waitlist">
        <div className="asg-waitlist-copy">
          <div className="asg-waitlist-icon">✈</div>

          <div>
            <p className="asg-kicker">Waitlist</p>
            <h2>Be First When Submissions Reopen</h2>
            <p>Join the waitlist and be notified as soon as a new intake opens.</p>
          </div>
        </div>

        <form className="asg-waitlist-form">
          <input placeholder="Full Name" />
          <input placeholder="Email Address" />
          <input placeholder="What are you interested in grading?" />
          <button type="button">Join Waitlist</button>
        </form>
      </section>

      <footer className="asg-footer">
        <div className="asg-footer-brand">
          <div className="asg-logo">
            <span>ASG</span>
          </div>

          <div>
            <div className="asg-brand-main">AVIATION</div>
            <div className="asg-brand-sub">STANDARD GRADING</div>
            <p>Precision card grading built on aviation discipline.</p>
          </div>
        </div>

        <div>
          <h4>Quick Links</h4>
          <a href="#standard">The Standard</a>
          <a href="#process">Process</a>
          <a href="#pricing">Pricing</a>
          <a href="#cert">Cert Lookup</a>
          <a href="#waitlist">Waitlist</a>
        </div>

        <div>
          <h4>Company</h4>
          <a href="#standard">About ASG</a>
          <a href="#standard">Standards</a>
          <a href="#waitlist">Contact</a>
        </div>

        <div className="asg-stamp">
          Inspected
          <br />
          Sealed
          <br />
          Certified
          <br />
          Archived
        </div>

        <p className="asg-copyright">
          © 2026 Aviation Standard Grading. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
