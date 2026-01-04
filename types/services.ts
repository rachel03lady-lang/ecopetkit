export type ServiceHero = {
  heading: string;
  subheading: string;
};

export type ServiceCapability = {
  title: string;
  description: string;
  iconKey: string;
};

export type CaseStudyImage = {
  node:{
    sourceUrl: string;
    altText: string;
    title: string;
    caption: string;
    description: string;
  }
};

export type CaseStudySteps = {
  stepLabel: string;
  stepInformation: string;
};

export type CaseStudyItem = {
  label: string;
  title: string;
  caseStudySteps: CaseStudySteps[];
  ctaLabel?: string;
  ctaLink?: string;
  imagePlaceholderTitle: string;
  imagePlaceholderSubtitle: string;
  image: CaseStudyImage;
};

export type CustomizationTier = {
  tierLabel: string;
  title: string;
  features: string[];
  isPopular?: boolean;
  ctaLabel?: string;
  ctaHref?: string;
};

export type ServicesPageContent = {
  hero: ServiceHero;
  capabilities: ServiceCapability[];
  caseStudy: CaseStudyItem;
  title: string;
  tiers: CustomizationTier[];
};
