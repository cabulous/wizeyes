import { seedCategories } from "@/content/apps/our-little-kitchen/app";
import { DishArt } from "./DishArt";
import styles from "./FeatureVisuals.module.css";

/**
 * Small illustrations for each feature card, keyed by feature id in
 * content/apps/our-little-kitchen/app.ts. Each mirrors the app in English:
 * HomeView's favourite tile reaching the other phone through iCloud,
 * SettingsView's Members section, HomeView's Chef's pick and Shuffle,
 * RecipeEditorView's fields with the app's own placeholder text,
 * CookingView's lines, and AllRecipesView's search and category chips (the
 * English seed set).
 */
export const featureVisuals = {
  share: <Share />,
  roles: <Roles />,
  shuffle: <ShufflePick />,
  recipe: <RecipeForm />,
  cook: <CookLines />,
  find: <Find />,
};

function MiniDish() {
  return (
    <div className={styles.miniDish}>
      <span className={styles.miniArt}>
        <DishArt emoji="🍪" className={styles.art} />
      </span>
      <span>
        <b>Butter cookies</b>
        <small>Sweet Tooth · Added&nbsp;by&nbsp;Jo</small>
      </span>
    </div>
  );
}

function Share() {
  return (
    <div className={styles.share}>
      <div className={styles.cloud} aria-hidden="true">
        <svg
          viewBox="0 0 240 60"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          preserveAspectRatio="none"
        >
          <path d="M20 58C20 22 220 22 220 58" strokeDasharray="2 9" />
        </svg>
        <span className={styles.cloudBadge}>
          <svg viewBox="0 0 40 26" fill="none" stroke="currentColor">
            <path
              d="M11 23h18a8 8 0 0 0 .8-16A11 11 0 0 0 9 9.5 7 7 0 0 0 11 23Z"
              strokeWidth="2.5"
              strokeLinejoin="round"
            />
          </svg>
          iCloud
        </span>
      </div>
      <div className={styles.device}>
        <p className={styles.deviceLabel}>Jo&apos;s iPhone</p>
        <MiniDish />
      </div>
      <div className={styles.device}>
        <p className={styles.deviceLabel}>Sam&apos;s iPhone</p>
        <MiniDish />
      </div>
    </div>
  );
}

function Roles() {
  const members = [
    { name: "Jo", role: "Owner" },
    { name: "Sam", role: "Editor" },
    { name: "Mia", role: "Viewer" },
  ];
  return (
    <div className={styles.list}>
      <p className={styles.listHead}>Members</p>
      <ul className={styles.rows}>
        {members.map((member) => (
          <li key={member.name}>
            <span>{member.name}</span>
            <span className={styles.soft}>{member.role}</span>
          </li>
        ))}
        <li className={styles.action}>Manage members</li>
      </ul>
    </div>
  );
}

function ShufflePick() {
  return (
    <div className={styles.shuffleWrap}>
      <div className={styles.deck} aria-hidden="true">
        <span className={styles.deckCard}>
          <DishArt emoji="🍜" className={styles.art} />
        </span>
        <span className={styles.deckCard}>
          <DishArt emoji="🍳" className={styles.art} />
        </span>
      </div>
      <div className={styles.pick}>
        <span className={styles.pickArt}>
          <DishArt emoji="🌮" className={styles.art} />
          <span className={styles.pill}>
            Chef&apos;s pick · Eat With Your Hands
          </span>
        </span>
        <span className={styles.pickRow}>
          <b>Spring onion pancakes</b>
          <span className={styles.shuffle}>
            <svg
              viewBox="0 0 24 24"
              width="14"
              height="14"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M3 7h3.5c2 0 3.3 1 4.5 3l2 4c1.2 2 2.5 3 4.5 3H21M18 4l3 3-3 3M3 17h3.5c1.4 0 2.4-.5 3.3-1.5M14.2 8.5c.9-1 1.9-1.5 3.3-1.5H21M18 14l3 3-3 3" />
            </svg>{" "}
            Shuffle
          </span>
        </span>
      </div>
    </div>
  );
}

function RecipeForm() {
  return (
    <div className={styles.form}>
      <p className={styles.field}>
        <small>Dish name</small>Rosemary crispy-skin roast chicken
      </p>
      <p className={styles.field}>
        <small>One-line flavour note</small>Golden crackly skin, juices running…
      </p>
      <p className={styles.tags}>
        {["Quick", "Weekend feast", "Comforting"].map((tag) => (
          <span key={tag}>#{tag}</span>
        ))}
      </p>
      <p className={styles.ingredient}>
        <span>Whole chicken</span>
        <span className={styles.soft}>1.6 kg</span>
      </p>
    </div>
  );
}

function CookLines() {
  const lines = [
    { text: "Pat the salmon dry", state: styles.lineDone },
    { text: "Heat the pan until it shimmers", state: styles.lineCurrent },
    { text: "Lay it skin side down", state: styles.lineNext },
  ];
  return (
    <div className={styles.lyrics}>
      {lines.map((line, i) => (
        <p key={line.text} className={line.state}>
          <span className={styles.lineMarker}>{i === 0 ? "✓" : i + 1}</span>
          {line.text}
        </p>
      ))}
    </div>
  );
}

function Find() {
  return (
    <div className={styles.find}>
      <p className={styles.search}>
        <svg
          viewBox="0 0 24 24"
          width="16"
          height="16"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        >
          <circle cx="11" cy="11" r="6.5" />
          <path d="m16 16 4 4" />
        </svg>
        <span>Search by dish, ingredient, or tag…</span>
      </p>
      <div className={styles.chips}>
        <span className={styles.chipSelected}>All recipes</span>
        {seedCategories.slice(0, 5).map((category) => (
          <span key={category.name} className={styles.chip}>
            {category.emoji} {category.name}
          </span>
        ))}
      </div>
      <p className={styles.count}>8 recipes</p>
    </div>
  );
}
