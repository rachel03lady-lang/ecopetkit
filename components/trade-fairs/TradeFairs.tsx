"use client";

import { Section } from "@/components/Section";
import type { TradeFairsPageContent } from "@/types/tradeFairs";
import { Calendar, MapPin, Store } from "lucide-react";

interface Props {
  data: TradeFairsPageContent;
}

export default function TradeFairs({ data }: Props) {
  console.log("trade fairs", data);

  return (
    <div className="pt-20">
      <Section>
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">{data.banner.title}</h1>
          <p className="text-slate-600">{data.banner.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.items.map((fair, idx) => (
            <div
              key={idx}
              className={`rounded-xl overflow-hidden border ${
                fair.status === "upcoming"
                  ? "border-accent shadow-lg ring-1 ring-accent/20"
                  : "border-slate-200"
              } bg-white flex flex-col`}
            >
              <div className="relative aspect-video h-[250px] bg-slate-100">
                <img
                  src={fair.image?.node?.sourceUrl}
                  alt={fair.image?.node?.altText}
                  className="w-full h-full object-cover"
                />
                {fair.status[0] === "upcoming" && (
                  <div className="absolute top-4 right-4 bg-accent text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">
                    {fair.status[0]}
                  </div>
                )}
              </div>

              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold mb-4">{fair.name}</h3>

                <div className="space-y-3 text-sm text-slate-600 flex-grow">
                  <div className="flex items-center gap-3">
                    <Calendar size={16} className="text-slate-400" />
                    {fair.date}
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin size={16} className="text-slate-400" />
                    {fair.location}
                  </div>
                  <div className="flex items-center gap-3 font-bold text-slate-900">
                    <Store size={16} className="text-accent" />
                    {fair.booth}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
