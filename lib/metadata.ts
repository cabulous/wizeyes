import type { Metadata } from "next";
import type { AppContent } from "@/content/types";
import type { LegalDoc } from "@/lib/content";
import { site } from "@/content/site";

/** Spread into each page's `openGraph`: Next replaces, not merges, a layout's openGraph. */
export const openGraphBase = {
  type: "website",
  siteName: site.name,
  locale: "en_CA",
} as const;

/** An app's marketing page at /<slug>, with its Markdown twin as an alternate. */
export function appPageMetadata(app: AppContent): Metadata {
  return {
    title: { absolute: app.seoTitle },
    description: app.description,
    keywords: app.keywords,
    alternates: {
      canonical: `/${app.slug}`,
      types: { "text/markdown": `/${app.slug}.md` },
    },
    openGraph: {
      ...openGraphBase,
      title: app.seoTitle,
      description: app.description,
      url: `/${app.slug}`,
    },
  };
}

/** An app's privacy policy page at /<slug>/privacy. */
export function privacyMetadata(app: AppContent, doc: LegalDoc): Metadata {
  const title = `${app.name} ${doc.title}`;
  const description = `How ${app.name} handles your data: everything stays on your device and in your iCloud. ${app.name} does not collect, transmit or store personal information.`;
  return {
    title,
    description,
    alternates: { canonical: `/${app.slug}/privacy` },
    openGraph: {
      ...openGraphBase,
      title,
      description,
      url: `/${app.slug}/privacy`,
    },
  };
}
