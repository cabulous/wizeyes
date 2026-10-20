import type { AppContent } from "@/content/types";
import { savingsRoom } from "./savings-room/app";

/**
 * Apps with a redesigned marketing page. Order is display order.
 * Adding an app here publishes it to llms.txt, the sitemap and /<slug>.md.
 */
export const apps: AppContent[] = [savingsRoom];

export function getApp(slug: string): AppContent | undefined {
  return apps.find((app) => app.slug === slug);
}
