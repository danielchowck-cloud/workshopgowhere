export const metadata = {
  title: "About — workshopgowhere",
  description: "Why we built workshopgowhere — the Continental car specialist matchmaker for Singapore.",
};

export default function About() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-bold tracking-tight">About</h1>
      <div className="prose prose-neutral mt-6 dark:prose-invert">
        <p>
          <strong>workshopgowhere.com</strong> exists because the founder paid <em>thousands</em>{" "}
          for a problem that should have cost a few hundred. The agent quoted a strut
          replacement; an independent specialist diagnosed it as a $200 valve block.
        </p>
        <p>
          That information asymmetry — the gap between what the workshop knows and what
          the owner knows — is the problem we&apos;re solving.
        </p>

        <h2>Phase 1 — Continental & EV specialists</h2>
        <p>
          We&apos;re launching with Mercedes, BMW, Audi, VW, Volvo, Porsche, and Tesla / EV
          owners. Why this niche? These cars have:
        </p>
        <ul>
          <li><strong>The biggest information gap</strong> — proprietary diagnostics + brand-specific known issues</li>
          <li><strong>The highest repair bills</strong> — and the biggest gap between agent and specialist pricing (often 40-60%)</li>
          <li><strong>Active independent specialist communities in SG</strong> — Sin Ming, Toh Guan, Ubi, Tagore</li>
        </ul>

        <h2>Specialist Score</h2>
        <p>
          Workshops are ranked by <strong>technical competence</strong>, not just stars. We check:
        </p>
        <ul>
          <li><strong>Brand-specific tooling</strong>: ISTA (BMW), Star Diagnostic / XENTRY (Mercedes), ODIS / VCDS (VW/Audi), PIWIS (Porsche), VIDA (Volvo), Tesla Toolbox</li>
          <li><strong>Component mastery</strong>: which specific repairs they&apos;re known for (gearbox rebuild, mechatronics, air suspension, etc.)</li>
          <li><strong>Parts tier</strong>: OEM / OEM+aftermarket / aftermarket-only — owner choice</li>
          <li><strong>&quot;Agent-Alternative&quot; tier</strong>: shops that match dealership quality at independent prices using parts like Lemförder, Bilstein, ATE</li>
        </ul>

        <h2>What we&apos;re NOT</h2>
        <ul>
          <li>We don&apos;t take a cut of your repair bill. You talk to the workshop directly.</li>
          <li>We don&apos;t hide negative reviews — specialists who don&apos;t deliver get demoted.</li>
          <li>We don&apos;t recommend friends-and-family. We audit.</li>
        </ul>

        <h2>Common Fix Database</h2>
        <p>
          Many Continental issues have well-known &quot;common fixes&quot;. The W213 air suspension
          dropping is almost always a $200-350 valve block, not a $3,000 strut.
          The N20 timing chain rattle on cold start is a known issue with a known fix.
          We document these and surface them when they match your symptom.
        </p>

        <h2>Quote auditor (coming)</h2>
        <p>
          Got a quote that feels too high?{" "}
          <a href="/audit-my-quote" className="font-medium text-orange-600 underline">
            Send it to us
          </a>{" "}
          — we&apos;ll compare against community-reported prices and known model issues.
        </p>

        <h2>For workshops</h2>
        <p>
          We&apos;re building the platform with workshops, not against them. Verified specialists get
          a badge, lead generation, and tools to communicate fixed pricing. Cowboys who quote
          $3k for a $300 fix don&apos;t belong here.{" "}
          <a href="/submit" className="font-medium text-orange-600 underline">
            Get listed
          </a>
          .
        </p>

        <h2>Contact</h2>
        <p>
          <a href="mailto:hello@workshopgowhere.com">hello@workshopgowhere.com</a>
        </p>
      </div>
    </div>
  );
}
