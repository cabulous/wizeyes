import type { ReactNode } from "react";
import {
  commonTests,
  thyroidPanel,
  type SampleTest,
} from "@/content/apps/lablog/app";
import { Chart } from "./Chart";
import { formatValue, latest, mediumDate, status } from "./lab";
import { Glyph } from "./PhoneList";
import { Widget } from "./Widget";
import styles from "./FeatureVisuals.module.css";

const all = [...commonTests, ...thyroidPanel];

/** VisitGroup.title: the first three names A–Z, then "+N". */
function groupTitle(tests: SampleTest[]): string {
  const names = tests
    .map((t) => t.name)
    .sort((a, b) => a.localeCompare(b, "en", { numeric: true }));
  const rest = names.length - 3;
  return names.slice(0, 3).join(", ") + (rest > 0 ? ` +${rest}` : "");
}

/** The sample visits, newest first, as BatchStartView lists them. */
const visits = [commonTests, thyroidPanel].map((tests) => ({
  title: groupTitle(tests),
  summary: `${tests.length} tests · Last: ${mediumDate(latest(tests[0])!.date)} · done ${tests[0].history.length}×`,
}));

/**
 * BatchStartView.swift: past visits to repeat, or choose the tests
 * yourself, under tube-label headers on graph paper (SharedUtill/Theme.swift).
 */
function Batch() {
  return (
    <div className={styles.sheet}>
      <div className={styles.sheetNav}>
        <span>Cancel</span>
        <b>Add Results</b>
        <span />
      </div>
      <p className={styles.groupHeader}>Same tests as a past visit</p>
      <ul className={styles.group}>
        {visits.map((visit) => (
          <li key={visit.title}>
            <span className={styles.stack}>
              <span>{visit.title}</span>
              <small>{visit.summary}</small>
            </span>
            <Glyph name="chevron" />
          </li>
        ))}
      </ul>
      <p className={styles.groupHeader}>Or</p>
      <ul className={styles.group}>
        <li>
          Choose tests…
          <Glyph name="chevron" />
        </li>
        <li>
          All indicators ({all.length})
          <Glyph name="chevron" />
        </li>
      </ul>
    </div>
  );
}

/**
 * A ruler for TSH's normal range with its results on it, coloured the way
 * Utils.color(forValue:low:high:) colours them. The site's own diagram: the
 * app draws the same colours on its charts.
 */
function Range() {
  const tsh = thyroidPanel[2];
  const [min, max] = [0, 8];
  const at = (v: number) => `${((v - min) / (max - min)) * 100}%`;
  return (
    <div className={styles.ruler}>
      <p className={styles.rulerHead}>
        <span>{tsh.name.replace(/ \(TSH\)$/, "")}</span>
        <span>{tsh.unit}</span>
      </p>
      <div className={styles.scale}>
        <span
          className={styles.band}
          style={{ left: at(tsh.low), right: `calc(100% - ${at(tsh.high!)})` }}
        />
        {tsh.history.map((r) => (
          <span
            key={r.date}
            className={`${styles.mark} ${styles[status(r.value, tsh.low, tsh.high)]}`}
            style={{ left: at(r.value) }}
          >
            <small>{formatValue(r.value)}</small>
          </span>
        ))}
      </div>
      <p className={styles.bounds}>
        <span style={{ left: at(tsh.low) }}>Low {formatValue(tsh.low)}</span>
        <span style={{ left: at(tsh.high!) }}>
          High {formatValue(tsh.high!)}
        </span>
      </p>
    </div>
  );
}

/**
 * DetailView.swift's chart, for Total Cholesterol: the serif title, the
 * latest value in the monospace, and the normal range shaded in orange.
 */
function Trend() {
  const test = commonTests[0];
  const last = latest(test)!;
  return (
    <div className={styles.card}>
      <p className={styles.cardTitle}>{test.name}</p>
      <p className={styles.cardValue}>
        <strong>{formatValue(last.value)}</strong> {test.unit}
      </p>
      <Chart
        readings={test.history}
        low={test.low}
        high={test.high}
        axes
        width={300}
        height={130}
      />
    </div>
  );
}

/**
 * PresetupIndicatorListView.swift, searched for the keyword "thyroid": stock
 * cells on graph paper, with selected tests and "Create" in the orange tint.
 */
function Presets() {
  const rows: { name: string; state: "selected" | "added" | "open" }[] = [
    { name: "Free T4", state: "added" },
    { name: "Free T3", state: "selected" },
    { name: "Thyroglobulin Antibodies", state: "selected" },
    { name: "Thyroglobulin", state: "open" },
    { name: "Thyroid Stimulating Hormone (TSH)", state: "added" },
  ];
  return (
    <div className={styles.sheet}>
      <div className={styles.searchField}>
        <Glyph name="search" />
        <span>thyroid</span>
      </div>
      <ul className={`${styles.group} ${styles.stock}`}>
        {rows.map((row) => (
          <li key={row.name} className={styles[row.state]}>
            <span className={styles.ellipsis}>{row.name}</span>
            {row.state === "selected" && <Check />}
            {row.state === "added" && <small>Added</small>}
            {row.state === "open" && <Glyph name="plus" />}
          </li>
        ))}
      </ul>
      <ul className={`${styles.group} ${styles.stock}`}>
        <li className={styles.create}>Create thyroid</li>
      </ul>
    </div>
  );
}

function Check() {
  return (
    <svg
      className={styles.check}
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m4 10.5 4 4 8-9" />
    </svg>
  );
}

/** The widget on a Home Screen wallpaper, filtered to the important tests. */
function HomeWidget() {
  return (
    <div className={styles.wallpaper}>
      <Widget tests={all.filter((t) => t.important)} />
      <span className={styles.widgetCaption}>Lablog</span>
    </div>
  );
}

/** The rows Export.swift writes: oldest test first, then each result by date. */
function Export() {
  const header = [
    "Indicator Name",
    "Unit",
    "Low",
    "High",
    "Is Important",
    "Keywords",
    "Test Date",
    "Test Value",
  ];
  const test = thyroidPanel[0];
  const rows = test.history.map((r) => [
    test.name,
    test.unit,
    test.low.toFixed(1),
    test.high!.toFixed(1),
    String(Boolean(test.important)),
    "thyroid",
    `${r.date} 08:30:00`,
    String(r.value),
  ]);
  return (
    <div className={styles.sheetFile}>
      <p className={styles.fileName}>
        <span className={styles.fileIcon}>CSV</span>
        lablog-2026-10-19-18-04-12.csv
      </p>
      <div className={styles.cells}>
        <table>
          <thead>
            <tr>
              {header.map((h) => (
                <th key={h}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row[6]}>
                {row.map((cell, i) => (
                  <td key={i}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export const featureVisuals: Record<string, ReactNode> = {
  batch: <Batch />,
  range: <Range />,
  trend: <Trend />,
  presets: <Presets />,
  widget: <HomeWidget />,
  export: <Export />,
};
