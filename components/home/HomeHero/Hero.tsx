"use client";
import React, { useEffect, useState } from "react";
import { HERO_SLIDES } from "@/constants/constants";
import { Button } from "@/components/Button";
  import { useLanguage } from "@/app/providers/LanguageProvider";
import { useRouter } from "next/navigation";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { language, t } = useLanguage();
  const slides = HERO_SLIDES[language];
  const router = useRouter();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-primary">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center transform scale-105 transition-transform duration-[10000ms]"
            style={{
              backgroundImage: `url(${slide.bgImage})`,
              transformOrigin: "center center",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />

          <div className="relative h-full container mx-auto px-6 flex flex-col justify-center items-start text-white">
            <div className="max-w-3xl space-y-8 animate-fade-in-up">
              <span className="inline-block px-3 py-1 border border-white/30 rounded-full text-xs font-bold uppercase tracking-widest backdrop-blur-sm">
                {t("hero.premier")}
              </span>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                {slide.headline}
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 max-w-2xl font-light leading-relaxed">
                {slide.subhead}
              </p>
              <div className="pt-8 flex gap-4">
                <Button
                  variant="white"
                  size="lg"
                  onClick={() => router.push("/contact")}
                >
                  {slide.cta}
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-white border-white hover:bg-white/10"
                  onClick={() => router.push("/products")}
                >
                  {t("hero.viewProducts")}
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="absolute bottom-12 left-0 right-0 flex justify-center gap-3">
        {slides.map((_, idx) => (
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
