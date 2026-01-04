"use client";
import { Section } from "@/components/Section";
import { ABOUT_CONTENT } from "@/constants/about";
import { useLanguage } from "@/app/providers/LanguageProvider";

type HeroProps = {
  data?: {
    badge?: string | null;
    title?: string | null;
    description?: string | null;
  } | null;
};

export default function AboutHero({data}:HeroProps)
{
  console.log(data);
if (!data) return null;
const { badge, title, description } = data;

return (
    <Section background="dark">
      <div className="text-center max-w-4xl mx-auto">
        <span className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block">
          {badge} </span>
        <h1 className="text-5xl font-bold mb-6">{title}</h1>
        <p className="text-xl text-slate-300">
          {description}
        </p>
      </div>
    </Section>
  );
}