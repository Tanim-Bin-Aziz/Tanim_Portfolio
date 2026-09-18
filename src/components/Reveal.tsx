"use client";

import { useEffect, useRef, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  variant?: "up" | "scale" | "left" | "right";
  delay?: number;
  className?: string;
};

export default function Reveal({
  children,
  variant = "up",
  delay = 0,
  className = "",
}: RevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px -20px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const variantClass =
    variant === "scale"
      ? "reveal-scale"
      : variant === "left"
        ? "reveal-left"
        : variant === "right"
          ? "reveal-right"
          : "reveal";

  return (
    <div
      ref={containerRef}
      className={`${variantClass} ${className}`.trim()}
      style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}
    >
      {children}
    </div>
  );
}
