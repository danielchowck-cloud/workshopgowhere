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
    context: "Mercedes-Benz is one of the most common Continental brands on Singapore roads, with A/CLA, B-Class, C-Class, E-Class, CLS, GLA, GLC, GLE, S-Class and V-Class models represented. Common repair categories include air suspension, dual-clutch and 9G-Tronic gearbox behaviour, aircon performance and electronics.",
  },
  {
    slug: "bmw-workshop-singapore",
    brand: "BMW",
    brandLabel: "BMW",
    context: "BMW has a large installed base in Singapore across 1/2-Series, 3-Series, 4-Series, 5-Series, 7-Series and X1/X3/X5 SUVs. Frequently quoted repairs involve N20/N55 cold-start rattle, timing chain symptoms, ZF 8HP gearbox feel, xDrive vibration, air suspension and electronic faults.",
  },
  {
    slug: "porsche-workshop-singapore",
    brand: "Porsche",
    brandLabel: "Porsche",
    context: "Porsche workshops in Singapore are usually equipped with PIWIS diagnostics. The most-serviced Porsche models locally include Macan, Cayenne, 911, Panamera, Boxster/Cayman and Taycan, with PDK gearbox behaviour, coolant system, transfer case, air suspension and EV charging being typical service areas.",
  },
  {
    slug: "audi-workshop-singapore",
    brand: "Audi",
    brandLabel: "Audi",
    context: "Audi shares much of its diagnostic platform with Volkswagen (ODIS, VCDS). Singapore Audi owners most often query DSG/S tronic shifting feel, EA888 engine issues, coolant leaks, air suspension and electronics across A3, A4/A5, A6, A7, A8, TT, Q3, Q5 and Q7.",
  },
  {
    slug: "volkswagen-workshop-singapore",
    brand: "Volkswagen",
    brandLabel: "Volkswagen",
    context: "Volkswagen workshops in Singapore usually overlap with Audi specialists because both use ODIS and VCDS diagnostics. Golf, Passat, Tiguan, Touran, Sharan, Jetta, Polo, Scirocco, Beetle, Touareg, T-Cross/T-Roc and Arteon owners most often search DSG judder, TSI misfire, EPC light, coolant leaks and aircon issues.",
  },
  {
    slug: "alfa-romeo-workshop-singapore",
    brand: "Alfa Romeo",
    brandLabel: "Alfa Romeo",
    context: "Alfa Romeo ownership in Singapore is niche but repair-sensitive, especially for Giulia, Stelvio, Giulietta and MiTo owners. Common searches involve electrical warnings, TCT gearbox behaviour, MultiAir or misfire symptoms, coolant leaks and suspension knocks.",
  },
  {
    slug: "land-rover-workshop-singapore",
    brand: "Land Rover",
    brandLabel: "Land Rover",
    context: "Land Rover and Range Rover models need JLR-capable diagnostics. Singapore owners commonly search for Evoque, Discovery Sport and Range Rover Sport issues around coolant leaks, DPF/EGR warnings, gearbox behaviour and air suspension faults.",
  },
  {
    slug: "jaguar-workshop-singapore",
    brand: "Jaguar",
    brandLabel: "Jaguar",
    context: "Jaguar shares much of its diagnostic stack with Land Rover. Singapore owner searches commonly involve XE, XF, F-Pace, E-Pace and F-Type issues around coolant leaks, low-voltage electrical warnings, ZF gearbox behaviour and suspension noise.",
  },
  {
    slug: "mini-workshop-singapore",
    brand: "MINI",
    brandLabel: "MINI",
    context: "MINI is BMW-group under the skin, so ISTA-capable workshops are useful. Singapore MINI Cooper, Countryman and Clubman owners commonly search engine mount vibration, coolant leaks, ALL4 drivetrain shudder, aircon and door/latch issues.",
  },
  {
    slug: "maserati-workshop-singapore",
    brand: "Maserati",
    brandLabel: "Maserati",
    context: "Maserati ownership in Singapore is niche but repair quotes can escalate quickly. Ghibli, Quattroporte and Levante owners commonly search electrical warnings, battery drain, suspension faults, oil leaks and air suspension issues.",
  },
  {
    slug: "volvo-workshop-singapore",
    brand: "Volvo",
    brandLabel: "Volvo",
    context: "Volvo workshops in Singapore typically run VIDA diagnostics. XC40, XC60, XC90, S60, S90, V60 and V90 models are represented locally, with common service queries around aircon performance, coolant leaks, mounts, batteries and electronics.",
  },
  {
    slug: "tesla-workshop-singapore",
    brand: "Tesla",
    brandLabel: "Tesla",
    context: "Tesla volume in Singapore is led by Model 3 and Model Y, with Model S and Model X also present in the used and parallel-import market. Independent EV-capable workshops are still limited, and common queries involve 12V battery warnings, air suspension, aircon, tyres and high-voltage safety.",
  },
  {
    slug: "byd-workshop-singapore",
    brand: "BYD",
    brandLabel: "BYD",
    context: "BYD has become Singapore's fastest-growing EV brand, led by Atto 3, Sealion, Dolphin and Seal. Service queries are dominated by 12V battery warnings, charging interruptions, software issues, aircon performance and tyre wear on heavier EV platforms.",
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
    { q: "Which Porsche models are covered here?", a: "Coverage now includes Cayenne, Macan, 911, Panamera and Boxster/Cayman problem pages, with emphasis on PIWIS-backed diagnosis before expensive gearbox, suspension or coolant-system repairs." },
  ],
  "Audi": [
    { q: "What diagnostic platform do Audi workshops in Singapore use?", a: "ODIS is the official Audi/Volkswagen factory tool. Many independents also use VCDS, which is a respected community-grade diagnostic platform capable of advanced coding on most VAG cars." },
    { q: "How can I tell if a DSG jerking issue is serious?", a: "DSG/S tronic shifting concerns often resolve with a mechatronic adaptation, software update or fluid service before any internal work. Ask for ODIS or VCDS log evidence before approving an overhaul." },
    { q: "Which Audi models are covered here?", a: "Coverage now includes A3, A4/A5, A6, A7, A8, TT, Q3, Q5 and Q7 pages, reflecting the sedan, coupe and SUV models commonly seen in Singapore workshop searches." },
  ],
  "Volkswagen": [
    { q: "What diagnostic tools should a Volkswagen workshop in Singapore have?", a: "ODIS is the official Volkswagen/Audi diagnostic platform, while VCDS is a strong independent diagnostic tool for VAG cars. For DSG, EPC and module faults, ask for fault-code evidence and adaptation values." },
    { q: "Is DSG jerking always a gearbox failure?", a: "No. DSG judder or hesitation can come from adaptation, fluid condition, clutch wear or mechatronic seals before a full gearbox failure. A proper scan and road-test log should come before any overhaul quote." },
    { q: "Which Volkswagen models are common in Singapore?", a: "Besides Golf and Passat, Singapore owners commonly search for Tiguan, Touran, Sharan, Jetta, Polo, Scirocco and Beetle repair issues. Newer official models such as T-Cross and the ID range should be added as their local repair patterns become clearer." },
  ],
  "Alfa Romeo": [
    { q: "What should an Alfa Romeo workshop be able to diagnose?", a: "It should be comfortable with Alfa-compatible diagnostics, battery and low-voltage checks, TCT gearbox values, MultiAir-related symptoms, misfire data and suspension inspection." },
    { q: "Why do Alfa Romeo quotes vary so much?", a: "Parts availability and diagnostic familiarity vary widely. Ask for fault codes, test values and proof of the failed part before approving expensive electrical, gearbox or engine work." },
  ],
  "Land Rover": [
    { q: "What diagnostic tool should a Land Rover workshop have?", a: "A proper Land Rover workshop should have JLR SDD or Pathfinder capability, especially for air suspension, DPF/EGR, gearbox adaptation and module faults." },
    { q: "Is Land Rover air suspension always expensive?", a: "Not always. A leak may be one strut, line, valve block or compressor issue. Ask for leak-test proof and level-control data before approving multi-corner replacement." },
  ],
  "Jaguar": [
    { q: "Do Jaguar workshops use the same tools as Land Rover?", a: "Often yes. Jaguar and Land Rover share JLR diagnostic platforms, so JLR SDD/Pathfinder capability matters for XE, XF, F-Pace, E-Pace and F-Type faults." },
    { q: "What should I ask before approving a Jaguar gearbox quote?", a: "Ask for JLR fault codes, fluid/service history, adaptation values and mount inspection before approving a full gearbox replacement." },
  ],
  "MINI": [
    { q: "Can BMW specialists work on MINI?", a: "Many can, because MINI is BMW-group and ISTA diagnostics are useful. Still ask whether the shop has experience with your MINI generation and engine family." },
    { q: "What are common MINI repair quote traps?", a: "Mount vibration, coolant leaks and ALL4 shudder can be over-quoted as gearbox or engine failure. Ask for lifted inspection, pressure-test results and ISTA scan data." },
  ],
  "Maserati": [
    { q: "Why are Maserati repair quotes so high?", a: "Parts cost and limited specialist familiarity can push quotes up quickly. Ask for diagnostic proof and consider a second opinion before approving suspension, electrical or engine-leak work." },
    { q: "What should a Maserati specialist be able to show?", a: "They should show fault codes, battery/sleep-current data for electrical issues, suspension scan data, and photos or pressure-test proof for coolant and oil leaks." },
  ],
  "Volvo": [
    { q: "What diagnostic tool is used for Volvo repairs in Singapore?", a: "VIDA is the official Volvo factory platform. Independent Volvo specialists should have either VIDA or a capable equivalent that can perform module coding and adaptation, not just OBD reading." },
    { q: "Which Volvo models are covered here?", a: "Coverage now includes XC40, XC60, XC90, S60, S90, V60 and V90 pages, with common Singapore concerns around aircon, coolant, mount vibration, electronics and 12V battery warnings." },
  ],
  "Tesla": [
    { q: "Can independent workshops in Singapore service Teslas?", a: "Independent Tesla service is limited in Singapore. Tesla-authorised service centres handle most software, battery and drivetrain work. Independents are useful for tyres, wheel alignment, brakes and accessories." },
    { q: "Which Tesla models are covered here?", a: "Coverage now includes Model 3, Model Y, Model S and Model X pages, with practical checks around 12V battery warnings, aircon, suspension noise, tyre wear and air suspension." },
  ],
  "BYD": [
    { q: "Where can I service a BYD Atto 3 or Sealion in Singapore?", a: "The Vantage Automotive network is the official BYD service partner in Singapore. A small number of independent EV-capable workshops also handle non-warranty work — generally limited to consumables, tyres, alignment and 12V battery." },
    { q: "Which BYD models are covered here?", a: "Coverage now includes Atto 3, Sealion, Dolphin and Seal pages, focusing on 12V battery, charging, aircon and tyre/alignment issues that owners are likely to search first." },
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
              {brandIssues.map((issue) => (
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
