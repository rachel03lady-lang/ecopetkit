"use client";

import { Section } from "@/components/Section";
import { useLanguage } from "@/app/providers/LanguageProvider";
import { FAQ_CONTENT } from "@/constants/constants";
import { HelpCircle } from "lucide-react";
import { Button } from "@/components/Button";
import { useRouter } from "next/navigation";

export default function GeneralFaq() {
  const { language } = useLanguage();
  const router = useRouter();
  const data = FAQ_CONTENT[language];

  return (
    <div className="pt-20">
      <Section background="gray">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold mb-4">{data.banner.title}</h1>
          <p className="text-slate-600">{data.banner.description}</p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {data.items.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-xl shadow-sm border border-slate-100"
            >
              <h3 className="font-bold text-xl mb-4 flex items-start gap-4 text-slate-900">
                <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 text-accent">
                  <HelpCircle size={18} />
                </div>
                {item.question}
              </h3>

              <div className="pl-12 text-slate-600 leading-relaxed border-l-2 border-slate-100 ml-4">
                {item.answer}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-slate-500 mb-6">
            Can’t find what you’re looking for?
          </p>
          <Button onClick={() => router.push(data.cta.href)}>
            {data.cta.text}
          </Button>
        </div>
      </Section>
    </div>
  );
}
