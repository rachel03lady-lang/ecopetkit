// types/about.ts
export type CertificationItem = {
  label?: string | null;
  image?: ImageField | null;
};
export type SimpleKV = { label: string; value: string };
export type ProductionDetail = {
  title?: string | null;
  description?: string | null;
  image?: ImageField | null;
};

export type CaseStudy = {
  badge?: string | null;
  title?: string | null;
  details?: { label?: string; value?: string }[] | null;
  image?: ImageField | null;
  ctaLabel?: string | null;
  ctaHref?: string | null;
};

//abandonnd types above

export type ImageNode = {
  sourceUrl?: string;
  altText?: string;
  title?: string;
  caption?: string;
  description?: string;
};

export type ImageField = {
  node?: ImageNode | null;
};


export type Workshop = {
  title?: string | null;
  description?: string | null;
  image?: ImageField | null;
  icon_key?: string | null;
  highlights?: {highlight:string}[] | null;
};

export type LabItem = {
  title?: string | null;
  stage?:string | null;
  description?: string | null;
  icon?: string | null;
};

export type CTA = {
  title?: string | null;
  description?: string | null;
  primaryButton?: { label?: string | null; href?: string | null } | null;
  secondaryButton?: { label?: string | null; href?: string | null } | null;
};

export type AboutPageLang = {
  hero?: {
    badge?: string | null;
    title?: string | null;
    description?: string | null;
  };
  rd?: {
    title?: string | null;
    subtitle?: string | null;
    items?: { label?: string; value?: string }[] | null;
    features?: { title?: string; description?: string; icon?: string }[] | null;
  };

  manufacturingCapability?: {
    badge?: string | null;
    title?: string | null;
    subtitle?: string | null;
    backgroundImage?: ImageField | null;
  };
  factoryStats?: { value?: string; label?: string }[] | null;
  productionWorkshopHeader?: {
    badge?: string | null;
    title?: string | null;
    description?: string | null;
  };
  workshops?: Workshop[] | null;
  qualityControl?: {
    title?: string | null;
    description?: string | null;
    steps?: LabItem[] | null;
  } | null;

  labTesting?: {
    title?: string | null;
    badge?: string | null;
    description?: string | null;
    images?: {
      main?: ImageField | null;
      secondary?: ImageField | null;
    } | null;
    rmaRate?: { value: string; label: string } | null;
    tests?: { label?: string | null }[] | null;
  } | null;

  certifications?: { label?: string | null }[] | null;
  cta?: CTA | null;
};

export type Localized<T> = {
  en?: T | null;
  es?: T | null;
  de?: T | null;
  fr?: T | null;
};

export type AboutPage = {
  title?: string | null;
  seo?: {
    title?: string | null;
    description?: string | null;
    canonicalUrl?: string | null;
    focusKeywords?: string[] | null;
  } | null;
  aboutPage?: Localized<AboutPageLang> | null;
};
