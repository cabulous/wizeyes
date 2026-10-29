import {
  currency,
  debts,
  netWorthHistory,
  portfolioReturn,
} from "@/content/apps/familyassets/app";
import { PhoneFrame } from "@/components/app-page/PhoneFrame";
import {
  changeLabel,
  debtCosts,
  money,
  netWorth,
  percent,
  totalAssets,
  totalDebts,
} from "./money";
import { NetWorthChart } from "./NetWorthChart";
import { TabBar } from "./TabBar";
import ios from "./Ios.module.css";
import styles from "./PhoneDashboard.module.css";

const ranges = ["3M", "1Y", "5Y", "All"];

/**
 * Mirrors NetWorthDashboard.swift: the Net Worth tab's large title, then a
 * section with net worth, its change over the range in green, and assets
 * and debts; the History section's segmented range picker over the chart,
 * here scrubbed to today; and Debt vs. Investments (DebtCostSection), each
 * debt's rate against the portfolio return, highest rate first. All stock
 * iOS, as the app is.
 */
export function PhoneDashboard() {
  const sorted = [...debts].sort((a, b) => b.rate - a.rate);
  return (
    <PhoneFrame screenClassName={ios.screen}>
      <div className={ios.nav} />
      <p className={ios.largeTitle}>Net Worth</p>
      <div className={ios.body}>
        <div className={ios.group}>
          <div className={`${ios.cell} ${styles.summary}`}>
            <div className={styles.headline}>
              <span className={ios.caption}>Net Worth</span>
              <strong className={styles.total}>{money(netWorth)}</strong>
              <span className={`${ios.green} ${styles.change}`}>
                {changeLabel()}
              </span>
            </div>
            <div className={ios.stats}>
              <span className={ios.stat}>
                <span className={ios.caption}>Assets</span>
                <strong>{money(totalAssets)}</strong>
              </span>
              <span className={ios.stat}>
                <span className={ios.caption}>Debts</span>
                <strong>{money(totalDebts)}</strong>
              </span>
            </div>
          </div>
        </div>

        <p className={ios.header}>History</p>
        <div className={ios.group}>
          <div className={`${ios.cell} ${styles.history}`}>
            <span className={styles.segmented}>
              {ranges.map((range) => (
                <span
                  key={range}
                  className={range === "1Y" ? styles.segmentOn : undefined}
                >
                  {range}
                </span>
              ))}
            </span>
            <NetWorthChart
              className={styles.chart}
              points={netWorthHistory}
              width={330}
              height={200}
              selected={{
                index: netWorthHistory.length - 1,
                lines: [
                  "Today",
                  money(netWorth),
                  `Assets ${money(totalAssets)} · Debts ${money(totalDebts)}`,
                ],
              }}
            />
          </div>
        </div>

        <p className={ios.header}>Debt vs. Investments ({currency.code})</p>
        <ul className={ios.group}>
          <li className={ios.cell}>
            <span className={ios.stats}>
              <span className={ios.stat}>
                <span className={ios.caption}>Avg. Debt Cost</span>
                <strong>{percent(debtCosts.averageRate)}</strong>
              </span>
              <span className={ios.stat}>
                <span className={ios.caption}>Portfolio Return</span>
                <strong>{percent(portfolioReturn)}</strong>
              </span>
              <span className={ios.stat}>
                <span className={ios.caption}>Interest / Year</span>
                <strong>{money(debtCosts.yearlyInterest)}</strong>
              </span>
            </span>
          </li>
          {sorted.map((debt) => {
            const above = debt.rate / 100 >= portfolioReturn;
            return (
              <li key={debt.name} className={ios.cell}>
                <span className={styles.debt}>
                  {debt.name}
                  <small className={ios.secondary}>{money(debt.balance)}</small>
                </span>
                <span className={styles.rate}>
                  <b>{percent(debt.rate / 100)}</b>
                  <small className={above ? ios.orange : ios.secondary}>
                    {above ? "Above your return" : "Below your return"}
                  </small>
                </span>
              </li>
            );
          })}
        </ul>
      </div>
      <TabBar active="Net Worth" />
    </PhoneFrame>
  );
}
