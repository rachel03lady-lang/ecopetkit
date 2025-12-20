import ServiceBanner from "@/components/services/banner/ServiceBanner";
import ServicesGrid from "@/components/services/servicesGrid/ServicesGrid";
import CaseStudy from "@/components/services/caseStudy/CaseStudy";
import CustomizationTier from "@/components/services/customizationTier/CustomizationTier";
export default function ServicesPage() {
  return (
    <main className="pt-20">
      <ServiceBanner />
      <ServicesGrid />
      <CaseStudy />
      <CustomizationTier />
      
    </main>
  );
}
