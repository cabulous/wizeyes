import {
  currency,
  debts,
  netWorthHistory,
  portfolioReturn,
} from "@/content/apps/family-assets/app";
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
 * Mirrors NetWorthDashboard.swift: the Net Worth tab's large title, with
 * Update in the bar; then the net worth worked as a sum down the page
 * (assets, less debts, ruled off, and net worth the answer in the serif,
 * ruled off twice) with its change over the range in the gain ink; the
 * History section's segmented range picker over the pencilled chart, here
 * scrubbed to today; and Debt vs. Investments (DebtCostSection), each
 * debt's rate against the portfolio return, highest rate first. Rows are
 * written on the paper, in the app's Theme.swift, as Ios.module.css
 * describes.
 */
export function PhoneDashboard() {
  const sorted = [...debts].sort((a, b) => b.rate - a.rate);
  return (
    <PhoneFrame screenClassName={ios.screen}>
      <div className={ios.nav}>
        <span className={ios.navEnd}>Update</span>
      </div>
      <p className={ios.largeTitle}>Net Worth</p>
      <div className={ios.body}>
        <div className={ios.group}>
          <div className={`${ios.cell} ${styles.summary}`}>
            <div className={ios.sum}>
              <p className={ios.sumLine}>
                <span>Assets</span>
                <strong>{money(totalAssets)}</strong>
              </p>
              <p className={ios.sumLine}>
                <span>Debts</span>
                <strong>
                  <span className={ios.minus}>− </span>
                  {money(totalDebts)}
                </strong>
              </p>
              <span className={ios.sumRule} />
              <p className={ios.sumTotal}>
                <span>Net Worth</span>
                <strong className={`${ios.serif} ${ios.ruled} ${styles.total}`}>
                  {money(netWorth)}
                </strong>
              </p>
              <span className={`${ios.gain} ${styles.change}`}>
                {changeLabel()}
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
              height={170}
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
            <span className={`${ios.stats} ${styles.costs}`}>
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
                  <small className={above ? ios.warning : ios.secondary}>
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
