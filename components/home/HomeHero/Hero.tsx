"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/Button";
import { useRouter } from "next/navigation";



type WPNodeUri={
  uri:string;
};

interface PageNode extends WPNodeUri{
  __typename:"Page";
}

interface PostNode extends WPNodeUri{
  __typename:"Post";
}

interface CTASecondaryHref {
  nodes:(PageNode | PostNode)[];
}

interface CTAPrimaryHref {
  node:(PageNode | PostNode)[];
}

interface HeroProps {
  banner:{
    tagline:string;
    title:string;
    subtitle:string;
    image:{
      node:{
                 sourceUrl:string;
                  altText:string;
                  title:string;
                  caption:string;
                  description:string;
    }

        }
    ctaPrimaryLabel:string;
    ctaPrimaryUrl: CTAPrimaryHref;
    ctaSecondaryLabel :string
    ctaSecondaryHref :CTASecondaryHref;

}[];
}

export default function Hero({banner}:HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const router = useRouter();
  useEffect(() => {
    if (banner.length === 0) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banner.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [banner.length]);
  
  // Use a fallback for the text while the UI object is loading.

  return (
    <div className="relative h-screen w-full overflow-hidden bg-primary">
      {banner?.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center transform scale-105 transition-transform duration-[10000ms]"
            style={{
              backgroundImage: `url(${slide.image.node.sourceUrl})`,
              transformOrigin: "center center",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />

          <div className="relative h-full container mx-auto px-6 flex flex-col justify-center items-start text-white">
            <div className="max-w-3xl space-y-8 animate-fade-in-up">
              <span className="inline-block px-3 py-1 border border-white/30 rounded-full text-xs font-bold uppercase tracking-widest backdrop-blur-sm">
                {slide.tagline}
              </span>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                {slide.title}
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 max-w-2xl font-light leading-relaxed">
                {slide.subtitle}
              </p>
              <div className="pt-8 flex gap-4">
                <Button
                  variant="white"
                  size="lg"
                  onClick={() => router.push("/contact")}
                >
                  {slide.ctaPrimaryLabel}
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-white border-white hover:bg-white/10"
                  onClick={() => router.push("/products")}
                >
                  {slide.ctaSecondaryLabel}
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="absolute bottom-12 left-0 right-0 flex justify-center gap-3">
        {banner.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              idx === currentSlide
                ? "w-12 bg-white"
                : "w-3 bg-white/30 hover:bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
