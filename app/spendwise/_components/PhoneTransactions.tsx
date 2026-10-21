import { PhoneFrame } from "@/components/app-page/PhoneFrame";
import styles from "./PhoneTransactions.module.css";

/**
 * The app's Transactions tab (v1.21: TranslationListByMonth, CashflowChart,
 * TransactionListGrouped, TransactionItem, ContentView's tab bar), rebuilt
 * in HTML with sample data. It keeps the app's stock iOS look; bank logos
 * beside card names are left out. The first row is the alert just added.
 */
type Row = {
  merchant: string;
  detail: string;
  date: string;
  amount: string;
  income?: boolean;
  card: string;
  paid?: string;
  isNew?: boolean;
};

const rows: Row[] = [
  {
    merchant: "Walmart",
    detail: "Shopping",
    date: "Today",
    amount: "$37.32",
    card: "Joint Visa",
    isNew: true,
  },
  {
    merchant: "Uber Eats",
    detail: "Food & Drinks - Restaurant",
    date: "Yesterday",
    amount: "$25.00",
    card: "TD Cash Back",
  },
  {
    merchant: "Payroll",
    detail: "Income",
    date: "Friday",
    amount: "+ $2,600.00",
    income: true,
    card: "RBC Chequing",
  },
  {
    merchant: "TD VISA",
    detail: "All recorded",
    date: "Tuesday",
    amount: "$482.10",
    card: "RBC Chequing",
    paid: "TD Cash Back",
  },
];

const tabs = [
  { label: "Transactions", icon: <CardIcon />, active: true },
  { label: "Budgets", icon: <DollarIcon /> },
  { label: "Summary", icon: <PieIcon /> },
  { label: "Help", icon: <HelpIcon /> },
];

export function PhoneTransactions() {
  return (
    <PhoneFrame screenClassName={styles.screen}>
      <div className={styles.toolbar}>
        <span>Add</span>
        <svg
          viewBox="0 0 24 24"
          width="1.15em"
          height="1.15em"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <circle cx="12" cy="12" r="9.5" />
          <circle cx="7.6" cy="12" r="1.1" fill="currentColor" stroke="none" />
          <circle cx="12" cy="12" r="1.1" fill="currentColor" stroke="none" />
          <circle cx="16.4" cy="12" r="1.1" fill="currentColor" stroke="none" />
        </svg>
      </div>
      <p className={styles.largeTitle}>Transactions</p>

      <div className={styles.segmented}>
        <span className={styles.selected}>This Month</span>
        <span>Last Month</span>
        <span>Custom</span>
      </div>

      <div className={styles.cashflow}>
        <p className={styles.sentence}>
          For every <b>$10</b> earned, <b className={styles.expense}>$6</b>{" "}
          spent and <b className={styles.income}>$4</b> saved
        </p>
        <div className={styles.bars}>
          <span className={styles.barLabel}>Income</span>
          <span className={`${styles.bar} ${styles.barIncome}`} />
          <span className={styles.barLabel}>Expense</span>
          <span className={`${styles.bar} ${styles.barExpense}`} />
        </div>
        <div className={styles.totals}>
          <span className={styles.income}>$5,200.00</span>
          <span className={styles.expense}>$3,128.42</span>
        </div>
      </div>

      <p className={styles.sectionHeader}>October 2026</p>
      <div className={styles.list}>
        {rows.map((row) => (
          <div
            key={row.merchant}
            className={`${styles.row} ${row.isNew ? styles.newRow : ""}`}
          >
            <div className={styles.rowTop}>
              <span className={styles.rowText}>
                <span className={styles.merchant}>{row.merchant}</span>
                <span className={styles.detail}>{row.detail}</span>
              </span>
              <span className={styles.date}>{row.date}</span>
            </div>
            <div className={styles.rowBottom}>
              <span
                className={row.income ? styles.amountIncome : styles.amount}
              >
                {row.amount}
              </span>
              <span className={styles.card}>
                {row.card}
                {row.paid && (
                  <>
                    <svg
                      viewBox="0 0 24 24"
                      width="0.8em"
                      height="0.8em"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                    {row.paid}
                  </>
                )}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.tabBar}>
        {tabs.map((tab) => (
          <span
            key={tab.label}
            className={`${styles.tab} ${tab.active ? styles.tabActive : ""}`}
          >
            {tab.icon}
            {tab.label}
          </span>
        ))}
      </div>
    </PhoneFrame>
  );
}

function CardIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="1.9em"
      height="1.9em"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
    >
      <rect x="3" y="5.5" width="18" height="13" rx="2.5" />
      <path d="M3 9.5h18M6.5 15h4" />
    </svg>
  );
}

function DollarIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="1.9em"
      height="1.9em"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M14.5 9.2c-.5-.8-1.4-1.2-2.5-1.2-1.5 0-2.6.8-2.6 2s1.1 1.7 2.6 2c1.5.3 2.6.8 2.6 2s-1.1 2-2.6 2c-1.1 0-2.1-.5-2.6-1.3M12 6.5V8m0 8v1.5" />
    </svg>
  );
}

function PieIcon() {
  return (
    <svg viewBox="0 0 24 24" width="1.9em" height="1.9em" fill="currentColor">
      <path d="M11 3.1A9 9 0 1 0 20.9 13H11Z" />
      <path d="M13 3.1V11h7.9A9 9 0 0 0 13 3.1Z" opacity="0.75" />
    </svg>
  );
}

function HelpIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="1.9em"
      height="1.9em"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M9.6 9.4A2.5 2.5 0 0 1 14.4 10c0 1.7-2.4 2-2.4 3.6M12 16.8v.2" />
    </svg>
  );
}
