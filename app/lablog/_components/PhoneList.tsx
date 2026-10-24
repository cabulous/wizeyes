import type { SampleTest } from "@/content/apps/lablog/app";
import { PhoneFrame } from "@/components/app-page/PhoneFrame";
import { Chart } from "./Chart";
import { formatValue, latest, mediumDate } from "./lab";
import styles from "./PhoneList.module.css";

/**
 * Mirrors ListView.swift: Filter, Sort and + in the toolbar, a search field,
 * and one row per test (IndicatorLabelView): an orange star if it's marked
 * as important, the name, the latest result's date and its value in the
 * monospace, and its last three results as a small chart. The List and Help
 * tabs below (ContentView.swift). Cells sit on graph paper and the tint is
 * the tube's orange, both from SharedUtill/Theme.swift.
 */
export function PhoneList({
  tests,
  fresh = [],
}: {
  tests: SampleTest[];
  /** Names of tests whose latest result was just saved: their rows light up. */
  fresh?: string[];
}) {
  return (
    <PhoneFrame screenClassName={styles.screen}>
      <div className={styles.toolbar}>
        <span>Filter</span>
        <span>Sort</span>
        <Glyph name="plus" />
      </div>
      <div className={styles.search}>
        <Glyph name="search" />
        Search
      </div>
      <ul className={styles.list}>
        {tests.map((test) => (
          <Row key={test.name} test={test} fresh={fresh.includes(test.name)} />
        ))}
      </ul>
      <TabBar />
    </PhoneFrame>
  );
}

function Row({ test, fresh }: { test: SampleTest; fresh: boolean }) {
  const last = latest(test);
  return (
    <li className={`${styles.row} ${fresh ? styles.fresh : ""}`}>
      <div className={styles.rowBody}>
        <p className={styles.name}>
          {test.important && <Glyph name="star" />}
          <span>{test.name}</span>
        </p>
        {last && (
          <div className={styles.reading}>
            <div>
              <p className={styles.date}>{mediumDate(last.date)}</p>
              <p className={styles.value}>
                <strong>{formatValue(last.value)}</strong>
                <span>{test.unit}</span>
              </p>
            </div>
            <Chart
              className={styles.mini}
              readings={test.history.slice(-3)}
              low={test.low}
              high={test.high}
            />
          </div>
        )}
      </div>
      <Glyph name="chevron" />
    </li>
  );
}

function TabBar() {
  return (
    <div className={styles.tabs} aria-hidden="true">
      <span className={styles.tabActive}>
        <Glyph name="list" />
        List
      </span>
      <span>
        <Glyph name="help" />
        Help
      </span>
    </div>
  );
}

const glyphClass = {
  plus: "gPlus",
  search: "gSearch",
  star: "gStar",
  chevron: "gChevron",
  list: "gTab",
  help: "gTab",
} as const;

/** The SF Symbols the screen uses, redrawn. */
export function Glyph({
  name,
}: {
  name: "plus" | "search" | "star" | "chevron" | "list" | "help";
}) {
  const common = {
    className: `${styles.glyph} ${styles[glyphClass[name]]}`,
    "aria-hidden": true,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (name) {
    case "plus":
      return (
        <svg viewBox="0 0 20 20" {...common}>
          <path d="M10 3v14M3 10h14" />
        </svg>
      );
    case "search":
      return (
        <svg viewBox="0 0 20 20" {...common}>
          <circle cx="8.5" cy="8.5" r="5.5" />
          <path d="m13 13 4 4" />
        </svg>
      );
    case "star":
      return (
        <svg viewBox="0 0 20 20" {...common} fill="currentColor" stroke="none">
          <path d="m10 1.8 2.5 5.3 5.8.7-4.3 4 1.1 5.7L10 14.7l-5.1 2.8L6 11.8l-4.3-4 5.8-.7Z" />
        </svg>
      );
    case "chevron":
      return (
        <svg viewBox="0 0 10 16" {...common} strokeWidth={2.2}>
          <path d="m2 2 6 6-6 6" />
        </svg>
      );
    case "list":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M9 6h12M9 12h12M9 18h12" />
          <circle cx="4" cy="6" r="1.2" fill="currentColor" />
          <circle cx="4" cy="12" r="1.2" fill="currentColor" />
          <circle cx="4" cy="18" r="1.2" fill="currentColor" />
        </svg>
      );
    case "help":
      return (
        <svg viewBox="0 0 24 24" {...common} strokeWidth={1.8}>
          <circle cx="12" cy="12" r="9.5" />
          <path d="M9.4 9.3a2.7 2.7 0 1 1 3.8 2.5c-.8.4-1.2 1-1.2 1.8v.5" />
          <circle cx="12" cy="17.2" r="0.6" fill="currentColor" />
        </svg>
      );
  }
}
