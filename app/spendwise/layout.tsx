import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Instrument_Sans } from "next/font/google";
import { spendwise as app } from "@/content/apps/spendwise/app";
import { AppFooter } from "@/components/app-page/AppFooter";
import { AppNav } from "@/components/app-page/AppNav";
import styles from "./theme.module.css";

// Bricolage Grotesque's chunky, characterful forms suit the icon's thick outlines.
const display = Bricolage_Grotesque({
  subsets: ["latin"],
  axes: ["opsz", "wdth"],
  variable: "--font-display",
  display: "swap",
});

const sans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

// Shared by the app page and its policy page; each page adds its own title and description.
export const metadata: Metadata = {
  icons: {
    icon: "/apps/spendwise/icon-64.png",
    apple: "/apps/spendwise/icon-180.png",
  },
  twitter: { card: "summary_large_image" },
  // Safari's Smart App Banner.
  ...(app.appStoreId ? { itunes: { appId: app.appStoreId } } : {}),
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: app.themeColor },
    { media: "(prefers-color-scheme: dark)", color: "#071a26" },
  ],
};

export default function SpendwiseLayout({
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
