"use client";

import Image from "next/image";
import { useState } from "react";

const ASG_EMAIL = "Zachmccollum@AviationStandardGrading.com";

export default function Home() {
  const [cert, setCert] = useState("");
  const [result, setResult] = useState("");

  function lookupCert() {
    if (!cert.trim()) {
      setResult("Enter a certification number.");
      return;
    }

    setResult(`Cert #${cert} is not currently in the ASG online vault yet.`);
  }

  return (
    <main className="min-h-screen bg-[#020817] text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#020817]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">
          <a href="#" className="text-4xl font-black tracking-tight">
            ASG
          </a>

          <nav className="hidden gap-8 font-bold md:flex">
            <a href="#slabs">Slabs</a>
            <a href="#about">About</a>
            <a href="#pricing">Pricing</a>
            <a href="/cert">Cert Lookup</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <section className="mx-auto grid max-w-7xl gap-12 px-8 py-20 md:grid-cols-2 md:items-center">
        <div>
          <p className="mb-5 inline-block rounded-full border border-sky-300/40 px-4 py-2 text-sm font-bold uppercase tracking-[0.3em] text-sky-200">
            Aviation Standard Grading
          </p>

          <h1 className="mb-6 text-5xl font-black leading-tight md:text-7xl">
            Precision card grading built on aviation standards.
          </h1>

          <p className="mb-8 max-w-xl text-lg leading-8 text-blue-100/80">
            ASG brings a careful, consistent, and professional inspection
            standard to collectible card grading. Precision, presentation, and
            trust are non-negotiable.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-full bg-sky-400 px-7 py-4 font-black text-black"
            >
              Join Waitlist
            </a>

            <a
              href="/cert"
              className="rounded-full border border-white/20 px-7 py-4 font-black"
            >
              Cert Lookup
            </a>

            <a
              href="#slabs"
              className="rounded-full border border-white/20 px-7 py-4 font-black"
            >
              View Slabs
            </a>
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl border border-white/15 bg-white/5 shadow-2xl">
          <Image
            src="/asg-card-showcase.png"
            alt="ASG graded slab example"
            width={1200}
            height={1400}
            priority
            className="h-auto w-full object-contain"
          />
        </div>
      </section>

      <section id="slabs" className="mx-auto max-w-7xl px-8 py-20">
        <p className="mb-5 inline-block rounded-full border border-sky-300/40 px-4 py-2 text-sm font-bold uppercase tracking-[0.3em] text-sky-200">
          Slab Showcase
        </p>

        <h2 className="mb-4 text-4xl font-black md:text-5xl">
          ASG Graded Card Examples
        </h2>

        <p className="mb-10 max-w-3xl text-blue-100/80">
          A clean preview of ASG slab presentation, label layout, and graded
          card display.
        </p>

        <div className="overflow-hidden rounded-3xl border border-white/15 bg-white/5 shadow-2xl">
          <Image
            src="/asg-card-showcase2.png"
            alt="ASG featured slab examples"
            width={1600}
            height={1000}
            className="h-auto w-full object-contain"
          />
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-8 py-20">
        <p className="mb-5 inline-block rounded-full border border-sky-300/40 px-4 py-2 text-sm font-bold uppercase tracking-[0.3em] text-sky-200">
          About ASG
        </p>

        <h2 className="mb-4 text-4xl font-black md:text-5xl">
          Built from aviation-level discipline.
        </h2>

        <p className="mb-6 max-w-4xl text-lg leading-8 text-blue-100/80">
          Aviation Standard Grading was created around the same mindset used in
          aircraft maintenance: careful inspection, consistency, documentation,
          and precision. Our goal is to bring a clean, professional, and
          trustworthy grading experience to collectible cards.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          <Card
            title="Precision Inspection"
            text="Each card is reviewed with attention to surface, corners, edges, centering, and overall presentation."
          />
          <Card
            title="Professional Presentation"
            text="ASG slabs are designed to look clean, premium, and display-ready for collectors and sellers."
          />
          <Card
            title="Trust & Documentation"
            text="Certification lookup and organized record keeping are built into the ASG vision from the start."
          />
        </div>
      </section>

      <section id="pricing" className="mx-auto max-w-7xl px-8 py-20">
        <p className="mb-5 inline-block rounded-full border border-sky-300/40 px-4 py-2 text-sm font-bold uppercase tracking-[0.3em] text-sky-200">
          Pricing
        </p>

        <h2 className="mb-10 text-4xl font-black md:text-5xl">
          Simple grading options.
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          <Price
            title="Bulk Grading"
            price="$8 / card"
            text="Estimated turnaround: 4–6 weeks."
          />

          <Price
            title="Priority Express"
            price="$12 / card"
            text="Estimated turnaround: 2–3 weeks."
          />
        </div>
      </section>

      <section id="cert" className="mx-auto max-w-7xl px-8 py-20">
        <p className="mb-5 inline-block rounded-full border border-sky-300/40 px-4 py-2 text-sm font-bold uppercase tracking-[0.3em] text-sky-200">
          Cert Lookup
        </p>

        <h2 className="mb-4 text-4xl font-black md:text-5xl">
          Certification lookup.
        </h2>

        <p className="mb-8 max-w-3xl text-blue-100/80">
          Search by certification number to verify slab information once cards
          are added to the ASG online vault.
        </p>

        <div className="max-w-xl rounded-3xl border border-white/15 bg-white/5 p-7">
          <input
            value={cert}
            onChange={(e) => setCert(e.target.value)}
            placeholder="Enter cert number"
            className="mb-4 w-full rounded-xl border border-white/20 bg-black/30 p-4 text-white outline-none"
          />

          <button
            onClick={lookupCert}
            className="rounded-full bg-sky-400 px-7 py-4 font-black text-black"
          >
            Search Cert
          </button>

          {result && <p className="mt-5 font-bold text-sky-300">{result}</p>}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-8 py-20">
        <p className="mb-5 inline-block rounded-full border border-sky-300/40 px-4 py-2 text-sm font-bold uppercase tracking-[0.3em] text-sky-200">
          Contact ASG
        </p>

        <h2 className="mb-4 text-4xl font-black md:text-5xl">
          Join the waitlist or ask a question.
        </h2>

        <p className="mb-8 max-w-3xl text-blue-100/80">
          Reach out for future availability, launch updates, pricing questions,
          certification lookup support, or general ASG information.
        </p>

        <div className="max-w-3xl rounded-3xl border border-white/15 bg-white/5 p-8">
          <p className="mb-4">
            <strong>Email:</strong> {ASG_EMAIL}
          </p>

          <p className="mb-8">
            <strong>Location:</strong> Tulsa, Oklahoma
          </p>

          <a
            href={`mailto:${ASG_EMAIL}`}
            className="rounded-full bg-sky-400 px-7 py-4 font-black text-black"
          >
            Email ASG
          </a>
        </div>
      </section>
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

function Price({
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