"use client";

import { useState } from "react";
import Link from "next/link";
import { FaWhatsapp, FaBars, FaTimes } from "react-icons/fa";
import { siteConfig } from "@/data/siteConfig";
import { getGeneralWhatsAppLink } from "@/lib/whatsapp";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Gallery", href: "/gallery" },
  { name: "Order", href: "/order" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-4">
      <nav className="mx-auto flex max-w-5xl items-center justify-between rounded-full border border-crust/5 bg-white/90 px-5 py-3 shadow-lg backdrop-blur-md sm:px-7">
        <Link href="/" className="font-display text-xl font-bold text-berry">
          {siteConfig.bakeryName}
        </Link>

        <ul className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="text-sm font-medium text-cocoa transition-colors hover:text-berry">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a href={getGeneralWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="hidden h-10 w-10 items-center justify-center rounded-full bg-[#25D366]/10 text-[#25D366] transition-colors hover:bg-[#25D366] hover:text-white sm:flex" aria-label="Chat on WhatsApp">
            <FaWhatsapp size={18} />
          </a>

          <button className="flex h-10 w-10 items-center justify-center rounded-full text-crust md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="mx-auto mt-2 max-w-5xl rounded-2xl border border-crust/5 bg-white/95 p-4 shadow-lg backdrop-blur-md md:hidden">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="block rounded-lg px-3 py-2.5 text-sm font-medium text-cocoa hover:bg-berry/5 hover:text-berry" onClick={() => setIsOpen(false)}>
                  {link.name}
                </Link>
              </li>
            ))}
            <li>
              <a href={getGeneralWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="mt-1 flex items-center gap-2 rounded-lg bg-[#25D366]/10 px-3 py-2.5 text-sm font-medium text-[#25D366]" onClick={() => setIsOpen(false)}>
                <FaWhatsapp size={16} /> Chat on WhatsApp
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}