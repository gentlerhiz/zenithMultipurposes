"use client";

import { useState } from "react";

type FormState = "idle" | "loading" | "success" | "error";

export default function ContactFormSection() {
  const [status, setStatus] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      service: (form.elements.namedItem("service") as HTMLSelectElement).value,
      summary: (form.elements.namedItem("summary") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = await res.json();

      if (!res.ok) {
        setErrorMsg(json.error ?? "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setErrorMsg("Unable to send your message right now. Please try again later.");
      setStatus("error");
    }
  }

  return (
    <section className="bg-[#FAFAFA] py-16">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="border border-black/10 bg-[#0F2419] p-8 text-white"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#CDFF00]">
              Project brief
            </p>
            <h2 className="mt-3 text-2xl font-semibold md:text-3xl">
              Tell us what you need.
            </h2>
            <p className="mt-3 text-sm text-white/70">
              Fill the details below and we will respond with a clear scope and
              next steps.
            </p>

            <div className="mt-6 grid gap-4">
              <label className="grid gap-2 text-sm text-white/70">
                Full name
                <input
                  name="name"
                  required
                  placeholder="Your name"
                  disabled={status === "loading"}
                  className="h-12 border border-white/10 bg-white/5 px-4 text-sm text-white placeholder:text-white/35 outline-none transition focus:border-[#CDFF00]/60 disabled:opacity-50"
                />
              </label>

              <label className="grid gap-2 text-sm text-white/70">
                Email address
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="you@email.com"
                  disabled={status === "loading"}
                  className="h-12 border border-white/10 bg-white/5 px-4 text-sm text-white placeholder:text-white/35 outline-none transition focus:border-[#CDFF00]/60 disabled:opacity-50"
                />
              </label>

              <label className="grid gap-2 text-sm text-white/70">
                Service interest
                <select
                  name="service"
                  defaultValue=""
                  disabled={status === "loading"}
                  className="h-12 border border-white/10 bg-[#0F2419] px-4 text-sm text-white outline-none transition focus:border-[#CDFF00]/60 disabled:opacity-50"
                >
                  <option value="" className="text-white/40">
                    Select a service
                  </option>
                  <option value="Branding and Rebranding" className="text-[#1A1A1A] bg-white">
                    Branding and Rebranding
                  </option>
                  <option value="Social Media Management" className="text-[#1A1A1A] bg-white">
                    Social Media Management
                  </option>
                  <option value="Bulk Graphics Design" className="text-[#1A1A1A] bg-white">
                    Bulk Graphics Design
                  </option>
                  <option value="AI Automation Setup" className="text-[#1A1A1A] bg-white">
                    AI Automation Setup
                  </option>
                  <option value="Website Design and App Development" className="text-[#1A1A1A] bg-white">
                    Website Design and App Development
                  </option>
                </select>
              </label>

              <label className="grid gap-2 text-sm text-white/70">
                Project summary
                <textarea
                  name="summary"
                  rows={5}
                  required
                  placeholder="Share timelines, goals, and deliverables needed"
                  disabled={status === "loading"}
                  className="border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none transition focus:border-[#CDFF00]/60 disabled:opacity-50"
                />
              </label>
            </div>

            {/* Error message */}
            {status === "error" && (
              <p className="mt-4 text-sm text-red-400">{errorMsg}</p>
            )}

            {/* Success message */}
            {status === "success" && (
              <div className="mt-4 border border-[#CDFF00]/30 bg-[#CDFF00]/10 px-4 py-3">
                <p className="text-sm font-semibold text-[#CDFF00]">
                  Brief sent successfully!
                </p>
                <p className="mt-1 text-xs text-white/60">
                  We will review it and get back to you shortly.
                </p>
              </div>
            )}

            <button
              type="submit"
              disabled={status === "loading" || status === "success"}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 bg-[#CDFF00] px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#0F2419] transition-all hover:bg-[#B8E600] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "loading" ? (
                <>
                  <span className="inline-block h-3.5 w-3.5 animate-spin rounded-full border-2 border-[#0F2419]/30 border-t-[#0F2419]" />
                  Sending…
                </>
              ) : status === "success" ? (
                "Brief sent ✓"
              ) : (
                "Send brief"
              )}
            </button>
          </form>

          {/* SIDEBAR */}
          <div className="space-y-6">
            <div className="border border-black/10 bg-white p-6 shadow-[0_18px_36px_rgba(17,17,17,0.08)]">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#0F2419]">
                What happens next
              </p>
              <ol className="mt-4 space-y-3 text-sm text-[#6B7280]">
                <li className="flex gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#CDFF00]/10 text-xs font-semibold text-[#0F2419]">
                    1
                  </span>
                  We review your brief and suggest a tailored package.
                </li>
                <li className="flex gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#CDFF00]/10 text-xs font-semibold text-[#0F2419]">
                    2
                  </span>
                  You receive timelines, pricing, and required assets.
                </li>
                <li className="flex gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#CDFF00]/10 text-xs font-semibold text-[#0F2419]">
                    3
                  </span>
                  Once approved, we kick off with a clear delivery plan.
                </li>
              </ol>
            </div>

            <div className="border border-black/10 bg-[#0F2419] p-6 text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
                Need a quicker response?
              </p>
              <p className="mt-3 text-lg font-semibold">
                Send your brief and we will schedule a call.
              </p>
              <p className="mt-3 text-sm text-white/70">
                We are available Monday to Saturday for consultations.
              </p>
              <a
                href="mailto:Dzmultipurposes@gmail.com"
                className="mt-5 inline-flex bg-[#CDFF00] px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#0F2419] transition-all hover:bg-[#B8E600]"
              >
                Email now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
