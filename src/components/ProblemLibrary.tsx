"use client";

import { useMemo, useState } from "react";

type ProblemLink = {
  slug: string;
  brand: string;
  modelLabel: string;
  symptom: string;
};

type Props = {
  problems: ProblemLink[];
};

const buttonBase =
  "rounded-full border px-3 py-1.5 text-xs font-bold transition";

export function ProblemLibrary({ problems }: Props) {
  const [activeBrand, setActiveBrand] = useState<string>("All");
  const [activeModel, setActiveModel] = useState<string>("All");

  const brands = useMemo(
    () => ["All", ...Array.from(new Set(problems.map((p) => p.brand))).sort()],
    [problems],
  );

  const models = useMemo(() => {
    const scoped = activeBrand === "All" ? problems : problems.filter((p) => p.brand === activeBrand);
    return ["All", ...Array.from(new Set(scoped.map((p) => p.modelLabel))).sort()];
  }, [activeBrand, problems]);

  const visibleProblems = useMemo(() => {
    return problems.filter((p) => {
      const brandMatch = activeBrand === "All" || p.brand === activeBrand;
      const modelMatch = activeModel === "All" || p.modelLabel === activeModel;
      return brandMatch && modelMatch;
    });
  }, [activeBrand, activeModel, problems]);

  function chooseBrand(brand: string) {
    setActiveBrand(brand);
    setActiveModel("All");
  }

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900 sm:p-8">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-700 dark:text-blue-300">Full diagnostic library</p>
      <h2 className="mt-2 text-xl font-black tracking-tight sm:text-2xl">Every Continental car problem we cover</h2>
      <p className="mt-2 max-w-3xl text-sm text-slate-600 dark:text-slate-400">
        All {problems.length} symptom pages — filter by brand or model, then open the root cause, fair price and Singapore workshop matches.
      </p>

      <div className="mt-6 space-y-4">
        <div>
          <div className="mb-2 text-[11px] font-black uppercase tracking-wider text-slate-500">Brand</div>
          <div className="flex flex-wrap gap-2">
            {brands.map((brand) => (
              <button
                key={brand}
                type="button"
                onClick={() => chooseBrand(brand)}
                className={`${buttonBase} ${
                  activeBrand === brand
                    ? "border-blue-600 bg-blue-600 text-white shadow-sm shadow-blue-900/20"
                    : "border-slate-200 bg-slate-50 text-slate-700 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-800 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-300 dark:hover:border-blue-600 dark:hover:bg-blue-950/40 dark:hover:text-blue-200"
                }`}
              >
                {brand}
              </button>
            ))}
          </div>
        </div>

        <div>
          <div className="mb-2 text-[11px] font-black uppercase tracking-wider text-slate-500">Model</div>
          <div className="flex flex-wrap gap-2">
            {models.map((model) => (
              <button
                key={model}
                type="button"
                onClick={() => setActiveModel(model)}
                className={`${buttonBase} ${
                  activeModel === model
                    ? "border-slate-950 bg-slate-950 text-white dark:border-white dark:bg-white dark:text-slate-950"
                    : "border-slate-200 bg-slate-50 text-slate-700 hover:border-slate-400 hover:bg-white dark:border-slate-700 dark:bg-slate-950 dark:text-slate-300 dark:hover:border-slate-500"
                }`}
              >
                {model === "All" ? "All models" : model}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-5 text-sm font-semibold text-slate-600 dark:text-slate-400">
        Showing {visibleProblems.length} of {problems.length} problems
      </div>

      <ul className="mt-4 grid gap-x-4 gap-y-2 text-sm sm:grid-cols-2 lg:grid-cols-3">
        {visibleProblems.map((p) => (
          <li key={p.slug}>
            <a
              href={`/car-problems/${p.slug}`}
              className="block rounded-md px-2 py-1 text-slate-700 transition hover:bg-blue-50 hover:text-blue-800 dark:text-slate-300 dark:hover:bg-blue-950/40 dark:hover:text-blue-200"
            >
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                {p.brand} {p.modelLabel}
              </span>
              <span className="block leading-5">{p.symptom}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
