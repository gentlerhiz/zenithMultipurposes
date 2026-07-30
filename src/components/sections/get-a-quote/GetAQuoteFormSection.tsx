"use client";

import { useRef, useState } from "react";

type FormState = "idle" | "loading" | "success" | "error";

export default function GetAQuoteFormSection() {
  const [status, setStatus]     = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const formRef                 = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const formData = new FormData(e.currentTarget);

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        body: formData,
      });

      const json = await res.json();

      if (!res.ok) {
        setErrorMsg(json.error ?? "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }

      setStatus("success");
      formRef.current?.reset();
    } catch {
      setErrorMsg("Unable to send your request right now. Please try again later.");
      setStatus("error");
    }
  }

  const inputClass =
    "h-12 border border-white/10 bg-white/5 px-4 text-sm text-white placeholder:text-white/35 outline-none transition focus:border-[#CDFF00]/60 disabled:opacity-50";

  return (
    <section id="quote-form" className="bg-white py-16 md:py-20">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
        <div className="border border-black/10 bg-[#0F2419] p-8 text-white shadow-[0_24px_60px_rgba(0,0,0,0.12)] md:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#CDFF00]/80">
            Tell Us About Your Project
          </p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Fill in a few details and we will prepare a quote.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-white/70 md:text-base">
            Share your goals and timeline — we will come back with a clear,
            tailored quote.
          </p>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-8 grid gap-4 md:grid-cols-2"
          >
            {/* Full Name */}
            <label className="grid gap-2 text-sm text-white/70 md:col-span-1">
              Full Name
              <input
                name="full_name"
                required
                placeholder="Your name"
                disabled={status === "loading"}
                className={inputClass}
              />
            </label>

            {/* Business Name */}
            <label className="grid gap-2 text-sm text-white/70 md:col-span-1">
              Company / Business Name
              <input
                name="business_name"
                placeholder="Business name"
                disabled={status === "loading"}
                className={inputClass}
              />
            </label>

            {/* Email */}
            <label className="grid gap-2 text-sm text-white/70 md:col-span-1">
              Email Address
              <input
                name="email"
                type="email"
                required
                placeholder="you@email.com"
                disabled={status === "loading"}
                className={inputClass}
              />
            </label>

            {/* Phone */}
            <label className="grid gap-2 text-sm text-white/70 md:col-span-1">
              Phone Number{" "}
              <span className="normal-case tracking-normal text-white/40">
                (Optional)
              </span>
              <input
                name="phone"
                type="tel"
                placeholder="Phone number"
                disabled={status === "loading"}
                className={inputClass}
              />
            </label>

            {/* Service */}
            <label className="grid gap-2 text-sm text-white/70 md:col-span-2">
              Service Needed
              <select
                name="service_needed"
                defaultValue=""
                disabled={status === "loading"}
                className="h-12 border border-white/10 bg-[#0F2419] px-4 text-sm text-white outline-none transition focus:border-[#CDFF00]/60 disabled:opacity-50"
              >
                <option value="" className="text-white/40">
                  Choose a service
                </option>
                <option value="Website Design And App Development" className="text-[#141414] bg-white">
                  Website Design And App Development
                </option>
                <option value="Bulk Graphics Design" className="text-[#141414] bg-white">
                  Bulk Graphics Design
                </option>
                <option value="Social Media Setup and Management" className="text-[#141414] bg-white">
                  Social Media Setup and Management
                </option>
                <option value="AI Automation for Corporations" className="text-[#141414] bg-white">
                  AI Automation for Corporations
                </option>
                <option value="Corporate Branding" className="text-[#141414] bg-white">
                  Corporate Branding
                </option>
              </select>
            </label>

            {/* Project Details */}
            <label className="grid gap-2 text-sm text-white/70 md:col-span-2">
              Project Details / What You Need Help With
              <textarea
                name="project_details"
                rows={5}
                required
                placeholder="Tell us what you need, what you already have, and what outcome you want."
                disabled={status === "loading"}
                className="border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none transition focus:border-[#CDFF00]/60 disabled:opacity-50"
              />
            </label>

            {/* Timeline */}
            <label className="grid gap-2 text-sm text-white/70 md:col-span-1">
              Preferred Timeline
              <input
                name="timeline"
                placeholder="e.g. 2 weeks"
                disabled={status === "loading"}
                className={inputClass}
              />
            </label>

            {/* Budget */}
            <label className="grid gap-2 text-sm text-white/70 md:col-span-1">
              Budget Range{" "}
              <span className="normal-case tracking-normal text-white/40">
                (Optional)
              </span>
              <input
                name="budget_range"
                placeholder="e.g. ₦150,000 - ₦250,000"
                disabled={status === "loading"}
                className={inputClass}
              />
            </label>

            {/* Error */}
            {status === "error" && (
              <p className="text-sm text-red-400 md:col-span-2">{errorMsg}</p>
            )}

            {/* Success */}
            {status === "success" && (
              <div className="border border-[#CDFF00]/30 bg-[#CDFF00]/10 px-4 py-3 md:col-span-2">
                <p className="text-sm font-semibold text-[#CDFF00]">
                  Quote request sent!
                </p>
                <p className="mt-1 text-xs text-white/60">
                  We will review your details and get back to you with pricing
                  and next steps.
                </p>
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={status === "loading" || status === "success"}
              className="mt-2 inline-flex w-full items-center justify-center gap-2 border border-[#CDFF00] bg-[#CDFF00] px-6 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#0F2419] transition hover:bg-[#E8FFB7] disabled:cursor-not-allowed disabled:opacity-60 md:col-span-2"
            >
              {status === "loading" ? (
                <>
                  <span className="inline-block h-3.5 w-3.5 animate-spin rounded-full border-2 border-[#0F2419]/30 border-t-[#0F2419]" />
                  Sending…
                </>
              ) : status === "success" ? (
                "Request sent ✓"
              ) : (
                "Submit Quote Request"
              )}
            </button>
          </form>

          <p className="mt-4 text-sm leading-7 text-white/60">
            Once we receive your request, we will review the details and get
            back to you with the next steps, pricing guidance, or any
            clarifying questions needed to prepare an accurate quote.
          </p>
        </div>
      </div>
    </section>
  );
}
