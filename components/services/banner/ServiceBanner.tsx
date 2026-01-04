"use client";

import { ServiceHero } from "@/types/services";

type ServiceBannerProps = {
  data: ServiceHero;
};



export default function ServiceBanner({ data }: ServiceBannerProps) {
  return (
    <div className="bg-slate-50 py-20 text-center">
      <h1 className="text-5xl font-bold text-slate-900 mb-6">{data.heading}</h1>
      <p className="text-xl text-slate-600 max-w-2xl mx-auto">
        {data.subheading}
      </p>
    </div>
  );
}

