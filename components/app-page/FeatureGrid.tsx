import type { ReactNode } from "react";
import type { AppContent } from "@/content/types";
import { SectionHeader } from "./SectionHeader";
import ui from "./ui.module.css";
import styles from "./FeatureGrid.module.css";

/**
 * Bento grid: the first feature gets the large tile. `visuals` maps a
 * feature id to the illustration drawn above its text.
 */
export function FeatureGrid({
  features,
  visuals,
}: {
  features: AppContent["features"];
  visuals: Record<string, ReactNode>;
}) {
  return (
    <section
      id="features"
      className={ui.section}
      aria-labelledby="features-title"
    >
      <div className={ui.container}>
        <SectionHeader id="features-title" section={features} />
        <ul className={styles.grid}>
          {features.items.map((feature) => (
            <li key={feature.id} className={`${styles.card} ${ui.reveal}`}>
              <div className={styles.visual} aria-hidden="true">
                {visuals[feature.id]}
              </div>
              <h3 className={styles.title}>{feature.title}</h3>
              <p className={styles.body}>{feature.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
