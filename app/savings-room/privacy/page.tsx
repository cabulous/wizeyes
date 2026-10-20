import type { Metadata } from "next";
import { savingsRoom as app } from "@/content/apps/savings-room/app";
import { LegalDocument } from "@/components/app-page/LegalDocument";
import { readLegalDoc } from "@/lib/content";
import { openGraphBase } from "@/lib/metadata";

const doc = readLegalDoc(app.slug, "privacy");

const title = `${app.name} ${doc.title}`;
const description = `How ${app.name} handles your data: everything stays on your device and in your iCloud. ${app.name} does not collect, transmit or store personal information.`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `/${app.slug}/privacy` },
  openGraph: {
    ...openGraphBase,
    title,
    description,
    url: `/${app.slug}/privacy`,
  },
};

export default function SavingsRoomPrivacyPage() {
  return <LegalDocument app={app} doc={doc} summary={app.privacy.points} />;
}
