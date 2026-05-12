const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async headers() {
    return [
      {
        source: "/CV_Mayank Raj Gupta.pdf",
        headers: [
          {
            key: "Content-Disposition",
            value: 'attachment; filename="CV_Mayank Raj Gupta.pdf"',
          },
        ],
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
    ];
  },
}

export default nextConfig
