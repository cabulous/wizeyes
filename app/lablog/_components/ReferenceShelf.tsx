import { extras, presets } from "@/content/apps/lablog/app";
import styles from "./ReferenceShelf.module.css";

const rows = [presets.slice(0, 10), presets.slice(10)];

/**
 * A strip of the app's built-in tests drifting by like labels on a rack of
 * sample tubes: name, normal range and unit (presetupIndicators.json).
 */
export function ReferenceShelf() {
  return (
    <section className={styles.section} aria-labelledby="shelf-title">
      <p id="shelf-title" className={styles.caption}>
        {extras.shelf.label}
      </p>
      <div className={styles.rows}>
        {rows.map((tests, i) => (
          <div
            key={i}
            className={`${styles.row} ${i % 2 ? styles.reverse : ""}`}
          >
            <div className={styles.track}>
              <Labels tests={tests} />
              <Labels tests={tests} hidden />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Labels({
  tests,
  hidden = false,
}: {
  tests: typeof presets;
  hidden?: boolean;
}) {
  return (
    <ul
      className={`${styles.labels} ${hidden ? styles.copy : ""}`}
      aria-hidden={hidden || undefined}
    >
      {tests.map((test) => (
        <li key={test.name} className={styles.label}>
          <span className={styles.name}>{test.name}</span>
          <span className={styles.range}>
            {test.range}
            {test.unit && <small>{test.unit}</small>}
          </span>
        </li>
      ))}
    </ul>
  );
}
