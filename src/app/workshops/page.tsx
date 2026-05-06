import { WorkshopDirectory } from "@/components/WorkshopDirectory";
import { listings } from "@/data/listings";

export const metadata = {
  title: "Singapore continental car workshops — workshopgowhere",
  description: "Verified and candidate Mercedes, BMW, Audi, Porsche, Volvo and Tesla specialists in Singapore.",
  alternates: { canonical: "/workshops" },
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

        <WorkshopDirectory shops={focusListings} />
      </div>
    </div>
  );
}
