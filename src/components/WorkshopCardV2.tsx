import type { Listing } from "@/data/listings";
import type { CommonIssue } from "@/data/carModels";

function Stars({ score = 0 }: { score?: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`Transparency ${score} of 5`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <span
          key={i}
          className={i <= score ? "text-amber-500" : "text-slate-300 dark:text-slate-700"}
        >
          ★
        </span>
      ))}
    </div>
  );
}

function PriceComparison({ workshopPrice, marketAvg }: { workshopPrice: number; marketAvg: number }) {
  const pct = ((workshopPrice - marketAvg) / marketAvg) * 100;
  const isUnder = pct < 0;
  const tone = pct < -10
    ? "border-emerald-300 bg-emerald-50 text-emerald-800 dark:border-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-200"
    : pct < 5
    ? "border-sky-300 bg-sky-50 text-sky-800 dark:border-sky-700 dark:bg-sky-950/40 dark:text-sky-200"
    : pct < 20
    ? "border-amber-300 bg-amber-50 text-amber-800 dark:border-amber-700 dark:bg-amber-950/40 dark:text-amber-200"
    : "border-rose-300 bg-rose-50 text-rose-800 dark:border-rose-700 dark:bg-rose-950/40 dark:text-rose-200";

  return (
    <div className={`rounded-lg border px-3 py-2 text-xs ${tone}`}>
      <div className="flex items-center justify-between gap-3">
        <span className="font-semibold">
          ${workshopPrice.toLocaleString()}
        </span>
        <span className="text-[10px] opacity-80">
          vs market avg ${marketAvg.toLocaleString()}
        </span>
      </div>
      <div className="mt-0.5 text-[10px] font-medium opacity-90">
        {isUnder ? "▼" : "▲"} {Math.abs(pct).toFixed(0)}% {isUnder ? "below" : "above"} market
      </div>
    </div>
  );
}

export function WorkshopCardV2({
  l,
  selectedIssue,
  marketAvgForIssue,
}: {
  l: Listing;
  selectedIssue?: CommonIssue;
  marketAvgForIssue?: number;
}) {
  const isSpecialist =
    l.diagnosticTools?.some((t) =>
      ["XENTRY", "Star Diagnostic", "ISTA", "ODIS", "VCDS", "PIWIS", "VIDA", "Tesla Toolbox"].some((kw) =>
        t.toUpperCase().includes(kw.toUpperCase()),
      ),
    ) ?? false;

  const score = l.transparencyScore ?? 0;
  const symptomPrice = selectedIssue ? l.symptomPrices?.[selectedIssue.id] : undefined;

  return (
    <article className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-blue-400 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:hover:border-blue-600">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h3 className="truncate text-base font-bold text-slate-900 dark:text-slate-100">
            {l.title}
          </h3>
          <div className="mt-0.5 flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
            {l.area && <span>📍 {l.area}</span>}
            {l.rating && (
              <span className="inline-flex items-center gap-0.5">
                <span className="text-amber-500">★</span>
                <span>{l.rating}</span>
                {l.reviewCount && <span className="opacity-70">({l.reviewCount})</span>}
              </span>
            )}
          </div>
        </div>
        {l.verified && (
          <span className="shrink-0 rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300">
            Verified
          </span>
        )}
      </div>

      {/* Specialist + Transparency row */}
      <div className="mt-3 flex flex-wrap items-center gap-2">
        {isSpecialist && (
          <span className="inline-flex items-center gap-1 rounded-full border border-blue-300 bg-blue-50 px-2 py-0.5 text-[10px] font-semibold text-blue-800 dark:border-blue-700 dark:bg-blue-950/40 dark:text-blue-200">
            🔧 Specialist Tools
          </span>
        )}
        {l.agentAlternative && (
          <span className="inline-flex items-center gap-1 rounded-full border border-amber-300 bg-amber-50 px-2 py-0.5 text-[10px] font-semibold text-amber-800 dark:border-amber-700 dark:bg-amber-950/40 dark:text-amber-200">
            ⚖️ Agent-Alternative
          </span>
        )}
        {score > 0 && (
          <div className="ml-auto flex items-center gap-1.5 text-[10px] font-medium text-slate-600 dark:text-slate-400">
            <span className="uppercase tracking-wider">Transparency</span>
            <Stars score={score} />
          </div>
        )}
      </div>

      {/* Price comparison */}
      {selectedIssue && symptomPrice !== undefined && marketAvgForIssue !== undefined && (
        <div className="mt-3">
          <PriceComparison workshopPrice={symptomPrice} marketAvg={marketAvgForIssue} />
        </div>
      )}

      {/* Tooling chips */}
      {(l.diagnosticTools?.length ?? 0) > 0 && (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {l.diagnosticTools!.slice(0, 3).map((t) => (
            <span
              key={t}
              className="rounded border border-slate-200 bg-slate-50 px-1.5 py-0.5 text-[10px] text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
            >
              {t}
            </span>
          ))}
        </div>
      )}

      {/* Transparency markers */}
      <div className="mt-3 grid grid-cols-2 gap-1.5 text-[10px]">
        <div className={`rounded px-2 py-1 ${l.providesPhotoProof ? "bg-emerald-50 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-200" : "bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-500"}`}>
          {l.providesPhotoProof ? "✓" : "—"} Photo proof
        </div>
        <div className={`rounded px-2 py-1 ${l.providesScans ? "bg-emerald-50 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-200" : "bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-500"}`}>
          {l.providesScans ? "✓" : "—"} Diagnostic scans
        </div>
        <div className={`rounded px-2 py-1 ${l.hasItemizedQuote ? "bg-emerald-50 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-200" : "bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-500"}`}>
          {l.hasItemizedQuote ? "✓" : "—"} Itemized quote
        </div>
        <div className={`rounded px-2 py-1 ${l.hasFixedPriceMenu ? "bg-emerald-50 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-200" : "bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-500"}`}>
          {l.hasFixedPriceMenu ? "✓" : "—"} Fixed-price menu
        </div>
      </div>

      <p className="mt-3 line-clamp-2 text-xs text-slate-600 dark:text-slate-400">{l.blurb}</p>

      <div className="mt-4 flex items-center justify-between">
        <span className="text-xs text-slate-500 dark:text-slate-500">
          {l.priceFrom ? `From $${l.priceFrom}` : "Quote on request"}
        </span>
        <a
          href={l.sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-blue-700"
        >
          View →
        </a>
      </div>
    </article>
  );
}
