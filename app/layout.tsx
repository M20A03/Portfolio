import React from "react";
import type { Metadata, Viewport } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

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
    default: "Mayank Raj Gupta | Full Stack Developer & AI Specialist Portfolio",
    template: "%s | Mayank Raj Gupta",
  },
  description:
    "Official portfolio of Mayank Raj Gupta, Full Stack Developer and BCA Scholar at Christ University. Expertise in React, Next.js 15, TypeScript, Python, YOLOv11 Deep Learning, and AntiGravity AI workflows.",
  keywords: [
    "Mayank Raj Gupta",
    "Mayank Raj Gupta portfolio",
    "Mayank Raj Gupta developer",
    "Mayank Raj Gupta Christ University",
    "Mayank Raj Gupta Bangalore",
    "Mayank Raj Gupta Full Stack Developer",
    "Mayank Raj Gupta MERN Stack Developer",
    "Mayank Raj Gupta Singularium Technologies",
    "Mayank Raj Gupta AWS Supabase Cloudflare",
    "Mayank Raj Gupta BCA",
    "Mayank Raj Gupta AI Specialist",
    "Mayank Raj Gupta GitHub M20A03",
    "Mayank Raj Gupta Commerce Pivot",
    "Mayank Raj Gupta ChatGPT Gemini Claude DeepSeek",
    "Full Stack Developer Bangalore",
    "MERN Stack Developer Bangalore",
    "React Next.js AWS Supabase Developer",
  ],
  authors: [{ name: "Mayank Raj Gupta", url: siteUrl }],
  creator: "Mayank Raj Gupta",
  publisher: "Mayank Raj Gupta",
  generator: "Next.js 15",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
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
    title: "Mayank Raj Gupta | Full Stack Developer & AI Specialist",
    description:
      "Official portfolio of Mayank Raj Gupta showcasing full-stack web applications, deep learning projects, certifications, and developer skills.",
    siteName: "Mayank Raj Gupta Portfolio",
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
    description: "Official portfolio of Mayank Raj Gupta showcasing projects, certifications, and technical skills.",
    images: [`${siteUrl}/images/portfolio-og.png`],
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
      "name": "Mayank Raj Gupta",
      "alternateName": ["Mayank Raj", "Mayank Raj Gupta Developer", "M20A03"],
      "url": siteUrl,
      "image": `${siteUrl}/placeholder-user.jpg`,
      "jobTitle": "Full Stack Developer & AI Research Engineer",
      "worksFor": [
        {
          "@type": "Organization",
          "name": "Singularium Technologies",
        },
        {
          "@type": "Organization",
          "name": "ShadowFox",
        },
      ],
      "alumniOf": {
        "@type": "EducationalOrganization",
        "name": "Christ (Deemed to be University), Bangalore",
      },
      "knowsAbout": [
        "React",
        "Next.js 15",
        "TypeScript",
        "Node.js",
        "Python",
        "Deep Learning",
        "YOLOv11",
        "Firebase",
        "AntiGravity AI",
        "Software Architecture",
        "ChatGPT",
        "Google Gemini",
        "Anthropic Claude",
        "DeepSeek",
        "AI Prompt Engineering",
      ],
      "sameAs": [
        "https://github.com/M20A03",
        "https://www.linkedin.com/in/mayank-raj-gupta-159020396",
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Mayank Raj Gupta Portfolio",
      "url": siteUrl,
      "description":
        "Official portfolio website of Mayank Raj Gupta, Full Stack Developer and BCA Scholar at Christ University.",
      "publisher": {
        "@type": "Person",
        "name": "Mayank Raj Gupta",
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": `${siteUrl}/?q={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    },
  ];

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(rootSchema),
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans antialiased">
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
