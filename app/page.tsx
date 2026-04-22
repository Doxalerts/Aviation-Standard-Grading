"use client";

import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Plane,
  Search,
  BadgeCheck,
  Package,
  ScanLine,
  Trophy,
  Menu,
  X,
  ChevronRight,
  Wrench,
  ClipboardCheck,
  Radar,
  HeartHandshake,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const grades = [
  { label: "Centering", score: "9.5" },
  { label: "Surface", score: "10" },
  { label: "Edges", score: "9" },
  { label: "Corners", score: "9.5" },
];

const pillars = [
  {
    title: "Precision",
    text: "Aviation professionals are trained to catch details others overlook. That same disciplined eye drives every AGS evaluation.",
    icon: Radar,
  },
  {
    title: "Consistency",
    text: "Every card is reviewed through a repeatable grading workflow rooted in standards, checkpoints, and attention to detail.",
    icon: ClipboardCheck,
  },
  {
    title: "Integrity",
    text: "No shortcuts, no inflated promises — just honest grading built on trust, transparency, and collector confidence.",
    icon: ShieldCheck,
  },
  {
    title: "Passion",
    text: "AGS exists because aviation-minded professionals genuinely love Pokémon cards and the collecting community behind them.",
    icon: HeartHandshake,
  },
];

const services = [
  {
    title: "Collector Standard",
    price: "$18/card",
    desc: "A dependable service tier for collectors who want premium presentation, accurate grading, and a trusted slab.",
    icon: ShieldCheck,
  },
  {
    title: "Priority Express",
    price: "$35/card",
    desc: "Accelerated grading for time-sensitive submissions, showcases, higher-value cards, and resale preparation.",
    icon: Plane,
  },
  {
    title: "Registry & Verification",
    price: "$6/card",
    desc: "Digital certification lookup, slab validation, and registry tools that reinforce trust after grading is complete.",
    icon: Trophy,
  },
];

const processSteps = [
  {
    title: "Submission Intake",
    text: "Collectors choose a service level, prepare a submission, and send cards through a structured intake process.",
    icon: Package,
  },
  {
    title: "Detailed Inspection",
    text: "Cards are evaluated with a trained, detail-focused eye across centering, corners, edges, and surface quality.",
    icon: Search,
  },
  {
    title: "Imaging & Verification",
    text: "High-resolution scans and cert tracking create traceability, authentication, and buyer confidence.",
    icon: ScanLine,
  },
  {
    title: "Encapsulation",
    text: "Approved grades are sealed in AGS slabs with clean labels and a verification number collectors can trust.",
    icon: BadgeCheck,
  },
];

const faqs = [
  {
    q: "What makes AGS different?",
    a: "AGS was built around the mindset of aviation engineers and aircraft maintenance professionals — people trained to value precision, standards, and detail. We brought that same discipline into Pokémon card grading.",
  },
  {
    q: "Why aviation?",
    a: "In aviation, small details matter and consistency matters. AGS applies that same careful inspection mindset to Pokémon cards to create a grading experience rooted in trust.",
  },
  {
    q: "Do you only grade Pokémon cards?",
    a: "AGS is currently positioned around Pokémon card grading, with branding and presentation tailored to that community first.",
  },
  {
    q: "How do I verify an AGS slab?",
    a: "Each AGS slab includes a certification number that can be entered into the verification lookup to confirm the card, grade, and status.",
  },
];

function GradeBar({ label, score }: { label: string; score: string }) {
  const width = `${Math.min((parseFloat(score) / 10) * 100, 100)}%`;

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-sm">
        <span className="text-slate-300">{label}</span>
        <span className="font-semibold text-white">{score}</span>
      </div>
      <div className="h-2 w-full rounded-full bg-slate-800">
        <div
          className="h-2 rounded-full bg-gradient-to-r from-sky-400 to-cyan-300"
          style={{ width }}
        />
      </div>
    </div>
  );
}

