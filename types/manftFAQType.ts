// types/faqType.ts
import { Language } from "@/types/types";

export type FAQItem = {
  id: string;
  question: string;
  answer: string;
};

export type FAQSectionContent = {
  title: string;
  description: string;
  items: FAQItem[];
  footer: {
    text: string;
    buttonText: string;
  };
};

export type FAQContentMap = Record<Language, FAQSectionContent>;
