/**
 * The gold coin from the app icon: a rim, a face, and a zigzag arrow
 * rising to the right, with the icon's little bursts of light beside it.
 * Decorative.
 */
export function Coin({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 120 120"
      aria-hidden="true"
      focusable="false"
    >
      <g
        stroke="var(--coin)"
        strokeWidth="5"
        strokeLinecap="round"
        opacity="0.9"
      >
        <path d="M100 14l6-9M108 26l10-3M14 100l-9 6" />
      </g>
      <circle cx="58" cy="62" r="44" fill="var(--coin-deep)" />
      <circle cx="58" cy="62" r="37" fill="var(--coin)" />
      <circle
        cx="58"
        cy="62"
        r="37"
        fill="none"
        stroke="var(--coin-light)"
        strokeWidth="3"
        strokeDasharray="40 200"
        strokeDashoffset="-150"
        strokeLinecap="round"
      />
      <path
        d="M36 76l14-15 8 8 18-21M66 47h11v11"
        fill="none"
        stroke="var(--coin-deep)"
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
