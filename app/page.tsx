export default function Home() {
  return (
    <main className="min-h-screen bg-[#020811] text-white">
      <section className="min-h-screen px-8 py-8 bg-[radial-gradient(circle_at_70%_20%,rgba(201,154,74,0.18),transparent_28%),linear-gradient(180deg,#020811,#06111e,#020811)]">
        <nav className="flex items-center justify-between border-b border-[#c99a4a55] pb-6">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-20 items-center justify-center rounded-xl border-2 border-[#c99a4a] text-xl font-black text-[#f0c777]">
              SAG
            </div>
            <div>
              <div className="text-2xl font-black tracking-[0.25em]">
                STANDARD
              </div>
              <div className="text-sm tracking-[0.35em]">
                AVIATION GRADING
              </div>
            </div>
          </div>

          <div className="hidden gap-8 text-xs font-bold uppercase tracking-[0.18em] md:flex">
            <a href="#standard">The Standard</a>
            <a href="#process">Process</a>
            <a href="#pricing">Pricing</a>
            <a href="#cert">Cert Lookup</a>
            <a href="#waitlist">Waitlist</a>
          </div>

          <a
            href="#cert"
            className="rounded border border-[#c99a4a] px-5 py-3 text-xs font-black uppercase tracking-[0.18em]"
          >
            Search Cert
          </a>
        </nav>

        <div className="grid gap-12 py-20 lg:grid-cols-2">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#f0c777]">
              Precision Card Grading
            </p>

            <h1 className="mb-6 text-5xl font-black uppercase leading-none tracking-wide md:text-7xl">
              Built on <br />
              Aviation Discipline.
            </h1>

            <div className="mb-8 flex max-w-md items-center gap-5 text-[#f0c777]">
              <div className="h-px flex-1 bg-[#c99a4a]" />
              ✈
              <div className="h-px flex-1 bg-[#c99a4a]" />
            </div>

            <p className="mb-6 max-w-xl text-lg leading-8 text-slate-300">
              Standard Aviation Grading was created for collectors who want
              their cards inspected, sealed, and presented with a higher level
              of care. Our process is focused on consistency, documentation,
              presentation, and trust.
            </p>

            <div className="mb-8 max-w-xl rounded border border-[#c99a4a88] bg-black/30 p-5">
              <p className="mb-1 font-black uppercase tracking-wide text-[#f0c777]">
                Submissions are currently paused
              </p>
              <p className="text-slate-300">
                while we complete existing volume and prepare for the next
                intake window.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="#cert"
                className="rounded bg-gradient-to-r from-[#8f6427] via-[#e1b96f] to-[#8f6427] px-8 py-4 font-black uppercase tracking-wide"
              >
                Search a Cert
              </a>

              <a
                href="#waitlist"
                className="rounded border border-[#c99a4a] px-8 py-4 font-black uppercase tracking-wide"
              >
                Join the Waitlist
              </a>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="w-full max-w-sm rounded-[2rem] border-4 border-white/40 bg-white/10 p-5 shadow-2xl">
              <div className="rounded-2xl border border-white/20 bg-black/40 p-4">
                <div className="mb-4 grid grid-cols-[1fr_80px] gap-3 border border-white/20 bg-black p-3">
                  <div>
                    <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#f0c777]">
                      ✈ Standard Aviation Grading
                    </p>
                    <p className="text-xs font-black uppercase leading-5">
                      2023 Pokémon
                      <br />
                      Charizard ex
                      <br />
                      Cert #000128
                    </p>
                  </div>

                  <div className="flex flex-col items-center justify-center border border-white/30">
                    <div className="text-5xl font-black">10</div>
                    <div className="text-[10px] font-bold uppercase">
                      Pristine
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border-8 border-orange-500 bg-gradient-to-br from-sky-700 via-orange-400 to-red-900 p-4 text-black">
                  <div className="mb-8 flex justify-between rounded-full bg-white/70 px-3 py-1 font-black">
                    <span>Charizard ex</span>
                    <span>330</span>
                  </div>

                  <div className="mb-8 text-center text-8xl">🔥</div>

                  <div className="mb-2 rounded bg-white/60 p-2 text-sm font-black">
                    Brave Wing — 60+
                  </div>

                  <div className="rounded bg-white/60 p-2 text-sm font-black">
                    Explosive Vortex — 330
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="grid border-y border-[#c99a4a55] md:grid-cols-4">
          {[
            ["Inspection", "Detailed card review across major grading categories."],
            ["Protection", "Cards are sealed in clean slabs for long-term preservation."],
            ["Certification", "Every slab receives a unique cert record."],
            ["Consistency", "A grading approach inspired by aviation-level discipline."],
          ].map(([title, text]) => (
            <div key={title} className="border-[#c99a4a55] p-8 text-center md:border-r">
              <h3 className="mb-3 font-black uppercase tracking-wide text-[#f0c777]">
                {title}
              </h3>
              <p className="text-slate-300">{text}</p>
            </div>
          ))}
        </section>

        <section
          id="standard"
          className="grid gap-10 border-b border-[#c99a4a55] py-16 lg:grid-cols-2"
        >
          <div>
            <p className="mb-2 font-black uppercase tracking-[0.2em] text-[#f0c777]">
              The Standard
            </p>
            <h2 className="mb-5 text-3xl font-black uppercase">
              Built Around Inspection, Not Hype.
            </h2>
            <p className="max-w-xl text-slate-300">
              Every card deserves a careful review. Our grading process is
              designed around the same mindset used in aviation: slow down,
              inspect clearly, document the result, and protect the final
              product.
            </p>
          </div>

          <div className="grid grid-cols-2 rounded border border-white/15 md:grid-cols-3">
            {["Centering", "Surface", "Corners", "Edges", "Print Quality", "Eye Appeal"].map(
              (item) => (
                <div
                  key={item}
                  className="flex min-h-28 items-center justify-center border border-white/10 p-5 text-center font-bold uppercase tracking-wide"
                >
                  {item}
                </div>
              )
            )}
          </div>
        </section>

        <section
          id="process"
          className="grid gap-10 border-b border-[#c99a4a55] py-16 lg:grid-cols-2"
        >
          <div>
            <p className="mb-2 font-black uppercase tracking-[0.2em] text-[#f0c777]">
              The Process
            </p>
            <h2 className="text-3xl font-black uppercase">
              The SAG Grading Process
            </h2>
          </div>

          <div className="space-y-5">
            {[
              ["01", "Pre-Flight Review"],
              ["02", "Precision Inspection"],
              ["03", "Grade Assignment"],
              ["04", "Slab & Seal"],
              ["05", "Cert Archive"],
            ].map(([num, title]) => (
              <div key={num} className="grid grid-cols-[60px_1fr] gap-4 border-b border-white/10 pb-4">
                <div className="text-3xl font-black text-[#c99a4a]">{num}</div>
                <div>
                  <h3 className="font-black uppercase tracking-wide">{title}</h3>
                  <p className="text-sm text-slate-300">
                    Controlled review, documentation, and presentation for every
                    graded card.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section
          id="pricing"
          className="grid gap-10 border-b border-[#c99a4a55] py-16 lg:grid-cols-2"
        >
          <div>
            <p className="mb-2 font-black uppercase tracking-[0.2em] text-[#f0c777]">
              Current Pricing
            </p>
            <h2 className="mb-5 text-3xl font-black uppercase">
              Public Submissions Paused
            </h2>

            <div className="overflow-hidden rounded border border-[#c99a4a55]">
              <div className="grid grid-cols-3 bg-black/30 p-4 text-xs font-black uppercase tracking-wide text-[#f0c777]">
                <div>Tier</div>
                <div>Price</div>
                <div>Turnaround</div>
              </div>

              <div className="grid grid-cols-3 border-t border-white/10 p-4">
                <div>Bulk Grading</div>
                <div>$8/card</div>
                <div>4–6 weeks</div>
              </div>

              <div className="grid grid-cols-3 border-t border-white/10 p-4">
                <div>Priority Express</div>
                <div>$12/card</div>
                <div>2–3 weeks</div>
              </div>
            </div>
          </div>

          <div id="cert">
            <p className="mb-2 font-black uppercase tracking-[0.2em] text-[#f0c777]">
              Verify a Cert
            </p>
            <h2 className="mb-5 text-3xl font-black uppercase">
              Cert Lookup
            </h2>

            <div className="flex max-w-xl">
              <input
                className="flex-1 rounded-l border border-white/20 bg-black/30 p-4 text-white"
                placeholder="Enter cert number"
              />
              <button className="rounded-r bg-gradient-to-r from-[#8f6427] to-[#e1b96f] px-6 font-black uppercase">
                Search Cert
              </button>
            </div>

            <div className="mt-5 rounded border border-white/15 bg-black/30 p-5">
              <p className="font-black">
                Cert #000128{" "}
                <span className="text-green-400">● Verified</span>
              </p>
              <p className="text-slate-300">2023 Pokémon Charizard ex</p>
              <p className="text-slate-300">Grade: PRISTINE 10</p>
              <p className="text-slate-300">Date Graded: June 10, 2026</p>
            </div>
          </div>
        </section>

        <section
          id="waitlist"
          className="my-10 rounded border border-[#c99a4a55] bg-black/30 p-8"
        >
          <h2 className="mb-2 text-3xl font-black uppercase">
            Be First When Submissions Reopen
          </h2>
          <p className="mb-6 text-slate-300">
            Join the waitlist and be notified as soon as a new intake opens.
          </p>

          <div className="grid gap-4 md:grid-cols-4">
            <input className="rounded border border-white/20 bg-black/30 p-4 text-white" placeholder="Full Name" />
            <input className="rounded border border-white/20 bg-black/30 p-4 text-white" placeholder="Email Address" />
            <input className="rounded border border-white/20 bg-black/30 p-4 text-white" placeholder="Interested in grading..." />
            <button className="rounded bg-gradient-to-r from-[#8f6427] to-[#e1b96f] px-6 font-black uppercase">
              Join Waitlist
            </button>
          </div>
        </section>

        <footer className="border-t border-[#c99a4a55] py-10 text-center text-slate-400">
          © 2026 Standard Aviation Grading. All rights reserved.
        </footer>
      </section>
    </main>
  );
}
