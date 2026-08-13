import type { MetadataRoute } from "next";
import { projectData } from "@/data/projectData";

const siteUrl = "https://www.mayankraj.me";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${siteUrl}/`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${siteUrl}/resume`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  const caseStudyRoutes: MetadataRoute.Sitemap = projectData.map((project) => ({
    url: `${siteUrl}/case-study/${project.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...caseStudyRoutes];
}
