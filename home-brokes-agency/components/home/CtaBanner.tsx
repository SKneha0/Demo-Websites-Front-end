"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Phone, Calendar } from "lucide-react";
import AgentContact from "@/public/image/agent-contact.jpg";
const BRAND = "#0FBA81";

export default function CtaBanner() {
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
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Outer dashed mint frame */}
        <div
          className="p-8 rounded-2xl border-2 border-dashed"
          style={{
            backgroundColor: `${BRAND}0D`,
            borderColor: `${BRAND}55`,
            opacity: visible ? 1 : 0,
            transform: visible ? "scale(1)" : "scale(0.96)",
            transition: "opacity 0.8s cubic-bezier(0.22,1,0.36,1), transform 0.8s cubic-bezier(0.22,1,0.36,1)",
          }}
        >
          {/* Inner white card */}
          <div className="bg-white rounded-xl p-8 grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div
              className="overflow-hidden rounded-xl"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateX(0)" : "translateX(-40px)",
                transition: "opacity 0.8s ease 0.15s, transform 0.8s ease 0.15s",
              }}
            >
              <Image
                src={AgentContact}
                alt="Certified real estate agent"
                width={600}
                height={460}
                className="w-full h-115 object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>

            {/* Content */}
            <div>
              <h2
                className="text-3xl md:text-4xl lg:text-[42px] font-bold text-[#0E1B3D] leading-tight mb-6"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(24px)",
                  transition: "opacity 0.7s ease 0.3s, transform 0.7s ease 0.3s",
                }}
              >
                Contact With Our Certified Agent
              </h2>

              <p
                className="text-gray-500 mb-10 leading-relaxed"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(24px)",
                  transition: "opacity 0.7s ease 0.42s, transform 0.7s ease 0.42s",
                }}
              >
                Eirmod sed ipsum dolor sit rebum magna erat. Tempor lorem kasd
                vero ipsum sit sit diam justo sed vero dolor duo.
              </p>

              <div
                className="flex flex-wrap gap-4"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(24px)",
                  transition: "opacity 0.7s ease 0.54s, transform 0.7s ease 0.54s",
                }}
              >
                <a
                  href="/"
                  className="flex items-center gap-2 text-white font-semibold px-7 py-4 rounded-md transition-all duration-300 hover:opacity-90 hover:-translate-y-0.5 hover:shadow-lg"
                  style={{ backgroundColor: BRAND }}
                >
                  <Phone size={18} />
                  Make A Call
                </a>
                <a
                  href="/"
                  className="flex items-center gap-2 bg-[#0E1B3D] text-white font-semibold px-7 py-4 rounded-md transition-all duration-300 hover:opacity-90 hover:-translate-y-0.5 hover:shadow-lg"
                >
                  <Calendar size={18} />
                  Get Appoinment
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}