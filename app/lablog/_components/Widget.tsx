import type { SampleTest } from "@/content/apps/lablog/app";
import { formatValue, latest, status } from "./lab";
import styles from "./Widget.module.css";

/**
 * Mirrors IndicatorWidgets.swift: up to four tests in the small and medium
 * sizes, sorted by name, on the notebook's paper (Theme.paper). Each has a
 * dot for its latest result (green in range, yellow out, glass with none)
 * and the value, semibold, in the monospace.
 */
export function Widget({
  tests,
  size = "small",
  className = "",
}: {
  tests: SampleTest[];
  size?: "small" | "medium";
  className?: string;
}) {
  const rows = [...tests].sort((a, b) => a.name.localeCompare(b.name));
  return (
    <div className={`${styles.widget} ${styles[size]} ${className}`}>
      <ul>
        {rows.slice(0, 4).map((test) => {
          const last = latest(test);
          return (
            <li key={test.name}>
              <span
                className={`${styles.dot} ${styles[last ? status(last.value, test.low, test.high) : "none"]}`}
              />
              <span className={styles.name}>{test.name}</span>
              {last && <b>{formatValue(last.value)}</b>}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
