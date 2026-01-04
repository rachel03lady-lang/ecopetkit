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
import type { Metadata } from "next";

// FIX 1: Add params type definition
type Props = {
  params: { lang: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const page = await getAboutPage(params.lang);
  return {
    title: page?.seo?.title ?? "About Us",
    description: page?.seo?.description ?? "",
    alternates: page?.seo?.canonicalUrl
      ? { canonical: page.seo.canonicalUrl }
      : undefined,
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
