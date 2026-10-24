import type { Reading } from "@/content/apps/lablog/app";
import { dayNumber, status } from "./lab";
import styles from "./Chart.module.css";

/**
 * Mirrors ChartView.swift: results joined by a line in the tube's glass,
 * each one a ringed point, green inside the test's range and yellow outside
 * it. With `axes`, the detail screen's chart: the normal range shaded in
 * the orange wash and ruled with dashed orange lines, and Swift Charts'
 * automatic grid and labels, set in the monospace: values on the trailing
 * edge, dates along the bottom. Without, it's the list row's small chart
 * (ListCharView.swift). Sized in points; the SVG scales to its box.
 */
export function Chart({
  readings,
  low,
  high,
  axes = false,
  width = 80,
  height = 45,
  className = "",
}: {
  readings: Reading[];
  low: number;
  high?: number;
  axes?: boolean;
  width?: number;
  height?: number;
  className?: string;
}) {
  const sorted = [...readings].sort((a, b) => a.date.localeCompare(b.date));
  const values = sorted.map((r) => r.value);
  // Swift Charts fits the axis to every mark, so the range's rules count too.
  if (axes) values.push(low, ...(high === undefined ? [] : [high]));
  const [min, max] = [Math.min(...values), Math.max(...values)];
  const step = niceStep((max - min || Math.abs(max) || 1) / (axes ? 4 : 2));
  const yMin = Math.floor(min / step) * step;
  const yMax = Math.max(Math.ceil(max / step) * step, yMin + step);

  const days = sorted.map((r) => dayNumber(r.date));
  const [dMin, dMax] = [days[0], days[days.length - 1]];

  // Room for the rings at the edges, and for labels when there are axes.
  const pad = 7;
  const plot = {
    left: pad,
    right: width - (axes ? 40 : pad),
    top: pad,
    bottom: height - (axes ? 26 : pad),
  };
  const x = (d: number) =>
    dMax === dMin
      ? (plot.left + plot.right) / 2
      : plot.left + ((d - dMin) / (dMax - dMin)) * (plot.right - plot.left);
  const y = (v: number) =>
    plot.bottom - ((v - yMin) / (yMax - yMin)) * (plot.bottom - plot.top);

  const points = sorted.map((r, i) => ({
    key: r.date,
    x: x(days[i]),
    y: y(r.value),
    status: status(r.value, low, high),
  }));
  const line = points
    .map((p, i) => `${i ? "L" : "M"}${p.x.toFixed(2)} ${p.y.toFixed(2)}`)
    .join(" ");

  const ticks: number[] = [];
  for (let v = yMin; v <= yMax + step / 2; v += step) ticks.push(v);

  return (
    <svg
      className={`${styles.chart} ${className}`}
      viewBox={`0 0 ${width} ${height}`}
      aria-hidden="true"
    >
      {axes && (
        <g className={styles.axes}>
          {ticks.map((v) => (
            <g key={v}>
              <line
                x1={plot.left - pad}
                x2={plot.right + 4}
                y1={y(v)}
                y2={y(v)}
              />
              <text x={plot.right + 8} y={y(v) + 4}>
                {formatTick(v, step)}
              </text>
            </g>
          ))}
          {points.map((p, i) => (
            <g key={p.key}>
              <line
                className={styles.dashed}
                x1={p.x}
                x2={p.x}
                y1={plot.top - pad}
                y2={plot.bottom}
              />
              <text x={p.x} y={height - 6} textAnchor="middle">
                {monthLabel(sorted[i].date)}
              </text>
            </g>
          ))}
        </g>
      )}
      {axes && (
        <g className={styles.range}>
          {high !== undefined && (
            <rect
              x={plot.left - pad}
              width={plot.right - plot.left + pad}
              y={y(high)}
              height={y(low) - y(high)}
            />
          )}
          {[low, high].map(
            (v) =>
              v !== undefined && (
                <line
                  key={v}
                  x1={plot.left - pad}
                  x2={plot.right}
                  y1={y(v)}
                  y2={y(v)}
                />
              ),
          )}
        </g>
      )}
      <path className={styles.line} d={line} />
      {points.map((p) => (
        <circle
          key={p.key}
          className={`${styles.point} ${styles[p.status]}`}
          r={4}
          style={{ transform: `translate(${p.x}px, ${p.y}px)` }}
        />
      ))}
    </svg>
  );
}

/** 1, 2 or 5 times a power of ten, the steps a chart's axis labels fall on. */
function niceStep(raw: number): number {
  const power = 10 ** Math.floor(Math.log10(raw));
  const f = raw / power;
  return (f <= 1 ? 1 : f <= 2 ? 2 : f <= 5 ? 5 : 10) * power;
}

function formatTick(v: number, step: number): string {
  const digits = Math.max(0, -Math.floor(Math.log10(step)));
  return v.toFixed(digits);
}

/** "Apr '26" */
function monthLabel(iso: string): string {
  const date = new Date(`${iso}T00:00:00Z`);
  const month = date.toLocaleDateString("en-US", {
    month: "short",
    timeZone: "UTC",
  });
  return `${month} ’${iso.slice(2, 4)}`;
}
