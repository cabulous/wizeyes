import { site } from "@/content/site";
import type { AppContent } from "@/content/types";
import { renderInline } from "@/lib/markdown";
import { Icon } from "./Icon";
import ui from "./ui.module.css";
import styles from "./PrivacyPanel.module.css";

/**
 * The privacy promise, drawn as a data-flow diagram for apps that keep
 * everything on device and in the user's own iCloud.
 */
export function PrivacyPanel({
  app,
  policyHref,
}: {
  app: AppContent;
  policyHref: string;
}) {
  const { privacy } = app;
  return (
    <section
      id="privacy"
      className={ui.section}
      aria-labelledby="privacy-title"
    >
      <div className={ui.container}>
        <div className={`${styles.panel} ${ui.reveal}`}>
          <div className={styles.copy}>
            <p className={`${ui.eyebrow} ${styles.eyebrow}`}>
              {privacy.eyebrow}
            </p>
            <h2 id="privacy-title" className={styles.title}>
              {renderInline(privacy.title)}
            </h2>
            {privacy.lead && <p className={styles.lead}>{privacy.lead}</p>}
            <ul className={styles.points}>
              {privacy.points.map((point) => (
                <li key={point}>
                  <span className={styles.check}>
                    <Icon name="check" size={14} />
                  </span>
                  {point}
                </li>
              ))}
            </ul>
            <a className={styles.policyLink} href={policyHref}>
              Read the full privacy policy
              <Icon name="arrowRight" size={18} />
            </a>
          </div>

          <div className={styles.side}>
            <div
              className={styles.flow}
              role="img"
              aria-label={`Diagram: ${app.name} data moves only between your device and your iCloud. ${site.name} servers never receive it.`}
            >
              <div className={`${styles.node} ${styles.device}`}>
                <Icon name="device" size={26} />
                <span>Your {app.platforms.join(" & ")}</span>
              </div>
              <div className={styles.link}>
                <span className={styles.packet} />
                <span className={styles.packet} />
              </div>
              <div className={`${styles.node} ${styles.cloud}`}>
                <Icon name="cloud" size={26} />
                <span>Your iCloud</span>
              </div>
              <div className={styles.blocked}>
                <span className={styles.cross}>
                  <Icon name="close" size={14} />
                </span>
              </div>
              <div className={`${styles.node} ${styles.server}`}>
                <Icon name="server" size={22} />
                <span className={styles.serverText}>
                  <s>{site.name} servers</s>
                  <small>Never receive your data</small>
                </span>
              </div>
            </div>

            {privacy.quote && (
              <figure className={styles.quote}>
                <blockquote>{privacy.quote.text}</blockquote>
                <figcaption>{privacy.quote.source}</figcaption>
              </figure>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
