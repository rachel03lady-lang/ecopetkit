"use client";
import { Section } from "@/components/Section";
import { ABOUT_CONTENT } from "@/constants/about";
import { useLanguage } from "@/app/providers/LanguageProvider";

export default function AboutHero()
{
const {language} = useLanguage();
const {badge, title, description} = ABOUT_CONTENT[language].hero;

return (
    <Section background="dark">
      <div className="text-center max-w-4xl mx-auto">
        <span className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block">
          {badge}        </span>
        <h1 className="text-5xl font-bold mb-6">{title}</h1>
        <p className="text-xl text-slate-300">
          {description}
        </p>
      </div>
    </Section>
  );
}