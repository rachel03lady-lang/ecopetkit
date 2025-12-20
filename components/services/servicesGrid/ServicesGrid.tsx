"use client";
import { Section } from "@/components/Section";
import { SERVICES_CAPABILITIES } from "@/constants/constants";
import { useLanguage } from "@/app/providers/LanguageProvider";

export default function ServicesGrid() {
  const { language } = useLanguage();
  const capabilities = SERVICES_CAPABILITIES[language];
  return (
    <Section>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {capabilities.map((cap, idx) => (
          <div
            key={idx}
            className="flex flex-col items-start p-6 rounded-xl hover:bg-slate-50 transition-colors"
          >
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-6">
              <cap.icon size={24} />
            </div>
            <h3 className="text-2xl font-bold mb-4">{cap.title}</h3>
            <p className="text-slate-600 leading-relaxed">{cap.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
