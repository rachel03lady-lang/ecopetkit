"use client";
import { useState } from "react";
import { sendFormData } from "@/lib/getForms";

type Props = {
  footer: {
    footerNewsletter: string;
    footerNewsletterDescription: string;
    footerNewsletterCtaPlaceholder: string;
    footerNewsletterCtaLabel: string;
  };
};

export default function Newsletter({ footer }: Props) {
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const [message, setMessage] = useState("");
  const [email, setEmail]=useState<string>("");

  const FORM_ID: string = process.env.NEXT_PUBLIC_NEWSLETTER_FORM_ID || "";
  const FORM_POST_ID: string =
    process.env.NEXT_PUBLIC_NEWSLETTER_FORM_POST_ID || "";

  // lets handle the event
  const handleSubmit = async() => {
    if(!email)
        return;
    setStatus("submitting");
    const formData = new FormData();
    formData.append("your-email", email);

    const result = await sendFormData(formData,FORM_ID, FORM_POST_ID)
    if(result?.status==="mail_sent")
    {
        setStatus("success");
        setMessage(result?.message);
        setEmail("");
        window.setTimeout(()=>{
            setStatus("idle");
        },3000)
        
    }
    else{
        setStatus("error");
        setMessage(result?.message || "An unexpected error happend");
        window.setTimeout(() => {
          setStatus("idle");
        }, 3000);
    }
  };

  return (
    <div>
      <h4 className="font-bold mb-6">{footer.footerNewsletter}</h4>
      <p className="text-slate-400 text-sm mb-4">
        {footer.footerNewsletterDescription}
      </p>
      <div className="flex">
        <input
          type="email"
          name="your-email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={footer.footerNewsletterCtaPlaceholder}
          className="bg-slate-800 text-white px-4 py-2 rounded-l-md outline-none focus:ring-1 focus:ring-accent w-full text-sm"
        />
        <button
          onClick={handleSubmit}
          className="bg-accent px-4 py-2 rounded-r-md font-medium text-sm hover:bg-sky-400 transition-colors"
        >
          {footer.footerNewsletterCtaLabel}
        </button>
      </div>
      {status === "submitting" && (
        <p className="pt-3 text-sm`">Sending Request...</p>
      )}
      {message && (
        <p
          className={`${
            status === "success" ? "text-green-600" : "text-red-600"
          } pt-3 text-sm`}
        >
          {message}
        </p>
      )}
    </div>
  );
}
