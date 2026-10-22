import type { Metadata } from "next";
import {
  extras,
  ourLittleKitchen as app,
} from "@/content/apps/our-little-kitchen/app";
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
import { CookDemo } from "./_components/CookDemo";
import { featureVisuals } from "./_components/FeatureVisuals";
import { HeroVisual } from "./_components/HeroVisual";

export const metadata: Metadata = appPageMetadata(app);

export default function OurLittleKitchenPage() {
  return (
    <main>
      <JsonLd data={appJsonLd(app)} />
      <Hero app={app} visual={<HeroVisual app={app} />} />
      <section className={ui.section} aria-labelledby="cook-title">
        <div className={ui.container}>
          <CookDemo
            recipe={extras.cook.recipe}
            header={<SectionHeader id="cook-title" section={extras.cook} />}
            hint={extras.cook.hint}
            done={extras.cook.done}
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
