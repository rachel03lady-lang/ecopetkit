"use client";

import { Section } from "@/components/Section";
import { HelpCircle } from "lucide-react";
import { Button } from "@/components/Button";
import { useRouter } from "next/navigation";

// Define the shape of your FAQ data
type FaqItem = {
  question: string;
  answer: string;
};

type FaqData = {
  pageHeading?: string;
  pageSubheading?: string;
  faqItems?: FaqItem[];
  ctaText?: string;
  ctaButtonLabel?: string;
  ctaButtonLink?: string;
};

interface GeneralFaqProps {
  data: FaqData;
}

export default function GeneralFaq({ data }: GeneralFaqProps) {
  const router = useRouter();

  // Guard clause if data is somehow empty
  if (!data) return null;

  return (
    <div className="pt-20">
      <Section background="gray">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold mb-4">{data.pageHeading}</h1>
          <p className="text-slate-600">{data.pageSubheading}</p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {data.faqItems?.map((item, idx) => (
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

              <div
                className="pl-12 text-slate-600 leading-relaxed border-l-2 border-slate-100 ml-4"
                dangerouslySetInnerHTML={{ __html: item.answer }} // Handles HTML from WP (links, bold text)
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-slate-500 mb-6">{data.ctaText}</p>
          {data.ctaButtonLink && data.ctaButtonLabel && (
            <Button onClick={() => router.push(data.ctaButtonLink!)}>
              {data.ctaButtonLabel}
            </Button>
          )}
        </div>
      </Section>
    </div>
  );
}
