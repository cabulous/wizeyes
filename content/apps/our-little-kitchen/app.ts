import type { AppContent } from "@/content/types";

/**
 * Our Little Kitchen (repo: cabulous/our-little-kitchen, bundle
 * com.wizeyes.www.OurLittleKitchen). Every claim below is backed by the
 * app's source and its design spec (docs/superpowers/specs) as of 1.0; check
 * them there before changing a feature claim. Interface words ("Add a dish",
 * "Shuffle", "Start cooking", Editor, Viewer) are the app's own English
 * strings from Localizable.xcstrings.
 *
 * Not claimed: cooking timers (written, but never built or run: OLK-11 in
 * the app's ISSUES.md), iPad (iPhone only by design), serving scaling,
 * meal planning, shopping lists and recipe import (out of scope for v1).
 */
export const ourLittleKitchen: AppContent = {
  slug: "our-little-kitchen",
  name: "Our Little Kitchen",
  storeName: "Our Little Kitchen",
  // https://apps.apple.com/app/id6822127143
  appStoreId: "6822127143",
  tagline:
    "A private recipe book you share with the person you cook with, on iPhone.",
  seoTitle: "Our Little Kitchen: A Shared Recipe Book for Two, on iPhone",
  description:
    "A recipe book you share with the person you cook with. Save dishes, let it pick tonight's dinner and cook step by step. Private, in your iCloud.",
  keywords: [
    "shared recipe app",
    "recipe book for couples",
    "family recipe book",
    "recipe organizer",
    "what to cook tonight",
    "private recipe app",
    "iCloud recipe sharing",
    "iPhone",
  ],
  category: "Food & Drink",
  schemaCategory: "LifestyleApplication",
  platforms: ["iPhone"],
  minimumOS: "iOS 18.0",
  pricing: "No in-app purchases",
  icon: {
    src: "/apps/our-little-kitchen/icon-512.png",
    alt: "Our Little Kitchen app icon: a hand-drawn pink pig eating a bowl of rice with chopsticks, on a cream background",
  },
  themeColor: "#F8E6DF",

  hero: {
    eyebrow: "For iPhone · Cook together",
    title: "What shall we *eat tonight*?",
    lead: "Our Little Kitchen is a recipe book you share with the person you cook with. Save the dishes you love, let it suggest tonight's dinner, and cook from one calm page of steps. It all lives in your iCloud.",
    facts: [
      "Shared through iCloud",
      "No sign-up",
      "English & Simplified Chinese",
    ],
  },

  features: {
    eyebrow: "Features",
    title: "Two cooks, *one book*.",
    items: [
      {
        id: "share",
        title: "One kitchen, shared by two",
        body: "Start a kitchen and invite the person you cook with over an iCloud link. Every recipe, category and favourite is shared between you, and a dish one of you adds shows up on the other's iPhone.",
      },
      {
        id: "roles",
        title: "Editor or view only",
        body: "Invite someone as an Editor, who can add and change dishes, or as a Viewer, who can browse and cook without touching. Only the kitchen's owner invites, changes roles or removes someone.",
      },
      {
        id: "shuffle",
        title: "Can't decide? Shuffle.",
        body: "Home suggests one dish from your kitchen. Tap Shuffle for another: it skips the last few picks, so it doesn't keep landing on the same one.",
      },
      {
        id: "recipe",
        title: "Write it down your way",
        body: "A name and a one-line flavour note, a photo from your camera or library, prep and cook time, servings, a category, flavour tags, ingredients with amounts, and the steps.",
      },
      {
        id: "cook",
        title: "Cook from one calm page",
        body: "Start cooking puts every step on one page, like song lyrics. Tap a step to tick it off and the next one lights up. The screen stays awake while you cook.",
      },
      {
        id: "find",
        title: "Find it again in seconds",
        body: "Search by dish, ingredient or tag, browse by category, and keep the dishes you'll make again in Favourites, a list you both share.",
      },
    ],
  },

  steps: {
    eyebrow: "How it works",
    title: "Set the table in *three steps*.",
    items: [
      {
        title: "Start a kitchen",
        body: "Name your kitchen and yourself. It comes with eight categories to begin with, from Slow Mornings to Sweet Tooth, and you can rename or add your own.",
      },
      {
        title: "Invite the person you cook with",
        body: "In Settings, under Members, tap Invite someone and send the link in Messages. Choose whether they can make changes or only view.",
      },
      {
        title: "Add your first dish",
        body: "Tap Add a dish, fill in what you know and save. It's in your kitchen on both iPhones, ready for the next time someone asks what's for dinner.",
      },
    ],
  },

  privacy: {
    eyebrow: "Private by design",
    title: "Recipes stay *between you*.",
    lead: "There's no account to make and no WizEyes server in the middle. Your kitchen lives in your iCloud and is shared only with the people you invite, through Apple's own iCloud sharing.",
    points: [
      "No sign-up and no WizEyes account.",
      "Recipes and photos are stored on your iPhone and in iCloud.",
      "Shared only with people you invite; the owner decides who edits and who only views.",
      "No analytics, no ads, no tracking.",
    ],
  },

  faq: {
    eyebrow: "FAQ",
    title: "Questions, *answered*.",
    items: [
      {
        question: "Who can see our recipes?",
        answer:
          "Only the people in your kitchen. It's stored in the owner's iCloud and shared through iCloud with the people they invite. We can't see it.",
      },
      {
        question: "Does the person I cook with need the app too?",
        answer:
          "Yes, on their own iPhone, signed in to iCloud. They tap your invite link in Messages to join. If the link doesn't open the app, they can paste it on the app's first screen instead.",
      },
      {
        question: "What's the difference between an Editor and a Viewer?",
        answer:
          "Editors can add, change and delete dishes, mark favourites and manage categories. Viewers can browse, search and cook, but can't change anything. Only the owner can invite people, change their role or remove them.",
      },
      {
        question: "Can I be in more than one kitchen?",
        answer:
          "No. Each person has one kitchen. To join a different one, leave the one you're in first, from Settings.",
      },
      {
        question: "What happens if I leave, or someone's removed?",
        answer:
          "Once you leave, you can't see the kitchen's recipes anymore, but the owner can invite you back anytime. If the owner deletes the kitchen, everyone loses it, and that can't be undone.",
      },
      {
        question: "Which languages does it speak?",
        answer:
          "English and Simplified Chinese. It follows your iPhone's language, and you can switch in Settings under Language. Your recipes stay exactly as you typed them.",
      },
      {
        question: "Is there an iPad version?",
        answer:
          "No. Our Little Kitchen is designed for iPhone only, so every screen fits the phone in your hand while you cook.",
      },
      {
        question: "What do I need?",
        answer:
          "An iPhone running iOS 18 or later, and an iCloud account for each person in the kitchen.",
      },
    ],
  },

  cta: {
    title: "Start your *little kitchen*.",
    body: "Our Little Kitchen for iPhone. One recipe book for the two of you, no sign-up, and nothing kept anywhere but your iCloud.",
  },

  disclaimer:
    "Recipes in Our Little Kitchen are written by you and the people you invite; WizEyes doesn't see, review or publish them. iPhone and iCloud are trademarks of Apple Inc.",
};

