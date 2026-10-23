import type { Metadata } from "next";
import { ourLittleKitchen as app } from "@/content/apps/our-little-kitchen/app";
import { LegalDocument } from "@/components/app-page/LegalDocument";
import { readLegalDoc } from "@/lib/content";
import { privacyMetadata } from "@/lib/metadata";

const doc = readLegalDoc(app.slug, "privacy");

export const metadata: Metadata = privacyMetadata(app, doc);

export default function OurLittleKitchenPrivacyPage() {
  return <LegalDocument app={app} doc={doc} summary={app.privacy.points} />;
}
