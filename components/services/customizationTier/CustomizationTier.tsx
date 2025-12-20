
"use client";
import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import { CUSTOMIZATION_TIERS_CONTENT } from "@/constants/constants";
import { useLanguage } from "@/app/providers/LanguageProvider";
import { useRouter } from "next/navigation";
export default function CustomizationTier(){

    const {language} = useLanguage();
    const data = CUSTOMIZATION_TIERS_CONTENT[language];
    const router = useRouter();
    
    return (
      <Section>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">{data.sectionTitle}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.tiers.map((item) => {
            const {ctaHref, ctaLabel} = item;
            return(
            <div
              className={
                item.isPopular
                  ? "border-2 border-slate-900 rounded-2xl p-8 shadow-xl relative transform md:-translate-y-4 bg-white"
                  : "border border-slate-200 rounded-2xl p-8 hover:shadow-lg transition-shadow"
              }
              key={item.title}
            >
              <div className="text-accent font-bold mb-2">{item.tierLabel}</div>
              <h3 className="text-2xl font-bold mb-6">{item.title}</h3>
              <ul className="space-y-3 mb-8">
                {item.features.map((f_item) => (
                  <li className="flex items-center" key={f_item}>
                    <span className="w-2 h-2 bg-slate-900 rounded-full mr-3"></span>
                    {f_item}
                  </li>
                ))}
              </ul>
              <p className="text-sm text-slate-500 mb-6">
                MOQ: 500 - 1,000 units
              </p>
              
              {
              ctaHref && ctaLabel && (
                <Button
                  className="w-full"
                  onClick={() => router.push(ctaHref)}
                >
                  {item.ctaLabel}
                </Button>
              )}
            </div>);
})}

          {/* Tier 1 */}
          {/* <div className="border border-slate-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
            <div className="text-accent font-bold mb-2">Tier 1</div>
            <h3 className="text-2xl font-bold mb-6">Private Label (OEM)</h3>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-slate-900 rounded-full mr-3"></span>
                Logo Printing
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-slate-900 rounded-full mr-3"></span>
                Custom Packaging
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-slate-900 rounded-full mr-3"></span>
                Manual Language
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-slate-900 rounded-full mr-3"></span>
                Standard App Skin
              </li>
            </ul>
            <p className="text-sm text-slate-500 mb-6">
              MOQ: 500 - 1,000 units
            </p>
          </div> */}
          {/* Tier 2 */}
          {/* <div className="border-2 border-slate-900 rounded-2xl p-8 shadow-xl relative transform md:-translate-y-4 bg-white">
            <div className="absolute top-0 right-0 bg-slate-900 text-white text-xs px-3 py-1 rounded-bl-lg">
              Most Popular
            </div>
            <div className="text-accent font-bold mb-2">Tier 2</div>
            <h3 className="text-2xl font-bold mb-6">Deep Customization</h3>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                Custom Color Injection
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                Firmware Logic Modification
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                Sensor Adjustment
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                Custom App Features
              </li>
            </ul>
            <p className="text-sm text-slate-500 mb-6">
              MOQ: 2,000 - 3,000 units
            </p>
            <Button className="w-full">{t("common.inquireNow")}</Button>
          </div> */}
          {/* Tier 3 */}
          {/* <div className="border border-slate-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
            <div className="text-accent font-bold mb-2">Tier 3</div>
            <h3 className="text-2xl font-bold mb-6">New Product Dev (ODM)</h3>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-slate-900 rounded-full mr-3"></span>
                Exclusive ID Design
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-slate-900 rounded-full mr-3"></span>
                New Mold Tooling
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-slate-900 rounded-full mr-3"></span>
                Proprietary PCB Design
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-slate-900 rounded-full mr-3"></span>
                Full IP Ownership
              </li>
            </ul>
            <p className="text-sm text-slate-500 mb-6">MOQ: Project Based</p>
          </div> */}
        </div>
      </Section>
    );
}