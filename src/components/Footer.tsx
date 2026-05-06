import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#142c10] text-white">
      <div className="mx-auto w-full max-w-7xl px-6 py-12 md:px-10">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div className="max-w-xs">
            <div className="flex items-center gap-3">
              <Image
                src="/logowhite.jpeg"
                alt="Zenith Multipurposes"
                width={44}
                height={44}
                className="h-11 w-11 rounded-full object-contain"
              />
              <span className="text-base font-bold tracking-wide text-white">
                Zenith <span className="text-[#fbbf24]">Multipurposes</span>
              </span>
            </div>
            <p className="mt-4 text-sm leading-6 text-white/60">
              Your Brand + Our Creativity = Success. Helping businesses look
              sharp and stand out online since 2012.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href="https://www.instagram.com/zenithmultipurposes/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/20 px-4 py-2 text-xs font-semibold text-white/70 transition hover:border-[#fbbf24] hover:text-[#fbbf24]"
              >
                Instagram
              </a>
              <a
                href="https://www.facebook.com/ZenithMultipurposes"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/20 px-4 py-2 text-xs font-semibold text-white/70 transition hover:border-[#fbbf24] hover:text-[#fbbf24]"
              >
                Facebook
              </a>
              <a
                href="https://x.com/ZenithMulticom"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/20 px-4 py-2 text-xs font-semibold text-white/70 transition hover:border-[#fbbf24] hover:text-[#fbbf24]"
              >
                X
              </a>
            </div>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-white/50">
              Navigation
            </p>
            <div className="mt-4 grid gap-2 text-sm font-medium text-white/80">
              <a href="#services" className="transition hover:text-[#fbbf24]">
                Social Media Management
              </a>
              <a href="#services" className="transition hover:text-[#fbbf24]">
                Graphics Design
              </a>
              <a href="#services" className="transition hover:text-[#fbbf24]">
                Branding &amp; Rebranding
              </a>
              <a href="#services" className="transition hover:text-[#fbbf24]">
                Website Building
              </a>
              <a href="#showcase" className="transition hover:text-[#fbbf24]">
                About Us
              </a>
              <a href="#contact" className="transition hover:text-[#fbbf24]">
                Contact Us
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-xs text-white/40">
          All rights Reserved — Copyright &copy; DivineMultipurposes 2022
        </div>
      </div>
    </footer>
  );
}
