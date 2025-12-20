import { LucideIcon } from "lucide-react";

export type Page =
  | "home"
  | "services"
  | "products"
  | "technology"
  | "blog"
  | "contact"
  | "downloads"
  | "fairs"
  | "faq_page";
export type Language = "en" | "de" | "fr" | "es";


//product
// =======================
// Buy Box (Right panel info grid)
// =======================
export interface ProductBuyBoxItem {
  label: string;
  value: string;
}

export interface BuyBoxPrimaryCTA {
  label: string;
  href: string;
}

export interface BuyBoxDownloadCTA {
  label: string;
  path: string; // local or external file
 
}

export interface ProductBuyBoxCTA {
  buyCTA: BuyBoxPrimaryCTA;
  downloadCTA?: BuyBoxDownloadCTA; // optional (some products may not have specs)
}

export interface ProductBuyBox {
  items: ProductBuyBoxItem[];
  highlights: string[]; // green tick list above buttons
  buyBoxCTA?: ProductBuyBoxCTA;
  compliance?: string[];
}

// =======================
// OEM Customization
// =======================
export interface OemCustomizationCard {
  icon: string; // emoji or later icon key
  title: string;
  description: string;
}

export interface OemCustomization {
  heading: string;
  subheading: string;
  cards: OemCustomizationCard[];
  availableOptionsLabel: string;
  customizationOptions: string[];
}

// =======================
// Bottom CTA (Reusable)
// =======================
export interface bottom_CTA {
  heading: string;
  description: string;
  buttonLabel: string;
  buttonHref: string;
}


export interface ProductsPageContent {
  // SEO
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };

  // Page heading
  h1: string;

  // Search & filters
  searchPlaceholder: string;
  categoriesLabel: string;

  // Product card
  productDetailsLabel: string;
}

// =======================
// SEO
// =======================
export interface SeoMeta {
  title: string;
  description: string;
  keywords: string[];
}


// =======================
// Product Detail Types
// =======================
export interface ProductSpecItem {
  label: string;
  value: string;
}
export interface ProductSpec {
  sectionHeading: string;
  items: ProductSpecItem[];
}

export interface ProductFaqItem {
  question: string;
  answer: string;
}

export interface ProductMarketingSection {
  title: string;
  // long content / paragraph
  content: string;
  image: string;
  imageAlign: "left" | "right" | "center";
}

export interface ProductIncludedImage {
  url: string;
  alt: string;
  tagline?: string;
}

export interface ProductWhatsIncluded {
  title: string;
  image?: ProductIncludedImage;
  whatsInTheBox: string[];
}

//related product
// small helper (optional)
export interface RelatedProductRef {
  slug: string;
  reason?: string; // optional note (e.g. "same-category", "accessory")
}

/* ======================
 * Product Video Section
 * ====================== */
export interface ProductVideo {
  heading: string;
  youtubeId: string;
  description?: string;
}


export interface Product {
  /* ======================
   * Core identity
   * ====================== */
  id: string; // internal identifier (e.g. "f1")
  slug: string; // URL slug: /products/[slug]
  name: string;
  category: string; // category label (Phase 2 → WP taxonomy)
  tagline: string;

  // hot products

  isHot: boolean;
  /* ======================
   * Media
   * ====================== */
  image: string; // main hero image
  gallery?: string[]; // clickable gallery thumbnails
  detailImages?: string[]; // optional fallback / long visuals

  /* ======================
   * Video section (optional)
   * ====================== */
  video?: ProductVideo;
  
  /* ======================
   * Certifications / tags
   * ====================== */
  certifications?: string[]; // CE, FCC, RoHS, ISO9001

  /* ======================
   * Buy box (right panel)
   * ====================== */
  buyBox: ProductBuyBox; // model, MOQ, lead time, warranty + highlights

  /* ======================
   * Feature bar (icons / ticks)
   * ====================== */
  features?: string[]; // e.g. Dual Spectrum IR, Tri-Band PDT, etc.

  /* ======================
   * Marketing sections
   * ====================== */
  marketingSections?: ProductMarketingSection[];

  /* ======================
   * What's in the box
   * ====================== */
  whatsIncluded?: ProductWhatsIncluded;

  //sharelinks

  shareLinks?: {
    platform: "facebook" | "twitter" | "linkedin" | "email";
    url?: string;
  }[];

  // related product slugs
  relatedProductSlugs?: string[];

  /* ======================
   * Technical specifications
   * ====================== */
  specs: ProductSpec;

  //packaging illlustration

  packagingImage?: string;

  /* ======================
   * OEM customization
   * ====================== */
  oemCustomization?: OemCustomization;

  /* ======================
   * Product-specific FAQ
   * ====================== */
  faq?: ProductFaqItem[];

  //bottom CTA
  bottom_CTA?: bottom_CTA;

  /* ======================
   * SEO (detail page)
   * ====================== */
  seo: SeoMeta;
}



/* ---------- COMMON ---------- */

export interface Localized<T> {
  en: T;
  de: T;
  fr: T;
  es: T;
}

/* ---------- HERO ---------- */

export interface AboutHeroContent {
  badge: string;
  title: string;
  description: string;
}

/* ---------- R&D ---------- */

export interface RDStat {
  value: string;
  label: string;
}

