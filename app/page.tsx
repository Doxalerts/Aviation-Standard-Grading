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
  Menu,
  X,
  ChevronRight,
  ClipboardCheck,
  Radar,
  HeartHandshake,
  Mail,
  Clock3,
  MapPin,
  QrCode,
  Database,
  AlertTriangle,
  ArrowRight,
  Copy,
  Check,
  Sparkles,
  Lock,
  Cpu,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const CONTACT_EMAIL = "Zachmccollum@AviationStandardGrading.com";

const pillars = [
  {
    title: "Precision",
    text: "Every decision is rooted in disciplined inspection standards inspired by aviation maintenance culture.",
    icon: Radar,
  },
  {
    title: "Integrity",
    text: "We believe grading should be consistent, defensible, and worthy of collector trust.",
    icon: ShieldCheck,
  },
  {
    title: "Innovation",
    text: "ASG is being built with modern verification, cert lookup, and future vault technology in mind.",
    icon: Cpu,
  },
  {
    title: "Collector Confidence",
    text: "Premium presentation, clean labels, and traceable records are part of the ASG standard.",
    icon: HeartHandshake,
  },
];

const services = [
  {
    title: "Standard Grading",
    price: "$8/card",
    desc: "Affordable core grading built around premium standards, precise review, and collector-first presentation.",
    icon: ShieldCheck,
  },
  {
    title: "Priority Express",
    price: "$12/card",
    desc: "Accelerated service for collectors who want faster handling once submissions reopen.",
    icon: Plane,
  },
  {
    title: "Certification & Vault",
    price: "Coming Soon",
    desc: "Future-forward cert lookup, slab scanning, and online vault tools built for modern collector trust.",
    icon: Database,
  },
];

const processSteps = [
  {
    title: "Submission Intake",
    text: "Cards are logged and organized through a structured intake workflow.",
    icon: Package,
  },
  {
    title: "Detailed Inspection",
    text: "Centering, corners, edges, and surface are reviewed with standards-driven precision.",
    icon: Search,
  },
  {
    title: "Imaging & Verification",
    text: "Certification data, imaging, and record structure support traceability and confidence.",
    icon: ScanLine,
  },
  {
    title: "Encapsulation",
    text: "Finalized cards are sealed with a premium ASG label and cert-ready presentation.",
    icon: BadgeCheck,
  },
];

const vaultSteps = [
  {
    title: "Scannable Slab Records",
    text: "ASG is being designed around future scan-ready verification and accessible certification records.",
    icon: QrCode,
  },
  {
    title: "Secure Lookup",
    text: "Collectors will be able to search cert IDs and verify slab details through a modern interface.",
    icon: Lock,
  },
  {
    title: "Digital Vault Vision",
    text: "The long-term goal is an online record vault built for transparency, ownership, and trust.",
    icon: Database,
  },
];

const faqs = [
  {
    q: "Are submissions open right now?",
    a: "No. ASG is temporarily not accepting new submissions because manpower and backlog capacity need to be managed carefully.",
  },
  {
    q: "What makes ASG different?",
    a: "ASG is built around the mindset of aviation professionals: precision, repeatable standards, disciplined inspection, and trust-driven results.",
  },
  {
    q: "What are your target turnaround times?",
    a: "Bulk submissions are targeted at 4–6 weeks and Priority Express is targeted at 2–3 weeks once submissions reopen.",
  },
  {
    q: "Will cert lookup be real later?",
    a: "Yes. The website is being designed with future cert search, slab scanning, and vault-style verification in mind.",
  },
];

