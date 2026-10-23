import Link from "next/link";
import { site } from "@/content/site";
import type { AppContent } from "@/content/types";
import { AppIcon } from "./AppIcon";
import ui from "./ui.module.css";
import styles from "./AppFooter.module.css";

export function AppFooter({ app }: { app: AppContent }) {
  const home = `/${app.slug}`;
  const links = [
    { href: `${home}/privacy`, label: "Privacy Policy" },
    { href: `mailto:${site.email}`, label: "Support" },
    { href: `${home}.md`, label: "Markdown version" },
    { href: "/llms.txt", label: "llms.txt" },
  ];
  return (
    <footer className={styles.footer}>
      <div className={ui.container}>
        <div className={styles.top}>
          <a href={home} className={styles.brand}>
            <AppIcon app={app} size={44} decorative />
            <span>
              {app.name}
              <small>by {site.company}</small>
            </span>
          </a>
          <nav aria-label="Footer">
            <ul className={styles.links}>
              {links.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className={styles.bottom}>
          <p className={styles.disclaimer}>{app.disclaimer}</p>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} {site.company} ·{" "}
            <Link href="/">{site.name}</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
