import type { AppContent } from "@/content/types";
import { formatDate, type LegalDoc } from "@/lib/content";
import { Markdown } from "@/lib/markdown";
import { AppIcon } from "./AppIcon";
import { AppStoreButton } from "./AppStoreButton";
import { Icon } from "./Icon";
import ui from "./ui.module.css";
import styles from "./LegalDocument.module.css";

/**
 * A policy page: plain-words summary up top, the full text in a readable
 * column, and a sticky aside with contents and the app.
 */
export function LegalDocument({
  app,
  doc,
  summary,
}: {
  app: AppContent;
  doc: LegalDoc;
  summary?: string[];
}) {
  const sections = doc.blocks.filter(
    (block) => block.type === "heading" && block.level === 2,
  );
  return (
    <main className={ui.container}>
      <header className={styles.header}>
        <nav aria-label="Breadcrumb" className={styles.breadcrumb}>
          <a href={`/${app.slug}`}>{app.name}</a>
          <Icon name="chevronRight" size={14} />
          <span aria-current="page">{doc.title}</span>
        </nav>
        <h1 className={styles.title}>
          {app.name} <br />
          <em>{doc.title}</em>
        </h1>
        <p className={styles.updated}>
          Last updated{" "}
          <time dateTime={doc.lastUpdated}>{formatDate(doc.lastUpdated)}</time>
        </p>
        {summary && (
          <section className={styles.summary} aria-labelledby="summary-title">
            <h2 id="summary-title">In plain words</h2>
            <ul>
              {summary.map((point) => (
                <li key={point}>
                  <span className={styles.check}>
                    <Icon name="check" size={13} />
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </section>
        )}
      </header>

      <div className={styles.layout}>
        <article className={styles.prose}>
          <Markdown blocks={doc.blocks} />
        </article>
        <aside className={styles.aside}>
          {sections.length > 1 && (
            <nav aria-label="On this page" className={styles.toc}>
              <p>On this page</p>
              <ol>
                {sections.map((section) =>
                  section.type === "heading" ? (
                    <li key={section.id}>
                      <a href={`#${section.id}`}>{section.text}</a>
                    </li>
                  ) : null,
                )}
              </ol>
            </nav>
          )}
          <div className={styles.appCard}>
            <AppIcon app={app} size={64} decorative />
            <p className={styles.appName}>{app.name}</p>
            <p className={styles.appTagline}>{app.tagline}</p>
            <AppStoreButton app={app} size="small" />
          </div>
        </aside>
      </div>
    </main>
  );
}
