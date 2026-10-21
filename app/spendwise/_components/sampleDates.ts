/**
 * Dates for the sample transactions, counted back from the day the site is
 * built, so a "now" alert or a "Today" row never carries a date months old.
 * Pages are static, so these are fixed at build time, in UTC.
 */
const day = 24 * 60 * 60 * 1000;
const built = Date.now();

export function daysAgo(days: number): Date {
  return new Date(built - days * day);
}

/** "October 20, 2026", the way RBC dates its alerts. */
export function alertDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}

/** "October 2026", a month header in the Transactions list. */
export function monthHeader(date: Date): string {
  return date.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}

/** "Friday": TransactionItem names the weekday for dates in the past week. */
export function weekday(date: Date): string {
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    timeZone: "UTC",
  });
}

/** "2026-10-20": Export's numeric date in a Canadian locale. */
export function isoDate(date: Date): string {
  return date.toISOString().slice(0, 10);
}
