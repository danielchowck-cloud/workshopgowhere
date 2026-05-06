import { blogPosts } from "@/data/blogPosts";

export const metadata = {
  title: "Car repair guides Singapore — workshopgowhere blog",
  description: "Plain-English diagnostic guides for Singapore car owners before they approve workshop repairs.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <div className="bg-slate-50 px-4 py-12 text-slate-950 dark:bg-slate-950 dark:text-white">
      <div className="mx-auto max-w-4xl">
        <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-700 dark:text-blue-300">Guides</p>
        <h1 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">Car repair guides for Singapore owners</h1>
        <p className="mt-4 max-w-2xl text-slate-700 dark:text-slate-300">
          Short, diagnostic-first articles to help owners identify their car, understand common faults and avoid over-approving expensive repairs.
        </p>

        <div className="mt-8 grid gap-4">
          {blogPosts.map((post) => (
            <a key={post.slug} href={`/blog/${post.slug}`} className="rounded-3xl border border-slate-200 bg-white p-6 transition hover:-translate-y-0.5 hover:border-blue-400 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500">{post.date} · {post.readingTime}</div>
              <h2 className="mt-2 text-xl font-black text-slate-950 dark:text-white">{post.title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">{post.description}</p>
              <div className="mt-4 text-sm font-black text-blue-700 dark:text-blue-300">Read guide →</div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
