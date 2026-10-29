import type { Metadata } from "next";
import { familyAssets as app } from "@/content/apps/familyassets/app";
import { LegalDocument } from "@/components/app-page/LegalDocument";
import { readLegalDoc } from "@/lib/content";
import { privacyMetadata } from "@/lib/metadata";

const doc = readLegalDoc(app.slug, "privacy");

export const metadata: Metadata = privacyMetadata(app, doc);

export default function FamilyAssetsPrivacyPage() {
  return <LegalDocument app={app} doc={doc} summary={app.privacy.points} />;
}
