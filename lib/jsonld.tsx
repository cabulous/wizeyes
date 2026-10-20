import { absoluteUrl, site } from "@/content/site";
import { appStoreUrl, type AppContent } from "@/content/types";
import { plainText } from "@/lib/markdown";

/** schema.org graph for an app page: the app, its publisher and its FAQ. */
export function appJsonLd(app: AppContent) {
  const url = absoluteUrl(`/${app.slug}`);
  const store = appStoreUrl(app);
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MobileApplication",
        "@id": `${url}#app`,
        name: app.storeName,
        alternateName: app.name,
        description: app.description,
        url,
        image: absoluteUrl(app.icon.src),
        applicationCategory: app.schemaCategory,
        operatingSystem: `${app.minimumOS} or later`,
        featureList: app.features.items.map((feature) => feature.title),
        publisher: { "@id": `${site.url}/#organization` },
        ...(store ? { installUrl: store, downloadUrl: store } : {}),
      },
      {
        "@type": "Organization",
        "@id": `${site.url}/#organization`,
        name: site.company,
        url: site.url,
        email: site.email,
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: app.faq.items.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: plainText(item.answer) },
        })),
      },
    ],
  };
}

/** Inline <script type="application/ld+json">, escaped so content can't close the tag. */
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
