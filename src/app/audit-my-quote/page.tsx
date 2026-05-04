export const metadata = {
  title: "Audit my quote — workshopgowhere",
  description: "Upload a workshop repair quote, get a second opinion. See if the price and parts are fair.",
};

export default function AuditQuote() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <div className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-700 dark:bg-orange-950/50 dark:text-orange-300">
        Coming Soon
      </div>
      <h1 className="mt-4 text-3xl font-bold tracking-tight">Audit my repair quote</h1>
      <p className="mt-4 text-neutral-700 dark:text-neutral-300">
        Got a Continental car repair quote that feels too high? We&apos;ll review it.
      </p>

      <div className="mt-8 rounded-2xl border border-neutral-200 bg-neutral-50 p-6 dark:border-neutral-800 dark:bg-neutral-900">
        <h2 className="font-semibold">How it works</h2>
        <ol className="mt-3 list-decimal space-y-2 pl-6 text-sm text-neutral-700 dark:text-neutral-300">
          <li>Email us your quote (PDF or photo) at <a href="mailto:audit@workshopgowhere.com" className="font-medium text-orange-600 underline">audit@workshopgowhere.com</a></li>
          <li>Tell us your car make/model/year and the symptom</li>
          <li>We compare against community-reported prices for the same job + flag known model issues</li>
          <li>Get back: &quot;fair&quot; / &quot;high&quot; / &quot;way high&quot; verdict + suggested specialist alternatives</li>
        </ol>
      </div>

      <h2 className="mt-12 text-lg font-semibold">Launch phase — free manual review</h2>
      <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-300">
        During launch we&apos;re reviewing quotes manually (turn-around 1-2 days). Free.
      </p>

      <h2 className="mt-8 text-lg font-semibold">Later — paid second opinion ($19-29)</h2>
      <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-300">
        Eventually a flat-fee detailed audit with a written report from a master tech.
        Pays for itself if we save you $1,000+ on a quote.
      </p>

      <h2 className="mt-12 text-lg font-semibold">Your data is anonymous</h2>
      <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-300">
        Submitted quotes feed our community price benchmark — but never with your name or the
        workshop&apos;s name attached. Helps every other car owner get fair prices.
      </p>

      <p className="mt-12 text-center">
        <a
          href="mailto:audit@workshopgowhere.com?subject=Quote audit request"
          className="inline-flex rounded-2xl bg-orange-600 px-6 py-3 text-sm font-semibold text-white hover:bg-orange-700"
        >
          Email a quote →
        </a>
      </p>
    </div>
  );
}
