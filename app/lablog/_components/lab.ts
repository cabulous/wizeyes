import type { Reading, SampleTest } from "@/content/apps/lablog/app";

/** A result's status against its range, as SharedUtill/Utils.swift colours it. */
export type Status = "in" | "out";

/** Below `low`, or above `high` when there is one. The bounds are in range (Indicator+Batch.swift). */
export function status(value: number, low: number, high?: number): Status {
  return value < low || (high !== undefined && value > high) ? "out" : "in";
}

/** Values print with two decimals, as Double.localizedString() does in English. */
export function formatValue(value: number): string {
  return value.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

/** "11.00 – 23.00" or "> 1.00", like Indicator.normalRangeDescription. */
export function rangeText(low: number, high?: number): string {
  return high === undefined
    ? `> ${formatValue(low)}`
    : `${formatValue(low)} – ${formatValue(high)}`;
}

/** Parse as UTC midnight, so the day never shifts with the reader's time zone. */
function day(iso: string): Date {
  return new Date(`${iso}T00:00:00Z`);
}

/** "Apr 13, 2026": the list's medium date style. */
export function mediumDate(iso: string): string {
  return day(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}

/** "4/13/2026": the detail list's numeric date style. */
export function numericDate(iso: string): string {
  return day(iso).toLocaleDateString("en-US", { timeZone: "UTC" });
}

export function dayNumber(iso: string): number {
  return day(iso).getTime() / 86_400_000;
}

export function latest(test: SampleTest): Reading | undefined {
  return test.history[test.history.length - 1];
}
