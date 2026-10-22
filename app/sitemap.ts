import type { MetadataRoute } from "next";
import { apps } from "@/content/apps";
import { absoluteUrl } from "@/content/site";
import { readLegalDoc } from "@/lib/content";

// Pages not yet moved to the content/apps model. Remove an entry when its app gets a redesigned page.
const legacyPages = [
  "/benefittracker",
  "/familyassets",
  "/koda",
  "/koda/terms",
  "/lablog",
  "/medicalrecord",
  "/solobooks",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: absoluteUrl("/") },
    ...apps.flatMap((app) => [
      { url: absoluteUrl(`/${app.slug}`), priority: 1 },
      {
        url: absoluteUrl(`/${app.slug}/privacy`),
        lastModified: readLegalDoc(app.slug, "privacy").lastUpdated,
        priority: 0.3,
      },
    ]),
    ...legacyPages.map((path) => ({ url: absoluteUrl(path), priority: 0.3 })),
  ];
}
