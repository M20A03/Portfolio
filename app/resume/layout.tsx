import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume | Mayank Raj Gupta",
  description:
    "Resume of Mayank Raj Gupta, Full Stack Developer. View education, technical projects, skills, and achievements.",
  alternates: {
    canonical: "/resume",
  },
  openGraph: {
    title: "Resume | Mayank Raj Gupta",
    description:
      "View the resume of Mayank Raj Gupta with technical projects, skills, and achievements.",
    url: "https://www.mayankraj.me/resume",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "Resume | Mayank Raj Gupta",
    description:
      "View the resume of Mayank Raj Gupta with technical projects, skills, and achievements.",
  },
};

export default function ResumeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
