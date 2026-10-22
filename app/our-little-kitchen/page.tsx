import type { Metadata } from "next";
import { ourLittleKitchen as app } from "@/content/apps/our-little-kitchen/app";
import { Hero } from "@/components/app-page/Hero";
import { appJsonLd, JsonLd } from "@/lib/jsonld";
import { appPageMetadata } from "@/lib/metadata";
import { HeroVisual } from "./_components/HeroVisual";

export const metadata: Metadata = appPageMetadata(app);

export default function OurLittleKitchenPage() {
  return (
    <main>
      <JsonLd data={appJsonLd(app)} />
      <Hero app={app} visual={<HeroVisual app={app} />} />
    </main>
  );
}
