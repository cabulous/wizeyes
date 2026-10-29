import { compact } from "./money";
import styles from "./NetWorthChart.module.css";

const months = ["Jan", "Apr", "Jul", "Oct"];

/**
 * NetWorthChart in NetWorthDashboard.swift: a 2 pt line in the system tint
 * that steps at each recorded value (.stepStart), gridlines with compact
 * labels on the trailing edge, and month marks along the bottom. Swift
 * Charts' automatic scale starts at zero, so the line rides high. Drawn in
 * points: the SVG's units are iOS points, scaled by the parent's --pt.
 * `selected` draws the scrubbing rule and its callout at that point.
 */
export function NetWorthChart({
  points,
  width = 330,
  height = 240,
  selected,
  axes = true,
  className = "",
}: {
  points: { date: string; value: number }[];
  width?: number;
  height?: number;
  selected?: { index: number; lines: [string, string, string] };
  axes?: boolean;
  className?: string;
}) {
  const plotW = axes ? width - 34 : width;
  const plotH = axes ? height - 20 : height;
  const step = 200_000;
  const top = Math.ceil(Math.max(...points.map((p) => p.value)) / step) * step;
  const t = points.map((p) => Date.parse(p.date));
  const [t0, t1] = [t[0], t[t.length - 1]];
  const x = (time: number) => ((time - t0) / (t1 - t0)) * plotW;
  const y = (value: number) => plotH - (value / top) * plotH;

  // .stepStart: each new value takes effect from the previous point.
  const line = points
    .map((p, i) =>
      i === 0
        ? `M0 ${y(p.value)}`
        : `L${x(t[i - 1])} ${y(p.value)} L${x(t[i])} ${y(p.value)}`,
    )
    .join(" ");

  const ticks = Array.from({ length: top / step + 1 }, (_, i) => i * step);
  const monthTicks = points
    .map((p, i) => ({ i, d: new Date(`${p.date}T12:00:00`) }))
    .filter(({ d }) => d.getMonth() % 3 === 0)
    .map(({ i, d }) => ({
      x: x(Date.UTC(d.getFullYear(), d.getMonth(), 1)),
      label: months[d.getMonth() / 3],
      i,
    }))
    .filter((m) => m.x >= 0);

  const sel = selected && points[selected.index];
  const selX = sel ? x(t[selected.index]) : 0;

  return (
    <div className={`${styles.chart} ${className}`}>
      <svg
        viewBox={`0 0 ${width} ${height}`}
        width="100%"
        aria-hidden="true"
        className={styles.svg}
      >
        {axes &&
          ticks.map((tick) => (
            <g key={tick}>
              <line
                x1={0}
                x2={plotW}
                y1={y(tick)}
                y2={y(tick)}
                className={styles.grid}
              />
              <text x={plotW + 6} y={y(tick) + 3.5} className={styles.label}>
                {tick === 0 ? "0" : compact(tick)}
              </text>
            </g>
          ))}
        {axes &&
          monthTicks.map((m) => (
            <g key={m.i}>
              <line
                x1={m.x}
                x2={m.x}
                y1={0}
                y2={plotH + 4}
                className={styles.grid}
              />
              <text x={m.x + 2} y={plotH + 15} className={styles.label}>
                {m.label}
              </text>
            </g>
          ))}
        {sel && (
          <line x1={selX} x2={selX} y1={0} y2={plotH} className={styles.rule} />
        )}
        <path d={line} className={styles.line} />
      </svg>
      {sel && selected && (
        <div
          className={styles.callout}
          style={{
            // .fit(to: .chart): the callout stays inside the plot.
            right:
              selX > plotW / 2
                ? `calc(${(1 - selX / width) * 100}% - 1px)`
                : undefined,
            left: selX <= plotW / 2 ? `${(selX / width) * 100}%` : undefined,
          }}
        >
          <span className={styles.calloutDate}>{selected.lines[0]}</span>
          <strong>{selected.lines[1]}</strong>
          <span className={styles.calloutSplit}>{selected.lines[2]}</span>
        </div>
      )}
    </div>
  );
}
