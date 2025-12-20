// components/blog/blogPage/sidebar-col/newsletterWidget/NewsletterWidget.tsx
"use client"
import React from "react";
import {Button} from "@/components/Button";

type Props = {
  newsletterObj: {
    title: string;
    description: string;
    placeholder:string;
    buttonText:string
  };
};
const NewsletterWidget: React.FC<Props> = ({ newsletterObj }) => {
  return (
    <div className="bg-slate-900 p-8 rounded-xl text-white text-center">
      <h3 className="font-bold text-xl mb-2">{newsletterObj.title}</h3>
      <p className="text-slate-400 text-sm mb-6">
        {newsletterObj.description}
      </p>
      <input
        type="email"
        placeholder={newsletterObj.placeholder}
        className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-accent mb-3 text-sm"
      />
      <Button className="w-full" size="sm">
        {newsletterObj.buttonText}
      </Button>
    </div>
  );
};

export default NewsletterWidget;
