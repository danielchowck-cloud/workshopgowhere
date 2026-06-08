import { notFound } from "next/navigation";
import { formatRange, formatSgd, getAllIssues, getIssueBySeoSlug, getIssueSeoSlug, getIssueSeoTitle, getMatchingWorkshops, ownerFacingModelLabel } from "@/lib/directory";

export function generateStaticParams() {
  return getAllIssues().map((issue) => ({ slug: getIssueSeoSlug(issue) }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const issue = getIssueBySeoSlug(slug);
  if (!issue) return {};
  return {
    title: getIssueSeoTitle(issue),
    description: `What it usually means, fair Singapore repair price, red-flag quote and proof to ask for before repairing ${issue.model.brand} ${ownerFacingModelLabel(issue.model)}.`,
    alternates: { canonical: `/car-problems/${getIssueSeoSlug(issue)}` },
  };
}

export default async function CarProblemPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const issue = getIssueBySeoSlug(slug);
  if (!issue) notFound();
  const workshops = getMatchingWorkshops(issue);
  const allIssues = getAllIssues();
  const sameModelIssues = allIssues.filter((i) => i.model.id === issue.model.id && i.id !== issue.id);
  const sameBrandIssues = allIssues
    .filter((i) => i.model.brand === issue.model.brand && i.model.id !== issue.model.id)
    .slice(0, 6);
  const canonicalUrl = `https://workshopgowhere.com/car-problems/${getIssueSeoSlug(issue)}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${getIssueSeoTitle(issue)} — fair SG repair price`,
    description: `Guide for Singapore car owners: likely root cause, fair repair range, red-flag quote and proof to ask for before approving repair.`,
    author: { "@type": "Organization", name: "workshopgowhere" },
    publisher: { "@type": "Organization", name: "workshopgowhere" },
    mainEntityOfPage: canonicalUrl,
    about: [issue.model.brand, ownerFacingModelLabel(issue.model), issue.symptom, issue.likelyFix],
  };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://workshopgowhere.com" },
      { "@type": "ListItem", position: 2, name: "Car problems", item: "https://workshopgowhere.com/#popular" },
      { "@type": "ListItem", position: 3, name: getIssueSeoTitle(issue), item: canonicalUrl },
    ],
  };
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `What is the likely fix for ${getIssueSeoTitle(issue)}?`,
        acceptedAnswer: { "@type": "Answer", text: issue.likelyFix },
      },
      {
        "@type": "Question",
        name: "What is a fair repair price in Singapore?",
        acceptedAnswer: { "@type": "Answer", text: `A fair Singapore repair range is ${formatRange(issue.realFixPrice)} based on the common-fix guide on this page.` },
      },
      {
        "@type": "Question",
        name: "What should I ask the workshop for?",
        acceptedAnswer: { "@type": "Answer", text: "Ask for diagnostic fault codes, photo or video proof of the failed part, an itemised quote, and an explanation of why cheaper common fixes were ruled out." },
      },
    ],
  };

  return (
    <div className="bg-slate-50 text-slate-950 dark:bg-slate-950 dark:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <section className="border-b border-slate-200 bg-white px-4 py-10 dark:border-slate-800 dark:bg-slate-900">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-700 dark:text-blue-300">Singapore car repair guide</p>
          <h1 className="mt-3 max-w-4xl text-3xl font-black tracking-tight sm:text-5xl">{getIssueSeoTitle(issue)}</h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-slate-700 dark:text-slate-300">
            If you are seeing this symptom in Singapore, use this as a pre-workshop checklist. The goal is to identify the likely root cause, avoid replacing the wrong part, and know the fair repair range before approving work.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl bg-emerald-50 p-4 dark:bg-emerald-950/30">
              <div className="text-xs font-bold text-emerald-700 dark:text-emerald-300">Fair SG range</div>
              <div className="mt-1 text-2xl font-black">{formatRange(issue.realFixPrice)}</div>
            </div>
            <div className="rounded-2xl bg-rose-50 p-4 dark:bg-rose-950/30">
              <div className="text-xs font-bold text-rose-700 dark:text-rose-300">Red-flag quote</div>
              <div className="mt-1 text-2xl font-black">{formatSgd(issue.agentTrapPrice[0])}+</div>
            </div>
            <div className="rounded-2xl bg-blue-50 p-4 dark:bg-blue-950/30">
              <div className="text-xs font-bold text-blue-700 dark:text-blue-300">Likely fix</div>
              <div className="mt-1 text-sm font-black">{issue.likelyFix}</div>
            </div>
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
          <article className="rounded-3xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
            <h2 className="text-2xl font-black">What this usually means</h2>
            <p className="mt-4 leading-7 text-slate-700 dark:text-slate-300">{issue.diagnosticTip}</p>
            <h2 className="mt-8 text-2xl font-black">What to ask the workshop before approving repair</h2>
            <ul className="mt-4 space-y-2 text-slate-700 dark:text-slate-300">
              <li>• Show the diagnostic fault codes.</li>
              <li>• Show photo/video proof of the failed part.</li>
              <li>• Give an itemised quote for parts and labour.</li>
              <li>• Explain why cheaper common fixes were ruled out.</li>
              {issue.requiredTools?.map((tool) => <li key={tool}>• Use/confirm: {tool}</li>)}
            </ul>
            <p className="mt-6 rounded-2xl bg-amber-50 p-4 text-sm font-semibold text-amber-900 dark:bg-amber-950/30 dark:text-amber-200">
              This is not a final diagnosis. It is a money-saving checklist before you go workshop.
            </p>
          </article>

          <aside className="rounded-3xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
            <h2 className="text-xl font-black">Candidate workshops</h2>
            <div className="mt-4 space-y-3">
              {workshops.slice(0, 4).map((shop) => (
                <a key={shop.id} href={`/workshops/${shop.id}`} className="block rounded-2xl border border-slate-200 p-4 hover:border-blue-400 dark:border-slate-800">
                  <div className="font-black">{shop.title}</div>
                  <div className="mt-1 text-xs text-slate-500">{shop.area ?? shop.region} · {shop.brands?.slice(0, 3).join(" / ")}</div>
                  <div className="mt-2 text-sm font-bold text-emerald-700 dark:text-emerald-300">{shop.symptomPrices?.[issue.id] ? `From ${formatSgd(shop.symptomPrices[issue.id])}` : shop.priceFrom ? `From ${formatSgd(shop.priceFrom)}` : "Ask for quote"}</div>
                </a>
              ))}
            </div>
            {(() => {
              const brandSlugMap: Record<string, string> = {
                "Mercedes-Benz": "mercedes-workshop-singapore",
                "BMW": "bmw-workshop-singapore",
                "Porsche": "porsche-workshop-singapore",
                "Audi": "audi-workshop-singapore",
                "Volvo": "volvo-workshop-singapore",
                "Tesla": "tesla-workshop-singapore",
                "BYD": "byd-workshop-singapore",
              };
              const brandSlug = brandSlugMap[issue.model.brand];
              if (!brandSlug) return null;
              return (
                <a
                  href={`/${brandSlug}`}
                  className="mt-4 block rounded-2xl border border-blue-200 bg-blue-50 p-3 text-center text-sm font-black text-blue-800 hover:border-blue-400 hover:bg-blue-100 dark:border-blue-900 dark:bg-blue-950/30 dark:text-blue-200 dark:hover:border-blue-700"
                >
                  All {issue.model.brand} workshops in Singapore →
                </a>
              );
            })()}
          </aside>
        </div>

        {(sameModelIssues.length > 0 || sameBrandIssues.length > 0) && (
          <section className="mt-10 border-t border-slate-200 pt-8 dark:border-slate-800">
            {sameModelIssues.length > 0 && (
              <div>
                <h2 className="text-xl font-black">Other problems on this {issue.model.brand.replace("Mercedes-Benz", "Mercedes")} {ownerFacingModelLabel(issue.model)}</h2>
                <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {sameModelIssues.map((i) => (
                    <a key={i.id} href={`/car-problems/${getIssueSeoSlug(i)}`} className="block rounded-2xl border border-slate-200 bg-white p-4 transition hover:border-blue-400 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900 dark:hover:border-blue-500">
                      <div className="text-sm font-black text-slate-950 dark:text-white">{i.symptom}</div>
                      <div className="mt-2 text-xs font-semibold text-emerald-700 dark:text-emerald-300">Fair {formatRange(i.realFixPrice)} →</div>
                    </a>
                  ))}
                </div>
              </div>
            )}
            {sameBrandIssues.length > 0 && (
              <div className="mt-8">
                <h2 className="text-xl font-black">More {issue.model.brand.replace("Mercedes-Benz", "Mercedes")} problems owners search in Singapore</h2>
                <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {sameBrandIssues.map((i) => (
                    <a key={`${i.model.id}-${i.id}`} href={`/car-problems/${getIssueSeoSlug(i)}`} className="block rounded-2xl border border-slate-200 bg-white p-4 transition hover:border-blue-400 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900 dark:hover:border-blue-500">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500">{ownerFacingModelLabel(i.model)}</div>
                      <div className="mt-1 text-sm font-black text-slate-950 dark:text-white">{i.symptom}</div>
                    </a>
                  ))}
                </div>
              </div>
            )}
            <a href="/workshops" className="mt-8 inline-flex rounded-2xl bg-blue-600 px-5 py-3 text-sm font-black text-white hover:bg-blue-700">
              Browse all {issue.model.brand.replace("Mercedes-Benz", "Mercedes")} &amp; Continental workshops in Singapore →
            </a>
          </section>
        )}
      </main>
    </div>
  );
}
