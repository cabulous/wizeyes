import { apps } from "@/content/apps";
import { absoluteUrl, site } from "@/content/site";
import { appStoreUrl, type AppContent } from "@/content/types";
import { readLegalDoc } from "@/lib/content";
import { plainText } from "@/lib/markdown";

/**
 * Plain-Markdown views of the site for AI assistants and other readers that
 * prefer text to HTML, following https://llmstxt.org.
 */

/** /llms.txt: what WizEyes is and where each app's Markdown lives. */
export function llmsIndex(): string {
  return lines([
    `# ${site.name}`,
    "",
    `> ${site.summary}`,
    "",
    `Each app page has a Markdown twin (append \`.md\` to its URL) with features, FAQ and the full privacy policy. Questions: ${site.email}.`,
    "",
    "## Apps",
    "",
    ...apps.map(
      (app) =>
        `- [${app.storeName}](${absoluteUrl(`/${app.slug}.md`)}): ${app.tagline}`,
    ),
    "",
    "## Policies",
    "",
    ...apps.map((app) => {
      const policy = readLegalDoc(app.slug, "privacy");
      return `- [${app.name} ${policy.title}](${absoluteUrl(`/${app.slug}/privacy`)}): last updated ${policy.lastUpdated}.`;
    }),
    "",
    "## Optional",
    "",
    `- [Everything in one file](${absoluteUrl("/llms-full.txt")}): all app pages and policies concatenated.`,
  ]);
}

/** /llms-full.txt: every app's Markdown, one after another. */
export function llmsFull(): string {
  return [`# ${site.name}\n\n> ${site.summary}`, ...apps.map(appMarkdown)].join(
    "\n\n---\n\n",
  );
}

/** /<slug>.md: the app page as Markdown, with the privacy policy appended. */
export function appMarkdown(app: AppContent): string {
  const policy = readLegalDoc(app.slug, "privacy");
  const store = appStoreUrl(app);
  return lines([
    `# ${app.storeName}`,
    "",
    `> ${app.tagline}`,
    "",
    plainText(app.hero.lead),
    "",
    `- Web page: ${absoluteUrl(`/${app.slug}`)}`,
    store ? `- App Store: ${store}` : null,
    `- Developer: ${site.company} (${site.email})`,
    `- Category: ${app.category}`,
    `- Platforms: ${app.platforms.join(", ")}, ${app.minimumOS} or later`,
    `- Pricing: ${app.pricing}. The App Store listing has the current price.`,
    `- Version: ${app.version}`,
    "",
    `## ${plainText(app.features.title)}`,
    "",
    ...app.features.items.flatMap((feature) => [
      `### ${feature.title}`,
      "",
      feature.body,
      "",
    ]),
    `## ${plainText(app.steps.title)}`,
    "",
    ...app.steps.items.map(
      (step, i) => `${i + 1}. **${step.title}.** ${step.body}`,
    ),
    "",
    `## ${plainText(app.privacy.title)}`,
    "",
    app.privacy.lead ?? null,
    "",
    ...app.privacy.points.map((point) => `- ${point}`),
    "",
    `> ${app.privacy.quote.text}`,
    `> (${app.privacy.quote.source})`,
    "",
    "## Frequently asked questions",
    "",
    ...app.faq.items.flatMap((item) => [
      `### ${item.question}`,
      "",
      absoluteLinks(item.answer),
      "",
    ]),
    `## ${policy.title}`,
    "",
    `Last updated ${policy.lastUpdated}. Canonical page: ${absoluteUrl(`/${app.slug}/privacy`)}`,
    "",
    absoluteLinks(policy.body.replace(/^(#+) /gm, "#$1 ")),
    "",
    "## Disclaimer",
    "",
    app.disclaimer,
  ]);
}

function absoluteLinks(markdown: string): string {
  return markdown.replace(/\]\(\//g, `](${site.url}/`);
}

function lines(parts: (string | null)[]): string {
  return `${parts.filter((part) => part !== null).join("\n")}\n`;
}
