import { notFound } from "next/navigation";
import { formatRange, formatSgd, getAllIssues, getIssueBySeoSlug, getIssueSeoSlug, getIssueSeoTitle, getMatchingWorkshops } from "@/lib/directory";

export function generateStaticParams() {
  return getAllIssues().map((issue) => ({ slug: getIssueSeoSlug(issue) }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const issue = getIssueBySeoSlug(slug);
  if (!issue) return {};
  return {
    title: `${getIssueSeoTitle(issue)} — fair SG repair price`,
    description: `What it usually means, fair Singapore repair price, red-flag quote and proof to ask for before repairing ${issue.model.brand} ${issue.model.model}.`,
  };
}

export default async function CarProblemPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const issue = getIssueBySeoSlug(slug);
  if (!issue) notFound();
  const workshops = getMatchingWorkshops(issue);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${getIssueSeoTitle(issue)} — fair SG repair price`,
    description: `Guide for Singapore car owners: likely root cause, fair repair range, red-flag quote and proof to ask for before approving repair.`,
    author: { "@type": "Organization", name: "workshopgowhere" },
    publisher: { "@type": "Organization", name: "workshopgowhere" },
    mainEntityOfPage: `https://workshopgowhere.com/car-problems/${getIssueSeoSlug(issue)}`,
    about: [issue.model.brand, issue.model.model, issue.symptom, issue.likelyFix],
  };

  return (
    <div className="bg-slate-50 text-slate-950 dark:bg-slate-950 dark:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
          </aside>
        </div>
      </main>
    </div>
  );
}
