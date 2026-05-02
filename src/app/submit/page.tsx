export const metadata = {
  title: "Submit a workshop — workshopgowhere",
  description: "Run a workshop in Singapore? Get listed for free.",
};

export default function Submit() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-bold tracking-tight">Submit a workshop</h1>
      <p className="mt-4 text-neutral-600 dark:text-neutral-400">
        Email <a href="mailto:hello@workshopgowhere.com" className="font-medium text-orange-600 underline">hello@workshopgowhere.com</a> with:
      </p>
      <ul className="mt-4 list-disc space-y-2 pl-6 text-neutral-700 dark:text-neutral-300">
        <li>Workshop name + short blurb (1-2 sentences)</li>
        <li>Booking URL (Eventbrite, Peatix, Klook, or your own site)</li>
        <li>Price, duration, location (area)</li>
        <li>Category (pottery, art, cooking, etc.)</li>
        <li>Who it&apos;s for (adults, kids, couples, parent-child, all-ages)</li>
      </ul>
      <p className="mt-6 text-sm text-neutral-600 dark:text-neutral-400">
        Free to be listed. We&apos;ll add it within 1-2 days.
      </p>
    </div>
  );
}
