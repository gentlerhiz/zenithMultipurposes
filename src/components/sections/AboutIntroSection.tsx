export default function AboutIntroSection() {
  return (
    <section className="bg-[#FAFAFA] py-16">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#0F2419]">
              Intro
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Zenith Multipurposes is a division of Bornstellar Limited.
            </h2>
            <p className="mt-4 text-base leading-7 text-[#6B7280]">
              Operating under Zenith Multiservices, we provide creative and
              business support services that help brands improve their
              online presence, corporate identity, promotional materials,
              and workflow efficiency.
            </p>
          </div>
          <div className="border border-black/10 bg-[#0F2419] p-8 text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#CDFF00]">
              What we stand for
            </p>
            <p className="mt-3 text-sm leading-7 text-white/70">
              Clear strategy, consistent branding, and reliable execution.
              We build the assets and systems that help businesses look
              professional and grow with confidence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
