import type { Metadata } from "next";
import { PortfolioContainer } from "@/components/portfolio-container";

const siteUrl = "https://www.mayankraj.me";

export const metadata: Metadata = {
  title: "Mayank Raj Gupta | Full Stack Developer Portfolio",
  description:
    "Official portfolio of Mayank Raj Gupta, Full Stack Developer and AntiGravity AI Specialist. Explore projects, skills, resume, certifications, and contact details.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    url: siteUrl,
    title: "Mayank Raj Gupta | Full Stack Developer Portfolio",
    description:
      "Official portfolio of Mayank Raj Gupta featuring projects, resume, certifications, and AntiGravity AI developer skills.",
    type: "website",
    images: [
      {
        url: `${siteUrl}/images/portfolio-og.png`,
        width: 1200,
        height: 630,
        alt: "Mayank Raj Gupta Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mayank Raj Gupta | Full Stack Developer Portfolio",
    description: "Full-stack projects, case studies, AntiGravity AI workflow, and contact details.",
    images: [`${siteUrl}/images/portfolio-og.png`],
  },
};

export default function PortfolioPage() {
  return <PortfolioContainer />;
}
