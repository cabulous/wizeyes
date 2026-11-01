import type { ReactNode } from "react";
import {
  assets,
  currency,
  debts,
  indexFundActivities,
  netWorthHistory,
  portfolioReturn,
} from "@/content/apps/family-assets/app";
import { Glyph } from "./Glyph";
import {
  changeLabel,
  mediumDate,
  money,
  netWorth,
  percent,
  totalAssets,
  totalDebts,
} from "./money";
import { NetWorthChart } from "./NetWorthChart";
import ios from "./Ios.module.css";
import styles from "./FeatureVisuals.module.css";

/**
 * The top of the Net Worth tab (NetWorthDashboard.swift): the sum worked
 * down the page, its change in the gain ink, and the range picker over
 * the pencilled chart.
 */
function NetWorth() {
  return (
    <div className={`${ios.paper} ${styles.card}`}>
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
          <strong className={`${ios.serif} ${ios.ruled} ${styles.big}`}>
            {money(netWorth)}
          </strong>
        </p>
        <span className={`${ios.gain} ${styles.change}`}>{changeLabel()}</span>
      </div>
      <span className={styles.segmented}>
        {["3M", "1Y", "5Y", "All"].map((range) => (
          <span key={range} className={range === "1Y" ? styles.on : undefined}>
            {range}
          </span>
        ))}
      </span>
      <NetWorthChart points={netWorthHistory} width={300} height={130} />
    </div>
  );
}

/**
 * InvestmentDetail.swift: XIRR, Change and Latest, then the activities,
 * newest first, each type in small capitals and money coming back in the
 * gain ink.
 */
