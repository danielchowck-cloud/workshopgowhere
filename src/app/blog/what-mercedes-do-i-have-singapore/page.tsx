import type { Metadata } from "next";
import { getBlogPost } from "@/data/blogPosts";

const post = getBlogPost("what-mercedes-do-i-have-singapore");

export const metadata: Metadata = {
  title: "What Mercedes do I have? Singapore owner guide — workshopgowhere",
  description:
    "Identify your Mercedes by model name, chassis code and year range, then understand what that means for common repairs and workshop choice in Singapore.",
  alternates: { canonical: "/blog/what-mercedes-do-i-have-singapore" },
  openGraph: {
    title: "What Mercedes do I have? Singapore owner guide",
    description:
      "A plain-English guide to Mercedes E-Class, C-Class, GLE and GLC names, chassis codes and repair implications for Singapore owners.",
    url: "https://workshopgowhere.com/blog/what-mercedes-do-i-have-singapore",
    type: "article",
  },
};

const modelRows = [
  ["E-Class", "W211", "2002–2009", "Older E-Class. Watch for air suspension, SBC brake warnings and age-related electrical issues."],
  ["E-Class", "W212", "2009–2016", "Common Singapore used-car E-Class. Watch for 7G-Tronic jerk, Airmatic faults and engine knocking."],
  ["E-Class", "W213", "2016–2023", "Very common in Singapore. Watch for Airmatic rear sinking, 9G-Tronic jerks, weak aircon and MBUX glitches."],
  ["C-Class", "W204", "2007–2014", "Older C-Class. Check suspension wear, engine oil leaks and gearbox service history."],
  ["C-Class", "W205", "2014–2021", "Common C-Class. Watch for M274 vibration, COMAND lag and rear suspension clunks."],
  ["GLE", "W166 / C292", "2015–2019", "SUV platform. Watch for air suspension sagging, rear differential whine and cooling issues."],
  ["GLC", "X253", "2015–2022", "Common compact SUV. Watch for 9G-Tronic hesitation, Airmatic faults and engine mount vibration."],
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: post?.title,
  description: post?.description,
  datePublished: post?.date,
  dateModified: post?.date,
  author: { "@type": "Organization", name: "workshopgowhere" },
  publisher: { "@type": "Organization", name: "workshopgowhere" },
  mainEntityOfPage: "https://workshopgowhere.com/blog/what-mercedes-do-i-have-singapore",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I know what Mercedes model I have?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Check your log card, VIN decoder, registration year and body style. The public name is usually E-Class, C-Class, GLE or GLC, while the chassis code is W213, W212, W205, W166 or X253.",
      },
    },
    {
      "@type": "Question",
      name: "Why does the Mercedes chassis code matter for repairs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The chassis code tells a workshop which platform, electronics, gearbox and known failure patterns your car uses. A W213 E-Class and W212 E-Class can have different common faults and diagnostic paths.",
      },
    },
  ],
};

export default function MercedesModelGuidePage() {
  return (
    <article className="bg-slate-50 px-4 py-12 text-slate-950 dark:bg-slate-950 dark:text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <div className="mx-auto max-w-3xl">
        <a href="/blog" className="text-sm font-bold text-blue-700 hover:underline dark:text-blue-300">← Guides</a>
        <p className="mt-6 text-xs font-black uppercase tracking-[0.2em] text-blue-700 dark:text-blue-300">Mercedes owner guide</p>
        <h1 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">What Mercedes do I have?</h1>
        <p className="mt-4 text-lg leading-8 text-slate-700 dark:text-slate-300">
          Most owners know the badge — E-Class, C-Class, GLE or GLC. Workshops usually need the chassis code too: W213, W212, W205, W166 or X253. That code helps identify the correct diagnostic tools, common faults and likely repair prices.
        </p>

        <div className="mt-8 rounded-3xl border border-blue-200 bg-blue-50 p-5 dark:border-blue-900 dark:bg-blue-950/30">
          <h2 className="text-lg font-black">Fast answer</h2>
          <p className="mt-2 leading-7 text-slate-700 dark:text-slate-300">
            To identify your Mercedes, check the model name, registration year and chassis code. Example: a 2016–2023 E-Class is usually W213; a 2009–2016 E-Class is usually W212; a 2014–2021 C-Class is usually W205.
          </p>
        </div>

        <h2 className="mt-10 text-2xl font-black">Common Mercedes models in Singapore</h2>
        <div className="mt-4 overflow-hidden rounded-3xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
          {modelRows.map(([name, code, years, note]) => (
            <div key={`${name}-${code}`} className="grid gap-2 border-b border-slate-200 p-4 last:border-b-0 dark:border-slate-800 sm:grid-cols-[120px_90px_110px_1fr]">
              <div className="font-black">{name}</div>
              <div className="font-mono text-sm font-bold text-blue-700 dark:text-blue-300">{code}</div>
              <div className="text-sm text-slate-500">{years}</div>
              <div className="text-sm leading-6 text-slate-700 dark:text-slate-300">{note}</div>
            </div>
          ))}
        </div>

        <h2 className="mt-10 text-2xl font-black">Where to find the chassis code</h2>
        <ol className="mt-4 space-y-3 text-slate-700 dark:text-slate-300">
          <li><strong>1. Registration year:</strong> Match the year range above first. This is usually enough for E-Class and C-Class owners.</li>
          <li><strong>2. VIN decoder:</strong> Use your VIN with a Mercedes VIN decoder to confirm the platform and engine.</li>
          <li><strong>3. Workshop scan:</strong> XENTRY diagnostics can confirm the exact platform, engine and fault codes.</li>
          <li><strong>4. Body shape:</strong> Sedan, coupe, SUV and wagon variants can carry different codes even when the badge sounds similar.</li>
        </ol>

        <h2 className="mt-10 text-2xl font-black">Why this matters before going workshop</h2>
        <p className="mt-4 leading-7 text-slate-700 dark:text-slate-300">
          Mercedes repairs are platform-specific. A rear-sinking W213 E-Class may be a valve block leak before it is a full air strut replacement. A jerky W212 gearbox may need a 7G-Tronic diagnosis, while a W213 uses a different 9G-Tronic path. If the workshop does not ask which chassis you have, ask them what scan or proof they will use before quoting.
        </p>

        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          <a href="/car-problems/mercedes-e-class-air-suspension-drops-overnight" className="rounded-2xl border border-slate-200 bg-white p-4 font-bold hover:border-blue-400 dark:border-slate-800 dark:bg-slate-900">W213 E-Class rear sinks overnight →</a>
          <a href="/car-problems/mercedes-e-class-gearbox-jerking-rough-shifting-at-low-speed" className="rounded-2xl border border-slate-200 bg-white p-4 font-bold hover:border-blue-400 dark:border-slate-800 dark:bg-slate-900">W213 gearbox jerking →</a>
          <a href="/workshops" className="rounded-2xl border border-slate-200 bg-white p-4 font-bold hover:border-blue-400 dark:border-slate-800 dark:bg-slate-900">Find Mercedes workshops →</a>
          <a href="/audit-my-quote" className="rounded-2xl border border-slate-200 bg-white p-4 font-bold hover:border-blue-400 dark:border-slate-800 dark:bg-slate-900">Audit a repair quote →</a>
        </div>
      </div>
    </article>
  );
}
