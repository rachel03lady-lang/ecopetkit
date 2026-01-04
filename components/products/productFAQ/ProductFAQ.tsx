"use client";

import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import { HelpCircle } from "lucide-react";
import { useRouter } from "next/navigation";

// Define the shape of FAQ data from WordPress
interface FaqItem {
  question: string;
  answer: string;
}

interface ProductFAQProps {
  data: {
    header?: string; // "Frequently Asked Questions"
    subheader?: string; // Description
    faqs?: FaqItem[];
  };
}

export default function ProductFAQ({ data }: ProductFAQProps) {
  const router = useRouter();

  // If no FAQs exist, hide the section
  if (!data || !data.faqs || data.faqs.length === 0) return null;

  return (
    <Section background="gray">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            {data.header || "Frequently Asked Questions"}
          </h2>
          <p className="text-slate-600">{data.subheader}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.faqs.map((item, idx) => (
            <div
              key={idx}
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
          <p className="text-slate-500 mb-4">Still have questions?</p>
          <Button onClick={() => router.push("/contact")}>Contact Us</Button>
        </div>
      </div>
    </Section>
  );
}
