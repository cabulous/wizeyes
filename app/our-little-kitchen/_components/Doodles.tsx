import type { CSSProperties } from "react";
import styles from "./Doodles.module.css";

/*
 * The icon's crayon marks (sprigs of leaves, sparkle dashes, a heart) and
 * its handwriting, drawn once here so the hero and the other clusters of
 * doodles around the page's main visuals share them.
 */

/** The crayon roughness every doodle uses. Render once per page, before any doodle. */
export function CrayonDefs() {
  return (
    <svg className={styles.defs} aria-hidden="true" focusable="false">
      <filter id="olk-crayon">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.9"
          numOctaves="2"
          seed="4"
        />
        <feDisplacementMap in="SourceGraphic" scale="2.2" />
      </filter>
    </svg>
  );
}

/** A stem with three almond leaves, like the sprigs beside the icon's pig. Starts at 0,0. */
export function Sprig({ x = 0, y = 0, turn = 0 }) {
  const leaf = "M0 0c7-9 20-11 30-4-7 9-20 11-30 4Z";
  return (
    <g transform={`translate(${x} ${y}) rotate(${turn})`}>
      <path
        className={styles.stem}
        d="M0 0c20 4 40 2 62-6"
        fill="none"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        className={styles.leaf}
        d={leaf}
        transform="translate(18 2) rotate(-50)"
      />
      <path
        className={styles.leaf}
        d={leaf}
        transform="translate(32 2) rotate(40)"
      />
      <path
        className={styles.leaf}
        d={leaf}
        transform="translate(58 -5) rotate(-15)"
      />
    </g>
  );
}

/** Two short dashes of yellow, like the sparkle beside the icon's rice bowl. Top-left at 0,0. */
export function Sparkle({ x = 0, y = 0 }) {
  return (
    <g
      className={styles.sparkle}
      transform={`translate(${x} ${y})`}
      strokeWidth="8"
      strokeLinecap="round"
      fill="none"
    >
      <path d="M4 20l20-16" />
      <path d="M12 52h26" />
    </g>
  );
}

/** The icon's little pink heart. Top-left at 0,0, 44 wide. */
export function Heart({ x = 0, y = 0 }) {
  return (
    <path
      className={styles.heart}
      transform={`translate(${x} ${y})`}
      d="M22 8c-6-10-22-8-22 6 0 12 22 22 22 22s22-10 22-22c0-14-16-16-22-6Z"
    />
  );
}

/** A pencil arrow, curving down and to the left. Flip it with CSS to point elsewhere. */
export function NoteArrow({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 80 60"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M72 6c-6 22-24 38-58 42" />
      <path d="m22 38-9 10 12 4" />
    </svg>
  );
}

const shapes = {
  sprig: { viewBox: "-6 -28 98 54", draw: <Sprig /> },
  sparkle: { viewBox: "0 0 46 60", draw: <Sparkle /> },
  heart: { viewBox: "-4 -2 52 42", draw: <Heart /> },
};

export type Mark = {
  /** Where the mark's centre sits in the element it's grouped around, as CSS `left` and `top`. */
  x: string;
  y: string;
  turn?: number;
  /** Width in px. */
  size?: number;
  /** Only where there's room around the element: hidden on phones. */
  wide?: boolean;
} & (
  | { kind: keyof typeof shapes }
  /** A handwritten note, with a pencil arrow if `arrow` says which way it points. */
  | { kind: "note"; text: string; arrow?: "down-left" | "down-right" }
);

/**
 * A group of the icon's doodles around one element, like the hero's: render
 * it inside a positioned box (the phone's stage, the icon's) and each mark
 * sits relative to that box.
 */
export function DoodleCluster({ marks }: { marks: Mark[] }) {
  return marks.map((mark, i) => {
    const style = {
      "--w": `${mark.size ?? 64}px`,
      "--turn": `${mark.turn ?? 0}deg`,
      left: mark.x,
      top: mark.y,
    } as CSSProperties;
    const className = `${styles.mark} ${mark.wide ? styles.wide : ""}`;

    if (mark.kind === "note") {
      return (
        <p
          key={i}
          className={`${className} ${styles.note}`}
          style={style}
          aria-hidden="true"
        >
          {mark.text}
          {mark.arrow && (
            <NoteArrow
              className={`${styles.arrow} ${mark.arrow === "down-right" ? styles.flip : ""}`}
            />
          )}
        </p>
      );
    }

    const shape = shapes[mark.kind];
    return (
      <svg
        key={i}
        className={className}
        style={style}
        viewBox={shape.viewBox}
        aria-hidden="true"
        focusable="false"
      >
        <g filter="url(#olk-crayon)">{shape.draw}</g>
      </svg>
    );
  });
}
