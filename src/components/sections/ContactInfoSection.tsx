import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function ContactInfoSection() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "Dzmultipurposes@gmail.com",
      href: "mailto:Dzmultipurposes@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+234 8108529124",
      href: "tel:+2348108529124",
    },
    {
      icon: MapPin,
      label: "Office",
      value: "No 23, Akinyemi Street, Oluyole Estate, Oyo State",
    },
    {
      icon: Clock,
      label: "Response time",
      value: "Most requests answered within 24 to 48 hours.",
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
        <div className="mb-12">
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#0F2419]">
            Get in Touch
          </p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Multiple ways to reach us.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-[#6B7280]">
            Choose your preferred channel to contact our team. We're here to help with your next project.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {contactInfo.map((item) => {
            const Icon = item.icon;
            const isClickable = item.href;

            const content = (
              <div className="flex h-full flex-col">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center bg-gradient-to-br from-[#CDFF00] to-[#B8E600]">
                  <Icon className="h-6 w-6 text-[#0F2419]" />
                </div>
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.35em] text-[#0F2419]">
                  {item.label}
                </p>
                <p className="text-sm leading-relaxed text-[#6B7280]">
                  {item.value}
                </p>
              </div>
            );

            if (isClickable) {
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className="group relative flex flex-col overflow-hidden border border-black/10 bg-white p-6 shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)]"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#CDFF00]/0 to-[#CDFF00]/0 opacity-0 transition-all duration-300 group-hover:from-[#CDFF00]/5 group-hover:to-[#CDFF00]/0" />
                  <div className="relative">{content}</div>
                </a>
              );
            }

            return (
              <div
                key={item.label}
                className="flex flex-col overflow-hidden border border-black/10 bg-white p-6 shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-300"
              >
                {content}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