export default function ASGWebsite() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cert, setCert] = useState("");
  const [copied, setCopied] = useState(false);

  const certResult = useMemo(() => {
    if (!cert.trim()) return null;

    return {
      id: cert.toUpperCase(),
      card: "ASG Preview Record",
      set: "Certification Preview",
      number: "ASG-000102025",
      finalGrade: "10 GEM MINT SAMPLE",
      status: "Verified Preview",
    };
  }, [cert]);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.alert(CONTACT_EMAIL);
    }
  };

  const previewLookup = () => {
    if (!cert.trim()) setCert("ASG-000102025");
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-sky-500/15 blur-3xl" />
        <div className="absolute right-0 top-52 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute left-0 top-[70rem] h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-400 to-cyan-300 text-slate-950 shadow-lg shadow-sky-500/20">
              <Plane className="h-5 w-5" />
            </div>
            <div>
              <p className="text-lg font-black tracking-[0.24em]">ASG</p>
              <p className="text-xs uppercase tracking-[0.22em] text-slate-400">
                Aviation Standard Grading
              </p>
            </div>
          </div>

          <nav className="hidden items-center gap-8 md:flex">
            <a href="#story" className="text-sm text-slate-300 transition hover:text-white">Our Story</a>
            <a href="#standards" className="text-sm text-slate-300 transition hover:text-white">Standards</a>
            <a href="#pricing" className="text-sm text-slate-300 transition hover:text-white">Pricing</a>
            <a href="#lookup" className="text-sm text-slate-300 transition hover:text-white">Lookup</a>
            <a href="#vault" className="text-sm text-slate-300 transition hover:text-white">Vault</a>
            <a href="#contact" className="text-sm text-slate-300 transition hover:text-white">Contact</a>
          </nav>

          <div className="hidden md:block">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-2xl bg-white px-4 py-2 text-sm font-medium text-slate-950 hover:bg-slate-200"
            >
              Join the Waitlist
            </a>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-xl border border-white/10 p-2 text-slate-200 md:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-white/10 md:hidden">
            <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:px-8">
              <a href="#story" className="text-sm text-slate-300">Our Story</a>
              <a href="#standards" className="text-sm text-slate-300">Standards</a>
              <a href="#pricing" className="text-sm text-slate-300">Pricing</a>
              <a href="#lookup" className="text-sm text-slate-300">Lookup</a>
              <a href="#vault" className="text-sm text-slate-300">Vault</a>
              <a href="#contact" className="text-sm text-slate-300">Contact</a>
            </div>
          </div>
        )}
      </header>

      <main>
        <section className="relative">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-28">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-sky-400/10 px-4 py-2 text-sm text-sky-200">
                <Sparkles className="h-4 w-4" />
                Precision is non-negotiable
              </div>

              <div className="space-y-5">
                <h1 className="max-w-3xl text-5xl font-black leading-tight tracking-tight sm:text-6xl">
                  Aviation-inspired grading,
                  <span className="bg-gradient-to-r from-sky-300 to-cyan-300 bg-clip-text text-transparent">
                    {" "}built for collector trust.
                  </span>
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-slate-300">
                  ASG brings disciplined standards, premium presentation, and a future-forward
                  technology vision to card grading. Our brand is built around innovation,
                  precision, integrity, and confidence.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-4 text-base font-semibold text-slate-950 hover:bg-slate-200"
                >
                  Join the Waitlist
                  <ChevronRight className="ml-2 h-4 w-4" />
                </a>
                <a
                  href="#standards"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-6 py-4 text-base text-white hover:bg-white/10"
                >
                  Learn the ASG Standard
                </a>
              </div>

              <div className="grid max-w-2xl grid-cols-1 gap-4 pt-4 sm:grid-cols-3">
                <Card className="rounded-3xl border-white/10 bg-white/5 shadow-xl shadow-black/20">
                  <CardContent className="p-5">
                    <p className="text-2xl font-black">$8</p>
                    <p className="text-sm text-slate-400">Standard grading</p>
                  </CardContent>
                </Card>
                <Card className="rounded-3xl border-white/10 bg-white/5 shadow-xl shadow-black/20">
                  <CardContent className="p-5">
                    <p className="text-2xl font-black">$12</p>
                    <p className="text-sm text-slate-400">Priority Express</p>
                  </CardContent>
                </Card>
                <Card className="rounded-3xl border-white/10 bg-white/5 shadow-xl shadow-black/20">
                  <CardContent className="p-5">
                    <p className="text-2xl font-black">Closed</p>
                    <p className="text-sm text-slate-400">Submissions paused</p>
                  </CardContent>
                </Card>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.65 }}
              className="relative"
            >
              <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-sky-400/20 to-cyan-300/10 blur-2xl" />
              <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/70 shadow-2xl shadow-sky-950/40">
                <img
                  src="/asg-hero-tech.png"
                  alt="ASG premium precision grading hero visual"
                  className="h-full w-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
          <Card className="overflow-hidden rounded-[2rem] border-amber-400/20 bg-amber-400/10">
            <CardContent className="flex flex-col gap-5 p-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-3xl">
                <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-amber-300/20 bg-black/10 px-3 py-1 text-sm text-amber-100">
                  <AlertTriangle className="h-4 w-4" />
                  Submission Status
                </div>
                <h2 className="text-3xl font-black text-white">Submissions are temporarily closed</h2>
                <p className="mt-3 leading-7 text-slate-200">
                  ASG is not accepting new submissions right now due to manpower and backlog limits.
                  We are building carefully so the standard stays premium.
                </p>
              </div>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-4 text-base font-semibold text-slate-950 hover:bg-slate-200"
              >
                Get Launch Updates
              </a>
            </CardContent>
          </Card>
        </section>

        <section id="story" className="border-y border-white/10 bg-white/[0.03]">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1fr,1.05fr] lg:px-8">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-300">Our story</p>
              <h2 className="text-3xl font-black sm:text-4xl">
                A grading company shaped by real inspection culture
              </h2>
            </div>
            <div className="space-y-6 text-lg leading-8 text-slate-300">
              <p>
                ASG is built around the mindset of aviation professionals: strict standards,
                measured review, and attention to details others miss.
              </p>
              <p>
                We are taking that same culture and applying it to collector confidence —
                from slab presentation to future cert verification and digital vault systems.
              </p>
              <p>
                This is not just a grading company. It is a brand built around trust,
                technical discipline, and premium execution.
              </p>
            </div>
          </div>
        </section>

        <section id="standards" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-sky-300">
              The ASG standard
            </p>
            <h2 className="text-3xl font-black sm:text-4xl">Core beliefs backed by disciplined process</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <motion.div key={pillar.title} whileHover={{ y: -6 }} transition={{ duration: 0.2 }}>
                  <Card className="h-full rounded-[2rem] border-white/10 bg-white/5 shadow-xl shadow-black/20">
                    <CardContent className="p-7">
                      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-400/10 text-sky-300">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-bold">{pillar.title}</h3>
                      <p className="mt-3 leading-7 text-slate-300">{pillar.text}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </section>

        <section id="pricing" className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-sky-300">Pricing</p>
            <h2 className="text-3xl font-black sm:text-4xl">Simple pricing. Premium standards.</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <motion.div key={service.title} whileHover={{ y: -6 }} transition={{ duration: 0.2 }}>
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
                      <p className="mt-3 flex-1 leading-7 text-slate-300">{service.desc}</p>
                      <a href="#contact" className="mt-4 inline-flex items-center text-sky-300 hover:text-sky-200">
                        Ask about this service <ArrowRight className="ml-1 h-4 w-4" />
                      </a>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <Card className="rounded-[2rem] border-white/10 bg-slate-900/70">
              <CardContent className="p-7">
                <div className="mb-4 flex items-center gap-3 text-sky-300">
                  <Clock3 className="h-5 w-5" />
                  <h3 className="text-xl font-bold text-white">Turnaround goals</h3>
                </div>
                <div className="space-y-3 text-slate-300">
                  <p><span className="font-semibold text-white">Bulk:</span> 4–6 weeks</p>
                  <p><span className="font-semibold text-white">Priority Express:</span> 2–3 weeks</p>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-[2rem] border-white/10 bg-slate-900/70">
              <CardContent className="p-7">
                <div className="mb-4 flex items-center gap-3 text-sky-300">
                  <AlertTriangle className="h-5 w-5" />
                  <h3 className="text-xl font-bold text-white">Current availability</h3>
                </div>
                <p className="leading-7 text-slate-300">
                  Pricing is live, but submissions are paused until ASG is ready to handle demand
                  without lowering the standard.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="border-y border-white/10 bg-white/[0.03]">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
            <div className="mb-12 grid gap-10 lg:grid-cols-[1fr,1fr] lg:items-center">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-sky-300">
                  Inspection workflow
                </p>
                <h2 className="text-3xl font-black sm:text-4xl">
                  Technology-enhanced, standards-driven inspection
                </h2>
                <p className="mt-4 max-w-xl text-slate-300">
                  These visuals reflect the future-facing ASG vision: advanced inspection,
                  clean encapsulation, premium presentation, and disciplined review.
                </p>
              </div>
              <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/70 shadow-xl shadow-black/20">
                <img
                  src="/asg-lab-workflow.png"
                  alt="ASG advanced grading lab and inspection workflow"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {processSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <Card key={step.title} className="rounded-[2rem] border-white/10 bg-slate-900/70">
                    <CardContent className="p-6">
                      <div className="mb-5 flex items-center justify-between">
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 text-sky-300">
                          <Icon className="h-6 w-6" />
                        </div>
                        <span className="text-4xl font-black text-white/10">0{index + 1}</span>
                      </div>
                      <h3 className="text-xl font-bold">{step.title}</h3>
                      <p className="mt-3 leading-7 text-slate-300">{step.text}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <section id="lookup" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1fr,1fr]">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-sky-300">
                Certification lookup
              </p>
              <h2 className="text-3xl font-black sm:text-4xl">Built for verification, confidence, and future scanning</h2>
              <p className="mt-4 max-w-xl leading-7 text-slate-300">
                The current lookup experience is a preview, but the ASG vision includes searchable
                cert numbers, scannable slabs, secure records, and a trusted digital vault.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Input
                  value={cert}
                  onChange={(e) => setCert(e.target.value)}
                  placeholder="Enter a sample certification number"
                  className="h-12 rounded-2xl border-white/10 bg-white/5 text-white placeholder:text-slate-500"
                />
                <Button
                  type="button"
                  onClick={previewLookup}
                  className="h-12 rounded-2xl bg-white px-6 text-slate-950 hover:bg-slate-200"
                >
                  Preview Lookup
                </Button>
              </div>

              <Card className="mt-6 rounded-[2rem] border-white/10 bg-slate-900/70">
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
                      Search a sample cert number to preview the ASG verification layout.
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/70 shadow-xl shadow-black/20">
              <img
                src="/asg-vault-tech.png"
                alt="ASG certification lookup and digital vault technology"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </section>

        <section id="vault" className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-sky-300">
              Future cert vault
            </p>
            <h2 className="text-3xl font-black sm:text-4xl">
              Searchable certs. Scannable slabs. Secure records.
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {vaultSteps.map((step) => {
              const Icon = step.icon;
              return (
                <Card key={step.title} className="rounded-[2rem] border-white/10 bg-white/5 shadow-xl shadow-black/20">
                  <CardContent className="p-7">
                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-400/10 text-sky-300">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold">{step.title}</h3>
                    <p className="mt-3 leading-7 text-slate-300">{step.text}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1fr,0.9fr]">
            <Card className="rounded-[2rem] border-white/10 bg-white/5 shadow-xl shadow-black/20">
              <CardContent className="p-8">
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-sky-300">
                  Contact ASG
                </p>
                <h2 className="text-3xl font-black sm:text-4xl">Join the waitlist or ask a question</h2>
                <p className="mt-4 max-w-2xl leading-7 text-slate-300">
                  ASG is based in Tulsa, Oklahoma. Reach out for future availability,
                  launch updates, pricing questions, or certification technology interest.
                </p>

                <div className="mt-8 space-y-4">
                  <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-slate-900/60 p-4">
                    <Mail className="mt-1 h-5 w-5 text-sky-300" />
                    <div className="min-w-0">
                      <p className="font-semibold text-white">Email</p>
                      <p className="break-all text-slate-300">{CONTACT_EMAIL}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-slate-900/60 p-4">
                    <MapPin className="mt-1 h-5 w-5 text-sky-300" />
                    <div>
                      <p className="font-semibold text-white">Location</p>
                      <p className="text-slate-300">Tulsa, Oklahoma</p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:flex-wrap">
                    <a
                      href={`mailto:${CONTACT_EMAIL}?subject=ASG%20Waitlist%20Request`}
                      className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3 font-medium text-slate-950 hover:bg-slate-200"
                    >
                      Open Email App
                    </a>

                    <button
                      type="button"
                      onClick={copyEmail}
                      className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-medium text-white hover:bg-white/10"
                    >
                      {copied ? (
                        <>
                          <Check className="mr-2 h-4 w-4" />
                          Email Copied
                        </>
                      ) : (
                        <>
                          <Copy className="mr-2 h-4 w-4" />
                          Copy Email
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-[2rem] border-white/10 bg-slate-900/70">
              <CardContent className="p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-300">FAQ</p>
                <h3 className="mt-2 text-2xl font-black">Questions collectors ask first</h3>
                <div className="mt-6 space-y-4">
                  {faqs.map((item) => (
                    <div key={item.q} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                      <h4 className="text-lg font-bold">{item.q}</h4>
                      <p className="mt-3 leading-7 text-slate-300">{item.a}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
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
              <p className="font-black tracking-[0.24em]">ASG</p>
              <p className="text-sm text-slate-400">Aviation Standard Grading</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-6 text-sm text-slate-400">
            <a href="#story" className="hover:text-white">Our Story</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#lookup" className="hover:text-white">Lookup</a>
            <a href="#vault" className="hover:text-white">Vault</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>

          <p className="text-sm text-slate-500">© 2026 ASG — Aviation Standard Grading</p>
        </div>
      </footer>
    </div>
  );
}