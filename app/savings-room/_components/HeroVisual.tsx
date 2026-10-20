import type { AppContent } from "@/content/types";
import { AppIcon } from "@/components/app-page/AppIcon";
import { Icon, type IconName } from "@/components/app-page/Icon";
import { PhoneOverview } from "./PhoneOverview";
import { TiltStage } from "./TiltStage";
import styles from "./HeroVisual.module.css";

const chips: {
  icon: IconName;
  title: string;
  detail: string;
  className: string;
}[] = [
  {
    icon: "lock",
    title: "Face ID lock",
    detail: "Optional, on device",
    className: styles.chipLock,
  },
  {
    icon: "repeat",
    title: "+$500 to TFSA",
    detail: "Monthly, on the 1st",
    className: styles.chipRepeat,
  },
  {
    icon: "cloud",
    title: "Your iCloud",
    detail: "Synced privately",
    className: styles.chipCloud,
  },
];

/**
 * The phone resting on a coral clay tile, echoing the piggy on the app icon.
 * Its cards tilt with the pointer, as they tilt with the device in the app.
 */
export function HeroVisual({ app }: { app: AppContent }) {
  return (
    <TiltStage
      className={styles.stage}
      label="Savings Room's Overview screen with sample RRSP, TFSA and FHSA accounts, each showing how much has been contributed and how much room is left this year."
    >
      <div className={styles.tile} />
      <div className={styles.phone}>
        <PhoneOverview />
      </div>
      <div className={styles.piggy}>
        <AppIcon app={app} size={128} decorative priority />
      </div>
      {chips.map((chip) => (
        <div key={chip.title} className={`${styles.chip} ${chip.className}`}>
          <span className={styles.chipIcon}>
            <Icon name={chip.icon} size={18} />
          </span>
          <span className={styles.chipText}>
            <strong>{chip.title}</strong>
            <span>{chip.detail}</span>
          </span>
        </div>
      ))}
    </TiltStage>
  );
}
