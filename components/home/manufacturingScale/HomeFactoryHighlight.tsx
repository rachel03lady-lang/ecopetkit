"use client";

import { FACTORY_CONTENT } from "@/constants/constants";
import { Button } from "@/components/Button";
import { useLanguage } from "@/app/providers/LanguageProvider";
import { useRouter } from "next/navigation";
export default function HomeFactoryHighlight(){

     const { language, t } = useLanguage();
     const router = useRouter();

     const factoryContent = FACTORY_CONTENT[language];
    return (
      <div className="relative py-24 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/1920/1080?grayscale&blur=2')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-accent font-bold uppercase tracking-widest text-sm mb-4 block">
                {factoryContent.highlight.label}
              </span>
              <h2 className="text-4xl font-bold mb-6">
               {factoryContent.highlight.title}
              </h2>
              <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                {factoryContent.highlight.description}
              </p>
              <Button variant="white" onClick={() => router.push(factoryContent.highlight.cta.href)}>
                {factoryContent.highlight.cta.label}
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-8">
              {factoryContent.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10"
                >
                  <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-accent font-bold uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
}