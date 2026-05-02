"use client";

import Image from "next/image";
import { useState } from "react";

const ASG_EMAIL = "contact@aviationstandardgrading.com";

export default function Home() {
  const [cert, setCert] = useState("");
  const [result, setResult] = useState("");

  function lookupCert() {
    if (!cert.trim()) {
      setResult("Please enter a certification number.");
      return;
    }

    setResult(`Cert lookup request received for: ${cert}. ASG vault connection coming soon.`);
  }

  function copyEmail() {
    navigator.clipboard.writeText(ASG_EMAIL);
    alert("ASG email copied.");
  }

  return (
    <main className="min-h-screen bg-[#050b18] text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050b18]/95 px-8 py-5">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <a href="#home" className="text-4xl font-black tracking-[0.35em]">
            ASG
          </a>

          <nav className="hidden gap-6 text-sm text-blue-100 md:flex">
            <a href="#about">About</a>
            <a href="#slabs">Slabs</a>
            <a href="#pricing">Pricing</a>
            <a href="#lookup">Cert Lookup</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <section
        id="home"
        className="mx-auto grid max-w-7xl gap-10 px-8 py-20 md:grid-cols-2 md:items-center"
      >
        <div>
          <p className="mb-5 inline-block rounded-full border border-sky-300/40 px-4 py-2 text-sm tracking-widest text-sky-300">
            AVIATION STANDARD GRADING
          </p>

          <h1 className="mb-6 text-5xl font-black leading-tight md:text-7xl">
            Precision card grading built on aviation discipline.
          </h1>

          <p className="max-w-2xl text-lg text-blue-100/80">
            ASG brings a careful, consistent, and professional inspection standard
            to collectible card grading. Precision, presentation, and trust are
            non-negotiable.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a className="rounded-full bg-sky-400 px-6 py-3 font-bold text-black" href="#contact">
              Join Waitlist
            </a>
            <a className="rounded-full border border-white/25 px-6 py-3 font-bold" href="#lookup">
              Cert Lookup
            </a>
            <a className="rounded-full border border-white/25 px-6 py-3 font-bold" href="#slabs">
              View Slabs
            </a>
          </div>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-white/15 bg-white/5 shadow-2xl">
          <Image
            src="/asg-hero-tech.png"
            alt="ASG grading technology"
            width={900}
            height={650}
            className="h-auto w-full"
            priority
          />
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-8 py-20">
        <p className="mb-5 inline-block rounded-full border border-sky-300/40 px-4 py-2 text-sm tracking-widest text-sky-300">
          ABOUT ASG
        </p>

        <h2 className="mb-6 text-4xl font-black md:text-5xl">
          A sharper grading standard.
        </h2>

        <p className="max-w-4xl text-blue-100/80">
          Aviation Standard Grading was built around disciplined inspection,
          premium presentation, secure encapsulation, and collector confidence.
          Every detail matters.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <Card title="Precision Review" text="Cards are reviewed for centering, surface, corners, edges, and overall eye appeal." />
          <Card title="Premium Slabs" text="Clean presentation, futuristic labels, and professional slab design built for collectors." />
          <Card title="ASG Vault" text="Certification lookup support for slab verification and collector confidence." />
        </div>
      </section>

      <section id="slabs" className="mx-auto max-w-7xl px-8 py-20">
        <p className="mb-5 inline-block rounded-full border border-sky-300/40 px-4 py-2 text-sm tracking-widest text-sky-300">
          ASG VISUALS
        </p>

        <h2 className="mb-8 text-4xl font-black md:text-5xl">
          Slabs, workflow, and vault technology.
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          <ImageCard src="/asg-hero-tech.png" title="ASG Slab Presentation" />
          <ImageCard src="/asg-lab-workflow.png" title="Grading Workflow" />
          <ImageCard src="/asg-vault-tech.png" title="Certification Vault" />
        </div>
      </section>

      <section id="pricing" className="mx-auto max-w-7xl px-8 py-20">
        <p className="mb-5 inline-block rounded-full border border-sky-300/40 px-4 py-2 text-sm tracking-widest text-sky-300">
          PRICING
        </p>

        <h2 className="mb-8 text-4xl font-black md:text-5xl">
          Simple grading options.
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          <Price title="Bulk Grading" price="$8" text="Per card. Estimated turnaround: 4–6 weeks." />
          <Price title="Priority Express" price="$12" text="Per card. Estimated turnaround: 2–3 weeks." />
          <Price title="Submission Status" price="Paused" text="ASG is not currently taking submissions due to manpower and backlog." />
        </div>
      </section>

      <section id="lookup" className="mx-auto max-w-7xl px-8 py-20">
        <p className="mb-5 inline-block rounded-full border border-sky-300/40 px-4 py-2 text-sm tracking-widest text-sky-300">
          CERT LOOKUP
        </p>

        <h2 className="mb-4 text-4xl font-black md:text-5xl">
          ASG Cert Lookup
        </h2>

        <div className="mt-8 max-w-3xl rounded-3xl border border-white/15 bg-white/5 p-8">
          <input
            value={cert}
            onChange={(e) => setCert(e.target.value)}
            placeholder="Enter cert number"
            className="mb-4 w-full rounded-xl border border-white/20 bg-black/30 p-4 text-white outline-none"
          />

          <button
            onClick={lookupCert}
            className="rounded-full bg-sky-400 px-6 py-3 font-bold text-black"
          >
            Search Cert
          </button>

          {result && <p className="mt-5 font-bold text-sky-300">{result}</p>}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-8 py-20">
        <p className="mb-5 inline-block rounded-full border border-sky-300/40 px-4 py-2 text-sm tracking-widest text-sky-300">
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
          <p className="mb-4">
            <strong>Email:</strong> {ASG_EMAIL}
          </p>

          <p className="mb-6">
            <strong>Location:</strong> Tulsa, Oklahoma
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href={`mailto:${ASG_EMAIL}`}
              className="rounded-full bg-sky-400 px-6 py-3 font-bold text-black"
            >
              Open Email App
            </a>

            <button
              onClick={copyEmail}
              className="rounded-full border border-white/25 px-6 py-3 font-bold"
            >
              Copy ASG Email
            </button>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-8 py-8 text-center text-sm text-blue-100/60">
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

function Price({ title, price, text }: { title: string; price: string; text: string }) {
  return (
    <div className="rounded-3xl border border-white/15 bg-white/5 p-7">
      <h3 className="mb-3 text-2xl font-black">{title}</h3>
      <div className="mb-3 text-5xl font-black text-sky-300">{price}</div>
      <p className="text-blue-100/80">{text}</p>
    </div>
  );
}

function ImageCard({ src, title }: { src: string; title: string }) {
  return (
    <div className="overflow-hidden rounded-3xl border border-white/15 bg-white/5">
      <Image src={src} alt={title} width={700} height={500} className="h-72 w-full object-cover" />
      <div className="p-5">
        <h3 className="text-xl font-black">{title}</h3>
      </div>
    </div>
  );
}<div className="grid gap-6 md:grid-cols-2">
  <ImageCard src="/asg-card-showcase.png" title="ASG Graded Card Showcase" />
  <ImageCard src="/asg-card-showcase2.png" title="ASG Featured Slab Examples" />
</div>