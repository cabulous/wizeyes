import type { AppContent } from "@/content/types";
import { SectionHeader } from "./SectionHeader";
import ui from "./ui.module.css";
import styles from "./Steps.module.css";

/** Numbered "how it works" steps, each on a coin styled by the theme's --coin-* tokens. */
export function Steps({ steps }: { steps: AppContent["steps"] }) {
  return (
    <section
      id="how-it-works"
      className={`${ui.section} ${styles.section}`}
      aria-labelledby="steps-title"
    >
      <div className={ui.container}>
        <SectionHeader id="steps-title" section={steps} align="center" />
        <ol className={styles.steps}>
          {steps.items.map((step, i) => (
            <li key={step.title} className={`${styles.step} ${ui.reveal}`}>
              <span className={styles.coin} aria-hidden="true">
                {i + 1}
              </span>
              <h3 className={styles.title}>{step.title}</h3>
              <p className={styles.body}>{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
