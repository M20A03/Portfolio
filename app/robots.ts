import type { MetadataRoute } from "next";

const siteUrl = "https://www.mayankraj.me";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      // Brave Search Engine Crawler
      {
        userAgent: "Bravebot",
        allow: "/",
      },
      // OpenAI / ChatGPT Search Crawler
      {
        userAgent: "GPTBot",
        allow: "/",
      },
      {
        userAgent: "ChatGPT-User",
        allow: "/",
      },
      // Anthropic / Claude Web Crawler
      {
        userAgent: "ClaudeBot",
        allow: "/",
      },
      {
        userAgent: "anthropic-ai",
        allow: "/",
      },
      // Google & Google Gemini AI Crawler
      {
        userAgent: "Googlebot",
        allow: "/",
      },
      {
        userAgent: "Google-Extended",
        allow: "/",
      },
      // Perplexity AI Search Crawler
      {
        userAgent: "PerplexityBot",
        allow: "/",
      },
      // Bing / Microsoft Copilot
      {
        userAgent: "Bingbot",
        allow: "/",
      },
      // Apple / Siri Intelligence
      {
        userAgent: "Applebot",
        allow: "/",
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
