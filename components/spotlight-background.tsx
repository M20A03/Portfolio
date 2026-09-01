"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export function SpotlightBackground() {
  const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || "ontouchstart" in window);
    };
    checkMobile();

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches[0]) {
        setMousePos({ x: e.touches[0].clientX, y: e.touches[0].clientY });
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("resize", checkMobile, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  // On mobile without active touch, use a centered soft ambient radial mask. On desktop, follow the cursor spotlight.
  const maskStyle =
    mousePos && !isMobile
      ? `radial-gradient(circle 550px at ${mousePos.x}px ${mousePos.y}px, black 35%, transparent 85%)`
      : `radial-gradient(ellipse 90% 75% at 50% 30%, black 45%, transparent 95%)`;

  return (
    <div className="fixed inset-0 pointer-events-none z-[-5] overflow-hidden" aria-hidden="true">
      {/* 1. Subtle Interactive Dot Matrix Grid with Responsive Spotlight Mask */}
      <div
        className="absolute inset-0 w-full h-full opacity-50 dark:opacity-35"
        style={{
          backgroundImage: isDark
            ? "radial-gradient(rgba(255, 255, 255, 0.22) 1.2px, transparent 1.2px)"
            : "radial-gradient(rgba(0, 0, 0, 0.16) 1.2px, transparent 1.2px)",
          backgroundSize: isMobile ? "24px 24px" : "28px 28px",
          maskImage: maskStyle,
          WebkitMaskImage: maskStyle,
          transition: "mask-image 0.15s ease-out, -webkit-mask-image 0.15s ease-out",
        }}
      />

      {/* 2. Floating Aurora Ambient Gradient Orbs (Optimized size & blur for mobile & desktop) */}
      <div
        className="absolute top-[-5%] left-[10%] w-[280px] h-[280px] md:w-[500px] md:h-[500px] rounded-full blur-[80px] md:blur-[130px] animate-glow-pulse opacity-70 md:opacity-100"
        style={{
          background: isDark
            ? "radial-gradient(circle, rgba(6, 182, 212, 0.12), transparent 70%)"
            : "radial-gradient(circle, rgba(20, 184, 166, 0.14), transparent 70%)",
        }}
      />

      <div
        className="absolute top-[40%] right-[5%] w-[260px] h-[260px] md:w-[550px] md:h-[550px] rounded-full blur-[80px] md:blur-[140px] animate-glow-pulse opacity-60 md:opacity-100"
        style={{
          background: isDark
            ? "radial-gradient(circle, rgba(168, 85, 247, 0.11), transparent 70%)"
            : "radial-gradient(circle, rgba(236, 72, 153, 0.12), transparent 70%)",
          animationDelay: "3s",
        }}
      />

      <div
        className="absolute bottom-[10%] left-[20%] w-[300px] h-[300px] md:w-[600px] md:h-[600px] rounded-full blur-[90px] md:blur-[150px] animate-glow-pulse opacity-60 md:opacity-100"
        style={{
          background: isDark
            ? "radial-gradient(circle, rgba(59, 130, 246, 0.10), transparent 70%)"
            : "radial-gradient(circle, rgba(251, 191, 36, 0.12), transparent 70%)",
          animationDelay: "5s",
        }}
      />
    </div>
  );
}
