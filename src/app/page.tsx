import { SearchAndGrid } from "@/components/SearchAndGrid";

export default function Home() {
  return (
    <div className="px-4 pb-16 pt-10">
      <section className="mx-auto max-w-3xl text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">
          Car got problem? Workshop go where?
        </h1>
        <p className="mt-3 text-base text-neutral-600 dark:text-neutral-400 sm:text-lg">
          Describe what&apos;s wrong with your car. We&apos;ll show you the right specialist
          workshop in Singapore — engine, brakes, aircon, electrical, body, EV.
        </p>
        <p className="mt-2 text-sm text-neutral-500">
          Free. No login. Independent reviews. Local SG only.
        </p>
      </section>
      <section className="mt-8">
        <SearchAndGrid />
      </section>
      <section className="mx-auto mt-16 max-w-3xl rounded-2xl border border-neutral-200 bg-neutral-50 p-6 dark:border-neutral-800 dark:bg-neutral-900">
        <h2 className="text-lg font-semibold">Coming soon: AI Diagnostic</h2>
        <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
          Snap a photo of your dashboard warning lights or upload a clip of your engine sound.
          Our AI tells you what&apos;s likely wrong and which workshop near you can fix it.
        </p>
        <p className="mt-3 text-xs text-neutral-500">In development.</p>
      </section>
    </div>
  );
}
