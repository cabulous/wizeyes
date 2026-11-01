/**
 * The app's hand-drawn marks (View/Theme.swift), as SVG path data: a bar
 * shaded in by pencil (PencilShading), a line drawn by hand (PencilLine)
 * and a highlighter's swipe (HighlighterSwipe). Their unsteadiness comes
 * from a small random walk like the app's PencilWobble: a mark keeps its
 * own hand from its seed, though the numbers aren't the app's own (it
 * walks in 64 bits, this in 32).
 */

/** PencilWobble: a repeatable random walk (mulberry32) for the hand's unsteadiness. */
export function wobble(seed: number) {
  let state = seed >>> 0;
  /** A value between -amount and amount. */
  return (amount: number) => {
    state = (state + 0x6d2b79f5) >>> 0;
    let t = state;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    const unit = ((t ^ (t >>> 14)) >>> 0) / 2 ** 32;
    return (unit * 2 - 1) * amount;
  };
}

/** PencilWobble.seed(for:): the same seed for the same name, every time (djb2). */
export function seedFor(name: string) {
  let hash = 5381;
  for (let i = 0; i < name.length; i++) {
    hash = (Math.imul(hash, 33) + name.charCodeAt(i)) >>> 0;
  }
  return hash;
}

const r = (n: number) => Math.round(n * 100) / 100;
const pt = (x: number, y: number) => `${r(x)} ${r(y)}`;

/**
 * PencilShading: a slightly wobbly outline, scribbled across with pencil
 * strokes from the bottom edge to the top, overshooting now and then.
 * Stroke it 1 pt wide with round caps and joins.
 */
export function pencilShading(
  x: number,
  y: number,
  width: number,
  height: number,
  seed: number,
) {
  const next = wobble(seed);
  const [maxX, maxY] = [x + width, y + height];
  const corners = [
    [x, y],
    [maxX, y],
    [maxX, maxY],
    [x, maxY],
  ].map(([cx, cy]) => pt(cx + next(0.6), cy + next(0.6)));
  let d = `M${corners[0]} L${corners.slice(1).join(" L")} Z`;

  const step = 2.5;
  let at = x;
  let atTop = false;
  d += ` M${pt(at, maxY + next(0.8))}`;
  while (at < maxX) {
    at = Math.min(at + step + next(0.4), maxX);
    atTop = !atTop;
    d += ` L${pt(at, atTop ? y + next(0.8) : maxY + next(0.8))}`;
  }
  return d;
}

/**
 * PencilLine: a line through `points`, each stretch a little unsteady
 * along its length. Stepped, a value holds level until the next point and
 * then rises or falls to it.
 */
export function pencilLine(
  points: [number, number][],
  { stepped = false, seed = 1 }: { stepped?: boolean; seed?: number } = {},
) {
  const next = wobble(seed);
  const corners: [number, number][] = [];
  for (const point of points) {
    const last = corners[corners.length - 1];
    if (stepped && last) corners.push([point[0], last[1]]);
    corners.push(point);
  }
  if (corners.length === 0) return "";
  let d = `M${pt(...corners[0])}`;
  for (let i = 1; i < corners.length; i++) {
    const [fx, fy] = corners[i - 1];
    const [tx, ty] = corners[i];
    const length = Math.hypot(tx - fx, ty - fy);
    // The hand drifts off the line and back about every 12 points.
    const pieces = Math.max(1, Math.floor(length / 12));
    const [nx, ny] =
      length > 0 ? [-(ty - fy) / length, (tx - fx) / length] : [0, 0];
    for (let piece = 1; piece <= pieces; piece++) {
      const t = piece / pieces;
      const drift = piece < pieces ? next(0.7) : 0;
      d += ` L${pt(fx + (tx - fx) * t + nx * drift, fy + (ty - fy) * t + ny * drift)}`;
    }
  }
  return d;
}

/**
 * HighlighterSwipe: a touch taller where the marker lands, the ends cut on
 * the slant of its chisel tip, the edges not quite straight. Fill it.
 */
export function highlighterSwipe(
  x: number,
  y: number,
  width: number,
  height: number,
  seed: number = 7,
) {
  const next = wobble(seed);
  const slant = 1.5;
  const [maxX, maxY, midX] = [x + width, y + height, x + width / 2];
  // Drawn in the app's order, so each corner takes the same wobble.
  const start = pt(x + slant, y - 1 + next(0.5));
  const topEnd = pt(maxX + slant, y + 0.5 + next(0.5));
  const topBend = pt(midX, y + next(1));
  const bottomEnd = pt(maxX - slant + next(1), maxY + next(0.5));
  const bottomStart = pt(x - slant, maxY + 1 + next(0.5));
  const bottomBend = pt(midX, maxY + next(1));
  return `M${start} Q${topBend} ${topEnd} L${bottomEnd} Q${bottomBend} ${bottomStart} Z`;
}
