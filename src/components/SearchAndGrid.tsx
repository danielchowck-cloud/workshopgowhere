"use client";

import { useMemo, useState } from "react";
import { listings, CATEGORIES, REGIONS } from "@/data/listings";
import { searchListings, score, tokenize } from "@/lib/search";
import { Card } from "./Card";

const SUGGESTIONS = [
  "engine rattling",
  "check engine light",
  "brake squeaking",
  "aircon not cold",
  "tyre puncture",
  "battery dead",
  "transmission slipping",
  "VICOM inspection",
];

const COMMON_BRANDS = [
  "Toyota","Honda","Nissan","Mazda","Mitsubishi","Subaru",
  "Mercedes-Benz","BMW","Audi","Volkswagen","Volvo",
  "Hyundai","Kia",
  "Lexus","Alfa Romeo","Land Rover","Jaguar","MINI","Maserati","Mclaren","Porsche",
  "Tesla","BYD","Hyundai EV",
];

export function SearchAndGrid() {
  const [q, setQ] = useState("");
  const [activeCat, setActiveCat] = useState<string | null>(null);
  const [activeRegion, setActiveRegion] = useState<string | null>(null);
  const [carBrand, setCarBrand] = useState<string>("");

  const results = useMemo(() => {
    let r = q ? searchListings(listings, q) : listings;

    // Filter / boost by car brand
    if (carBrand) {
      const isContinental = ["Mercedes-Benz","BMW","Audi","Volkswagen","Volvo","Alfa Romeo","Land Rover","Jaguar","MINI","Maserati","Porsche","Mclaren"].includes(carBrand);
      const isEV = ["Tesla","BYD","Hyundai EV"].includes(carBrand);
      r = r
        .map((l) => {
          let bonus = 0;
          if (l.brands?.some((b) => b.toLowerCase() === carBrand.toLowerCase())) bonus += 100;
          if (isEV && l.category === "ev") bonus += 50;
          if (isContinental && (l.priceFrom ?? 0) >= 200) bonus += 5; // continental shops typically pricier
          return { l, bonus };
        })
        .sort((a, b) => b.bonus - a.bonus)
        .map((x) => x.l);
    }

    if (activeCat) r = r.filter((l) => l.category === activeCat || l.specialties.includes(activeCat));
    if (activeRegion) r = r.filter((l) => l.region === activeRegion);
    return r;
  }, [q, activeCat, activeRegion, carBrand]);

  return (
    <>
      <div className="mx-auto max-w-3xl space-y-3">
        {/* Car brand selector */}
        <div>
          <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-neutral-600 dark:text-neutral-400">
            1. What car? (optional, helps us match a specialist)
          </label>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setCarBrand("")}
              className={`rounded-full border px-3 py-1 text-xs ${carBrand === "" ? "border-orange-500 bg-orange-500 text-white" : "border-neutral-300 hover:border-orange-300 dark:border-neutral-700"}`}
            >
              Any car
            </button>
            {COMMON_BRANDS.map((b) => (
              <button
                key={b}
                onClick={() => setCarBrand(carBrand === b ? "" : b)}
                className={`rounded-full border px-3 py-1 text-xs ${carBrand === b ? "border-orange-500 bg-orange-500 text-white" : "border-neutral-300 hover:border-orange-300 dark:border-neutral-700"}`}
              >
                {b}
              </button>
            ))}
          </div>
        </div>

        {/* Symptom search */}
        <div>
          <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-neutral-600 dark:text-neutral-400">
            2. What&apos;s wrong?
          </label>
          <div className="relative">
            <input
              type="text"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Engine rattling, check engine light, brake squeaking…"
              className="w-full rounded-2xl border border-neutral-300 bg-white px-5 py-4 text-base outline-none ring-orange-300 focus:ring-2 dark:border-neutral-700 dark:bg-neutral-900"
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
      </div>

      <div className="mx-auto mt-8 max-w-6xl">
        <div className="mb-6 flex flex-wrap gap-2">
          <button
            onClick={() => setActiveCat(null)}
            className={`rounded-full border px-3 py-1 text-xs ${activeCat === null ? "border-orange-500 bg-orange-500 text-white" : "border-neutral-300 hover:border-orange-300 dark:border-neutral-700"}`}
          >
            All specialties
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
            ? "Nothing matched. Try fewer keywords or a different specialty."
            : `${results.length} ${results.length === 1 ? "workshop" : "workshops"} found${carBrand ? ` · prioritized for ${carBrand}` : ""}`}
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
