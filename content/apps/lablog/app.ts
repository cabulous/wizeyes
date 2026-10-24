import type { AppContent } from "@/content/types";

/**
 * Lablog (repo: cabulous/Lablog, bundle com.wizeyes.www.Lablog). Every claim
 * below is backed by the app's source as of its batch-entry release; check it
 * there before changing a feature claim. Interface words ("Add Results",
 * "Same tests as a past visit", "Choose tests…", "Search Normal Range",
 * "Export CSV", "Mark as Important") are the app's own English strings from
 * Lablog/Localizable.xcstrings.
 *
 * Not claimed: reading PDFs or photos of a report (a non-goal of the batch
 * entry design, docs/superpowers/specs), reminders, Apple Health, sharing
 * with a doctor, and any reading of what a result means.
 */
export const lablog: AppContent = {
  slug: "lablog",
  name: "Lablog",
  storeName: "Lablog - Blood Test Tracker",
  tagline:
    "A private log of your blood test results, each one charted against its normal range, on iPhone and iPad.",
  seoTitle: "Lablog: Blood Test Tracker for iPhone and iPad",
  description:
    "Track blood test results on iPhone and iPad. Log a whole lab visit at once, see each value against its normal range and chart it over time. Private, in iCloud.",
  keywords: [
    "blood test tracker",
    "lab results app",
    "blood work log",
    "track lab results over time",
    "cholesterol tracker",
    "thyroid test tracker",
    "HbA1c tracker",
    "private health app",
    "iPhone",
    "iPad",
  ],
  category: "Health & Fitness",
  schemaCategory: "HealthApplication",
  platforms: ["iPhone", "iPad"],
  minimumOS: "iOS 17.0",
  // No StoreKit in the app, and Help links to Apple's refund page: it's paid up front.
  pricing: "One-time purchase",
  icon: {
    src: "/apps/lablog/icon-512.png",
    alt: "Lablog app icon: an orange-capped test tube, half filled with orange, on white",
  },
  themeColor: "#F7F6F2",

  hero: {
    eyebrow: "For iPhone & iPad · Blood tests",
    title: "Every result, *in its range*.",
    lead: "Lablog keeps your blood test results in one private log. Type in a whole lab visit at once, see each value against its normal range, and watch the line build from one checkup to the next. It all stays on your device and in your iCloud.",
    facts: [
      "70+ tests with normal ranges",
      "Syncs through iCloud",
      "8 languages",
    ],
  },

  features: {
    eyebrow: "Features",
    title: "A lab notebook that *reads itself back*.",
    items: [
      {
        id: "batch",
        title: "A whole visit, one screen",
        body: "Add Results puts every test from a report on one page under one date. Pick the same tests as a past visit, choose them yourself, or take them all. Values outside their range turn red as you type, and if a test already has a result that day, you choose to replace or skip it.",
      },
      {
        id: "range",
        title: "Green in range, yellow out",
        body: "Every result is drawn against its normal range: green inside it, yellow below or above. The range is yours to set: a low value, and a high one only if the test has one.",
      },
      {
        id: "trend",
        title: "The line, not just the dot",
        body: "Your list shows each test's latest value with its last three results beside it. Tap one for the full chart and every result by date, any of which you can fix or delete.",
      },
      {
        id: "presets",
        title: "70+ tests, ready to pick",
        body: "Start from built-in tests with their units and ranges, the most common first. Search by name or keyword, like “thyroid”, or create your own. Search Normal Range looks a test up on the web in one tap.",
      },
      {
        id: "widget",
        title: "Your numbers, on the Home Screen",
        body: "A small, medium or large widget lists your tests with their latest values and a green or yellow dot. Show them all, or only the ones you've marked as important.",
      },
      {
        id: "export",
        title: "Take it all with you",
        body: "Export CSV writes every result to one spreadsheet file: test, unit, range, date and value. Open it in Numbers or Excel, or keep it as a backup.",
      },
    ],
  },

  steps: {
    eyebrow: "How it works",
    title: "From paper to pattern in *three steps*.",
    items: [
      {
        title: "Pick your tests",
        body: "Lablog opens on its list of built-in tests, the most common ones first. Tap the ones on your reports, or create a test with your lab's own range.",
      },
      {
        title: "Type in your report",
        body: "Tap + then Add Results, set the date of the visit and fill in the values. Next time, start from the same tests as that visit.",
      },
      {
        title: "Watch the trend",
        body: "Each test shows its latest value and a small chart. Star the ones you follow closely, and filter the list or the widget to them.",
      },
    ],
  },

  privacy: {
    eyebrow: "Private by design",
    title: "Your results stay *yours*.",
    lead: "Lablog has no account and no WizEyes server. Results are stored on your iPhone or iPad and synced through your own iCloud, so they're on every device you use and nowhere else.",
    points: [
      "No sign-up and no WizEyes account.",
      "Stored on your device and in your iCloud, nowhere else.",
      "We can't see your results.",
      "No analytics, no ads, no tracking.",
    ],
    quote: {
      text: "Your data is stored exclusively on your device (iPhone or iPad) and your iCloud account. It is never transmitted elsewhere, ensuring privacy.",
      source: "Lablog's Human Friendly Privacy Policy, in the app's Help tab",
    },
  },

  faq: {
    eyebrow: "FAQ",
    title: "Questions, *answered*.",
    items: [
      {
        question: "Does Lablog tell me what my results mean?",
        answer:
          "No. It records your results, charts them and marks each one against the range you've set. It doesn't diagnose or give advice. Consult a doctor in addition to using the app and before making medical decisions.",
      },
      {
        question: "Where do the normal ranges come from?",
        answer:
          "The built-in ranges are based on medical textbooks and are for information only. Ranges differ between laboratories, testing systems, ages and other factors, so you can change any test's low and high values to match your own report.",
      },
      {
        question: "My test isn't in the list. Can I add it?",
        answer:
          "Yes. Create a test with its name, unit, low value and an optional high value, plus keywords to find it by. Search Normal Range opens a web search for the test's usual range.",
      },
      {
        question: "Can I enter a whole report at once?",
        answer:
          "Yes. Tap + and Add Results to fill in every test from one visit under one date. Lablog remembers which tests you had together, so your next visit can start from the same set.",
      },
      {
        question: "Can it read a PDF or a photo of my report?",
        answer:
          "No. You type each value in. Add Results keeps that to one screen per visit, with the unit, range and your last value beside every field.",
      },
      {
        question: "Does it sync between my iPhone and iPad?",
        answer:
          "Yes, through your iCloud account. A result you add or delete on one device updates on the others.",
      },
      {
        question: "Can I get my data out?",
        answer:
          "Yes. In the Help tab, Export CSV saves every result to a spreadsheet file you can open anywhere.",
      },
      {
        question: "Which languages does it speak?",
        answer:
          "English, Simplified Chinese, Traditional Chinese, French, Spanish, German, Japanese and Korean, built-in test names included. It follows your device, or you can pick a language in Help.",
      },
      {
        question: "What do I need?",
        answer: "An iPhone or iPad running iOS 17 or later.",
      },
    ],
  },

  cta: {
    title: "Start your *lab log*.",
    body: "Lablog for iPhone and iPad. Every blood test in one place, each against its range, and kept nowhere but your device and your iCloud.",
  },

  disclaimer:
    "Lablog is a record-keeping app. It doesn't diagnose or give medical advice; consult a doctor in addition to using it and before making medical decisions. Built-in reference ranges are based on medical textbooks, are for information only and may differ from your laboratory's. iPhone, iPad and iCloud are trademarks of Apple Inc.",
};

