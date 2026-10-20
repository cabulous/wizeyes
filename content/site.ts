/**
 * Studio-wide facts. Every page, feed and structured-data block reads from
 * here, so a change made once shows up everywhere.
 */
export const site = {
  name: "WizEyes",
  company: "WizEyes Tech Inc.",
  /** Canonical origin, no trailing slash. Override per deploy with NEXT_PUBLIC_SITE_URL. */
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://wizeyes.com").replace(
    /\/$/,
    "",
  ),
  email: "support@wizeyes.com",
  summary:
    "WizEyes Tech Inc. builds small, private apps for iPhone and iPad. App data stays on your device and in your own iCloud, never on our servers.",
} as const;

export function absoluteUrl(path: string): string {
  return `${site.url}${path.startsWith("/") ? path : `/${path}`}`;
}
