export type CmsPageNode = {
  title: string;
  uri: string;
  slug: string;
};

export type CmsPageConnection = {
  nodes: CmsPageNode[];
};

export type CmsNavChild = {
  id: string;
  label: string;
  href: CmsPageConnection | null;
};

export type CmsNavItem = {
  id: string;
  label: string;
  href: CmsPageConnection | null;
  hasChildren: boolean;
  children: CmsNavChild[] | null;
};

export type UiTextLang = {
  navigationMenu: CmsNavItem[];
  brandName: string;
  searchPlaceholder: string;
  navigationCta: {
    ctaLabel: string;
    ctaUrl: string;
  };
};

export type UiText = {
  en: UiTextLang;
  de: UiTextLang;
  fr: UiTextLang;
  es: UiTextLang;
};
