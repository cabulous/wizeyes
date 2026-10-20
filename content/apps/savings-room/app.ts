import type { AppContent } from "@/content/types";

/**
 * Savings Room (repo: cabulous/TaxSavingsTracker, bundle
 * com.wizeyes.www.TaxSavingsTracker). Every claim below is backed by the
 * app's source as of v1.7; re-check it there before changing a feature claim.
 */
export const savingsRoom: AppContent = {
  slug: "savings-room",
  name: "Savings Room",
  storeName: "Savings Room: Track CRA & IRS",
  // https://apps.apple.com/us/app/savings-room-track-cra-irs/id6747324658
  appStoreId: "6747324658",
  tagline:
    "Track contribution room for your RRSP, TFSA, FHSA, 401(k), IRA and more, privately on iPhone and iPad.",
  seoTitle: "Savings Room: RRSP, TFSA, FHSA & IRA Contribution Room Tracker",
  description:
    "Track RRSP, TFSA, FHSA, 401(k), IRA and HSA contribution room on iPhone and iPad. No bank login, no sign-up. Your data stays on your device and in iCloud.",
  keywords: [
    "contribution room tracker",
    "TFSA contribution room",
    "RRSP contribution tracker",
    "FHSA tracker",
    "RESP tracker",
    "401(k) contribution tracker",
    "IRA contribution limit",
    "HSA contribution tracker",
    "private finance app",
    "iPhone",
    "iPad",
  ],
  category: "Finance",
  schemaCategory: "FinanceApplication",
  platforms: ["iPhone", "iPad"],
  minimumOS: "iOS 17.0",
  pricing: "One-time purchase",
  icon: {
    src: "/apps/savings-room/icon-512.png",
    alt: "Savings Room app icon: a cream piggy bank with a red maple leaf on a coral tile",
  },
  themeColor: "#EB7C6C",

  hero: {
    eyebrow: "For iPhone & iPad · Canada & US",
    title: "Never guess your *contribution room* again.",
    lead: "Savings Room keeps a calm, private tally of what you've put into each tax-advantaged account and how much room is left, so you can contribute with confidence and stay under your limits.",
    facts: ["No bank login", "No sign-up", "Syncs with your iCloud"],
  },

  features: {
    eyebrow: "Features",
    title: "Everything your savings need. *Nothing they don't.*",
    items: [
      {
        id: "limits",
        title: "Annual and lifetime limits, side by side",
        body: "Give each account a yearly limit, a lifetime cap, or both. Enter each year's room once and Savings Room shows exactly how much you've used, year after year.",
      },
      {
        id: "recurring",
        title: "Recurring contributions, handled",
        body: "Contribute every payday? Set a rule once (weekly, monthly or yearly, on the 1st and 15th or the last day of the month) and each contribution is logged for you. Pause it any time.",
      },
      {
        id: "banks",
        title: "Every institution in one view",
        body: "See how much each account holds at each bank, from BMO to Wealthsimple or Chase to Wells Fargo. Add your own institution and its logo in seconds.",
      },
      {
        id: "withdrawals",
        title: "Withdrawals that follow your rules",
        body: "Log withdrawals next to contributions, and choose per account whether they offset that year's total.",
      },
      {
        id: "lock",
        title: "Locked with Face ID",
        body: "Require Face ID, Touch ID or your passcode, right away or after a few minutes away. A privacy screen keeps balances out of the app switcher.",
      },
      {
        id: "currency",
        title: "In your currency",
        body: "Track in Canadian dollars, US dollars or any of 140+ currencies.",
      },
    ],
  },

  steps: {
    eyebrow: "How it works",
    title: "Set up in *a minute*. Calm all year.",
    items: [
      {
        title: "Import your region",
        body: "Pick Canada or the US to add its accounts and banks in one tap. Prefer a blank slate? Create your own.",
      },
      {
        title: "Set this year's room",
        body: "Enter each account's limit for the year, from CRA My Account in Canada or the IRS annual limits in the US. Once a year, in seconds.",
      },
      {
        title: "Log or automate",
        body: "Add contributions and withdrawals as they happen, or set a recurring rule once. Your remaining room updates instantly.",
      },
    ],
  },

  privacy: {
    eyebrow: "Private by design",
    title: "Your money stays *your business*.",
    lead: "There's nothing to sign up for and nothing to link. Savings Room keeps everything on your iPhone or iPad and in your own iCloud. We never see it.",
    points: [
      "Stored on your device and synced through your private iCloud.",
      "No bank logins, no government credentials, no account to create.",
      "No analytics, no ads, no tracking. We don't collect personal information.",
      "Optional Face ID lock, with a privacy screen in the app switcher.",
    ],
    quote: {
      text: "Your data is stored exclusively on your device (iPhone or iPad) and your iCloud account. It is never transmitted elsewhere, ensuring privacy.",
      source: "Settings › Human Friendly Privacy Policy, inside the app",
    },
  },

  faq: {
    eyebrow: "FAQ",
    title: "Questions, *answered*.",
    items: [
      {
        question: "Which accounts can I track?",
        answer:
          "Savings Room includes templates for Canada (RRSP, TFSA, FHSA and RESP) and the United States (401(k), Traditional IRA, Roth IRA, HSA, 529 Plan and Coverdell ESA). You can also create any account you like, with an annual limit, a lifetime limit, or both.",
      },
      {
        question: "Does it connect to my bank, the CRA or the IRS?",
        answer:
          "No. Savings Room never asks for bank or government logins. You enter your room and contributions yourself, which is what keeps your financial data completely private.",
      },
      {
        question: "Does it calculate my contribution room for me?",
        answer:
          "Your room depends on your own tax history, so you enter each year's limit once and Savings Room does the rest, tracking every contribution and withdrawal against it. The FHSA template comes preloaded with the $8,000 annual and $40,000 lifetime limits.",
      },
      {
        question: "Where do I find my contribution room?",
        answer:
          "In Canada, your TFSA, RRSP and FHSA room is in CRA My Account, and your RRSP deduction limit also appears on your Notice of Assessment. In the US, the IRS publishes each year's 401(k), IRA and HSA limits. Every account in Savings Room also has a “My Room?” shortcut that searches the web for where to find it.",
      },
      {
        question: "Can I track withdrawals?",
        answer:
          "Yes. Log contributions and withdrawals together, and choose per account whether withdrawals offset that year's contributions.",
      },
      {
        question: "Will my data sync between iPhone and iPad?",
        answer:
          "Yes. Savings Room syncs through your private iCloud, so your accounts appear on each iPhone and iPad signed in to the same Apple Account.",
      },
      {
        question: "Is my data shared with anyone?",
        answer:
          "No. We don't collect, transmit or store any personal information. Your data lives on your device and in your iCloud, and we have no access to it. The [privacy policy](/savings-room/privacy) has the details.",
      },
      {
        question: "How much does it cost?",
        answer:
          "Savings Room is a one-time purchase on the App Store. There's no subscription, no in-app purchase and no ads.",
      },
      {
        question: "What do I need?",
        answer: "An iPhone or iPad running iOS or iPadOS 17.0 or later.",
      },
    ],
  },

  cta: {
    title: "Give every dollar *room to grow*.",
    body: "Savings Room for iPhone and iPad. One purchase, no subscription, and your numbers never leave your hands.",
  },

  disclaimer:
    "Savings Room is a personal record-keeping tool, not financial or tax advice. Confirm your limits with the Canada Revenue Agency or the Internal Revenue Service; Savings Room is not affiliated with either. Bank names are trademarks of their respective owners.",
};

