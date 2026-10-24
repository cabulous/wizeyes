"use client";

import { useRef, useState, type ReactNode } from "react";
import {
  newVisit,
  thyroidPanel,
  type SampleTest,
} from "@/content/apps/lablog/app";
import { PhoneFrame } from "@/components/app-page/PhoneFrame";
import { Chart } from "./Chart";
import {
  formatValue,
  latest,
  mediumDate,
  numericDate,
  rangeText,
  status,
} from "./lab";
import { PhoneList } from "./PhoneList";
import styles from "./VisitDemo.module.css";

/** "4,6" and "4.6" both read as 4.6; anything that isn't a number is empty. */
function parse(text: string): number | undefined {
  const value = Number.parseFloat(text.replace(",", "."));
  return Number.isFinite(value) ? value : undefined;
}

/** The test with the visit's value appended, when there is one. */
function withValue(test: SampleTest, text: string): SampleTest {
  const value = parse(text);
  return value === undefined
    ? test
    : { ...test, history: [...test.history, { date: newVisit.date, value }] };
}

/**
 * Add Results with a thyroid panel (BatchEntryView.swift): one date, a row
 * per test with its unit, range and last value, and a field that turns red
 * when the value is out of range. Beside it, the focused test's detail
 * screen (DetailView.swift), whose chart takes the typed value as its
 * newest point. The decimal pad and its toolbar (chevrons to move between
 * rows) type into the focused field. Save shows the list with the new
 * results. Renders the filled-in visit without JavaScript.
 */
export function VisitDemo({
  header,
  hint,
}: {
  header: ReactNode;
  hint: string;
}) {
  const [texts, setTexts] = useState(newVisit.values);
  const [focus, setFocus] = useState(0);
  const [saved, setSaved] = useState(false);
  const fields = useRef<(HTMLInputElement | null)[]>([]);

  const tests = thyroidPanel.map((test, i) => withValue(test, texts[i]));
  const filled = texts.filter((t) => parse(t) !== undefined).length;
  const shown = tests[focus];

  const update = (i: number, text: string) =>
    setTexts((all) => all.map((t, j) => (j === i ? text : t)));

  const press = (key: string) => {
    const text = texts[focus];
    if (key === "delete") update(focus, text.slice(0, -1));
    else if (key !== "." || !text.includes(".")) update(focus, text + key);
  };

  const move = (by: number) => {
    const next = Math.min(Math.max(focus + by, 0), thyroidPanel.length - 1);
    setFocus(next);
    fields.current[next]?.focus();
  };

  return (
    <div className={styles.demo}>
      <div className={styles.copy}>
        {header}
        <p className={styles.hint}>{hint}</p>
        <ul className={styles.legend}>
          <li>
            <span className={`${styles.ring} ${styles.in}`} /> In range
          </li>
          <li>
            <span className={`${styles.ring} ${styles.out}`} /> Below or above
          </li>
          <li>
            <span className={styles.red}>0.00</span> Out of range while typing
          </li>
        </ul>
        <button
          type="button"
          className={styles.reset}
          onClick={() => {
            setTexts(newVisit.values);
            setSaved(false);
          }}
          disabled={!saved && texts.every((t, i) => t === newVisit.values[i])}
        >
          Start over
        </button>
      </div>

      <div className={styles.bench}>
        <div className={styles.phone}>
          {saved ? (
            <PhoneList
              tests={tests}
              fresh={tests
                .filter((_, i) => parse(texts[i]) !== undefined)
                .map((t) => t.name)}
            />
          ) : (
            <PhoneFrame screenClassName={styles.screen}>
              <div className={styles.nav}>
                <span className={styles.navButton} aria-hidden="true">
                  Cancel
                </span>
                <span className={styles.navTitle}>Add Results</span>
                <button
                  type="button"
                  className={styles.save}
                  disabled={filled === 0}
                  onClick={() => setSaved(true)}
                >
                  Save ({filled})
                </button>
              </div>
              <div className={styles.form}>
                <div className={styles.group}>
                  <div className={styles.cell}>
                    <span>Date</span>
                    <span className={styles.datePill}>
                      {mediumDate(newVisit.date)}
                    </span>
                  </div>
                </div>
                <p className={styles.groupHeader}>Results</p>
                <div className={styles.group}>
                  {thyroidPanel.map((test, i) => (
                    <EntryRow
                      key={test.name}
                      test={test}
                      text={texts[i]}
                      focused={focus === i}
                      inputRef={(el) => {
                        fields.current[i] = el;
                      }}
                      onFocus={() => setFocus(i)}
                      onChange={(text) => update(i, text)}
                    />
                  ))}
                </div>
              </div>
              <Keypad onKey={press} onMove={move} />
            </PhoneFrame>
          )}
        </div>

        <Detail test={shown} />
      </div>
    </div>
  );
}

