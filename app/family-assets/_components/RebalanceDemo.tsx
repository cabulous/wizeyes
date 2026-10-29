"use client";

import { useRef, useState, type ReactNode } from "react";
import { rebalancePortfolio } from "@/content/apps/family-assets/app";
import { PhoneFrame } from "@/components/app-page/PhoneFrame";
import { Glyph } from "./Glyph";
import { moneyISO, percent, rebalance } from "./money";
import { TabBar } from "./TabBar";
import ios from "./Ios.module.css";
import styles from "./RebalanceDemo.module.css";

const { active, inactive } = rebalancePortfolio;
const total = active.reduce((sum, c) => sum + c.value, 0);
const initialTargets = active.map((c) => c.target);

/**
 * Rebalance (InvestmentRebalance.swift), opened from the Assets tab. Each
 * category being rebalanced shows its icon and name, its share now and its
 * target ("69% → 60%"), then what to do: Buy in green, Sell in blue, both
 * in the base currency's ISO code, or On Target, with "within 5%
 * threshold" when the threshold is what keeps it there. Categories not
 * being rebalanced are listed as Off. The sliders stand in for the
 * category editor the app opens when you tap a row (tapping one here
 * focuses its slider). Renders the default targets without JavaScript.
 */
export function RebalanceDemo({
  header,
  hint,
}: {
  header: ReactNode;
  hint: string;
}) {
  const [targets, setTargets] = useState(initialTargets);
  const [threshold, setThreshold] = useState(rebalancePortfolio.threshold);
  const sliders = useRef<(HTMLInputElement | null)[]>([]);

  const rows = active.map((c, i) =>
    rebalance(c.value, total, targets[i], threshold),
  );
  const sum = targets.reduce((a, b) => a + b, 0);
  const changed =
    threshold !== rebalancePortfolio.threshold ||
    targets.some((t, i) => t !== initialTargets[i]);

  return (
    <div className={styles.demo}>
      <div className={styles.copy}>
        {header}
        <p className={styles.hint}>{hint}</p>

        <div className={styles.controls}>
          {active.map((category, i) => (
            <label key={category.name} className={styles.control}>
              <span className={styles.controlHead}>
                <span>
                  <Glyph name={category.icon} /> {category.name} target
                </span>
                <output>{targets[i]}%</output>
              </span>
              <input
                ref={(el) => {
                  sliders.current[i] = el;
                }}
                type="range"
                min={0}
                max={100}
                step={1}
                value={targets[i]}
                onChange={(e) => {
                  const value = Number(e.target.value);
                  setTargets((all) => all.map((t, j) => (j === i ? value : t)));
                }}
              />
            </label>
          ))}
          <label className={styles.control}>
            <span className={styles.controlHead}>
              <span>Threshold, each category</span>
              <output>{threshold}%</output>
            </span>
            <input
              type="range"
              min={0}
              max={10}
              step={0.5}
              value={threshold}
              onChange={(e) => setThreshold(Number(e.target.value))}
            />
          </label>
          <p className={styles.sum} aria-live="polite">
            Targets add up to <b>{sum}%</b>
            {sum !== 100 && " of the portfolio"}
          </p>
        </div>

        <button
          type="button"
          className={styles.reset}
          onClick={() => {
            setTargets(initialTargets);
            setThreshold(rebalancePortfolio.threshold);
          }}
          disabled={!changed}
        >
          Back to the defaults
        </button>
      </div>

      <div className={styles.bench}>
        <div className={styles.phone}>
          <PhoneFrame screenClassName={ios.screen}>
            <div className={ios.nav}>
              <span className={ios.back} aria-hidden="true">
                <Glyph name="chevron.left" size="1.3em" />
                Assets
              </span>
            </div>
            <p className={ios.largeTitle}>Rebalance</p>
            <div className={ios.body}>
              <p className={ios.header}>Categories</p>
              <ul className={ios.group} aria-live="polite">
                {active.map((category, i) => (
                  <Row
                    key={category.name}
                    name={category.name}
                    icon={category.icon}
                    row={rows[i]}
                    threshold={threshold}
                    onSelect={() => sliders.current[i]?.focus()}
                  />
                ))}
              </ul>
              <p className={ios.header}>Inactive Categories</p>
              <ul className={ios.group}>
                {inactive.map((category) => (
                  <li key={category.name} className={ios.cell}>
                    <Glyph name={category.icon} />
                    {category.name}
                    <span className={styles.off}>Off</span>
                  </li>
                ))}
              </ul>
            </div>
            <TabBar active="Assets" />
          </PhoneFrame>
        </div>
      </div>
    </div>
  );
}

function Row({
  name,
  icon,
  row,
  threshold,
  onSelect,
}: {
  name: string;
  icon: (typeof active)[number]["icon"];
  row: ReturnType<typeof rebalance>;
  threshold: number;
  onSelect: () => void;
}) {
  const action = row.onTarget
    ? "On Target"
    : `${row.amount > 0 ? "Buy" : "Sell"} ${moneyISO(row.amount)}`;
  const tone = row.onTarget ? "" : row.amount > 0 ? ios.green : ios.blue;
  return (
    <li className={`${ios.cell} ${styles.row}`}>
      <button
        type="button"
        className={styles.rowButton}
        onClick={onSelect}
        aria-label={`${name}: ${percent(row.current / 100, 0)} now, target ${percent(row.target / 100, 0)}. ${action}. Edit target.`}
      >
        <span className={styles.rowHead}>
          <span>
            <Glyph name={icon} />
            {name}
          </span>
          <span>
            {percent(row.current / 100, 0)}
            <Glyph name="arrow.right" size="1em" />
            {percent(row.target / 100, 0)}
          </span>
        </span>
        <span className={styles.rowAction}>
          <span className={`${styles.amount} ${tone}`}>{action}</span>
          {row.onTarget && threshold > 0 && (
            <span className={styles.within}>
              within {percent(threshold / 100, 1)} threshold
            </span>
          )}
        </span>
      </button>
    </li>
  );
}
