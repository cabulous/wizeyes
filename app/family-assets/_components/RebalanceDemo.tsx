"use client";

import { useRef, useState, type ReactNode } from "react";
import { rebalancePortfolio } from "@/content/apps/family-assets/app";
import { PhoneFrame } from "@/components/app-page/PhoneFrame";
import { Glyph } from "./Glyph";
import { moneyISO, percent, rebalance } from "./money";
import { highlighterSwipe, pencilShading, seedFor } from "./pencil";
import { TabBar } from "./TabBar";
import ios from "./Ios.module.css";
import styles from "./RebalanceDemo.module.css";

const { active, inactive } = rebalancePortfolio;
const total = active.reduce((sum, c) => sum + c.value, 0);
const initialTargets = active.map((c) => c.target);

/**
 * Rebalance (InvestmentRebalance.swift), opened from the Assets tab. Each
 * category being rebalanced is one entry: its icon and name in ink with
 * what to do beside it (BUY in the gain ink, SELL in the tint, in small
 * capitals before the amount in the base currency's ISO code, or On target
 * in faint ink), and under the name a gauge of its share against its
 * target, then "69% → 60%". Categories with no target are set aside in a
 * quieter Not Rebalanced list. The sliders stand in for the category
 * editor the app opens when you tap a row (tapping one here focuses its
 * slider). Renders the default targets without JavaScript.
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
  // gaugeScale(for:): the section's largest share or band, with a little room past it.
  const largest = Math.max(
    ...rows.map((row) => Math.max(row.current, row.target + threshold)),
  );
  const scale = Math.min(Math.max(largest * 1.1, 1), 100);
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
                    scale={scale}
                    onSelect={() => sliders.current[i]?.focus()}
                  />
                ))}
              </ul>
              <p className={ios.header}>Not Rebalanced</p>
              <ul className={`${ios.group} ${styles.setAside}`}>
                {inactive.map((category) => (
                  <li key={category.name} className={ios.cell}>
                    <span className={styles.icon}>
                      <Glyph name={category.icon} />
                    </span>
                    {category.name}
                    <span className={styles.kind}>Category</span>
                  </li>
                ))}
              </ul>
              <p className={ios.footer}>
                No target set, so not counted in the shares above. Tap one to
                give it a target.
              </p>
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
  scale,
  onSelect,
}: {
  name: string;
  icon: (typeof active)[number]["icon"];
  row: ReturnType<typeof rebalance>;
  threshold: number;
  scale: number;
  onSelect: () => void;
}) {
  const verb = row.amount > 0 ? "Buy" : "Sell";
  const action = row.onTarget ? "On target" : `${verb} ${moneyISO(row.amount)}`;
  const tone = row.onTarget
    ? styles.onTarget
    : row.amount > 0
      ? ios.gain
      : ios.tint;
  return (
    <li className={`${ios.cell} ${styles.row}`}>
      <button
        type="button"
        className={styles.rowButton}
        onClick={onSelect}
        aria-label={`${name}: ${percent(row.current / 100, 0)} of a ${percent(row.target / 100, 0)} target. ${action}. Edit target.`}
      >
        <span className={styles.rowHead}>
          <span className={styles.icon}>
            <Glyph name={icon} />
          </span>
          <span className={styles.name}>{name}</span>
          <span className={`${styles.amount} ${tone}`}>
            {row.onTarget ? (
              action
            ) : (
              <>
                <small>{verb}</small> {moneyISO(row.amount)}
              </>
            )}
          </span>
        </span>
        <span className={styles.gaugeLine}>
          <TargetGauge
            current={row.current}
            target={row.target}
            threshold={threshold}
            scale={scale}
            seed={seedFor(name)}
            tone={tone}
          />
          <span className={styles.shares}>
            {percent(row.current / 100, 0)} → {percent(row.target / 100, 0)}
          </span>
        </span>
      </button>
    </li>
  );
}

const gauge = { width: 230, height: 16 };

/**
 * TargetGauge: where a share stands against its target, on a scale running
 * up to `scale` percent. Shaded in pencil up to the share it has, the band
 * its threshold allows marked with the highlighter, and the target struck
 * in ink. A bar that ends inside the band is on target.
 */
function TargetGauge({
  current,
  target,
  threshold,
  scale,
  seed,
  tone,
}: {
  current: number;
  target: number;
  threshold: number;
  scale: number;
  seed: number;
  /** adjustmentColor: the pencil in the colour of what to do. */
  tone: string;
}) {
  const { width, height } = gauge;
  const x = (share: number) =>
    (width * Math.min(Math.max(share, 0), scale)) / scale;
  const mid = height / 2;
  const band = Math.max(3, x(target + threshold) - x(target - threshold));
  return (
    <svg
      className={`${styles.gauge} ${tone}`}
      viewBox={`0 0 ${width} ${height}`}
      aria-hidden="true"
      focusable="false"
    >
      <rect x={0} y={mid - 0.5} width={width} height={1} fill="var(--line)" />
      {threshold > 0 && (
        <path
          d={highlighterSwipe(x(target - threshold), mid - 6, band, 12, seed)}
          fill="var(--highlighter)"
        />
      )}
      <path
        d={pencilShading(0, mid - 3.5, Math.max(2, x(current)), 7, seed)}
        className={styles.shading}
      />
      <rect
        x={x(target) - 0.75}
        y={0}
        width={1.5}
        height={height}
        fill="var(--ink)"
      />
    </svg>
  );
}
