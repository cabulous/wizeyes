import type { AppContent } from "@/content/types";
import { ourLittleKitchen } from "./our-little-kitchen/app";
import { savingsRoom } from "./savings-room/app";
import { spendwise } from "./spendwise/app";

/**
 * Apps with a redesigned marketing page. Order is display order.
 * Adding an app here publishes it to llms.txt, the sitemap and /<slug>.md.
 */
export const apps: AppContent[] = [savingsRoom, spendwise, ourLittleKitchen];

export function getApp(slug: string): AppContent | undefined {
  return apps.find((app) => app.slug === slug);
}
