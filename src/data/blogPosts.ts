export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readingTime: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "what-mercedes-do-i-have-singapore",
    title: "What Mercedes do I have? Singapore owner guide to E-Class, C-Class, GLE and GLC codes",
    description:
      "A plain-English guide to Mercedes model names, chassis codes and what Singapore owners need to know before choosing a workshop.",
    date: "2026-05-06",
    readingTime: "5 min read",
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
