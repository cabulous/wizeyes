import type { Metadata } from "next";
import { extras, lablog as app } from "@/content/apps/lablog/app";
import { CtaBand } from "@/components/app-page/CtaBand";
import { Faq } from "@/components/app-page/Faq";
import { FeatureGrid } from "@/components/app-page/FeatureGrid";
import { Hero } from "@/components/app-page/Hero";
import { PrivacyPanel } from "@/components/app-page/PrivacyPanel";
import { SectionHeader } from "@/components/app-page/SectionHeader";
import { Steps } from "@/components/app-page/Steps";
import ui from "@/components/app-page/ui.module.css";
import { appJsonLd, JsonLd } from "@/lib/jsonld";
import { appPageMetadata } from "@/lib/metadata";
import { featureVisuals } from "./_components/FeatureVisuals";
import { HeroVisual } from "./_components/HeroVisual";
import { ReferenceShelf } from "./_components/ReferenceShelf";
import { VisitDemo } from "./_components/VisitDemo";

export const metadata: Metadata = appPageMetadata(app);

export default function LablogPage() {
  return (
    <main>
      <JsonLd data={appJsonLd(app)} />
      <Hero app={app} visual={<HeroVisual />} />
      <ReferenceShelf />
      <section className={ui.section} aria-labelledby="visit-title">
        <div className={ui.container}>
          <VisitDemo
            header={<SectionHeader id="visit-title" section={extras.visit} />}
            hint={extras.visit.hint}
          />
        </div>
      </section>
      <FeatureGrid features={app.features} visuals={featureVisuals} />
      <Steps steps={app.steps} />
      <PrivacyPanel app={app} policyHref={`/${app.slug}/privacy`} />
      <Faq faq={app.faq} />
      <CtaBand app={app} />
    </main>
  );
}
