import { notFound } from "next/navigation";
import { listings } from "@/data/listings";
import { CAR_MODELS } from "@/data/carModels";
import { getAllIssues, getIssueSeoSlug, ownerFacingModelLabel, formatSgd } from "@/lib/directory";

type Brand = {
  slug: string;
  brand: string;
  brandLabel: string;
  context: string;
};

const BRANDS: Brand[] = [
  {
    slug: "mercedes-workshop-singapore",
    brand: "Mercedes-Benz",
    brandLabel: "Mercedes-Benz",
    context: "Mercedes-Benz is one of the most common Continental brands on Singapore roads, with the W213 E-Class, W205 C-Class, GLE and GLC making up a large share of the local prestige fleet. Common repair categories include air suspension (Airmatic), 9G-Tronic gearbox behaviour, aircon performance and MBUX electronics.",
  },
  {
    slug: "bmw-workshop-singapore",
    brand: "BMW",
    brandLabel: "BMW",
    context: "BMW has a large installed base in Singapore across the F30/G20 3 Series, F10/G30 5 Series and X-series SUVs. Frequently quoted repairs involve N20/N55 cold-start rattle, timing chain symptoms, ZF 8HP gearbox feel and electronic faults.",
  },
  {
    slug: "porsche-workshop-singapore",
    brand: "Porsche",
    brandLabel: "Porsche",
    context: "Porsche workshops in Singapore are usually equipped with PIWIS diagnostics. The most-serviced Porsche models locally are the Macan and Cayenne, with PDK gearbox behaviour, coolant system and air suspension being typical service areas.",
  },
  {
    slug: "audi-workshop-singapore",
    brand: "Audi",
    brandLabel: "Audi",
    context: "Audi shares much of its diagnostic platform with Volkswagen (ODIS, VCDS). Singapore Audi owners most often query DSG/S tronic shifting feel, EA888 engine cold-start issues and electronics on the A4, A6 and Q-series.",
  },
  {
    slug: "volvo-workshop-singapore",
    brand: "Volvo",
    brandLabel: "Volvo",
    context: "Volvo workshops in Singapore typically run VIDA diagnostics. The XC60 and XC90 dominate the local Volvo fleet, with common service queries around aircon performance, coolant and electronics.",
  },
  {
    slug: "tesla-workshop-singapore",
    brand: "Tesla",
    brandLabel: "Tesla",
    context: "Tesla has only the Model 3 and Model Y in volume in Singapore. Independent EV-capable workshops are still limited — the most frequent service queries involve 12V battery warnings, high-voltage system handling and tyre wear patterns.",
  },
  {
    slug: "byd-workshop-singapore",
    brand: "BYD",
    brandLabel: "BYD",
    context: "BYD has become Singapore's fastest-growing EV brand, led by the Atto 3, Sealion and Dolphin. Service queries are dominated by 12V battery warnings, software issues and EV-specific drivetrain checks.",
  },
];

const BRAND_FAQS: Record<string, { q: string; a: string }[]> = {
  "Mercedes-Benz": [
    { q: "What diagnostic tools should a Mercedes workshop in Singapore have?", a: "XENTRY (formerly Star Diagnostic) is the official Mercedes-Benz diagnostic platform. Any workshop quoting on a Mercedes should be able to show XENTRY fault codes, actuation tests and adaptation values — not just an OBD reader." },
    { q: "How can I tell if a Mercedes workshop quote is fair?", a: "Ask for a written itemised quote with parts and labour broken out separately. For air suspension and gearbox jobs especially, ask what diagnostic proof (scan, leak test, adaptation reading) supports the recommended fix before you approve." },
    { q: "Where in Singapore are the main Mercedes workshop clusters?", a: "The largest cluster is Sin Ming AutoCity in Central Singapore. Kaki Bukit in the East and Toh Guan/Jurong in the West also have several multi-brand Continental specialists serving Mercedes owners." },
  ],
  "BMW": [
    { q: "What diagnostic tools should a BMW workshop in Singapore have?", a: "ISTA is the official BMW factory diagnostic platform. Workshops without ISTA can read fault codes but often cannot perform module coding, adaptation resets or detailed actuation tests — which matter for many BMW repairs." },
    { q: "How do I avoid being over-quoted on a BMW gearbox?", a: "The ZF 8HP gearbox in many modern BMWs rarely needs a full rebuild. Ask for an ISTA scan, mechatronic sleeve check and gearbox fluid condition before approving anything labelled \"gearbox overhaul\"." },
    { q: "Where in Singapore are BMW specialists concentrated?", a: "Sin Ming AutoCity (Central) hosts the largest concentration of BMW specialists. Kaki Bukit (East) and Toh Guan (West) also have BMW-capable Continental workshops." },
  ],
  "Porsche": [
    { q: "What diagnostic tool is used for Porsche repairs?", a: "PIWIS is the official Porsche factory diagnostic system. A workshop without PIWIS will struggle with coding, adaptation and many Porsche-specific service procedures, even if it can read basic fault codes." },
    { q: "Is the PDK gearbox in a Porsche Macan reliable?", a: "The PDK in the Macan is generally robust, but jerking or shudder in traffic is often misdiagnosed as a full mechatronic failure. Ask for a PIWIS scan and clutch wear values before approving major work." },
  ],
  "Audi": [
    { q: "What diagnostic platform do Audi workshops in Singapore use?", a: "ODIS is the official Audi/Volkswagen factory tool. Many independents also use VCDS, which is a respected community-grade diagnostic platform capable of advanced coding on most VAG cars." },
    { q: "How can I tell if a DSG jerking issue is serious?", a: "DSG/S tronic shifting concerns often resolve with a mechatronic adaptation, software update or fluid service before any internal work. Ask for ODIS or VCDS log evidence before approving an overhaul." },
  ],
  "Volvo": [
    { q: "What diagnostic tool is used for Volvo repairs in Singapore?", a: "VIDA is the official Volvo factory platform. Independent Volvo specialists should have either VIDA or a capable equivalent that can perform module coding and adaptation, not just OBD reading." },
  ],
  "Tesla": [
    { q: "Can independent workshops in Singapore service Teslas?", a: "Independent Tesla service is limited in Singapore. Tesla-authorised service centres handle most software, battery and drivetrain work. Independents are useful for tyres, wheel alignment, brakes and accessories." },
  ],
  "BYD": [
    { q: "Where can I service a BYD Atto 3 or Sealion in Singapore?", a: "The Vantage Automotive network is the official BYD service partner in Singapore. A small number of independent EV-capable workshops also handle non-warranty work — generally limited to consumables, tyres, alignment and 12V battery." },
  ],
};

