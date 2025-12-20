

export default function IndustryInsights(){

    return(
      <Section background="white">
        <div className="mb-12">
          <span className="text-accent font-bold uppercase tracking-widest text-sm">
            {pageContent.blogEyebrow}
          </span>
          <h2 className="text-3xl font-bold mt-2">{pageContent.blogTitle}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.slice(0, 3).map((post) => (
            <div key={post.slug} className="group cursor-pointer">
              <div className="aspect-video rounded-xl overflow-hidden mb-4">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-400 mb-2">
                <Calendar size={12} />
                {post.date}
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-accent">
                {post.title}
              </h3>
              <p className="text-slate-500 text-sm line-clamp-2 mb-4">
                {post.excerpt}
              </p>
              <div className="inline-flex items-center font-bold text-sm">
                {pageContent.readMoreLabel}
                <ArrowUpRight size={16} className="ml-1" />
              </div>
            </div>
          ))}
        </div>
      </Section>)
}