/** @type {import('next').NextConfig} */
const securityHeaders = [
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=()",
  },
  {
    key: "Content-Security-Policy",
    value: `
      default-src 'self';
      script-src 'self' 'unsafe-eval' 'unsafe-inline' https://va.vercel-scripts.com https://vitals.vercel-insights.com;
      style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
      img-src 'self' blob: data: https:;
      font-src 'self' https://fonts.gstatic.com data:;
      connect-src 'self' https: wss:;
      frame-ancestors 'self';
      base-uri 'self';
      form-action 'self';
    `.replace(/\s{2,}/g, " ").trim(),
  },
];

const nextConfig = {
  poweredByHeader: false,
  productionBrowserSourceMaps: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/projects",
        destination: "/#projects",
        permanent: true,
      },
      {
        source: "/case-studies",
        destination: "/#projects",
        permanent: true,
      },
      {
        source: "/study-archive",
        destination: "/case-study/study-archive",
        permanent: true,
      },
      {
        source: "/lumi-glow",
        destination: "/case-study/lumi-glow",
        permanent: true,
      },
      {
        source: "/roshan-enterprises",
        destination: "/case-study/roshan-enterprises",
        permanent: true,
      },
      {
        source: "/search-algorithm-simulator",
        destination: "/case-study/search-algorithm-simulator",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
      {
        source: "/RESUME_Mayank Raj Gupta.pdf",
        headers: [
          {
            key: "Content-Disposition",
            value: 'attachment; filename="RESUME_Mayank Raj Gupta.pdf"',
          },
        ],
      },
      {
        source: "/resume.pdf",
        headers: [
          {
            key: "Content-Disposition",
            value: 'inline; filename="Mayank_Raj_Gupta_Resume.pdf"',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
