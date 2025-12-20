
"use client";
import { Cpu, Wifi, ShieldCheck,Database } from "lucide-react";
import { Section } from "@/components/Section";
import { ABOUT_CONTENT } from "@/constants/about";
import { useLanguage } from "@/app/providers/LanguageProvider";


export default function AboutRD()
{
const {language} = useLanguage();
const {title, description, stats, features} = ABOUT_CONTENT[language].rd;

return (
  <Section>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
      <div>
        <h2 className="text-3xl font-bold mb-6">{title}</h2>
        <p className="text-slate-600 mb-4 leading-relaxed">{description}</p>
        <ul className="space-y-4 mt-8">
          {stats.map((item) => (
            <li className="flex items-center" key={item.label}>
              <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center mr-4">
                <span className="font-bold text-slate-900">{item.value}</span>
              </div>
              <span>{item.label}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {features.map((item) => {
            const Icon = item.icon;
            return (
              <div className="bg-slate-50 p-6 rounded-xl" key={item.title}>
                <Icon className="w-8 h-8 text-accent mb-4" />
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-slate-500">
                  {item.description}
                </p>
              </div>
            );
          
})}
       
      </div>
    </div>
  </Section>
);
}