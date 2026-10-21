import type { ReactNode } from "react";
import styles from "./PhoneFrame.module.css";

/**
 * An iPhone with a Dynamic Island and status bar, for app screens rebuilt in
 * HTML. Children draw the screen below the status bar. Everything is sized
 * in iOS points via --pt; the frame's finish comes from --phone-frame and
 * --phone-shadow, so each app theme can style it.
 */
export function PhoneFrame({
  children,
  screenClassName = "",
}: {
  children: ReactNode;
  screenClassName?: string;
}) {
  return (
    <div className={styles.phone}>
      <div className={`${styles.screen} ${screenClassName}`}>
        <div className={styles.island} />
        <div className={styles.status}>
          <span>9:41</span>
          <StatusIcons />
        </div>
        {children}
      </div>
    </div>
  );
}

function StatusIcons() {
  return (
    <span className={styles.statusIcons}>
      <svg
        viewBox="0 0 18 12"
        width="1.06em"
        height="0.7em"
        fill="currentColor"
      >
        <rect x="0" y="8" width="3" height="4" rx="1" />
        <rect x="5" y="5.5" width="3" height="6.5" rx="1" />
        <rect x="10" y="3" width="3" height="9" rx="1" />
        <rect x="15" y="0" width="3" height="12" rx="1" />
      </svg>
      <svg
        viewBox="0 0 16 12"
        width="0.95em"
        height="0.7em"
        fill="currentColor"
      >
        <path d="M8 2.2c2.3 0 4.4.9 6 2.4l1.3-1.4A10.6 10.6 0 0 0 8 .3 10.6 10.6 0 0 0 .7 3.2L2 4.6a8.7 8.7 0 0 1 6-2.4Zm0 3.7c1.3 0 2.5.5 3.4 1.3l1.3-1.4A6.8 6.8 0 0 0 8 4a6.8 6.8 0 0 0-4.7 1.8l1.3 1.4c.9-.8 2.1-1.3 3.4-1.3Zm0 3.7c-.5 0-1 .2-1.3.5L8 11.6l1.3-1.5c-.3-.3-.8-.5-1.3-.5Z" />
      </svg>
      <svg viewBox="0 0 27 13" width="1.6em" height="0.78em">
        <rect
          x="0.5"
          y="0.5"
          width="23"
          height="12"
          rx="3.8"
          fill="none"
          stroke="currentColor"
          strokeOpacity="0.4"
        />
        <rect x="2" y="2" width="20" height="9" rx="2.5" fill="currentColor" />
        <path
          d="M25 4.5v4c.8-.3 1.5-1.1 1.5-2s-.7-1.7-1.5-2Z"
          fill="currentColor"
          fillOpacity="0.45"
        />
      </svg>
    </span>
  );
}
