"use client";
import { Factory } from "lucide-react";
import { ABOUT_CONTENT } from "@/constants/about";
import { useLanguage } from "@/app/providers/LanguageProvider";

export default function FactoryIntro()
{
const {language} = useLanguage();
const { badge , title, subtitle, backgroundImage} = ABOUT_CONTENT[language].factoryHero;

return (
  <div className="relative h-[60vh] md:h-[60vh] w-full overflow-hidden bg-slate-900 flex items-center mt-0">
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{
        backgroundImage:`url(${backgroundImage})`
      }}
    />
    <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent" />

    <div className="container mx-auto px-6 max-w-7xl relative z-10 text-white">
      <div className="max-w-3xl animate-fade-in-up">
        <div className="flex items-center gap-2 mb-4 text-accent font-bold tracking-widest uppercase text-sm">
          <Factory size={18} />
          <span>{badge}</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          {title}
        </h2>
        <p className="text-xl text-slate-300 mb-8 max-w-2xl font-light leading-relaxed">
          {subtitle}
        </p>
      </div>
    </div>
  </div>
);
}