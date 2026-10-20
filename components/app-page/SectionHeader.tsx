import type { Section } from "@/content/types";
import { renderInline } from "@/lib/markdown";
import ui from "./ui.module.css";

/** Eyebrow, h2 and optional lead. `id` labels the enclosing <section>. */
export function SectionHeader({
  id,
  section,
  align = "start",
}: {
  id: string;
  section: Section;
  align?: "start" | "center";
}) {
  return (
    <div
      className={`${align === "center" ? ui.headerCenter : ui.header} ${ui.reveal}`}
    >
      <p className={ui.eyebrow}>{section.eyebrow}</p>
      <h2 id={id} className={ui.title}>
        {renderInline(section.title)}
      </h2>
      {section.lead && <p className={ui.lead}>{renderInline(section.lead)}</p>}
    </div>
  );
}
