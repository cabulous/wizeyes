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
import { CrayonDefs, DoodleCluster, type Mark } from "./_components/Doodles";
import { featureVisuals } from "./_components/FeatureVisuals";
import doodle from "./_components/Doodles.module.css";
import { HeroVisual } from "./_components/HeroVisual";

export const metadata: Metadata = appPageMetadata(app);

/*
 * The icon's leaves, sparkles and hearts, grouped around the page's main
 * visuals the way the hero groups them around its phone.
 */
const phoneDoodles: Mark[] = [
  { kind: "sprig", x: "8%", y: "82%", turn: -70, size: 120 },
  { kind: "sprig", x: "92%", y: "92%", turn: -120, size: 104 },
  { kind: "sparkle", x: "88%", y: "8%", size: 44 },
  { kind: "heart", x: "90%", y: "56%", turn: 10, size: 54 },
  {
    kind: "note",
    text: extras.notes.cook,
    x: "104%",
    y: "30%",
    turn: 6,
    arrow: "down-left",
    wide: true,
  },
];

const iconDoodles: Mark[] = [
  { kind: "sprig", x: "-32%", y: "62%", turn: 200, size: 104 },
  { kind: "sprig", x: "132%", y: "62%", turn: -20, size: 104 },
  { kind: "heart", x: "-16%", y: "4%", turn: -14, size: 44 },
  { kind: "sparkle", x: "118%", y: "0%", turn: 20, size: 40 },
  {
    kind: "note",
    text: extras.notes.cta,
    x: "200%",
    y: "28%",
    turn: 8,
    arrow: "down-left",
    wide: true,
  },
];

export default function OurLittleKitchenPage() {
  return (
    <main>
      <JsonLd data={appJsonLd(app)} />
      <CrayonDefs />
      <Hero app={app} visual={<HeroVisual app={app} />} />
      <section
        className={`${ui.section} ${doodle.clip}`}
        aria-labelledby="cook-title"
      >
        <div className={ui.container}>
          <CookDemo
            recipe={extras.cook.recipe}
            header={<SectionHeader id="cook-title" section={extras.cook} />}
            hint={extras.cook.hint}
            done={extras.cook.done}
            decoration={<DoodleCluster marks={phoneDoodles} />}
          />
        </div>
      </section>
      <FeatureGrid features={app.features} visuals={featureVisuals} />
      <Steps steps={app.steps} />
      <PrivacyPanel app={app} policyHref={`/${app.slug}/privacy`} />
      <Faq faq={app.faq} />
      <CtaBand
        app={app}
        iconDecoration={<DoodleCluster marks={iconDoodles} />}
      />
    </main>
  );
}
