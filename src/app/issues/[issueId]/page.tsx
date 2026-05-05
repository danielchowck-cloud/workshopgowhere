import { notFound } from "next/navigation";
import { CAR_MODELS } from "@/data/carModels";
import { formatRange, formatSgd, getIssue, getMatchingWorkshops } from "@/lib/directory";

export function generateStaticParams() {
  return CAR_MODELS.flatMap((model) => model.commonIssues.map((issue) => ({ issueId: issue.id })));
}

export async function generateMetadata({ params }: { params: Promise<{ issueId: string }> }) {
  const { issueId } = await params;
  const issue = getIssue(issueId);
  if (!issue) return {};
  return {
    title: `${issue.model.model}: ${issue.symptom} — workshopgowhere`,
    description: `Likely fix, fair SG price range, red-flag quote and workshops for ${issue.model.brand} ${issue.model.model}.`,
  };
}

export default async function IssuePage({ params }: { params: Promise<{ issueId: string }> }) {
  const { issueId } = await params;
  const issue = getIssue(issueId);
  if (!issue) notFound();
  const workshops = getMatchingWorkshops(issue);
  const savings = issue.agentTrapPrice[0] - issue.realFixPrice[1];

  return (
    <div className="bg-slate-50 text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="border-b border-slate-200 bg-white px-4 py-10 dark:border-slate-800 dark:bg-slate-900">
        <div className="mx-auto max-w-6xl">
          <a href="/" className="text-sm font-bold text-blue-700 hover:underline dark:text-blue-300">← Back to diagnosis guide</a>
          <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_360px] lg:items-start">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-700 dark:text-blue-300">
                {issue.model.brand} · {issue.model.model} · {issue.model.yearsActive}
              </p>
              <h1 className="mt-3 max-w-3xl text-3xl font-black tracking-tight sm:text-5xl">{issue.symptom}</h1>
              <p className="mt-5 max-w-3xl text-base leading-7 text-slate-700 dark:text-slate-300">{issue.diagnosticTip}</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 shadow-xl dark:border-slate-800 dark:bg-slate-950">
              <div className="text-xs font-black uppercase tracking-wider text-slate-500">Fair price guide</div>
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-emerald-50 p-4 dark:bg-emerald-950/30">
                  <div className="text-xs font-bold text-emerald-700 dark:text-emerald-300">Likely fair range</div>
                  <div className="mt-1 text-xl font-black">{formatRange(issue.realFixPrice)}</div>
                </div>
                <div className="rounded-2xl bg-rose-50 p-4 dark:bg-rose-950/30">
                  <div className="text-xs font-bold text-rose-700 dark:text-rose-300">Red-flag quote</div>
                  <div className="mt-1 text-xl font-black">{formatSgd(issue.agentTrapPrice[0])}+</div>
                </div>
              </div>
              <p className="mt-4 rounded-2xl bg-amber-50 p-4 text-sm font-semibold text-amber-900 dark:bg-amber-950/30 dark:text-amber-200">
                Potential overquote risk: {savings > 0 ? `${formatSgd(savings)}+` : "case-dependent"}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-5 px-4 py-10 lg:grid-cols-3">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
          <p className="text-xs font-black uppercase tracking-wider text-slate-500">Likely fix</p>
          <h2 className="mt-2 text-xl font-black">{issue.likelyFix}</h2>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
          <p className="text-xs font-black uppercase tracking-wider text-slate-500">Ask for proof</p>
          <ul className="mt-3 space-y-2 text-sm text-slate-700 dark:text-slate-300">
            <li>• Diagnostic scan before parts replacement</li>
            <li>• Photo/video proof of failed component</li>
            <li>• Itemised parts + labour quote</li>
            {issue.requiredTools?.map((tool) => <li key={tool}>• {tool}</li>)}
          </ul>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
          <p className="text-xs font-black uppercase tracking-wider text-slate-500">Severity</p>
          <h2 className="mt-2 text-xl font-black capitalize">{issue.severity}</h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Use this page to ask better questions. It is not a final diagnosis.</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-14">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-700 dark:text-blue-300">Candidate workshops</p>
            <h2 className="mt-2 text-2xl font-black">Shops that may handle this</h2>
          </div>
          <a href="/workshops" className="text-sm font-bold text-blue-700 hover:underline dark:text-blue-300">View all →</a>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {workshops.map((shop) => (
            <a key={shop.id} href={`/workshops/${shop.id}`} className="rounded-3xl border border-slate-200 bg-white p-5 transition hover:-translate-y-0.5 hover:border-blue-400 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-black">{shop.title}</h3>
                  <p className="mt-1 text-xs text-slate-500">{shop.area ?? shop.region} · {shop.brands?.slice(0, 3).join(" / ")}</p>
                </div>
                {shop.verified && <span className="rounded-full bg-blue-100 px-2 py-1 text-[10px] font-black text-blue-800 dark:bg-blue-950 dark:text-blue-200">Verified</span>}
              </div>
              <p className="mt-3 line-clamp-3 text-sm text-slate-600 dark:text-slate-400">{shop.blurb}</p>
              <div className="mt-4 text-sm font-bold text-emerald-700 dark:text-emerald-300">
                {shop.symptomPrices?.[issue.id] ? `From ${formatSgd(shop.symptomPrices[issue.id])}` : shop.priceFrom ? `From ${formatSgd(shop.priceFrom)}` : "Ask for quote"}
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
