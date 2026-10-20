import { Icon } from "@/components/app-page/Icon";
import { money } from "./money";
import styles from "./FeatureVisuals.module.css";

/**
 * Small illustrations for each feature card, keyed by feature id in
 * content/apps/savings-room/app.ts. Each one shows the real behaviour:
 * FHSA limits from the app's template, the app's month-day picker, and the
 * app's Contribution / Withdraw styling.
 */
export const featureVisuals = {
  limits: <Limits />,
  recurring: <Recurring />,
  banks: <Banks />,
  withdrawals: <Withdrawals />,
  lock: <Lock />,
  currency: <Currencies />,
};

function Limits() {
  const years = [
    { year: "2024", used: 8000 },
    { year: "2025", used: 8000 },
    { year: "2026", used: 5000 },
  ];
  return (
    <div className={styles.limits}>
      <p className={styles.limitsHead}>
        <span>🏠 FHSA</span>
        <span className={styles.muted}>$8,000 a year · $40,000 for life</span>
      </p>
      {years.map(({ year, used }) => (
        <Meter key={year} label={year} used={used} room={8000} />
      ))}
      <div className={styles.divider} />
      <Meter label="Lifetime" used={21000} room={40000} strong />
    </div>
  );
}

function Meter({
  label,
  used,
  room,
  strong = false,
}: {
  label: string;
  used: number;
  room: number;
  strong?: boolean;
}) {
  const full = used >= room;
  return (
    <div className={`${styles.meter} ${strong ? styles.meterStrong : ""}`}>
      <span className={styles.meterLabel}>{label}</span>
      <span className={styles.meterTrack}>
        <span
          className={styles.meterFill}
          style={{ width: `${(used / room) * 100}%` }}
        />
      </span>
      <span className={styles.meterValue}>
        {full ? "Full" : `${money(room - used).replace(".00", "")} left`}
      </span>
    </div>
  );
}

function Recurring() {
  const picked = new Set([1, 15]);
  return (
    <div className={styles.calendar}>
      {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
        <span
          key={day}
          className={picked.has(day) ? styles.dayPicked : styles.day}
        >
          {day}
        </span>
      ))}
      <span className={styles.lastDay}>Last Day</span>
    </div>
  );
}

function Banks() {
  const banks = [
    { name: "Wealthsimple", amount: 3000 },
    { name: "TD", amount: 1000 },
    { name: "RBC", amount: 500 },
  ];
  return (
    <ul className={styles.banks}>
      {banks.map((bank) => (
        <li key={bank.name}>
          <span className={styles.bankName}>
            <Icon name="bank" size={16} />
            {bank.name}
          </span>
          <span>{money(bank.amount)}</span>
        </li>
      ))}
    </ul>
  );
}

function Withdrawals() {
  return (
    <div className={styles.flows}>
      <span className={styles.credit}>
        <small>Contribution</small>+ {money(1000)}
      </span>
      <span className={styles.debit}>
        <small>Withdraw</small>
        {money(400)}
      </span>
    </div>
  );
}

function Lock() {
  return (
    <div className={styles.lock}>
      <span className={styles.lockRing} />
      <span className={styles.lockRing} />
      <span className={styles.lockBadge}>
        <Icon name="lock" size={30} />
      </span>
    </div>
  );
}

function Currencies() {
  return (
    <div className={styles.currencies}>
      {["CAD", "USD", "EUR", "GBP", "AUD", "JPY"].map((code) => (
        <span key={code}>{code}</span>
      ))}
      <span className={styles.more}>+135</span>
    </div>
  );
}
