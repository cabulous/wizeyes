import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import { lablog as app } from "@/content/apps/lablog/app";
import { AppFooter } from "@/components/app-page/AppFooter";
import { AppNav } from "@/components/app-page/AppNav";
import styles from "./theme.module.css";

// A sharp editorial serif for headings, a clean grotesk for reading, and a
// monospace for the readings themselves, like a printed lab report.
const display = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const sans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

// Shared by the app page and its policy page; each page adds its own title and description.
export const metadata: Metadata = {
  icons: {
    icon: "/apps/lablog/icon-64.png",
    apple: "/apps/lablog/icon-180.png",
  },
  twitter: { card: "summary_large_image" },
  // Safari's Smart App Banner.
  ...(app.appStoreId ? { itunes: { appId: app.appStoreId } } : {}),
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: app.themeColor },
    { media: "(prefers-color-scheme: dark)", color: "#0f1214" },
  ],
};

export default function LablogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`${styles.theme} ${display.variable} ${sans.variable} ${mono.variable}`}
    >
      <AppNav app={app} />
      {children}
      <AppFooter app={app} />
    </div>
  );
}
