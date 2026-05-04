import type { CommonIssue } from "@/data/carModels";

export function ConsumerAlertBanner({ issue, modelLabel }: { issue: CommonIssue; modelLabel: string }) {
  const sevColor =
    issue.severity === "high"
      ? "from-red-600 to-amber-500"
      : issue.severity === "med"
      ? "from-amber-500 to-yellow-400"
      : "from-sky-500 to-blue-400";

  const fmt = (v: [number, number]) => `$${v[0].toLocaleString()}-${v[1].toLocaleString()}`;

  return (
    <div className="relative overflow-hidden rounded-2xl border border-slate-300 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-900">
      <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${sevColor}`} />
      <div className="p-5 sm:p-6">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-700 dark:text-amber-300">
          <span aria-hidden>⚠️</span>
          <span>Consumer Alert · {modelLabel}</span>
          <span
            className="ml-auto rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-bold text-amber-800 dark:bg-amber-900/40 dark:text-amber-200"
            title="Probability the 'real fix' below is the actual cause vs agent's expensive quote being legit"
          >
            {issue.trapPercentage}% match probability
          </span>
        </div>
        <h3 className="mt-2 text-base font-semibold text-slate-900 dark:text-slate-100 sm:text-lg">
          {issue.symptom}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
          <span className="font-semibold text-slate-900 dark:text-slate-100">Diagnostic Tip: </span>
          {issue.diagnosticTip}
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-3 dark:border-emerald-800 dark:bg-emerald-950/40">
            <div className="text-[10px] font-semibold uppercase tracking-wider text-emerald-700 dark:text-emerald-300">
              Real Specialist Fix
            </div>
            <div className="mt-1 text-base font-bold text-emerald-900 dark:text-emerald-100">
              {fmt(issue.realFixPrice)}
            </div>
            <div className="mt-1 text-xs text-emerald-800 dark:text-emerald-200">
              {issue.likelyFix}
            </div>
          </div>
          <div className="rounded-xl border border-rose-200 bg-rose-50 p-3 dark:border-rose-800 dark:bg-rose-950/40">
            <div className="text-[10px] font-semibold uppercase tracking-wider text-rose-700 dark:text-rose-300">
              Typical Agent Quote (the trap)
            </div>
            <div className="mt-1 text-base font-bold text-rose-900 dark:text-rose-100 line-through decoration-rose-500/60">
              {fmt(issue.agentTrapPrice)}
            </div>
            <div className="mt-1 text-xs text-rose-800 dark:text-rose-200">
              Avoid unless leak/damage proven
            </div>
          </div>
        </div>
        {issue.requiredTools && issue.requiredTools.length > 0 && (
          <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
            <span className="font-semibold uppercase tracking-wider">Required tools:</span>
            {issue.requiredTools.map((t) => (
              <span
                key={t}
                className="rounded-full border border-blue-200 bg-blue-50 px-2 py-0.5 text-blue-800 dark:border-blue-800 dark:bg-blue-950/40 dark:text-blue-200"
              >
                {t}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
