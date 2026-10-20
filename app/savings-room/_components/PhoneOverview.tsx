import { RoomBar } from "./RoomBar";
import styles from "./PhoneOverview.module.css";

/**
 * The app's Overview screen (v1.7: Overview.swift, AccountRow.swift,
 * TransactionRow.swift, Theme.swift), rebuilt in HTML with sample numbers.
 * Layout, type and colours follow the app; the figures are illustrative.
 * Cards read --tilt-x and --tilt-y from TiltStage, like the app's DeviceTilt.
 */
const accounts = [
  {
    name: "🏖️ RRSP",
    rooms: [{ label: "2026", room: 18000, contributed: 11250 }],
  },
  {
    name: "💰 TFSA",
    rooms: [{ label: "2026", room: 7000, contributed: 4500 }],
    recurring: { amount: "+ $500.00", next: "Nov 1" },
  },
  {
    name: "🏠 FHSA",
    rooms: [
      { label: "2026", room: 8000, contributed: 8000 },
      { label: "Lifetime", room: 40000, contributed: 24000 },
    ],
  },
];

export function PhoneOverview() {
  return (
    <div className={styles.phone}>
      <div className={styles.screen}>
        <div className={styles.island} />
        <div className={styles.status}>
          <span>9:41</span>
          <StatusIcons />
        </div>
        <div className={styles.toolbar}>
          <span className={styles.toolButton}>
            <svg
              viewBox="0 0 24 24"
              width="1em"
              height="1em"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
            >
              <path d="M12 5v14M5 12h14" />
            </svg>
          </span>
          <span className={styles.toolButton}>
            <svg
              viewBox="0 0 24 24"
              width="1em"
              height="1em"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <circle cx="12" cy="12" r="9.5" />
              <circle
                cx="7.6"
                cy="12"
                r="1.1"
                fill="currentColor"
                stroke="none"
              />
              <circle
                cx="12"
                cy="12"
                r="1.1"
                fill="currentColor"
                stroke="none"
              />
              <circle
                cx="16.4"
                cy="12"
                r="1.1"
                fill="currentColor"
                stroke="none"
              />
            </svg>
          </span>
        </div>
        <p className={styles.largeTitle}>Overview</p>
        <div className={styles.list}>
          {accounts.map((account) => (
            <div key={account.name} className={styles.card}>
              <div className={styles.cardHead}>
                <span>{account.name}</span>
                <svg
                  viewBox="0 0 24 24"
                  width="0.6em"
                  height="0.6em"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 5 7 7-7 7" />
                </svg>
              </div>
              {account.rooms.map((room) => (
                <div key={room.label} className={styles.room}>
                  <RoomBar {...room} motion="fill" />
                </div>
              ))}
              {account.recurring && (
                <div className={styles.recurring}>
                  <span className={styles.dashed} />
                  <span className={styles.recurringRow}>
                    <span className={styles.credit}>
                      {account.recurring.amount}
                    </span>
                    <span className={styles.recurringNext}>
                      <RepeatIcon />
                      {account.recurring.next}
                    </span>
                  </span>
                </div>
              )}
            </div>
          ))}
          <p className={styles.eyebrow}>Recent Transactions</p>
          <div className={`${styles.card} ${styles.transactions}`}>
            <div className={styles.txRow}>
              <span className={styles.txAccount}>
                💰 TFSA
                <small>Payday top-up</small>
              </span>
              <span className={styles.txDate}>
                <RepeatIcon />
                Oct 1, 2026
              </span>
            </div>
            <div className={styles.txRow}>
              <span className={styles.credit}>+ $500.00</span>
              <span>Wealthsimple</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function RepeatIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="0.85em"
      height="0.85em"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 11V9.5A3.5 3.5 0 0 1 7.5 6H19m-3-3 3 3-3 3m4 4v1.5a3.5 3.5 0 0 1-3.5 3.5H5m3 3-3-3 3-3" />
    </svg>
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
