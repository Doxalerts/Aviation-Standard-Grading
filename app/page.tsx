from pathlib import Path
import zipfile, textwrap, os, json

base = Path("/mnt/data/asg-website-redo")
app = base / "app"
app.mkdir(parents=True, exist_ok=True)

page_tsx = r'''export default function Home() {
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
            <h3>$8 <small>/ card</small></h3>
            <p>Estimated turnaround: 4–6 weeks once intake is active.</p>
          </article>

          <article className="price-card featured">
            <span>Priority Express</span>
            <h3>$12 <small>/ card</small></h3>
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
            This form is ready for hookup to your form provider or backend. No
            personal email address is displayed publicly.
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
'''

globals_css = r''':root {
  --bg: #050814;
  --panel: #0b1224;
  --panel-soft: #101a31;
  --text: #f6f8ff;
  --muted: #aab6cf;
  --line: rgba(255, 255, 255, 0.12);
  --gold: #d8b25c;
  --silver: #dce5f5;
  --blue: #6ea8ff;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  background:
    radial-gradient(circle at top left, rgba(110, 168, 255, 0.18), transparent 34rem),
    radial-gradient(circle at top right, rgba(216, 178, 92, 0.14), transparent 28rem),
    var(--bg);
  color: var(--text);
  font-family: Arial, Helvetica, sans-serif;
}

a {
  color: inherit;
  text-decoration: none;
}

.site-shell {
  width: min(1180px, calc(100% - 32px));
  margin: 0 auto;
}

.nav {
  position: sticky;
  top: 0;
  z-index: 20;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
  padding: 18px 0;
  backdrop-filter: blur(18px);
}

.brand {
  display: flex;
  align-items: center;
  gap: 12px;
}

.brand-mark {
  display: grid;
  place-items: center;
  width: 48px;
  height: 48px;
  border: 1px solid var(--line);
  border-radius: 14px;
  background: linear-gradient(145deg, rgba(216,178,92,.25), rgba(110,168,255,.08));
  color: var(--gold);
  font-weight: 900;
  letter-spacing: .08em;
}

.brand-text {
  color: var(--silver);
  font-weight: 700;
}

.nav-links {
  display: flex;
  gap: 18px;
  color: var(--muted);
  font-size: 14px;
}

.nav-links a:hover {
  color: var(--text);
}

.hero {
  display: grid;
  grid-template-columns: 1.05fr .95fr;
  gap: 56px;
  align-items: center;
  min-height: 720px;
  padding: 56px 0 80px;
}

.eyebrow {
  margin: 0 0 16px;
  color: var(--gold);
  font-size: 13px;
  font-weight: 800;
  letter-spacing: .16em;
  text-transform: uppercase;
}

h1,
h2,
h3,
p {
  margin-top: 0;
}

h1 {
  max-width: 760px;
  margin-bottom: 22px;
  font-size: clamp(44px, 7vw, 84px);
  line-height: .95;
  letter-spacing: -0.07em;
}

h2 {
  margin-bottom: 14px;
  font-size: clamp(34px, 5vw, 58px);
  line-height: 1;
  letter-spacing: -0.05em;
}

h3 {
  margin-bottom: 10px;
  font-size: 22px;
}

.hero-text {
  max-width: 650px;
  color: var(--muted);
  font-size: 19px;
  line-height: 1.7;
}

.status-card {
  display: flex;
  gap: 16px;
  max-width: 640px;
  margin: 28px 0;
  padding: 18px;
  border: 1px solid rgba(216, 178, 92, .34);
  border-radius: 22px;
  background: rgba(216, 178, 92, .08);
}

.status-card p {
  margin: 6px 0 0;
  color: var(--muted);
  line-height: 1.55;
}

.status-dot {
  flex: 0 0 auto;
  width: 13px;
  height: 13px;
  margin-top: 4px;
  border-radius: 999px;
  background: var(--gold);
  box-shadow: 0 0 28px rgba(216, 178, 92, .8);
}

.hero-actions,
.section-header {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
}

.button,
.waitlist-form button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  min-height: 48px;
  padding: 0 20px;
  border: 1px solid var(--line);
  border-radius: 999px;
  font-weight: 800;
}

.primary,
.waitlist-form button {
  background: linear-gradient(135deg, var(--gold), #fff0b8);
  color: #121017;
  border: 0;
}

.secondary {
  color: var(--silver);
  background: rgba(255,255,255,.06);
}

.hero-panel {
  position: relative;
  min-height: 540px;
  border: 1px solid var(--line);
  border-radius: 38px;
  overflow: hidden;
  background:
    linear-gradient(145deg, rgba(255,255,255,.10), transparent),
    radial-gradient(circle at center, rgba(110,168,255,.18), transparent 18rem),
    var(--panel);
  box-shadow: 0 40px 140px rgba(0,0,0,.45);
}

.scan-line {
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 18px,
    rgba(255,255,255,.035) 19px
  );
}

.slab-card {
  position: absolute;
  inset: 56px 72px;
  padding: 18px;
  border: 1px solid rgba(255,255,255,.22);
  border-radius: 26px;
  background: rgba(255,255,255,.07);
  transform: rotate(-4deg);
}

.slab-label {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  height: 72px;
  padding: 0 18px;
  border-radius: 16px;
  background: linear-gradient(135deg, #111827, #26324b);
  color: var(--silver);
}

.slab-label span {
  color: var(--gold);
  font-weight: 900;
  font-size: 28px;
}

.card-window {
  display: grid;
  place-items: center;
  height: 330px;
  margin: 20px 0;
  border-radius: 18px;
  background:
    linear-gradient(135deg, rgba(216,178,92,.16), rgba(110,168,255,.16)),
    #0e1628;
  color: var(--muted);
  font-weight: 800;
  letter-spacing: .08em;
  text-transform: uppercase;
}

.cert-strip {
  color: var(--muted);
  font-size: 12px;
  letter-spacing: .22em;
  text-align: center;
}

.trust-strip,
.section,
.footer {
  border: 1px solid var(--line);
  border-radius: 30px;
  background: rgba(11,18,36,.72);
  box-shadow: 0 24px 80px rgba(0,0,0,.24);
}

.trust-strip {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  overflow: hidden;
}

.trust-strip div {
  padding: 24px;
  background: rgba(255,255,255,.025);
}

.trust-strip strong,
.trust-strip span {
  display: block;
}

.trust-strip span {
  margin-top: 8px;
  color: var(--muted);
}

.section {
  margin-top: 28px;
  padding: clamp(28px, 5vw, 56px);
}

.split {
  display: grid;
  grid-template-columns: .8fr 1.2fr;
  gap: 40px;
}

.feature-grid,
.pricing-grid,
.showcase-grid {
  display: grid;
  gap: 18px;
}

.feature-grid {
  grid-template-columns: repeat(3, 1fr);
}

.feature-grid article,
.price-card,
.waitlist-form {
  padding: 24px;
  border: 1px solid var(--line);
  border-radius: 24px;
  background: rgba(255,255,255,.045);
}

.feature-grid span {
  color: var(--gold);
  font-weight: 900;
}

.feature-grid p,
.section-header p,
.price-card p,
.waitlist p,
.waitlist-form p {
  color: var(--muted);
  line-height: 1.65;
}

.showcase .section-header,
.pricing .section-header {
  display: block;
  max-width: 760px;
  margin-bottom: 28px;
}

.showcase-grid {
  grid-template-columns: repeat(3, 1fr);
}

.mock-slab {
  min-height: 360px;
  padding: 18px;
  border: 1px solid var(--line);
  border-radius: 28px;
  background: var(--panel-soft);
}

.mock-label {
  padding: 16px;
  border-radius: 16px;
  font-weight: 900;
  letter-spacing: .08em;
}

.mock-card {
  display: grid;
  place-items: center;
  height: 250px;
  margin-top: 16px;
  border-radius: 20px;
  color: var(--muted);
  background: rgba(0,0,0,.24);
}

.gold .mock-label {
  background: linear-gradient(135deg, rgba(216,178,92,.95), rgba(255,244,199,.95));
  color: #101018;
}

.navy .mock-label {
  background: linear-gradient(135deg, #111827, #33415f);
}

.silver .mock-label {
  background: linear-gradient(135deg, #dce5f5, #7d8ba5);
  color: #101018;
}

.pricing-grid {
  grid-template-columns: repeat(2, 1fr);
}

.price-card h3 {
  font-size: 48px;
  letter-spacing: -0.05em;
}

.price-card small {
  color: var(--muted);
  font-size: 18px;
}

.price-card.featured {
  border-color: rgba(216,178,92,.44);
  background: rgba(216,178,92,.08);
}

.waitlist {
  display: grid;
  grid-template-columns: .9fr 1.1fr;
  gap: 36px;
  align-items: start;
}

.waitlist-form {
  display: grid;
  gap: 14px;
}

.waitlist-form label {
  display: grid;
  gap: 8px;
  color: var(--silver);
  font-weight: 700;
}

.waitlist-form input {
  width: 100%;
  min-height: 48px;
  padding: 0 14px;
  border: 1px solid var(--line);
  border-radius: 14px;
  background: rgba(0,0,0,.22);
  color: var(--text);
  outline: none;
}

.waitlist-form input:focus {
  border-color: rgba(216,178,92,.7);
}

.waitlist-form p {
  margin-bottom: 0;
  font-size: 13px;
}

.footer {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin: 28px 0 40px;
  padding: 22px 26px;
  color: var(--muted);
}

.footer strong {
  color: var(--silver);
}

@media (max-width: 900px) {
  .nav {
    align-items: flex-start;
    flex-direction: column;
  }

  .nav-links {
    flex-wrap: wrap;
  }

  .hero,
  .split,
  .waitlist,
  .trust-strip,
  .feature-grid,
  .showcase-grid,
  .pricing-grid {
    grid-template-columns: 1fr;
  }

  .hero {
    min-height: auto;
    padding-top: 34px;
  }

  .hero-panel {
    min-height: 460px;
  }

  .slab-card {
    inset: 40px 36px;
  }

  .footer {
    flex-direction: column;
  }
}
'''

layout_tsx = r'''import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ASG | Aviation Standard Grading",
  description:
    "Aviation Standard Grading provides precision-focused collectible card grading, slab presentation, and online certification lookup.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
'''

readme = r'''# ASG Website Redo

This package contains replacement files for a Next.js App Router site.

## Files included

- `app/page.tsx`
- `app/globals.css`
- `app/layout.tsx`

## What changed

- Removed the public personal email from the website.
- Added a clear "submission intake is currently paused" message.
- Kept ASG pricing: Bulk $8/card and Priority Express $12/card.
- Kept cert lookup linked to `/cert`.
- Added a premium dark aviation/vault-style design.
- Added a waitlist section without displaying an email address publicly.

## How to install

1. Open your website project.
2. Replace your existing `app/page.tsx`, `app/globals.css`, and `app/layout.tsx` with these files.
3. Run:
   ```bash
   npm run dev
