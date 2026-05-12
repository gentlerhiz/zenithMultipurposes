const operations = [
  {
    title: "Discovery",
    description:
      "We start with a focused conversation to understand your goals, audience, and business priorities.",
  },
  {
    title: "Planning",
    description:
      "We outline the right mix of services, timeline, and deliverables to match your scope and budget.",
  },
  {
    title: "Execution",
    description:
      "Design, branding, content, or automation is delivered with quality checks and clear updates.",
  },
  {
    title: "Launch and Support",
    description:
      "We help you deploy and optimize the results, with guidance on how to keep your brand consistent.",
  },
];

export default function AboutOperationsSection() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
        <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#0F2419]">
          How We Operate
        </p>
        <h2 className="mt-3 text-3xl font-bold md:text-4xl">
          A clear workflow from discovery to delivery.
        </h2>

        <div className="mt-8">
          <div className="grid gap-6 md:grid-cols-2">
            {operations.map((step, i) => (
              <div key={step.title} className="flex gap-6 p-6 border border-black/10 bg-[#FAFAFA]">
                <div className="flex-shrink-0 flex h-12 w-12 items-center justify-center bg-[#0F2419] text-white font-bold">
                  {i + 1}
                </div>
                <div>
                  <h3 className="text-base font-semibold text-[#1A1A1A]">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-[#6B7280]">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-start">
            <a
              href="/services"
              className="inline-flex items-center justify-center bg-[#CDFF00] px-6 py-3 text-sm font-semibold text-[#0F2419] transition-colors duration-200 hover:bg-[#bde800]"
            >
              Explore our services
            </a>

            <a
              href="/contact"
              className="inline-flex items-center justify-center border border-black/10 bg-white px-6 py-3 text-sm font-semibold text-[#0F2419] transition-colors duration-200 hover:bg-[#F4F7F5]"
            >
              Get a quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
