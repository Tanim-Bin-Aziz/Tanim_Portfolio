"use client";

import { useCallback, useEffect, useState } from "react";
import {
  IconDownload,
  IconHome,
  IconFolder,
} from "@/components/icons";

export default function BottomNav() {
  const [active, setActive] = useState<string>("home");

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
        href="/resume/Tanim Bin Aziz.pdf"
        className="nav-btn"
        aria-label="Download Resume"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="nav-btn-bg" aria-hidden />
        <IconDownload />
      </a>
    </nav>
  );
}
