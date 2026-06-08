import { notFound } from "next/navigation";
import { listings } from "@/data/listings";
import { formatSgd, getAllIssues, getIssueSeoSlug, getListing, ownerFacingModelLabel } from "@/lib/directory";

export function generateStaticParams() {
  return listings.map((shop) => ({ id: shop.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const shop = getListing(id);
  if (!shop) return {};
  const brandsStr = shop.brands?.slice(0, 3).join(", ") ?? "";
  const rawBlurb = shop.blurb ?? "";
  const blurbSnippet = rawBlurb.length > 100 ? rawBlurb.slice(0, 100) + "…" : rawBlurb;
  const description = `${shop.title} — ${brandsStr ? brandsStr + " workshop in " : ""}${shop.area ?? shop.region}, Singapore. ${blurbSnippet}`;
  return {
    title: `${shop.title} — workshopgowhere`,
    description,
    alternates: { canonical: `/workshops/${shop.id}` },
  };
}

export default async function WorkshopProfile({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const shop = getListing(id);
  if (!shop) notFound();

  const matchingIssues = getAllIssues().filter((issue) =>
    shop.symptomPrices?.[issue.id] || shop.brands?.includes(issue.model.brand),
  ).slice(0, 8);
  const canonicalUrl = `https://workshopgowhere.com/workshops/${shop.id}`;
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://workshopgowhere.com" },
      { "@type": "ListItem", position: 2, name: "Workshops", item: "https://workshopgowhere.com/workshops" },
      { "@type": "ListItem", position: 3, name: shop.title, item: canonicalUrl },
    ],
  };
  const localBusinessJsonLdRaw = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    name: shop.title,
    url: canonicalUrl,
    description: shop.blurb,
    address: {
      "@type": "PostalAddress",
      streetAddress: shop.address || shop.area || "",
      addressLocality: "Singapore",
      addressCountry: "SG",
    },
    telephone: shop.phone ? `+65${shop.phone.replace(/\D/g, "")}` : undefined,
    openingHours: shop.hours || undefined,
    areaServed: "Singapore",
    aggregateRating: shop.rating ? { "@type": "AggregateRating", ratingValue: shop.rating, reviewCount: shop.reviewCount || 1 } : undefined,
    makesOffer: shop.priceFrom ? { "@type": "Offer", priceCurrency: "SGD", price: shop.priceFrom, description: "Starting diagnostic or repair price guide" } : undefined,
  };
  // Strip undefined fields before serialising
  const localBusinessJsonLd = JSON.parse(JSON.stringify(localBusinessJsonLdRaw));

  return (
    <div className="bg-slate-50 px-4 py-12 text-slate-950 dark:bg-slate-950 dark:text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }} />
      <div className="mx-auto max-w-5xl">
        <a href="/workshops" className="text-sm font-bold text-blue-700 hover:underline dark:text-blue-300">← Back to workshops</a>
        <section className="mt-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-xl dark:border-slate-800 dark:bg-slate-900 sm:p-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                {shop.verified && <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-black text-blue-800 dark:bg-blue-950 dark:text-blue-200">Verified specialist</span>}
                {shop.agentAlternative && <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-black text-emerald-800 dark:bg-emerald-950 dark:text-emerald-200">Agent alternative</span>}
              </div>
              <h1 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">{shop.title}</h1>
              <p className="mt-3 text-slate-600 dark:text-slate-400">{shop.area ?? shop.region}{shop.address ? ` · ${shop.address}` : ""}</p>
              <p className="mt-5 max-w-2xl text-slate-700 dark:text-slate-300">{shop.blurb}</p>
            </div>
            <div className="rounded-2xl bg-slate-50 p-4 text-sm dark:bg-slate-950 sm:min-w-56">
              <div className="font-black">Quick facts</div>
              <div className="mt-3 space-y-2 text-slate-600 dark:text-slate-400">
                <p>Rating: {shop.rating ? `★${shop.rating} (${shop.reviewCount ?? 0})` : "Pending"}</p>
                <p>From: {shop.priceFrom ? formatSgd(shop.priceFrom) : "Ask"}</p>
                <p>Region: {shop.region}</p>
                {shop.phone && (
                  <p>Call: <a href={`tel:+65${shop.phone.replace(/[\s+]/g, "")}`} className="text-blue-700 hover:underline dark:text-blue-300">+65 {shop.phone}</a></p>
                )}
                {shop.hours && <p>Hours: {shop.hours}</p>}
                {shop.sourceUrl && !/google\.com|google-maps|threebestrated|motorist\.sg|recordowl|sgmerc|sgcarmart|facebook\.com|forum/i.test(shop.sourceUrl) && (
                  <p>Website: <a href={shop.sourceUrl} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline dark:text-blue-300">Visit →</a></p>
                )}
                {shop.transparencyScore && <p>Transparency: {"★".repeat(shop.transparencyScore)}</p>}
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 p-4 dark:border-slate-800">
              <div className="text-xs font-black uppercase tracking-wider text-slate-500">Brands</div>
              <p className="mt-2 text-sm font-semibold">{shop.brands?.join(" / ") ?? "General"}</p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4 dark:border-slate-800">
              <div className="text-xs font-black uppercase tracking-wider text-slate-500">Tools</div>
              <p className="mt-2 text-sm font-semibold">{shop.diagnosticTools?.length ? shop.diagnosticTools.join(" / ") : "Pending verification"}</p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4 dark:border-slate-800">
              <div className="text-xs font-black uppercase tracking-wider text-slate-500">Transparency</div>
              <ul className="mt-2 space-y-1 text-sm text-slate-700 dark:text-slate-300">
                <li>{shop.providesPhotoProof ? "✓" : "—"} Photo proof</li>
                <li>{shop.providesScans ? "✓" : "—"} Diagnostic scans</li>
                <li>{shop.hasItemizedQuote ? "✓" : "—"} Itemised quote</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-black">Relevant diagnostic pages</h2>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {matchingIssues.map((issue) => (
              <a key={issue.id} href={`/car-problems/${getIssueSeoSlug(issue)}`} className="rounded-2xl border border-slate-200 bg-white p-4 transition hover:border-blue-400 dark:border-slate-800 dark:bg-slate-900">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500">{issue.model.brand} · {ownerFacingModelLabel(issue.model)}</div>
                <div className="mt-1 font-black">{issue.symptom}</div>
                <div className="mt-2 text-sm font-bold text-emerald-700 dark:text-emerald-300">
                  {shop.symptomPrices?.[issue.id] ? `This shop from ${formatSgd(shop.symptomPrices[issue.id])}` : "Coverage match"}
                </div>
              </a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
