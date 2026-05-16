export default function GetAQuoteFormSection() {
  return (
    <section id="quote-form" className="bg-white py-16 md:py-20">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
        <div className="border border-black/10 bg-dark-green p-8 text-white shadow-[0_24px_60px_rgba(0,0,0,0.12)] md:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-neon-green/80">
            Tell Us About Your Project
          </p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Fill in a few details and we will prepare a quote.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-white/72 md:text-base">
            High-converting quote pages usually perform better when they ask only for clear, easy-to-answer essentials in the first step.
          </p>

          <form
            action="mailto:Dzmultipurposes@gmail.com"
            method="post"
            encType="text/plain"
            className="mt-8 grid gap-4 md:grid-cols-2"
          >
            <label className="grid gap-2 text-sm text-white/72 md:col-span-1">
              Full Name
              <input
                name="full_name"
                placeholder="Your name"
                className="h-12 border border-white/10 bg-white/5 px-4 text-sm text-white placeholder:text-white/35 outline-none transition focus:border-neon-green/60"
              />
            </label>
            <label className="grid gap-2 text-sm text-white/72 md:col-span-1">
              Company / Business Name
              <input
                name="business_name"
                placeholder="Business name"
                className="h-12 border border-white/10 bg-white/5 px-4 text-sm text-white placeholder:text-white/35 outline-none transition focus:border-neon-green/60"
              />
            </label>
            <label className="grid gap-2 text-sm text-white/72 md:col-span-1">
              Email Address
              <input
                name="email"
                type="email"
                placeholder="you@email.com"
                className="h-12 border border-white/10 bg-white/5 px-4 text-sm text-white placeholder:text-white/35 outline-none transition focus:border-neon-green/60"
              />
            </label>
            <label className="grid gap-2 text-sm text-white/72 md:col-span-1">
              Phone Number (Optional)
              <input
                name="phone"
                type="tel"
                placeholder="Phone number"
                className="h-12 border border-white/10 bg-white/5 px-4 text-sm text-white placeholder:text-white/35 outline-none transition focus:border-neon-green/60"
              />
            </label>
            <label className="grid gap-2 text-sm text-white/72 md:col-span-2">
              Service Needed
              <select
                name="service_needed"
                defaultValue=""
                className="h-12 border border-white/10 bg-white/5 px-4 text-sm text-white outline-none transition focus:border-neon-green/60"
              >
                <option value="" disabled className="text-[#141414]">
                  Choose a service
                </option>
                <option value="Website Design and Setup" className="text-[#141414]">
                  Website Design and Setup
                </option>
                <option value="Bulk Graphics Design" className="text-[#141414]">
                  Bulk Graphics Design
                </option>
                <option value="Social Media Setup and Management" className="text-[#141414]">
                  Social Media Setup and Management
                </option>
                <option value="AI Automation for Corporations" className="text-[#141414]">
                  AI Automation for Corporations
                </option>
                <option value="Corporate Branding" className="text-[#141414]">
                  Corporate Branding
                </option>
              </select>
            </label>
            <label className="grid gap-2 text-sm text-white/72 md:col-span-2">
              Project Details / What You Need Help With
              <textarea
                name="project_details"
                rows={5}
                placeholder="Tell us what you need, what you already have, and what outcome you want."
                className="border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none transition focus:border-neon-green/60"
              />
            </label>
            <label className="grid gap-2 text-sm text-white/72 md:col-span-1">
              Preferred Timeline
              <input
                name="timeline"
                placeholder="e.g. 2 weeks"
                className="h-12 border border-white/10 bg-white/5 px-4 text-sm text-white placeholder:text-white/35 outline-none transition focus:border-neon-green/60"
              />
            </label>
            <label className="grid gap-2 text-sm text-white/72 md:col-span-1">
              Budget Range (Optional)
              <input
                name="budget_range"
                placeholder="e.g. ₦150,000 - ₦250,000"
                className="h-12 border border-white/10 bg-white/5 px-4 text-sm text-white placeholder:text-white/35 outline-none transition focus:border-neon-green/60"
              />
            </label>
            <label className="grid gap-2 text-sm text-white/72 md:col-span-2">
              File Upload (Optional, for references or existing materials)
              <input
                name="reference_file"
                type="file"
                className="border border-dashed border-white/15 bg-white/5 px-4 py-3 text-sm text-white file:mr-4 file:border-0 file:bg-neon-green file:px-4 file:py-2 file:text-xs file:font-semibold file:uppercase file:tracking-[0.18em] file:text-dark-green"
              />
            </label>

            <button
              type="submit"
              className="mt-2 inline-flex w-full items-center justify-center border border-neon-green bg-neon-green px-6 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-dark-green transition hover:bg-mint-green md:col-span-2"
            >
              Submit Quote Request
            </button>
          </form>

          <p className="mt-4 text-sm leading-7 text-white/68">
            Once we receive your request, we will review the details and get back to you with the next steps, pricing guidance, or any clarifying questions needed to prepare an accurate quote.
          </p>
        </div>
      </div>
    </section>
  );
}
