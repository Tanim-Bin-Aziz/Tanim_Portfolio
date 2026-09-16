"use client";

import { useCallback, useEffect, useState } from "react";
import {
  IconDownload,
  IconHome,
  IconMoon,
  IconSun,
  IconFolder,
} from "@/components/icons";

type Theme = "dark" | "light";

export default function BottomNav() {
  const [active, setActive] = useState<string>("home");
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const current = (document.documentElement.dataset.theme as Theme) || "dark";
    setTheme(current);
    setMounted(true);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    ["home", "projects"].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next: Theme = prev === "dark" ? "light" : "dark";
      document.documentElement.dataset.theme = next;
      try {
        localStorage.setItem("theme", next);
      } catch {
        /* private mode */
      }
      return next;
    });
  }, []);

  return (
    <nav className="nav-pill" aria-label="Section navigation">
      <a
        href="#home"
        className={`nav-btn${active === "home" ? " active" : ""}`}
        aria-label="Home"
        onClick={(e) => { e.preventDefault(); scrollTo("home"); }}
      >
        <span className="nav-btn-bg" aria-hidden />
        <IconHome />
      </a>

      <a
        href="#projects"
        className={`nav-btn${active === "projects" ? " active" : ""}`}
        aria-label="Projects"
        onClick={(e) => { e.preventDefault(); scrollTo("projects"); }}
      >
        <span className="nav-btn-bg" aria-hidden />
        <IconFolder />
      </a>

      <a
        href="/resume.pdf"
        className="nav-btn"
        aria-label="Download Resume"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="nav-btn-bg" aria-hidden />
        <IconDownload />
      </a>

      <span className="nav-divider" aria-hidden />

      <button
        type="button"
        className="nav-btn"
        aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
        onClick={toggleTheme}
      >
        <span className="nav-btn-bg" aria-hidden />
        {mounted && theme === "light" ? <IconSun /> : <IconMoon />}
      </button>
    </nav>
  );
}
