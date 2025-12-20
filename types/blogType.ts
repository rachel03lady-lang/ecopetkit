// type/blogType.ts
import { Language } from "./types"; // existing helpers you provided

export type ProductCategoryRef = {
  id: string; // canonical id (could be WP term id in phase2)
  slug: string; // url friendly slug
  name: string; // human readable name
  description?: string;
};

export type RelatedProductRef = {
  id?: string; // product id (optional)
  slug: string; // product slug (used to link /products/[slug])
  title?: string; // product title for quick display
};

export type Author = {
  id?: string;
  name: string;
  slug?: string;
  avatar?: string;
  bio?: string;
};

export type SEOFlags = {
  noIndex?: boolean;
  noFollow?: boolean;
  canonical?: string;
};

export type BlogSEO = {
  metaTitle: string;
  metaDescription: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  twitterCard?: "summary" | "summary_large_image" | string;
  structuredData?: Record<string, any>; // JSON-LD
} & SEOFlags;

export type ContentBlockBase = { id: string; type: string };

export type ParagraphBlock = ContentBlockBase & {
  type: "paragraph";
  text: string;
};

export type HeadingBlock = ContentBlockBase & {
  type: "heading";
  level: 1 | 2 | 3 | 4;
  text: string;
};

export type ImageBlock = ContentBlockBase & {
  type: "image";
  url: string;
  alt?: string;
  caption?: string;
  width?: number;
  height?: number;
};

export type GalleryBlock = ContentBlockBase & {
  type: "gallery";
  images: ImageBlock[];
};

export type VideoBlock = ContentBlockBase & {
  type: "video";
  provider?: "youtube" | "vimeo" | "mp4" | "embed";
  url: string; // embed url or mp4 link
  embedHtml?: string; // optional pre-generated embed html
  poster?: string;
  caption?: string;
  transcript?: string;
};

export type QuoteBlock = ContentBlockBase & {
  type: "quote";
  text: string;
  author?: string;
};

export type ListBlock = ContentBlockBase & {
  type: "list";
  ordered?: boolean;
  items: string[];
};

export type EmbedBlock = ContentBlockBase & {
  type: "embed";
  provider: string;
  embedHtml: string;
};

export type ContentBlock =
  | ParagraphBlock
  | HeadingBlock
  | ImageBlock
  | GalleryBlock
  | VideoBlock
  | QuoteBlock
  | ListBlock
  | EmbedBlock;

export type BlogStatus = "draft" | "scheduled" | "published" | "archived";

export type BlogPost = {
  id: string;
  wpId?: number; // optional WP id for Phase 2
  language: Language;
  slug: string;

  title: string;
  excerpt: string;
  content?: string; // fallback raw HTML or markdown
  contentBlocks?: ContentBlock[]; // recommended structured content

  category: ProductCategoryRef[]; // allow multiple categories that are shared with products
  tags: string[];

  featuredImage?: string;
  featuredImageAlt?: string;
  imageCaption?: string;

  relatedProducts?: RelatedProductRef[]; // link to product pages
  isFeatured?: boolean;

  author: Author;
  publishedAt?: string; // ISO date
  updatedAt?: string;
  readingTime?: number; // minutes

  seo: BlogSEO;

  status?: BlogStatus;
  estimatedWordCount?: number;
};
