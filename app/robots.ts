import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/content/site";

// Everyone is welcome, AI crawlers included: the site exists to be found and quoted.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: absoluteUrl("/sitemap.xml"),
  };
}
