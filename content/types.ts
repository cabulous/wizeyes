/**
 * Schema for one app's marketing content (content/apps/<slug>/app.ts).
 *
 * Rules for anything written into these fields:
 * - Facts come from the app itself: its source code, App Store listing or
 *   privacy policy. Never describe a feature the app does not ship.
 * - Copy fields may use two inline marks: *emphasis* and **strong**, plus
 *   [links](/path). Everything else is plain text.
 */
export type AppContent = {
  /** URL segment and content folder name: /savings-room, content/apps/savings-room/. */
  slug: string;
  /** Short display name, as shown under the icon on the home screen. */
  name: string;
  /** Full title on the App Store. */
  storeName: string;
  /** Numeric ID from apps.apple.com/app/id<ID>. Leave undefined until known. */
  appStoreId?: string;
  /** One line for cards, link previews and llms.txt. */
  tagline: string;
  /** <title> for the app page: name plus what it does, about 60 characters. */
  seoTitle: string;
  /** Meta description: plain text, at most 160 characters. */
  description: string;
  keywords: string[];
  /** The App Store category. */
  category: "Finance" | "Health & Fitness" | "Food & Drink";
  /** schema.org applicationCategory value. */
  schemaCategory:
    | "FinanceApplication"
    | "HealthApplication"
    | "LifestyleApplication";
  platforms: string[];
  minimumOS: string;
  /**
   * How people pay, e.g. "One-time purchase" or "Free with subscription".
   * Never an amount: prices change and vary by region, so the App Store
   * listing is the only place a price should appear.
   */
  pricing: string;
  /** 512px PNG under /public. */
  icon: { src: string; alt: string };
  /** Browser UI and social-card colour, sampled from the app icon. */
  themeColor: string;

  hero: {
    eyebrow: string;
    title: string;
    lead: string;
    /** Three short reassurance chips under the call to action. */
    facts: string[];
  };
  features: Section & {
    /** `id` picks the illustration the page draws for the feature. */
    items: { id: string; title: string; body: string }[];
  };
  steps: Section & { items: { title: string; body: string }[] };
  privacy: Section & {
    points: string[];
    /** A line quoted word-for-word from inside the app, if it has one. */
    quote?: { text: string; source: string };
  };
  faq: Section & { items: { question: string; answer: string }[] };
  cta: { title: string; body: string };
  disclaimer: string;
};

/** Heading block shared by every page section. */
export type Section = { eyebrow: string; title: string; lead?: string };

export function appStoreUrl(app: AppContent): string | undefined {
  return app.appStoreId
    ? `https://apps.apple.com/app/id${app.appStoreId}`
    : undefined;
}
