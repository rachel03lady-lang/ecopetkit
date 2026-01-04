// app/products/[slug]/ProductClient.tsx
"use client";
import {HelpCircle} from 'lucide-react';
import React, { useState } from "react";
import Link from "next/link";
import { ICON_MAP } from "@/lib/iconMap";
import { Button } from "@/components/Button";
import { Section } from "@/components/Section";
import {
  Download,
  Check,
  ChevronLeft,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ArrowLeft,
  Box,
  Package,
  FileText,
  Palette,
  Zap,
  Smartphone,
  Settings,
} from "lucide-react";
import { useRouter } from "next/navigation";

interface Props {
  product: any;
  lang: string;
}

const TikTokIcon = ({
  size = 18,
  className = "",
}: {
  size?: number;
  className?: string;
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

const getEmbedUrl = (url: string) => {
  if (!url) return "";
  // This regex extracts the ID from standard, shortened (youtu.be), and embed links
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);

  return match && match[2].length === 11
    ? `https://www.youtube.com/embed/${match[2]}`
    : url;
};

const SOCIAL_CONFIG = {
  facebook: {
    icon: Facebook,
    colorClass: "hover:bg-blue-50 hover:text-blue-600",
    getShareUrl: (url: string) =>
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
  },
  twitter: {
    icon: Twitter,
    colorClass: "hover:bg-sky-50 hover:text-sky-500",
    getShareUrl: (url: string, title: string) =>
      `https://twitter.com/intent/tweet?url=${encodeURIComponent(
        url
      )}&text=${encodeURIComponent(title)}`,
  },
  linkedin: {
    icon: Linkedin,
    colorClass: "hover:bg-blue-50 hover:text-blue-700",
    getShareUrl: (url: string) =>
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        url
      )}`,
  },
  // Instagram and TikTok do not support direct "Share via URL" for web-to-app posts.
  // For these, we typically link to the brand's profile or show a "Link Copied" toast.
  instagram: {
    icon: Instagram,
    colorClass: "hover:bg-pink-50 hover:text-pink-600",
    getShareUrl: () => "#",
  },
  tiktok: {
    icon: TikTokIcon,
    colorClass: "hover:bg-slate-50 hover:text-black",
    getShareUrl: () => "#",
  },
};

export default function ProductClient({ product, lang }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const router = useRouter();
  console.log("Product=>", product);
  // const relatedProducts = getRelatedProducts(product, 3);
  const gallery =
    product.productCoreInfo.gallery &&
    product.productCoreInfo.gallery.nodes?.length
      ? product.productCoreInfo.gallery.nodes
      : [product.featuredImage.node];

  function openContact() {
    router.push(`/${lang}/contact`);
  }

  // Use the canonical URL from your SEO object as the share target
  const shareUrl =
    product?.seo?.canonicalUrl || typeof window !== "undefined"
      ? window.location.href
      : "";
  const shareTitle = `Check out ${product?.title} on Ecopetkit!`;
  const socialLinks = product?.productCoreInfo?.socialShare || [];
 const categoryName =
   product.productCategories?.nodes?.[0]?.name || "Uncategorized";
  return (
    <div className="pt-20 min-h-screen bg-white">
      {/* back */}
      <div className="sticky top-0 z-30 bg-white/90 backdrop-blur-md border-b border-slate-100 py-3 shadow-sm">
        <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
          <Link
            href={`/${lang}/products`}
            className="flex items-center text-slate-500 hover:text-slate-900 transition-colors text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4 mr-1" /> Back to Products
          </Link>
          <div className="hidden md:block font-bold text-slate-900">
            {product.title}
          </div>
          <Button size="sm" onClick={openContact}>
            Inquire Now
          </Button>
        </div>
      </div>

      {/* hero section */}

      <div className="container mx-auto px-6 max-w-7xl py-12 md:py-20">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Left: Gallery */}
          <div className="lg:w-3/5">
            <div className="aspect-[4/3] bg-slate-50 rounded-2xl overflow-hidden mb-6 relative group border border-slate-100">
              <img
                src={gallery[activeIndex].sourceUrl}
                alt={gallery[activeIndex].altText}
                className="w-full h-full object-contain mix-blend-multiply p-8"
              />
            </div>
            <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide mb-6">
              {gallery?.map((image: any, index: number) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-24 h-24 flex-shrink-0 rounded-lg border-2 transition-all p-2 bg-slate-50 ${
                    activeIndex === index
                      ? "border-slate-900"
                      : "border-transparent hover:border-slate-200"
                  }`}
                >
                  <img
                    src={image.sourceUrl}
                    alt={image.alText}
                    className="w-full h-full object-contain mix-blend-multiply"
                  />
                </button>
              ))}
            </div>

            {/* Social Share Entrance */}
            <div className="flex items-center gap-4 text-slate-500 border-t border-slate-100 pt-6">
              <span className="text-sm font-bold uppercase tracking-wider text-slate-400">
                Share:
              </span>
              {socialLinks.map((item: any, index: number) => {
                // Extract platform key (e.g., 'facebook')
                const platformKey = item
                  .platform[0] as keyof typeof SOCIAL_CONFIG;
                const config = SOCIAL_CONFIG[platformKey];

                // Safety check: if API returns a platform we haven't mapped, skip it
                if (!config) return null;

                const IconComponent = config.icon;
                const finalUrl = config.getShareUrl(shareUrl, shareTitle);
                return (
                  <a
                    key={index}
                    href={finalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 rounded-full transition-colors ${config.colorClass}`}
                    aria-label={item.ariaLabel}
                  >
                    <IconComponent size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right: Buy Box */}

          <div className="lg:w-2/5 flex flex-col justify-center">
            <span className="text-accent font-bold tracking-wider uppercase text-sm mb-2">
              {categoryName}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 leading-tight">
              {product.title}
            </h1>
            <p className="text-xl text-slate-500 mb-8">
              {product.productCoreInfo?.tagline}
            </p>

            {/* Certifications Badge Row */}
            <div className="flex gap-3 mb-8">
              {product.productCoreInfo.certifications?.map(
                (cert: { label: string }) => (
                  <span
                    key={cert.label}
                    className="px-2 py-1 bg-slate-100 border border-slate-200 rounded text-xs font-bold text-slate-600"
                  >
                    {cert.label}
                  </span>
                )
              )}
            </div>

            <div className="bg-slate-50 rounded-xl p-6 mb-8 border border-slate-100">
              <div className="grid grid-cols-2 gap-y-4 text-sm mb-6">
                {product.productCoreInfo?.buybox.buyBoxFeatures.map(
                  (item: { label: string; value: string }) => (
                    <div key={item.label}>
                      <div className="text-slate-500">{item.label}</div>
                      <div className="text-slate-900 font-bold">
                        {item.value}
                      </div>
                    </div>
                  )
                )}
              </div>
              <div className="space-y-3">
                {product.productCoreInfo?.buybox?.buyBoxHighlights?.map(
                  (item: { highlight: string }, i: number) => (
                    <div key={i} className="flex items-center text-slate-700">
                      <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      {item.highlight}
                    </div>
                  )
                )}
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <Button
                size="lg"
                className="w-full py-4 text-lg"
                onClick={() =>
                  router.push(
                    product.productCoreInfo?.buybox?.buyBoxCta?.buyCta?.href ||
                      "/contact"
                  )
                }
              >
                {product.productCoreInfo?.buybox?.buyBoxCta?.buyCta?.label}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full py-4 text-lg flex items-center justify-center gap-2"
              >
                <Download size={20} />
                <a
                  href={
                    product.productCoreInfo?.buybox?.buyBoxCta?.downloadCta
                      ?.path?.node?.mediaItemUrl
                  }
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {
                    product.productCoreInfo?.buybox?.buyBoxCta?.downloadCta
                      ?.label
                  }
                </a>
              </Button>

              <p className="text-center text-xs text-slate-400 mt-2">
                {product.productCoreInfo?.buybox?.buyboxCompliance?.map(
                  (item: { compliance: string }, index: number) => (
                    <span key={index}>
                      {item.compliance}
                      {index < item.compliance.length - 1 && (
                        <span className={"px-2"}>•</span>
                      )}
                    </span>
                  )
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
      {product.productCoreInfo.video && (
        <Section background="white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center">
              {product.productCoreInfo.video.videoHeading}
            </h2>

            {product.productCoreInfo.video.videoDescription && (
              <p className="text-slate-600 text-center mb-6 px-3">
                {product.productCoreInfo.video.videoDescription}
              </p>
            )}

            <div className="relative aspect-video rounded-xl overflow-hidden bg-black">
              <iframe
                src={getEmbedUrl(product.productCoreInfo.video.videoYoutubeid)}
                title={product.productCoreInfo.video.videoHeading}
                className="absolute inset-0 w-full h-full"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </Section>
      )}

      {/* new feature highlight bar */}
      <div className="border-t border-b border-slate-100 bg-slate-50/50">
        <div className="container mx-auto px-6 max-w-7xl py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {(product.productCoreInfo.features || []).map(
              (item: { feature: string }, i: number) => (
                <div key={i} className="text-center">
                  <div className="w-12 h-12 mx-auto bg-white rounded-full shadow-sm flex items-center justify-center text-accent mb-4">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-slate-900">{item.feature}</h4>
                </div>
              )
            )}
          </div>
        </div>
      </div>

      {/* marketing sections (alternating) */}

      {product.productCoreInfo.marketingsection &&
        product.productCoreInfo.marketingsection.map(
          (
            section: {
              content: string;
              imageAlign: ("left" | "right" | "center")[];
              marketingImage: { node: { sourceUrl: string; altText: string } };
              title: string;
            },
            idx: number
          ) => (
            <Section key={idx} background={idx % 2 === 0 ? "white" : "gray"}>
              {section.imageAlign[0] === "center" ? (
                <div className="text-center max-w-5xl mx-auto">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    {section.title}
                  </h2>
                  <p className="text-lg text-slate-600 mb-12 max-w-3xl mx-auto">
                    {section.content}
                  </p>
                  <div className="rounded-2xl overflow-hidden shadow-xl">
                    {section.marketingImage ? (
                      <img
                        src={section.marketingImage.node?.sourceUrl}
                        alt={section.marketingImage.node?.altText}
                        className="w-full h-auto"
                      />
                    ) : (
                      <p>No Image</p>
                    )}
                  </div>
                </div>
              ) : (
                <div
                  className={`flex flex-col md:flex-row items-center gap-12 md:gap-24 ${
                    section.imageAlign[0] === "right"
                      ? ""
                      : "md:flex-row-reverse"
                  }`}
                >
                  <div className="flex-1">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
                      {section.title}
                    </h2>
                    <p className="text-lg text-slate-600 leading-relaxed">
                      {section.content}
                    </p>
                  </div>
                  <div className="flex-1 w-full">
                    <div className="rounded-2xl overflow-hidden shadow-xl">
                      {section.marketingImage ? (
                        <img
                          src={section.marketingImage.node?.sourceUrl}
                          alt={section.marketingImage.node?.altText}
                          className="w-full h-auto"
                        />
                      ) : (
                        <p>No Image</p>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </Section>
          )
        )}

      {/* what's in the box */}

      {product.whatsIncluded && (
        <Section background="white">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2 relative bg-slate-50 rounded-2xl p-12 flex items-center justify-center">
              <div className="w-full aspect-square relative">
                {/* Mock Packaging Visual */}
                <div className="absolute inset-0 border-2 border-slate-200 rounded-xl flex items-center justify-center">
                  {product.productCoreInfo.whatsincluded?.image ? (
                    <img
                      src={
                        product.productCoreInfo.whatsincluded?.image.node
                          .sourceUrl
                      }
                      alt={
                        product.productCoreInfo.whatsincluded?.image.node
                          .altText
                      }
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <Package size={64} className="text-slate-300" />
                  )}
                  <span className="absolute bottom-4 text-slate-400 text-sm">
                    {product.productCoreInfo.whatsincluded?.image.node.title}
                  </span>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-8">
                {product.productCoreInfo.whatsincluded?.title}
              </h2>
              <ul className="space-y-4">
                {product.productCoreInfo.whatsincluded?.whatsInTheBox.map(
                  (item: { boxItem: string }, idx: number) => (
                    <li
                      key={idx}
                      className="flex items-center p-4 border border-slate-100 rounded-lg hover:border-slate-300 hover:shadow-sm transition-all bg-white"
                    >
                      <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center text-accent mr-4 flex-shrink-0">
                        <Box size={16} />
                      </div>
                      <span className="text-slate-700 font-medium">
                        {item.boxItem}
                      </span>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </Section>
      )}

      {/* technical specs */}

      <Section background="dark" className="text-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">
              {product.productCoreInfo.specifications?.sectionHeading}
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto mt-4 rounded-full"></div>
          </div>
          <div className="bg-slate-800 rounded-2xl overflow-hidden border border-slate-700">
            {(
              product.productCoreInfo.specifications?.specificationsCombo || []
            ).map(
              (item: { specLabel: string; specValue: string }, idx: number) => (
                <div
                  key={idx}
                  className={`flex flex-col md:flex-row border-b border-slate-700 last:border-0 ${
                    idx % 2 === 0 ? "bg-slate-800" : "bg-slate-800/50"
                  }`}
                >
                  <div className="md:w-1/3 p-4 md:p-6 font-bold text-slate-300 border-r border-slate-700">
                    {item.specLabel}
                  </div>
                  <div className="md:w-2/3 p-4 md:p-6 text-white">
                    {item.specValue}
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </Section>
      {/* <Section background="dark">
        <div className="max-w-4xl mx-auto text-white">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Technical Specifications</h2>
            <div className="w-20 h-1 bg-accent mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="bg-slate-800 rounded-2xl overflow-hidden border border-slate-700">
            {product.specs.map((s, i) => (
              <div
                key={i}
                className={`flex flex-col md:flex-row border-b border-slate-700 last:border-0 ${
                  i % 2 === 0 ? "bg-slate-800" : "bg-slate-800/60"
                }`}
              >
                <div className="md:w-1/3 p-4 md:p-6 font-bold text-slate-300 border-r border-slate-700">
                  {s.label}
                </div>
                <div className="md:w-2/3 p-4 md:p-6 text-white">{s.value}</div>
              </div>
            ))}
          </div>
        </div>
      </Section> */}

      {/* OEM customization */}

      <Section background="gray">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">
            {product.productCoreInfo.oemOptimozation?.heading}
          </h2>
          <p className="text-slate-600">
            {product.productCoreInfo.oemOptimozation?.subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {product.productCoreInfo.oemOptimozation?.card?.map(
            (item: { icon: string[]; title: string; description: string }) => {
              const Icon = ICON_MAP[item.icon[0]] ?? Package;
              return (
                <div
                  key={item.title}
                  className="bg-white p-8 rounded-xl shadow-sm text-center hover:-translate-y-1 transition-transform duration-300"
                >
                  <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon size={28} />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-500">{item.description}</p>
                </div>
              );
            }
          )}
        </div>

        {/* Specific OEM Options List */}
        <div className="mt-12 bg-white rounded-xl p-8 border border-slate-200">
          <h4 className="font-bold mb-6 text-slate-900 flex items-center gap-2">
            <FileText size={20} className="text-slate-400" />
            {
              product.productCoreInfo.oemOptimozation?.availableOptionsLabel
            } for {product.productCoreInfo.title}:
          </h4>
          <div className="flex flex-wrap gap-3">
            {/* //add the real data for this in object  */}
            {(
              product.productCoreInfo.oemOptimozation?.availableCustomization ||
              []
            )?.map((item: { customization: string }, i: number) => (
              <span
                key={i}
                className="px-4 py-2 bg-slate-100 rounded-lg text-sm text-slate-700 font-medium"
              >
                {item.customization}
              </span>
            ))}
          </div>
        </div>
      </Section>

      {/* FAQ */}
      {product.productCoreInfo.faq && (
        <Section>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {product.productCoreInfo.faq?.map(
                (item: { answer: string; question: string }, idx: number) => (
                  <div
                    key={idx}
                    className="border border-slate-200 rounded-lg p-6 hover:border-slate-300 transition-colors"
                  >
                    <h3 className="font-bold text-lg mb-2 flex items-start gap-3">
                      <HelpCircle className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                      {item.question}
                    </h3>
                    <p className="text-slate-600 ml-8">{item.answer}</p>
                  </div>
                )
              )}
            </div>
          </div>
        </Section>
      )}

      {/*  This has to fix */}
      {product.productCoreInfo.relatedproductslugs && (
        <Section background="gray">
          <div className="flex justify-between items-end mb-8">
            <h2 className="text-3xl font-bold">Related Products</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {product.productCoreInfo.relatedproductslugs?.nodes?.map(
              (p: any) => {
                const fixedUri = p.uri?.replace("/product/", "/products/");
                return (
                  <Link key={p.id} href={fixedUri} className="block">
                    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all cursor-pointer border border-slate-100">
                      <div className="aspect-square bg-slate-50 p-6">
                        <img
                          src={p.featuredImage.node.sourceUrl}
                          className="w-full h-full object-contain mix-blend-multiply"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="font-bold text-lg mb-1">{p.title}</h3>
                      </div>
                    </div>
                  </Link>
                );
              }
            )}
          </div>
        </Section>
      )}

      {/* bottom CTA */}
      <div className="bg-slate-900 text-white py-16 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4">
            {product.productCoreInfo.bottomcta?.heading}
          </h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto">
            {product.productCoreInfo.bottomcta?.description}
          </p>
          <Button
            size="lg"
            variant="white"
            onClick={() =>
              router.push(
                product.productCoreInfo.bottomcta?.buttonHref || "/contact"
              )
            }
          >
            {product.productCoreInfo.bottomcta?.buttonLabel}
          </Button>
        </div>
      </div>
    </div>
  );
}
