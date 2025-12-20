"use client";
import { Section } from "@/components/Section";
import { ShieldCheck } from "lucide-react";
import { ABOUT_CONTENT } from "@/constants/about";
import { useLanguage } from "@/app/providers/LanguageProvider";

export default function LabTesting()
{
const {language} = useLanguage();
const { badge, title, description, tests, images, rmaRate } =
  ABOUT_CONTENT[language].lab;

return (
  <Section>
    <div className="flex flex-col md:flex-row gap-12 items-center">
      <div className="md:w-1/2">
        <span className="text-accent font-bold tracking-widest uppercase text-sm">
          {badge}
        </span>
        <h2 className="text-4xl font-bold mt-2 mb-6">
          {title}
        </h2>
        <p className="text-slate-600 mb-8 leading-relaxed">
          {description}
        </p>

        <div className="grid grid-cols-2 gap-4">
          {tests.map((test, i) => (
            <div
              key={i}
              className="flex items-center text-sm font-medium text-slate-700 bg-slate-50 px-4 py-3 rounded-lg"
            >
              <ShieldCheck size={16} className="text-green-500 mr-2" /> {test.label}
            </div>
          ))}
        </div>
      </div>
      <div className="md:w-1/2 grid grid-cols-2 gap-4">
        <img
          src={images.main}
          className="rounded-2xl w-full h-full object-cover"
          alt="Lab Test 1"
        />
        <div className="flex flex-col gap-4">
          <img
            src={images.secondary}
            className="rounded-2xl w-full h-full object-cover"
            alt="Lab Test 2"
          />
          <div className="bg-slate-900 rounded-2xl p-6 text-white flex flex-col justify-center h-full">
            <div className="text-3xl font-bold text-accent mb-1">{rmaRate.value}</div>
            <div className="text-sm text-slate-400">{rmaRate.label}</div>
          </div>
        </div>
      </div>
    </div>
  </Section>
);
}