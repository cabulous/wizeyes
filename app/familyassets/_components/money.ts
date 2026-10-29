import {
  assets,
  currency,
  debts,
  netWorthHistory,
} from "@/content/apps/familyassets/app";

const decimal = (value: number, digits = 2, min = digits) =>
  value.toLocaleString("en-US", {
    minimumFractionDigits: min,
    maximumFractionDigits: digits,
  });

/**
 * Currency.format(for:): the symbol and two decimals, as NumberFormatter's
 * .currency style writes them. NetWorthDashboard.format adds the sign.
 */
export function money(amount: number, signed = false): string {
  const text = `${currency.symbol}${decimal(Math.abs(amount))}`;
  if (amount < 0) return `-${text}`;
  return signed && amount > 0 ? `+${text}` : text;
}

/** Currency.formatISO(for:), as Rebalance shows amounts: "CAD 33,860.00". */
export function moneyISO(amount: number): string {
  return `${currency.code} ${decimal(Math.abs(amount))}`;
}

/** NumberUtills.formatPercentage: 0.0784 is "7.84%", at most `digits` decimals. */
export function percent(value: number, digits = 2): string {
  return `${decimal(value * 100, digits, 0)}%`;
}

/** The chart's axis labels, `.number.notation(.compactName)`: 600K, 1.2M. */
export function compact(value: number): string {
  return Intl.NumberFormat("en-US", { notation: "compact" }).format(value);
}

/** DateUtills.format(for:) for older dates: the medium date style. */
export function mediumDate(iso: string): string {
  return new Date(`${iso}T12:00:00`).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export const totalAssets = assets.reduce((sum, a) => sum + a.value, 0);
export const totalDebts = debts.reduce((sum, d) => sum + d.balance, 0);
export const netWorth = totalAssets - totalDebts;

/** NetWorthDashboard.change(in:): first to last point of the range. */
export function change(points = netWorthHistory) {
  const first = points[0].value;
  const amount = points[points.length - 1].value - first;
  return { amount, percentage: first > 0 ? amount / first : undefined };
}

/** "+$58,240.00 (9.67%) · 1Y", as changeLabel writes it. */
export function changeLabel(range = "1Y"): string {
  const { amount, percentage } = change();
  const pct = percentage === undefined ? "" : ` (${percent(percentage)})`;
  return `${money(amount, true)}${pct} · ${range}`;
}

/**
 * DebtCostSection's figures: the balance-weighted average rate
 * (DebtInterestCalculator.averageRate) and a year of interest at each rate.
 * Rates are fractions here, 0.0445 for 4.45%.
 */
export const debtCosts = (() => {
  const balance = totalDebts;
  const yearly = debts.reduce((sum, d) => sum + (d.balance * d.rate) / 100, 0);
  return { averageRate: yearly / balance, yearlyInterest: yearly };
})();

export type RebalanceRow = {
  current: number;
  target: number;
  onTarget: boolean;
  /** Positive to buy, negative to sell; 0 when on target. */
  amount: number;
};

/**
 * InvestmentRebalance's arithmetic for one category: its share of the
 * whole portfolio, and what to buy or sell to reach the target unless it's
 * within the threshold. Shares and threshold in percent.
 */
export function rebalance(
  value: number,
  total: number,
  target: number,
  threshold: number,
): RebalanceRow {
  const current = total > 0 ? (value / total) * 100 : 0;
  const onTarget = Math.abs(current - target) <= threshold;
  const amount = onTarget ? 0 : total * (target / 100) - value;
  return { current, target, onTarget, amount };
}
