"use client";

import React, { useState } from "react";
import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import { Mail, Phone, MapPin, MessageSquare, Subtitles } from "lucide-react";


const getIcon = (label: string[]) => {
  const text = label[0]?.toLowerCase() || "";

  if (
    text.includes("phone") ||
    text.includes("call") ||
    text.includes("mobile")
  )
    return Phone;
  if (text.includes("mail") || text.includes("email")) return Mail;
  if (
    text.includes("address") ||
    text.includes("location") ||
    text.includes("mappin")
  )
    return MapPin;
  if (
    text.includes("messagesquare")
  )
    return MessageSquare;

  return Phone; // Default fallback if no match found
};

interface ContactProps {
  data: {
    banner: {
      title: string;
      subtitle: string;
    };
    contactInformation: {
      heading: string;
      contact: {icon:string[];contactLabel:string;contactValue:string}[];
      moreHelp: {
        label: string;
        description: string;
        arrowLabel: string;
      };
    };
    contactForm: {
      nameLabel: string;
      namePlaceholder: string;
      companyLabel: string;
      companyPlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      businessTypeLabel: string;
      businessTypes: { value: string }[];
      projectDetailsLabel: string;
      projectDetailsPlaceholder: string;
      ctaLabel: string;
    };
  };
}
export default function ContactPage({ data }: ContactProps) {
  console.log("Contact page data =>", data);

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    type: data.contactForm.businessTypes[0].value,
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Form Submitted succesfully!");
  };

  return (
    <div className="pt-20">
      <Section background="dark">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">{data.banner.title}</h1>
          <p className="text-xl text-slate-300">{data.banner.subtitle}</p>
        </div>
      </Section>

      <Section background="gray" id="contact-section">
        <div className="container mx-auto px-6 max-w-6xl shadow-2xl rounded-3xl overflow-hidden bg-white flex flex-col md:flex-row">
          {/* Contact Info */}
          <div className="md:w-2/5 bg-slate-900 text-white p-12 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-8">
                {data.contactInformation.heading}
              </h3>

              <div className="space-y-8">
                {data.contactInformation.contact.map((item, index) => {
                  const Iconmapped = getIcon(item.icon);
                  return (
                    <div className="flex items-start" key={index}>
                      <Iconmapped className="w-6 h-6 text-accent mt-1 mr-4" />
                      <div>
                        <p className="font-bold text-sm text-slate-400 uppercase">
                          {item.contactLabel}
                        </p>
                        <p className="text-lg">
                          {item.contactValue}
                        </p>
                      </div>
                    </div>
                  );
                })}
                {/* <div className="flex items-start">
                  <Mail className="w-6 h-6 text-accent mt-1 mr-4" />
                  <div>
                    <p className="font-bold text-sm text-slate-400 uppercase">
                      {data.contactInformation.contact[0].contactLabel}
                    </p>
                    <p className="text-lg">
                      {data.contactInformation.contact[0].contactValue}
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-accent mt-1 mr-4" />
                  <div>
                    <p className="font-bold text-sm text-slate-400 uppercase">
                      {data.contactInformation.contact[1].contactLabel}
                    </p>
                    <p className="text-lg">
                      {data.contactInformation.contact[1].contactLabel}
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-accent mt-1 mr-4" />
                  <div>
                    <p className="font-bold text-sm text-slate-400 uppercase">
                      {data.contactInformation.contact[2].contactLabel}
                    </p>
                    {/* <p className="text-lg">
                      {data.contactInformation.contact[2].contactValue}
                    </p> */}
                {/*<p className="text-sm text-slate-400 mt-1">
                      {data.contactInformation.contact[2].contactValue}
                    </p>
                  </div>
                </div> */}
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-slate-700">
              <h4 className="flex items-center gap-2 font-bold mb-2">
                <MessageSquare size={18} />
                {data.contactInformation.moreHelp.label}
              </h4>
              <p className="text-sm text-slate-400">
                {data.contactInformation.moreHelp.description}
                <span className="block mt-2 text-accent cursor-pointer hover:underline">
                  {data.contactInformation.moreHelp.arrowLabel} →
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
                    {data.contactForm.nameLabel}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={data.contactForm.namePlaceholder}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    {data.contactForm.companyLabel}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={data.contactForm.companyPlaceholder}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  {data.contactForm.emailLabel}
                </label>
                <input
                  type="email"
                  required
                  placeholder={data.contactForm.emailPlaceholder}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  {data.contactForm.businessTypeLabel}
                </label>
                <select className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none transition-all">
                  {data.contactForm.businessTypes.map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.value}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  {data.contactForm.projectDetailsLabel}
                </label>
                <textarea
                  rows={4}
                  placeholder={data.contactForm.projectDetailsPlaceholder}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none transition-all"
                />
              </div>

              <Button type="submit" size="lg" className="w-full">
                {data.contactForm.ctaLabel}
              </Button>
            </form>
          </div>
        </div>
      </Section>
    </div>
  );
}