function EntryRow({
  test,
  text,
  focused,
  inputRef,
  onFocus,
  onChange,
}: {
  test: SampleTest;
  text: string;
  focused: boolean;
  inputRef: (el: HTMLInputElement | null) => void;
  onFocus: () => void;
  onChange: (text: string) => void;
}) {
  const value = parse(text);
  const out =
    value !== undefined && status(value, test.low, test.high) === "out";
  const last = latest(test);
  const details = [
    test.unit,
    rangeText(test.low, test.high),
    last && `last ${formatValue(last.value)}`,
  ]
    .filter(Boolean)
    .join(" · ");
  const id = `visit-${test.name.replace(/\W+/g, "-").toLowerCase()}`;

  return (
    <div className={`${styles.cell} ${focused ? styles.focused : ""}`}>
      <label htmlFor={id} className={styles.rowLabel}>
        <span className={styles.rowName}>{test.name}</span>
        <span className={styles.rowDetails}>{details}</span>
      </label>
      <input
        id={id}
        ref={inputRef}
        className={`${styles.field} ${out ? styles.fieldOut : ""}`}
        inputMode="decimal"
        autoComplete="off"
        placeholder="0"
        value={text}
        onFocus={onFocus}
        onChange={(e) => {
          onFocus();
          onChange(e.target.value);
        }}
      />
    </div>
  );
}

const keys = [
  ["1", ""],
  ["2", "ABC"],
  ["3", "DEF"],
  ["4", "GHI"],
  ["5", "JKL"],
  ["6", "MNO"],
  ["7", "PQRS"],
  ["8", "TUV"],
  ["9", "WXYZ"],
  [".", ""],
  ["0", ""],
  ["delete", ""],
];

/**
 * The decimal pad, under BatchEntryView's keyboard toolbar: previous and
 * next row, then dismiss. Pointer only and hidden from assistive tech, as
 * the fields themselves take typing; pressing a key keeps the field focused.
 */
function Keypad({
  onKey,
  onMove,
}: {
  onKey: (key: string) => void;
  onMove: (by: number) => void;
}) {
  const hold = (action: () => void) => ({
    tabIndex: -1,
    onPointerDown: (e: React.PointerEvent) => {
      e.preventDefault();
      action();
    },
  });
  return (
    <div className={styles.keyboard} aria-hidden="true">
      <div className={styles.keyToolbar}>
        <button type="button" {...hold(() => onMove(-1))}>
          <Chevron turn={180} />
        </button>
        <button type="button" {...hold(() => onMove(1))}>
          <Chevron turn={0} />
        </button>
        <span className={styles.keyDismiss}>
          <svg
            viewBox="0 0 26 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          >
            <rect x="1.5" y="1.5" width="23" height="12" rx="2" />
            <path d="M6 5.5h1M10 5.5h1M14 5.5h1M18 5.5h1M8 9.5h9M10 17l3 2 3-2" />
          </svg>
        </span>
      </div>
      <div className={styles.keys}>
        {keys.map(([key, letters]) => (
          <button
            key={key}
            type="button"
            className={key === "." || key === "delete" ? styles.keyPlain : ""}
            {...hold(() => onKey(key))}
          >
            {key === "delete" ? (
              <svg
                viewBox="0 0 26 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinejoin="round"
                strokeLinecap="round"
              >
                <path d="M8.5 2H23a1.5 1.5 0 0 1 1.5 1.5v13A1.5 1.5 0 0 1 23 18H8.5L1.5 10Z" />
                <path d="m12 6.5 7 7m0-7-7 7" />
              </svg>
            ) : (
              <>
                {key}
                {letters && <small>{letters}</small>}
              </>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}

function Chevron({ turn }: { turn: number }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ rotate: `${turn}deg` }}
    >
      <path d="m4 7 6 6 6-6" />
    </svg>
  );
}

/** DetailView.swift: latest value, the normal range, the chart and every result. */
function Detail({ test }: { test: SampleTest }) {
  const last = latest(test)!;
  const raw = (n: number) => (Number.isInteger(n) ? n.toFixed(1) : `${n}`);
  const range =
    test.high === undefined
      ? `> ${raw(test.low)}`
      : `${raw(test.low)} - ${raw(test.high)}`;

  return (
    <div className={styles.detail} aria-live="polite">
      <p className={styles.detailTitle}>{test.name}</p>
      <p className={styles.detailValue}>
        <strong>{formatValue(last.value)}</strong> {test.unit}
      </p>
      <p className={styles.detailLabel}>Latest</p>
      <p className={styles.detailRange}>
        Normal Range: {range} {test.unit}
      </p>
      <Chart
        className={styles.detailChart}
        readings={test.history}
        low={test.low}
        high={test.high}
        axes
        width={240}
        height={136}
      />
      <ul className={styles.history}>
        {[...test.history]
          .reverse()
          .slice(0, 4)
          .map((r) => (
            <li key={r.date}>
              <span>
                {formatValue(r.value)} {test.unit}
              </span>
              <span>{numericDate(r.date)}</span>
            </li>
          ))}
      </ul>
    </div>
  );
}
