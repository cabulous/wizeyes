import type { ReactElement } from "react";

/**
 * The app's placeholder art (Assets.xcassets/PlaceholderArt), drawn for a
 * dish without a photo: one line drawing per category emoji, tinted with
 * the accent (PlaceholderArt in Components.swift). Paths copied from the
 * app's SVGs; the fallback is art-pot.
 */
const art: Record<string, ReactElement> = {
  "🍳": (
    <>
      <ellipse cx="86" cy="112" rx="56" ry="34" />
      <path d="M142 108 l42 -10" />
      <path d="M60 108 q-4 -18 20 -20 q18 -8 30 4 q20 2 14 20 q4 18 -22 18 q-14 8 -28 -2 q-20 -2 -14 -20" />
      <circle cx="90" cy="110" r="10" />
      <path d="M48 136 q38 18 76 0" />
      <path d="M28 172 h144" />
    </>
  ),
  "🥘": (
    <>
      <path d="M80 52 c-6 -8 6 -12 0 -20" />
      <path d="M100 48 c-6 -8 6 -12 0 -22" />
      <path d="M120 52 c-6 -8 6 -12 0 -20" />
      <ellipse cx="100" cy="96" rx="66" ry="18" />
      <path d="M34 96 v22 q0 24 66 24 q66 0 66 -24 v-22" />
      <path d="M34 102 q-14 -2 -16 8 q2 8 16 6" />
      <path d="M166 102 q14 -2 16 8 q-2 8 -16 6" />
      <circle cx="78" cy="94" r="5" />
      <circle cx="104" cy="90" r="4" />
      <path d="M118 98 q8 -6 14 0" />
      <path d="M84 104 l8 -2" />
      <path d="M28 172 h144" />
    </>
  ),
  "🍜": (
    <>
      <path d="M34 96 h132" />
      <path d="M38 96 q4 52 62 52 q58 0 62 -52" />
      <path d="M82 148 l-4 16 h44 l-4 -16" />
      <path d="M118 30 l-26 66" />
      <path d="M138 34 l-34 62" />
      <path d="M70 96 q-4 -14 6 -16 q10 2 4 16" />
      <path d="M84 96 q-2 -18 10 -20" />
      <path d="M62 112 q38 10 76 0" />
      <path d="M28 172 h144" />
    </>
  ),
  "🔥": (
    <>
      <path d="M44 104 h98 v8 q0 18 -18 18 h-62 q-18 0 -18 -18 z" />
      <path d="M142 108 h40" />
      <path d="M72 96 q-6 -10 2 -16" />
      <path d="M92 96 q-6 -12 4 -20" />
      <path d="M112 96 q-6 -10 2 -16" />
      <path d="M68 166 q-14 -18 4 -30 q-2 12 8 14 q-2 -16 14 -22 q-4 14 8 22 q8 -6 6 -14 q16 14 0 30" />
      <path d="M28 172 h144" />
    </>
  ),
  "🌮": (
    <>
      <path d="M36 142 q0 -70 64 -70 q64 0 64 70 z" />
      <path d="M50 142 q2 -52 50 -56 q48 4 50 56" />
      <path d="M54 100 q8 -14 20 -8 q8 -14 22 -6 q12 -12 24 -2 q14 -6 22 10" />
      <circle cx="80" cy="112" r="4" />
      <circle cx="110" cy="106" r="4" />
      <circle cx="128" cy="120" r="3" />
      <path d="M28 172 h144" />
      <path d="M30 156 q70 10 140 0" />
    </>
  ),
  "🕯️": (
    <>
      <path d="M56 160 v-62 h28 v62" />
      <path d="M70 98 v-10" />
      <path d="M70 88 q-10 -14 0 -30 q10 16 0 30" />
      <path d="M114 52 h40 q2 40 -20 46 q-22 -6 -20 -46" />
      <path d="M134 98 v52" />
      <path d="M118 160 q16 -8 32 0" />
      <path d="M116 72 h36" />
      <path d="M28 172 h144" />
    </>
  ),
  "🍪": (
    <>
      <circle cx="80" cy="126" r="38" />
      <circle cx="66" cy="114" r="4" />
      <circle cx="90" cy="108" r="3.5" />
      <circle cx="82" cy="134" r="4" />
      <circle cx="62" cy="140" r="3" />
      <circle cx="100" cy="132" r="3" />
      <path d="M124 96 a30 30 0 1 1 22 58" />
      <path d="M124 96 q-4 8 4 12 q-6 10 4 14 q-4 10 6 12 q2 10 8 20" />
      <circle cx="152" cy="116" r="3.5" />
      <circle cx="160" cy="136" r="3" />
      <path d="M28 172 h144" />
    </>
  ),
  "🫙": (
    <>
      <path d="M70 40 h60 v16 h-60 z" />
      <path d="M74 56 q-24 10 -24 36 v52 q0 18 18 18 h64 q18 0 18 -18 v-52 q0 -26 -24 -36" />
      <path d="M66 96 h68 v34 h-68 z" />
      <path d="M80 112 q8 -8 16 0 q8 8 16 0 q4 -4 8 -2" />
      <path d="M28 172 h144" />
    </>
  ),
  pot: (
    <>
      <path d="M84 40 c-6 -8 6 -12 0 -22" />
      <path d="M100 36 c-6 -8 6 -12 0 -24" />
      <path d="M116 40 c-6 -8 6 -12 0 -22" />
      <path d="M58 70 q42 -20 84 0" />
      <path d="M94 58 q6 -6 12 0" />
      <path d="M50 76 h100" />
      <path d="M56 76 v40 q0 30 30 30 h28 q30 0 30 -30 v-40" />
      <path d="M56 90 h-10 q-6 0 -6 6 q0 6 6 6 h10" />
      <path d="M144 90 h10 q6 0 6 6 q0 6 -6 6 h-10" />
      <path d="M34 160 h132" />
    </>
  ),
};

export function DishArt({
  emoji,
  className,
}: {
  emoji: string;
  className?: string;
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 200"
      fill="none"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {art[emoji] ?? art.pot}
    </svg>
  );
}
