import type { AppContent } from "@/content/types";
import { AppIcon } from "./AppIcon";
import { AppStoreButton } from "./AppStoreButton";
import styles from "./AppNav.module.css";

const sections = [
  { id: "features", label: "Features" },
  { id: "how-it-works", label: "How it works" },
  { id: "privacy", label: "Privacy" },
  { id: "faq", label: "FAQ" },
];

/** Floating pill navigation. Links are absolute so they also work from /<slug>/privacy. */
export function AppNav({ app }: { app: AppContent }) {
  const home = `/${app.slug}`;
  return (
    <header className={styles.wrap}>
      <div className={styles.nav}>
        <a href={home} className={styles.brand}>
          <AppIcon app={app} size={34} decorative priority />
          <span>{app.name}</span>
        </a>
        <nav aria-label={`${app.name} sections`} className={styles.links}>
          {sections.map((section) => (
            <a key={section.id} href={`${home}#${section.id}`}>
              {section.label}
            </a>
          ))}
        </nav>
        <AppStoreButton app={app} size="small" label="Get the app" />
      </div>
    </header>
  );
}
