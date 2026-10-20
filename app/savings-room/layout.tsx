import type { Metadata, Viewport } from "next";
import { Figtree, Fraunces } from "next/font/google";
import { savingsRoom as app } from "@/content/apps/savings-room/app";
import { AppFooter } from "@/components/app-page/AppFooter";
import { AppNav } from "@/components/app-page/AppNav";
import styles from "./theme.module.css";

// Fraunces with its SOFT axis echoes the icon's rounded clay; Figtree keeps body text friendly and clear.
const display = Fraunces({
  subsets: ["latin"],
  axes: ["SOFT", "WONK", "opsz"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const sans = Figtree({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

// Shared by the app page and its policy pages; each page adds its own title and description.
export const metadata: Metadata = {
  icons: {
    icon: "/apps/savings-room/icon-64.png",
    apple: "/apps/savings-room/icon-180.png",
  },
  twitter: { card: "summary_large_image" },
  // Safari's Smart App Banner, once the App Store ID is known.
  ...(app.appStoreId ? { itunes: { appId: app.appStoreId } } : {}),
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fbf4ee" },
    { media: "(prefers-color-scheme: dark)", color: "#17100d" },
  ],
};

export default function SavingsRoomLayout({
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
