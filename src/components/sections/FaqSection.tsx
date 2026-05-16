"use client";

import { useMemo, useState } from "react";
import { ChevronDown, Search, Sparkles, Phone, Mail } from "lucide-react";

type FaqItem = {
  question: string;
  answer: string;
};

type FaqGroup = {
  id: string;
  title: string;
  description: string;
  items: FaqItem[];
};

const faqGroups: FaqGroup[] = [
  {
    id: "general",
    title: "General services",
    description: "What we do and who we serve.",
    items: [
      {
        question: "What does Zenith Multipurposes do exactly?",
        answer:
          "Zenith Multipurposes provides branding and rebranding, website design, social media setup and management, bulk graphics for print, and AI automation setup for businesses and organizations that want to look more professional and operate more efficiently.",
      },
      {
        question: "Who is Zenith Multipurposes for?",
        answer:
          "The services are designed for startups, growing SMEs, corporates, event organizers, churches, schools, content creators, and any business that needs a stronger brand presence and better digital systems.",
      },
      {
        question: "Are your services only for businesses in Nigeria?",
        answer:
          "No. While many clients are in Nigeria and across Africa, projects can be handled remotely for clients in other countries using email, messaging apps, and online meeting tools.",
      },
    ],
  },
  {
    id: "branding",
    title: "Branding and rebranding",
    description: "Identity systems, assets, and revisions.",
    items: [
      {
        question: "What is included in your branding and rebranding packages?",
        answer:
          "Branding packages can include logo creation, company profile, product or service catalogues, brochures, business cards, flyers, and other visual identity materials, depending on the package chosen.",
      },
      {
        question: "Can I request only one item like a logo or company profile?",
        answer:
          "Yes, standalone design services are available, but the pricing is structured so that full branding packs give better value when you need more than one item.",
      },
      {
        question: "How many revisions do I get on branding projects?",
        answer:
          "Most branding projects include a fixed number of revision rounds, for example 2 to 3 rounds, to refine the work. Extra revisions can be added at an additional cost if needed.",
      },
    ],
  },
  {
    id: "social",
    title: "Social media and YouTube",
    description: "Setup, management, and content support.",
    items: [
      {
        question: "Do you only set up social media pages, or can you manage them monthly?",
        answer:
          "Both options are available. Zenith Multipurposes can do one time setup and branding for your pages, or provide ongoing monthly management, depending on your budget and goals.",
      },
      {
        question: "Can you manage a YouTube channel for me?",
        answer:
          "Yes. Zenith Multipurposes can help with upload management, thumbnails, titles, descriptions, basic SEO, and general channel operation, based on the agreed package.",
      },
      {
        question: "Do I need to provide content, or do you also create content?",
        answer:
          "You can provide raw content such as videos, pictures, and business information, and the team will structure, design, and prepare it for posting. Content creation support can also be discussed if needed.",
      },
    ],
  },
  {
    id: "print",
    title: "Bulk graphics and print design",
    description: "Campaigns, event packs, and print ready files.",
    items: [
      {
        question: "What types of graphics do you design for print?",
        answer:
          "Zenith Multipurposes designs banners, posters, fliers, wedding and event invitations, corporate meeting materials, festive New Year graphics, company profiles, and product catalogues prepared for print.",
      },
      {
        question: "Do you handle printing or only design?",
        answer:
          "The primary focus is on professional design and print ready files. Printing can be handled through trusted partners or left to your preferred printing vendor, depending on the agreement.",
      },
      {
        question: "Can I order graphics in bulk for campaigns or events?",
        answer:
          "Yes. There are packages for campaign sets, corporate events, and seasonal designs where multiple graphics are created under one package.",
      },
    ],
  },
  {
    id: "automation",
    title: "AI automation",
    description: "Practical workflows that save time.",
    items: [
      {
        question: "What is AI automation, and how will it help my business?",
        answer:
          "AI automation uses tools and workflows to handle repetitive tasks such as customer replies, lead capture, reporting, or internal processes, helping your business save time and respond faster.",
      },
      {
        question: "I do not understand technology very well. Can you guide me?",
        answer:
          "Yes. Zenith Multipurposes can explain options in simple language, suggest where AI can fit into your business, and handle the technical setup after you approve the plan.",
      },
      {
        question: "Do I need expensive software to use AI automation?",
        answer:
          "Not always. Many solutions can be built using affordable or pay as you go tools. Costs depend on the type of automation and the tools selected.",
      },
    ],
  },
  {
    id: "web",
    title: "Website design and setup",
    description: "Modern, mobile first sites that convert.",
    items: [
      {
        question: "What kind of websites do you build?",
        answer:
          "Zenith Multipurposes builds professional business websites, landing pages, portfolio sites, and simple corporate sites with pages like Home, About, Services, Gallery, Pricing, and Contact.",
      },
      {
        question: "Will my website work on mobile phones?",
        answer:
          "Yes. All websites are designed to be mobile friendly so they display properly on phones, tablets, and computers.",
      },
      {
        question: "Can you help with domain and hosting?",
        answer:
          "Yes. Assistance can be provided in choosing and setting up domain and hosting, or the website can be built on your existing domain and hosting if you already have them.",
      },
      {
        question: "How long does it take to finish a website?",
        answer:
          "Timelines depend on the number of pages, content readiness, and features. A simple site can take a few weeks, while more complex projects may take longer.",
      },
    ],
  },
  {
    id: "pricing",
    title: "Pricing and payment",
    description: "Clear packages and flexible terms.",
    items: [
      {
        question: "How do you charge for your services?",
        answer:
          "Services are priced using clear packages and starting from rates. Complex or custom projects are quoted after a short discussion so the price matches the actual scope.",
      },
      {
        question: "Can I pay in instalments?",
        answer:
          "For many projects, a structure like 60 percent upfront and 40 percent on completion can be used. Exact payment terms are agreed before work starts.",
      },
      {
        question: "Are your prices negotiable?",
        answer:
          "Pricing is designed to be fair for both the client and the business. For long term or multi service projects, there may be room to adjust or bundle services.",
      },
    ],
  },
  {
    id: "process",
    title: "Process and communication",
    description: "How projects move from brief to delivery.",
    items: [
      {
        question: "What is the process after I contact you?",
        answer:
          "You share your project needs, a short consultation is held to clarify scope and goals, you receive a quote or package recommendation, and once approved with part payment, work begins based on an agreed timeline.",
      },
      {
        question: "How will we communicate during the project?",
        answer:
          "Communication can happen through email, WhatsApp, phone calls, or virtual meetings, depending on your preference and the project type.",
      },
      {
        question: "What do you need from me to start?",
        answer:
          "You will need to provide basic information about your business, existing brand assets if any, goals, examples you like, and any content, images, or documents you already have.",
      },
    ],
  },
];

