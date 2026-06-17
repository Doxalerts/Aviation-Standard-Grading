<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Standard Aviation Grading</title>

  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    :root {
      --bg: #020811;
      --bg2: #071421;
      --panel: rgba(7, 20, 33, 0.86);
      --panel2: rgba(11, 29, 46, 0.88);
      --gold: #c99a4a;
      --gold2: #f0c777;
      --text: #f6f3ee;
      --muted: #b9c1c8;
      --line: rgba(201, 154, 74, 0.35);
      --whiteLine: rgba(255,255,255,0.12);
      --green: #23c26b;
    }

    body {
      font-family: Arial, Helvetica, sans-serif;
      background:
        radial-gradient(circle at 70% 15%, rgba(201,154,74,0.12), transparent 28%),
        radial-gradient(circle at 20% 20%, rgba(48,100,142,0.18), transparent 30%),
        linear-gradient(180deg, #020811 0%, #06111e 48%, #020811 100%);
      color: var(--text);
      line-height: 1.55;
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    .site {
      width: 100%;
      overflow: hidden;
    }

    .nav {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 28px 5%;
      border-bottom: 1px solid rgba(201,154,74,0.2);
      background: rgba(2,8,17,0.86);
      backdrop-filter: blur(12px);
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
      border: 2px solid var(--gold);
      border-radius: 14px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--gold2);
      font-weight: 900;
      letter-spacing: 1px;
      position: relative;
      background: linear-gradient(135deg, rgba(201,154,74,0.15), rgba(255,255,255,0.04));
    }

    .logo:before,
    .logo:after {
      content: "";
      position: absolute;
      width: 32px;
      height: 2px;
      background: var(--gold);
      top: 22px;
    }

    .logo:before {
      right: 64px;
      transform: rotate(20deg);
    }

    .logo:after {
      left: 64px;
      transform: rotate(-20deg);
    }

    .brand h1 {
      font-size: 24px;
      line-height: 1.05;
      letter-spacing: 5px;
      font-weight: 800;
    }

    .brand span {
      display: block;
      font-size: 14px;
      letter-spacing: 4px;
      color: var(--text);
    }

    .navlinks {
      display: flex;
      gap: 32px;
      align-items: center;
      font-size: 12px;
      letter-spacing: 2px;
      text-transform: uppercase;
    }

    .navlinks a {
      color: var(--text);
      opacity: 0.9;
    }

    .navlinks a:hover {
      color: var(--gold2);
    }

    .nav-btn {
      border: 1px solid var(--gold);
      padding: 13px 24px;
      border-radius: 4px;
      letter-spacing: 2px;
      font-weight: 700;
      font-size: 12px;
    }

    .hero {
      min-height: 680px;
      display: grid;
      grid-template-columns: 1fr 1.05fr;
      gap: 30px;
      padding: 70px 5% 40px;
      position: relative;
    }

    .hero:after {
      content: "";
      position: absolute;
      inset: 0;
      background:
        linear-gradient(90deg, rgba(2,8,17,1) 0%, rgba(2,8,17,0.88) 38%, rgba(2,8,17,0.45) 100%),
        url("https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&w=1600&q=80");
      background-size: cover;
      background-position: center right;
      opacity: 0.55;
      z-index: -2;
    }

    .hero:before {
      content: "";
      position: absolute;
      inset: 0;
      background: radial-gradient(circle at 65% 45%, rgba(255,255,255,0.1), transparent 22%);
      z-index: -1;
    }

    .eyebrow {
      color: var(--gold2);
      letter-spacing: 2px;
      text-transform: uppercase;
      font-size: 16px;
      margin-bottom: 16px;
    }

    .hero h2 {
      font-size: clamp(44px, 5.8vw, 82px);
      line-height: 0.98;
      text-transform: uppercase;
      letter-spacing: 3px;
      margin-bottom: 26px;
    }

    .divider {
      display: flex;
      align-items: center;
      gap: 18px;
      color: var(--gold2);
      margin-bottom: 28px;
      max-width: 400px;
    }

    .divider:before,
    .divider:after {
      content: "";
      height: 1px;
      background: var(--gold);
      flex: 1;
    }

    .hero p {
      color: #d9dee3;
      max-width: 530px;
      font-size: 16px;
      margin-bottom: 24px;
    }

    .notice {
      border: 1px solid var(--line);
      background: rgba(2,8,17,0.7);
      padding: 18px 20px;
      max-width: 500px;
      display: flex;
      gap: 15px;
      margin-bottom: 26px;
      border-radius: 5px;
    }

    .notice strong {
      color: var(--gold2);
      display: block;
      letter-spacing: 1px;
      text-transform: uppercase;
      margin-bottom: 4px;
    }

    .notice-icon {
      width: 28px;
      height: 28px;
      border: 1px solid var(--gold2);
      color: var(--gold2);
      border-radius: 999px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      font-weight: 700;
    }

    .btns {
      display: flex;
      gap: 18px;
      flex-wrap: wrap;
    }

    .btn {
      border: 1px solid var(--gold);
      padding: 15px 34px;
      border-radius: 4px;
      background: transparent;
      color: var(--text);
      text-transform: uppercase;
      letter-spacing: 1.5px;
      font-weight: 800;
      cursor: pointer;
      transition: 0.2s ease;
    }

    .btn.primary {
      background: linear-gradient(135deg, #8f6427, #e1b96f, #8f6427);
      color: #fff;
    }

    .btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 15px 30px rgba(0,0,0,0.25);
    }

    .slab-stage {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 540px;
    }

    .slab {
      width: min(350px, 80vw);
      background: linear-gradient(180deg, rgba(255,255,255,0.24), rgba(255,255,255,0.08));
      border: 4px solid rgba(255,255,255,0.42);
      border-radius: 28px;
      padding: 18px;
      box-shadow:
        0 35px 80px rgba(0,0,0,0.6),
        inset 0 0 20px rgba(255,255,255,0.22);
      backdrop-filter: blur(3px);
      position: relative;
    }

    .slab-inner {
      border: 1px solid rgba(255,255,255,0.25);
      border-radius: 18px;
      padding: 12px;
      background: rgba(2,8,17,0.5);
    }

    .label {
      border: 1px solid rgba(255,255,255,0.28);
      background: #05080c;
      padding: 10px;
      display: grid;
      grid-template-columns: 1fr 68px;
      gap: 10px;
      margin-bottom: 14px;
    }

    .label small {
      color: var(--gold2);
      letter-spacing: 1.4px;
      font-size: 9px;
      display: block;
      margin-bottom: 8px;
    }

    .label h3 {
      font-size: 12px;
      line-height: 1.3;
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    .grade {
      border: 1px solid rgba(255,255,255,0.35);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      font-weight: 900;
    }

    .grade b {
      font-size: 38px;
      line-height: 1;
    }

    .grade span {
      font-size: 9px;
      letter-spacing: 1px;
    }

    .card-art {
      height: 315px;
      border-radius: 10px;
      border: 8px solid #d88034;
      background:
        radial-gradient(circle at 50% 35%, #f8c45d, transparent 18%),
        radial-gradient(circle at 48% 40%, #e96238, transparent 24%),
        linear-gradient(135deg, #1f7fb7, #ef9c42 55%, #7c2516);
      padding: 12px;
      color: #111;
      box-shadow: inset 0 0 0 3px rgba(0,0,0,0.35);
    }

    .card-title {
      background: rgba(255,255,255,0.72);
      padding: 4px 7px;
      border-radius: 10px;
      color: #111;
      display: flex;
      justify-content: space-between;
      font-weight: 900;
      font-size: 14px;
    }

    .card-creature {
      height: 180px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 76px;
      filter: drop-shadow(0 10px 8px rgba(0,0,0,0.5));
    }

    .attack {
      color: #111;
      background: rgba(255,255,255,0.55);
      margin-top: 8px;
      padding: 7px;
      border-radius: 8px;
      font-size: 12px;
      font-weight: 800;
    }

    .trust {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      border-top: 1px solid var(--line);
      border-bottom: 1px solid var(--line);
      background: rgba(4, 15, 27, 0.92);
    }

    .trust-card {
      padding: 38px 5%;
      text-align: center;
      border-right: 1px solid var(--line);
    }

    .trust-card:last-child {
      border-right: none;
    }

    .trust-card .icon {
      font-size: 34px;
      color: var(--gold2);
      margin-bottom: 13px;
    }

    .trust-card h3 {
      font-size: 16px;
      text-transform: uppercase;
      letter-spacing: 1px;
      margin-bottom: 10px;
    }

    .trust-card p {
      color: var(--muted);
      max-width: 260px;
      margin: 0 auto;
      font-size: 14px;
    }

    .split {
      display: grid;
      grid-template-columns: 1fr 1.1fr;
      border-bottom: 1px solid var(--line);
    }

    .section {
      padding: 58px 5%;
      background: rgba(2,8,17,0.34);
    }

    .section + .section {
      border-left: 1px solid var(--line);
    }

    .section h4 {
      color: var(--gold2);
      letter-spacing: 2px;
      text-transform: uppercase;
      margin-bottom: 8px;
      font-size: 14px;
    }

    .section h2 {
      text-transform: uppercase;
      letter-spacing: 1.5px;
      font-size: 28px;
      line-height: 1.15;
      margin-bottom: 20px;
    }

    .section p {
      color: #d4dae0;
      max-width: 580px;
      margin-bottom: 22px;
    }

    .grid-six {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      border: 1px solid var(--whiteLine);
      border-radius: 7px;
      overflow: hidden;
      max-width: 520px;
    }

    .metric {
      min-height: 120px;
      border-right: 1px solid var(--whiteLine);
      border-bottom: 1px solid var(--whiteLine);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 9px;
      text-align: center;
      text-transform: uppercase;
      font-size: 13px;
      letter-spacing: 1px;
    }

    .metric:nth-child(3),
    .metric:nth-child(6) {
      border-right: none;
    }

    .metric:nth-child(n+4) {
      border-bottom: none;
    }

    .metric .mini {
      color: var(--gold2);
      font-size: 32px;
    }

    .steps {
      display: flex;
      flex-direction: column;
    }

    .step {
      display: grid;
      grid-template-columns: 58px 42px 1fr;
      gap: 15px;
      padding: 13px 0;
      border-bottom: 1px solid rgba(255,255,255,0.12);
      align-items: start;
    }

    .step:last-child {
      border-bottom: none;
    }

    .num {
      color: var(--gold);
      font-size: 28px;
      font-weight: 800;
      letter-spacing: 2px;
    }

    .step-icon {
      color: var(--gold2);
      font-size: 24px;
    }

    .step h3 {
      text-transform: uppercase;
      letter-spacing: 1px;
      font-size: 14px;
    }

    .step p {
      margin: 0;
      font-size: 13px;
      color: var(--muted);
    }

    .pricing-cert {
      display: grid;
      grid-template-columns: 1fr 1.1fr;
      border-bottom: 1px solid var(--line);
    }

    table {
      width: 100%;
      border-collapse: collapse;
      overflow: hidden;
      border: 1px solid rgba(201,154,74,0.25);
      border-radius: 6px;
      margin-top: 16px;
      color: var(--text);
    }

    th,
    td {
      padding: 15px 16px;
      border-bottom: 1px solid rgba(255,255,255,0.1);
      border-right: 1px solid rgba(255,255,255,0.08);
      font-size: 14px;
    }

    th {
      color: var(--gold2);
      text-transform: uppercase;
      font-size: 12px;
      letter-spacing: 1px;
    }

    td {
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    tr:last-child td {
      border-bottom: none;
    }

    .cert-form {
      display: flex;
      margin-top: 18px;
      max-width: 560px;
    }

    .cert-form input {
      flex: 1;
      background: rgba(0,0,0,0.25);
      border: 1px solid rgba(255,255,255,0.18);
      color: var(--text);
      padding: 15px;
      border-radius: 5px 0 0 5px;
      outline: none;
    }

    .cert-form button {
      border-radius: 0 5px 5px 0;
      border: 1px solid var(--gold);
      background: linear-gradient(135deg, #8f6427, #e1b96f);
      color: #fff;
      padding: 0 24px;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 1px;
      cursor: pointer;
    }

    .cert-result {
      display: none;
      margin-top: 18px;
      border: 1px solid rgba(255,255,255,0.18);
      background: rgba(0,0,0,0.24);
      padding: 12px;
      border-radius: 6px;
      max-width: 560px;
      gap: 16px;
      align-items: center;
    }

    .cert-thumb {
      width: 74px;
      height: 92px;
      background: linear-gradient(135deg, #1f7fb7, #ef9c42 55%, #7c2516);
      border: 4px solid #d88034;
      border-radius: 6px;
      flex-shrink: 0;
    }

    .verified {
      color: var(--green);
      font-size: 12px;
      font-weight: 900;
      letter-spacing: 1px;
      margin-left: 8px;
    }

    .waitlist {
      margin: 26px 5%;
      border: 1px solid var(--line);
      background: rgba(7,20,33,0.75);
      border-radius: 6px;
      padding: 22px;
      display: grid;
      grid-template-columns: 1.2fr 1.8fr;
      gap: 24px;
      align-items: center;
    }

    .waitlist h2 {
      font-size: 24px;
      letter-spacing: 2px;
      text-transform: uppercase;
      margin-bottom: 5px;
    }

    .waitlist p {
      color: var(--muted);
    }

    .wait-form {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 12px;
    }

    .wait-form input,
    .wait-form select {
      background: rgba(0,0,0,0.25);
      border: 1px solid rgba(255,255,255,0.16);
      color: var(--text);
      padding: 14px;
      border-radius: 5px;
      outline: none;
    }

    .wait-form select {
      grid-column: span 1;
    }

    .wait-form button {
      border: 1px solid var(--gold);
      background: linear-gradient(135deg, #8f6427, #e1b96f);
      color: #fff;
      border-radius: 5px;
      font-weight: 900;
      text-transform: uppercase;
      letter-spacing: 1px;
      cursor: pointer;
    }

    footer {
      padding: 34px 5%;
      border-top: 1px solid var(--line);
      display: grid;
      grid-template-columns: 1.2fr 1fr 1fr 1.2fr;
      gap: 30px;
      background: rgba(2,8,17,0.92);
    }

    footer h3 {
      color: var(--text);
      margin-bottom: 12px;
      letter-spacing: 2px;
      text-transform: uppercase;
    }

    footer p,
    footer a {
      color: var(--muted);
      display: block;
      margin-bottom: 8px;
      font-size: 14px;
    }

    .stamp {
      border: 2px solid var(--gold);
      color: var(--gold2);
      width: 140px;
      height: 140px;
      border-radius: 22px;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      text-transform: uppercase;
      font-weight: 900;
      letter-spacing: 1px;
      margin-left: auto;
    }

    .copyright {
      grid-column: 1 / -1;
      text-align: center;
      color: var(--muted);
      font-size: 13px;
      padding-top: 12px;
    }

    @media (max-width: 980px) {
      .nav {
        flex-direction: column;
        gap: 20px;
      }

      .navlinks {
        flex-wrap: wrap;
        justify-content: center;
      }

      .hero {
        grid-template-columns: 1fr;
      }

      .slab-stage {
        min-height: auto;
      }

      .trust,
      .split,
      .pricing-cert,
      .waitlist,
      footer {
        grid-template-columns: 1fr;
      }

      .section + .section {
        border-left: none;
        border-top: 1px solid var(--line);
      }

      .trust-card {
        border-right: none;
        border-bottom: 1px solid var(--line);
      }

      .wait-form {
        grid-template-columns: 1fr;
      }

      .wait-form button {
        padding: 15px;
      }

      .stamp {
        margin-left: 0;
      }
    }

    @media (max-width: 560px) {
      .brand h1 {
        font-size: 18px;
      }

      .brand span {
        font-size: 11px;
      }

      .logo {
        width: 58px;
        height: 48px;
      }

      .navlinks {
        gap: 14px;
        font-size: 10px;
      }

      .hero {
        padding-top: 45px;
      }

      .hero h2 {
        font-size: 42px;
      }

      .grid-six {
        grid-template-columns: 1fr 1fr;
      }

      .metric:nth-child(3),
      .metric:nth-child(6) {
        border-right: 1px solid var(--whiteLine);
      }

      .metric:nth-child(2),
      .metric:nth-child(4),
      .metric:nth-child(6) {
        border-right: none;
      }

      .metric:nth-child(n+4) {
        border-bottom: 1px solid var(--whiteLine);
      }

      .metric:nth-child(n+5) {
        border-bottom: none;
      }

      .cert-form {
        flex-direction: column;
      }

      .cert-form input,
      .cert-form button {
        border-radius: 5px;
        width: 100%;
      }

      .cert-form button {
        padding: 14px;
        margin-top: 10px;
      }
    }
  </style>
</head>

<body>
  <div class="site">

    <header class="nav">
      <a href="#" class="brand">
        <div class="logo">SAG</div>
        <h1>
          STANDARD
          <span>AVIATION GRADING</span>
        </h1>
      </a>

      <nav class="navlinks">
        <a href="#home">Home</a>
        <a href="#standard">The Standard</a>
        <a href="#process">Process</a>
        <a href="#pricing">Pricing</a>
        <a href="#cert">Cert Lookup</a>
        <a href="#waitlist">Waitlist</a>
      </nav>

      <a class="nav-btn" href="#cert">Search Cert</a>
    </header>

    <main id="home" class="hero">
      <section>
        <div class="eyebrow">Precision Card Grading</div>

        <h2>Built on<br>Aviation Discipline.</h2>

        <div class="divider">✈</div>

        <p>
          Standard Aviation Grading was created for collectors who want their cards inspected,
          sealed, and presented with a higher level of care. Our process is focused on consistency,
          documentation, presentation, and trust.
        </p>

        <div class="notice">
          <div class="notice-icon">!</div>
          <div>
            <strong>Submissions are currently paused</strong>
            <span>while we complete existing volume and prepare for the next intake window.</span>
          </div>
        </div>

        <div class="btns">
          <a class="btn primary" href="#cert">Search a Cert</a>
          <a class="btn" href="#waitlist">Join the Waitlist</a>
        </div>
      </section>

      <section class="slab-stage">
        <div class="slab">
          <div class="slab-inner">
            <div class="label">
              <div>
                <small>✈ STANDARD AVIATION GRADING</small>
                <h3>2023 Pokémon<br>Charizard ex<br>Cert #000128</h3>
              </div>

              <div class="grade">
                <b>10</b>
                <span>PRISTINE</span>
              </div>
            </div>

            <div class="card-art">
              <div class="card-title">
                <span>Charizard ex</span>
                <span>330</span>
              </div>

              <div class="card-creature">🔥</div>

              <div class="attack">Brave Wing — 60+</div>
              <div class="attack">Explosive Vortex — 330</div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <section class="trust">
      <div class="trust-card">
        <div class="icon">⌕</div>
        <h3>Inspection</h3>
        <p>Detailed card review across major grading categories.</p>
      </div>

      <div class="trust-card">
        <div class="icon">⌂</div>
        <h3>Protection</h3>
        <p>Cards are sealed in clean, durable slabs for long-term preservation.</p>
      </div>

      <div class="trust-card">
        <div class="icon">▤</div>
        <h3>Certification</h3>
        <p>Every slab receives a unique cert record that can be verified online.</p>
      </div>

      <div class="trust-card">
        <div class="icon">✈</div>
        <h3>Consistency</h3>
        <p>A grading approach inspired by aviation-level discipline and standards.</p>
      </div>
    </section>

    <section class="split">
      <div id="standard" class="section">
        <h4>The Standard</h4>
        <h2>Built Around Inspection, Not Hype.</h2>

        <p>
          Every card deserves a careful review. Our grading process is designed around the same
          mindset used in aviation: slow down, inspect clearly, document the result, and protect
          the final product.
        </p>

        <div class="grid-six">
          <div class="metric">
            <div class="mini">◎</div>
            Centering
          </div>

          <div class="metric">
            <div class="mini">☷</div>
            Surface
          </div>

          <div class="metric">
            <div class="mini">⌜</div>
            Corners
          </div>

          <div class="metric">
            <div class="mini">☰</div>
            Edges
          </div>

          <div class="metric">
            <div class="mini">⊙</div>
            Print Quality
          </div>

          <div class="metric">
            <div class="mini">◉</div>
            Eye Appeal
          </div>
        </div>
      </div>

      <div id="process" class="section">
        <h4>The Process</h4>
        <h2>The SAG Grading Process</h2>

        <div class="steps">
          <div class="step">
            <div class="num">01</div>
            <div class="step-icon">⌕</div>
            <div>
              <h3>Pre-Flight Review</h3>
              <p>Each card begins with a visual check for condition, authenticity concerns, and obvious defects.</p>
            </div>
          </div>

          <div class="step">
            <div class="num">02</div>
            <div class="step-icon">▣</div>
            <div>
              <h3>Precision Inspection</h3>
              <p>The card is reviewed across centering, surface, corners, edges, and print quality.</p>
            </div>
          </div>

          <div class="step">
            <div class="num">03</div>
            <div class="step-icon">◎</div>
            <div>
              <h3>Grade Assignment</h3>
              <p>A final grade is assigned based on the card’s full condition profile.</p>
            </div>
          </div>

          <div class="step">
            <div class="num">04</div>
            <div class="step-icon">▯</div>
            <div>
              <h3>Slab & Seal</h3>
              <p>The card is placed in a clean display slab with a professional SAG label.</p>
            </div>
          </div>

          <div class="step">
            <div class="num">05</div>
            <div class="step-icon">☁</div>
            <div>
              <h3>Cert Archive</h3>
              <p>Each graded card receives a certification record so collectors can verify the slab online.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="pricing-cert">
      <div id="pricing" class="section">
        <h4>Current Pricing</h4>
        <p>Public submissions are currently paused.</p>

        <table>
          <thead>
            <tr>
              <th>Tier</th>
              <th>Price</th>
              <th>Est. Turnaround</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Bulk Grading</td>
              <td>$8 / card</td>
              <td>4 – 6 weeks</td>
            </tr>

            <tr>
              <td>Priority Express</td>
              <td>$12 / card</td>
              <td>2 – 3 weeks</td>
            </tr>
          </tbody>
        </table>

        <p style="font-size: 13px; margin-top: 14px;">
          Turnaround estimates apply once intake is active.
        </p>

        <a class="btn primary" href="#waitlist">Join the Waitlist</a>
      </div>

      <div id="cert" class="section">
        <h4>Verify a Cert</h4>
        <p>Enter your certification number to verify the slab record.</p>

        <form class="cert-form" onsubmit="verifyCert(event)">
          <input id="certInput" type="text" placeholder="Enter cert number" />
          <button type="submit">Search Cert</button>
        </form>

        <div id="certResult" class="cert-result">
          <div class="cert-thumb"></div>

          <div>
            <h3>Cert #000128 <span class="verified">● Verified</span></h3>
            <p style="margin: 4px 0;">2023 Pokémon Charizard ex</p>
            <p style="margin: 4px 0;">Grade: PRISTINE 10</p>
            <p style="margin: 4px 0;">Date Graded: June 10, 2026</p>
          </div>
        </div>
      </div>
    </section>

    <section id="waitlist" class="waitlist">
      <div>
        <h2>Be First When Submissions Reopen</h2>
        <p>Join the waitlist and be notified as soon as a new intake opens.</p>
      </div>

      <form class="wait-form" onsubmit="joinWaitlist(event)">
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email Address" required />

        <select required>
          <option value="">What are you interested in grading?</option>
          <option>Pokémon</option>
          <option>Sports Cards</option>
          <option>One Piece</option>
          <option>Yu-Gi-Oh</option>
          <option>Other TCG</option>
        </select>

        <button type="submit">Join Waitlist</button>
      </form>
    </section>

    <footer>
      <div>
        <div class="brand">
          <div class="logo">SAG</div>
          <h1>
            STANDARD
            <span>AVIATION GRADING</span>
          </h1>
        </div>
        <p style="margin-top: 18px;">Precision card grading built on aviation discipline.</p>
      </div>

      <div>
        <h3>Quick Links</h3>
        <a href="#standard">The Standard</a>
        <a href="#process">Process</a>
        <a href="#pricing">Pricing</a>
        <a href="#cert">Cert Lookup</a>
        <a href="#waitlist">Waitlist</a>
      </div>

      <div>
        <h3>Company</h3>
        <a href="#standard">About SAG</a>
        <a href="#standard">Standards</a>
        <a href="#waitlist">Contact</a>
      </div>

      <div>
        <div class="stamp">
          Inspected<br>
          Sealed<br>
          Certified<br>
          Archived
        </div>
      </div>

      <div class="copyright">
        © 2026 Standard Aviation Grading. All rights reserved.
      </div>
    </footer>
  </div>

  <script>
    function verifyCert(event) {
      event.preventDefault();

      const input = document.getElementById("certInput");
      const result = document.getElementById("certResult");

      if (!input.value.trim()) {
        alert("Please enter a cert number.");
        return;
      }

      result.style.display = "flex";
    }

    function joinWaitlist(event) {
      event.preventDefault();
      alert("Waitlist form submitted. Connect this form to your email/database when the site goes live.");
    }
  </script>
</body>
</html>
