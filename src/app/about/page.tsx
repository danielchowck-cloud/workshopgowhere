export const metadata = {
  title: "About — workshopgowhere",
  description: "How workshopgowhere helps you find the right car workshop in Singapore.",
};

export default function About() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-bold tracking-tight">About</h1>
      <div className="prose prose-neutral mt-6 dark:prose-invert">
        <p>
          <strong>workshopgowhere.com</strong> is a free Singapore directory of car repair
          workshops. Describe what&apos;s wrong with your car (engine rattling, check-engine
          light, brake squeal, aircon not cold) — we surface the right specialist near you.
        </p>
        <h2>How it works</h2>
        <ul>
          <li>Type your symptom in plain English. Our search maps it to the right specialty.</li>
          <li>We show workshops by category, area, rating, and brand specialty.</li>
          <li>Click any card → opens the workshop&apos;s contact info on Google Maps.</li>
        </ul>
        <h2>What&apos;s coming next</h2>
        <ul>
          <li><strong>AI dashboard scanner</strong>: snap a photo of your warning lights, get a likely diagnosis.</li>
          <li><strong>Engine-sound diagnostics</strong>: upload a clip, AI guesses the issue.</li>
          <li><strong>Workshop reviews + verified pricing</strong>: real signals, not paid placement.</li>
          <li><strong>Submit your workshop</strong>: $5-20/year listing for SG car workshops to be featured (more visibility, real local traffic).</li>
        </ul>
        <h2>Free for car owners</h2>
        <p>
          We don&apos;t charge users. The site is supported by paid workshop listings (annual
          fee for verified workshops). No referral commissions taken from repair quotes —
          you talk to the workshop directly.
        </p>
        <h2>Singapore only</h2>
        <p>
          For now we focus on SG. Local workshops, local context, local lah. Other markets
          come later.
        </p>
        <h2>Submit a workshop</h2>
        <p>
          Run a workshop in Singapore?{" "}
          <a href="/submit" className="font-medium text-orange-600 underline">
            Get listed
          </a>{" "}
          — free for v1, paid tier coming.
        </p>
        <h2>Contact</h2>
        <p>
          <a href="mailto:hello@workshopgowhere.com">hello@workshopgowhere.com</a>
        </p>
      </div>
    </div>
  );
}
