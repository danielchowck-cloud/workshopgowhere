"use client";

import { useMemo, useState } from "react";
import { listings, CATEGORIES, REGIONS } from "@/data/listings";
import { searchListings } from "@/lib/search";
import { Card } from "./Card";

const SUGGESTIONS = [
  "pottery near tampines",
  "weekend cooking class",
  "art jamming for kids",
  "calligraphy workshop",
  "free workshops",
  "couples activity",
  "woodwork weekend",
  "fitness for seniors",
];

export function SearchAndGrid() {
  const [q, setQ] = useState("");
  const [activeCat, setActiveCat] = useState<string | null>(null);
  const [activeRegion, setActiveRegion] = useState<string | null>(null);

  const results = useMemo(() => {
    let r = q ? searchListings(listings, q) : listings;
    if (activeCat) r = r.filter((l) => l.category === activeCat);
    if (activeRegion) r = r.filter((l) => l.region === activeRegion);
    return r;
  }, [q, activeCat, activeRegion]);

  return (
    <>
      <div className="mx-auto max-w-3xl">
        <div className="relative">
          <input
            type="text"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Try: pottery near tampines, weekend art for kids, free workshops…"
            className="w-full rounded-2xl border border-neutral-300 bg-white px-5 py-4 text-base outline-none ring-orange-300 focus:ring-2 dark:border-neutral-700 dark:bg-neutral-900"
            autoFocus
          />
          {q && (
            <button
              onClick={() => setQ("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-neutral-200 px-2 py-0.5 text-sm text-neutral-700 hover:bg-neutral-300 dark:bg-neutral-700 dark:text-neutral-200"
              aria-label="Clear search"
            >
              ✕
            </button>
          )}
        </div>
        {!q && (
          <div className="mt-3 flex flex-wrap gap-2">
            {SUGGESTIONS.map((s) => (
              <button
                key={s}
                onClick={() => setQ(s)}
                className="rounded-full border border-neutral-300 px-3 py-1 text-xs text-neutral-700 hover:border-orange-300 hover:bg-orange-50 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800"
              >
                {s}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="mx-auto mt-8 max-w-6xl">
        <div className="mb-6 flex flex-wrap gap-2">
          <button
            onClick={() => setActiveCat(null)}
            className={`rounded-full border px-3 py-1 text-xs ${activeCat === null ? "border-orange-500 bg-orange-500 text-white" : "border-neutral-300 hover:border-orange-300 dark:border-neutral-700"}`}
          >
            All categories
          </button>
          {Object.entries(CATEGORIES).map(([slug, c]) => (
            <button
              key={slug}
              onClick={() => setActiveCat(activeCat === slug ? null : slug)}
              className={`rounded-full border px-3 py-1 text-xs ${activeCat === slug ? "border-orange-500 bg-orange-500 text-white" : "border-neutral-300 hover:border-orange-300 dark:border-neutral-700"}`}
            >
              {c.emoji} {c.label}
            </button>
          ))}
        </div>
        <div className="mb-6 flex flex-wrap gap-2">
          <button
            onClick={() => setActiveRegion(null)}
            className={`rounded-full border px-3 py-1 text-xs ${activeRegion === null ? "border-neutral-900 bg-neutral-900 text-white dark:border-white dark:bg-white dark:text-black" : "border-neutral-300 hover:border-neutral-500 dark:border-neutral-700"}`}
          >
            All of SG
          </button>
          {Object.entries(REGIONS).map(([slug, label]) => (
            <button
              key={slug}
              onClick={() => setActiveRegion(activeRegion === slug ? null : slug)}
              className={`rounded-full border px-3 py-1 text-xs ${activeRegion === slug ? "border-neutral-900 bg-neutral-900 text-white dark:border-white dark:bg-white dark:text-black" : "border-neutral-300 hover:border-neutral-500 dark:border-neutral-700"}`}
            >
              📍 {label}
            </button>
          ))}
        </div>
        <p className="mb-4 text-sm text-neutral-600 dark:text-neutral-400">
          {results.length === 0
            ? "Nothing matched. Try fewer keywords or a different category."
            : `${results.length} ${results.length === 1 ? "workshop" : "workshops"} found`}
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((l) => (
            <Card key={l.id} l={l} />
          ))}
        </div>
      </div>
    </>
  );
}
