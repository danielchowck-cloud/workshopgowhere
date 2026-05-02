import { Listing, CATEGORIES, REGIONS } from "@/data/listings";

const STOPWORDS = new Set([
  "i","want","to","a","an","the","for","with","my","me","you","is","are",
  "near","in","at","on","of","and","or","find","looking","my","car",
  "shop","workshop","workshops","need","help","please",
]);

// Map common car-symptoms to category tokens
const SYMPTOM_TO_CATEGORY: Record<string, string> = {
  "rattling": "engine",
  "rattle": "engine",
  "knocking": "engine",
  "knock": "engine",
  "smoke": "engine",
  "oil": "engine",
  "leak": "engine",
  "leaking": "engine",
  "overheat": "engine",
  "overheating": "engine",
  "stalls": "engine",
  "stalling": "engine",
  "checkengine": "diagnostics",
  "engine-light": "diagnostics",
  "warning-light": "diagnostics",
  "abs-light": "diagnostics",
  "scan": "diagnostics",
  "code": "diagnostics",
  "obd": "diagnostics",
  "obd2": "diagnostics",
  "diagnostic": "diagnostics",
  "squeak": "brakes",
  "squeaking": "brakes",
  "squeal": "brakes",
  "grinding": "brakes",
  "brake": "brakes",
  "brakes": "brakes",
  "tyre": "tyres",
  "tire": "tyres",
  "tyres": "tyres",
  "puncture": "tyres",
  "alignment": "tyres",
  "balance": "tyres",
  "balancing": "tyres",
  "wheel": "tyres",
  "ac": "aircon",
  "aircon": "aircon",
  "cold": "aircon",
  "cooling": "aircon",
  "regas": "aircon",
  "battery": "electrical",
  "alternator": "electrical",
  "starter": "electrical",
  "wiring": "electrical",
  "electrical": "electrical",
  "headlight": "electrical",
  "tail-light": "electrical",
  "fuse": "electrical",
  "dent": "body",
  "scratch": "body",
  "paint": "body",
  "spray": "body",
  "collision": "body",
  "accident": "body",
  "panel": "body",
  "gearbox": "transmission",
  "gear": "transmission",
  "transmission": "transmission",
  "cvt": "transmission",
  "clutch": "transmission",
  "shift": "transmission",
  "shifting": "transmission",
  "diesel": "diesel",
  "dpf": "diesel",
  "injector": "diesel",
  "turbo": "diesel",
  "ev": "ev",
  "tesla": "ev",
  "byd": "ev",
  "hybrid": "ev",
  "electric": "ev",
  "vicom": "inspection",
  "inspection": "inspection",
  "emission": "inspection",
  "tow": "towing",
  "towing": "towing",
  "breakdown": "towing",
  "stranded": "towing",
  "jumpstart": "electrical",
  "suspension": "suspension",
  "absorber": "suspension",
  "shock": "suspension",
  "bumpy": "suspension",
  "vibration": "suspension",
};

export function tokenize(q: string): string[] {
  return q
    .toLowerCase()
    .replace(/[^a-z0-9\s$-]/g, " ")
    .split(/\s+/)
    .map((t) => t.trim())
    .filter((t) => t && !STOPWORDS.has(t));
}

export function score(l: Listing, tokens: string[]): number {
  if (tokens.length === 0) return 0;
  const haystack = [
    l.title,
    l.category,
    ...l.specialties,
    l.blurb,
    l.area ?? "",
    REGIONS[l.region] ?? l.region,
    ...(l.brands ?? []),
    CATEGORIES[l.category]?.label ?? "",
  ]
    .join(" ")
    .toLowerCase();
  let s = 0;
  for (const t of tokens) {
    if (haystack.includes(t)) s += 1;
    if (l.title.toLowerCase().includes(t)) s += 2;
    if (l.category.toLowerCase() === t) s += 3;
    if (l.specialties.includes(t)) s += 4;
    if (l.area?.toLowerCase() === t) s += 3;

    // Symptom-to-category mapping (the asktaxes-style diagnostic intelligence)
    const mapped = SYMPTOM_TO_CATEGORY[t];
    if (mapped) {
      if (l.category === mapped) s += 5;
      if (l.specialties.includes(mapped)) s += 3;
    }

    // Brand match
    if (l.brands?.some((b) => b.toLowerCase().includes(t))) s += 4;
  }
  return s;
}

export function searchListings(listings: Listing[], q: string): Listing[] {
  const tokens = tokenize(q);
  if (tokens.length === 0) return listings;
  return listings
    .map((l) => ({ l, s: score(l, tokens) }))
    .filter((x) => x.s > 0)
    .sort((a, b) => b.s - a.s)
    .map((x) => x.l);
}
