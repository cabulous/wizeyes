import type { AppContent } from "@/content/types";
import { AppIcon } from "@/components/app-page/AppIcon";
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
        can&apos;t decide?
        <br />
        tap Shuffle!
        <svg
          className={styles.noteArrow}
          viewBox="0 0 80 60"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M72 6c-6 22-24 38-58 42" />
          <path d="m22 38-9 10 12 4" />
        </svg>
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
      <defs>
        {/* A little roughness so the strokes read as crayon, not vector. */}
        <filter id="olk-crayon">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.9"
            numOctaves="2"
            seed="4"
          />
          <feDisplacementMap in="SourceGraphic" scale="2.2" />
        </filter>
      </defs>
      <g filter="url(#olk-crayon)" strokeLinecap="round">
        <Sprig x={58} y={430} turn={-70} />
        <Sprig x={478} y={590} turn={-120} />
        <g className={styles.sparkle} strokeWidth="8" fill="none">
          <path d="M466 118l20-16" />
          <path d="M474 150h26" />
        </g>
        <path
          className={styles.heart}
          d="M500 470c-6-10-22-8-22 6 0 12 22 22 22 22s22-10 22-22c0-14-16-16-22-6Z"
        />
      </g>
    </svg>
  );
}

/** A stem with three almond leaves, like the sprigs beside the icon's pig. */
function Sprig({ x, y, turn }: { x: number; y: number; turn: number }) {
  const leaf = "M0 0c7-9 20-11 30-4-7 9-20 11-30 4Z";
  return (
    <g transform={`translate(${x} ${y}) rotate(${turn})`}>
      <path
        className={styles.stem}
        d="M0 0c20 4 40 2 62-6"
        fill="none"
        strokeWidth="4"
      />
      <path
        className={styles.leafFill}
        d={leaf}
        transform="translate(18 2) rotate(-50)"
      />
      <path
        className={styles.leafFill}
        d={leaf}
        transform="translate(32 2) rotate(40)"
      />
      <path
        className={styles.leafFill}
        d={leaf}
        transform="translate(58 -5) rotate(-15)"
      />
    </g>
  );
}
