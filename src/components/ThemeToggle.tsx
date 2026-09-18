"use client";

import { useCallback } from "react";
import { IconMoon, IconSun } from "@/components/icons";

type Theme = "dark" | "light";

export default function ThemeToggle() {
  const toggle = useCallback(() => {
    const current = (document.documentElement.dataset.theme as Theme) || "dark";
    const next: Theme = current === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {}
  }, []);

  return (
    <button
      type="button"
      className="theme-toggle"
      aria-label="Toggle light and dark theme"
      onClick={toggle}
    >
      <span className="theme-icon theme-icon-moon">
        <IconMoon size={16} />
      </span>
      <span className="theme-icon theme-icon-sun">
        <IconSun size={16} />
      </span>
    </button>
  );
}
