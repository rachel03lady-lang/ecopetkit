"use client";

import React, { useState } from "react";
import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import { Mail, Phone, MapPin, MessageSquare } from "lucide-react";

// 1. Import your custom server action
import { sendFormData } from "@/lib/getForms";

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
  if (text.includes("messagesquare")) return MessageSquare;
  return Phone;
};

interface ContactProps {
  data: any;
}

export default function ContactPage({ data }: ContactProps) {
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  const FORM_ID: string = process.env.NEXT_PUBLIC_CONTACT_FORM_ID || "";
  const FORM_POST_ID: string = process.env.NEXT_PUBLIC_CONTACT_FORM_POST_ID || "";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    // 2. Create FormData directly from the form event
    const formData = new FormData(e.currentTarget);

    // 3. Call your existing server action
    const result = await sendFormData(formData, FORM_ID, FORM_POST_ID);

    // 4. Handle CF7 REST API Response
    // CF7 usually returns status: "mail_sent" on success
    if (result?.status === "mail_sent") {
      setStatus("success");
      setMessage(result.message); // "Thank you for your message..."
      (e.target as HTMLFormElement).reset();
    } else {
      setStatus("error");
      // Use the message from CF7 or fallback
      setMessage(result?.message || "An unexpected error occurred.");
    }
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
          {/* SIDEBAR (No changes needed here) */}
          <div className="md:w-2/5 bg-slate-900 text-white p-12 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-8">
                {data.contactInformation.heading}
              </h3>
              <div className="space-y-8">
                {data.contactInformation.contact.map(
                  (item: any, index: number) => {
                    const Iconmapped = getIcon(item.icon);
                    return (
                      <div className="flex items-start" key={index}>
                        <Iconmapped className="w-6 h-6 text-accent mt-1 mr-4" />
                        <div>
                          <p className="font-bold text-sm text-slate-400 uppercase">
                            {item.contactLabel}
                          </p>
                          <p className="text-lg">{item.contactValue}</p>
                        </div>
                      </div>
                    );
                  }
                )}
              </div>
            </div>
          </div>

          {/* FORM AREA */}
          <div className="md:w-3/5 p-12">
            {status === "success" ? (
              <div className="text-green-600 bg-green-50 p-6 rounded-lg text-center h-full flex flex-col items-center justify-center">
                <h3 className="font-bold text-2xl mb-2">Message Sent!</h3>
                <p>{message}</p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-4 text-accent hover:underline"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      {data.contactForm.nameLabel}
                    </label>
                    {/* IMPORTANT: Name matches CF7 [text* your-name] */}
                    <input
                      name="your-name"
                      type="text"
                      required
                      placeholder={data.contactForm.namePlaceholder}
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-slate-900 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      {data.contactForm.companyLabel}
                    </label>
                    {/* IMPORTANT: Name matches CF7 [text* company] */}
                    <input
                      name="company"
                      type="text"
                      required
                      placeholder={data.contactForm.companyPlaceholder}
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-slate-900 outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    {data.contactForm.emailLabel}
                  </label>
                  {/* IMPORTANT: Name matches CF7 [email* email] */}
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder={data.contactForm.emailPlaceholder}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-slate-900 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    {data.contactForm.businessTypeLabel}
                  </label>
                  {/* IMPORTANT: Name matches CF7 [text* business-type] */}
                  <select
                    name="business-type"
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-slate-900 outline-none"
                  >
                    {data.contactForm.businessTypes.map((type: any) => (
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
                  {/* IMPORTANT: Name matches CF7 [textarea project-details] */}
                  <textarea
                    name="project-details"
                    rows={4}
                    placeholder={data.contactForm.projectDetailsPlaceholder}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-slate-900 outline-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={status === "submitting"}
                >
                  {status === "submitting"
                    ? "Sending..."
                    : data.contactForm.ctaLabel}
                </Button>

                {status === "error" && (
                  <div className="mt-4 p-3 bg-red-50 text-red-600 rounded-lg text-sm text-center">
                    {message}
                  </div>
                )}
              </form>
            )}
          </div>
        </div>
      </Section>
    </div>
  );
}
