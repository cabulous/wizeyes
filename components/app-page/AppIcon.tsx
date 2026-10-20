import Image from "next/image";
import type { AppContent } from "@/content/types";
import styles from "./AppIcon.module.css";

/** The real app icon, clipped to Apple's rounded-square shape. */
export function AppIcon({
  app,
  size,
  priority = false,
  decorative = false,
  className = "",
}: {
  app: AppContent;
  size: number;
  priority?: boolean;
  decorative?: boolean;
  className?: string;
}) {
  return (
    <Image
      className={`${styles.icon} ${className}`}
      src={app.icon.src}
      alt={decorative ? "" : app.icon.alt}
      width={size}
      height={size}
      priority={priority}
    />
  );
}
