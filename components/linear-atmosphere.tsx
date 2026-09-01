"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function LinearAtmosphere() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <div
      className="fixed inset-0 w-screen h-screen -z-1 pointer-events-none overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* Base Canvas: Ultra-Clean Obsidian (#09090B) in Dark / Apple Studio (#F8F9FA) in Light */}
      <div
        className="absolute inset-0 w-full h-full transition-colors duration-700"
        style={{
          backgroundColor: isDark ? "#09090B" : "#F8F9FA",
        }}
      />

      {/* Linear-Style Ambient Spotlight Glow (Top-Center Horizon Radiance) */}
      <div
        className="absolute inset-0 w-full h-full transition-opacity duration-700 pointer-events-none"
        style={{
          backgroundImage: isDark
            ? `
              radial-gradient(ellipse 85% 55% at 50% -15%, rgba(120, 119, 198, 0.16), transparent 70%),
              radial-gradient(ellipse 60% 40% at 85% 60%, rgba(16, 185, 129, 0.04), transparent 60%),
              radial-gradient(ellipse 60% 40% at 15% 75%, rgba(99, 102, 241, 0.04), transparent 60%)
            `
            : `
              radial-gradient(ellipse 85% 55% at 50% -15%, rgba(99, 102, 241, 0.08), transparent 70%),
              radial-gradient(ellipse 60% 40% at 85% 60%, rgba(16, 185, 129, 0.03), transparent 60%),
              radial-gradient(ellipse 60% 40% at 15% 75%, rgba(245, 158, 11, 0.03), transparent 60%)
            `,
        }}
      />

      {/* Professional Architectural Grid with Smooth Radial Falloff Mask (Vercel & Linear Style) */}
      <div
        className="absolute inset-0 w-full h-full transition-opacity duration-700 pointer-events-none"
        style={{
          backgroundImage: isDark
            ? "linear-gradient(to right, rgba(255, 255, 255, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.04) 1px, transparent 1px)"
            : "linear-gradient(to right, rgba(0, 0, 0, 0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 0, 0, 0.035) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          maskImage: "radial-gradient(ellipse 70% 55% at 50% 25%, black 25%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 55% at 50% 25%, black 25%, transparent 80%)",
        }}
      />

      {/* Top Hairline Horizon Glow Accent */}
      <div
        className="absolute top-0 left-0 right-0 h-[1px] opacity-50"
        style={{
          background: isDark
            ? "linear-gradient(90deg, transparent 0%, rgba(120, 119, 198, 0.6) 50%, transparent 100%)"
            : "linear-gradient(90deg, transparent 0%, rgba(99, 102, 241, 0.35) 50%, transparent 100%)",
        }}
      />
    </div>
  );
}
