"use client";
import { Section } from "@/components/Section";
import { CORE_VALUES } from "@/constants/constants";
import { useLanguage } from "@/app/providers/LanguageProvider";
export default function WhyChooseUs(){

    const { language, t } = useLanguage();

    const coreValues = CORE_VALUES[language];
    return (
      <Section>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">{coreValues.title}</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            {coreValues.description}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {coreValues.items.map((value, idx) => (
            <div
              key={idx}
              className="p-8 border border-slate-100 rounded-2xl hover:shadow-xl transition-all duration-300 bg-white group hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-slate-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-slate-900 transition-colors">
                <value.icon className="w-8 h-8 text-slate-900 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">{value.title}</h3>
              <p className="text-slate-500 leading-relaxed text-sm">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </Section>
    );
}