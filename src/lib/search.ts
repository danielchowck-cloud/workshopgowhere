import { Listing, CATEGORIES, REGIONS, AUDIENCES } from "@/data/listings";

const STOPWORDS = new Set([
  "i","want","to","a","an","the","for","with","my","me","you","is","are",
  "near","in","at","on","of","and","or","find","looking","weekend","class",
  "workshop","workshops","class","classes","do","cheap","under","best",
]);

export function tokenize(q: string): string[] {
  return q
    .toLowerCase()
    .replace(/[^a-z0-9\s$]/g, " ")
    .split(/\s+/)
    .map((t) => t.trim())
    .filter((t) => t && !STOPWORDS.has(t));
}

export function score(l: Listing, tokens: string[]): number {
  if (tokens.length === 0) return 0;
  const haystack = [
    l.title,
    l.category,
    l.subcategory ?? "",
    l.blurb,
    l.studio ?? "",
    l.area ?? "",
    REGIONS[l.region] ?? l.region,
    ...(l.audience ?? []),
    AUDIENCES[l.audience[0]]?.label ?? "",
    CATEGORIES[l.category]?.label ?? "",
  ]
    .join(" ")
    .toLowerCase();
  let s = 0;
  for (const t of tokens) {
    if (haystack.includes(t)) s += 1;
    if (l.title.toLowerCase().includes(t)) s += 2; // title matches weighted higher
    if (l.category.toLowerCase() === t) s += 3; // direct category match
    if (l.area?.toLowerCase() === t) s += 3; // direct area match
    // Price hints
    if (t === "free" && l.priceFrom === 0) s += 4;
    if (/^\$?\d+$/.test(t)) {
      const n = parseInt(t.replace("$", ""), 10);
      if (l.priceFrom <= n) s += 1;
    }
    // Audience hints
    if (["kid","kids","child","children"].includes(t) && l.audience.some((a) => a.includes("kid") || a.includes("parent-child"))) s += 2;
    if (["couple","couples","date"].includes(t) && l.audience.includes("couples")) s += 2;
    if (["senior","seniors","elderly"].includes(t) && l.audience.includes("seniors")) s += 2;
    // Day hints
    if (["weekend","saturday","sunday","sat","sun"].includes(t) && l.weekdays?.some((d) => ["sat","sun"].includes(d))) s += 1;
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
