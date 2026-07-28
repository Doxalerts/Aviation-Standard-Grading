"use client";

import { FormEvent, useState } from "react";

export function WaitlistForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [interest, setInterest] = useState("Pokémon cards");
  const [message, setMessage] = useState("");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!name.trim() || !email.trim()) {
      setMessage("Please enter your name and email address.");
      return;
    }
    const subject = encodeURIComponent("ASG Submission Waitlist Request");
    const body = encodeURIComponent(
      `Full Name: ${name.trim()}\nEmail: ${email.trim()}\nInterested In: ${interest.trim()}\n\nPlease add me to the ASG submission waitlist.`
    );
    setMessage("Your email app is opening with the request filled in.");
    window.location.href = `mailto:info@aviationstandardgrading.com?subject=${subject}&body=${body}`;
  }

  return (
    <form className="waitlist-form" onSubmit={submit}>
      <div className="form-grid">
        <label>
          Full name
          <input value={name} onChange={(event) => setName(event.target.value)} placeholder="Your name" />
        </label>
        <label>
          Email address
          <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="you@example.com" />
        </label>
      </div>
      <label>
        What are you interested in grading?
        <select value={interest} onChange={(event) => setInterest(event.target.value)}>
          <option>Pokémon cards</option>
          <option>Sports cards</option>
          <option>Trading card games</option>
          <option>Mixed collection</option>
          <option>Dealer or bulk submission</option>
        </select>
      </label>
      <button className="button button--primary button--wide" type="submit">Prepare Waitlist Email</button>
      {message ? <p className="form-message" role="status">{message}</p> : null}
      <p className="form-note">This opens a prefilled email to ASG. No information is stored in the browser.</p>
    </form>
  );
}
