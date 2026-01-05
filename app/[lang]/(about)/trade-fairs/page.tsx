import TradeFairs from "@/components/trade-fairs/TradeFairs";
import { getTradeFairsPage } from "@/lib/getTradeFairsPage";
import { getSeoMetadata } from "@/lib/wordpress";
import type { Metadata } from "next";


type Props = {
  params: { lang: string };
};

// 1. DYNAMIC METADATA FOR TRADE FAIRS PAGE
export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  // Define the URI for this specific page (match your WordPress slug)
  const uri = `/${params.lang}/trade-fairs/`;
  
  const seo = await getSeoMetadata(uri);

  // Fallback if WP data is missing
  if (!seo) {
    return {
      title: "Trade Fairs | EcoPetKit",
      description: "Meet the Ecopetkit team in person at global pet exhibitions.",
    };
  }

  return {
    title: seo.title,
    description: seo.description,
    alternates: { canonical: seo.canonicalUrl },
    openGraph: {
      title: seo.opengraphTitle || seo.title,
      description: seo.opengraphDescription || seo.description,
      url: seo.canonicalUrl,
      images: seo.opengraphImage?.sourceUrl ? [{ url: seo.opengraphImage.sourceUrl }] : [],
      locale: params.lang,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: seo.twitterTitle || seo.title,
      description: seo.twitterDescription || seo.description,
      images: seo.twitterImage?.sourceUrl ? [seo.twitterImage.sourceUrl] : [],
    },
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
