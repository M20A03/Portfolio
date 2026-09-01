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
      {/* Base Canvas: Clean Obsidian (Dark) vs Crisp Studio Gray (Light) */}
      <div
        className="absolute inset-0 w-full h-full transition-colors duration-500"
        style={{
          backgroundColor: isDark ? "#0A0B0E" : "#FAFAFC",
        }}
      />

      {/* Layer 1: Subtle Studio Lighting Mesh (Zero Blur Filter / Zero GPU Cost) */}
      <div
        className="absolute inset-0 w-full h-full transition-opacity duration-700"
        style={{
          backgroundImage: isDark
            ? `
              radial-gradient(ellipse 80% 50% at 50% -10%, rgba(56, 189, 248, 0.05), transparent 70%),
              radial-gradient(ellipse 60% 40% at 85% 60%, rgba(99, 102, 241, 0.04), transparent 60%),
              radial-gradient(ellipse 50% 50% at 15% 75%, rgba(16, 185, 129, 0.03), transparent 60%)
            `
            : `
              radial-gradient(ellipse 80% 50% at 50% -10%, rgba(99, 102, 241, 0.04), transparent 70%),
              radial-gradient(ellipse 60% 40% at 85% 60%, rgba(16, 185, 129, 0.03), transparent 60%),
              radial-gradient(ellipse 50% 50% at 15% 75%, rgba(245, 158, 11, 0.02), transparent 60%)
            `,
        }}
      />

      {/* Layer 2: Ultra-Fine Executive Grid (48px spacing, clean hairlines) */}
      <div
        className="absolute inset-0 w-full h-full opacity-40 dark:opacity-25 transition-opacity duration-500"
        style={{
          backgroundImage: isDark
            ? "radial-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px)"
            : "radial-gradient(rgba(0, 0, 0, 0.12) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Layer 3: Subtle Horizon Glow Line */}
      <div
        className="absolute top-0 left-0 right-0 h-[1px] opacity-20"
        style={{
          background: isDark
            ? "linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.4) 50%, transparent 100%)"
            : "linear-gradient(90deg, transparent 0%, rgba(0, 0, 0, 0.2) 50%, transparent 100%)",
        }}
      />
    </div>
  );
}
