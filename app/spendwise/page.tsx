import type { Metadata } from "next";
import {
  alerts,
  banks,
  extras,
  spendwise as app,
} from "@/content/apps/spendwise/app";
import { AppIcon } from "@/components/app-page/AppIcon";
import { CtaBand } from "@/components/app-page/CtaBand";
import { Faq } from "@/components/app-page/Faq";
import { FeatureGrid } from "@/components/app-page/FeatureGrid";
import { Hero } from "@/components/app-page/Hero";
import { PrivacyPanel } from "@/components/app-page/PrivacyPanel";
import { SectionHeader } from "@/components/app-page/SectionHeader";
import { Steps } from "@/components/app-page/Steps";
import ui from "@/components/app-page/ui.module.css";
import { appJsonLd, JsonLd } from "@/lib/jsonld";
import { openGraphBase } from "@/lib/metadata";
import { AlertDemo } from "./_components/AlertDemo";
import { BankTape } from "./_components/BankTape";
import { featureVisuals } from "./_components/FeatureVisuals";
import { HeroVisual } from "./_components/HeroVisual";

export const metadata: Metadata = {
  title: { absolute: app.seoTitle },
  description: app.description,
  keywords: app.keywords,
  alternates: {
    canonical: `/${app.slug}`,
    types: { "text/markdown": `/${app.slug}.md` },
  },
  openGraph: {
    ...openGraphBase,
    title: app.seoTitle,
    description: app.description,
    url: `/${app.slug}`,
  },
};

export default function SpendwisePage() {
  return (
    <main>
      <JsonLd data={appJsonLd(app)} />
      <Hero app={app} visual={<HeroVisual app={app} />} />
      <BankTape
        label={extras.banks.label}
        banks={banks}
        facts={app.hero.facts}
      />
      <section className={ui.section} aria-labelledby="alerts-title">
        <div className={ui.container}>
          <AlertDemo
            alerts={alerts}
            header={<SectionHeader id="alerts-title" section={extras.alerts} />}
            icon={<AppIcon app={app} size={22} decorative />}
            pick={extras.alerts.pick}
            added={extras.alerts.added}
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
