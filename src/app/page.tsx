import { SearchAndGrid } from "@/components/SearchAndGrid";

export default function Home() {
  return (
    <div className="px-4 pb-16 pt-10">
      <section className="mx-auto max-w-3xl text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">
          What workshop you want to do, lah?
        </h1>
        <p className="mt-3 text-base text-neutral-600 dark:text-neutral-400 sm:text-lg">
          Search Singapore workshops, classes, and one-off events. Pottery, cooking, art,
          fitness, and more.
        </p>
      </section>
      <section className="mt-8">
        <SearchAndGrid />
      </section>
    </div>
  );
}