export interface RDFeature {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface RDSection {
  title: string;
  description: string;
  stats: RDStat[];
  features: RDFeature[];
}

/* ---------- FACTORY INTRO ---------- */

export interface FactoryHero {
  badge: string;
  title: string;
  subtitle: string;
  backgroundImage: string;
}

/* ---------- FACTORY STATS ---------- */

export interface FactoryStat {
  value: string;
  label: string;
}

/* ---------- WORKSHOPS ---------- */

export interface Workshop {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: LucideIcon;
  highlights: string[];
}

export interface ProductionWorkshopHeader {
  badge: string;
  title: string;
  description: string;
}

export type ProductionWorkshopHeaderContent = Record<
  Language,
  ProductionWorkshopHeader
>;


/* ---------- QUALITY CONTROL ---------- */

export interface QCStep {
  stage: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

/* ---------- LAB TESTING ---------- */

export interface LabTest {
  label: string;
}

export interface LabSection {
  badge: string;
  title: string;
  description: string;
  tests: LabTest[];
  images: {
    main: string;
    secondary: string;
  };
  rmaRate: {
    value: string;
    label: string;
  };
}

/* ---------- CERTIFICATIONS ---------- */

export interface Certification {
  label: string;
}

/* ---------- BOTTOM CTA ---------- */

export interface AboutCTA {
  title: string;
  description: string;
  primaryButton: {
    label: string;
    href: string;
  };
  secondaryButton: {
    label: string;
    href: string;
  };
}

/* ---------- PAGE ROOT ---------- */

export interface AboutPageContent {
  hero: AboutHeroContent;
  rd: RDSection;
  factoryHero: FactoryHero;
  factoryStats: FactoryStat[];
  workshops: Workshop[];
  qualityControl: {
    title: string;
    description: string;
    steps: QCStep[];
  };
  lab: LabSection;
  certifications: Certification[];
  cta: AboutCTA;
}

export type AboutContent = Localized<AboutPageContent>;



//services types

export interface ServiceBannerContent {
  title: string;
  description: string;
}

export type ServiceBannerTranslations = Record<Language, ServiceBannerContent>;

// Case Study types
export interface CaseStudyDetail {
  label: string;
  value: string;
}

export interface CaseStudyImageContent {
  src: string;
  alt: string;
  placeholderTitle: string;
  placeholderSubtitle: string;
}

export interface CaseStudyContent {
  badge: string;
  title: string;
  details: CaseStudyDetail[];
  ctaLabel: string;
  ctaHref: string;
  image: CaseStudyImageContent;
}

export type CaseStudyTranslations = Record<Language, CaseStudyContent>;

//customization tier

export interface CustomizationTierItem {
  tierLabel: string; // e.g. "Tier 1"
  title: string;
  features: string[];
  moq: string;
  isPopular?: boolean;
  ctaLabel?: string;
  ctaHref?: string;
}

export interface CustomizationTiersContent {
  sectionTitle: string;
  tiers: CustomizationTierItem[];
}

export type CustomizationTiersTranslations = Record<
  Language,
  CustomizationTiersContent
>;
//services types till here

export interface FeatureProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ProductSpecItem {
  label: string;
  value: string;
}
export interface ProductSpec {
  sectionHeading: string;
  items: ProductSpecItem[];
}

export interface MarketingSection {
  title: string;
  content: string;
  image: string;
  imageAlign: "left" | "right" | "center"; // center implies full-width background or large image
}



// export type ProductItem = {
//   // base (language-agnostic)
//   id: string;
//   category: string; // key, not translated label
//   image: string;
//   gallery?: string[];
//   detailImages?: string[];
//   tags?: ("hot" | "general")[];

//   // localized (injected via PRODUCT_TRANSLATIONS)
//   name?: string;
//   tagline?: string;
//   description?: string;
//   features?: string[];
//   oemOptions?: string[];
//   whatsInTheBox?: string[];

//   marketingSections?: {
//     title: string;
//     content: string;
//     image?: string;
//     imageAlign?: "left" | "right";
//   }[];

//   faq?: {
//     question: string;
//     answer: string;
//   }[];

//   specs: ProductSpec;
// };



export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  category: string;
}



export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQPageContent {
  banner: {
    title: string;
    description: string;
  };
  items: FAQItem[];
  cta: {
    text: string;
    href: Page;
  };
}


export interface TradeFair {
  id: string;
  name: string;
  date: string;
  location: string;
  booth: string;
  image: string;
  status: "upcoming" | "past";
}

export interface TradeFairsPageContent {
  banner: {
    title: string;
    description: string;
  };
  items: TradeFair[];
}


export interface DownloadItem {
  id: string;
  title: string;
  type: "Catalog" | "Manual" | "Software";
  size: string;
  date: string;
}

export interface DownloadsPageContent {
  banner: {
    title: string;
    description: string;
  };
  items: DownloadItem[];
}


//footer

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export interface FooterNewsletter {
  title: string;
  description: string;
  emailPlaceholder: string;
  buttonLabel: string;
}

export interface FooterContent {
  brand: {
    name: string;
    description: string;
  };

  socialLinks: {
    id: string;
    label: string;
    href: string;
  }[];

  sections: {
    products: FooterSection;
    company: FooterSection;
    newsletter: FooterNewsletter;
  };

  bottom: {
    rights: string;
    links: FooterLink[];
  };
}
