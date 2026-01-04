import Downloads from "@/components/downloads/Downloads";
import { getDownloadsPage } from "@/lib/getDownloadPage";
import type { Metadata } from "next";

type Props = {
  params: { lang: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const page = await getDownloadsPage(params.lang);

  return {
    title: page?.seo?.title ?? "Download Center",
    description: page?.seo?.description ?? "",
    alternates: page?.seo?.canonicalUrl
      ? { canonical: page.seo.canonicalUrl }
      : undefined,
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
