import { getFaqPage } from "@/lib/getFaqPage";
import GeneralFaq from "@/components/faq/GeneralFaq";
import type { Metadata } from "next";

type Props = {
  params: { lang: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const page = await getFaqPage(params.lang);

  return {
    title: page?.seo?.title ?? "Frequently Asked Questions",
    description: page?.seo?.description ?? "",
    alternates: page?.seo?.canonicalUrl
      ? { canonical: page.seo.canonicalUrl }
      : undefined,
  };
}

export default async function FaqPage({ params }: Props) {
  // 1. Pass dynamic language
  const page = await getFaqPage(params.lang);

  // --- DEBUG UI ---
  if (!page) {
    return (
      <div className="p-10 bg-red-100 text-red-900 border-4 border-red-500 m-10 rounded text-lg pt-32">
        <h1 className="font-bold text-2xl mb-4">⚠️ FAQ PAGE NOT FOUND</h1>
        <p>
          Could not fetch data for URI: <strong>/{params.lang}/faq/</strong>
        </p>
        <p className="mt-2">
          Check that an FAQ page exists in WordPress with the slug "faq".
        </p>
      </div>
    );
  }

  // 2. Access data DIRECTLY (No [lang] index)
  // Fallback to empty object to prevent crashes
  const content = page.faqPage || {};

  return <GeneralFaq data={content} />;
}
