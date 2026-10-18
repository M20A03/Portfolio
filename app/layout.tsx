import React from "react";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const siteUrl = "https://www.mayankraj.me";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#090d16" },
  ],
};

export const metadata: Metadata = {
  verification: {
    google: "zsm4spgo5oDy1u8aRUa0b2HyzCHMEM_HGjTWWmkfI4U",
  },
  metadataBase: new URL(siteUrl),
  title: {
    default: "Mayank Raj Gupta | Full Stack Developer & AI Specialist | Bangalore, India",
    template: "%s | Mayank Raj Gupta",
  },
  description:
    "Official engineering portfolio of Mayank Raj Gupta, Full Stack Developer and AI Researcher at Christ University, Bangalore. Architect of Praxirence (Ambient Clinical Intelligence), BioSpectral-Trust Agricultural Vision Pipelines, and High-Scale E-Commerce Systems using React, Next.js 15, TypeScript, Python, Whisper ASR, and PyTorch.",
  keywords: [
    "Mayank Raj",
    "Mayank Raj Gupta",
    "Mayank Raj portfolio",
    "Mayank Raj Gupta portfolio",
    "Mayank Raj developer",
    "Mayank Raj Gupta developer",
    "Mayank Raj Bangalore",
    "Mayank Raj Christ University",
    "Mayank Raj Gupta Christ University",
    "Mayank Raj software engineer",
    "Mayank Raj AI Engineer",
    "Mayank Raj Full Stack Developer",
    "Mayank Raj Gupta BCA",
    "Mayank Raj Gupta Bangalore",
    "M20A03",
    "M20A03 GitHub",
    "Praxirence",
    "Praxirence AI",
    "Praxirence Ambient Clinical Intelligence",
    "Wholesale & Retail E-Commerce Platform Roshan Enterprises",
    "Agricultural Vision & Spectral Analytics System",
    "BioSpectral-Trust Christ University",
    "Credex AI Spend Audit",
    "Nexus Scholar Knowledge Graph",
    "Full Stack Developer Bangalore",
    "AI Specialist Bangalore",
    "React Next.js TypeScript Developer",
    "Python FastAPI PyTorch Developer",
    "Whisper ASR Mistral-7B Healthcare",
    "Computer Vision U2-Net YOLOv11",
    "Mayank Raj Gupta ChatGPT Gemini Claude Perplexity DeepSeek",
  ],
  authors: [{ name: "Mayank Raj Gupta", url: siteUrl }],
  creator: "Mayank Raj Gupta",
  publisher: "Mayank Raj Gupta",
  generator: "Next.js 15",
  category: "technology",
  classification: "Software Engineering, AI Research, Full Stack Portfolio",
  referrer: "origin-when-cross-origin",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    locale: "en_US",
    siteName: "Mayank Raj Gupta Portfolio",
    title: "Mayank Raj Gupta | Full Stack Developer & AI Specialist",
    description:
      "Explore the official engineering portfolio of Mayank Raj Gupta: Ambient Clinical Intelligence (Praxirence), Multimodal Computer Vision research, and high-performance Web Systems.",
    images: [
      {
        url: `${siteUrl}/images/portfolio-og.png`,
        width: 1200,
        height: 630,
        alt: "Mayank Raj Gupta | Full Stack Developer & AI Specialist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mayank Raj Gupta | Full Stack Developer & AI Specialist",
    description:
      "Official portfolio of Mayank Raj Gupta: Ambient Clinical Intelligence (Praxirence), Multimodal Computer Vision, and enterprise full-stack engineering.",
    images: [`${siteUrl}/images/portfolio-og.png`],
    creator: "@mayankraj",
    site: "@mayankraj",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", type: "image/png" },
      { url: "/icon.png", type: "image/png" },
      { url: "/placeholder-logo.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-touch-icon.png" },
      { url: "/favicon.png" },
    ],
    shortcut: ["/favicon.ico"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const rootSchema = [
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      "name": "Mayank Raj Gupta",
      "givenName": "Mayank",
      "familyName": "Gupta",
      "alternateName": ["Mayank Raj", "Mayank Raj Gupta Developer", "M20A03", "Mayank Gupta"],
      "url": siteUrl,
      "image": `${siteUrl}/placeholder-user.jpg`,
      "jobTitle": ["Full Stack Developer", "AI Specialist", "Computer Vision Research Lead"],
      "description":
        "Full-Stack Developer, AI Systems Engineer, and BCA Scholar at Christ University, Bangalore. Architect of Praxirence (Ambient Clinical Intelligence) and Agricultural Vision & Spectral Analytics System.",
      "gender": "https://schema.org/Male",
      "nationality": {
        "@type": "Country",
        "name": "India",
      },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Bangalore",
        "addressRegion": "Karnataka",
        "addressCountry": "India",
      },
      "email": "mailto:mayankrajgupta01@gmail.com",
      "telephone": "+919835139865",
      "worksFor": [
        {
          "@type": "Organization",
          "name": "Christ University CS Research (AI Research Lead)",
        },
        {
          "@type": "Organization",
          "name": "ShadowFox",
        },
      ],
      "alumniOf": {
        "@type": "EducationalOrganization",
        "name": "Christ (Deemed to be University), Bangalore",
        "url": "https://christuniversity.in",
      },
      "knowsAbout": [
        "Full-Stack Web Development",
        "React 19",
        "Next.js 15",
        "TypeScript",
        "Python",
        "FastAPI",
        "PyTorch",
        "Deep Learning",
        "Whisper ASR",
        "Mistral-7B",
        "Computer Vision",
        "U2-Net",
        "YOLOv11",
        "Vis-NIR Spectroscopy",
        "PostgreSQL",
        "pgvector",
        "Firebase",
        "Supabase",
        "Railway",
        "AWS (S3, EC2)",
        "Docker",
        "Core Java (OOP)",
        "Java Server Pages (JSP)",
        "Java Swing",
        "Zero-Trust Architecture",
        "DPDP Act & HIPAA Compliance",
        "Artificial Intelligence & LLMs",
        "Data Structures & Algorithms",
      ],
      "hasOccupation": {
        "@type": "Occupation",
        "name": "Software Engineer & AI Researcher",
        "occupationalCategory": "15-1252.00",
        "skills": "React, Next.js, Python, PyTorch, Whisper ASR, Computer Vision, TypeScript, PostgreSQL, FastAPI",
      },
      "sameAs": [
        "https://github.com/M20A03",
        "https://www.linkedin.com/in/mayank-raj-gupta",
        siteUrl,
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "ProfilePage",
      "@id": `${siteUrl}/#profilepage`,
      "url": siteUrl,
      "name": "Mayank Raj Gupta | Full Stack Developer & AI Specialist Portfolio",
      "mainEntity": {
        "@id": `${siteUrl}/#person`,
      },
      "dateCreated": "2025-01-01",
      "dateModified": new Date().toISOString().split("T")[0],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      "name": "Mayank Raj Gupta Portfolio",
      "url": siteUrl,
      "description":
        "Official engineering portfolio of Mayank Raj Gupta, Full Stack Developer and BCA Scholar at Christ University.",
      "publisher": {
        "@id": `${siteUrl}/#person`,
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": `${siteUrl}/?q={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "@id": `${siteUrl}/#featured-projects`,
      "name": "Featured Software & Engineering Systems by Mayank Raj Gupta",
      "itemListElement": [
        {
          "@type": "SoftwareApplication",
          "position": 1,
          "name": "Praxirence — Ambient Clinical Intelligence Platform",
          "applicationCategory": "HealthApplication",
          "operatingSystem": "Android, Web",
          "description":
            "Zero-trust ambient clinical intelligence platform eliminating doctor burnout via real-time Whisper ASR and Mistral-7B SOAP note synthesis.",
          "url": "https://www.praxirence.com",
        },
        {
          "@type": "SoftwareApplication",
          "position": 2,
          "name": "Agricultural Vision & Spectral Analytics System",
          "applicationCategory": "DeveloperApplication",
          "operatingSystem": "Linux, Cloud",
          "description":
            "Confidential 4-stage computer vision and Vis-NIR spectroscopy pipeline engineered under Christ University research grant across 2,300 specimens.",
          "url": `${siteUrl}/case-study/agricultural-vision-spectral-analytics`,
        },
        {
          "@type": "SoftwareApplication",
          "position": 3,
          "name": "Wholesale & Retail E-Commerce Platform (Roshan Enterprises)",
          "applicationCategory": "BusinessApplication",
          "operatingSystem": "Web",
          "description":
            "High-throughput commercial storefront with dual B2B wholesale/retail checkout flows, list virtualization, and Firebase integration.",
          "url": "https://e-commerce-roshan-enterprises-dhn.web.app",
        },
        {
          "@type": "SoftwareApplication",
          "position": 4,
          "name": "Credex AI Spend Audit",
          "applicationCategory": "FinanceApplication",
          "operatingSystem": "Web",
          "description":
            "Financial audit platform for Indian startups featuring INR ₹ savings calculator and Claude AI consulting orb.",
          "url": "https://credex-sand.vercel.app",
        },
        {
          "@type": "SoftwareApplication",
          "position": 5,
          "name": "Nexus Scholar Knowledge Graph",
          "applicationCategory": "ReferenceApplication",
          "operatingSystem": "Web",
          "description":
            "Scientific discovery engine extracting semantic RDF triples from research papers with 768d pgvector dense search.",
          "url": "https://nexus-scholar-huhs.vercel.app",
        },
      ],
    },
  ];

  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="alternate" type="text/plain" href="/llms.txt" title="LLM Knowledge Profile" />
        <link rel="alternate" type="text/plain" href="/llms-full.txt" title="Comprehensive LLM Technical Specification" />
        <meta name="ai-content-declaration" content="human-authored" />
        <meta name="rating" content="General" />
        <meta name="distribution" content="Global" />
        <meta name="revisit-after" content="2 days" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(rootSchema),
          }}
        />
      </head>
      <body className={`${inter.className} font-sans antialiased`}>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
