"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, ChevronRight } from "lucide-react";

const BRAND = "#0FBA81";

function TwitterIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15" {...props}>
      <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733a4.67 4.67 0 0 0 2.048-2.578 9.3 9.3 0 0 1-2.958 1.13 4.66 4.66 0 0 0-7.938 4.25 13.229 13.229 0 0 1-9.602-4.868c-.4.69-.63 1.49-.63 2.342A4.66 4.66 0 0 0 3.96 9.824a4.647 4.647 0 0 1-2.11-.583v.06a4.66 4.66 0 0 0 3.737 4.568 4.692 4.692 0 0 1-2.104.08 4.661 4.661 0 0 0 4.352 3.234 9.348 9.348 0 0 1-5.786 1.995 9.5 9.5 0 0 1-1.112-.065 13.175 13.175 0 0 0 7.14 2.093c8.57 0 13.255-7.098 13.255-13.254 0-.202-.005-.403-.014-.602a9.47 9.47 0 0 0 2.322-2.41z" />
    </svg>
  );
}

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15" {...props}>
      <path d="M22 12.06C22 6.505 17.523 2 12 2S2 6.505 2 12.06c0 5.02 3.657 9.184 8.438 9.94v-7.03H7.898v-2.91h2.54V9.845c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562v1.877h2.773l-.443 2.91h-2.33V22c4.78-.756 8.437-4.92 8.437-9.94z" />
    </svg>
  );
}

function YoutubeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15" {...props}>
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15" {...props}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.114 20.452H3.558V9h3.556v11.452z" />
    </svg>
  );
}

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
  { label: "Our Services", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Terms & Condition", href: "#" },
];

const gallery = [
  "https://picsum.photos/id/164/300/300",
  "https://picsum.photos/id/106/300/300",
  "https://picsum.photos/id/1040/300/300",
  "https://picsum.photos/id/1080/300/300",
  "https://picsum.photos/id/1076/300/300",
  "https://picsum.photos/id/1031/300/300",
];

const bottomLinks = ["Home", "Cookies", "Help", "FQAs"];

export default function Footer() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const cols = [0, 1, 2, 3];

  return (
    <footer ref={sectionRef} className="bg-[#0E1B3D] pt-20">
      <div className="container mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-12 pb-14">
        {/* Get In Touch */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(24px)",
            transition: `opacity 0.6s ease ${cols[0] * 0.1}s, transform 0.6s ease ${cols[0] * 0.1}s`,
          }}
        >
          <h4 className="text-white font-bold text-xl mb-6">Get In Touch</h4>
          <ul className="space-y-4 mb-7">
            <li className="flex items-center gap-3 text-gray-300 text-sm">
              <MapPin size={16} className="text-gray-400 shrink-0" />
              123 Street, New York, USA
            </li>
            <li className="flex items-center gap-3 text-gray-300 text-sm">
              <Phone size={16} className="text-gray-400 shrink-0" />
              +012 345 67890
            </li>
            <li className="flex items-center gap-3 text-gray-300 text-sm">
              <Mail size={16} className="text-gray-400 shrink-0" />
              info@example.com
            </li>
          </ul>
          <div className="flex gap-3">
            {[TwitterIcon, FacebookIcon, YoutubeIcon, LinkedinIcon].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="social link"
                className="w-10 h-10 rounded-full border border-white/25 flex items-center justify-center text-white transition-all duration-300 hover:-translate-y-1"
                style={{ transitionDelay: `${i * 40}ms` }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = BRAND;
                  (e.currentTarget as HTMLElement).style.borderColor = BRAND;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.25)";
                }}
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(24px)",
            transition: `opacity 0.6s ease ${cols[1] * 0.1}s, transform 0.6s ease ${cols[1] * 0.1}s`,
          }}
        >
          <h4 className="text-white font-bold text-xl mb-6">Quick Links</h4>
          <ul className="space-y-4">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="group flex items-center gap-2 text-gray-300 text-sm transition-colors hover:text-white"
                >
                  <ChevronRight
                    size={14}
                    style={{ color: BRAND }}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Photo Gallery */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(24px)",
            transition: `opacity 0.6s ease ${cols[2] * 0.1}s, transform 0.6s ease ${cols[2] * 0.1}s`,
          }}
        >
          <h4 className="text-white font-bold text-xl mb-6">Photo Gallery</h4>
          <div className="grid grid-cols-3 gap-2 max-w-65">
            {gallery.map((src, i) => (
              <div
                key={i}
                className="w-full aspect-square overflow-hidden border border-white/20 p-0.5"
              >
                <img
                  src={src}
                  alt={`Gallery ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(24px)",
            transition: `opacity 0.6s ease ${cols[3] * 0.1}s, transform 0.6s ease ${cols[3] * 0.1}s`,
          }}
        >
          <h4 className="text-white font-bold text-xl mb-6">Newsletter</h4>
          <p className="text-gray-300 text-sm mb-6 leading-relaxed">
            Dolor amet sit justo amet elitr clita clita elitr est.
          </p>
          <form
            className="flex items-center bg-transparent border border-white/25 rounded-md overflow-hidden focus-within:border-[#0FBA81] transition-colors"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 bg-transparent px-4 py-3.5 text-white placeholder-gray-400 outline-none text-sm min-w-0"
            />
            <button
              type="submit"
              className="text-white text-sm font-semibold px-5 py-3.5 m-1 rounded transition-all duration-300 hover:opacity-90 shrink-0"
              style={{ backgroundColor: BRAND }}
            >
              SignUp
            </button>
          </form>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <p>
            &copy;{" "}
            <span className="text-white underline underline-offset-2">
              Your Site Name
            </span>
            , All Right Reserved. Designed By{" "}
            <a
              href="https://htmlcodex.com"
              className="text-white underline underline-offset-2 hover:opacity-80 transition"
            >
              HTML Codex
            </a>
          </p>
          <div className="flex gap-8">
            {bottomLinks.map((label) => (
              <a
                key={label}
                href="#"
                className="text-white transition-colors hover:opacity-70"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}