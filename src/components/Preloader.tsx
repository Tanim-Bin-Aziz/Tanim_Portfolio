"use client";

import { useEffect, useState } from "react";

const MIN_VISIBLE_MS = 550;
const FADE_MS = 400;
const SAFETY_TIMEOUT_MS = 4000;

const Preloader = () => {
  const [mounted, setMounted] = useState(true);
  const [fadingOut, setFadingOut] = useState(false);

  useEffect(() => {
    const startedAt = performance.now();
    let fadeTimer: ReturnType<typeof setTimeout>;
    let removeTimer: ReturnType<typeof setTimeout>;

    const beginFadeOut = () => {
      const elapsed = performance.now() - startedAt;
      const remaining = Math.max(0, MIN_VISIBLE_MS - elapsed);

      fadeTimer = setTimeout(() => {
        setFadingOut(true);
        // Fade shesh hole component ta pura DOM theke mount off kore dei -
        // eta ekta hidden overlay hoye pore thake na, memory te bose thake na
        removeTimer = setTimeout(() => setMounted(false), FADE_MS);
      }, remaining);
    };

    if (document.readyState === "complete") {
      beginFadeOut();
    } else {
      window.addEventListener("load", beginFadeOut, { once: true });
    }

    // Kono karone load event miss hole o preloader jate atke na thake
    const safety = setTimeout(beginFadeOut, SAFETY_TIMEOUT_MS);

    return () => {
      window.removeEventListener("load", beginFadeOut);
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
      clearTimeout(safety);
    };
  }, []);

  if (!mounted) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Loading"
      className={`fixed inset-0 z-[999] flex items-center justify-center bg-[#071717] transition-opacity ease-out ${
        fadingOut ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
      style={{ transitionDuration: `${FADE_MS}ms` }}
    >
      <div className="flex flex-col items-center gap-4">
        <span className="relative flex h-12 w-12 items-center justify-center">
          <span className="absolute inset-0 rounded-full border-2 border-[#C3CC9B]/15" />
          <span className="absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-[#C3CC9B]" />
        </span>
        <span className="text-[11px] font-semibold tracking-[0.35em] text-[#C3CC9B]/80">
          TBA
        </span>
      </div>
    </div>
  );
};

export default Preloader;