/**
 * Built-in tests for the page's scrolling reference shelf: name, unit and
 * range exactly as in Lablog/Support/presetupIndicators.json.
 */
export const presets: { name: string; unit: string; range: string }[] = [
  { name: "Glucose (Fasting)", unit: "mmol/L", range: "3.9–5.6" },
  { name: "Glycated Hemoglobin (HbA1c)", unit: "%", range: "4.8–5.6" },
  { name: "Total Cholesterol", unit: "mmol/L", range: "0–5.2" },
  { name: "LDL Cholesterol", unit: "mmol/L", range: "0–3.5" },
  { name: "HDL Cholesterol", unit: "mmol/L", range: "> 1" },
  { name: "Triglycerides", unit: "mmol/L", range: "0–1.7" },
  { name: "Free T4", unit: "pmol/L", range: "11–23" },
  { name: "Thyroid Stimulating Hormone (TSH)", unit: "mIU/L", range: "0.35–5" },
  { name: "Hemoglobin", unit: "g/L", range: "129–165" },
  { name: "Platelet Count", unit: "10*9/L", range: "155–372" },
  { name: "White Blood Cell Count", unit: "10*9/L", range: "3.2–9.4" },
  { name: "Creatinine", unit: "umol/L", range: "60–110" },
  { name: "Vitamin B12", unit: "pmol/L", range: "220–701" },
  { name: "25 Hydroxy Vitamin D", unit: "nmol/L", range: "76–250" },
  { name: "Alanine Aminotransferase (ALT)", unit: "U/L", range: "0–46" },
  { name: "Potassium", unit: "mEq/L", range: "3.5–5.5" },
  { name: "Sodium", unit: "mEq/L", range: "135–145" },
  { name: "Calcium", unit: "mmol/L", range: "2.15–2.6" },
  { name: "Uric Acid", unit: "mg/dL", range: "3.5–7.2" },
  { name: "C-Reactive Protein (CRP)", unit: "mg/dL", range: "0–0.3" },
];

