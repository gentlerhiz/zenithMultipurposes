import Image from "next/image";

export default function AboutCEOSection() {
  return (
    <section className="bg-[#FAFAFA] py-16">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="relative overflow-hidden" style={{ aspectRatio: "1 / 1" }}>
            <Image
              src="/ceoimage.png"
              alt="Zenith Multipurposes CEO"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#0F2419]">
              CEO
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Leadership focused on quality and clarity.
            </h2>
            <p className="mt-4 text-base leading-7 text-[#6B7280]">
              Our CEO leads with a commitment to detail, client success, and
              practical business solutions. The goal is simple: help brands
              communicate better, look more credible, and operate with
              systems that save time.
            </p>
            <div className="mt-6 border border-black/10 bg-[#0F2419] p-6 text-white">
              <p className="text-sm font-semibold text-white">
                CEO Bio
              </p>
              <p className="mt-2 text-sm leading-7 text-white/70">
                A creative business leader with experience in branding,
                digital communication, and business support services. Known
                for building structured workflows and strong brand systems
                for SMEs and corporate teams.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
