import {
  HeroAbout,
  AboutRD,
  FactoryIntro,
  FactoryStats,
  ProductionWorkshop,
  QualityControl,
  LabTesting,
  Certifications,
  AboutCTA,
} from "@/components/about";
import { getAboutPage } from "@/lib/getAboutPage";
import { getSeoMetadata } from "@/lib/wordpress";
import type { Metadata } from "next";

// FIX 1: Add params type definition
type Props = {
  params: { lang: string };
};

// 1. DYNAMIC METADATA FOR ABOUT PAGE
export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  // Define the URI for this specific page (match your WordPress slug)
  const uri = `/${params.lang}/about/`;
  
  const seo = await getSeoMetadata(uri);

  // Fallback if WP data is missing
  if (!seo) {
    return {
      title: "About Us | EcoPetKit",
      description: "Learn about Ecopetkit and what all efforts we put in pet care products industry.",
    };
  }

  const og = seo.openGraph || {};
  const robotsArray = seo.robots || [];
  const isNoIndex = robotsArray.includes("noindex");
  const isNoFollow = robotsArray.includes("nofollow");

  return {
    title: seo.title,
    description: seo.description,
    alternates: {
      canonical: seo.canonicalUrl,
    },
    robots: {
      index: !isNoIndex,
      follow: !isNoFollow,
    },
    openGraph: {
      title: og.title || seo.title,
      description: og.description || seo.description,
      url: og.url || seo.canonicalUrl,
      siteName: og.siteName,
      locale: og.locale || params.lang,
      images: og.image?.url ? [{ url: og.image.url }] : [],
      type: "website",
    },
    // Twitter fallback (using OG data since Twitter block is gone)
    twitter: {
      card: "summary_large_image",
      title: og.title || seo.title,
      description: og.description || seo.description,
      images: og.image?.url ? [og.image.url] : [],
    },
  };
}

export default async function Aboutus({ params }: Props) {
  // FIX 2: Pass the language from the URL to the fetcher
  const page = await getAboutPage(params.lang);

  // --- DEBUGGING START ---
  // If data is null, show this RED BOX on screen immediately.
  if (!page) {
    return (
      <div className="p-10 bg-red-100 text-red-900 border-4 border-red-500 m-10 rounded text-lg pt-32">
        <h1 className="font-bold text-2xl mb-4">⚠️ DATA FETCH ERROR</h1>
        <p>The "About" page could not be found in WordPress.</p>
        <div className="mt-4 font-mono bg-white p-4 rounded border border-red-300">
          <p>
            <strong>Attempted URI:</strong> /{params.lang}/about/
          </p>
          <p>
            <strong>WP GraphQ Endpoint:</strong>{" "}
            {process.env.NEXT_PUBLIC_WP_GRAPHQL_URL}
          </p>
        </div>
        <p className="mt-4">
          <strong>Action:</strong> Go to your WordPress Admin. Open the "About"
          page for language <strong>{params.lang}</strong>. Check the
          "Permalink" on the right side. It MUST end in{" "}
          <code>/{params.lang}/about/</code>.
        </p>
      </div>
    );
  }
  // --- DEBUGGING END ---

  // FIX 3: Removed '.en' because your new query is flat (no language groups)
  const content = page.aboutPage || {};

  return (
    <main className="w-full pt-20">
      {/* If any data section is missing, we pass empty objects to prevent crashes */}
      {content.hero && <HeroAbout data={content.hero} />}
      {content.rd && <AboutRD data={content.rd} />}
      {content.manufacturingCapability && (
        <FactoryIntro data={content.manufacturingCapability} />
      )}
      {content.factoryStats && <FactoryStats data={content.factoryStats} />}
      {content.workshops && (
        <ProductionWorkshop
          data={content.workshops}
          headerData={content.productionWorkshopHeader}
        />
      )}
      {content.qualityControl && (
        <QualityControl data={content.qualityControl} />
      )}
      {content.labTesting && <LabTesting data={content.labTesting} />}
      {content.certifications && (
        <Certifications data={content.certifications} />
      )}
      {content.cta && <AboutCTA data={content.cta} />}
    </main>
  );
}
