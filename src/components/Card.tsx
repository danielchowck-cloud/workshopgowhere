import { Listing, CATEGORIES, REGIONS } from "@/data/listings";

export function Card({ l }: { l: Listing }) {
  const cat = CATEGORIES[l.category] ?? { label: l.category, emoji: "✨", description: "" };
  const priceLabel =
    l.priceFrom === 0
      ? "Free"
      : l.priceTo
      ? `$${l.priceFrom}–${l.priceTo}`
      : `$${l.priceFrom}`;
  return (
    <a
      href={l.sourceUrl + (l.sourceUrl.includes("?") ? "&" : "?") + "ref=workshopgowhere"}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-2xl border border-neutral-200 bg-white p-5 transition hover:-translate-y-0.5 hover:border-orange-300 hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2 text-xs">
          <span aria-hidden>{cat.emoji}</span>
          <span className="font-medium uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
            {cat.label}
          </span>
        </div>
        <span className="rounded-full bg-orange-50 px-2 py-0.5 text-xs font-semibold text-orange-700 dark:bg-orange-950/50 dark:text-orange-300">
          {priceLabel}
        </span>
      </div>
      <h3 className="mt-3 text-base font-semibold leading-snug text-neutral-900 group-hover:text-orange-700 dark:text-white">
        {l.title}
      </h3>
      <p className="mt-2 line-clamp-2 text-sm text-neutral-600 dark:text-neutral-400">
        {l.blurb}
      </p>
      <div className="mt-4 flex flex-wrap gap-2 text-xs">
        <span className="rounded-md bg-neutral-100 px-2 py-1 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300">
          📍 {REGIONS[l.region] ?? l.region}
          {l.area ? ` · ${l.area}` : ""}
        </span>
        <span className="rounded-md bg-neutral-100 px-2 py-1 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300">
          ⏱ {l.duration}
        </span>
        {l.studio && (
          <span className="rounded-md bg-neutral-100 px-2 py-1 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300">
            🏢 {l.studio}
          </span>
        )}
      </div>
      <div className="mt-4 flex items-center justify-between text-xs">
        <span className="text-neutral-500 dark:text-neutral-500">via {l.source}</span>
        <span className="font-medium text-orange-600 group-hover:underline">Book →</span>
      </div>
    </a>
  );
}
