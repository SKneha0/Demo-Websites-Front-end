"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Check } from "lucide-react";

import HeroImage from "@/public/image/hero-1.jpg";
 
const BRAND = "#0FBA81";
 
const points = [
  "Tempor erat elitr rebum at clita",
  "Aliqu diam amet diam et eos",
  "Clita duo justo magna dolore erat amet",
];

 
export default function WhyChooseUs() {
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
      { threshold: 0.25 }
    );
 
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
 
  return (
    <section ref={sectionRef} className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Image with decorative offset background */}
        <div
          className="relative"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateX(0)" : "translateX(-60px)",
            transition: "opacity 0.9s cubic-bezier(0.22,1,0.36,1), transform 0.9s cubic-bezier(0.22,1,0.36,1)",
          }}
        >
          {/* Decorative green block behind image, with cut corner */}
          <div
            className="absolute -left-6 -top-6 w-full h-full transition-transform duration-800"
            style={{
              backgroundColor: BRAND,
              clipPath: "polygon(0 0, 82% 0, 100% 8%, 100% 100%, 0 100%)",
              transform: visible ? "scale(1)" : "scale(0.9)",
              transitionDelay: "0.15s",
           
           
            }}
            
          />
          <Image
              src={HeroImage}
              alt="Place to find the perfect property"
              className="relative w-full h-100 object-cover shadow-xl transition-transform duration-700 hover:scale-[1.02]"
/>
         
        </div>
 
        {/* Text content */}
        <div>
          <h2
            className="text-3xl md:text-4xl lg:text-[42px] font-bold text-[#0E1B3D] leading-tight mb-6"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s",
            }}
          >
            #1 Place To Find The Perfect Property
          </h2>
 
          <p
            className="text-gray-500 max-w-xl mb-8 leading-relaxed"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.7s ease 0.22s, transform 0.7s ease 0.22s",
            }}
          >
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
            diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
            lorem sit clita duo justo magna dolore erat amet
          </p>
 
          <ul className="space-y-4 mb-10">
            {points.map((point, i) => (
              <li
                key={point}
                className="flex items-center gap-3 group"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateX(0)" : "translateX(-20px)",
                  transition: `opacity 0.6s ease ${0.35 + i * 0.12}s, transform 0.6s ease ${0.35 + i * 0.12}s`,
                }}
              >
                <span
                  className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${BRAND}1A` }}
                >
                  <Check size={14} style={{ color: BRAND }} strokeWidth={3} />
                </span>
                <span className="text-[#0E1B3D]">{point}</span>
              </li>
            ))}
          </ul>
 
          <a
            href="/"
            className="inline-block text-white font-semibold px-8 py-4 rounded-md transition-all duration-300 hover:opacity-90 hover:shadow-lg hover:-translate-y-0.5"
            style={{
              backgroundColor: BRAND,
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(24px)",
              transitionProperty: "opacity, transform, box-shadow",
              transitionDuration: "0.7s, 0.7s, 0.3s",
              transitionDelay: "0.7s, 0.7s, 0s",
            }}
          >
            Read More
          </a>
        </div>
      </div>
    </section>
  );
}
 