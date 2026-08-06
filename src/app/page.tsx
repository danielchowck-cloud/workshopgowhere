import { CAR_MODELS } from "@/data/carModels";
import { ProblemLibrary } from "@/components/ProblemLibrary";
import { listings } from "@/data/listings";
import { getAllIssues, getIssue, getIssueSeoSlug, ownerFacingModelLabel } from "@/lib/directory";

const popularIssues = CAR_MODELS.flatMap((model) =>
  model.commonIssues.slice(0, 2).map((issue) => ({ model, issue })),
).slice(0, 8);

// All problem URLs for the orphan-fix grid (P0-2 from SEO audit 2026-05-06)
const allProblemLinks = getAllIssues().map((issue) => ({
  slug: getIssueSeoSlug(issue),
  brand: issue.model.brand,
  modelLabel: ownerFacingModelLabel(issue.model),
  symptom: issue.symptom,
}));

// Helper for hero "Try:" chips — resolves issue id to real /car-problems/[slug] URL
function heroLinkFor(issueId: string): string {
  const issue = getIssue(issueId);
  return issue ? `/car-problems/${getIssueSeoSlug(issue)}` : "/";
}

export const metadata = {
  title: "workshopgowhere — Problem-first diagnostic marketplace",
  description:
    "Find likely causes, fair repair prices and Singapore specialist workshops for Continental car problems.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-950 dark:bg-slate-950 dark:text-slate-50">
      <section className="relative overflow-hidden px-5 pt-14 pb-16 sm:pt-20 sm:pb-20">
        <div className="pointer-events-none absolute -top-24 right-[-10%] h-[480px] w-[480px] rounded-full bg-blue-200/30 blur-3xl dark:bg-blue-900/20" />
        <div className="relative mx-auto grid max-w-6xl gap-y-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:gap-x-16">
          <div>
            <p className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-blue-700 dark:text-blue-300">
              <span className="h-px w-6 bg-blue-700 dark:bg-blue-300" />
              Singapore car repair, decoded
            </p>
            <h1 className="font-display mt-5 max-w-2xl text-[2.6rem] font-semibold leading-[1.02] tracking-[-0.02em] text-slate-950 dark:text-white sm:text-6xl">
              Know the real fix{" "}
              <span className="italic text-blue-700 dark:text-blue-400">before</span>{" "}
              you approve the quote.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              Describe the symptom. We show the likely root cause, the fair Singapore price, the proof to demand, and specialists who can actually fix it — so a $400 job never becomes a $3,000 one.
            </p>

            <div className="mt-8 max-w-xl">
              <div className="flex flex-col gap-2.5 rounded-2xl border border-slate-300/70 bg-white p-2 shadow-sm transition focus-within:border-blue-500 focus-within:shadow-md sm:flex-row dark:border-slate-700 dark:bg-slate-900">
                <input
                  aria-label="Describe your car issue"
                  className="min-h-12 flex-1 rounded-xl bg-transparent px-4 text-base outline-none placeholder:text-slate-400 dark:text-white"
                  placeholder="e.g. Mercedes E-Class rear sinks overnight"
                />
                <a
                  href="#popular"
                  className="inline-flex min-h-12 items-center justify-center rounded-xl bg-blue-700 px-6 text-sm font-semibold text-white transition hover:bg-blue-800"
                >
                  Diagnose it
                </a>
              </div>
              <div className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 px-1 text-sm text-slate-500 dark:text-slate-400">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Popular</span>
                <a href={heroLinkFor("w213-airmatic-drop")} className="underline decoration-slate-300 underline-offset-4 transition hover:text-blue-700 hover:decoration-blue-400 dark:decoration-slate-600 dark:hover:text-blue-300">rear sinks overnight</a>
                <span className="text-slate-300 dark:text-slate-600">·</span>
                <a href={heroLinkFor("w213-gearbox-jerk")} className="underline decoration-slate-300 underline-offset-4 transition hover:text-blue-700 hover:decoration-blue-400 dark:decoration-slate-600 dark:hover:text-blue-300">gearbox jerking</a>
                <span className="text-slate-300 dark:text-slate-600">·</span>
                <a href={heroLinkFor("w213-aircon-not-cold")} className="underline decoration-slate-300 underline-offset-4 transition hover:text-blue-700 hover:decoration-blue-400 dark:decoration-slate-600 dark:hover:text-blue-300">aircon not cold</a>
              </div>
            </div>

            <p className="mt-6 text-sm font-medium text-slate-500 dark:text-slate-400">
              Mechanic-informed. Independent. <span className="text-slate-700 dark:text-slate-200">Never paid workshop ads.</span>
            </p>
          </div>

          {/* Signature motif: the gap between a fair price and a trap quote */}
          <figure className="relative">
            <div className="rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-[0_24px_70px_-30px_rgba(15,23,42,0.35)] dark:border-slate-800 dark:bg-slate-900">
              <figcaption className="flex items-baseline justify-between gap-3">
                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400">Real example</span>
                <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">Mercedes E-Class · airmatic</span>
              </figcaption>
              <p className="font-display mt-3 text-2xl font-semibold leading-snug text-slate-900 dark:text-white">
                &ldquo;Rear sinks to the ground overnight.&rdquo;
              </p>

              <div className="mt-7 flex items-end gap-5">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">Fair fix</div>
                  <div className="mt-1 text-4xl font-extrabold tracking-tight text-emerald-700 dark:text-emerald-400">$400</div>
                  <div className="mt-1 text-xs text-slate-500 dark:text-slate-400">valve block leak test + reseal</div>
                </div>
                <div className="mb-2 flex-1 border-t border-dashed border-slate-300 dark:border-slate-700" />
                <div className="text-right">
                  <div className="text-xs font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400">Trap quote</div>
                  <div className="mt-1 text-4xl font-extrabold tracking-tight text-rose-600 line-through decoration-2 dark:text-rose-400">$3,000</div>
                  <div className="mt-1 text-xs text-slate-500 dark:text-slate-400">&ldquo;replace all four struts&rdquo;</div>
                </div>
              </div>

              <div className="mt-7 border-t border-slate-200 pt-5 dark:border-slate-800">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500">Ask before you pay</div>
                <ul className="mt-3 space-y-2 text-sm text-slate-700 dark:text-slate-200">
                  <li className="flex gap-2.5"><span className="mt-0.5 text-blue-600 dark:text-blue-400">→</span> XENTRY diagnostic scan, not a guess</li>
                  <li className="flex gap-2.5"><span className="mt-0.5 text-blue-600 dark:text-blue-400">→</span> Leak test proof before any strut is touched</li>
                  <li className="flex gap-2.5"><span className="mt-0.5 text-blue-600 dark:text-blue-400">→</span> Itemised quote: parts and labour split out</li>
                </ul>
              </div>
            </div>
            <div className="absolute -bottom-3 left-8 right-8 -z-10 h-10 rounded-b-[1.75rem] bg-slate-900/5 blur-xl dark:bg-black/40" />
          </figure>
        </div>
      </section>

      <section id="popular" className="border-t border-slate-200 bg-white px-5 py-16 dark:border-slate-800 dark:bg-slate-900/40">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-700 dark:text-blue-300">Start with a symptom</p>
            <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">The problems owners search right before the workshop visit</h2>
            <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-400">
              Each guide gives the likely cause, the fair price, and the trap to watch for. Not a final diagnosis — the questions that stop you overpaying.
            </p>
          </div>

          <div className="mt-10 grid gap-x-10 gap-y-0 sm:grid-cols-2">
            {popularIssues.map(({ model, issue }) => (
              <a
                key={`${model.id}-${issue.id}`}
                id={issue.id}
                href={`/car-problems/${getIssueSeoSlug({ ...issue, model })}`}
                className="group flex items-start gap-5 border-b border-slate-200 py-6 transition dark:border-slate-800"
              >
                <div className="min-w-0 flex-1">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    {model.brand} · {ownerFacingModelLabel(model)}
                  </div>
                  <h3 className="mt-1.5 text-lg font-bold leading-snug text-slate-900 transition group-hover:text-blue-700 dark:text-white dark:group-hover:text-blue-300">
                    {issue.symptom}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
                    {issue.likelyFix}
                  </p>
                  <div className="mt-3 flex items-center gap-3 text-sm font-semibold">
                    <span className="text-emerald-700 dark:text-emerald-400">Fair ${issue.realFixPrice[0].toLocaleString()}–{issue.realFixPrice[1].toLocaleString()}</span>
                    <span className="text-slate-300 dark:text-slate-600">vs</span>
                    <span className="text-rose-600 line-through decoration-1 dark:text-rose-400">${issue.agentTrapPrice[0].toLocaleString()}+ trap</span>
                  </div>
                </div>
                <span className="mt-1 shrink-0 text-slate-300 transition group-hover:translate-x-1 group-hover:text-blue-600 dark:text-slate-600 dark:group-hover:text-blue-400" aria-hidden>→</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-12">
        <ProblemLibrary problems={allProblemLinks} />
      </section>

      <section className="border-t border-slate-200 px-5 py-16 dark:border-slate-800">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-700 dark:text-blue-300">Find a specialist</p>
              <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Workshops by marque</h2>
            </div>
            <a href="/workshops" className="text-sm font-semibold text-blue-700 underline decoration-blue-300 underline-offset-4 hover:decoration-blue-500 dark:text-blue-300">
              All 42 workshops, 6 regions →
            </a>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 sm:grid-cols-3 lg:grid-cols-4 dark:border-slate-800 dark:bg-slate-800">
            {[
              { brand: "Mercedes-Benz", slug: "mercedes-workshop-singapore" },
              { brand: "BMW", slug: "bmw-workshop-singapore" },
              { brand: "Porsche", slug: "porsche-workshop-singapore" },
              { brand: "Audi", slug: "audi-workshop-singapore" },
              { brand: "Volkswagen", slug: "volkswagen-workshop-singapore" },
              { brand: "Alfa Romeo", slug: "alfa-romeo-workshop-singapore" },
              { brand: "Land Rover", slug: "land-rover-workshop-singapore" },
              { brand: "Jaguar", slug: "jaguar-workshop-singapore" },
              { brand: "MINI", slug: "mini-workshop-singapore" },
              { brand: "Maserati", slug: "maserati-workshop-singapore" },
              { brand: "Volvo", slug: "volvo-workshop-singapore" },
              { brand: "Tesla", slug: "tesla-workshop-singapore" },
              { brand: "BYD", slug: "byd-workshop-singapore" },
            ].map(({ brand, slug }) => (
              <a
                key={brand}
                href={`/${slug}`}
                className="group flex items-center justify-between gap-2 bg-slate-50 px-5 py-5 transition hover:bg-white dark:bg-slate-950 dark:hover:bg-slate-900"
              >
                <span className="font-display text-lg font-semibold text-slate-900 dark:text-white">{brand}</span>
                <span className="text-slate-300 transition group-hover:translate-x-0.5 group-hover:text-blue-600 dark:text-slate-600 dark:group-hover:text-blue-400" aria-hidden>→</span>
              </a>
            ))}
            <a href="/workshops" className="flex items-center justify-between gap-2 bg-slate-900 px-5 py-5 text-white transition hover:bg-slate-800 dark:bg-blue-700 dark:hover:bg-blue-600">
              <span className="text-sm font-semibold">Every workshop</span>
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white px-5 py-16 dark:border-slate-800 dark:bg-slate-900/40">
        <div className="mx-auto grid max-w-6xl gap-x-12 gap-y-10 lg:grid-cols-3">
          {[
            { n: "01", h: "Diagnosis before directory", p: "You arrive with a pain, not a shortlist. We answer the symptom first — then point to workshops." },
            { n: "02", h: "Proof, not promises", p: "Every guide names the exact scan, photo or itemised quote to demand before any part gets replaced." },
            { n: "03", h: "No paid placement", p: "Workshops can't buy their way up this list. Good specialists earn leads by proving capability." },
          ].map(({ n, h, p }) => (
            <div key={n} className="border-t-2 border-slate-900 pt-5 dark:border-blue-500">
              <div className="font-display text-sm font-semibold text-blue-700 dark:text-blue-400">{n}</div>
              <h3 className="mt-3 text-xl font-bold tracking-tight text-slate-900 dark:text-white">{h}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-400">{p}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 py-16">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-slate-950 px-7 py-12 text-white sm:px-12 sm:py-14 dark:bg-blue-950/40 dark:ring-1 dark:ring-blue-900">
          <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-center">
            <div>
              <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">Got a quote that feels too high?</h2>
              <p className="mt-4 max-w-lg text-base leading-7 text-slate-300">
                Check the symptom, learn the fair price and the proof to ask for, then choose a workshop that can show its working — not just its invoice.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <a href="/audit-my-quote" className="inline-flex items-center justify-between rounded-xl bg-blue-600 px-5 py-4 font-semibold text-white transition hover:bg-blue-500">
                Audit my quote <span aria-hidden>→</span>
              </a>
              <a href="/workshops" className="inline-flex items-center justify-between rounded-xl border border-white/15 px-5 py-4 font-semibold text-white transition hover:bg-white/10">
                Browse workshops <span aria-hidden>→</span>
              </a>
              <a href="/blog/best-mercedes-specialist-workshop-singapore-criteria" className="px-1 text-sm text-blue-200 underline decoration-blue-400/40 underline-offset-4 transition hover:decoration-blue-300">
                How to pick a Mercedes specialist in Singapore →
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="hidden">{listings.length} workshops loaded for marketplace comparison.</div>
    </div>
  );
}
