import type { AppContent } from "@/content/types";
import { AppIcon } from "@/components/app-page/AppIcon";
import { extras } from "@/content/apps/our-little-kitchen/app";
import { Heart, NoteArrow, Sparkle, Sprig } from "./Doodles";
import { PhoneHome } from "./PhoneHome";
import styles from "./HeroVisual.module.css";

/**
 * Home on the phone, tucked against a handwritten recipe card, with the
 * icon's crayon doodles around it: leaves, sparkle dashes and a heart.
 * A note in the margin points at Shuffle.
 */
export function HeroVisual({ app }: { app: AppContent }) {
  return (
    <div
      className={styles.stage}
      role="img"
      aria-label="Our Little Kitchen's Home screen: Add a dish, today's Chef's pick of coconut chicken curry with a Shuffle button, and the shared Favourites."
    >
      <div className={styles.card}>
        <p className={styles.cardTitle}>Sunday noodles</p>
        <p className={styles.cardLine}>noodles, spring onion, chilli oil</p>
        <p className={styles.cardLine}>1. boil, rinse, toss…</p>
      </div>

      <Doodles />

      <div className={styles.phone}>
        <PhoneHome />
      </div>

      <p className={styles.note}>
        {extras.notes.shuffle}
        <NoteArrow className={styles.noteArrow} />
      </p>

      <div className={styles.icon}>
        <AppIcon app={app} size={104} decorative priority />
      </div>
    </div>
  );
}

/** The icon's crayon marks: two sprigs of leaves, sparkle dashes and a heart. */
function Doodles() {
  return (
    <svg className={styles.doodles} viewBox="0 0 540 640" aria-hidden="true">
      <g filter="url(#olk-crayon)">
        <Sprig x={58} y={430} turn={-70} />
        <Sprig x={478} y={590} turn={-120} />
        <Sparkle x={462} y={98} />
        <Heart x={478} y={462} />
      </g>
    </svg>
  );
}
