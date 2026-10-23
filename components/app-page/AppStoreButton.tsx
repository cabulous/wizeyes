import { appStoreUrl, type AppContent } from "@/content/types";
import { Icon } from "./Icon";
import styles from "./AppStoreButton.module.css";

/**
 * Primary download call to action. Until the app's App Store ID is filled in,
 * it points at the page's own download section instead of a dead link.
 * `shortLabel` replaces the visible label on narrow screens; assistive tech
 * still hears the full `label`.
 */
export function AppStoreButton({
  app,
  size = "large",
  label = "Download on the App Store",
  shortLabel,
}: {
  app: AppContent;
  size?: "large" | "small";
  label?: string;
  shortLabel?: string;
}) {
  const href = appStoreUrl(app) ?? "#download";
  const external = href.startsWith("http");
  return (
    <a
      className={`${styles.button} ${styles[size]}`}
      href={href}
      {...(external ? { target: "_blank", rel: "noopener" } : {})}
      {...(shortLabel ? { "aria-label": label } : {})}
    >
      {shortLabel ? (
        <>
          <span className={styles.long}>{label}</span>
          <span className={styles.short}>{shortLabel}</span>
        </>
      ) : (
        <span>{label}</span>
      )}
      <Icon
        name={external ? "arrowUpRight" : "arrowDown"}
        size={size === "large" ? 18 : 16}
      />
    </a>
  );
}
