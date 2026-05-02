import { Listing, CATEGORIES, REGIONS } from "@/data/listings";

export function Card({ l }: { l: Listing }) {
  const cat = CATEGORIES[l.category] ?? { label: l.category, emoji: "🔧", description: "" };
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
        {l.rating !== undefined && (
          <span className="rounded-full bg-amber-50 px-2 py-0.5 text-xs font-semibold text-amber-700 dark:bg-amber-950/50 dark:text-amber-300">
            ⭐ {l.rating.toFixed(1)}
            {l.reviewCount ? ` · ${l.reviewCount}` : ""}
          </span>
        )}
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
        {l.priceFrom !== undefined && (
          <span className="rounded-md bg-neutral-100 px-2 py-1 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300">
            from $${l.priceFrom}
          </span>
        )}
        {l.brands && l.brands.length > 0 && (
          <span className="rounded-md bg-neutral-100 px-2 py-1 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300">
            🚗 {l.brands.slice(0, 2).join(", ")}{l.brands.length > 2 ? "…" : ""}
          </span>
        )}
      </div>
      {l.specialties.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {l.specialties.slice(0, 4).map((s) => (
            <span key={s} className="text-xs text-neutral-500 dark:text-neutral-500">
              #{s}
            </span>
          ))}
        </div>
      )}
      <div className="mt-4 flex items-center justify-between text-xs">
        <span className="text-neutral-500 dark:text-neutral-500">via {l.source}</span>
        <span className="font-medium text-orange-600 group-hover:underline">View →</span>
      </div>
    </a>
  );
}
