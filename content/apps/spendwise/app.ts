import type { AppContent } from "@/content/types";

/**
 * Spendwise (repo: cabulous/SpendWise, bundle com.wizeyes.www.SpendWise).
 * Every claim below is backed by the app's source as of v1.21; re-check it
 * there before changing a feature claim. Not shipped, so never claimed:
 * screenshot scanning and CSV import (ImageToTransactionParser and CSVParser
 * exist but nothing calls them) and Goals (its tab is commented out).
 */
/** Banks whose names the alert parser knows (TextToTransactionParser, CardIssuer). */
export const banks = [
  "RBC",
  "TD",
  "BMO",
  "Scotiabank",
  "CIBC",
  "National Bank",
  "Desjardins",
  "HSBC",
  "Tangerine",
  "Simplii",
  "Wealthsimple",
  "Rogers Bank",
  "American Express",
  "Bank of America",
  "Chase",
  "Citi",
  "Goldman Sachs",
  "Wells Fargo",
];

export const spendwise: AppContent = {
  slug: "spendwise",
  name: "Spendwise",
  storeName: "Spendwise: Money Manager",
  // https://apps.apple.com/app/id6477726440
  appStoreId: "6477726440",
  tagline:
    "Turn your bank's email alerts into a private spending tracker with budgets, on iPhone and iPad.",
  seoTitle: "Spendwise: Private Expense Tracker That Reads Your Bank Alerts",
  description:
    "Spendwise turns your bank's purchase alerts into a private spending log with budgets and summaries. No bank login; your data stays on your device and in iCloud.",
  keywords: [
    "expense tracker",
    "spending tracker",
    "budget app",
    "bank alert tracker",
    "credit card spending tracker",
    "private budget app",
    "no bank login budget",
    "iPhone",
    "iPad",
  ],
  category: "Finance",
  schemaCategory: "FinanceApplication",
  platforms: ["iPhone", "iPad"],
  minimumOS: "iOS 17.0",
  pricing: "One-time purchase",
  icon: {
    src: "/apps/spendwise/icon-512.png",
    alt: "Spendwise app icon: a pink piggy bank outlined in navy on a pale mint background",
  },
  themeColor: "#E0F2EF",

  hero: {
    eyebrow: "For iPhone & iPad · No bank login",
    title: "Let your bank alerts *do the bookkeeping*.",
    lead: "Set up one Shortcuts automation, and every purchase alert your bank emails becomes a transaction with the amount, merchant, card and date already filled in. Budgets and summaries follow, and it all stays on your devices and in your own iCloud.",
    facts: ["No bank login", "Reads email alerts", "Syncs with your iCloud"],
  },

  features: {
    eyebrow: "Features",
    title: "Less typing. *More knowing.*",
    items: [
      {
        id: "alerts",
        title: "Reads your bank's own alerts",
        body: "Turn on email alerts in your bank's app and add one Shortcuts automation. Each alert becomes a transaction, with the amount, merchant, card and date picked out of your bank's wording. Confirm with a tap.",
      },
      {
        id: "learns",
        title: "Learns your merchants and categories",
        body: "Rename “WALMART STORE #3064” to Walmart once, and Spendwise suggests it next time. Categories you pick become suggestions, and when your history agrees, they're set for you.",
      },
      {
        id: "cards",
        title: "Card payments, counted once",
        body: "Paying a Visa from your chequing account? Spendwise links the payment to the card, so purchases you've already recorded aren't counted twice. Only what they don't explain, like interest, counts.",
      },
      {
        id: "budgets",
        title: "Budgets with a sense of proportion",
        body: "Give any category a monthly budget and see where you stand. Spendwise suggests an amount from your average income, like keeping Food & Drinks under 15%.",
      },
      {
        id: "summary",
        title: "See where it all went",
        body: "Totals by category and tag for this year, last year or any range, plus a plain answer: for every $10 you earned, how much you spent and saved.",
      },
      {
        id: "export",
        title: "Search, tidy up, take it with you",
        body: "Search every transaction, edit many at once, and export them all to a CSV file whenever you like.",
      },
    ],
  },

  steps: {
    eyebrow: "How it works",
    title: "Three steps, *once*.",
    items: [
      {
        title: "Add the shortcut",
        body: "In Spendwise's Help tab, open Email Automation and tap Add Shortcut to install the ready-made Add Transaction shortcut.",
      },
      {
        title: "Automate your alerts",
        body: "In the Shortcuts app, create an automation that runs it when you get an email from your bank's alert address.",
      },
      {
        title: "Turn on bank alerts",
        body: "Enable email alerts for purchases in your bank's app. From then on, each alert becomes a transaction after a quick confirmation.",
      },
    ],
  },

  privacy: {
    eyebrow: "Private by design",
    title: "Your spending stays *yours*.",
    lead: "Spendwise never asks for your bank login. Alerts are read right on your iPhone, and your transactions live on your device and in your own iCloud. We never see them.",
    points: [
      "No bank login, no account linking, no sign-up.",
      "Alerts are read on your device, by Shortcuts and Spendwise.",
      "Stored on your device and synced through your private iCloud.",
      "No analytics, no ads, no tracking. We don't collect personal information.",
    ],
    quote: {
      text: "Your data is stored exclusively on your device (iPhone or iPad) and your iCloud account. It is never transmitted elsewhere, ensuring privacy.",
      source: "Help › Human Friendly Privacy Policy, inside the app",
    },
  },

  faq: {
    eyebrow: "FAQ",
    title: "Questions, *answered*.",
    items: [
      {
        question: "Does Spendwise connect to my bank?",
        answer:
          "No. It reads the alert emails your bank already sends you, through a Shortcuts automation you set up yourself. There are no bank logins and nothing to link.",
      },
      {
        question: "Which banks does it work with?",
        // "en-GB" lists without a serial comma, like the rest of the copy
        answer: `It recognizes alerts from ${new Intl.ListFormat("en-GB").format(banks)}. It reads amounts and merchants from the alert's wording, so other banks' alerts can work too.`,
      },
      {
        question: "Does it read all my email?",
        answer:
          "No. The automation runs only for emails from the address you choose, your bank's alert address, and you confirm each transaction before it's added.",
      },
      {
        question: "Can I add transactions by hand?",
        answer:
          "Yes. Tap Add on the Transactions tab and fill in the details. Spendwise still suggests the merchant name and category from your history.",
      },
      {
        question: "How does it handle credit card payments?",
        answer:
          "Mark a payment as paying a card, or let Spendwise spot it in the alert, and it counts only the part your recorded purchases don't explain, so nothing is counted twice.",
      },
      {
        question: "Can I export my data?",
        answer:
          "Yes. Export every transaction to a CSV file with its date, amount, merchant, card, type, category and tags.",
      },
      {
        question: "Will my data sync between iPhone and iPad?",
        answer:
          "Yes. Spendwise syncs through your private iCloud, so your transactions appear on each iPhone and iPad signed in to the same Apple Account.",
      },
      {
        question: "Is my data shared with anyone?",
        answer:
          "No. We don't collect, transmit or store any personal information. Your data lives on your device and in your iCloud, and we have no access to it. The [privacy policy](/spendwise/privacy) has the details.",
      },
      {
        question: "How much does it cost?",
        answer:
          "Spendwise is a one-time purchase on the App Store. There's no subscription, no in-app purchase and no ads.",
      },
      {
        question: "What do I need?",
        answer:
          "An iPhone or iPad running iOS or iPadOS 17.0 or later. To add transactions from alerts, turn on email alerts with your bank.",
      },
    ],
  },

  cta: {
    title: "Let the alerts *roll in*.",
    body: "Spendwise for iPhone and iPad. One purchase, no subscription, and no bank login, ever.",
  },

  disclaimer:
    "Spendwise is a personal record-keeping tool, not financial advice. It isn't affiliated with any bank or card issuer; bank names are trademarks of their respective owners.",
};

