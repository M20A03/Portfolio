import React from "react"
import type { Metadata } from 'next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

export const metadata: Metadata = {
  verification: {
    google: 'zsm4spgo5oDy1u8aRUa0b2HyzCHMEM_HGjTWWmkfI4U',
  },
  title: 'Mayank Raj Gupta | Full Stack Developer Portfolio',
  description: 'Portfolio of Mayank Raj Gupta, a Full Stack Developer skilled in React, JavaScript, and modern web technologies.',
  keywords: 'Mayank Raj Gupta, Web Developer, Full Stack Developer, React Developer, Portfolio',
  authors: [{ name: 'Mayank Raj Gupta' }],
  generator: 'Next.js',
  metadataBase: new URL('https://www.mayankraj.me'),
  openGraph: {
    type: 'website',
    url: 'https://www.mayankraj.me',
    title: 'Mayank Raj Gupta | Full Stack Developer',
    description: 'Explore the portfolio of Mayank Raj Gupta, showcasing web development projects and skills.',
    siteName: 'Mayank Raj Gupta Portfolio',
    images: [
      {
        url: '/favicon.png', // Using favicon.png as profile.jpg is missing, or can use placeholder-user.jpg
        width: 1200,
        height: 630,
        alt: 'Mayank Raj Gupta | Full Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mayank Raj Gupta | Full Stack Developer',
    description: 'Portfolio of Mayank Raj Gupta showcasing projects and development skills.',
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
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Mayank Raj Gupta",
              "url": "https://www.mayankraj.me",
              "image": "https://www.mayankraj.me/favicon.png",
              "jobTitle": "Full Stack Developer",
              "sameAs": [
                "https://github.com/M20A03",
                "https://www.linkedin.com/in/mayank-raj-gupta-159020396"
              ]
            })
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

