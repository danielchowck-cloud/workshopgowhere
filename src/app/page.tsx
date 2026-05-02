import { SearchAndGrid } from "@/components/SearchAndGrid";
import { CommonFixCallout } from "@/components/CommonFixCallout";

export default function Home() {
  return (
    <div className="px-4 pb-16 pt-10">
      <section className="mx-auto max-w-3xl text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-700 dark:bg-orange-950/50 dark:text-orange-300">
          <span aria-hidden>🇸🇬</span> Phase 1 — Continental & EV specialists
        </div>
        <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
          Stop overpaying for your European car repair.
        </h1>
        <p className="mt-3 text-base text-neutral-600 dark:text-neutral-400 sm:text-lg">
          Pick your Mercedes, BMW, Audi, VW, Porsche, Volvo or EV. Tell us the symptom.
          We surface the right SG specialist — verified tools, OEM parts, fair pricing.
        </p>
        <p className="mt-2 text-sm text-neutral-500">
          Free for car owners. No commission on quotes — you talk to the workshop directly.
        </p>
      </section>

      <section className="mt-10">
        <SearchAndGrid />
      </section>

      <CommonFixCallout />

      <section className="mx-auto mt-12 grid max-w-5xl gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-neutral-200 bg-white p-5 dark:border-neutral-800 dark:bg-neutral-900">
          <div className="text-xl">📋</div>
          <h3 className="mt-2 font-semibold">Quote auditor (coming)</h3>
          <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
            Got a workshop quote that feels too high? Upload it (anonymously). We flag
            excessive labour hours or unnecessary parts.
          </p>
          <a href="/audit-my-quote" className="mt-3 inline-block text-sm font-medium text-orange-600 hover:underline">
            Submit a quote →
          </a>
        </div>
        <div className="rounded-2xl border border-neutral-200 bg-white p-5 dark:border-neutral-800 dark:bg-neutral-900">
          <div className="text-xl">📸</div>
          <h3 className="mt-2 font-semibold">AI dashboard scanner (coming)</h3>
          <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
            Photo of your warning lights → likely cause + nearest specialist. Built on
            Gemini Vision.
          </p>
          <span className="mt-3 inline-block text-sm text-neutral-500">In development</span>
        </div>
        <div className="rounded-2xl border border-neutral-200 bg-white p-5 dark:border-neutral-800 dark:bg-neutral-900">
          <div className="text-xl">🛠️</div>
          <h3 className="mt-2 font-semibold">List your workshop</h3>
          <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
            Continental / EV specialist in SG? Free listing during launch. Verified-Specialist
            badge for shops that pass our audit.
          </p>
          <a href="/submit" className="mt-3 inline-block text-sm font-medium text-orange-600 hover:underline">
            Get listed →
          </a>
        </div>
      </section>
    </div>
  );
}
