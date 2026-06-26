"use client";

import { FormEvent, useState } from "react";

export default function Home() {
  const [cert, setCert] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [interest, setInterest] = useState("");

  function searchCert(event: FormEvent) {
    event.preventDefault();

    const cleanCert = cert.trim().replace("#", "");

    if (!cleanCert) return;

    window.location.href = `/cert/${cleanCert}`;
  }

  function joinWaitlist(event: FormEvent) {
    event.preventDefault();

    const subject = encodeURIComponent("ASG Waitlist Request");
    const body = encodeURIComponent(
      `Full Name: ${name}\nEmail: ${email}\nInterested In: ${interest}`
    );

    window.location.href = `mailto:info@aviationstandardgrading.com?subject=${subject}&body=${body}`;
  }

  return (
    <main className="asg-page">
      <section className="asg-homepage-frame">
        <img
          src="/asg-homepage.png"
          alt="Aviation Standard Grading homepage"
          className="asg-homepage-image"
        />

        {/* Top navigation */}
        <a className="hotspot nav-home" href="/" aria-label="Home" />
        <a className="hotspot nav-standard" href="#standard" aria-label="The Standard" />
        <a className="hotspot nav-process" href="#process" aria-label="Process" />
        <a className="hotspot nav-pricing" href="#pricing" aria-label="Pricing" />
        <a className="hotspot nav-cert" href="#cert" aria-label="Cert Lookup" />
        <a className="hotspot nav-waitlist" href="#waitlist" aria-label="Waitlist" />
        <a className="hotspot top-search" href="#cert" aria-label="Search Cert" />

        {/* Hero buttons */}
        <a className="hotspot hero-search" href="#cert" aria-label="Search a Cert" />
        <a className="hotspot hero-waitlist" href="#waitlist" aria-label="Join the Waitlist" />

        {/* Invisible section anchors */}
        <div id="standard" className="anchor standard-anchor" />
        <div id="process" className="anchor process-anchor" />
        <div id="pricing" className="anchor pricing-anchor" />
        <div id="cert" className="anchor cert-anchor" />
        <div id="waitlist" className="anchor waitlist-anchor" />

        {/* Real cert lookup overlay */}
        <form className="cert-form" onSubmit={searchCert}>
          <input
            value={cert}
            onChange={(event) => setCert(event.target.value)}
            placeholder="Enter cert number"
            aria-label="Enter cert number"
          />
          <button type="submit" aria-label="Search certification">
            Search Cert
          </button>
        </form>

        {/* Real waitlist overlay */}
        <form className="waitlist-form" onSubmit={joinWaitlist}>
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Full Name"
            aria-label="Full Name"
          />

          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Email Address"
            aria-label="Email Address"
          />

          <input
            value={interest}
            onChange={(event) => setInterest(event.target.value)}
            placeholder="What are you interested in grading?"
            aria-label="What are you interested in grading?"
          />

          <button type="submit" aria-label="Join waitlist">
            Join Waitlist
          </button>
        </form>
      </section>
    </main>
  );
}
