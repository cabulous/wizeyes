import type { Metadata, Viewport } from "next";
import { Caveat, Nunito, Young_Serif } from "next/font/google";
import { ourLittleKitchen as app } from "@/content/apps/our-little-kitchen/app";
import { AppFooter } from "@/components/app-page/AppFooter";
import { AppNav } from "@/components/app-page/AppNav";
import styles from "./theme.module.css";

// A warm cookbook serif for headings, a rounded sans for reading, and a
// hand for the notes in the margins, after the icon's crayon drawing.
const display = Young_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
  display: "swap",
});

const sans = Nunito({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const hand = Caveat({
  subsets: ["latin"],
  variable: "--font-hand",
  display: "swap",
});

// Shared by the app page and its policy page; each page adds its own title and description.
export const metadata: Metadata = {
  icons: {
    icon: "/apps/our-little-kitchen/icon-64.png",
    apple: "/apps/our-little-kitchen/icon-180.png",
  },
  twitter: { card: "summary_large_image" },
  // Safari's Smart App Banner.
  ...(app.appStoreId ? { itunes: { appId: app.appStoreId } } : {}),
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: app.themeColor },
    { media: "(prefers-color-scheme: dark)", color: "#1c1614" },
  ],
};

export default function OurLittleKitchenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`${styles.theme} ${display.variable} ${sans.variable} ${hand.variable}`}
    >
      <AppNav app={app} />
      {children}
      <AppFooter app={app} />
    </div>
  );
}
