import { money } from "./money";
import styles from "./RoomBar.module.css";

/**
 * Web twin of the app's ContributionRoom view: label and room on top, a
 * progress bar, then contributed (blue) and room left (green) underneath.
 * Sizes are in em, so the parent's font-size scales it.
 */
export function RoomBar({
  label,
  room,
  contributed,
  motion = "none",
}: {
  label: string;
  room: number;
  contributed: number;
  /** "fill" plays the app's fill-on-appear animation; "follow" eases to new values. */
  motion?: "none" | "fill" | "follow";
}) {
  const progress = room > 0 ? Math.min(contributed / room, 1) : 0;
  return (
    <div className={styles.room}>
      <div className={styles.row}>
        <span className={styles.secondary}>{label}</span>
        <span className={styles.secondary}>{money(room)}</span>
      </div>
      <div className={styles.track}>
        <div
          className={`${styles.fill} ${motion === "fill" ? styles.growIn : motion === "follow" ? styles.follow : ""}`}
          style={{ width: `${progress * 100}%` }}
        />
      </div>
      <div className={styles.row}>
        <span className={styles.contributed}>{money(contributed)}</span>
        <span className={styles.remaining}>{money(room - contributed)}</span>
      </div>
    </div>
  );
}
