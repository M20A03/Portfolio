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
        source: "/resume.pdf",
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
