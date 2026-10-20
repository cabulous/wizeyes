import type { ReactNode } from "react";
import type { AppContent } from "@/content/types";
import { renderInline } from "@/lib/markdown";
import { AppStoreButton } from "./AppStoreButton";
import { Icon } from "./Icon";
import ui from "./ui.module.css";
import styles from "./Hero.module.css";

/** Headline, call to action and reassurance chips. `visual` is the app's own illustration. */
export function Hero({ app, visual }: { app: AppContent; visual: ReactNode }) {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={`${ui.container} ${styles.inner}`}>
        <div className={styles.copy}>
          <p className={ui.eyebrow}>{app.hero.eyebrow}</p>
          <h1 id="hero-title" className={styles.title}>
            {renderInline(app.hero.title)}
          </h1>
          <p className={styles.lead}>{app.hero.lead}</p>
          <div className={styles.actions}>
            <AppStoreButton app={app} />
            <a className={styles.secondary} href="#how-it-works">
              See how it works
              <Icon name="arrowRight" size={18} />
            </a>
          </div>
          <ul className={styles.facts}>
            {app.hero.facts.map((fact) => (
              <li key={fact}>
                <Icon name="check" size={16} />
                {fact}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.visual}>{visual}</div>
      </div>
    </section>
  );
}
