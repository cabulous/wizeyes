import { site } from "@/content/site";
import type { AppContent } from "@/content/types";
import { renderInline } from "@/lib/markdown";
import { Icon } from "./Icon";
import { SectionHeader } from "./SectionHeader";
import ui from "./ui.module.css";
import styles from "./Faq.module.css";

/** Native <details> accordion: answers stay in the HTML for readers and crawlers alike. */
export function Faq({ faq }: { faq: AppContent["faq"] }) {
  return (
    <section id="faq" className={ui.section} aria-labelledby="faq-title">
      <div className={`${ui.container} ${styles.layout}`}>
        <div className={styles.intro}>
          <SectionHeader id="faq-title" section={faq} />
          <p className={styles.contact}>
            Still curious? Write to{" "}
            <a href={`mailto:${site.email}`}>{site.email}</a>.
          </p>
        </div>
        <div className={styles.list}>
          {faq.items.map((item, i) => (
            <details key={item.question} className={styles.item} open={i === 0}>
              <summary>
                <h3>{item.question}</h3>
                <span className={styles.toggle} aria-hidden="true">
                  <Icon name="plus" size={18} />
                </span>
              </summary>
              <p>{renderInline(item.answer)}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
