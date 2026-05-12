export default function AboutStatsSection() {
  const stats = [
    { value: "10+", label: "Years in market" },
    { value: "200+", label: "Projects delivered" },
    { value: "5", label: "Core service lines" },
    { value: "98%", label: "Client satisfaction" },
  ];

  return (
    <section className="bg-gradient-to-br from-[#0F2419] to-[#0e1f0b] py-20 text-white">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
        <div className="mb-12">
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#CDFF00]">
            By The Numbers
          </p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Proven track record across all services.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-white/70">
            Our commitment to quality, strategy, and delivery has been recognized through consistent results and client trust.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="group relative flex flex-col justify-between overflow-hidden border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:border-[#CDFF00]/40 hover:bg-white/8"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Gradient accent on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#CDFF00]/0 to-[#CDFF00]/0 opacity-0 transition-all duration-300 group-hover:from-[#CDFF00]/5 group-hover:to-[#CDFF00]/0" />

              <div className="relative flex flex-col">
                <div className="text-5xl font-bold text-[#CDFF00] md:text-6xl">
                  {stat.value}
                </div>
                <p className="mt-4 text-sm font-semibold uppercase tracking-[0.3em] text-white/70 transition-colors duration-300 group-hover:text-[#CDFF00]">
                  {stat.label}
                </p>
              </div>

              {/* Decorative element */}
              <div className="absolute bottom-0 right-0 h-24 w-24 bg-gradient-to-br from-[#CDFF00] to-transparent opacity-0 blur-2xl transition-all duration-300 group-hover:opacity-10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
