import type { Metadata } from "next";
import { lablog as app } from "@/content/apps/lablog/app";
import { LegalDocument } from "@/components/app-page/LegalDocument";
import { readLegalDoc } from "@/lib/content";
import { privacyMetadata } from "@/lib/metadata";

const doc = readLegalDoc(app.slug, "privacy");

export const metadata: Metadata = privacyMetadata(app, doc);

export default function LablogPrivacyPage() {
  return <LegalDocument app={app} doc={doc} summary={app.privacy.points} />;
}