/** One sample result. Dates are ISO days; values in the test's unit. */
export type Reading = { date: string; value: number };

/** A sample test for the page's illustrations, with its preset range. */
export type SampleTest = {
  name: string;
  unit: string;
  low: number;
  high?: number;
  important?: boolean;
  history: Reading[];
};

/*
 * Sample results for the illustrations: a thyroid panel settling into range
 * over a year and a half, and a few common tests. Names, units and ranges are
 * the presets'; the values are made up.
 */
export const thyroidPanel: SampleTest[] = [
  {
    name: "Free T4",
    unit: "pmol/L",
    low: 11,
    high: 23,
    important: true,
    history: [
      { date: "2025-04-14", value: 9.8 },
      { date: "2025-10-20", value: 13.6 },
      { date: "2026-04-13", value: 15.9 },
    ],
  },
  {
    name: "Free T3",
    unit: "pmol/L",
    low: 3.4,
    high: 5.9,
    history: [
      { date: "2025-04-14", value: 3.1 },
      { date: "2025-10-20", value: 3.9 },
      { date: "2026-04-13", value: 4.4 },
    ],
  },
  {
    name: "Thyroid Stimulating Hormone (TSH)",
    unit: "mIU/L",
    low: 0.35,
    high: 5,
    important: true,
    history: [
      { date: "2025-04-14", value: 7.2 },
      { date: "2025-10-20", value: 4.1 },
      { date: "2026-04-13", value: 2.6 },
    ],
  },
  {
    name: "Thyroglobulin Antibodies",
    unit: "kIU/L",
    low: 0,
    high: 41,
    history: [
      { date: "2025-04-14", value: 58 },
      { date: "2025-10-20", value: 46 },
      { date: "2026-04-13", value: 37 },
    ],
  },
];

/** The demo's new visit: the date it's entered on and a value for each test above. */
export const newVisit = {
  date: "2026-10-19",
  values: ["17.2", "4.6", "1.9", "33"],
};

export const commonTests: SampleTest[] = [
  {
    name: "Total Cholesterol",
    unit: "mmol/L",
    low: 0,
    high: 5.2,
    important: true,
    history: [
      { date: "2024-11-04", value: 5.9 },
      { date: "2025-10-20", value: 5.3 },
      { date: "2026-10-19", value: 4.6 },
    ],
  },
  {
    name: "Glycated Hemoglobin (HbA1c)",
    unit: "%",
    low: 4.8,
    high: 5.6,
    important: true,
    history: [
      { date: "2024-11-04", value: 5.4 },
      { date: "2025-10-20", value: 5.5 },
      { date: "2026-10-19", value: 5.3 },
    ],
  },
  {
    name: "Glucose (Fasting)",
    unit: "mmol/L",
    low: 3.9,
    high: 5.6,
    history: [
      { date: "2024-11-04", value: 5.2 },
      { date: "2025-10-20", value: 5.8 },
      { date: "2026-10-19", value: 5.1 },
    ],
  },
  {
    name: "LDL Cholesterol",
    unit: "mmol/L",
    low: 0,
    high: 3.5,
    history: [
      { date: "2024-11-04", value: 3.9 },
      { date: "2025-10-20", value: 3.7 },
      { date: "2026-10-19", value: 3.2 },
    ],
  },
  {
    name: "25 Hydroxy Vitamin D",
    unit: "nmol/L",
    low: 76,
    high: 250,
    history: [
      { date: "2024-11-04", value: 58 },
      { date: "2025-10-20", value: 71 },
      { date: "2026-10-19", value: 84 },
    ],
  },
];

/** Copy for the sections only Lablog has. */
export const extras = {
  shelf: {
    label:
      "Some of Lablog's built-in tests, with their units and normal ranges",
  },
  visit: {
    eyebrow: "Try it",
    title: "Log a whole visit *in one go*.",
    lead: "This is Add Results with a thyroid panel. Change a value: out of range, it turns red, and the chart beside it moves with you. Save to see it land in your list.",
    hint: "Sample results. Try a value outside the range.",
  },
};
