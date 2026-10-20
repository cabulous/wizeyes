import type { ReactNode } from "react";

/**
 * A deliberately small Markdown subset, enough for policies and copy:
 * `## headings`, paragraphs, `- lists`, **strong**, *emphasis* and
 * [links](/path). Anything fancier belongs in a component, not in content.
 */

export type Block =
  | { type: "heading"; level: number; text: string; id: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] };

export type MarkdownFile = {
  meta: Record<string, string>;
  /** Body with frontmatter and <!-- comments --> removed. */
  body: string;
  blocks: Block[];
};

export function parseMarkdownFile(source: string): MarkdownFile {
  const front = /^---\n([\s\S]*?)\n---\n?/.exec(source);
  const meta: Record<string, string> = {};
  for (const line of front?.[1].split("\n") ?? []) {
    const colon = line.indexOf(":");
    if (colon > 0)
      meta[line.slice(0, colon).trim()] = line.slice(colon + 1).trim();
  }
  const body = source
    .slice(front?.[0].length ?? 0)
    .replace(/<!--[\s\S]*?-->/g, "")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
  return { meta, body, blocks: parseBlocks(body) };
}

export function parseBlocks(body: string): Block[] {
  const blocks: Block[] = [];
  let paragraph: string[] = [];
  let list: string[] | null = null;

  const endParagraph = () => {
    if (paragraph.length)
      blocks.push({ type: "paragraph", text: paragraph.join(" ") });
    paragraph = [];
  };
  const endList = () => {
    if (list) blocks.push({ type: "list", items: list });
    list = null;
  };

  for (const line of body.split("\n").map((l) => l.trim())) {
    const heading = /^(#{1,6})\s+(.+)$/.exec(line);
    if (!line) {
      endParagraph();
      endList();
    } else if (heading) {
      endParagraph();
      endList();
      blocks.push({
        type: "heading",
        level: heading[1].length,
        text: heading[2],
        id: slugify(heading[2]),
      });
    } else if (line.startsWith("- ")) {
      endParagraph();
      (list ??= []).push(line.slice(2));
    } else if (list) {
      list[list.length - 1] += ` ${line}`;
    } else {
      paragraph.push(line);
    }
  }
  endParagraph();
  endList();
  return blocks;
}

const INLINE = /(\*\*[^*]+\*\*|\*[^*]+\*|\[[^\]]+\]\([^)\s]+\))/g;

/** Renders the inline marks (**strong**, *emphasis*, [links](/path)) as React nodes. */
export function renderInline(text: string): ReactNode[] {
  return text
    .split(INLINE)
    .filter(Boolean)
    .map((part, i) => {
      if (part.startsWith("**"))
        return <strong key={i}>{part.slice(2, -2)}</strong>;
      if (part.startsWith("*")) return <em key={i}>{part.slice(1, -1)}</em>;
      const link = /^\[([^\]]+)\]\(([^)\s]+)\)$/.exec(part);
      if (link)
        return (
          <a key={i} href={link[2]}>
            {link[1]}
          </a>
        );
      return part;
    });
}

/** The same text with inline marks removed, for meta tags and structured data. */
export function plainText(text: string): string {
  return text
    .replace(/\[([^\]]+)\]\([^)\s]+\)/g, "$1")
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/\*([^*]+)\*/g, "$1");
}

export function slugify(text: string): string {
  return plainText(text)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

/** Renders parsed blocks. `headingOffset` shifts levels so `##` can become an h3 when nested. */
export function Markdown({
  blocks,
  headingOffset = 0,
}: {
  blocks: Block[];
  headingOffset?: number;
}) {
  return (
    <>
      {blocks.map((block, i) => {
        if (block.type === "heading") {
          const Tag = `h${Math.min(block.level + headingOffset, 6)}` as "h2";
          return (
            <Tag key={i} id={block.id}>
              {renderInline(block.text)}
            </Tag>
          );
        }
        if (block.type === "list") {
          return (
            <ul key={i}>
              {block.items.map((item, j) => (
                <li key={j}>{renderInline(item)}</li>
              ))}
            </ul>
          );
        }
        return <p key={i}>{renderInline(block.text)}</p>;
      })}
    </>
  );
}
