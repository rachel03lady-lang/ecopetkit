

export default function ProductFAQ(){

    return (
      <Section background="gray">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">{pageContent.faqTitle}</h2>
          <p className="text-slate-600 mt-2">{pageContent.faqSubtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {faqs.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl border border-slate-100"
            >
              <h3 className="font-bold text-lg mb-3 flex gap-3">
                <HelpCircle className="w-5 h-5 text-accent mt-1" />
                {item.question}
              </h3>
              <p className="text-slate-600 text-sm pl-8">{item.answer}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button href="/contact">{pageContent.contactCta}</Button>
        </div>
      </Section>
    );
}