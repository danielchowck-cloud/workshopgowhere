import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const BASE_URL = "https://workshopgowhere.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/issues/"],
      },
      {
        userAgent: ["Googlebot", "Bingbot", "GPTBot", "ChatGPT-User", "PerplexityBot", "ClaudeBot", "anthropic-ai"],
        allow: "/",
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
