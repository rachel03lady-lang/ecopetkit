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

export default function Aboutus(){
    return (
      <main className="w-full pt-20">
        <HeroAbout />
        <AboutRD />
        <FactoryIntro />
        <FactoryStats />
        <ProductionWorkshop />
        <QualityControl />
        <LabTesting />
        <Certifications />
        <AboutCTA />
      </main>
    );
}