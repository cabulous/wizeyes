import styles from "./FeatureVisuals.module.css";

/**
 * Small illustrations for each feature card, keyed by feature id in
 * content/apps/spendwise/app.ts. Each mirrors the app (v1.21): the
 * automation from ShortcutAutomationGuide, the suggestions in
 * TransactionEditor, a card payment as TransactionItem shows it, a
 * BudgetList row with BudgetEditor's recommendation, SummaryGrouped's
 * totals, and the CSV that Export writes.
 */
export const featureVisuals = {
  alerts: <Automation />,
  learns: <Suggestions />,
  cards: <CardPayment />,
  budgets: <Budget />,
  summary: <Summary />,
  export: <Csv />,
};

function Automation() {
  return (
    <div className={styles.automation}>
      <div className={styles.block}>
        <span className={`${styles.blockIcon} ${styles.mailIcon}`}>
          <svg
            viewBox="0 0 24 24"
            width="20"
            height="20"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          >
            <rect x="3" y="5.5" width="18" height="13" rx="2.5" />
            <path d="m4 7 8 6 8-6" />
          </svg>
        </span>
        <p>
          <small>When</small>I get an email from{" "}
          <span className={styles.token}>your bank&apos;s alert address</span>
        </p>
      </div>
      <svg
        className={styles.connector}
        viewBox="0 0 24 36"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      >
        <path d="M12 3v30" strokeDasharray="5 5" />
      </svg>
      <div className={styles.block}>
        <span className={`${styles.blockIcon} ${styles.runIcon}`}>
          <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
            <path d="M13.5 2.5 5 13.5h6l-1.5 8 8.5-11h-6l1.5-8Z" />
          </svg>
        </span>
        <p>
          <small>Do</small>Add Transaction
          <span className={styles.muted}> · Spendwise</span>
        </p>
      </div>
      <p className={styles.toggle}>
        Run After Confirmation
        <span className={styles.switch} />
      </p>
    </div>
  );
}

function Suggestions() {
  return (
    <div className={styles.editor}>
      <p className={styles.fieldLabel}>Merchant</p>
      <p className={styles.field}>WALMART STORE #3064</p>
      <p className={styles.suggestion}>
        <Wand /> Rename to Walmart
      </p>
      <p className={styles.fieldLabel}>Category</p>
      <p className={`${styles.suggestion} ${styles.suggestionAlt}`}>
        <Wand /> Use Shopping
      </p>
    </div>
  );
}

function Wand() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m4 20 10-10M13 5V3M19 11h2M17.5 6.5 19 5M9.5 6.5 8 5M17.5 15.5 19 17" />
    </svg>
  );
}

function CardPayment() {
  return (
    <div className={styles.payment}>
      <div className={styles.item}>
        <div className={styles.itemRow}>
          <span>
            TD VISA
            <span className={styles.caption}>All recorded</span>
          </span>
          <span className={styles.muted}>Tuesday</span>
        </div>
        <div className={styles.itemRow}>
          <strong>$482.10</strong>
          <span className={styles.flowCards}>
            RBC Chequing
            <svg
              viewBox="0 0 24 24"
              width="12"
              height="12"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
            TD Cash Back
          </span>
        </div>
      </div>
      <span className={styles.stamp}>Counted once</span>
    </div>
  );
}

function Budget() {
  return (
    <div className={styles.budget}>
      <p className={styles.budgetName}>Food &amp; Drinks</p>
      <span className={styles.progress}>
        <span style={{ width: "78.5%" }} />
      </span>
      <p className={styles.itemRow}>
        <span className={styles.spent}>$612.40</span>
        <span>$780.00</span>
      </p>
      <p className={styles.tip}>
        Recommended: <strong>15%</strong> of your average monthly income
      </p>
    </div>
  );
}

function Summary() {
  const rows = [
    { name: "Housing", share: 38.4, total: "$14,400.00", className: styles.c1 },
    {
      name: "Food & Drinks",
      share: 19.6,
      total: "$7,350.00",
      className: styles.c2,
    },
    { name: "Shopping", share: 9.1, total: "$3,412.80", className: styles.c3 },
  ];
  return (
    <div className={styles.summary}>
      <p className={styles.fieldLabel}>Total by Category · This Year</p>
      <span className={styles.stack}>
        {rows.map((row) => (
          <span
            key={row.name}
            className={row.className}
            style={{ width: `${row.share}%` }}
          />
        ))}
      </span>
      <ul className={styles.totals}>
        {rows.map((row) => (
          <li key={row.name}>
            <span className={`${styles.dot} ${row.className}`} />
            <span>
              {row.name}
              <span className={styles.caption}>{row.share.toFixed(1)}%</span>
            </span>
            <span>{row.total}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Csv() {
  const header = [
    "Date",
    "Amount",
    "Currency Symbol",
    "Merchant",
    "Card",
    "Issuer",
    "Type",
    "Category",
    "Tags",
  ];
  const rows = [
    [
      "2026-10-20",
      "37.32",
      "$",
      "Walmart",
      "Joint Visa",
      "RBC",
      "debit",
      "Shopping",
      "",
    ],
    [
      "2026-10-19",
      "25.0",
      "$",
      "Uber Eats",
      "TD Cash Back",
      "TD",
      "debit",
      "Food & Drinks",
      "Restaurant",
    ],
  ];
  return (
    <div className={styles.csv}>
      <p className={styles.fileName}>
        <svg
          viewBox="0 0 24 24"
          width="18"
          height="18"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        >
          <path d="M6 2.5h8l4.5 4.5v14.5H6Z" />
          <path d="M14 2.5V7h4.5" />
        </svg>
        spendwise-transactions-2026-10-20-21-04-12.csv
      </p>
      <pre className={styles.code}>
        <span className={styles.codeHead}>{header.join(",")}</span>
        {rows.map((row) => (
          <span key={row[0]}>
            {"\n"}
            {row.map((field) => `"${field}"`).join(",")}
          </span>
        ))}
      </pre>
    </div>
  );
}
