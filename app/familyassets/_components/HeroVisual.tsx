import { assets, debts } from "@/content/apps/familyassets/app";
import { Coin } from "./Coin";
import { mediumDate, money, netWorth, totalAssets, totalDebts } from "./money";
import { PhoneDashboard } from "./PhoneDashboard";
import styles from "./HeroVisual.module.css";

const today = "2026-10-29";

/**
 * The Net Worth tab on the phone, beside the family's balance sheet on
 * account-book paper: what they own, what they owe, and the net worth
 * ruled off twice. The icon's gold coin floats above.
 */
export function HeroVisual() {
  return (
    <div
      className={styles.stage}
      role="img"
      aria-label={`Family Assets' Net Worth screen: ${money(netWorth)}, up over the year, with a stepped chart of its history and each debt's rate against the portfolio return. Beside it, a paper balance sheet lists the family's home, investments and cash against a mortgage, a car loan and a line of credit.`}
    >
      <div className={styles.sheet}>
        <p className={styles.sheetHead}>
          <span>Balance sheet</span>
          <span>{mediumDate(today)}</span>
        </p>
        <Ledger title="Own" rows={assets.map((a) => [a.name, a.value])} />
        <p className={styles.subtotal}>
          <span>Total</span>
          <span>{money(totalAssets)}</span>
        </p>
        <Ledger title="Owe" rows={debts.map((d) => [d.name, d.balance])} />
        <p className={styles.subtotal}>
          <span>Total</span>
          <span>{money(totalDebts)}</span>
        </p>
        <p className={styles.bottomLine}>
          <span>Net worth</span>
          <span>{money(netWorth)}</span>
        </p>
      </div>

      <div className={styles.phone}>
        <PhoneDashboard />
      </div>

      <Coin className={styles.coin} />
    </div>
  );
}

function Ledger({ title, rows }: { title: string; rows: [string, number][] }) {
  return (
    <>
      <p className={styles.ledgerTitle}>{title}</p>
      <ul className={styles.ledger}>
        {rows.map(([name, value]) => (
          <li key={name}>
            <span>{name}</span>
            <span>{money(value).replace(/\.00$/, "")}</span>
          </li>
        ))}
      </ul>
    </>
  );
}
