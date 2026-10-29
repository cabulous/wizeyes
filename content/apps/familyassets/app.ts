import type { AppContent } from "@/content/types";

/**
 * Family Assets (repo: cabulous/FamilyAssets, bundle
 * com.wizeyes.www.FamilyAssets). Every claim below is backed by the app's
 * source as of its net-worth and debt-terms release; check it there before
 * changing a feature claim. Interface words ("Net Worth", "Rebalance",
 * "On Target", "Debt vs. Investments", "Above your return", "Update Rates
 * Automatically", "Export All Data to CSV") are the app's own strings from
 * FamilyAssets/View.
 *
 * Not claimed: bank or brokerage connections, live prices, budgeting,
 * reminders or notifications, widgets, and any language but English. The
 * app's one network request is the exchange-rate fetch
 * (Utills/ExchangeRateService.swift), which sends currency codes and dates
 * to the Frankfurter API and can be turned off.
 */
export const familyAssets: AppContent = {
  slug: "familyassets",
  name: "Family Assets",
  storeName: "Family Assets",
  tagline:
    "A private net worth tracker for your family's investments, property and debts, on iPhone and iPad.",
  seoTitle: "Family Assets: Net Worth Tracker for iPhone and iPad",
  description:
    "Track your family's net worth on iPhone and iPad: investments with their real returns, debts with their rates and terms, in any currency. Private, in iCloud.",
  keywords: [
    "net worth tracker",
    "family net worth app",
    "investment tracker",
    "XIRR calculator",
    "portfolio rebalancing",
    "mortgage tracker",
    "debt tracker",
    "multi-currency portfolio",
    "private finance app",
    "iPhone",
    "iPad",
  ],
  category: "Finance",
  schemaCategory: "FinanceApplication",
  platforms: ["iPhone", "iPad"],
  minimumOS: "iOS 17.0",
  icon: {
    src: "/apps/familyassets/icon-512.png",
    alt: "Family Assets app icon: a smiling pink pig hugging a little house and holding up a gold coin with a rising arrow",
  },
  themeColor: "#F6F1E5",

  hero: {
    eyebrow: "For iPhone & iPad · Net worth",
    title: "All you own, *less all you owe*.",
    lead: "Family Assets keeps the family books in one private place: investments with the returns they really made, debts with their rates and terms, and the one number that adds them up. It all stays on your device and in your iCloud.",
    facts: [
      "No bank login",
      "Syncs through iCloud",
      "Any currency, daily rates",
    ],
  },

  features: {
    eyebrow: "Features",
    title: "The family books, *balanced*.",
    items: [
      {
        id: "networth",
        title: "One number for the household",
        body: "The Net Worth tab adds every asset and takes away every debt, converted to your base currency. Its history steps along as you record values, over 3 months, a year, five years or all time. Touch the chart to see assets and debts on any day.",
      },
      {
        id: "returns",
        title: "Returns that count every dollar in",
        body: "Log what you do: Buy, Sell, Dividends, Fees, Taxes or your own kinds of activity, plus the market value from time to time. Each investment, and the whole portfolio, shows its XIRR, a yearly return that weighs when money went in and came out.",
      },
      {
        id: "debts",
        title: "Debts, with their terms",
        body: "Keep each mortgage, loan or card with its rate, fixed or variable, and every term it has had. A debt is flagged 120 days before its term ends, with a Renew button. Track the balance from your statements, or from what you borrowed and repaid.",
      },
      {
        id: "compare",
        title: "Pay it down, or invest?",
        body: "Debt vs. Investments lines up what each debt costs against what your portfolio has returned, and marks the ones above your return. You see the average cost of your debt and the interest it adds up to each year.",
      },
      {
        id: "currencies",
        title: "Every currency, at its day's rate",
        body: "Hold assets in any currency. Family Assets fetches daily reference rates from the European Central Bank, back to your earliest activity, and converts each cash flow at the rate on its date. Rates you enter by hand are never overwritten.",
      },
      {
        id: "export",
        title: "Yours to take",
        body: "Export All Data to CSV writes every activity, market value and balance to one spreadsheet file, with its currency, the rate used and the amount in your base currency.",
      },
    ],
  },

  steps: {
    eyebrow: "How it works",
    title: "From scattered statements to *one bottom line*.",
    items: [
      {
        title: "List what you own and owe",
        body: "Add each investment under Assets, with a category and currency, and each mortgage, loan or card under Debts, with its rate and term.",
      },
      {
        title: "Record as you go",
        body: "Add activities like Buy and Dividends, and a market value now and then. For a debt, enter the balance from each statement.",
      },
      {
        title: "Read the bottom line",
        body: "Net Worth shows where the family stands and how it got there. Rebalance and Debt vs. Investments show where to put the next dollar.",
      },
    ],
  },

  privacy: {
    eyebrow: "Private by design",
    title: "Your family's numbers stay *in the family*.",
    lead: "Family Assets has no account and no WizEyes server, and never asks for a bank login. Your records are stored on your iPhone or iPad and synced through your own iCloud, so they're on every device you use and nowhere else.",
    points: [
      "No sign-up, no WizEyes account, no bank login.",
      "Stored on your device and in your iCloud, nowhere else.",
      "Exchange-rate updates send only currency codes and dates, and can be turned off.",
      "No analytics, no ads, no tracking.",
    ],
  },

  faq: {
    eyebrow: "FAQ",
    title: "Questions, *answered*.",
    items: [
      {
        question: "Does it connect to my bank or brokerage?",
        answer:
          "No. You enter activities, market values and balances yourself, so Family Assets never needs a login. Most families update a few numbers a month.",
      },
      {
        question: "What is XIRR?",
        answer:
          "A yearly rate of return that takes into account when each amount went in or came out, so money added last month doesn't count as if it had been invested all year. Family Assets works it out from your activities and latest market value, beside the plain change in value.",
      },
      {
        question: "How does rebalancing work?",
        answer:
          "Give a category, like Stock or Bond, or a single investment a target share of the portfolio and a threshold. Rebalance shows how much to buy or sell to reach each target, in your base currency, and says On Target while you're within the threshold.",
      },
      {
        question: "Can I track a mortgage renewal?",
        answer:
          "Yes. Give a debt a term with its rate, fixed or variable, and an end date. It's flagged 120 days before the term ends, and Renew starts the next term. Rate changes in a variable term are kept as a history.",
      },
      {
        question: "Can I hold assets in more than one currency?",
        answer:
          "Yes. Pick a base currency and give each investment or debt its own. Family Assets updates rates daily from the European Central Bank via the Frankfurter service, and converts each cash flow at the rate on its date. For currencies it doesn't cover, enter the rates yourself.",
      },
      {
        question: "Does it sync between my iPhone and iPad?",
        answer:
          "Yes, through your iCloud account. Anything you add on one device shows up on the others.",
      },
      {
        question: "Can I get my data out?",
        answer:
          "Yes. In Settings, Export saves everything to a CSV file you can open in Numbers, Excel or any spreadsheet app.",
      },
      {
        question: "Does it give financial advice?",
        answer:
          "No. It records your numbers and does the arithmetic: returns, conversions, targets and interest. Decisions are yours, and a qualified adviser can help with them.",
      },
      {
        question: "What do I need?",
        answer: "An iPhone or iPad running iOS 17 or later.",
      },
    ],
  },

  cta: {
    title: "Start your family's *books*.",
    body: "Family Assets for iPhone and iPad. Everything the family owns and owes, in one private place, kept nowhere but your device and your iCloud.",
  },

  disclaimer:
    "Family Assets is a record-keeping app. It doesn't give financial, investment or tax advice. Exchange rates are reference rates from the European Central Bank via Frankfurter, for information only. Amounts on this page are samples. iPhone, iPad and iCloud are trademarks of Apple Inc.",
};

