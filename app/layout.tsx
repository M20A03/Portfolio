import React from "react"
import type { Metadata } from 'next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const siteUrl = 'https://www.mayankraj.me'

export const metadata: Metadata = {
  verification: {
    google: 'zsm4spgo5oDy1u8aRUa0b2HyzCHMEM_HGjTWWmkfI4U',
  },
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Mayank Raj Gupta | Full Stack Developer Portfolio',
    template: '%s | Mayank Raj Gupta',
  },
  description: 'Mayank Raj Gupta is a Full Stack Developer and BCA student building React, Next.js, JavaScript, TypeScript, and Firebase projects.',
  keywords: [
    'Mayank Raj Gupta',
    'Mayank Raj Gupta portfolio',
    'Mayank Raj Gupta developer',
    'full stack developer',
    'React developer',
    'Next.js developer',
    'JavaScript developer',
    'TypeScript developer',
    'Firebase developer',
    'BCA student',
  ],
  authors: [{ name: 'Mayank Raj Gupta' }],
  generator: 'Next.js',
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    url: siteUrl,
    title: 'Mayank Raj Gupta | Full Stack Developer',
    description: 'Explore the portfolio of Mayank Raj Gupta, showcasing web development projects, certifications, and technical skills.',
    siteName: 'Mayank Raj Gupta Portfolio',
    images: [
      {
        url: '/favicon.png',
        width: 1200,
        height: 630,
        alt: 'Mayank Raj Gupta | Full Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mayank Raj Gupta | Full Stack Developer',
    description: 'Portfolio of Mayank Raj Gupta showcasing projects, certifications, and development skills.',
    images: ['/favicon.png'],
  },
  icons: {
    icon: [
      {
        url: "/favicon.png",
        type: "image/png",
      },
      {
        url: "/icon.png",
        type: "image/png",
      },
      {
        url: "/placeholder-logo.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/favicon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Person",
                "name": "Mayank Raj Gupta",
                "url": siteUrl,
                "image": `${siteUrl}/favicon.png`,
                "jobTitle": "Full Stack Developer",
                "sameAs": [
                  "https://github.com/M20A03",
                  "https://www.linkedin.com/in/mayank-raj-gupta-159020396"
                ]
              },
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "name": "Mayank Raj Gupta Portfolio",
                "url": siteUrl,
                "description": "Portfolio website for Mayank Raj Gupta, a Full Stack Developer showcasing projects, certifications, and skills.",
                "potentialAction": {
                  "@type": "SearchAction",
                  "target": `${siteUrl}/?q={search_term_string}`,
                  "query-input": "required name=search_term_string"
                }
              }
            ])
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
  )
}

