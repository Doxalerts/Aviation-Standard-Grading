export default function Home() {
  return (
    <main className="sag-page">
      <style>{`
        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          background: #020811;
          color: #f7f3eb;
          font-family: Arial, Helvetica, sans-serif;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .sag-page {
          min-height: 100vh;
          background:
            radial-gradient(circle at 72% 18%, rgba(201, 154, 74, 0.18), transparent 28%),
            radial-gradient(circle at 18% 20%, rgba(48, 100, 142, 0.2), transparent 32%),
            linear-gradient(180deg, #020811 0%, #06111e 52%, #020811 100%);
        }

        .nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          padding: 26px 5%;
          border-bottom: 1px solid rgba(201, 154, 74, 0.35);
          background: rgba(2, 8, 17, 0.94);
          position: sticky;
          top: 0;
          z-index: 50;
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .logo {
          width: 72px;
          height: 56px;
          border: 2px solid #c99a4a;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #f0c777;
          font-weight: 900;
          letter-spacing: 1px;
          background: linear-gradient(135deg, rgba(201,154,74,0.18), rgba(255,255,255,0.04));
          box-shadow: 0 0 24px rgba(201,154,74,0.18);
        }

        .brand-title {
          font-size: 23px;
          line-height: 1;
          letter-spacing: 5px;
          font-weight: 900;
        }

        .brand-title span {
          display: block;
          font-size: 13px;
          letter-spacing: 4px;
          margin-top: 4px;
        }

        .nav-links {
          display: flex;
          gap: 28px;
          align-items: center;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 2px;
          font-weight: 800;
        }

        .nav-links a:hover {
          color: #f0c777;
        }

        .nav-button {
          border: 1px solid #c99a4a;
          padding: 13px 22px;
          border-radius: 5px;
          text-transform: uppercase;
          letter-spacing: 2px;
          font-size: 12px;
          font-weight: 900;
        }

        .hero {
          position: relative;
          min-height: 720px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          padding: 70px 5% 50px;
          overflow: hidden;
        }

        .hero:before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            linear-gradient(90deg, rgba(2,8,17,1) 0%, rgba(2,8,17,0.86) 42%, rgba(2,8,17,0.48) 100%),
            radial-gradient(circle at 78% 44%, rgba(255,255,255,0.13), transparent 24%),
            linear-gradient(135deg, #06111e, #020811);
          z-index: 0;
        }

        .hero > * {
          position: relative;
          z-index: 1;
        }

        .eyebrow {
          color: #f0c777;
          font-size: 16px;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 18px;
        }

        h1 {
          margin: 0 0 28px;
          font-size: clamp(48px, 6vw, 86px);
          line-height: 0.98;
          text-transform: uppercase;
          letter-spacing: 3px;
        }

        .wing-line {
          display: flex;
          align-items: center;
          gap: 18px;
          color: #f0c777;
          max-width: 420px;
          margin-bottom: 28px;
        }

        .wing-line:before,
        .wing-line:after {
          content: "";
          flex: 1;
          height: 1px;
          background: #c99a4a;
        }

        .hero-text {
          max-width: 560px;
          color: #d7dde3;
          font-size: 16px;
          line-height: 1.75;
          margin-bottom: 24px;
        }

        .notice {
          max-width: 520px;
          display: flex;
          gap: 16px;
          padding: 18px 20px;
          border: 1px solid rgba(201,154,74,0.48);
          border-radius: 6px;
          background: rgba(2,8,17,0.72);
          margin-bottom: 26px;
        }

        .notice-icon {
          width: 30px;
          height: 30px;
          border: 1px solid #f0c777;
          color: #f0c777;
          border-radius: 999px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          font-weight: 900;
        }

        .notice strong {
          color: #f0c777;
          display: block;
          margin-bottom: 4px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
        }

        .button {
          display: inline-block;
          border: 1px solid #c99a4a;
          border-radius: 5px;
          padding: 15px 32px;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          font-weight: 900;
        }

        .button.gold {
          background: linear-gradient(135deg, #8f6427, #e1b96f, #8f6427);
          color: white;
        }

        .slab-stage {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .slab {
          width: min(360px, 86vw);
          padding: 18px;
          border: 4px solid rgba(255,255,255,0.42);
          border-radius: 30px;
          background: linear-gradient(180deg, rgba(255,255,255,0.22), rgba(255,255,255,0.07));
          box-shadow:
            0 40px 90px rgba(0,0,0,0.65),
            inset 0 0 22px rgba(255,255,255,0.22);
        }

        .slab-inner {
          border: 1px solid rgba(255,255,255,0.28);
          border-radius: 20px;
          background: rgba(2,8,17,0.58);
          padding: 13px;
        }

        .label {
          display: grid;
          grid-template-columns: 1fr 72px;
          gap: 10px;
          background: #05080c;
          border: 1px solid rgba(255,255,255,0.28);
          padding: 11px;
          margin-bottom: 15px;
        }

        .label small {
          display: block;
          color: #f0c777;
          font-size: 9px;
          letter-spacing: 1.4px;
          margin-bottom: 8px;
        }

        .label h3 {
          margin: 0;
          font-size: 12px;
          line-height: 1.35;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .grade {
          border: 1px solid rgba(255,255,255,0.34);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          font-weight: 900;
        }

        .grade b {
          font-size: 42px;
          line-height: 1;
        }

        .grade span {
          font-size: 9px;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .card {
          min-height: 320px;
          border-radius: 12px;
          border: 8px solid #d88034;
          background:
            radial-gradient(circle at 50% 38%, #f8c45d, transparent 18%),
            radial-gradient(circle at 48% 40%, #e96238, transparent 25%),
            linear-gradient(135deg, #1f7fb7, #ef9c42 55%, #7c2516);
          padding: 14px;
          color: #111;
          box-shadow: inset 0 0 0 3px rgba(0,0,0,0.35);
        }

        .card-title {
          display: flex;
          justify-content: space-between;
          background: rgba(255,255,255,0.75);
          border-radius: 999px;
          padding: 5px 10px;
          font-size: 14px;
          font-weight: 900;
        }

        .fire {
          height: 178px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 78px;
          filter: drop-shadow(0 10px 8px rgba(0,0,0,0.5));
        }

        .attack {
          background: rgba(255,255,255,0.62);
          border-radius: 8px;
          padding: 8px;
          margin-top: 8px;
          font-size: 12px;
          font-weight: 900;
        }

        .trust {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          border-top: 1px solid rgba(201,154,74,0.35);
          border-bottom: 1px solid rgba(201,154,74,0.35);
          background: rgba(4,15,27,0.92);
        }

        .trust-card {
          padding: 38px 28px;
          text-align: center;
          border-right: 1px solid rgba(201,154,74,0.35);
        }

        .trust-card:last-child {
          border-right: none;
        }

        .trust-card h3 {
          margin: 0 0 10px;
          color: #f0c777;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .trust-card p {
          margin: 0 auto;
          max-width: 260px;
          color: #b9c1c8;
          font-size: 14px;
        }

        .split {
          display: grid;
          grid-template-columns: 1fr 1.1fr;
          border-bottom: 1px solid rgba(201,154,74,0.35);
        }

        .section {
          padding: 58px 5%;
        }

        .section.right {
          border-left: 1px solid rgba(201,154,74,0.35);
        }

        .section-kicker {
          color: #f0c777;
          text-transform: uppercase;
          letter-spacing: 2px;
          font-weight: 900;
          margin-bottom: 8px;
        }

        h2 {
          margin: 0 0 18px;
          font-size: 30px;
          line-height: 1.15;
          text-transform: uppercase;
          letter-spacing: 1.5px;
        }

        .section p {
          color: #d4dae0;
          line-height: 1.65;
        }

        .metrics {
          margin-top: 24px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          border: 1px solid rgba(255,255,255,0.14);
          border-radius: 8px;
          overflow: hidden;
        }

        .metric {
          min-height: 112px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          border-right: 1px solid rgba(255,255,255,0.12);
          border-bottom: 1px solid rgba(255,255,255,0.12);
          text-transform: uppercase;
          letter-spacing: 1px;
          font-weight: 900;
          font-size: 13px;
        }

        .metric:nth-child(3),
        .metric:nth-child(6) {
          border-right: none;
        }

        .metric:nth-child(n+4) {
          border-bottom: none;
        }

        .steps {
          display: grid;
          gap: 0;
        }

        .step {
          display: grid;
          grid-template-columns: 58px 1fr;
          gap: 16px;
          border-bottom: 1px solid rgba(255,255,255,0.12);
          padding: 14px 0;
        }

        .step:last-child {
          border-bottom: none;
        }

        .num {
          color: #c99a4a;
          font-size: 30px;
          font-weight: 900;
        }

        .step h3 {
          margin: 0 0 4px;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-size: 15px;
        }

        .step p {
          margin: 0;
          color: #b9c1c8;
          font-size: 13px;
        }

        .pricing-cert {
          display: grid;
          grid-template-columns: 1fr 1.1fr;
          border-bottom: 1px solid rgba(201,154,74,0.35);
        }

        table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 20px;
          border: 1px solid rgba(201,154,74,0.35);
          overflow: hidden;
        }

        th, td {
          padding: 16px;
          border-bottom: 1px solid rgba(255,255,255,0.12);
          border-right: 1px solid rgba(255,255,255,0.1);
          text-align: left;
        }

        th {
          color: #f0c777;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-size: 12px;
        }

        td {
          text-transform: uppercase;
          letter-spacing: 1px;
          font-size: 14px;
        }

        .cert-box {
          display: flex;
          max-width: 560px;
          margin-top: 18px;
        }

        .cert-box input {
          flex: 1;
          background: rgba(0,0,0,0.28);
          border: 1px solid rgba(255,255,255,0.18);
          color: white;
          padding: 15px;
          border-radius: 5px 0 0 5px;
          font-size: 14px;
        }

        .cert-box button {
          border: 1px solid #c99a4a;
          background: linear-gradient(135deg, #8f6427, #e1b96f);
          color: white;
          padding: 0 24px;
          border-radius: 0 5px 5px 0;
          text-transform: uppercase;
          font-weight: 900;
          letter-spacing: 1px;
        }

        .cert-result {
          margin-top: 18px;
          border: 1px solid rgba(255,255,255,0.18);
          background: rgba(0,0,0,0.24);
          padding: 16px;
          border-radius: 6px;
          max-width: 560px;
        }

        .verified {
          color: #23c26b;
          font-weight: 900;
          font-size: 12px;
          text-transform: uppercase;
        }

        .waitlist {
          margin: 28px 5%;
          border: 1px solid rgba(201,154,74,0.4);
          background: rgba(7,20,33,0.75);
          border-radius: 8px;
          padding: 26px;
          display: grid;
          grid-template-columns: 1fr 1.6fr;
          gap: 26px;
          align-items: center;
        }

        .waitlist h2 {
          margin-bottom: 8px;
        }

        .wait-form {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }

        .wait-form input {
          background: rgba(0,0,0,0.28);
          border: 1px solid rgba(255,255,255,0.18);
          color: white;
          padding: 14px;
          border-radius: 5px;
        }

        .wait-form button {
          border: 1px solid #c99a4a;
          background: linear-gradient(135deg, #8f6427, #e1b96f);
          color: white;
          border-radius: 5px;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        footer {
          border-top: 1px solid rgba(201,154,74,0.35);
          padding: 34px 5%;
          text-align: center;
          color: #b9c1c8;
        }

        @media (max-width: 1000px) {
          .nav {
            flex-direction: column;
          }

          .nav-links {
            flex-wrap: wrap;
            justify-content: center;
          }

          .hero,
          .split,
          .pricing-cert,
          .waitlist {
            grid-template-columns: 1fr;
          }

          .section.right {
            border-left: none;
            border-top: 1px solid rgba(201,154,74,0.35);
          }

          .trust {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 620px) {
          .brand-title {
            font-size: 18px;
          }

          .brand-title span {
            font-size: 11px;
          }

          .hero {
            padding-top: 44px;
          }

          h1 {
            font-size: 44px;
          }

          .trust,
          .metrics,
          .wait-form {
            grid-template-columns: 1fr;
          }

          .trust-card {
            border-right: none;
            border-bottom: 1px solid rgba(201,154,74,0.35);
          }

          .cert-box {
            flex-direction: column;
          }

          .cert-box input,
          .cert-box button {
            border-radius: 5px;
          }

          .cert-box button {
            padding: 14px;
            margin-top: 10px;
          }
        }
      `}</style>

      <header className="nav">
        <a href="#" className="brand">
          <div className="logo">SAG</div>
          <div className="brand-title">
            STANDARD
            <span>AVIATION GRADING</span>
          </div>
        </a>

        <nav className="nav-links">
          <a href="#standard">The Standard</a>
          <a href="#process">Process</a>
          <a href="#pricing">Pricing</a>
          <a href="#cert">Cert Lookup</a>
          <a href="#waitlist">Waitlist</a>
        </nav>

        <a href="#cert" className="nav-button">Search Cert</a>
      </header>

      <section className="hero">
        <div>
          <div className="eyebrow">Precision Card Grading</div>

          <h1>
            Built on
            <br />
            Aviation Discipline.
          </h1>

          <div className="wing-line">✈</div>

          <p className="hero-text">
            Standard Aviation Grading was created for collectors who want their cards inspected,
            sealed, and presented with a higher level of care. Our process is focused on consistency,
            documentation, presentation, and trust.
          </p>

          <div className="notice">
            <div className="notice-icon">!</div>
            <div>
              <strong>Submissions are currently paused</strong>
              <span>while we complete existing volume and prepare for the next intake window.</span>
            </div>
          </div>

          <div className="buttons">
            <a className="button gold" href="#cert">Search a Cert</a>
            <a className="button" href="#waitlist">Join the Waitlist</a>
          </div>
        </div>

        <div className="slab-stage">
          <div className="slab">
            <div className="slab-inner">
              <div className="label">
                <div>
                  <small>✈ STANDARD AVIATION GRADING</small>
                  <h3>
                    2023 Pokémon
                    <br />
                    Charizard ex
                    <br />
                    Cert #000128
                  </h3>
                </div>

                <div className="grade">
                  <b>10</b>
                  <span>Pristine</span>
                </div>
              </div>

              <div className="card">
                <div className="card-title">
                  <span>Charizard ex</span>
                  <span>330</span>
                </div>

                <div className="fire">🔥</div>

                <div className="attack">Brave Wing — 60+</div>
                <div className="attack">Explosive Vortex — 330</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="trust">
        <div className="trust-card">
          <h3>Inspection</h3>
          <p>Detailed card review across major grading categories.</p>
        </div>

        <div className="trust-card">
          <h3>Protection</h3>
          <p>Cards are sealed in clean, durable slabs for long-term preservation.</p>
        </div>

        <div className="trust-card">
          <h3>Certification</h3>
          <p>Every slab receives a unique cert record that can be verified online.</p>
        </div>

        <div className="trust-card">
          <h3>Consistency</h3>
          <p>A grading approach inspired by aviation-level discipline and standards.</p>
        </div>
      </section>

      <section className="split">
        <div id="standard" className="section">
          <div className="section-kicker">The Standard</div>
          <h2>Built Around Inspection, Not Hype.</h2>

          <p>
            Every card deserves a careful review. Our grading process is designed around the same
            mindset used in aviation: slow down, inspect clearly, document the result, and protect
            the final product.
          </p>

          <div className="metrics">
            <div className="metric">Centering</div>
            <div className="metric">Surface</div>
            <div className="metric">Corners</div>
            <div className="metric">Edges</div>
            <div className="metric">Print Quality</div>
            <div className="metric">Eye Appeal</div>
          </div>
        </div>

        <div id="process" className="section right">
          <div className="section-kicker">The Process</div>
          <h2>The SAG Grading Process</h2>

          <div className="steps">
            <div className="step">
              <div className="num">01</div>
              <div>
                <h3>Pre-Flight Review</h3>
                <p>Initial inspection for condition, presentation, and obvious defects.</p>
              </div>
            </div>

            <div className="step">
              <div className="num">02</div>
              <div>
                <h3>Precision Inspection</h3>
                <p>Detailed review of surface, corners, edges, centering, and print quality.</p>
              </div>
            </div>

            <div className="step">
              <div className="num">03</div>
              <div>
                <h3>Grade Assignment</h3>
                <p>Final grade assigned based on the card’s full condition profile.</p>
              </div>
            </div>

            <div className="step">
              <div className="num">04</div>
              <div>
                <h3>Slab & Seal</h3>
                <p>Card sealed with a professional Standard Aviation Grading label.</p>
              </div>
            </div>

            <div className="step">
              <div className="num">05</div>
              <div>
                <h3>Cert Archive</h3>
                <p>Online record created for cert lookup.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pricing-cert">
        <div id="pricing" className="section">
          <div className="section-kicker">Current Pricing</div>
          <h2>Public Submissions Paused</h2>

          <table>
            <thead>
              <tr>
                <th>Tier</th>
                <th>Price</th>
                <th>Turnaround</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Bulk Grading</td>
                <td>$8 / Card</td>
                <td>4–6 Weeks</td>
              </tr>

              <tr>
                <td>Priority Express</td>
                <td>$12 / Card</td>
                <td>2–3 Weeks</td>
              </tr>
            </tbody>
          </table>

          <p>Turnaround estimates apply once intake is active.</p>
        </div>

        <div id="cert" className="section right">
          <div className="section-kicker">Verify a Cert</div>
          <h2>Cert Lookup</h2>

          <p>Enter your certification number to verify the slab record.</p>

          <div className="cert-box">
            <input placeholder="Enter cert number" />
            <button>Search Cert</button>
          </div>

          <div className="cert-result">
            <strong>Cert #000128</strong> <span className="verified">● Verified</span>
            <p>2023 Pokémon Charizard ex</p>
            <p>Grade: PRISTINE 10</p>
            <p>Date Graded: June 10, 2026</p>
          </div>
        </div>
      </section>

      <section id="waitlist" className="waitlist">
        <div>
          <h2>Be First When Submissions Reopen</h2>
          <p>Join the waitlist and be notified as soon as a new intake opens.</p>
        </div>

        <form className="wait-form">
          <input placeholder="Full Name" />
          <input placeholder="Email Address" />
          <input placeholder="Interested in grading..." />
          <button type="button">Join Waitlist</button>
        </form>
      </section>

      <footer>
        © 2026 Standard Aviation Grading. All rights reserved.
      </footer>
    </main>
  );
}
