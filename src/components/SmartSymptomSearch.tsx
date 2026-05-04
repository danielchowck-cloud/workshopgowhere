"use client";

import { useMemo, useState } from "react";
import { listings } from "@/data/listings";
import { CAR_MODELS, FEATURED_BRAND, groupModelsByBrand, type CarModel, type CommonIssue } from "@/data/carModels";
import { ConsumerAlertBanner } from "./ConsumerAlertBanner";
import { WorkshopCardV2 } from "./WorkshopCardV2";
import { QuoteAuditor } from "./QuoteAuditor";

export function SmartSymptomSearch() {
  const grouped = useMemo(() => groupModelsByBrand(), []);
  const brands = useMemo(() => Object.keys(grouped), [grouped]);

  const [activeBrand, setActiveBrand] = useState<string>(FEATURED_BRAND);
  const [activeModelId, setActiveModelId] = useState<string | null>(null);
  const [activeIssueId, setActiveIssueId] = useState<string | null>(null);

  const activeModel: CarModel | null = useMemo(() => {
    if (!activeModelId) return null;
    return CAR_MODELS.find((m) => m.id === activeModelId) ?? null;
  }, [activeModelId]);

  const activeIssue: CommonIssue | null = useMemo(() => {
    if (!activeModel || !activeIssueId) return null;
    return activeModel.commonIssues.find((i) => i.id === activeIssueId) ?? null;
  }, [activeModel, activeIssueId]);

  const marketAvgForIssue = activeIssue
    ? Math.round((activeIssue.realFixPrice[0] + activeIssue.realFixPrice[1]) / 2)
    : undefined;

  const filteredListings = useMemo(() => {
    if (!activeBrand) return listings;
    // Brand-aware ranking: workshops listing this brand come first
    return [...listings]
      .map((l) => {
        let score = 0;
        if (l.brands?.some((b) => b.toLowerCase() === activeBrand.toLowerCase())) score += 100;
        if (l.transparencyScore) score += l.transparencyScore * 5;
        if (l.verified) score += 10;
        if (activeIssue && l.symptomPrices?.[activeIssue.id] !== undefined) score += 50;
        return { l, score };
      })
      .sort((a, b) => b.score - a.score)
      .map((x) => x.l)
      .slice(0, 12);
  }, [activeBrand, activeIssue]);

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
      <div className="space-y-6">
        {/* STEP 1 — pick brand */}
        <section>
          <div className="mb-3 flex items-baseline justify-between">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
              1 · What car?
            </h2>
            {activeBrand === FEATURED_BRAND && (
              <span className="rounded-full bg-blue-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-blue-800 dark:bg-blue-950/60 dark:text-blue-200">
                Featured
              </span>
            )}
          </div>
          <div className="flex flex-wrap gap-2">
            {brands.map((b) => (
              <button
                key={b}
                onClick={() => {
                  setActiveBrand(b);
                  setActiveModelId(null);
                  setActiveIssueId(null);
                }}
                className={`rounded-lg border px-3 py-1.5 text-xs font-semibold transition ${
                  activeBrand === b
                    ? "border-blue-600 bg-blue-600 text-white shadow-sm shadow-blue-900/20"
                    : "border-slate-300 bg-white text-slate-700 hover:border-blue-400 hover:bg-blue-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-blue-600 dark:hover:bg-slate-800"
                }`}
              >
                {b}
              </button>
            ))}
          </div>
        </section>

        {/* STEP 2 — pick model */}
        {activeBrand && grouped[activeBrand]?.length > 0 && (
          <section>
            <h2 className="mb-3 text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
              2 · Pick your model
            </h2>
            <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-3">
              {grouped[activeBrand].map((m) => (
                <button
                  key={m.id}
                  onClick={() => {
                    setActiveModelId(m.id === activeModelId ? null : m.id);
                    setActiveIssueId(null);
                  }}
                  className={`rounded-lg border px-3 py-2 text-left text-sm transition ${
                    activeModelId === m.id
                      ? "border-blue-600 bg-blue-50 text-blue-900 dark:border-blue-500 dark:bg-blue-950/40 dark:text-blue-100"
                      : "border-slate-300 bg-white text-slate-800 hover:border-blue-400 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-blue-600"
                  }`}
                >
                  <div className="font-semibold">{m.model}</div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400">
                    {m.yearsActive} · {m.commonIssues.length} known issues
                  </div>
                </button>
              ))}
            </div>
          </section>
        )}

        {/* STEP 3 — pick symptom */}
        {activeModel && (
          <section>
            <h2 className="mb-3 text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
              3 · What&apos;s the symptom?
            </h2>
            <div className="grid gap-2">
              {activeModel.commonIssues.map((i) => (
                <button
                  key={i.id}
                  onClick={() => setActiveIssueId(i.id === activeIssueId ? null : i.id)}
                  className={`rounded-lg border p-3 text-left text-sm transition ${
                    activeIssueId === i.id
                      ? "border-blue-600 bg-blue-50 dark:border-blue-500 dark:bg-blue-950/40"
                      : "border-slate-300 bg-white hover:border-blue-400 dark:border-slate-700 dark:bg-slate-900 dark:hover:border-blue-600"
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0 flex-1">
                      <div className="font-semibold text-slate-900 dark:text-slate-100">
                        {i.symptom}
                      </div>
                      <div className="mt-0.5 text-[10px] text-slate-500 dark:text-slate-400">
                        Likely fix: {i.likelyFix}
                      </div>
                    </div>
                    <div className="flex shrink-0 flex-col items-end gap-1">
                      <span
                        className={`rounded px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider ${
                          i.severity === "high"
                            ? "bg-rose-100 text-rose-800 dark:bg-rose-950/40 dark:text-rose-200"
                            : i.severity === "med"
                            ? "bg-amber-100 text-amber-800 dark:bg-amber-950/40 dark:text-amber-200"
                            : "bg-sky-100 text-sky-800 dark:bg-sky-950/40 dark:text-sky-200"
                        }`}
                        title={
                          i.severity === "high"
                            ? "High urgency — drive to specialist now, can cause damage if ignored"
                            : i.severity === "med"
                            ? "Medium urgency — address within weeks, won't fail catastrophically"
                            : "Low urgency — inconvenience, safe to schedule routine"
                        }
                      >
                        {i.severity === "high" ? "Urgent" : i.severity === "med" ? "Address Soon" : "Routine"}
                      </span>
                      <span
                        className="rounded bg-slate-100 px-1.5 py-0.5 text-[9px] font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-300"
                        title={`${i.trapPercentage}% confidence the described 'real fix' is the actual cause for this symptom`}
                      >
                        {i.trapPercentage}% match
                      </span>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </section>
        )}

        {/* CONSUMER ALERT */}
        {activeModel && activeIssue && (
          <section>
            <ConsumerAlertBanner issue={activeIssue} modelLabel={`${activeModel.brand} ${activeModel.model}`} />
          </section>
        )}

        {/* WORKSHOP RESULTS */}
        <section>
          <div className="mb-3 flex items-baseline justify-between">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
              {activeBrand} specialists
            </h2>
            <span className="text-[10px] text-slate-500 dark:text-slate-400">
              {filteredListings.length} ranked
            </span>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {filteredListings.map((l) => (
              <WorkshopCardV2
                key={l.id}
                l={l}
                selectedIssue={activeIssue ?? undefined}
                marketAvgForIssue={marketAvgForIssue}
              />
            ))}
          </div>
        </section>
      </div>

      {/* QUOTE AUDITOR (sidebar on desktop, sheet on mobile) */}
      <div>
        <QuoteAuditor selectedIssue={activeIssue ?? undefined} />
      </div>
    </div>
  );
}
