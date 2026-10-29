import type { Metadata, Viewport } from "next";
import { DM_Serif_Display, Manrope } from "next/font/google";
import { familyAssets as app } from "@/content/apps/family-assets/app";
import { AppFooter } from "@/components/app-page/AppFooter";
import { AppNav } from "@/components/app-page/AppNav";
import styles from "./theme.module.css";

// A warm, bookish serif for headings, like the title page of an account
// book, and a clear grotesk with tabular figures for reading and amounts.
const display = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const sans = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

// Shared by the app page and its policy page; each page adds its own title and description.
export const metadata: Metadata = {
  icons: {
    icon: "/apps/family-assets/icon-64.png",
    apple: "/apps/family-assets/icon-180.png",
  },
  twitter: { card: "summary_large_image" },
  // Safari's Smart App Banner.
  ...(app.appStoreId ? { itunes: { appId: app.appStoreId } } : {}),
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: app.themeColor },
    { media: "(prefers-color-scheme: dark)", color: "#1a1513" },
  ],
};

export default function FamilyAssetsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${styles.theme} ${display.variable} ${sans.variable}`}>
      <AppNav app={app} />
      {children}
      <AppFooter app={app} />
    </div>
  );
}
