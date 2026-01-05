import Downloads from "@/components/downloads/Downloads";
import { getDownloadsPage } from "@/lib/getDownloadPage";
import { getSeoMetadata } from "@/lib/wordpress";
import type { Metadata } from "next";

type Props = {
  params: { lang: string };
};

// 1. DYNAMIC METADATA FOR DOWNLOAD PAGE
export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  // Define the URI for this specific page (match your WordPress slug)
  const uri =`/${params.lang}/downloads/`;
  
  const seo = await getSeoMetadata(uri);

  // Fallback if WP data is missing
  if (!seo) {
    return {
      title: "Downloads | EcoPetKit",
      description: "Ecopetkit offer all the solutions! Download all the related pet care solutions.",
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


export default async function DownloadCenter({ params }: Props) {
  // 1. Pass dynamic language
  const page = await getDownloadsPage(params.lang);

  // --- DEBUG UI ---
  if (!page) {
    return (
      <div className="p-10 bg-red-100 text-red-900 border-4 border-red-500 m-10 rounded text-lg pt-32">
        <h1 className="font-bold text-2xl mb-4">⚠️ DOWNLOADS PAGE NOT FOUND</h1>
        <p>
          Could not fetch data for URI:{" "}
          <strong>/{params.lang}/downloads/</strong>
        </p>
      </div>
    );
  }

  // 2. Access data DIRECTLY (No [lang] index)
  // Ensure we pass a valid object structure even if fields are empty
  const content = page.downloads || {
    heading: "Downloads",
    subheading: "No downloads available.",
    downloadBoxItems: [],
  };

  return <Downloads content={content} />;
}
