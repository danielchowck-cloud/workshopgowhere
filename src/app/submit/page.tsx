export const metadata = {
  title: "List your workshop — workshopgowhere",
  description: "Get your Singapore car workshop listed on workshopgowhere.com",
};

export default function Submit() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-bold tracking-tight">List your workshop</h1>
      <p className="mt-4 text-neutral-700 dark:text-neutral-300">
        Run a car workshop in Singapore? Get listed on workshopgowhere.com so SG car
        owners with the right problem can find you.
      </p>

      <div className="mt-8 rounded-2xl border border-orange-200 bg-orange-50 p-6 dark:border-orange-900 dark:bg-orange-950/30">
        <h2 className="text-base font-semibold text-orange-900 dark:text-orange-200">v1 — free listing</h2>
        <p className="mt-2 text-sm text-orange-800 dark:text-orange-300">
          During launch, listing is free. Email us your workshop details. We&apos;ll add it within 1-2 days.
        </p>
      </div>

      <h2 className="mt-10 text-lg font-semibold">What we need</h2>
      <ul className="mt-4 list-disc space-y-2 pl-6 text-neutral-700 dark:text-neutral-300">
        <li>Workshop name + short blurb (1-2 sentences)</li>
        <li>Address, phone, opening hours</li>
        <li>Specialties: engine, transmission, brakes, tyres, aircon, electrical, body, diagnostics, EV, diesel, etc.</li>
        <li>Brand expertise (Toyota, BMW, Mercedes, Tesla, etc.) — if any</li>
        <li>Approx starting price for typical service ($)</li>
        <li>Google Maps link (if you have a Business profile)</li>
      </ul>

      <p className="mt-8 text-neutral-700 dark:text-neutral-300">
        Email{" "}
        <a href="mailto:hello@workshopgowhere.com" className="font-medium text-orange-600 underline">
          hello@workshopgowhere.com
        </a>{" "}
        with the above details.
      </p>

      <h2 className="mt-12 text-lg font-semibold">Future: paid tier</h2>
      <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400">
        We&apos;re planning a paid tier ($5-20/year per workshop) for: featured placement, photo
        gallery, verified reviews badge, direct enquiry form, monthly traffic stats. No
        decisions yet — focused on growing user traffic first.
      </p>
    </div>
  );
}
