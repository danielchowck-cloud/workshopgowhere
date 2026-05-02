export const metadata = {
  title: "List your workshop — workshopgowhere",
  description: "Continental & EV specialist in Singapore? Get verified-listed for free during launch.",
};

export default function Submit() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-bold tracking-tight">List your workshop</h1>
      <p className="mt-4 text-neutral-700 dark:text-neutral-300">
        Continental car specialist in SG (Mercedes / BMW / Audi / VW / Porsche / Volvo) or EV
        specialist? We want you on the platform.
      </p>

      <div className="mt-8 rounded-2xl border border-orange-200 bg-orange-50 p-6 dark:border-orange-900 dark:bg-orange-950/30">
        <h2 className="text-base font-semibold text-orange-900 dark:text-orange-200">
          Free during launch (Phase 1)
        </h2>
        <p className="mt-2 text-sm text-orange-800 dark:text-orange-300">
          We&apos;re building the verified-specialist directory. Listing is free during launch.
          Paid tier comes later (and only for premium placement / lead-gen tools).
        </p>
      </div>

      <h2 className="mt-10 text-lg font-semibold">What we&apos;ll check (Verified Specialist badge)</h2>
      <ul className="mt-3 list-disc space-y-2 pl-6 text-neutral-700 dark:text-neutral-300">
        <li><strong>Diagnostic tooling</strong>: ISTA, Star Diagnostic / XENTRY, ODIS, VCDS, PIWIS, VIDA, Tesla Toolbox, etc. Photo proof preferred.</li>
        <li><strong>Brand-certified technicians</strong>: factory training certificates / previous dealership experience</li>
        <li><strong>OEM parts inventory or supply chain</strong>: Lemförder, Bilstein, ATE, Pierburg, INA, etc.</li>
        <li><strong>Itemized fixed-price menu</strong>: for the top 5 jobs you do (helps owners compare apples to apples)</li>
        <li><strong>Transparency pledge</strong>: no hidden fees, written quote before work begins</li>
      </ul>

      <h2 className="mt-10 text-lg font-semibold">Email the following</h2>
      <ol className="mt-3 list-decimal space-y-2 pl-6 text-neutral-700 dark:text-neutral-300">
        <li>Workshop name, address, phone, hours</li>
        <li>Brand specialties (Mercedes, BMW, Audi, VW, Porsche, Volvo, Tesla, etc.)</li>
        <li>Top 5 jobs you&apos;re known for (e.g., &quot;BMW VANOS solenoid replacement&quot;)</li>
        <li>Diagnostic tools owned (with proof if possible)</li>
        <li>Parts tier you typically use (OEM / OEM+aftermarket / aftermarket)</li>
        <li>Approximate starting price for your top 5 jobs</li>
        <li>Google Maps Business listing URL (if any)</li>
      </ol>

      <p className="mt-8 text-neutral-700 dark:text-neutral-300">
        Email{" "}
        <a href="mailto:partners@workshopgowhere.com" className="font-medium text-orange-600 underline">
          partners@workshopgowhere.com
        </a>
      </p>

      <h2 className="mt-12 text-lg font-semibold">Future: paid tier</h2>
      <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400">
        We plan a paid tier at $5-20/year per workshop for verified-listing badge,
        and a separate $10-20 lead-fee per qualified booking. No decisions yet — focused on
        growing user traffic and verified-specialist count first.
      </p>
    </div>
  );
}