/** The eight categories a new kitchen starts with in English (CurrentKitchen.swift). */
export const seedCategories = [
  { emoji: "🍳", name: "Slow Mornings" },
  { emoji: "🥘", name: "One-Pot Wonders" },
  { emoji: "🍜", name: "Oodles of Noodles" },
  { emoji: "🔥", name: "Sizzle & Sear" },
  { emoji: "🌮", name: "Eat With Your Hands" },
  { emoji: "🕯️", name: "Date Night" },
  { emoji: "🍪", name: "Sweet Tooth" },
  { emoji: "🫙", name: "Saucy" },
];

/** Copy for the sections only Our Little Kitchen has. */
export const extras = {
  /** Handwritten notes beside the page's illustrations, in the app's crayon voice. */
  notes: {
    shuffle: "can't decide?\ntap Shuffle!",
    cook: "one step\nat a time",
    cta: "happy\ncooking!",
  },
  cook: {
    eyebrow: "Try it",
    title: "Cook it like you'd *sing it*.",
    lead: "In Start cooking, every step sits on one page, like song lyrics. Tap a step to tick it off; the next one lights up and the rest stay readable below.",
    hint: "Tap a step",
    done: "Done — let's eat!",
    /*
     * A sample dish for the demo, written the way someone would type it in
     * (the app's own step placeholder is the first line). Interface words
     * are the app's: Done, Ingredients, "Done — let's eat!".
     */
    recipe: {
      title: "Pan-seared lemon butter salmon",
      steps: [
        "Pat the salmon dry, salt both sides, rest 5 minutes",
        "Heat the pan until it shimmers, then add a little oil",
        "Lay the salmon skin side down and press for 10 seconds",
        "Leave it alone for 4 minutes, until the skin is crisp",
        "Flip, add the butter, lemon and garlic, and spoon it over",
        "Rest for a minute, then plate with the pan juices",
      ],
      ingredients: [
        { name: "Salmon fillets", amount: "2" },
        { name: "Butter", amount: "30g" },
        { name: "Lemon", amount: "1" },
        { name: "Garlic", amount: "2 cloves" },
        { name: "Salt", amount: "to taste" },
      ],
    },
  },
};
