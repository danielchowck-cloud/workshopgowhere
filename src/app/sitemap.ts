import type { MetadataRoute } from "next";

export const dynamic = "force-static";
import { listings } from "@/data/listings";
import { blogPosts } from "@/data/blogPosts";
import { getAllIssues, getIssueSeoSlug } from "@/lib/directory";

const BASE_URL = "https://workshopgowhere.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE_URL}/workshops`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/audit-my-quote`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/submit`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE_URL}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
  ];

  const brandHubSlugs = [
    "mercedes-workshop-singapore",
    "bmw-workshop-singapore",
    "porsche-workshop-singapore",
    "audi-workshop-singapore",
    "volvo-workshop-singapore",
    "tesla-workshop-singapore",
    "byd-workshop-singapore",
  ];
  const brandHubRoutes: MetadataRoute.Sitemap = brandHubSlugs.map((slug) => ({
    url: `${BASE_URL}/${slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  const problemRoutes: MetadataRoute.Sitemap = getAllIssues().map((issue) => ({
    url: `${BASE_URL}/car-problems/${getIssueSeoSlug(issue)}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  const workshopRoutes: MetadataRoute.Sitemap = listings.map((shop) => ({
    url: `${BASE_URL}/workshops/${shop.id}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: shop.verified ? 0.7 : 0.5,
  }));

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  return [...staticRoutes, ...brandHubRoutes, ...problemRoutes, ...workshopRoutes, ...blogRoutes];
}
