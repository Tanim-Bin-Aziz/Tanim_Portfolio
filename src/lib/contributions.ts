import type { ContributionData, ContributionDay, MonthLabel } from "@/types";

const MONTH_NAMES = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

const DAYS_IN_WEEK = 7;

/**
 * Real GitHub contribution din gulo ke 53-week grid e sajai.
 * API Sunday theke shuru hoy, tai 7-7 kore chunk korlei week column paoa jay.
 * Sesh week ta adha thakle notun din diye puro kora hoy jate grid square thake.
 */
export function buildContributionGrid(
  days: ContributionDay[],
  total: number
): ContributionData {
  const padded = [...days];

  while (padded.length % DAYS_IN_WEEK !== 0) {
    const last = padded[padded.length - 1];
    const next = new Date(`${last.date}T00:00:00Z`);
    next.setUTCDate(next.getUTCDate() + 1);
    padded.push({ date: next.toISOString().slice(0, 10), count: 0, level: 0 });
  }

  const weeks: ContributionDay[][] = [];
  for (let i = 0; i < padded.length; i += DAYS_IN_WEEK) {
    weeks.push(padded.slice(i, i + DAYS_IN_WEEK));
  }

  const monthLabels: MonthLabel[] = [];
  let lastMonth = -1;

  weeks.forEach((week, weekIndex) => {
    const month = Number(week[0].date.slice(5, 7)) - 1;
    if (month === lastMonth) return;

    if (weekIndex > 0 && weekIndex < weeks.length - 1) {
      monthLabels.push({ label: MONTH_NAMES[month], weekIndex });
    }
    lastMonth = month;
  });

  return { weeks, monthLabels, total };
}

export function contribColor(level: number): string {
  if (level === 0) return "var(--contrib-0)";
  if (level === 1) return "var(--contrib-1)";
  if (level === 2) return "var(--contrib-2)";
  if (level === 3) return "var(--contrib-3)";
  return "var(--contrib-4)";
}
