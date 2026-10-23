import { PhoneFrame } from "@/components/app-page/PhoneFrame";
import { DishArt } from "./DishArt";
import { Sparkle, Sprig } from "./Doodles";
import styles from "./PhoneHome.module.css";

/**
 * The app's Home tab in English (HomeView.swift: header with the members
 * pill, the Add a dish card, the Chef's pick with Shuffle, and RootTabView's
 * tabs), rebuilt in HTML with a sample dish. The crayon underline, sparkle
 * and sprig are the app's own (Design/Doodles.swift). Favourites come next in the
 * app, below the fold. A dish without a photo shows the app's placeholder
 * art for its category, as in the app.
 */
export function PhoneHome() {
  return (
    <PhoneFrame screenClassName={styles.screen}>
      <div className={styles.scroll}>
        <div className={styles.header}>
          <div className={styles.headerRow}>
            <p className={styles.kicker}>Our Little Kitchen</p>
            <span className={styles.members}>
              👫 Jo &amp; Sam&apos;s recipes
            </span>
          </div>
          <p className={styles.largeTitle}>
            <span className={styles.underline}>
              What shall we eat?
              <svg
                className={styles.titleSparkle}
                viewBox="0 0 46 60"
                aria-hidden="true"
              >
                <g filter="url(#olk-crayon)">
                  <Sparkle />
                </g>
              </svg>
            </span>{" "}
            🍽
          </p>
        </div>

        <div className={styles.heroCard}>
          <span className={styles.heroEmoji}>🍳</span>
          <span className={styles.heroText}>
            <b>Add a dish ✍️</b>
            <span>Jot the idea down, tuck it into your kitchen</span>
          </span>
          <span className={styles.heroCta}>Start →</span>
        </div>

        <div className={styles.sectionHead}>
          <b>✨ What sounds good today?</b>
          <span className={styles.shuffle}>
            <ShuffleIcon />
            Shuffle
          </span>
        </div>

        <div className={styles.pickWrap}>
          <svg
            className={styles.pickSprig}
            viewBox="-6 -28 98 54"
            aria-hidden="true"
          >
            <g filter="url(#olk-crayon)">
              <Sprig />
            </g>
          </svg>
          <div className={styles.pick}>
            <div className={styles.pickArt}>
              <DishArt emoji="🥘" className={styles.art} />
              <span className={styles.pickPill}>
                Chef&apos;s pick · One-Pot Wonders
              </span>
              <span className={styles.timePill}>⏱ 50 min</span>
            </div>
            <div className={styles.pickBody}>
              <b className={styles.pickTitle}>Coconut chicken curry</b>
              <span className={styles.soft}>
                Creamy, gently spiced, even better the next day
              </span>
              <span className={styles.divider} />
              <span className={styles.pickMeta}>
                <span>
                  <PeopleIcon /> 2 servings
                </span>
                <span>
                  <ClockIcon /> Cook 35 min
                </span>
                <b className={styles.pickStart}>Start cooking →</b>
              </span>
            </div>
          </div>
        </div>
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

const tabs = [
  { label: "Home", icon: <ForkKnifeIcon />, active: true },
  { label: "All recipes", icon: <BookIcon /> },
  { label: "Add a dish", icon: <PlusCircleIcon /> },
  { label: "Favourites", icon: <HeartIcon /> },
  { label: "Settings", icon: <SlidersIcon /> },
];

function Glyph({ children }: { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {children}
    </svg>
  );
}

function ShuffleIcon() {
  return (
    <Glyph>
      <path d="M3 7h3.5c2 0 3.3 1 4.5 3l2 4c1.2 2 2.5 3 4.5 3H21M18 4l3 3-3 3M3 17h3.5c1.4 0 2.4-.5 3.3-1.5M14.2 8.5c.9-1 1.9-1.5 3.3-1.5H21M18 14l3 3-3 3" />
    </Glyph>
  );
}

function PeopleIcon() {
  return (
    <Glyph>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3.5 19c.6-3.2 2.8-5 5.5-5s4.9 1.8 5.5 5M16 5.2a3 3 0 0 1 0 5.6M17.5 14.3c1.7.6 2.8 2.2 3 4.7" />
    </Glyph>
  );
}

function ClockIcon() {
  return (
    <Glyph>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </Glyph>
  );
}

function ForkKnifeIcon() {
  return (
    <Glyph>
      <path d="M7 3v7a2 2 0 0 0 4 0V3M9 10v11M16.5 21V3c-2 1.5-3 4-3 7.5 0 2 1 3 3 3" />
    </Glyph>
  );
}

function BookIcon() {
  return (
    <Glyph>
      <path d="M12 6.5C10 5 7.5 4.5 4 5v13c3.5-.5 6 0 8 1.5 2-1.5 4.5-2 8-1.5V5c-3.5-.5-6 0-8 1.5ZM12 6.5v13" />
    </Glyph>
  );
}

function PlusCircleIcon() {
  return (
    <Glyph>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 8v8M8 12h8" />
    </Glyph>
  );
}

function HeartIcon() {
  return (
    <Glyph>
      <path d="M12 19.5s-7.5-4.4-7.5-10A4.2 4.2 0 0 1 12 7a4.2 4.2 0 0 1 7.5 2.5c0 5.6-7.5 10-7.5 10Z" />
    </Glyph>
  );
}

function SlidersIcon() {
  return (
    <Glyph>
      <path d="M4 7h9M17 7h3M4 12h3M11 12h9M4 17h11M19 17h1" />
      <circle cx="15" cy="7" r="2" />
      <circle cx="9" cy="12" r="2" />
      <circle cx="17" cy="17" r="2" />
    </Glyph>
  );
}
