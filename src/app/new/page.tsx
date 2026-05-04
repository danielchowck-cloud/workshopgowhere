import { CAR_MODELS } from "@/data/carModels";
import { listings } from "@/data/listings";

const popularIssues = CAR_MODELS.flatMap((model) =>
  model.commonIssues.slice(0, 2).map((issue) => ({ model, issue })),
).slice(0, 8);

const brands = ["Mercedes-Benz", "BMW", "Audi", "Porsche", "Volvo", "Tesla"];

export const metadata = {
  title: "workshopgowhere — Problem-first diagnostic marketplace",
  description:
    "A problem-first preview of workshopgowhere for Singapore continental car owners.",
};

export default function NewHome() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-950 dark:bg-slate-950 dark:text-slate-50">
      <section className="relative overflow-hidden border-b border-slate-200 bg-[radial-gradient(circle_at_top,_#dbeafe,_transparent_34%),linear-gradient(180deg,_#ffffff,_#f8fafc)] px-4 py-12 dark:border-slate-800 dark:bg-[radial-gradient(circle_at_top,_#172554,_transparent_34%),linear-gradient(180deg,_#020617,_#0f172a)] sm:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="inline-flex rounded-full border border-blue-200 bg-white/80 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-blue-800 shadow-sm dark:border-blue-900 dark:bg-slate-900/80 dark:text-blue-200">
            Singapore continental car diagnostic guide
          </div>

          <div className="mt-6 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <h1 className="max-w-3xl text-4xl font-black leading-[0.98] tracking-tight text-slate-950 dark:text-white sm:text-6xl">
                Find out what&apos;s really wrong with your car.
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-700 dark:text-slate-300 sm:text-lg">
                Describe the issue. We&apos;ll show likely causes, fair repair prices, what proof to ask for, and Singapore workshops that can prove they can fix it.
              </p>

              <div className="mt-7 rounded-2xl border border-slate-200 bg-white p-3 shadow-xl shadow-blue-950/5 dark:border-slate-800 dark:bg-slate-900">
                <div className="flex flex-col gap-3 sm:flex-row">
                  <input
                    aria-label="Describe your car issue"
                    className="min-h-12 flex-1 rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm outline-none ring-blue-500 transition placeholder:text-slate-400 focus:ring-2 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                    placeholder="e.g. Mercedes W213 rear sinks overnight"
                  />
                  <a
                    href="#popular"
                    className="inline-flex min-h-12 items-center justify-center rounded-xl bg-blue-600 px-5 text-sm font-bold text-white shadow-lg shadow-blue-900/20 transition hover:bg-blue-700"
                  >
                    Check my issue
                  </a>
                </div>
                <div className="mt-3 flex flex-wrap gap-2 text-xs text-slate-500 dark:text-slate-400">
                  <span>Try:</span>
                  <a href="#w213-airmatic-drop" className="hover:text-blue-600">rear sinks overnight</a>
                  <span>·</span>
                  <a href="#w213-gearbox-jerk" className="hover:text-blue-600">gearbox jerking</a>
                  <span>·</span>
                  <a href="#w213-aircon-not-cold" className="hover:text-blue-600">aircon not cold</a>
                </div>
              </div>

              <p className="mt-4 text-sm font-medium text-slate-600 dark:text-slate-400">
                Mechanic-informed answers. Not paid workshop ads.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-2xl shadow-blue-950/10 dark:border-slate-800 dark:bg-slate-900">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Example result</p>
                  <h2 className="mt-2 text-xl font-black">W213 rear sinks overnight</h2>
                </div>
                <span className="rounded-full bg-amber-100 px-2.5 py-1 text-[10px] font-black uppercase tracking-wider text-amber-800 dark:bg-amber-950/40 dark:text-amber-200">
                  Check first
                </span>
              </div>

              <div className="mt-5 space-y-3 text-sm">
                <div className="rounded-2xl bg-blue-50 p-4 dark:bg-blue-950/35">
                  <div className="text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-300">Likely real fix</div>
                  <div className="mt-1 font-bold">Air suspension valve block leak test + replacement</div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 dark:border-emerald-900 dark:bg-emerald-950/25">
                    <div className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-300">Fair range</div>
                    <div className="mt-1 text-lg font-black">$300–450</div>
                  </div>
                  <div className="rounded-2xl border border-rose-200 bg-rose-50 p-4 dark:border-rose-900 dark:bg-rose-950/25">
                    <div className="text-xs font-bold uppercase tracking-wider text-rose-700 dark:text-rose-300">Trap quote</div>
                    <div className="mt-1 text-lg font-black">$3,000+</div>
                  </div>
                </div>
                <div className="rounded-2xl border border-slate-200 p-4 dark:border-slate-800">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500">Ask the workshop for</div>
                  <ul className="mt-2 space-y-1 text-slate-700 dark:text-slate-300">
                    <li>• XENTRY diagnostic scan</li>
                    <li>• Leak test proof before replacing struts</li>
                    <li>• Itemised quote with parts + labour</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="popular" className="mx-auto max-w-6xl px-4 py-12">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-700 dark:text-blue-300">Popular checks</p>
            <h2 className="mt-2 text-2xl font-black tracking-tight sm:text-3xl">Common problems owners search before going workshop</h2>
          </div>
          <p className="max-w-md text-sm text-slate-600 dark:text-slate-400">
            For people who don&apos;t want to ask yet — browse by real symptoms and known model issues.
          </p>
        </div>

        <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {popularIssues.map(({ model, issue }) => (
            <a
              key={`${model.id}-${issue.id}`}
              id={issue.id}
              href={`/audit-my-quote`}
              className="group rounded-2xl border border-slate-200 bg-white p-4 transition hover:-translate-y-0.5 hover:border-blue-400 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900 dark:hover:border-blue-500"
            >
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500">{model.brand} · {model.model}</div>
              <h3 className="mt-2 text-sm font-black leading-5 text-slate-950 group-hover:text-blue-700 dark:text-white dark:group-hover:text-blue-300">
                {issue.symptom}
              </h3>
              <div className="mt-3 flex items-center justify-between gap-3 text-xs">
                <span className="text-slate-500">Likely: {issue.likelyFix}</span>
                <span className="shrink-0 font-black text-blue-700 dark:text-blue-300">→</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white px-4 py-12 dark:border-slate-800 dark:bg-slate-900/50">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-700 dark:text-blue-300">Coverage</p>
            <h2 className="mt-2 text-2xl font-black tracking-tight sm:text-3xl">Start continental. Expand by problem depth.</h2>
            <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-400">
              The homepage should not feel Mercedes-only. Mercedes can be the first rich dataset, while the product promise stays broader: continental car diagnostics in Singapore.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {brands.map((brand, index) => (
              <div key={brand} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950">
                <div className="text-sm font-black">{brand}</div>
                <div className="mt-2 text-xs text-slate-500">
                  {index === 0 ? "Live issue library" : "Next brand path"}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-5 lg:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
            <div className="text-2xl">1</div>
            <h3 className="mt-3 font-black">Diagnosis before directory</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
              Users arrive with a pain. Answer the pain first, then recommend workshops.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
            <div className="text-2xl">2</div>
            <h3 className="mt-3 font-black">Proof-based trust</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
              Every recommendation explains what diagnostic scan, photo, or itemised proof to request.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
            <div className="text-2xl">3</div>
            <h3 className="mt-3 font-black">Workshops still win</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
              Good specialists get leads because they can prove capability, not because they bought placement.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div className="rounded-3xl bg-slate-950 p-6 text-white shadow-2xl shadow-slate-950/20 sm:p-8">
          <div className="grid gap-6 lg:grid-cols-[1fr_360px] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-300">Preview</p>
              <h2 className="mt-2 text-2xl font-black tracking-tight sm:text-3xl">Compare this against current homepage.</h2>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Current page leads with specialists. This version leads with the user&apos;s problem, then moves into issue library and marketplace.
              </p>
            </div>
            <div className="grid gap-3 text-sm">
              <a href="/" className="rounded-xl bg-white px-4 py-3 text-center font-bold text-slate-950 hover:bg-blue-50">View current homepage</a>
              <a href="/submit" className="rounded-xl border border-white/20 px-4 py-3 text-center font-bold text-white hover:bg-white/10">List a workshop</a>
            </div>
          </div>
        </div>
      </section>

      <div className="hidden">{listings.length} workshops loaded for marketplace comparison.</div>
    </div>
  );
}