export default function AGSWebsite() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cert, setCert] = useState("");

  const certResult = useMemo(() => {
    if (!cert.trim()) return null;

    return {
      id: cert.toUpperCase(),
      card: "Charizard Holo",
      set: "Base Set",
      number: "4/102",
      finalGrade: "9.5 GEM+",
      status: "Verified",
    };
  }, [cert]);

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-sky-500/15 blur-3xl" />
        <div className="absolute right-0 top-40 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute left-0 top-[30rem] h-80 w-80 rounded-full bg-blue-400/10 blur-3xl" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-400 to-cyan-300 text-slate-950 shadow-lg shadow-sky-500/20">
              <Plane className="h-5 w-5" />
            </div>
            <div>
              <p className="text-lg font-black tracking-[0.24em]">AGS</p>
              <p className="text-xs uppercase tracking-[0.22em] text-slate-400">
                Aviation Standard Grading
              </p>
            </div>
          </div>

          <nav className="hidden items-center gap-8 md:flex">
            <a
              href="#story"
              className="text-sm text-slate-300 transition hover:text-white"
            >
              Our Story
            </a>
            <a
              href="#standards"
              className="text-sm text-slate-300 transition hover:text-white"
            >
              Standards
            </a>
            <a
              href="#services"
              className="text-sm text-slate-300 transition hover:text-white"
            >
              Services
            </a>
            <a
              href="#lookup"
              className="text-sm text-slate-300 transition hover:text-white"
            >
              Lookup
            </a>
          </nav>

          <div className="hidden md:block">
            <Button className="rounded-2xl bg-white text-slate-950 hover:bg-slate-200">
              Start Submission
            </Button>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-xl border border-white/10 p-2 text-slate-200 md:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-white/10 md:hidden">
            <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:px-8">
              <a href="#story" className="text-sm text-slate-300">
                Our Story
              </a>
              <a href="#standards" className="text-sm text-slate-300">
                Standards
              </a>
              <a href="#services" className="text-sm text-slate-300">
                Services
              </a>
              <a href="#lookup" className="text-sm text-slate-300">
                Lookup
              </a>
              <Button className="rounded-2xl bg-white text-slate-950 hover:bg-slate-200">
                Start Submission
              </Button>
            </div>
          </div>
        )}
      </header>

      <main>
        <section className="relative">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-28">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-sky-400/10 px-4 py-2 text-sm text-sky-200">
                <Wrench className="h-4 w-4" />
                Built by aviation-minded professionals who love Pokémon
              </div>

              <div className="space-y-5">
                <h1 className="max-w-3xl text-5xl font-black leading-tight tracking-tight sm:text-6xl">
                  Where
                  <span className="bg-gradient-to-r from-sky-300 to-cyan-300 bg-clip-text text-transparent">
                    {" "}
                    aviation standards{" "}
                  </span>
                  meet Pokémon passion.
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-slate-300">
                  AGS was built around a simple idea: aviation engineers and
                  aircraft maintenance professionals already live by precision,
                  discipline, and standards. We took that trained eye, combined
                  it with our love for Pokémon cards, and built a grading
                  company collectors can trust.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Button className="rounded-2xl bg-white px-6 py-6 text-base font-semibold text-slate-950 hover:bg-slate-200">
                  Submit Your Cards
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  className="rounded-2xl border-white/15 bg-white/5 px-6 py-6 text-base text-white hover:bg-white/10"
                >
                  Learn the AGS Standard
                </Button>
              </div>

              <div className="grid max-w-xl grid-cols-3 gap-4 pt-4">
                <Card className="rounded-3xl border-white/10 bg-white/5 shadow-xl shadow-black/20">
                  <CardContent className="p-5">
                    <p className="text-2xl font-black">10k+</p>
                    <p className="text-sm text-slate-400">Cards reviewed</p>
                  </CardContent>
                </Card>
                <Card className="rounded-3xl border-white/10 bg-white/5 shadow-xl shadow-black/20">
                  <CardContent className="p-5">
                    <p className="text-2xl font-black">4-Point</p>
                    <p className="text-sm text-slate-400">Inspection focus</p>
                  </CardContent>
                </Card>
                <Card className="rounded-3xl border-white/10 bg-white/5 shadow-xl shadow-black/20">
                  <CardContent className="p-5">
                    <p className="text-2xl font-black">Trust-First</p>
                    <p className="text-sm text-slate-400">Collector mindset</p>
                  </CardContent>
                </Card>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-sky-400/20 to-cyan-300/10 blur-2xl" />
              <Card className="relative overflow-hidden rounded-[2rem] border-white/10 bg-slate-900/90 shadow-2xl shadow-sky-950/40">
                <CardContent className="p-6 sm:p-8">
                  <div className="mb-4 flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.24em] text-sky-300">
                        AGS Inspection Preview
                      </p>
                      <h3 className="mt-1 text-2xl font-black">
                        Pikachu VMAX
                      </h3>
                    </div>
                    <div className="rounded-2xl bg-white px-4 py-3 text-right text-slate-950">
                      <p className="text-xs font-semibold uppercase tracking-wide">
                        Final Grade
                      </p>
                      <p className="text-3xl font-black">9.5</p>
                    </div>
                  </div>

                  <div className="mb-5 rounded-[1.75rem] border border-white/10 bg-gradient-to-b from-slate-800 to-slate-900 p-5">
                    <div className="mb-5 grid grid-cols-2 gap-3 text-sm text-slate-300">
                      <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                        <p className="text-slate-400">Set</p>
                        <p className="mt-1 font-semibold text-white">
                          Vivid Voltage
                        </p>
                      </div>
                      <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                        <p className="text-slate-400">Card No.</p>
                        <p className="mt-1 font-semibold text-white">
                          044/185
                        </p>
                      </div>
                    </div>

                    <div className="space-y-4 rounded-3xl border border-white/10 bg-black/20 p-5">
                      {grades.map((g) => (
                        <GradeBar key={g.label} {...g} />
                      ))}
                    </div>
                  </div>

                  <div className="rounded-3xl border border-sky-400/15 bg-sky-400/5 p-5">
                    <p className="text-sm leading-7 text-slate-300">
                      AGS is inspired by the mindset of aviation inspection:
                      disciplined review, clear standards, and confidence built
                      through consistency.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        <section id="story" className="border-y border-white/10 bg-white/[0.03]">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1fr,1.1fr] lg:px-8">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-300">
                Our story
              </p>
              <h2 className="text-3xl font-black sm:text-4xl">
                Built from the discipline of aviation and the love of collecting
              </h2>
            </div>
            <div className="space-y-6 text-lg leading-8 text-slate-300">
              <p>
                AGS began with people who spent their working lives around
                aircraft — environments where details matter, standards matter,
                and precision is non-negotiable. Aviation engineers and
                maintenance professionals are trained to inspect carefully, think
                systematically, and never ignore the small things.
              </p>
              <p>
                That mindset translated naturally into Pokémon card grading. The
                same focused eye used in aviation now helps AGS evaluate
                centering, corners, edges, and surface condition with discipline
                and consistency.
              </p>
              <p>
                But AGS is not just about technical standards. It is also built
                on genuine love for Pokémon cards, collecting, nostalgia, and
                the excitement of preserving something valuable. That balance is
                what defines the AGS identity: precision without losing the
                heart of the hobby.
              </p>
            </div>
          </div>
        </section>

        <section id="standards" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-sky-300">
              The AGS standard
            </p>
            <h2 className="text-3xl font-black sm:text-4xl">
              The values behind every grade
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card className="h-full rounded-[2rem] border-white/10 bg-white/5 shadow-xl shadow-black/20">
                    <CardContent className="p-7">
                      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-400/10 text-sky-300">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-bold">{pillar.title}</h3>
                      <p className="mt-3 leading-7 text-slate-300">
                        {pillar.text}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </section>

        <section id="services" className="mx-auto max-w-7xl px-4 py-4 pb-20 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-sky-300">
              Services
            </p>
            <h2 className="text-3xl font-black sm:text-4xl">
              Submission options designed for modern collectors
            </h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card className="h-full rounded-[2rem] border-white/10 bg-white/5 shadow-xl shadow-black/20">
                    <CardContent className="flex h-full flex-col p-7">
                      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-400/10 text-sky-300">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div className="mb-2 flex items-center justify-between gap-4">
                        <h3 className="text-xl font-bold">{service.title}</h3>
                        <span className="rounded-full bg-white/10 px-3 py-1 text-sm text-slate-200">
                          {service.price}
                        </span>
                      </div>
                      <p className="mt-3 flex-1 leading-7 text-slate-300">
                        {service.desc}
                      </p>
                      <button className="mt-6 inline-flex items-center text-sm font-semibold text-sky-300">
                        Learn more <ChevronRight className="ml-1 h-4 w-4" />
                      </button>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </section>

        <section className="border-y border-white/10 bg-white/[0.03]">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
            <div className="mb-12 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-sky-300">
                  Inspection workflow
                </p>
                <h2 className="text-3xl font-black sm:text-4xl">
                  A repeatable process inspired by real-world inspection culture
                </h2>
              </div>
              <p className="max-w-xl text-slate-300">
                AGS brings a standards-driven approach to grading, built on
                clear checkpoints, careful review, and traceable certification.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {processSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <Card
                    key={step.title}
                    className="rounded-[2rem] border-white/10 bg-slate-900/70"
                  >
                    <CardContent className="p-6">
                      <div className="mb-5 flex items-center justify-between">
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 text-sky-300">
                          <Icon className="h-6 w-6" />
                        </div>
                        <span className="text-4xl font-black text-white/10">
                          0{index + 1}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold">{step.title}</h3>
                      <p className="mt-3 leading-7 text-slate-300">
                        {step.text}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <section id="lookup" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.1fr,0.9fr]">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-sky-300">
                Certification lookup
              </p>
              <h2 className="text-3xl font-black sm:text-4xl">
                Verify any AGS graded card in seconds
              </h2>
              <p className="mt-4 max-w-xl leading-7 text-slate-300">
                Transparency is part of the standard. Enter a certification
                number to confirm authenticity, grade results, and slab details.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Input
                  value={cert}
                  onChange={(e) => setCert(e.target.value)}
                  placeholder="Enter certification number"
                  className="h-12 rounded-2xl border-white/10 bg-white/5 text-white placeholder:text-slate-500"
                />
                <Button className="h-12 rounded-2xl bg-white px-6 text-slate-950 hover:bg-slate-200">
                  Verify
                </Button>
              </div>
            </div>

            <Card className="rounded-[2rem] border-white/10 bg-gradient-to-b from-slate-900 to-slate-950 shadow-xl shadow-black/20">
              <CardContent className="p-7">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-400/10 text-emerald-300">
                    <BadgeCheck className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Lookup result</p>
                    <p className="text-lg font-bold">
                      {certResult ? certResult.status : "Waiting for certification number"}
                    </p>
                  </div>
                </div>

                {certResult ? (
                  <div className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-5 text-sm">
                    <div className="flex items-center justify-between border-b border-white/10 pb-3">
                      <span className="text-slate-400">Certification</span>
                      <span className="font-semibold">{certResult.id}</span>
                    </div>
                    <div className="flex items-center justify-between border-b border-white/10 pb-3">
                      <span className="text-slate-400">Card</span>
                      <span className="font-semibold">{certResult.card}</span>
                    </div>
                    <div className="flex items-center justify-between border-b border-white/10 pb-3">
                      <span className="text-slate-400">Set</span>
                      <span className="font-semibold">{certResult.set}</span>
                    </div>
                    <div className="flex items-center justify-between border-b border-white/10 pb-3">
                      <span className="text-slate-400">Number</span>
                      <span className="font-semibold">{certResult.number}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Grade</span>
                      <span className="rounded-full bg-sky-400/10 px-3 py-1 font-semibold text-sky-200">
                        {certResult.finalGrade}
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="rounded-3xl border border-dashed border-white/10 bg-white/[0.03] p-8 text-center text-slate-400">
                    Search a slab number to preview the AGS verification experience.
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 pb-20 sm:px-6 lg:px-8">
          <Card className="overflow-hidden rounded-[2rem] border-white/10 bg-gradient-to-r from-sky-400/10 via-white/[0.03] to-cyan-300/10">
            <CardContent className="flex flex-col gap-6 p-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-300">
                  Callsign: collector confidence
                </p>
                <h2 className="mt-2 text-3xl font-black">
                  A higher standard for Pokémon card grading
                </h2>
                <p className="mt-4 leading-7 text-slate-300">
                  AGS exists for collectors who want more than a grade. They want a
                  standard, a story, and a company built on real precision.
                </p>
              </div>
              <Button className="rounded-2xl bg-white px-6 py-6 text-base font-semibold text-slate-950 hover:bg-slate-200">
                Begin Your First Submission
              </Button>
            </CardContent>
          </Card>
        </section>

        <section id="faq" className="mx-auto max-w-5xl px-4 pb-20 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-sky-300">
              FAQ
            </p>
            <h2 className="text-3xl font-black sm:text-4xl">
              Questions collectors ask first
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((item) => (
              <Card
                key={item.q}
                className="rounded-[1.75rem] border-white/10 bg-white/5"
              >
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold">{item.q}</h3>
                  <p className="mt-3 leading-7 text-slate-300">{item.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-slate-950">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-10 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-400 to-cyan-300 text-slate-950">
              <Plane className="h-5 w-5" />
            </div>
            <div>
              <p className="font-black tracking-[0.24em]">AGS</p>
              <p className="text-sm text-slate-400">Aviation Standard Grading</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-6 text-sm text-slate-400">
            <a href="#story" className="hover:text-white">
              Our Story
            </a>
            <a href="#standards" className="hover:text-white">
              Standards
            </a>
            <a href="#services" className="hover:text-white">
              Services
            </a>
            <a href="#lookup" className="hover:text-white">
              Lookup
            </a>
          </div>

          <p className="text-sm text-slate-500">
            © 2026 AGS — Aviation Standard Grading
          </p>
        </div>
      </footer>
    </div>
  );
}