/*
 * Sample household for the illustrations. Category names and icons, activity
 * types and the rebalancing defaults are the app's own
 * (Model/InvestmentCategory.swift, Model/DebtCategory.swift,
 * Model/ActivityTransactionType.swift); the amounts are made up. Amounts are
 * in the base currency, Canadian dollars.
 */
export const currency = { symbol: "$", code: "CAD" };

/** An SF Symbol a category uses, redrawn in _components/Glyph.tsx. */
export type SFSymbol =
  | "house"
  | "chart.line.uptrend.xyaxis"
  | "building.columns"
  | "percent"
  | "dollarsign.circle"
  | "chart.pie"
  | "creditcard";

export type Holding = {
  name: string;
  category: string;
  icon: SFSymbol;
  value: number;
};

export const assets: Holding[] = [
  {
    name: "Family Home",
    category: "Real Estate",
    icon: "house",
    value: 720000,
  },
  {
    name: "Global Index ETF",
    category: "Stock",
    icon: "chart.line.uptrend.xyaxis",
    value: 214600,
  },
  {
    name: "Bond ETF",
    category: "Bond",
    icon: "building.columns",
    value: 118300,
  },
  {
    name: "5-Year GIC",
    category: "Fixed Income",
    icon: "percent",
    value: 25000,
  },
  {
    name: "Emergency Fund",
    category: "Cash",
    icon: "dollarsign.circle",
    value: 18500,
  },
];

export type SampleDebt = {
  name: string;
  icon: SFSymbol;
  balance: number;
  /** Percent per annum, 4.45 is 4.45%, as the app stores it. */
  rate: number;
  rateType?: "Fixed" | "Variable";
  /** Days until the term ends; under 120 the debt is flagged for renewal. */
  termEndsInDays?: number;
};

