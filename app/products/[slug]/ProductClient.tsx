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
import type { Product } from "@/types/types";
import { getRelatedProducts } from "@/lib/productUtils";
import { useRouter } from "next/navigation";

interface Props {
  product: Product;
  allProducts: Product[];
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


export default function ProductClient({ product, allProducts }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const router = useRouter();
const relatedProducts = getRelatedProducts(product, allProducts, 3);
  const gallery =
    product.gallery && product.gallery.length
      ? product.gallery
      : [product.image];

  // const relatedProducts = allProducts
  //   .filter((p) => p.category === product.category && p.slug !== product.slug)
  //   .slice(0, 3);

  function openContact() {
    router.push("/contact");
  }
 console.log("Product=>", relatedProducts);

 const compliance = product.buyBox.compliance ?? [];

  return (
    <div className="pt-20 min-h-screen bg-white">
      {/* back */}
      <div className="sticky top-0 z-30 bg-white/90 backdrop-blur-md border-b border-slate-100 py-3 shadow-sm">
        <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
          <Link
            href="/products"
            className="flex items-center text-slate-500 hover:text-slate-900 transition-colors text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4 mr-1" /> Back to Products
          </Link>
          <div className="hidden md:block font-bold text-slate-900">
            {product.name}
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
                src={gallery[activeIndex]}
                alt={product.name}
                className="w-full h-full object-contain mix-blend-multiply p-8"
              />
            </div>
            <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide mb-6">
              {gallery.map((g, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`w-24 h-24 flex-shrink-0 rounded-lg border-2 transition-all p-2 bg-slate-50 ${
                    activeIndex === i
                      ? "border-slate-900"
                      : "border-transparent hover:border-slate-200"
                  }`}
                >
                  <img
                    src={g}
                    alt={`${product.name} ${i + 1}`}
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
              <a
                className="p-2 hover:bg-blue-50 hover:text-blue-600 rounded-full transition-colors"
                aria-label="Share to Facebook"
                href="#"
              >
                <Facebook size={20} />
              </a>
              <a
                className="p-2 hover:bg-sky-50 hover:text-sky-500 rounded-full transition-colors"
                aria-label="Share to Twitter"
                href="#"
              >
                <Twitter size={20} />
              </a>
              <a
                className="p-2 hover:bg-blue-50 hover:text-blue-700 rounded-full transition-colors"
                aria-label="Share to LinkedIn"
                href="#"
              >
                <Linkedin size={20} />
              </a>
              <a
                className="p-2 hover:bg-pink-50 hover:text-pink-600 rounded-full transition-colors"
                aria-label="Share to Instagram"
                href="#"
              >
                <Instagram size={20} />
              </a>
              <a
                className="p-2 hover:bg-slate-50 hover:text-black rounded-full transition-colors"
                aria-label="Share to TikTok"
                href="#"
              >
                <TikTokIcon size={20} />
              </a>
            </div>
          </div>

          {/* Right: Buy Box */}
          <div className="lg:w-2/5 flex flex-col justify-center">
            <span className="text-accent font-bold tracking-wider uppercase text-sm mb-2">
              {product.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 leading-tight">
              {product.name}
            </h1>
            <p className="text-xl text-slate-500 mb-8">{product.tagline}</p>

            {/* Certifications Badge Row */}
            <div className="flex gap-3 mb-8">
              {product.certifications?.map((cert) => (
                <span
                  key={cert}
                  className="px-2 py-1 bg-slate-100 border border-slate-200 rounded text-xs font-bold text-slate-600"
                >
                  {cert}
                </span>
              ))}
            </div>

            <div className="bg-slate-50 rounded-xl p-6 mb-8 border border-slate-100">
              <div className="grid grid-cols-2 gap-y-4 text-sm mb-6">
                {product.buyBox.items.map((item) => (
                  <div key={item.label}>
                    <div className="text-slate-500">{item.label}</div>
                    <div className="text-slate-900 font-bold">{item.value}</div>
                  </div>
                ))}
              </div>
              <div className="space-y-3">
                {product.buyBox?.highlights.map((feat, i) => (
                  <div key={i} className="flex items-center text-slate-700">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    {feat}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <Button
                size="lg"
                className="w-full py-4 text-lg"
                onClick={() =>
                  router.push(
                    product.buyBox?.buyBoxCTA?.buyCTA?.href || "/contact"
                  )
                }
              >
                {product.buyBox.buyBoxCTA?.buyCTA.label}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full py-4 text-lg flex items-center justify-center gap-2"
              >
                <Download size={20} />
                <a
                  href={product.buyBox?.buyBoxCTA?.downloadCTA?.path}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {product.buyBox?.buyBoxCTA?.downloadCTA?.label}
                </a>
              </Button>

              <p className="text-center text-xs text-slate-400 mt-2">
                {compliance?.map((item, index) => (
                  <span key={item}>
                    {item}
                    {index < compliance.length - 1 && (
                      <span className={"px-2"}>•</span>
                    )}
                  </span>
                ))}
              </p>
            </div>
          </div>
        </div>
      </div>
      {product.video && (
        <Section background="white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center">{product.video.heading}</h2>

            {product.video.description && (
              <p className="text-slate-600 text-center mb-6 px-3">{product.video.description}</p>
            )}

            <div className="relative aspect-video rounded-xl overflow-hidden bg-black">
              <iframe
                src={`https://www.youtube.com/embed/${product.video.youtubeId}`}
                title={product.name}
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
            {(product.features || []).map((feat, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 mx-auto bg-white rounded-full shadow-sm flex items-center justify-center text-accent mb-4">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-slate-900">{feat}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* marketing sections (alternating) */}

      {product.marketingSections &&
        product.marketingSections.map((section, idx) => (
          <Section key={idx} background={idx % 2 === 0 ? "white" : "gray"}>
            {section.imageAlign === "center" ? (
              <div className="text-center max-w-5xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  {section.title}
                </h2>
                <p className="text-lg text-slate-600 mb-12 max-w-3xl mx-auto">
                  {section.content}
                </p>
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src={section.image}
                    alt={section.title}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            ) : (
              <div
                className={`flex flex-col md:flex-row items-center gap-12 md:gap-24 ${
                  section.imageAlign === "right" ? "" : "md:flex-row-reverse"
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
                  <div className="rounded-2xl overflow-hidden shadow-lg aspect-[4/3]">
                    <img
                      src={section.image}
                      alt={section.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            )}
          </Section>
        ))}

      {/* what's in the box */}

      {product.whatsIncluded && (
        <Section background="white">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2 relative bg-slate-50 rounded-2xl p-12 flex items-center justify-center">
              <div className="w-full aspect-square relative">
                {/* Mock Packaging Visual */}
                <div className="absolute inset-0 border-2 border-slate-200 rounded-xl flex items-center justify-center">
                  {product.whatsIncluded?.image ? (
                    <img
                      src={product.whatsIncluded.image.url}
                      alt={product.whatsIncluded.image.alt}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <Package size={64} className="text-slate-300" />
                  )}
                  <span className="absolute bottom-4 text-slate-400 text-sm">
                    {product.whatsIncluded.image?.tagline}
                  </span>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-8">
                {product.whatsIncluded.title}
              </h2>
              <ul className="space-y-4">
                {product.whatsIncluded.whatsInTheBox.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-center p-4 border border-slate-100 rounded-lg hover:border-slate-300 hover:shadow-sm transition-all bg-white"
                  >
                    <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center text-accent mr-4 flex-shrink-0">
                      <Box size={16} />
                    </div>
                    <span className="text-slate-700 font-medium">{item}</span>
                  </li>
                ))}
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
              {product.specs.sectionHeading}
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto mt-4 rounded-full"></div>
          </div>
          <div className="bg-slate-800 rounded-2xl overflow-hidden border border-slate-700">
            {(product.specs.items || []).map((spec, idx) => (
              <div
                key={idx}
                className={`flex flex-col md:flex-row border-b border-slate-700 last:border-0 ${
                  idx % 2 === 0 ? "bg-slate-800" : "bg-slate-800/50"
                }`}
              >
                <div className="md:w-1/3 p-4 md:p-6 font-bold text-slate-300 border-r border-slate-700">
                  {spec.label}
                </div>
                <div className="md:w-2/3 p-4 md:p-6 text-white">
                  {spec.value}
                </div>
              </div>
            ))}
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
            {product.oemCustomization?.heading}
          </h2>
          <p className="text-slate-600">
            {product.oemCustomization?.subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {product.oemCustomization?.cards?.map((item) => {
            const Icon = ICON_MAP[item.icon] ?? Package;
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
          })}
        </div>

        {/* Specific OEM Options List */}
        <div className="mt-12 bg-white rounded-xl p-8 border border-slate-200">
          <h4 className="font-bold mb-6 text-slate-900 flex items-center gap-2">
            <FileText size={20} className="text-slate-400" />
            {product.oemCustomization?.availableOptionsLabel} for {product.name}
            :
          </h4>
          <div className="flex flex-wrap gap-3">
            {/* //add the real data for this in object  */}
            {(product.oemCustomization?.customizationOptions || [])?.map(
              (opt, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-slate-100 rounded-lg text-sm text-slate-700 font-medium"
                >
                  {opt}
                </span>
              )
            )}
          </div>
        </div>
      </Section>

      {/* <Section background="gray">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold">OEM Customization</h2>
          <p className="text-slate-600">
            Make it yours. Comprehensive branding options for distributors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-8 rounded-xl text-center">
            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span>🎨</span>
            </div>
            <h3 className="font-bold">Color & Finish</h3>
            <p className="text-sm text-slate-500">
              Custom Pantone options, matte/gloss finishes.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl text-center">
            <div className="w-16 h-16 bg-purple-50 text-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span>⚡</span>
            </div>
            <h3 className="font-bold">Logo Branding</h3>
            <p className="text-sm text-slate-500">
              Silk screen or laser engraving.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl text-center">
            <div className="w-16 h-16 bg-green-50 text-green-600 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span>📦</span>
            </div>
            <h3 className="font-bold">Packaging</h3>
            <p className="text-sm text-slate-500">Custom box and manuals.</p>
          </div>
          <div className="bg-white p-8 rounded-xl text-center">
            <div className="w-16 h-16 bg-orange-50 text-orange-600 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span>📱</span>
            </div>
            <h3 className="font-bold">App & Software</h3>
            <p className="text-sm text-slate-500">
              App skin and API integration.
            </p>
          </div>
        </div>

        <div className="mt-8 bg-white p-6 rounded-xl border border-slate-200">
          <h4 className="font-bold mb-4">
            Available Customization Options for {product.name}:
          </h4>
          <div className="flex flex-wrap gap-3">
            {product.oemOptions.map((o, i) => (
              <span
                key={i}
                className="px-4 py-2 bg-slate-100 rounded-lg text-sm"
              >
                {o}
              </span>
            ))}
          </div>
        </div>
      </Section> */}

      {/* FAQ */}
      {product.faq && (
        <Section>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {product.faq.map((item, idx) => (
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
              ))}
            </div>
          </div>
        </Section>
      )}
      {/* {product.faq && (
        <Section>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {product.faq.map((q, i) => (
                <div
                  key={i}
                  className="border border-slate-200 rounded-lg p-6 hover:border-slate-300"
                >
                  <h3 className="font-bold text-lg mb-2 flex items-start gap-3">
                    <div className="text-accent mt-1">❔</div>
                    {q.question}
                  </h3>
                  <p className="text-slate-600 ml-8">{q.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>
      )} */}

      {/* Related */}

      {/*  no data available for related products will create the same */}

      {/* {relatedProducts.length > 0 && (
        <Section background="gray">
          <div className="flex justify-between items-end mb-8">
            <h2 className="text-3xl font-bold">
              {t("common.relatedProducts")}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedProducts.map((product) => (
              <div
                key={product.id}
                onClick={() => handleProductClick(product)}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all cursor-pointer border border-slate-100"
              >
                <div className="aspect-square bg-slate-50 p-6">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain mix-blend-multiply"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-1">{product.name}</h3>
                  <p className="text-sm text-slate-500">{product.tagline}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>
      )} */}
      {relatedProducts.length > 0 && (
        <Section background="gray">
          <div className="flex justify-between items-end mb-8">
            <h2 className="text-3xl font-bold">Related Products</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedProducts.map((p) => (
              <Link key={p.id} href={`/products/${p.slug}`} className="block">
                <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all cursor-pointer border border-slate-100">
                  <div className="aspect-square bg-slate-50 p-6">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full h-full object-contain mix-blend-multiply"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-lg mb-1">{p.name}</h3>
                    <p className="text-sm text-slate-500">{p.tagline}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Section>
      )}
      {/* {relatedProducts.length > 0 && (
        <Section background="white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedProducts.map((rp) => (
              <div
                key={rp.slug}
                className="bg-white rounded-xl border p-6 cursor-pointer hover:shadow-lg"
                onClick={() => router.push(`/products/${rp.slug}`)}
              >
                <div className="aspect-square bg-slate-50 p-6 rounded mb-4">
                  <img
                    src={rp.image}
                    alt={rp.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="font-bold">{rp.name}</h3>
                <p className="text-sm text-slate-500">{rp.tagline}</p>
              </div>
            ))}
          </div>
        </Section>
      )} */}

      {/* bottom CTA */}
      <div className="bg-slate-900 text-white py-16 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4">
            {product.bottomCTA?.heading}
          </h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto">
            {product.bottomCTA?.description}
          </p>
          <Button
            size="lg"
            variant="white"
            onClick={() =>
              router.push(product?.bottomCTA?.buttonHref || "/contact")
            }
          >
            {product.bottomCTA?.buttonLabel}
          </Button>
        </div>
      </div>
    </div>
  );
}
