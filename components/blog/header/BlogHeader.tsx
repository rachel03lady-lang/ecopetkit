"use client"
type Props = {
  eyebrow: string;
  title: string;
  description: string;
};

const BlogHeader: React.FC<Props> = ({ eyebrow, title, description }) => {
  return (
    <div className="bg-white border-b border-slate-200 py-16">
      <div className="container mx-auto px-6 text-center">
        <span className="text-accent font-bold uppercase tracking-widest text-sm mb-4 block">
          {eyebrow}
        </span>
        <h1 className="text-5xl font-bold text-slate-900 mb-6">{title}</h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          {description}
        </p>
      </div>
    </div>
  );
};

export default BlogHeader;