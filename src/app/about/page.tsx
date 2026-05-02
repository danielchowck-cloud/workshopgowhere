export const metadata = {
  title: "About — workshopgowhere",
  description: "How workshopgowhere finds Singapore workshops for you.",
};

export default function About() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-bold tracking-tight">About</h1>
      <div className="prose prose-neutral mt-6 dark:prose-invert">
        <p>
          <strong>workshopgowhere.com</strong> is a free Singapore workshop finder. We
          aggregate pottery classes, cooking workshops, art jamming, calligraphy, woodwork,
          fitness, parent-child sessions, and more — into one searchable interface.
        </p>
        <p>
          Type what you want (e.g. <em>"pottery near tampines"</em>, <em>"weekend art for kids"</em>,{" "}
          <em>"free workshops"</em>) and we&apos;ll surface the best matches.
        </p>
        <h2>How it works</h2>
        <ul>
          <li>Listings are pulled from Eventbrite SG, Peatix, Klook, and individual studios.</li>
          <li>Each listing is auto-categorized by category, price, audience, and area.</li>
          <li>Click any card to book on the original platform — we don&apos;t take payments.</li>
        </ul>
        <h2>Free for users, sustained by ads</h2>
        <p>
          We don&apos;t charge users. The site is supported by AdSense and affiliate links from
          partner platforms when you book. If you book through a card here, the studio gets the
          full price; we get a small referral fee from the platform.
        </p>
        <h2>Submit a workshop</h2>
        <p>
          Run a workshop or class in Singapore? Email{" "}
          <a href="mailto:hello@workshopgowhere.com">hello@workshopgowhere.com</a> with the
          listing URL. Free to be listed.
        </p>
        <h2>Contact</h2>
        <p>
          <a href="mailto:hello@workshopgowhere.com">hello@workshopgowhere.com</a>
        </p>
      </div>
    </div>
  );
}
