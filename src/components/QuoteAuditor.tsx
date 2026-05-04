"use client";

import { useState } from "react";
import type { CommonIssue } from "@/data/carModels";

type AuditVerdict = {
  verdict: "fair" | "high" | "way-high" | "below";
  pct: number;
  marketLow: number;
  marketHigh: number;
  message: string;
};

function evaluate(quote: number, issue?: CommonIssue): AuditVerdict | null {
  if (!issue || quote <= 0) return null;
  const [low, high] = issue.realFixPrice;
  const mid = (low + high) / 2;
  const pct = ((quote - mid) / mid) * 100;

  if (pct < -20) {
    return {
      verdict: "below",
      pct: Math.abs(pct),
      marketLow: low,
      marketHigh: high,
      message: "Suspiciously low — confirm scope of work and parts (OEM vs aftermarket) before agreeing.",
    };
  }
  if (pct < 15) {
    return {
      verdict: "fair",
      pct: Math.abs(pct),
      marketLow: low,
      marketHigh: high,
      message: "Within fair-market range for this fix at a verified specialist.",
    };
  }
  if (pct < 50) {
    return {
      verdict: "high",
      pct,
      marketLow: low,
      marketHigh: high,
      message: "Above the verified specialist average. Consider getting a second opinion.",
    };
  }
  return {
    verdict: "way-high",
    pct,
    marketLow: low,
    marketHigh: high,
    message: "WAY above market. This is the agent trap pattern — get a second opinion at an independent specialist before paying.",
  };
}

const verdictStyles: Record<AuditVerdict["verdict"], { tone: string; emoji: string; label: string }> = {
  fair: {
    tone: "border-emerald-300 bg-emerald-50 dark:border-emerald-700 dark:bg-emerald-950/40",
    emoji: "✓",
    label: "Fair price",
  },
  below: {
    tone: "border-sky-300 bg-sky-50 dark:border-sky-700 dark:bg-sky-950/40",
    emoji: "?",
    label: "Below market",
  },
  high: {
    tone: "border-amber-300 bg-amber-50 dark:border-amber-700 dark:bg-amber-950/40",
    emoji: "⚠",
    label: "Above average",
  },
  "way-high": {
    tone: "border-rose-300 bg-rose-50 dark:border-rose-700 dark:bg-rose-950/40",
    emoji: "🚨",
    label: "Way too high",
  },
};

export function QuoteAuditor({ selectedIssue }: { selectedIssue?: CommonIssue }) {
  const [open, setOpen] = useState(false);
  const [quote, setQuote] = useState("");
  const result = evaluate(parseFloat(quote || "0"), selectedIssue);

  // Mobile: floating button + bottom sheet. Desktop: sticky right rail.
  return (
    <>
      {/* Floating CTA — visible on all sizes when sidebar collapsed */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-5 right-5 z-30 inline-flex items-center gap-2 rounded-full border border-blue-700 bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-900/30 hover:bg-blue-700 lg:hidden"
        aria-label="Open quote auditor"
      >
        💰 Check My Quote
      </button>

      {/* Desktop sticky panel */}
      <aside className="hidden lg:block">
        <div className="sticky top-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <QuoteForm
            selectedIssue={selectedIssue}
            quote={quote}
            setQuote={setQuote}
            result={result}
          />
        </div>
      </aside>

      {/* Mobile bottom sheet */}
      {open && (
        <div className="fixed inset-0 z-40 flex items-end bg-black/50 lg:hidden" onClick={() => setOpen(false)}>
          <div
            className="w-full rounded-t-3xl border-t border-slate-200 bg-white p-5 shadow-2xl dark:border-slate-700 dark:bg-slate-900"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mx-auto mb-3 h-1 w-12 rounded-full bg-slate-300 dark:bg-slate-700" />
            <QuoteForm
              selectedIssue={selectedIssue}
              quote={quote}
              setQuote={setQuote}
              result={result}
            />
            <button
              onClick={() => setOpen(false)}
              className="mt-4 w-full rounded-xl border border-slate-300 py-2 text-sm font-semibold text-slate-700 dark:border-slate-700 dark:text-slate-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

function QuoteForm({
  selectedIssue,
  quote,
  setQuote,
  result,
}: {
  selectedIssue?: CommonIssue;
  quote: string;
  setQuote: (v: string) => void;
  result: AuditVerdict | null;
}) {
  return (
    <div>
      <div className="flex items-center gap-2">
        <span className="text-lg" aria-hidden>
          💰
        </span>
        <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100">
          Quote Auditor
        </h3>
      </div>
      <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
        Got a quote elsewhere? Paste the dollar figure here and we&apos;ll value-check it against verified-specialist averages.
      </p>

      <div className="mt-3">
        <label className="block text-[10px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
          Selected symptom
        </label>
        <div className="mt-1 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs dark:border-slate-700 dark:bg-slate-800/60">
          {selectedIssue ? (
            <span className="text-slate-800 dark:text-slate-200">{selectedIssue.symptom}</span>
          ) : (
            <span className="text-slate-500 dark:text-slate-500">
              Select a car + symptom above first
            </span>
          )}
        </div>
      </div>

      <div className="mt-3">
        <label className="block text-[10px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
          Quoted price (SGD)
        </label>
        <div className="mt-1 flex items-center gap-2 rounded-lg border border-slate-300 bg-white pl-3 dark:border-slate-700 dark:bg-slate-900">
          <span className="text-sm text-slate-500">$</span>
          <input
            type="number"
            inputMode="decimal"
            value={quote}
            onChange={(e) => setQuote(e.target.value)}
            placeholder="3500"
            className="w-full bg-transparent py-2 pr-3 text-sm outline-none"
            disabled={!selectedIssue}
          />
        </div>
      </div>

      {result && (
        <div
          className={`mt-4 rounded-xl border p-3 ${verdictStyles[result.verdict].tone}`}
        >
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider">
            <span aria-hidden>{verdictStyles[result.verdict].emoji}</span>
            <span>{verdictStyles[result.verdict].label}</span>
          </div>
          <p className="mt-1 text-xs leading-relaxed text-slate-800 dark:text-slate-200">
            {result.verdict === "fair" || result.verdict === "below"
              ? `Within $${result.marketLow.toLocaleString()}-${result.marketHigh.toLocaleString()} verified-specialist range.`
              : `${result.pct.toFixed(0)}% above verified-specialist average ($${result.marketLow.toLocaleString()}-${result.marketHigh.toLocaleString()}).`}
          </p>
          <p className="mt-1 text-xs text-slate-700 dark:text-slate-300">{result.message}</p>
          {(result.verdict === "high" || result.verdict === "way-high") && (
            <a
              href="mailto:audit@workshopgowhere.com?subject=Quote%20audit%20request"
              className="mt-3 inline-block w-full rounded-lg bg-blue-600 px-3 py-2 text-center text-xs font-semibold text-white hover:bg-blue-700"
            >
              Get a second opinion →
            </a>
          )}
        </div>
      )}

      {!selectedIssue && (
        <p className="mt-3 text-[10px] italic text-slate-500 dark:text-slate-500">
          Pick your car + the symptom in the search above to enable price-checking.
        </p>
      )}
    </div>
  );
}
