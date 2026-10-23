import { apps, getApp } from "@/content/apps";
import { appMarkdown } from "@/lib/llms";

// Served at /<slug>.md through the rewrite in next.config.js.
export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return apps.map((app) => ({ slug: app.slug }));
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  const app = getApp((await params).slug);
  if (!app) return new Response("Not found", { status: 404 });
  return new Response(appMarkdown(app), {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  });
}
