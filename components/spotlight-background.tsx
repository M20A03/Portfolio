"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export function SpotlightBackground() {
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <div className="fixed inset-0 pointer-events-none -z-20 overflow-hidden" aria-hidden="true">
      {/* 1. Subtle Interactive Dot Matrix Grid with Radial Spotlight Mask */}
      <div
        className="absolute inset-0 w-full h-full opacity-40 dark:opacity-30"
        style={{
          backgroundImage: isDark
            ? "radial-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px)"
            : "radial-gradient(rgba(0, 0, 0, 0.12) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          maskImage: `radial-gradient(circle 500px at ${mousePos.x}px ${mousePos.y}px, black 30%, transparent 80%)`,
          WebkitMaskImage: `radial-gradient(circle 500px at ${mousePos.x}px ${mousePos.y}px, black 30%, transparent 80%)`,
          transition: "mask-image 0.15s ease-out, -webkit-mask-image 0.15s ease-out",
        }}
      />

      {/* 2. Floating Aurora Ambient Gradient Orbs */}
      <div
        className="absolute top-[-10%] left-[15%] w-[500px] h-[500px] rounded-full blur-[130px] animate-glow-pulse"
        style={{
          background: isDark
            ? "radial-gradient(circle, rgba(6, 182, 212, 0.15), transparent 70%)"
            : "radial-gradient(circle, rgba(20, 184, 166, 0.18), transparent 70%)",
        }}
      />

      <div
        className="absolute top-[40%] right-[10%] w-[550px] h-[550px] rounded-full blur-[140px] animate-glow-pulse"
        style={{
          background: isDark
            ? "radial-gradient(circle, rgba(168, 85, 247, 0.14), transparent 70%)"
            : "radial-gradient(circle, rgba(236, 72, 153, 0.15), transparent 70%)",
          animationDelay: "3s",
        }}
      />

      <div
        className="absolute bottom-[10%] left-[25%] w-[600px] h-[600px] rounded-full blur-[150px] animate-glow-pulse"
        style={{
          background: isDark
            ? "radial-gradient(circle, rgba(59, 130, 246, 0.12), transparent 70%)"
            : "radial-gradient(circle, rgba(251, 191, 36, 0.14), transparent 70%)",
          animationDelay: "5s",
        }}
      />
    </div>
  );
}