export function generateStaticParams() {
  return BRANDS.map((b) => ({ brandHub: b.slug }));
}

type RouteParams = { brandHub: string };

export async function generateMetadata({ params }: { params: Promise<RouteParams> }) {
  const { brandHub } = await params;
  const brand = BRANDS.find((b) => b.slug === brandHub);
  if (!brand) return {};

  const workshops = listings.filter((shop) => shop.brands?.includes(brand.brand));
  const count = workshops.length;

  return {
    title: `${brand.brandLabel} Workshop Singapore — ${count} Specialist Workshops | WorkshopGoWhere`,
    description: `${count} ${brand.brandLabel} specialist workshops in Singapore. Compare by region, diagnostic tools and quote transparency. Plus common ${brand.brandLabel} problems, fair price ranges and what to ask the workshop for proof.`,
    alternates: { canonical: `/${brand.slug}` },
  };
}

export default async function BrandHubPage({ params }: { params: Promise<RouteParams> }) {
  const { brandHub } = await params;
  const brand = BRANDS.find((b) => b.slug === brandHub);
  if (!brand) notFound();

  const workshops = listings
    .filter((shop) => shop.brands?.includes(brand.brand))
    .sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0));

  const brandModels = CAR_MODELS.filter((m) => m.brand === brand.brand);
  const brandIssues = getAllIssues().filter((issue) => issue.model.brand === brand.brand);

  // Group workshops by region
  const regions = ["central", "east", "west", "south", "north", "northeast"];
  const byRegion = regions
    .map((r) => ({ region: r, shops: workshops.filter((w) => w.region === r) }))
    .filter((g) => g.shops.length > 0);

  const faqs = BRAND_FAQS[brand.brand] ?? [];

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${brand.brandLabel} Workshops in Singapore`,
    itemListElement: workshops.slice(0, 20).map((shop, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `https://workshopgowhere.com/workshops/${shop.id}`,
      name: shop.title,
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://workshopgowhere.com/" },
      { "@type": "ListItem", position: 2, name: "Workshops", item: "https://workshopgowhere.com/workshops" },
      { "@type": "ListItem", position: 3, name: `${brand.brandLabel} Workshop Singapore`, item: `https://workshopgowhere.com/${brand.slug}` },
    ],
  };

  const faqJsonLd = faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  } : null;

  return (
    <div className="bg-slate-50 px-4 py-12 text-slate-950 dark:bg-slate-950 dark:text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      {faqJsonLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />}

      <div className="mx-auto max-w-5xl">
        <nav className="text-xs text-slate-500 dark:text-slate-400">
          <a href="/" className="hover:underline">Home</a> · <a href="/workshops" className="hover:underline">Workshops</a> · <span>{brand.brandLabel}</span>
        </nav>

        <p className="mt-6 text-xs font-black uppercase tracking-[0.2em] text-blue-700 dark:text-blue-300">{brand.brandLabel} specialists</p>
        <h1 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">{brand.brandLabel} workshops in Singapore</h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-slate-700 dark:text-slate-300">
          {workshops.length} {brand.brandLabel}-capable workshops listed across Singapore. {brand.context}
        </p>

        {/* Workshop list grouped by region */}
        <section className="mt-10">
          <h2 className="text-2xl font-black tracking-tight">All {brand.brandLabel} workshops by region</h2>
          <div className="mt-6 space-y-8">
            {byRegion.map((group) => (
              <div key={group.region}>
                <h3 className="text-sm font-black uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                  {group.region} Singapore · {group.shops.length}
                </h3>
                <ul className="mt-3 grid gap-3 sm:grid-cols-2">
                  {group.shops.map((shop) => (
                    <li key={shop.id}>
                      <a
                        href={`/workshops/${shop.id}`}
                        className="block rounded-2xl border border-slate-200 bg-white p-4 transition hover:-translate-y-0.5 hover:border-blue-400 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900 dark:hover:border-blue-500"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <div className="text-sm font-black text-slate-950 dark:text-white">{shop.title}</div>
                            <div className="mt-1 text-xs text-slate-500 dark:text-slate-400">{shop.area ?? group.region}</div>
                          </div>
                          {shop.rating != null && (
                            <span className="shrink-0 rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-black uppercase tracking-wider text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-200">
                              {shop.rating.toFixed(1)}★
                            </span>
                          )}
                        </div>
                        <p className="mt-2 line-clamp-2 text-xs leading-5 text-slate-600 dark:text-slate-400">{shop.blurb}</p>
                        {shop.diagnosticTools && shop.diagnosticTools.length > 0 && (
                          <div className="mt-2 flex flex-wrap gap-1 text-[10px] uppercase tracking-wider text-slate-500">
                            {shop.diagnosticTools.slice(0, 3).map((tool) => (
                              <span key={tool} className="rounded bg-slate-100 px-1.5 py-0.5 dark:bg-slate-800 dark:text-slate-300">{tool}</span>
                            ))}
                          </div>
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Common problems */}
        {brandIssues.length > 0 && (
          <section className="mt-12">
            <h2 className="text-2xl font-black tracking-tight">Common {brand.brandLabel} problems Singapore owners search</h2>
            <p className="mt-2 max-w-2xl text-sm text-slate-600 dark:text-slate-400">
              Diagnostic guides covering likely fix, fair Singapore price range, and what proof to ask the workshop for.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {brandIssues.slice(0, 12).map((issue) => (
                <li key={`${issue.model.id}-${issue.id}`}>
                  <a
                    href={`/car-problems/${getIssueSeoSlug(issue)}`}
                    className="block rounded-2xl border border-slate-200 bg-white p-4 transition hover:border-blue-400 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900 dark:hover:border-blue-500"
                  >
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                      {ownerFacingModelLabel(issue.model)}
                    </div>
                    <div className="mt-1 text-sm font-black leading-5 text-slate-950 dark:text-white">{issue.symptom}</div>
                    <div className="mt-2 text-xs text-slate-600 dark:text-slate-400">
                      <span className="font-semibold text-emerald-700 dark:text-emerald-300">Fair: {formatSgd(issue.realFixPrice[0])}–{formatSgd(issue.realFixPrice[1])}</span>
                      <span className="mx-2 text-slate-400">·</span>
                      <span className="font-semibold text-rose-700 dark:text-rose-300">Trap: {formatSgd(issue.agentTrapPrice[0])}+</span>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
            {brandModels.length > 0 && (
              <p className="mt-4 text-xs text-slate-500">
                Coverage so far: {brandModels.map((m) => ownerFacingModelLabel(m)).join(" · ")}.
              </p>
            )}
          </section>
        )}

        {/* FAQ */}
        {faqs.length > 0 && (
          <section className="mt-12">
            <h2 className="text-2xl font-black tracking-tight">{brand.brandLabel} workshop questions</h2>
            <div className="mt-6 space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
                  <h3 className="text-sm font-black text-slate-950 dark:text-white">{faq.q}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-700 dark:text-slate-300">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Internal link to winning blog post (Mercedes only — most relevant) */}
        {brand.brand === "Mercedes-Benz" && (
          <a
            href="/blog/best-mercedes-specialist-workshop-singapore-criteria"
            className="mt-12 block rounded-2xl border border-blue-200 bg-blue-50 p-5 transition hover:border-blue-400 hover:bg-blue-100 dark:border-blue-900 dark:bg-blue-950/30 dark:hover:border-blue-700 dark:hover:bg-blue-950/50"
          >
            <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-700 dark:text-blue-300">Read next</p>
            <h2 className="mt-1 text-lg font-black text-slate-950 dark:text-white">Best Mercedes specialist workshop in Singapore: what to look for →</h2>
            <p className="mt-1 text-sm text-slate-700 dark:text-slate-300">The criteria that actually matter — diagnostic tooling, quote transparency, and proof of work.</p>
          </a>
        )}

        <div className="mt-12 grid gap-3 sm:grid-cols-2">
          <a href="/workshops" className="rounded-2xl border border-slate-300 bg-white px-5 py-4 text-center text-sm font-black text-slate-900 hover:border-blue-400 dark:border-slate-700 dark:bg-slate-900 dark:text-white">Browse all 42 workshops →</a>
          <a href="/audit-my-quote" className="rounded-2xl bg-orange-500 px-5 py-4 text-center text-sm font-black text-white hover:bg-orange-600">Audit my quote →</a>
        </div>
      </div>
    </div>
  );
}