/** Copy for the sections only Savings Room has. */
export const extras = {
  accounts: {
    eyebrow: "Templates",
    title: "Ready for the accounts *you actually have*.",
    lead: "Import Canada or the United States in one tap, with accounts, limits and banks included. Or build your own from scratch.",
  },
  room: {
    eyebrow: "Contribution room",
    title: "See your room *before* you contribute.",
    lead: "Every account shows what you've put in and what's left, for this year and, where it applies, for life. Coral shows what you've contributed; the bold figure on the right is the room you have left.",
    hint: "Drag to add contributions",
  },
};

/**
 * Region templates shipped in the app (RegionTemplates.swift). Emoji and
 * names match what the app creates on import.
 */
export const regions = [
  {
    name: "Canada",
    flag: "🇨🇦",
    accounts: [
      { emoji: "🏖️", name: "RRSP" },
      { emoji: "💰", name: "TFSA" },
      { emoji: "🏠", name: "FHSA" },
      { emoji: "👶", name: "RESP" },
    ],
    banks: ["BMO", "CIBC", "RBC", "Scotiabank", "TD", "Wealthsimple"],
  },
  {
    name: "United States",
    flag: "🇺🇸",
    accounts: [
      { emoji: "🏖️", name: "401(k)" },
      { emoji: "💳", name: "Traditional IRA" },
      { emoji: "💳", name: "Roth IRA" },
      { emoji: "🏥", name: "HSA" },
      { emoji: "🎓", name: "529 Plan" },
      { emoji: "🎒", name: "Coverdell ESA" },
    ],
    banks: [
      "Bank of America",
      "Citibank",
      "Goldman Sachs",
      "JPMorgan Chase",
      "Wealthsimple",
      "Wells Fargo",
    ],
  },
] as const;
