
"use client"
import { FAQ_CONTENT } from "@/constants/manftFAQ";
import { useLanguage } from "@/app/providers/LanguageProvider";
import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import { HelpCircle } from "lucide-react";
import { useRouter } from "next/navigation";


export default function ProductFAQ(){

  const { language } = useLanguage();
  const router = useRouter();
  const faqSection = FAQ_CONTENT[language];
  const generalFaq = faqSection.items;


    return (
      <Section background="gray">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{faqSection.title}</h2>
            <p className="text-slate-600">{faqSection.description}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {generalFaq.map((item) => (
              <div
                key={item.id}
                className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
              >
                <h3 className="font-bold text-lg mb-3 flex items-start">
                  <HelpCircle className="w-5 h-5 text-accent mt-1 mr-3 flex-shrink-0" />
                  {item.question}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed pl-8">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-slate-500 mb-4">{faqSection.footer.text}</p>
            <Button onClick={() => router.push("/contact")}>
              {faqSection.footer.buttonText}
            </Button>
          </div>
        </div>
      </Section>
    );
}