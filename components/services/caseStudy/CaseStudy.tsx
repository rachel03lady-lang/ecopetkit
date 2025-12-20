
"use client";
import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import { useRouter } from "next/navigation";
import { CASE_STUDY_CONTENT } from "@/constants/constants";
import { useLanguage } from "@/app/providers/LanguageProvider";
export default function CaseStudy(){
 
    const { language} = useLanguage();

    const data = CASE_STUDY_CONTENT[language];

    const router=useRouter();

    return (
      <Section background="dark">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="flex-1 space-y-8">
            <span className="text-accent font-bold tracking-widest uppercase">
              {data.badge}
            </span>
            <h2 className="text-4xl font-bold">{data.title}</h2>
            <div className="space-y-4 text-slate-300">
              {data.details.map((item) => (
                <p key={item.label}>
                  <strong className="text-white">{item.label}:</strong> {item.value}
                </p>
              ))}
              
            </div>
            <Button variant="white" onClick={() => router.push(data.ctaHref)}>
              {data.ctaLabel}
            </Button>
          </div>
          <div className="flex-1 w-full h-96 bg-slate-800 rounded-2xl overflow-hidden relative">
            <div className="absolute inset-0 flex items-center justify-center text-slate-600 font-mono">
              [{data.image.placeholderTitle}]
              <br />
              {data.image.placeholderSubtitle}
            </div>
            <img
              src={data.image.src}
              alt={data.image.alt}
              className="w-full h-full object-cover opacity-50 mix-blend-overlay"
            />
          </div>
        </div>
      </Section>
    );
}