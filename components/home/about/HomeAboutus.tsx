"use client";
import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import { Play, Check } from "lucide-react";
import { useLanguage } from "@/app/providers/LanguageProvider";
import { useRouter } from "next/navigation";
import { HOME_ABOUT_US } from "@/constants/constants";
export default function HomeAboutus() {
  const { language, t } = useLanguage();
  const router = useRouter();
  const data = HOME_ABOUT_US[language]
  return (
    <Section background="gray">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        <div className="lg:w-1/2 relative">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={data.image.src}
              alt={data.image.alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center group cursor-pointer">
              <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
                <Play
                  className="ml-1 text-slate-900 fill-slate-900"
                  size={32}
                />
              </div>
            </div>
          </div>
          {/* Floating Stats Card */}
          <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-xl shadow-xl hidden md:block max-w-xs border border-slate-100">
            <div className="text-4xl font-bold text-slate-900 mb-1">
              {data.stats.value}
            </div>
            <div className="text-sm text-slate-500 font-bold uppercase tracking-wider">
              {data.stats.label}
            </div>
            <p className="text-xs text-slate-400 mt-2">{data.stats.subText}</p>
          </div>
        </div>
        <div className="lg:w-1/2">
          <span className="text-accent font-bold uppercase tracking-widest text-sm mb-4 block">
            {data.sectionLabel}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 leading-tight">
            {data.title}
          </h2>
          {data.description.map((para, idx) => (
            <p
              key={idx}
              className="text-lg text-slate-600 mb-6 leading-relaxed"
            >
              {para}
            </p>
          ))}
          <div className="grid grid-cols-2 gap-4 mb-8">
            {data.highlights.map((item, idx) => (
              <div className="flex items-center gap-2" key={idx}>
                <div className="w-5 h-5 rounded-full bg-accent flex items-center justify-center text-white">
                  <Check size={12} />
                </div>
                <span className="font-bold text-slate-800">
                  {item}
                </span>
              </div>
            ))}
          </div>
          <Button onClick={() => router.push(data.cta.href)}>
            {data.cta.label}
          </Button>
        </div>
      </div>
    </Section>
  );
}
