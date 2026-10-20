import { site } from "@/content/site";

/** Spread into each page's `openGraph`: Next replaces, not merges, a layout's openGraph. */
export const openGraphBase = {
  type: "website",
  siteName: site.name,
  locale: "en_CA",
} as const;
