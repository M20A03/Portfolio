"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ExecutiveAtmosphere() {
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
      {/* Base Canvas: Soothing Deep Obsidian (#09090B) in Dark, Warm Clean Studio (#F8F9FA) in Light */}
      <div
        className="absolute inset-0 w-full h-full transition-colors duration-500"
        style={{
          backgroundColor: isDark ? "#090A0C" : "#F8F9FB",
        }}
      />

      {/* Layer 1: Soothing Minimalist Studio Lighting (Zero Blur, Zero Blue Glare, 100% Eye Comfort) */}
      <div
        className="absolute inset-0 w-full h-full transition-opacity duration-700"
        style={{
          backgroundImage: isDark
            ? `
              radial-gradient(ellipse 70% 45% at 50% 0%, rgba(255, 255, 255, 0.03), transparent 70%),
              radial-gradient(ellipse 50% 40% at 80% 70%, rgba(16, 185, 129, 0.015), transparent 60%)
            `
            : `
              radial-gradient(ellipse 70% 45% at 50% 0%, rgba(0, 0, 0, 0.02), transparent 70%),
              radial-gradient(ellipse 50% 40% at 80% 70%, rgba(16, 185, 129, 0.015), transparent 60%)
            `,
        }}
      />

      {/* Layer 2: Ultra-Subtle Architectural Dot Matrix Grid (32px spacing, 100% Crisp) */}
      <div
        className="absolute inset-0 w-full h-full transition-opacity duration-500"
        style={{
          backgroundImage: isDark
            ? "radial-gradient(rgba(255, 255, 255, 0.07) 1px, transparent 1px)"
            : "radial-gradient(rgba(0, 0, 0, 0.06) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
    </div>
  );
}
