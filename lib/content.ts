import { readFileSync } from "fs";
import path from "path";
import { parseMarkdownFile, type MarkdownFile } from "@/lib/markdown";

export type LegalDoc = MarkdownFile & { title: string; lastUpdated: string };

/** Reads content/apps/<slug>/<name>.md at build time. Throws if it is missing or lacks frontmatter. */
export function readLegalDoc(
  slug: string,
  name: "privacy" | "terms",
): LegalDoc {
  const file = path.join(process.cwd(), "content", "apps", slug, `${name}.md`);
  const doc = parseMarkdownFile(readFileSync(file, "utf8"));
  const { title, lastUpdated } = doc.meta;
  if (!title || !/^\d{4}-\d{2}-\d{2}$/.test(lastUpdated ?? "")) {
    throw new Error(
      `${file} needs frontmatter with "title" and "lastUpdated: YYYY-MM-DD".`,
    );
  }
  return { ...doc, title, lastUpdated };
}

/** 2025-06-18 → "June 18, 2025", without timezone drift. */
export function formatDate(isoDate: string): string {
  const [year, month, day] = isoDate.split("-").map(Number);
  return new Date(Date.UTC(year, month - 1, day)).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}
