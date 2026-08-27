import Link from "next/link";
import { FaInstagram, FaFacebook, FaWhatsapp, FaPhone } from "react-icons/fa";
import { siteConfig } from "@/data/siteConfig";
import { getGeneralWhatsAppLink } from "@/lib/whatsapp";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-flour border-t border-crust/10 mt-16">
      <div className="container-wide py-10 grid gap-8 md:grid-cols-3">
        {/* Bakery Info */}
        <div>
          <h3 className="text-lg font-bold text-berry">
            {siteConfig.bakeryName}
          </h3>
          <p className="mt-2 text-sm text-cocoa">{siteConfig.tagline}</p>
          {siteConfig.address && (
            <p className="mt-2 text-sm text-cocoa/70">{siteConfig.address}</p>
          )}
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-crust mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about" className="text-cocoa hover:text-berry">About Us</Link></li>
            <li><Link href="/gallery" className="text-cocoa hover:text-berry">Gallery</Link></li>
            <li><Link href="/order" className="text-cocoa hover:text-berry">Order Now</Link></li>
            <li><Link href="/contact" className="text-cocoa hover:text-berry">Contact</Link></li>
          </ul>
        </div>

        {/* Contact / Social */}
        <div>
          <h4 className="font-semibold text-crust mb-3">Get in Touch</h4>
          <div className="flex items-center gap-4 mb-3">
            <a href={getGeneralWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700 text-xl" aria-label="WhatsApp">
              <FaWhatsapp />
            </a>

            {siteConfig.phoneNumber && (
              <a href={`tel:${siteConfig.phoneNumber}`} className="text-cocoa hover:text-berry text-xl" aria-label="Call">
                <FaPhone />
              </a>
            )}

            {siteConfig.socialLinks?.instagram && (
              <a href={siteConfig.socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="text-berry hover:text-crust text-xl" aria-label="Instagram">
                <FaInstagram />
              </a>
            )}

            {siteConfig.socialLinks?.facebook && (
              <a href={siteConfig.socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 text-xl" aria-label="Facebook">
                <FaFacebook />
              </a>
            )}
          </div>
          {siteConfig.email && (
            <p className="text-sm text-cocoa/70">{siteConfig.email}</p>
          )}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-crust/10 py-4 text-center text-sm text-cocoa/70">
        © {year} {siteConfig.bakeryName}. All rights reserved.
      </div>
    </footer>
  );
}