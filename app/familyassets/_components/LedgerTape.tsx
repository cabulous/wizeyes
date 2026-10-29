import { extras, ledger } from "@/content/apps/familyassets/app";
import { Glyph } from "./Glyph";
import styles from "./LedgerTape.module.css";

/**
 * A strip of ledger paper drifting past: the categories a new install
 * starts with, for assets and for debts, between the kinds of activity it
 * records. Pauses on hover; still and wrapped with reduced motion.
 */
export function LedgerTape() {
  return (
    <section className={styles.tape} aria-label={extras.ledger.label}>
      <div className={styles.track}>
        <Entries />
        <Entries hidden />
      </div>
    </section>
  );
}

function Entries({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul
      className={`${styles.entries} ${hidden ? styles.copy : ""}`}
      aria-hidden={hidden || undefined}
    >
      {ledger.map((entry) => (
        <li
          key={entry.label}
          className={
            entry.kind === "Activity"
              ? styles.activity
              : entry.kind === "Debt"
                ? styles.debt
                : styles.asset
          }
        >
          {entry.icon && <Glyph name={entry.icon} />}
          {entry.label}
          <small>{entry.kind}</small>
        </li>
      ))}
    </ul>
  );
}
