// types/contactType.ts
import { Language } from "@/types/types";

export type ContactSEO = {
  title: string;
  description: string;
  canonical: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  noIndex?: boolean;
  noFollow?: boolean;
};

export type ContactInfoItem = {
  id: string;
  label: string;
  value: string;
  subValue?: string;
};

export type BusinessTypeOption = {
  value: string;
  label: string;
};

export type ContactFormLabels = {
  name: string;
  company: string;
  email: string;
  businessType: string;
  message: string;
  submitButton: string;
};

export type ContactFormPlaceholders = {
  name: string;
  company: string;
  email: string;
  message: string;
};

export type AIConsultant = {
  title: string;
  description: string;
  ctaText: string;
};

export type ContactPageContent = {
  seo: ContactSEO;

  hero: {
    title: string;
    description: string;
  };

  contactInfo: {
    title: string;
    email: ContactInfoItem;
    whatsapp: ContactInfoItem;
    address: ContactInfoItem;
  };

  aiConsultant: AIConsultant;

  form: {
    labels: ContactFormLabels;
    placeholders: ContactFormPlaceholders;
    businessTypes: BusinessTypeOption[];
    successMessage: string;
  };
};

export type ContactPageContentMap = Record<Language, ContactPageContent>;
