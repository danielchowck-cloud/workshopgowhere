import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogPosts, getBlogPost } from "@/data/blogPosts";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} — workshopgowhere`,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://workshopgowhere.com/blog/${post.slug}`,
      type: "article",
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Organization", name: "workshopgowhere" },
    publisher: { "@type": "Organization", name: "workshopgowhere" },
    mainEntityOfPage: `https://workshopgowhere.com/blog/${post.slug}`,
  };

  return (
    <article className="bg-slate-50 px-4 py-12 text-slate-950 dark:bg-slate-950 dark:text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <div className="mx-auto max-w-3xl">
        <a href="/blog" className="text-sm font-bold text-blue-700 hover:underline dark:text-blue-300">← Guides</a>
        <p className="mt-6 text-xs font-black uppercase tracking-[0.2em] text-blue-700 dark:text-blue-300">{post.category}</p>
        <h1 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">{post.title}</h1>
        <p className="mt-3 text-sm font-bold text-slate-500">{post.date} · {post.readingTime}</p>
        <p className="mt-6 text-lg leading-8 text-slate-700 dark:text-slate-300">{post.intro}</p>

        <div className="mt-8 rounded-3xl border border-blue-200 bg-blue-50 p-5 dark:border-blue-900 dark:bg-blue-950/30">
          <h2 className="text-lg font-black">Owner takeaway</h2>
          <p className="mt-2 leading-7 text-slate-700 dark:text-slate-300">
            Do not approve a major repair from a vague symptom alone. Ask what test confirmed the failed part, then compare itemised quotes.
          </p>
        </div>

        <div className="mt-10 space-y-9">
          {post.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-2xl font-black tracking-tight">{section.heading}</h2>
              <p className="mt-3 leading-7 text-slate-700 dark:text-slate-300">{section.body}</p>
            </section>
          ))}
        </div>

        <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
          <h2 className="text-lg font-black">Next useful links</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {post.links.map((link) => (
              <a key={link.href} href={link.href} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm font-bold hover:border-blue-400 dark:border-slate-800 dark:bg-slate-950">
                {link.label} →
              </a>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
