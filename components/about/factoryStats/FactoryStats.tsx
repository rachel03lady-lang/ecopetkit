"use client";

type FactoryStatsProps = {
  data?: { value?: string; label?: string }[] | null;
};

export default function FactoryStats({ data }: FactoryStatsProps) {
  if (!data || data.length === 0) return null;

  return (
    <div className="bg-white border-b border-slate-100 relative -mt-10 mx-6 md:mx-auto max-w-6xl rounded-xl shadow-xl z-20 py-8 px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-slate-100">
        {data.map((stat, idx) => (
          <div key={idx} className="text-center px-4">
            <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-1">
              {stat.value}
            </div>
            <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}