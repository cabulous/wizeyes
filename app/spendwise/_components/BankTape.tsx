import { Fragment } from "react";
import styles from "./BankTape.module.css";

/**
 * Two crossed strips of tape drifting in opposite directions: the banks the
 * parser knows on the navy one, the hero's facts on the pink one behind it.
 * Each list is drawn three times and drifts by one copy, so the strip stays
 * full on screens up to twice a copy's width (about 6,900px). The copies are
 * hidden from assistive tech, and so is the pink strip, which repeats the hero.
 */
export function BankTape({
  label,
  banks,
  facts,
}: {
  label: string;
  banks: string[];
  facts: string[];
}) {
  return (
    <section className={styles.section} aria-labelledby="banks-label">
      <div className={`${styles.tape} ${styles.back}`} aria-hidden="true">
        <div className={styles.track}>
          {[0, 1, 2].map((copy) => (
            <p key={copy} className={styles.items}>
              {[...facts, ...facts, ...facts, ...facts].map((fact, i) => (
                <Fragment key={i}>
                  <span>{fact}</span>
                  <Star />
                </Fragment>
              ))}
            </p>
          ))}
        </div>
      </div>

      <div className={`${styles.tape} ${styles.front}`}>
        <div className={styles.track}>
          {[0, 1, 2].map((copy) => (
            <div
              key={copy}
              className={`${styles.items} ${copy ? styles.copy : ""}`}
              aria-hidden={copy ? true : undefined}
            >
              <p className={styles.label} id={copy ? undefined : "banks-label"}>
                {label}
              </p>
              <ul className={styles.banks}>
                {banks.map((bank) => (
                  <li key={bank}>
                    {bank}
                    <Star />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Star() {
  return (
    <svg
      className={styles.star}
      viewBox="0 0 24 24"
      width="0.8em"
      height="0.8em"
      aria-hidden="true"
    >
      <path
        d="M12 2.5c.9 5.3 4.2 8.6 9.5 9.5-5.3.9-8.6 4.2-9.5 9.5-.9-5.3-4.2-8.6-9.5-9.5 5.3-.9 8.6-4.2 9.5-9.5Z"
        fill="currentColor"
      />
    </svg>
  );
}
