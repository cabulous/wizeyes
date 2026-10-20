import { money } from "./money";
import styles from "./RoomBar.module.css";

/**
 * Web twin of the app's ContributionRoom view and RoomMeter: a serif label
 * and the room on top, a coral meter, then contributed (coral) and room left
 * (ink) underneath. Sizes are in em, so the parent's font-size scales it.
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
  const progress = room > 0 ? Math.min(Math.max(contributed / room, 0), 1) : 0;
  return (
    <div className={styles.room}>
      <div className={styles.row}>
        <span className={styles.label}>{label}</span>
        <span className={styles.limit}>{money(room)}</span>
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
