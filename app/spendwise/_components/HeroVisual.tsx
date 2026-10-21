import type { AppContent } from "@/content/types";
import { AppIcon } from "@/components/app-page/AppIcon";
import { Icon } from "@/components/app-page/Icon";
import { PhoneTransactions } from "./PhoneTransactions";
import styles from "./HeroVisual.module.css";

/**
 * A bank alert lands, the parts Spendwise reads light up, and the new
 * transaction appears at the top of the list. The alert's wording follows
 * RBC's format from the app's parser tests.
 */
export function HeroVisual({ app }: { app: AppContent }) {
  return (
    <div
      className={styles.stage}
      role="img"
      aria-label="An RBC purchase alert for $37.32 at Walmart arrives by email, and Spendwise adds it to the top of its Transactions list."
    >
      <div className={styles.tile} />
      {/* The tag and the icon are placed on the phone, so they keep to its rows at any width. */}
      <div className={styles.phone}>
        <PhoneTransactions />
        <span className={styles.newTag}>New</span>
        <div className={styles.piggy}>
          <AppIcon app={app} size={112} decorative />
        </div>
      </div>

      <div className={styles.alert}>
        <div className={styles.alertHead}>
          <span className={styles.mailIcon}>
            <Icon name="mail" size={18} strokeWidth={2} />
          </span>
          <span className={styles.alertFrom}>
            <strong>RBC Royal Bank</strong>
            <span>Credit card purchase</span>
          </span>
          <span className={styles.alertTime}>now</span>
        </div>
        <p className={styles.alertBody}>
          A purchase of <mark className={styles.markAmount}>$37.32</mark> was
          made on your RBC Royal Bank credit card account ****
          <mark className={styles.markCard}>9788</mark> on{" "}
          <mark className={styles.markDate}>October 20, 2026</mark> towards{" "}
          <mark className={styles.markMerchant}>WALMART STORE #3064</mark>.
        </p>
      </div>

      <svg
        className={styles.arrow}
        viewBox="0 0 120 90"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path className={styles.arrowPath} d="M8 6c18 42 52 64 100 72" />
        <path className={styles.arrowHead} d="m96 66 13 12-15 7" />
      </svg>
    </div>
  );
}
