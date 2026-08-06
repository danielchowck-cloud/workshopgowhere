import { WorkshopDirectory } from "@/components/WorkshopDirectory";
import { listings } from "@/data/listings";

export const metadata = {
  title: "Continental Car Workshops Singapore — Mercedes, BMW, Audi & More",
  description: "Continental and EV specialist workshops across Singapore. Compare by region, brand, diagnostic tools and quote transparency before you book.",
  alternates: { canonical: "/workshops" },
};

const focusListings = listings.filter((shop) =>
  shop.brands?.some((brand) => ["Mercedes-Benz", "BMW", "Audi", "Volkswagen", "Porsche", "Volvo", "Alfa Romeo", "Land Rover", "Jaguar", "MINI", "Maserati", "Tesla", "BYD", "BYD Atto 3", "BYD Sealion"].includes(brand)),
);

const REGIONS = [
  { key: "central", label: "Central" },
  { key: "east", label: "East" },
  { key: "west", label: "West" },
  { key: "north", label: "North" },
  { key: "northeast", label: "Northeast" },
  { key: "south", label: "South" },
];
const regionCounts = REGIONS
  .map((r) => ({ region: r.label, count: focusListings.filter((s) => s.region === r.key).length }))
  .filter((r) => r.count > 0);

const faqs = [
  {
    q: "How do I choose a Continental car workshop in Singapore?",
    a: "Pick on proof, not price. A good specialist will show you diagnostic fault codes, photo or video evidence of the failed part, and an itemised quote for parts and labour before starting work. Brand-specific tooling (XENTRY for Mercedes, ISTA for BMW, ODIS for Audi) and experience with your exact model matter more than a low headline rate.",
  },
  {
    q: "Which regions of Singapore do these workshops cover?",
    a: `This directory lists ${focusListings.length} specialist workshops across ${regionCounts.length} regions: ${regionCounts.map((r) => `${r.region} (${r.count})`).join(", ")}. The biggest clusters are Sin Ming AutoCity in the Central region, Kaki Bukit in the East, and the Toh Guan/Jurong area in the West.`,
  },
  {
    q: "Are the workshops on this list verified or paid placements?",
    a: "Neither. No workshop pays to appear here, and we do not claim to have independently verified every listing. Entries are compiled from public sources and owner communities, with phone, address and brand coverage added where available. Always confirm capability for your specific car before booking.",
  },
  {
    q: "What brands do these workshops specialise in?",
    a: "Mercedes-Benz, BMW, Audi, Volkswagen, Porsche, Volvo, Alfa Romeo, Land Rover, Jaguar, MINI and Maserati on the Continental side, plus Tesla and BYD for EVs. Use the brand and region filters to narrow to specialists for your car.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function WorkshopsPage() {
  return (
    <div className="bg-slate-50 px-4 py-12 text-slate-950 dark:bg-slate-950 dark:text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-6 lg:grid-cols-[1fr_320px] lg:items-end">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-700 dark:text-blue-300">Workshop directory</p>
            <h1 className="mt-3 max-w-3xl text-3xl font-black tracking-tight sm:text-5xl">Mercedes, BMW, Audi &amp; Continental car workshops in Singapore.</h1>
            <p className="mt-4 max-w-2xl text-slate-700 dark:text-slate-300">
              {focusListings.length} specialist workshops for Mercedes-Benz, BMW, Audi, Volkswagen, Porsche, Volvo, Land Rover, Jaguar, MINI, Tesla and BYD owners, across {regionCounts.length} regions of Singapore. Compare by region, brand, diagnostic tooling and quote transparency before you book — so you can pick a shop that proves the diagnosis instead of guessing parts.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {regionCounts.map((r) => (
                <span key={r.region} className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-bold text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300">
                  {r.region}: {r.count}
                </span>
              ))}
            </div>
          </div>
          <a href="/submit" className="rounded-2xl bg-blue-600 px-5 py-4 text-center text-sm font-black text-white hover:bg-blue-700">List your workshop</a>
        </div>

        <a
          href="/blog/best-mercedes-specialist-workshop-singapore-criteria"
          className="mt-6 block rounded-2xl border border-blue-200 bg-blue-50 p-5 transition hover:border-blue-400 hover:bg-blue-100 dark:border-blue-900 dark:bg-blue-950/30 dark:hover:border-blue-700 dark:hover:bg-blue-950/50"
        >
          <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-700 dark:text-blue-300">Read first</p>
          <h2 className="mt-1 text-lg font-black text-slate-950 dark:text-white">Best Mercedes specialist workshop in Singapore: what to look for →</h2>
          <p className="mt-1 text-sm text-slate-700 dark:text-slate-300">The criteria that actually matter when picking a Continental car workshop — diagnostic tooling, quote transparency and proof of work.</p>
        </a>

        <WorkshopDirectory shops={focusListings} />

        <section className="mt-12 border-t border-slate-200 pt-8 dark:border-slate-800">
          <h2 className="text-2xl font-black tracking-tight">Choosing a workshop in Singapore — common questions</h2>
          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            {faqs.map((f) => (
              <div key={f.q} className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
                <h3 className="text-base font-black text-slate-950 dark:text-white">{f.q}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-700 dark:text-slate-300">{f.a}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