export const debts: SampleDebt[] = [
  {
    name: "Mortgage",
    icon: "house",
    balance: 412800,
    rate: 4.45,
    rateType: "Fixed",
    termEndsInDays: 97,
  },
  { name: "Car Loan", icon: "dollarsign.circle", balance: 16900, rate: 6.9 },
  {
    name: "Line of Credit",
    icon: "creditcard",
    balance: 6400,
    rate: 8.95,
    rateType: "Variable",
  },
];

/** The portfolio's XIRR, as the app would work it out from a few years of activities. */
export const portfolioReturn = 0.0784;

/**
 * Month-end net worth over the last year, oldest first. The last point is
 * today's: assets less debts above.
 */
export const netWorthHistory: { date: string; value: number }[] = [
  { date: "2025-10-31", value: 602060 },
  { date: "2025-11-30", value: 606900 },
  { date: "2025-12-31", value: 613400 },
  { date: "2026-01-31", value: 611100 },
  { date: "2026-02-28", value: 618700 },
  { date: "2026-03-31", value: 625900 },
  { date: "2026-04-30", value: 621300 },
  { date: "2026-05-31", value: 630800 },
  { date: "2026-06-30", value: 638200 },
  { date: "2026-07-31", value: 644900 },
  { date: "2026-08-31", value: 641700 },
  { date: "2026-09-30", value: 652600 },
  { date: "2026-10-29", value: 660300 },
];

/** One investment's activities, newest first, for the returns illustration. */
export const indexFundActivities: {
  type: string;
  date: string;
  amount: number;
  /** Money coming back to you, which the app shows in green. */
  positive?: boolean;
}[] = [
  { type: "Dividends", date: "2026-09-30", amount: 1284.6, positive: true },
  { type: "Buy", date: "2026-09-02", amount: 5000 },
  { type: "Dividends", date: "2026-06-30", amount: 1197.2, positive: true },
  { type: "Buy", date: "2026-03-03", amount: 5000 },
  { type: "Fees", date: "2026-01-15", amount: 45 },
];

/**
 * The portfolio for the Rebalance demo: one investment in each of the
 * categories the app rebalances by default, drifted from the default
 * targets. Inactive categories show as "Off".
 */
export const rebalancePortfolio = {
  active: [
    {
      name: "Stock",
      icon: "chart.line.uptrend.xyaxis",
      value: 248600,
      target: 60,
    },
    { name: "Bond", icon: "building.columns", value: 92300, target: 35 },
    { name: "Fixed Income", icon: "percent", value: 17000, target: 5 },
  ] as { name: string; icon: SFSymbol; value: number; target: number }[],
  inactive: [
    { name: "Cash", icon: "dollarsign.circle" },
    { name: "Mutual Fund", icon: "chart.pie" },
    { name: "Real Estate", icon: "house" },
  ] as { name: string; icon: SFSymbol }[],
  /** A category's default threshold, in percentage points. */
  threshold: 5,
};

/**
 * The categories and kinds of activity a new install starts with, as
 * seeded by Utills/DefaultDataReconciler.swift, for the page's ledger tape.
 */
export const ledger: { label: string; icon?: SFSymbol; kind: string }[] = [
  { label: "Stock", icon: "chart.line.uptrend.xyaxis", kind: "Asset" },
  { label: "Buy", kind: "Activity" },
  { label: "Mortgage", icon: "house", kind: "Debt" },
  { label: "Bond", icon: "building.columns", kind: "Asset" },
  { label: "Dividends", kind: "Activity" },
  { label: "Credit Card", icon: "creditcard", kind: "Debt" },
  { label: "Real Estate", icon: "house", kind: "Asset" },
  { label: "Repay Principal", kind: "Activity" },
  { label: "Fixed Income", icon: "percent", kind: "Asset" },
  { label: "Dividend Reinvestment", kind: "Activity" },
  { label: "Loan", icon: "dollarsign.circle", kind: "Debt" },
  { label: "Mutual Fund", icon: "chart.pie", kind: "Asset" },
  { label: "Interest Charge", kind: "Activity" },
  { label: "Cash", icon: "dollarsign.circle", kind: "Asset" },
  { label: "Sell", kind: "Activity" },
  { label: "Borrow", kind: "Activity" },
  { label: "Fees", kind: "Activity" },
  { label: "Repay Interest", kind: "Activity" },
  { label: "Taxes", kind: "Activity" },
];

/** Copy for the sections only Family Assets has. */
export const extras = {
  ledger: {
    label:
      "Family Assets' built-in categories and kinds of activity, for assets and for debts",
  },
  rebalance: {
    eyebrow: "Try it",
    title: "Rebalance *without the spreadsheet*.",
    lead: "This is the Rebalance screen with the app's default targets: 60% stock, 35% bonds, 5% fixed income. Move a target or the threshold and watch what to buy and sell change.",
    hint: "Sample portfolio. Amounts are in Canadian dollars.",
  },
};
