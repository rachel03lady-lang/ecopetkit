// app/contact/page.tsx
"use client";

import React, { useState } from "react";
import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import { Mail, Phone, MapPin, MessageSquare } from "lucide-react";
import { useLanguage } from "@/app/providers/LanguageProvider";
import { CONTACT_PAGE_CONTENT } from "@/constants/contact";

export default function ContactPage() {
  const { language } = useLanguage();
  const content = CONTACT_PAGE_CONTENT[language];

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    type: content.form.businessTypes[0].value,
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(content.form.successMessage);
  };

  return (
    <div className="pt-20">
      <Section background="dark">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">{content.hero.title}</h1>
          <p className="text-xl text-slate-300">{content.hero.description}</p>
        </div>
      </Section>

      <Section background="gray" id="contact-section">
        <div className="container mx-auto px-6 max-w-6xl shadow-2xl rounded-3xl overflow-hidden bg-white flex flex-col md:flex-row">
          {/* Contact Info */}
          <div className="md:w-2/5 bg-slate-900 text-white p-12 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-8">
                {content.contactInfo.title}
              </h3>

              <div className="space-y-8">
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-accent mt-1 mr-4" />
                  <div>
                    <p className="font-bold text-sm text-slate-400 uppercase">
                      {content.contactInfo.email.label}
                    </p>
                    <p className="text-lg">{content.contactInfo.email.value}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-accent mt-1 mr-4" />
                  <div>
                    <p className="font-bold text-sm text-slate-400 uppercase">
                      {content.contactInfo.whatsapp.label}
                    </p>
                    <p className="text-lg">
                      {content.contactInfo.whatsapp.value}
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-accent mt-1 mr-4" />
                  <div>
                    <p className="font-bold text-sm text-slate-400 uppercase">
                      {content.contactInfo.address.label}
                    </p>
                    <p className="text-lg">
                      {content.contactInfo.address.value}
                    </p>
                    <p className="text-sm text-slate-400 mt-1">
                      {content.contactInfo.address.subValue}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-slate-700">
              <h4 className="flex items-center gap-2 font-bold mb-2">
                <MessageSquare size={18} />
                {content.aiConsultant.title}
              </h4>
              <p className="text-sm text-slate-400">
                {content.aiConsultant.description}
                <span className="block mt-2 text-accent cursor-pointer hover:underline">
                  {content.aiConsultant.ctaText}
                </span>
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="md:w-3/5 p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    {content.form.labels.name}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={content.form.placeholders.name}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    {content.form.labels.company}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={content.form.placeholders.company}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  {content.form.labels.email}
                </label>
                <input
                  type="email"
                  required
                  placeholder={content.form.placeholders.email}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  {content.form.labels.businessType}
                </label>
                <select className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none transition-all">
                  {content.form.businessTypes.map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  {content.form.labels.message}
                </label>
                <textarea
                  rows={4}
                  placeholder={content.form.placeholders.message}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none transition-all"
                />
              </div>

              <Button type="submit" size="lg" className="w-full">
                {content.form.labels.submitButton}
              </Button>
            </form>
          </div>
        </div>
      </Section>
    </div>
  );
}
