"use client";

import { useState } from "react";
import { COMMON_FIXES } from "@/data/listings";

export function CommonFixCallout() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? COMMON_FIXES : COMMON_FIXES.slice(0, 4);

  return (
    <section className="mx-auto mt-16 max-w-5xl rounded-3xl border-2 border-orange-200 bg-gradient-to-br from-orange-50 to-amber-50 p-6 sm:p-10 dark:border-orange-900 dark:from-orange-950/40 dark:to-amber-950/40">
      <div className="flex items-start gap-3">
        <span aria-hidden className="text-2xl">💸</span>
        <div>
          <h2 className="text-xl font-bold sm:text-2xl">
            Don&apos;t pay agent prices for known model issues
          </h2>
          <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-300">
            Many Continental car problems have a known &quot;common fix&quot; that specialists charge a
            fraction of what main dealers quote. Here&apos;s the cheat sheet.
          </p>
        </div>
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {visible.map((fix, i) => {
          const saving = (fix.agentEstimate ?? 0) - (fix.specialistEstimate ?? 0);
          const savingPct = fix.agentEstimate
            ? Math.round((saving / fix.agentEstimate) * 100)
            : 0;
          return (
            <div
              key={i}
              className="rounded-xl border border-orange-100 bg-white p-4 dark:border-orange-900/40 dark:bg-neutral-900"
            >
              <div className="text-xs uppercase tracking-wide text-orange-600 dark:text-orange-400">
                {fix.brand} {fix.model ? `· ${fix.model}` : ""}
              </div>
              <h3 className="mt-1 font-semibold leading-snug">
                &quot;{fix.symptom}&quot;
              </h3>
              <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-300">
                <strong>Likely cause:</strong> {fix.commonCause}
              </p>
              {fix.agentEstimate && fix.specialistEstimate && (
                <div className="mt-3 flex items-baseline gap-3 text-sm">
                  <span className="text-neutral-500 line-through">
                    Agent ~${fix.agentEstimate.toLocaleString()}
                  </span>
                  <span className="font-bold text-emerald-600">
                    Specialist ~${fix.specialistEstimate.toLocaleString()}
                  </span>
                  <span className="rounded bg-emerald-100 px-1.5 py-0.5 text-xs font-semibold text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300">
                    Save {savingPct}%
                  </span>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {!showAll && COMMON_FIXES.length > 4 && (
        <button
          onClick={() => setShowAll(true)}
          className="mt-4 text-sm font-medium text-orange-600 hover:underline"
        >
          Show all {COMMON_FIXES.length} common fixes →
        </button>
      )}

      <p className="mt-6 text-xs text-neutral-500">
        Pricing is indicative based on community-reported quotes. Your case may differ.
        Always get a written quote.
      </p>
    </section>
  );
}
