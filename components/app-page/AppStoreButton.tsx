import { appStoreUrl, type AppContent } from "@/content/types";
import { Icon } from "./Icon";
import styles from "./AppStoreButton.module.css";

/**
 * Primary download call to action. Until the app's App Store ID is filled in,
 * it points at the page's own download section instead of a dead link.
 */
export function AppStoreButton({
  app,
  size = "large",
  label = "Download on the App Store",
}: {
  app: AppContent;
  size?: "large" | "small";
  label?: string;
}) {
  const href = appStoreUrl(app) ?? "#download";
  const external = href.startsWith("http");
  return (
    <a
      className={`${styles.button} ${styles[size]}`}
      href={href}
      {...(external ? { target: "_blank", rel: "noopener" } : {})}
    >
      <span>{label}</span>
      <Icon
        name={external ? "arrowUpRight" : "arrowDown"}
        size={size === "large" ? 18 : 16}
      />
    </a>
  );
}