function Returns() {
  const fund = assets[1];
  return (
    <div className={`${ios.paper} ${styles.card}`}>
      <p className={styles.cardTitle}>{fund.name}</p>
      <span className={ios.stats}>
        <span className={ios.stat}>
          <span className={ios.caption}>XIRR</span>
          <strong>{percent(0.0912)}</strong>
        </span>
        <span className={ios.stat}>
          <span className={ios.caption}>Change</span>
          <strong>{percent(0.2647)}</strong>
        </span>
        <span className={ios.stat}>
          <span className={ios.caption}>Latest</span>
          <strong>{money(fund.value)}</strong>
        </span>
      </span>
      <p className={styles.header}>Activities</p>
      <ul className={styles.list}>
        {indexFundActivities.slice(0, 3).map((activity) => (
          <li key={activity.date} className={styles.activity}>
            <span className={styles.activityHead}>
              <span>{activity.type}</span>
              <span>{mediumDate(activity.date)}</span>
            </span>
            <span className={activity.positive ? styles.inflow : undefined}>
              {money(activity.amount)}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/**
 * DebtList.swift's rows, the mortgage flagged 120 days before its term
 * ends, then the top of its page (DebtDetail.swift): the rate with the
 * warning to renew under it, which opens the terms, the outstanding
 * balance and the month's interest. All warnings in the coin's amber.
 */
function Debts() {
  const mortgage = debts[0];
  const days = mortgage.termEndsInDays!;
  const end = new Date("2026-10-29T12:00:00");
  end.setDate(end.getDate() + days);
  const endText = end.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
  return (
    <div className={`${ios.paper} ${styles.stackCards}`}>
      <ul className={styles.list}>
        <li className={styles.row}>
          <Glyph name={mortgage.icon} />
          {mortgage.name}
          <span className={`${styles.badge} ${ios.warning}`}>
            <Glyph name="calendar.badge.exclamationmark" />
            Term ends in {days} days
          </span>
        </li>
        <li className={styles.row}>
          <Glyph name={debts[1].icon} />
          {debts[1].name}
        </li>
      </ul>
      <p className={styles.cardTitle}>{mortgage.name}</p>
      <span className={`${ios.stats} ${styles.debtStats}`}>
        <span className={ios.stat}>
          <span className={ios.caption}>{mortgage.rateType} Rate</span>
          <strong>{percent(mortgage.rate / 100)}</strong>
          <span className={`${styles.until} ${ios.warning}`}>
            <Glyph name="calendar.badge.exclamationmark" />
            until {endText}
          </span>
        </span>
        <span className={ios.stat}>
          <span className={ios.caption}>Outstanding</span>
          <strong>{money(mortgage.balance)}</strong>
        </span>
        <span className={ios.stat}>
          <span className={ios.caption}>Monthly Interest</span>
          <strong>
            {money((mortgage.balance * mortgage.rate) / 100 / 12)}
          </strong>
        </span>
      </span>
    </div>
  );
}

/**
 * The site's own diagram of Debt vs. Investments (DebtCostSection): each
 * debt's rate on a ruler, against the portfolio return. Those at or above
 * it are marked in the warning amber, as the app marks "Above your return".
 */
function Compare() {
  const max = 0.1;
  const at = (rate: number) => `${(rate / max) * 100}%`;
  return (
    <div className={styles.ruler}>
      <p className={styles.rulerHead}>
        <span>Debt vs. Investments</span>
        <span>{currency.code}</span>
      </p>
      <div className={styles.scale}>
        <span className={styles.zone} style={{ left: at(portfolioReturn) }} />
        <span className={styles.return} style={{ left: at(portfolioReturn) }}>
          <b>{percent(portfolioReturn)}</b> Portfolio Return
        </span>
        {debts.map((debt, i) => {
          const above = debt.rate / 100 >= portfolioReturn;
          return (
            <span
              key={debt.name}
              className={`${styles.pin} ${above ? styles.above : ""}`}
              style={{ left: at(debt.rate / 100), top: `${18 + i * 26}px` }}
            >
              <i />
              {debt.name} {percent(debt.rate / 100)}
            </span>
          );
        })}
      </div>
      <p className={styles.rulerAxis}>
        <span>0%</span>
        <span>5%</span>
        <span>10%</span>
      </p>
    </div>
  );
}

const rates = [
  { code: "EUR", rate: 0.66 },
  { code: "GBP", rate: 0.55 },
  { code: "USD", rate: 0.72 },
];

/** Settings › Currencies (CurrencyList.swift): the base currency, the others with their rate, and automatic updates. */
function Currencies() {
  return (
    <div className={`${ios.paper} ${styles.stackCards}`}>
      <p className={styles.header}>Base Currency</p>
      <ul className={styles.list}>
        <li className={styles.row}>
          {currency.code}
          <span className={`${styles.trailing} ${styles.faint}`}>
            1 {currency.code}
          </span>
        </li>
      </ul>
      <ul className={`${styles.list} ${styles.gap}`}>
        {rates.map((r) => (
          <li key={r.code} className={styles.row}>
            {r.code}
            <span className={`${styles.trailing} ${styles.faint}`}>
              {r.rate} {r.code}
            </span>
          </li>
        ))}
      </ul>
      <p className={styles.header}>Exchange Rates</p>
      <ul className={styles.list}>
        <li className={styles.row}>
          Update Rates Automatically
          <span className={styles.toggle} />
        </li>
      </ul>
    </div>
  );
}

/** Export.swift's file: its name, header row and a few rows of the CSV. */
function Export() {
  const rows = [
    "Type,Name,Currency Symbol,Currency Code,…,Amount,Date,Transaction Type",
    `Investment,${assets[1].name},$,CAD,…,-5000.0,9/2/2026,Buy`,
    `Investment,${assets[1].name},$,CAD,…,1284.6,9/30/2026,Dividends`,
    "Debt,Mortgage,$,CAD,…,412800.0,10/1/2026,Debt Value",
  ];
  return (
    <div className={styles.file}>
      <p className={styles.fileName}>
        <Glyph name="square.and.arrow.up" />
        familyassets-2026-10-29-09-41-00.csv
      </p>
      <pre className={styles.csv}>
        {rows.map((row, i) => (
          <span key={i}>{row}</span>
        ))}
      </pre>
    </div>
  );
}

export const featureVisuals: Record<string, ReactNode> = {
  networth: <NetWorth />,
  returns: <Returns />,
  debts: <Debts />,
  compare: <Compare />,
  currencies: <Currencies />,
  export: <Export />,
};