/** A bank alert split into plain text and the fields the parser picks out. */
export type AlertPart =
  | string
  | { field: "amount" | "merchant" | "bank" | "card" | "date"; text: string };

/**
 * Real alert wording from the app's TextToTransactionParserTests, with the
 * transaction the Add Transaction shortcut then shows (TransactionItem): the
 * merchant as written, the amount, the card named after its bank, and the
 * date, or today when the alert has none. A first alert from a merchant has
 * no category yet. Only the greeting of the CIBC alert is removed; it
 * doesn't affect parsing.
 */
export const alerts: {
  bank: string;
  from: string;
  subject: string;
  parts: AlertPart[];
  result: {
    merchant: string;
    amount: string;
    card: string;
    date: string;
    note?: string;
  };
}[] = [
  {
    bank: "RBC",
    from: "RBC Royal Bank",
    subject: "Credit card purchase",
    parts: [
      "As requested, we’re letting you know that a purchase of ",
      { field: "amount", text: "$37.32" },
      " was made on your ",
      { field: "bank", text: "RBC" },
      " Royal Bank credit card account ************",
      { field: "card", text: "9788" },
      " on ",
      { field: "date", text: "February 22, 2024" },
      " towards ",
      { field: "merchant", text: "WALMART STORE #3064" },
      ".",
    ],
    result: {
      merchant: "WALMART STORE #3064",
      amount: "$37.32",
      card: "RBC",
      date: "Feb 22, 2024",
    },
  },
  {
    bank: "CIBC",
    from: "CIBC",
    subject: "You've made a purchase",
    parts: [
      "You've recently made a purchase with your ",
      { field: "bank", text: "CIBC" },
      " Costco World Mastercard ending in ",
      { field: "card", text: "9098" },
      " for ",
      { field: "amount", text: "$264.01" },
      " at ",
      { field: "merchant", text: "RUTH'S CHRIS STEAKHOUS" },
      ". You can sign on to your CIBC Online or Mobile Banking to view more details about this transaction.",
    ],
    result: {
      merchant: "RUTH'S CHRIS STEAKHOUS",
      amount: "$264.01",
      card: "CIBC",
      date: "Today",
      note: "No date in this alert, so it's dated the day it arrives.",
    },
  },
  {
    bank: "Tangerine",
    from: "Tangerine",
    subject: "Pre-authorized payment",
    parts: [
      "A pre-authorized payment of ",
      { field: "amount", text: "$15.99" },
      " was charged to your ",
      { field: "bank", text: "Tangerine" },
      " Mastercard at ",
      { field: "merchant", text: "SPOTIFY" },
      ".",
    ],
    result: {
      merchant: "SPOTIFY",
      amount: "$15.99",
      card: "Tangerine",
      date: "Today",
      note: "No date in this alert either, so it's dated the day it arrives.",
    },
  },
];

/** Copy for the sections only Spendwise has. */
export const extras = {
  alerts: {
    eyebrow: "See it read",
    title: "From alert to transaction, *in your bank's own words*.",
    lead: "Spendwise picks the amount, merchant, card and date out of the alert your bank sends. These are real alert formats from three banks.",
    pick: "Pick an alert",
    added: "Okay, added a transaction.",
  },
  banks: {
    label: "Reads alerts from",
  },
};
