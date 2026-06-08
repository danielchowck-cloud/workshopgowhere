"use client";

import { useMemo, useState } from "react";
import type { Listing } from "@/data/listings";
import { formatSgd } from "@/lib/directory";

type RegionKey = "all" | "north" | "northeast" | "south" | "east" | "west" | "central";

type Props = {
  shops: Listing[];
};

const REGIONS: { key: RegionKey; label: string }[] = [
  { key: "all", label: "All SG" },
  { key: "central", label: "Central" },
  { key: "east", label: "East" },
  { key: "west", label: "West" },
  { key: "south", label: "South" },
  { key: "north", label: "North" },
  { key: "northeast", label: "Northeast" },
];

function normalizeRegion(shop: Listing): RegionKey {
  const region = shop.region.toLowerCase();
  const area = (shop.area ?? "").toLowerCase();

  if (region === "northeast" || ["hougang", "sengkang", "punggol", "serangoon", "ang mo kio"].some((place) => area.includes(place))) {
    return "northeast";
  }
  if (region === "north" || ["woodlands", "yishun", "admiralty", "sembawang", "mandai"].some((place) => area.includes(place))) {
    return "north";
  }
  if (["alexandra", "bukit merah", "harbourfront", "leng kee", "pasir panjang", "telok blangah"].some((place) => area.includes(place))) {
    return "south";
  }
  if (["north", "south", "east", "west", "central"].includes(region)) return region as RegionKey;
  return "central";
}

export function WorkshopDirectory({ shops }: Props) {
  const [activeRegion, setActiveRegion] = useState<RegionKey>("all");

  const counts = useMemo(() => {
    const base: Record<RegionKey, number> = { all: shops.length, north: 0, northeast: 0, south: 0, east: 0, west: 0, central: 0 };
    shops.forEach((shop) => {
      base[normalizeRegion(shop)] += 1;
    });
    return base;
  }, [shops]);

  const visibleShops = useMemo(() => {
    if (activeRegion === "all") return shops;
    return shops.filter((shop) => normalizeRegion(shop) === activeRegion);
  }, [activeRegion, shops]);

  return (
    <>
      <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
        <div className="mb-3 text-[11px] font-black uppercase tracking-wider text-slate-500">Filter workshops by region</div>
        <div className="flex flex-wrap gap-2">
          {REGIONS.map((region) => (
            <button
              key={region.key}
              type="button"
              onClick={() => setActiveRegion(region.key)}
              className={`rounded-full border px-3 py-1.5 text-xs font-black transition ${
                activeRegion === region.key
                  ? "border-blue-600 bg-blue-600 text-white shadow-sm shadow-blue-900/20"
                  : "border-slate-200 bg-slate-50 text-slate-700 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-800 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-300 dark:hover:border-blue-600 dark:hover:bg-blue-950/40"
              }`}
            >
              {region.label} <span className="opacity-70">{counts[region.key]}</span>
            </button>
          ))}
        </div>
      </div>

      <p className="mt-5 text-sm font-semibold text-slate-600 dark:text-slate-400">
        Showing {visibleShops.length} of {shops.length} workshops
      </p>

      <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {visibleShops.map((shop) => (
          <a key={shop.id} href={`/workshops/${shop.id}`} className="rounded-3xl border border-slate-200 bg-white p-5 transition hover:-translate-y-0.5 hover:border-blue-400 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h2 className="font-black">{shop.title}</h2>
                <p className="mt-1 text-xs text-slate-500">{shop.area ?? shop.region} · {shop.rating ? `★${shop.rating}` : "Rating pending"}</p>
              </div>
              {shop.verified && <span className="rounded-full bg-blue-100 px-2 py-1 text-[10px] font-black text-blue-800 dark:bg-blue-950 dark:text-blue-200">Verified</span>}
            </div>
            <p className="mt-3 line-clamp-3 text-sm text-slate-600 dark:text-slate-400">{shop.blurb}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {shop.brands?.slice(0, 4).map((brand) => (
                <span key={brand} className="rounded-full bg-slate-100 px-2 py-1 text-[11px] font-bold text-slate-700 dark:bg-slate-950 dark:text-slate-300">{brand}</span>
              ))}
            </div>
            <div className="mt-4 text-sm font-bold text-emerald-700 dark:text-emerald-300">
              {shop.priceFrom ? `From ${formatSgd(shop.priceFrom)}` : "Price pending"}
            </div>
          </a>
        ))}
      </div>
    </>
  );
}
