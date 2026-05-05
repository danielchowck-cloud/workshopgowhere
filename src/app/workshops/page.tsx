import { listings } from "@/data/listings";
import { formatSgd } from "@/lib/directory";

export const metadata = {
  title: "Singapore continental car workshops — workshopgowhere",
  description: "Verified and candidate Mercedes, BMW, Audi, Porsche, Volvo and Tesla specialists in Singapore.",
};

const focusListings = listings.filter((shop) =>
  shop.brands?.some((brand) => ["Mercedes-Benz", "BMW", "Audi", "Volkswagen", "Porsche", "Volvo", "Tesla", "BYD", "BYD Atto 3", "BYD Sealion"].includes(brand)),
);

export default function WorkshopsPage() {
  return (
    <div className="bg-slate-50 px-4 py-12 text-slate-950 dark:bg-slate-950 dark:text-white">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-6 lg:grid-cols-[1fr_320px] lg:items-end">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-700 dark:text-blue-300">Workshop directory</p>
            <h1 className="mt-3 max-w-3xl text-3xl font-black tracking-tight sm:text-5xl">Singapore specialists that can prove the diagnosis.</h1>
            <p className="mt-4 max-w-2xl text-slate-700 dark:text-slate-300">
              Early directory for Continental and EV owners. Verification is based on tooling, itemised quotes, diagnostic proof and brand-specific repair experience.
            </p>
          </div>
          <a href="/submit" className="rounded-2xl bg-blue-600 px-5 py-4 text-center text-sm font-black text-white hover:bg-blue-700">List your workshop</a>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {focusListings.map((shop) => (
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
      </div>
    </div>
  );
}