// removed insights block (cards moved/removed per request)

export default function FaqSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [query, setQuery] = useState("");

  const categories = useMemo(
    () => ["All", ...faqGroups.map((group) => group.title)],
    []
  );

  const normalizedQuery = query.trim().toLowerCase();

  const visibleGroups = useMemo(() => {
    return faqGroups
      .filter((group) => activeCategory === "All" || group.title === activeCategory)
      .map((group) => {
        if (!normalizedQuery) return group;

        const items = group.items.filter((item) => {
          const haystack = `${group.title} ${item.question} ${item.answer}`.toLowerCase();
          return haystack.includes(normalizedQuery);
        });

        return { ...group, items };
      })
      .filter((group) => group.items.length > 0);
  }, [activeCategory, normalizedQuery]);

  const totalResults = visibleGroups.reduce(
    (sum, group) => sum + group.items.length,
    0
  );

  const isFiltered = activeCategory !== "All" || normalizedQuery.length > 0;

  return (
    <section className="relative">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,#f7fdf6_0%,#f6fdf2_42%,#f6fdf2_100%)] opacity-90" />
      <div className="mx-auto w-full max-w-6xl px-6 py-16 md:px-10 md:py-24">
        <div className="relative">
          <div className="grid gap-8 lg:grid-cols-12 items-center">
            <div className="lg:col-span-8">
              <p className="inline-flex items-center gap-2 bg-white/6 px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-[0.3em] text-dark-green">
                <Sparkles size={14} />
                Frequently Asked Questions
              </p>

              <h1 className="mt-6 text-4xl font-bold leading-tight text-text-primary md:text-5xl">
                Answers to help you move fast and choose the right service.
              </h1>

              <p className="mt-4 max-w-2xl text-base text-text-secondary md:text-lg">
                Browse by category or search for a topic to get clear details on
                branding, social media, web, graphics, and automation.
              </p>

              <div className="mt-6 max-w-xl">
                <label className="relative block">
                  <span className="sr-only">Search questions</span>
                  <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6b6b6b]" />
                  <input
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder="Search questions"
                    className="h-12 w-full border border-black/10 bg-white pl-12 pr-4 text-sm text-[#141414] shadow-sm outline-none transition focus:border-dark-green"
                  />
                </label>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="hidden lg:block">
                <div className="sticky top-24">
                  <div className="rounded-lg border border-black/6 bg-white p-5 shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-neon-green/10 text-neon-green">
                        <Phone size={18} />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-text-primary">Need help fast?</p>
                        <a href="tel:+2349037468616" className="mt-2 block text-sm font-medium text-text-primary hover:underline">+234 903 746 8616</a>
                        <a href="tel:+2348108529124" className="mt-1 block text-sm font-medium text-text-primary hover:underline">+234 810 852 9124</a>
                      </div>
                    </div>

                    <div className="mt-4 flex items-start gap-3">
                      <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-off-white text-dark-green">
                        <Mail size={16} />
                      </div>
                      <div>
                        <p className="text-xs text-text-secondary">Email</p>
                        <a href="mailto:Dzmultipurposes@gmail.com" className="text-sm font-medium text-text-primary hover:underline">Dzmultipurposes@gmail.com</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto w-full max-w-6xl px-6 pb-20 md:px-10">
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => {
            const isActive = category === activeCategory;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition ${
                  isActive
                    ? "bg-[#1f3f16] text-white"
                    : "border border-black/10 bg-white text-[#5c5c5c] hover:border-[#1f3f16]/40"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-xs text-[#6b6b6b]">
          <span>
            {totalResults} answer{totalResults === 1 ? "" : "s"} found
          </span>
          {isFiltered && (
            <button
              type="button"
              onClick={() => {
                setActiveCategory("All");
                setQuery("");
              }}
              className="border border-black/10 bg-white px-4 py-2 font-semibold uppercase tracking-[0.2em] text-[#1f3f16]"
            >
              Clear filters
            </button>
          )}
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
          <div className="space-y-8">
            {visibleGroups.length === 0 ? (
              <div className="border border-black/10 bg-white px-8 py-10 text-center">
                <p className="text-lg font-semibold text-[#141414]">
                  No matches found.
                </p>
                <p className="mt-2 text-sm text-[#6b6b6b]">
                  Try another keyword or clear the filters to see all answers.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setActiveCategory("All");
                    setQuery("");
                  }}
                  className="mt-5 bg-[#1f3f16] px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-white"
                >
                  Reset view
                </button>
              </div>
            ) : (
              visibleGroups.map((group) => (
                <div key={group.id} id={group.id} className="scroll-mt-32">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <h2 className="text-2xl font-semibold text-[#141414]">
                        {group.title}
                      </h2>
                      <p className="mt-2 text-sm text-[#6b6b6b]">
                        {group.description}
                      </p>
                    </div>
                    <span className="border border-black/10 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#1f3f16]">
                      {group.items.length} item{group.items.length === 1 ? "" : "s"}
                    </span>
                  </div>

                  <div className="mt-6 overflow-hidden border border-black/10 bg-white">
                    {group.items.map((item) => (
                      <details
                        key={item.question}
                        className="group border-b border-black/10 px-6 py-5 last:border-b-0"
                      >
                        <summary className="flex cursor-pointer items-center justify-between gap-4 text-left text-sm font-semibold text-[#141414]">
                          {item.question}
                          <ChevronDown
                            size={18}
                            className="shrink-0 text-[#6b6b6b] transition group-open:rotate-180"
                          />
                        </summary>
                        <p className="mt-4 text-sm leading-7 text-[#5c5c5c]">
                          {item.answer}
                        </p>
                      </details>
                    ))}
                  </div>
                </div>
              ))
            )}
          </div>

          <aside className="space-y-6 lg:sticky lg:top-20">
            <div className="border border-black/8 bg-[#1f3f16] px-6 py-5 text-white shadow-sm rounded-md">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">Start a project</p>
              <p className="mt-3 text-lg font-semibold">Ready to elevate your brand and systems?</p>
              <p className="mt-3 text-sm text-white/80">Send a short brief and we will recommend the right package for you.</p>
              <a href="/contact" className="mt-4 inline-flex bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-[#1f3f16] rounded">Contact the team</a>
            </div>

            {/* 'How it works' removed for a cleaner layout */}
          </aside>
        </div>
      </div>
    </section>
  );
}
