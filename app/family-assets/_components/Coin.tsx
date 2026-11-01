/**
 * The gold coin from the app icon: a rim, a face stamped with a heart,
 * and the icon's four-pointed sparkles beside it. Decorative.
 */
export function Coin({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 120 120"
      aria-hidden="true"
      focusable="false"
    >
      <g fill="var(--coin)" opacity="0.9">
        <path d="M106 4q1.6 7.4 9 9-7.4 1.6-9 9-1.6-7.4-9-9 7.4-1.6 9-9z" />
        <path d="M10 96q1.1 5 6 6-4.9 1.1-6 6-1.1-4.9-6-6 4.9-1 6-6z" />
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
      <circle
        cx="58"
        cy="62"
        r="29"
        fill="none"
        stroke="var(--coin-deep)"
        strokeWidth="2.5"
        opacity="0.55"
      />
      <path
        d="M58 80C47 72 41 66 41 58.5 41 53.5 44.8 50 49.2 50c3.8 0 6.6 2.3 8.8 5.6 2.2-3.3 5-5.6 8.8-5.6 4.4 0 8.2 3.5 8.2 8.5C75 66 69 72 58 80z"
        fill="var(--coin-deep)"
      />
    </svg>
  );
}
