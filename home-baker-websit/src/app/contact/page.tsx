import type { Metadata } from "next";
import { FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaFacebook } from "react-icons/fa";
import PageBanner from "@/components/ui/PageBanner";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/data/siteConfig";
import { getGeneralWhatsAppLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Get in touch with ${siteConfig.bakeryName} — order via WhatsApp, call, or visit us.`,
};

export default function ContactPage() {
  return (
    <div className="bg-white">
      <PageBanner
        image="/images/banner/pages-banner.jpg"
        eyebrow="Get In Touch"
        title="Contact Us"
        subtitle="Have a question or ready to order? We'd love to hear from you."
      />

      <section className="py-16">
        <div className="container-wide grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <a href={getGeneralWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="card-tilt flex flex-col items-center gap-3 rounded-lg bg-flour p-8 text-center shadow-sm">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366]/10 text-[#25D366]">
              <FaWhatsapp size={26} />
            </div>
            <h3 className="font-display text-lg font-semibold text-crust">WhatsApp</h3>
            <p className="text-sm text-cocoa/70">Fastest way to reach us — chat now</p>
          </a>

          {siteConfig.phoneNumber && (
            <a href={`tel:${siteConfig.phoneNumber}`} className="card-tilt flex flex-col items-center gap-3 rounded-lg bg-flour p-8 text-center shadow-sm">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-berry/10 text-berry">
                <FaPhone size={22} />
              </div>
              <h3 className="font-display text-lg font-semibold text-crust">Call Us</h3>
              <p className="text-sm text-cocoa/70">{siteConfig.phoneNumber}</p>
            </a>
          )}

          {siteConfig.email && (
            <a href={`mailto:${siteConfig.email}`} className="card-tilt flex flex-col items-center gap-3 rounded-lg bg-flour p-8 text-center shadow-sm">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-caramel/10 text-caramel-dark">
                <FaEnvelope size={22} />
              </div>
              <h3 className="font-display text-lg font-semibold text-crust">Email</h3>
              <p className="text-sm text-cocoa/70">{siteConfig.email}</p>
            </a>
          )}

          {siteConfig.address && (
            <div className="card-tilt flex flex-col items-center gap-3 rounded-lg bg-flour p-8 text-center shadow-sm">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-crust/10 text-crust">
                <FaMapMarkerAlt size={22} />
              </div>
              <h3 className="font-display text-lg font-semibold text-crust">Location</h3>
              <p className="text-sm text-cocoa/70">{siteConfig.address}</p>
            </div>
          )}
        </div>

        <div className="mx-auto mt-16 max-w-lg text-center">
          <h2 className="font-display text-2xl font-semibold text-crust">Follow Us</h2>
          <p className="mt-2 text-sm text-cocoa/70">See our latest creations and behind-the-scenes moments.</p>

          <div className="mt-5 flex justify-center gap-5">
            {siteConfig.socialLinks?.instagram && (
              <a href={siteConfig.socialLinks.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex h-11 w-11 items-center justify-center rounded-full bg-berry/10 text-berry transition-colors hover:bg-berry hover:text-flour">
                <FaInstagram size={18} />
              </a>
            )}
            {siteConfig.socialLinks?.facebook && (
              <a href={siteConfig.socialLinks.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="flex h-11 w-11 items-center justify-center rounded-full bg-berry/10 text-berry transition-colors hover:bg-berry hover:text-flour">
                <FaFacebook size={18} />
              </a>
            )}
          </div>

          <div className="mt-10">
            <Button href="/order" variant="primary">Place Your Order</Button>
          </div>
        </div>
      </section>
    </div>
  );
}