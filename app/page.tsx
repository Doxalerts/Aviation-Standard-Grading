"use client";

import { useState } from "react";

export default function Home() {
  const [cert, setCert] = useState("");
  const [result, setResult] = useState("");

  function lookupCert() {
    if (!cert.trim()) {
      setResult("Please enter a certification number.");
      return;
    }

    setResult(
      `Cert lookup request received for: ${cert}. Full database connection can be added here.`
    );
  }

  function copyEmail() {
    navigator.clipboard.writeText("contact@aviationstandardgrading.com");
    alert("ASG email copied.");
  }

  return (
    <main className="min-h-screen bg-[#050b18] text-white">
      <header className="sticky top-0 z-50 flex flex-wrap items-center justify-between border-b border-white/10 bg-[#050b18]/95 px-8 py-6">
        <div className="text-3xl font-black tracking-[0.25em] text-blue-100">
          ASG
        </div>

        <nav className="flex gap-5 text-sm text-blue-100/80">
          <a href="#about">About</a>
          <a href="#pricing">Pricing</a>
          <a href="#lookup">Cert Lookup</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="grid min-h-[85vh] items-center gap-10 bg-gradient-to-br from-[#050b18] to-[#0b1d3a] px-8 py-20 md:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="mb-5 inline-block rounded-full border border-white/20 px-4 py-2 text-sm tracking-widest text-sky-300">
            AVIATION STANDARD GRADING
          </p>

          <h1 className="mb-6 max-w-5xl text-5xl font-black leading-none md:text-7xl">
            Precision Card Grading Built on Aviation Discipline.
          </h1>

          <p className="max-w-3xl text-lg text-blue-100/80">
            ASG brings the inspection mindset of aviation maintenance into
            trading card grading. Every card is reviewed with a standard where
            precision, consistency, and trust are non-negotiable.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-full bg-gradient-to-r from-sky-300 to-blue-500 px-6 py-3 font-bold text-black"
            >
              Join Waitlist
            </a>

            <a
              href="#lookup"
              className="rounded-full border border-white/25 px-6 py-3 font-bold text-white"
            >
              Cert Lookup
            </a>
          </div>
        </div>

        <div className="rounded-[28px] border border-white/15 bg-white/5 p-8 shadow-2xl">
          <h2 className="mb-4 text-4xl font-black">ASG Standard</h2>
          <p className="text-blue-100/80">
            Clean slabs, premium labels, detailed inspection, and a brand built
            around trust, presentation, and long-term collector confidence.
          </p>
        </div>
      </section>

      <section id="about" className="px-8 py-20">
        <p className="mb-5 inline-block rounded-full border border-white/20 px-4 py-2 text-sm tracking-widest text-sky-300">
          ABOUT ASG
        </p>

        <h2 className="mb-5 text-4xl font-black md:text-5xl">
          Grading with a sharper standard.
        </h2>

        <p className="max-w-4xl text-blue-100/80">
          Aviation Standard Grading was created to bring a disciplined,
          professional, and detail-focused approach to collectible card grading.
          Our process is built around careful inspection, consistent review,
          secure encapsulation, and premium presentation.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <Card
            title="Precision Review"
            text="Cards are reviewed for centering, surface, corners, edges, and overall presentation."
          />
          <Card
            title="Premium Slabs"
            text="ASG slabs are designed for strong visual presentation and long-term collector appeal."
          />
          <Card
            title="Certification Lookup"
            text="ASG certification lookup is available for verifying slab information by cert number."
          />
        </div>
      </section>

      <section id="pricing" className="px-8 py-20">
        <p className="mb-5 inline-block rounded-full border border-white/20 px-4 py-2 text-sm tracking-widest text-sky-300">
          PRICING
        </p>

        <h2 className="mb-8 text-4xl font-black md:text-5xl">
          Simple grading options.
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          <Pricing title="Bulk Grading" price="$8" text="Per card. Estimated turnaround: 4–6 weeks." />
          <Pricing title="Priority Express" price="$12" text="Per card. Estimated turnaround: 2–3 weeks." />
          <Pricing title="Submission Status" price="Paused" text="ASG is not currently taking new submissions due to manpower and order backlog." />
        </div>
      </section>

      <section id="lookup" className="px-8 py-20">
        <p className="mb-5 inline-block rounded-full border border-white/20 px-4 py-2 text-sm tracking-widest text-sky-300">
          CERTIFICATION
        </p>

        <h2 className="mb-4 text-4xl font-black md:text-5xl">
          ASG Cert Lookup
        </h2>

        <p className="max-w-3xl text-blue-100/80">
          Enter an ASG certification number below to search the certification
          vault.
        </p>

        <div className="mt-8 max-w-3xl rounded-3xl border border-white/15 bg-white/5 p-8">
          <input
            value={cert}
            onChange={(e) => setCert(e.target.value)}
            className="mb-4 w-full rounded-xl border border-white/20 bg-black/30 p-4 text-white outline-none"
            placeholder="Enter cert number"
          />

          <button
            onClick={lookupCert}
            className="rounded-full bg-gradient-to-r from-sky-300 to-blue-500 px-6 py-3 font-bold text-black"
          >
            Search Cert
          </button>

          {result && <p className="mt-5 font-bold text-sky-300">{result}</p>}
        </div>
      </section>

      <section id="contact" className="px-8 py-20">
        <p className="mb-5 inline-block rounded-full border border-white/20 px-4 py-2 text-sm tracking-widest text-sky-300">
          CONTACT ASG
        </p>

        <h2 className="mb-4 text-4xl font-black md:text-5xl">
          Join the waitlist or ask a question.
        </h2>

        <p className="max-w-3xl text-blue-100/80">
          Reach out for future availability, launch updates, pricing questions,
          certification lookup support, or general ASG information.
        </p>

        <div className="mt-8 max-w-3xl rounded-3xl border border-white/15 bg-white/5 p-8">
          <p className="mb-3">
            Email: <strong>contact@aviationstandardgrading.com</strong>
          </p>

          <p className="mb-6">Location: Tulsa, Oklahoma</p>

          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:contact@aviationstandardgrading.com"
              className="rounded-full bg-gradient-to-r from-sky-300 to-blue-500 px-6 py-3 font-bold text-black"
            >
              Open Email App
            </a>

            <button
              onClick={copyEmail}
              className="rounded-full border border-white/25 px-6 py-3 font-bold text-white"
            >
              Copy ASG Email
            </button>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-8 py-8 text-sm text-blue-100/60">
        © 2026 Aviation Standard Grading. All rights reserved.
      </footer>
    </main>
  );
}

function Card({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-3xl border border-white/15 bg-white/5 p-7">
      <h3 className="mb-3 text-2xl font-black">{title}</h3>
      <p className="text-blue-100/80">{text}</p>
    </div>
  );
}

function Pricing({
  title,
  price,
  text,
}: {
  title: string;
  price: string;
  text: string;
}) {
  return (
    <div className="rounded-3xl border border-white/15 bg-white/5 p-7">
      <h3 className="mb-3 text-2xl font-black">{title}</h3>
      <div className="mb-3 text-5xl font-black text-sky-300">{price}</div>
      <p className="text-blue-100/80">{text}</p>
    </div>
  );
}