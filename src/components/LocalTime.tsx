"use client";

import { useEffect, useState } from "react";
import { site } from "@/data/site";

/**
 * Time server e render korle hydration mismatch hoy (server time !== browser time).
 * Tai prothome khali render kori, mount howar por clock chalu hoy.
 */
export default function LocalTime() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const format = () =>
      new Intl.DateTimeFormat("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
        timeZone: site.timeZone,
      }).format(new Date());

    setTime(format());
    const id = setInterval(() => setTime(format()), 30_000);
    return () => clearInterval(id);
  }, []);

  return (
    <span suppressHydrationWarning>
      {time ? `${time} (${site.timeZoneLabel})` : `—:— (${site.timeZoneLabel})`}
    </span>
  );
}
