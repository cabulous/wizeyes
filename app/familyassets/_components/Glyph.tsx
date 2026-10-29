import type { ReactNode } from "react";
import type { SFSymbol } from "@/content/apps/familyassets/app";

type Name =
  | SFSymbol
  | "gear"
  | "arrow.right"
  | "chevron.right"
  | "chevron.left"
  | "calendar"
  | "calendar.badge.exclamationmark"
  | "square.and.arrow.up";

/**
 * The SF Symbols Family Assets uses, redrawn at 24 units. Sized in em, so
 * a glyph follows the text beside it, as an Image(systemName:) does.
 * Decorative: always next to the words it stands for.
 */
export function Glyph({
  name,
  className,
  size = "1.15em",
}: {
  name: Name;
  className?: string;
  size?: string;
}) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      style={{ flex: "none" }}
    >
      {paths[name]}
    </svg>
  );
}

const paths: Record<Name, ReactNode> = {
  house: (
    <>
      <path d="M3.5 11.5 12 4l8.5 7.5" />
      <path d="M6 9.8V20h12V9.8" />
      <path d="M10 20v-5.5h4V20" />
    </>
  ),
  "chart.line.uptrend.xyaxis": (
    <>
      <path d="M3.5 3.5v17h17" />
      <path d="m7 15.5 4-4.5 3 2.5 5.5-6.5" />
      <path d="M16 7h3.5v3.5" />
    </>
  ),
  "building.columns": (
    <>
      <path d="M3 9 12 4l9 5H3Z" />
      <path d="M6 11.5v6M10 11.5v6M14 11.5v6M18 11.5v6M3.5 20.5h17" />
    </>
  ),
  percent: (
    <>
      <path d="M18.5 5.5 5.5 18.5" />
      <circle cx="7.5" cy="7.5" r="2.5" />
      <circle cx="16.5" cy="16.5" r="2.5" />
    </>
  ),
  "dollarsign.circle": (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M14.8 9.2c-.5-1-1.5-1.6-2.8-1.6-1.6 0-2.8.8-2.8 2.1 0 1.4 1.3 1.8 2.8 2.2 1.6.4 3 .9 3 2.4 0 1.3-1.3 2.1-3 2.1-1.4 0-2.5-.6-3-1.7M12 6v1.6M12 16.4V18" />
    </>
  ),
  "chart.pie": (
    <>
      <path d="M10.5 4.6A8 8 0 1 0 19.4 13.5h-8.9V4.6Z" />
      <path d="M14 3a7 7 0 0 1 7 7h-7V3Z" />
    </>
  ),
  creditcard: (
    <>
      <rect x="2.5" y="5" width="19" height="14" rx="2.5" />
      <path d="M2.5 9.5h19M6 15h4" />
    </>
  ),
  gear: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2.8v2.4M12 18.8v2.4M2.8 12h2.4M18.8 12h2.4M5.5 5.5l1.7 1.7M16.8 16.8l1.7 1.7M5.5 18.5l1.7-1.7M16.8 7.2l1.7-1.7" />
      <circle cx="12" cy="12" r="6.6" />
    </>
  ),
  "arrow.right": <path d="M4 12h16M14 6l6 6-6 6" />,
  "chevron.right": <path d="m9 5 7 7-7 7" />,
  "chevron.left": <path d="m15 4-8 8 8 8" />,
  calendar: (
    <>
      <rect x="3.5" y="5" width="17" height="15.5" rx="2.5" />
      <path d="M3.5 10h17M8 3v4M16 3v4" />
    </>
  ),
  "calendar.badge.exclamationmark": (
    <>
      <path d="M14 20.5H6a2.5 2.5 0 0 1-2.5-2.5V7.5A2.5 2.5 0 0 1 6 5h10a2.5 2.5 0 0 1 2.5 2.5V11" />
      <path d="M3.5 10h15M8 3v4M14 3v4" />
      <circle cx="18.5" cy="17.5" r="4.5" fill="currentColor" stroke="none" />
      <path d="M18.5 15.3v2.6M18.5 19.9v.1" stroke="var(--ios-cell, #fff)" />
    </>
  ),
  "square.and.arrow.up": (
    <>
      <path d="M8 9H6.5A1.5 1.5 0 0 0 5 10.5v9A1.5 1.5 0 0 0 6.5 21h11a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 17.5 9H16" />
      <path d="M12 14V3M8.5 6.5 12 3l3.5 3.5" />
    </>
  ),
};
