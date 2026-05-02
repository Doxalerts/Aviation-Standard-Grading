"use client";

import { useState } from "react";
import Image from "next/image";

const certs = [
  {
    certNumber: "ASG-000001",
    cardName: "Charizard ex",
    setName: "Japanese Promo",
    year: "2023",
    grade: "10",
    status: "Verified",
    image: "/asg-card-showcase.png",
  },
];

export default function CertLookupPage() {
  const [search, setSearch] = useState("");
  const [card, setCard] = useState<any>(null);
  const [searched, setSearched] = useState(false);

  function handleSearch() {
    const found = certs.find(
      (item) => item.certNumber.toLowerCase() === search.trim().toLowerCase()
    );

    setCard(found || null);
    setSearched(true);
  }

  return (
    <main className="min-h-screen bg-[#020817] px-6 py-12 text-white">
      <section className="mx-auto max-w-4xl">
        <a href="/" className="mb-8 inline-block text-sky-300">
          ← Back to ASG
        </a>

        <h1 className="mb-4 text-5xl font-black">ASG Cert Lookup</h1>

        <p className="mb-8 text-blue-100/80">
          Enter an ASG certification number to verify a graded card.
        </p>

        <div className="mb-10 rounded-3xl border border-white/15 bg-white/5 p-6">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Example: ASG-000001"
            className="mb-4 w-full rounded-xl border border-white/20 bg-black/30 p-4 text-white outline-none"
          />

          <button
            onClick={handleSearch}
            className="rounded-full bg-sky-400 px-7 py-4 font-black text-black"
          >
            Search Vault
          </button>
        </div>

        {card && (
          <div className="grid gap-8 rounded-3xl border border-sky-300/30 bg-white/5 p-6 md:grid-cols-2">
            <Image
              src={card.image}
              alt={card.cardName}
              width={800}
              height={1000}
              className="rounded-2xl"
            />

            <div>
              <p className="mb-4 inline-block rounded-full bg-green-500 px-4 py-2 font-black text-black">
                ASG VERIFIED
              </p>

              <h2 className="mb-4 text-4xl font-black">{card.cardName}</h2>

              <p><strong>Cert #:</strong> {card.certNumber}</p>
              <p><strong>Set:</strong> {card.setName}</p>
              <p><strong>Year:</strong> {card.year}</p>
              <p><strong>Grade:</strong> {card.grade}</p>
              <p><strong>Status:</strong> {card.status}</p>
            </div>
          </div>
        )}

        {!card && searched && (
          <div className="rounded-3xl border border-red-400/30 bg-red-950/30 p-6">
            <h2 className="text-2xl font-black text-red-300">
              Cert Not Found
            </h2>
            <p className="text-red-100/80">
              No ASG vault record was found for that certification number.
            </p>
          </div>
        )}
      </section>
    </main>
  );
}