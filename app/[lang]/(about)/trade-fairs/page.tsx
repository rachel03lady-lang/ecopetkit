import TradeFairs from "@/components/trade-fairs/TradeFairs";
import { getTradeFairsPage } from "@/lib/getTradeFairsPage";
import type { Metadata } from "next";

type Props = {
  params: { lang: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const page = await getTradeFairsPage(params.lang);

  return {
    title: page?.seo?.title ?? "Trade Fairs",
    description: page?.seo?.description ?? "",
    alternates: page?.seo?.canonicalUrl
      ? { canonical: page.seo.canonicalUrl }
      : undefined,
  };
}

export default async function TradeFairsPage({ params }: Props) {
  // 1. Pass dynamic language
  const page = await getTradeFairsPage(params.lang);

  // --- DEBUG UI ---
  if (!page) {
    return (
      <div className="p-10 bg-red-100 text-red-900 border-4 border-red-500 m-10 rounded text-lg pt-32">
        <h1 className="font-bold text-2xl mb-4">
          ⚠️ TRADE FAIRS PAGE NOT FOUND
        </h1>
        <p>
          Could not fetch data for URI:{" "}
          <strong>/{params.lang}/trade-fairs/</strong>
        </p>
      </div>
    );
  }

  // 2. Access data DIRECTLY (No [lang] or .en index)
  // We provide a fallback object to prevent crashes if ACF data is empty
  const content = page.tradeFairsPage || {
    banner: { title: "Trade Fairs", description: "" },
    items: [],
  };

  return <TradeFairs data={content} />;
}
