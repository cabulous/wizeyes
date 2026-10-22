import type { Metadata } from "next";
import { extras, savingsRoom as app } from "@/content/apps/savings-room/app";
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
import { AccountsMarquee } from "./_components/AccountsMarquee";
import { featureVisuals } from "./_components/FeatureVisuals";
import { HeroVisual } from "./_components/HeroVisual";
import { RoomDemo } from "./_components/RoomDemo";
import styles from "./page.module.css";

export const metadata: Metadata = appPageMetadata(app);

export default function SavingsRoomPage() {
  return (
    <main>
      <JsonLd data={appJsonLd(app)} />
      <Hero app={app} visual={<HeroVisual app={app} />} />
      <AccountsMarquee />
      <section className={ui.section} aria-labelledby="room-title">
        <div className={`${ui.container} ${styles.room}`}>
          <SectionHeader id="room-title" section={extras.room} />
          <RoomDemo />
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
