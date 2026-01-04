import ServiceBanner from "@/components/services/banner/ServiceBanner";
import ServicesGrid from "@/components/services/servicesGrid/ServicesGrid";
import CaseStudy from "@/components/services/caseStudy/CaseStudy";
import CustomizationTier from "@/components/services/customizationTier/CustomizationTier";
import { getServicesPage } from "@/lib/getServicesPage";
import type { Metadata } from "next";

type Props = {
  params: { lang: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const page = await getServicesPage(params.lang);

  return {
    title: page?.seo?.title ?? "OEM / ODM Services",
    description: page?.seo?.description ?? "",
    alternates: page?.seo?.canonicalUrl
      ? { canonical: page.seo.canonicalUrl }
      : undefined,
  };
}

export default async function ServicesPage({ params }: Props) {
  // 1. Pass the dynamic language from URL
  const page = await getServicesPage(params.lang);

  // --- DEBUG UI ---
  if (!page) {
    return (
      <div className="p-10 bg-red-100 text-red-900 border-4 border-red-500 m-10 rounded text-lg pt-32">
        <h1 className="font-bold text-2xl mb-4">⚠️ SERVICES PAGE NOT FOUND</h1>
        <p>
          Could not fetch data for URI:{" "}
          <strong>/{params.lang}/services/</strong>
        </p>
        <p className="mt-2">
          Check your WordPress pages list to ensure the slug is correct.
        </p>
      </div>
    );
  }

  // 2. Access data DIRECTLY (No [lang] index needed anymore)
  const content = page.servicesPage || {};

  return (
    <main className="pt-20">
      {content.hero && <ServiceBanner data={content.hero} />}
      {content.capabilities && <ServicesGrid data={content.capabilities} />}
      {content.caseStudy && <CaseStudy data={content.caseStudy} />}
      {/* Pass title and tiers data to the component */}
      {content.tiers && (
        <CustomizationTier data={content.tiers} title={content.title} />
      )}
    </main>
  );
}
