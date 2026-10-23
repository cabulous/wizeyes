import type { ReactNode } from "react";
import type { AppContent } from "@/content/types";
import { renderInline } from "@/lib/markdown";
import { AppIcon } from "./AppIcon";
import { AppStoreButton } from "./AppStoreButton";
import ui from "./ui.module.css";
import styles from "./CtaBand.module.css";

/**
 * Closing call to action. Its id is the fallback target of every download
 * button. `iconDecoration` is drawn around the app icon.
 */
export function CtaBand({
  app,
  iconDecoration,
}: {
  app: AppContent;
  iconDecoration?: ReactNode;
}) {
  return (
    <section
      id="download"
      className={`${ui.section} ${styles.section}`}
      aria-labelledby="download-title"
    >
      <div className={`${ui.container} ${styles.inner} ${ui.reveal}`}>
        <div className={styles.iconStage}>
          {iconDecoration}
          <div className={styles.icon}>
            <AppIcon app={app} size={136} />
          </div>
        </div>
        <h2 id="download-title" className={styles.title}>
          {renderInline(app.cta.title)}
        </h2>
        <p className={styles.body}>{app.cta.body}</p>
        <AppStoreButton app={app} />
        <p className={styles.meta}>
          {app.pricing} · {app.platforms.join(" & ")} · Requires {app.minimumOS}{" "}
          or later
        </p>
      </div>
    </section>
  );
}
