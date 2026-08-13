const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
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
        source: "/RESUME_Mayank Raj Gupta.pdf",
        headers: [
          {
            key: "Content-Disposition",
            value: 'attachment; filename="RESUME_Mayank Raj Gupta.pdf"',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
