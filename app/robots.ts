import type { MetadataRoute } from "next";

const siteUrl = "https://www.mayankraj.me";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      // OpenAI / ChatGPT Search & Training
      {
        userAgent: "GPTBot",
        allow: "/",
      },
      {
        userAgent: "ChatGPT-User",
        allow: "/",
      },
      {
        userAgent: "OAI-SearchBot",
        allow: "/",
      },
      // Anthropic / Claude
      {
        userAgent: "ClaudeBot",
        allow: "/",
      },
      {
        userAgent: "anthropic-ai",
        allow: "/",
      },
      {
        userAgent: "Claude-Web",
        allow: "/",
      },
      // Google Search, Gemini & Google AI Overviews
      {
        userAgent: "Googlebot",
        allow: "/",
      },
      {
        userAgent: "Google-Extended",
        allow: "/",
      },
      // Perplexity AI Search Engine
      {
        userAgent: "PerplexityBot",
        allow: "/",
      },
      // Microsoft Bing & Copilot
      {
        userAgent: "Bingbot",
        allow: "/",
      },
      {
        userAgent: "msnbot",
        allow: "/",
      },
      // Apple Intelligence & Siri Knowledge
      {
        userAgent: "Applebot",
        allow: "/",
      },
      {
        userAgent: "Applebot-Extended",
        allow: "/",
      },
      // DeepSeek AI Crawler
      {
        userAgent: "DeepSeekBot",
        allow: "/",
      },
      // Meta AI & Llama Web Ingestion
      {
        userAgent: "Meta-ExternalAgent",
        allow: "/",
      },
      {
        userAgent: "FacebookBot",
        allow: "/",
      },
      // Cohere AI
      {
        userAgent: "cohere-ai",
        allow: "/",
      },
      // Common Crawl (Foundational LLM Training Datasets)
      {
        userAgent: "CCBot",
        allow: "/",
      },
      // Diffbot Knowledge Graph Extractor
      {
        userAgent: "Diffbot",
        allow: "/",
      },
      // Brave Search Engine
      {
        userAgent: "Bravebot",
        allow: "/",
      },
      // DuckDuckGo Search Engine
      {
        userAgent: "DuckDuckBot",
        allow: "/",
      },
      // Social & Developer Graph Crawlers
      {
        userAgent: "Twitterbot",
        allow: "/",
      },
      {
        userAgent: "LinkedInBot",
        allow: "/",
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
