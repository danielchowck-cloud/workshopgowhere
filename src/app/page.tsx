import { SmartSymptomSearch } from "@/components/SmartSymptomSearch";

export default function Home() {
  return (
    <div className="px-4 pb-16 pt-10">
      {/* HERO */}
      <section className="mx-auto max-w-4xl text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-blue-300 bg-blue-50 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-blue-800 dark:border-blue-800 dark:bg-blue-950/40 dark:text-blue-200">
          <span aria-hidden>🇸🇬</span> Singapore Mercedes-Benz Specialist Marketplace
        </div>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-5xl">
          Stop falling for the{" "}
          <span className="text-blue-600 dark:text-blue-400">$3,000 absorber trap.</span>
        </h1>
        <p className="mt-4 text-base text-slate-700 dark:text-slate-300 sm:text-lg">
          Pick your Mercedes, BMW, Audi, Porsche, Volvo or Tesla. Pick what&apos;s wrong. We tell you
          the most likely real fix, the fair-market price, and which verified Singapore specialists
          can do it — with diagnostic-tool proof and itemised quotes.
        </p>
        <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
          Free for owners · Diagnostic tips written by mechanics, not marketers.
        </p>
      </section>

      {/* SMART SYMPTOM SEARCH (primary feature) */}
      <section className="mx-auto mt-10 max-w-7xl">
        <SmartSymptomSearch />
      </section>

      {/* WHY THIS EXISTS */}
      <section className="section-rule mx-auto mt-16 max-w-5xl pt-10">
        <h2 className="text-center text-xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
          Why this exists
        </h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-3">
          <div className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
            <div className="text-xl">🧠</div>
            <h3 className="mt-2 text-sm font-bold text-slate-900 dark:text-slate-100">Intelligence over ads</h3>
            <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
              Most workshop sites are paid listings. We tell you what&apos;s LIKELY wrong with your car
              FIRST, then match a specialist who can fix it for fair money.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
            <div className="text-xl">⚖️</div>
            <h3 className="mt-2 text-sm font-bold text-slate-900 dark:text-slate-100">Authority on the trap</h3>
            <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
              The W213 air-suspension &quot;strut&quot; quote ($3,000+) is almost always a $300 valve block.
              The N20 cold-start rattle is a $1,800 chain, not a $4,500 engine job. We document the
              traps.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
            <div className="text-xl">🛡️</div>
            <h3 className="mt-2 text-sm font-bold text-slate-900 dark:text-slate-100">Friction for dishonesty</h3>
            <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
              Show a workshop the &quot;fair price&quot; estimate on your phone. They know they can&apos;t easily
              overcharge. Quote auditor on every result page.
            </p>
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="mx-auto mt-16 max-w-5xl">
        <div className="grid gap-4 sm:grid-cols-2">
          <a
            href="/audit-my-quote"
            className="group rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-blue-500 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-blue-400"
          >
            <div className="text-xl">📋</div>
            <h3 className="mt-2 text-sm font-bold text-slate-900 dark:text-slate-100">
              Got a quote already?
            </h3>
            <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
              Email us your repair quote (PDF or photo) and the symptom. We&apos;ll value-check it
              against verified-specialist averages within 1-2 days. Free during launch.
            </p>
            <span className="mt-3 inline-block text-xs font-semibold text-blue-700 group-hover:underline dark:text-blue-300">
              Submit a quote →
            </span>
          </a>
          <a
            href="/submit"
            className="group rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-blue-500 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-blue-400"
          >
            <div className="text-xl">🛠️</div>
            <h3 className="mt-2 text-sm font-bold text-slate-900 dark:text-slate-100">
              Specialist workshop?
            </h3>
            <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
              Continental / EV specialist in SG with XENTRY / ISTA / ODIS / PIWIS / VIDA / Tesla
              Toolbox? Free Verified Specialist listing during launch. Transparency Score boosts
              ranking.
            </p>
            <span className="mt-3 inline-block text-xs font-semibold text-blue-700 group-hover:underline dark:text-blue-300">
              Get listed →
            </span>
          </a>
        </div>
      </section>
    </div>
  );
}
