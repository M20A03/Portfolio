import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProjectBySlug, projectData } from "@/data/projectData";
import { CaseStudyContent } from "@/components/case-study-content";

const siteUrl = "https://www.mayankraj.me";

interface DynamicCaseStudyProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projectData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: DynamicCaseStudyProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  const title = `${project.title} | Case Study`;
  const description = project.description;
  const canonicalUrl = `${siteUrl}/case-study/${project.slug}`;
  const ogImage = project.image ? `${siteUrl}${project.image}` : `${siteUrl}/images/portfolio-og.png`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${project.title} - Mayank Raj Gupta Case Study`,
      description,
      url: canonicalUrl,
      type: "article",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} - Mayank Raj Gupta`,
      description,
      images: [ogImage],
    },
  };
}

export default async function CaseStudyPage({ params }: DynamicCaseStudyProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: project.title,
    description: project.description,
    applicationCategory: project.category === "Tools" ? "EducationalApplication" : "DeveloperApplication",
    operatingSystem: "Web",
    author: {
      "@type": "Person",
      name: "Mayank Raj Gupta",
      url: siteUrl,
    },
    url: `${siteUrl}/case-study/${project.slug}`,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Projects",
        item: `${siteUrl}/#projects`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: project.title,
        item: `${siteUrl}/case-study/${project.slug}`,
      },
    ],
  };

  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([projectSchema, breadcrumbSchema]) }}
      />
      <CaseStudyContent project={project} />
    </main>
  );
}
