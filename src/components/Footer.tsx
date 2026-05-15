import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-[#0F2419] text-white">
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
                Zenith <span className="text-[#CDFF00]">Multipurposes</span>
              </span>
            </div>
            <p className="mt-4 text-sm leading-6 text-white/70">
              Zenith Multipurposes helps businesses look professional, attract
              more customers, and operate more efficiently through branding,
              web, graphics, social media, and automation support.
            </p>
            <p className="mt-3 text-xs text-white/50">
              A division of Bornstellar Limited operating under Zenith
              Multiservices.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href="https://www.instagram.com/zenithmultipurposes/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/20 px-4 py-2 text-xs font-semibold text-white/70 transition hover:border-[#CDFF00] hover:bg-[#CDFF00]/10 hover:text-[#CDFF00]"
              >
                Instagram
              </a>
              <a
                href="https://www.facebook.com/ZenithMultipurposes"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/20 px-4 py-2 text-xs font-semibold text-white/70 transition hover:border-[#CDFF00] hover:bg-[#CDFF00]/10 hover:text-[#CDFF00]"
              >
                Facebook
              </a>
              <a
                href="https://x.com/ZenithMulticom"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/20 px-4 py-2 text-xs font-semibold text-white/70 transition hover:border-[#CDFF00] hover:bg-[#CDFF00]/10 hover:text-[#CDFF00]"
              >
                X
              </a>
            </div>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#CDFF00]/70">
              Navigation
            </p>
            <div className="mt-4 grid gap-2 text-sm font-medium text-white/80">
              <Link href="/about" className="transition hover:text-[#CDFF00]">
                About
              </Link>
              <Link href="/services" className="transition hover:text-[#CDFF00]">
                Services
              </Link>
              <Link href="/#gallery" className="transition hover:text-[#CDFF00]">
                Gallery
              </Link>
              <Link href="/faq" className="transition hover:text-[#CDFF00]">
                FAQ
              </Link>
              <Link href="/contact" className="transition hover:text-[#CDFF00]">
                Contact
              </Link>
            </div>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#CDFF00]/70">
              Contact
            </p>
            <div className="mt-4 grid gap-2 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <FiMapPin className="h-4 w-4 text-white/80" />
                <span>No 23, Akinyemi Street, Oluyole Estate, Oyo State</span>
              </div>

              <a href="mailto:Dzmultipurposes@gmail.com" className="flex items-center gap-2 transition hover:text-[#CDFF00]">
                <FiMail className="h-4 w-4 text-white/80" />
                Dzmultipurposes@gmail.com
              </a>

              <a href="https://wa.me/2349037468616" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 transition hover:text-[#CDFF00]">
                <FaWhatsapp className="h-4 w-4 text-white/80" />
                +234 903 746 8616
              </a>

              <a href="tel:08108529124" className="flex items-center gap-2 transition hover:text-[#CDFF00]">
                <FiPhone className="h-4 w-4 text-white/80" />
                08108529124
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-xs text-white/40">
          All rights Reserved — Copyright &copy; Zenith Multipurposes 2026
        </div>
      </div>
    </footer>
  );
}
