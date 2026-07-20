"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const BRAND = "#0FBA81";

const testimonials = [
  {
    name: "Ayesha Khan",
    role: "Home Buyer",
    image: "https://i.pravatar.cc/200?img=32",
    text: "Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd erat eos",
  },
  {
    name: "Bilal Ahmed",
    role: "Property Investor",
    image: "https://i.pravatar.cc/200?img=13",
    text: "Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd erat eos",
  },
  {
    name: "Sana Malik",
    role: "Renter",
    image: "https://i.pravatar.cc/200?img=44",
    text: "Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd erat eos",
  },
  {
    name: "Usman Tariq",
    role: "Home Seller",
    image: "https://i.pravatar.cc/200?img=51",
    text: "Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd erat eos",
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");

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

  const pairCount = Math.ceil(testimonials.length / 2);

  const prev = () => {
    setDirection("left");
    setIndex((i) => (i - 1 + pairCount) % pairCount);
  };
  const next = () => {
    setDirection("right");
    setIndex((i) => (i + 1) % pairCount);
  };

  const pair = [testimonials[index * 2], testimonials[index * 2 + 1]].filter(
    Boolean
  );

  return (
    <section ref={sectionRef} className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div
          className="text-center max-w-2xl mx-auto mb-16"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#0E1B3D] mb-5">
            Our Clients Say!
          </h2>
          <p className="text-gray-500">
            Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut
            dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed
            rebum vero dolor duo.
          </p>
        </div>

        <div className="relative flex items-center justify-center gap-6">
          {/* Prev button */}
          <button
            onClick={prev}
            aria-label="Previous testimonials"
            className="hidden md:flex w-12 h-12 rounded-full items-center justify-center text-white shrink-0 shadow-md transition-all duration-300 hover:opacity-90 hover:-translate-x-1"
            style={{ backgroundColor: BRAND }}
          >
            <ArrowLeft size={18} />
          </button>

          {/* Cards */}
          <div
            key={index}
            className="grid md:grid-cols-2 gap-6 flex-1 max-w-4xl"
            style={{
              animation: `${direction === "right" ? "slideInRight" : "slideInLeft"} 0.5s ease`,
            }}
          >
            {pair.map((t) => (
              <div
                key={t.name}
                className="p-3 rounded-2xl border-2 border-dashed"
                style={{ backgroundColor: `${BRAND}0D`, borderColor: `${BRAND}55` }}
              >
                <div className="bg-white rounded-xl p-8 border border-dashed border-gray-200 h-full">
                  <p className="text-gray-500 leading-relaxed mb-6">
                    {t.text}
                  </p>
                  <div className="flex items-center gap-3">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                    <div>
                      <h4 className="font-bold text-[#0E1B3D]">{t.name}</h4>
                      <p className="text-sm text-gray-400">{t.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Next button */}
          <button
            onClick={next}
            aria-label="Next testimonials"
            className="hidden md:flex w-12 h-12 rounded-full items-center justify-center text-white shrink-0 shadow-md transition-all duration-300 hover:opacity-90 hover:translate-x-1"
            style={{ backgroundColor: BRAND }}
          >
            <ArrowRight size={18} />
          </button>
        </div>

        {/* Mobile controls */}
        <div className="flex md:hidden justify-center gap-4 mt-8">
          <button
            onClick={prev}
            aria-label="Previous testimonials"
            className="w-11 h-11 rounded-full flex items-center justify-center text-white"
            style={{ backgroundColor: BRAND }}
          >
            <ArrowLeft size={16} />
          </button>
          <button
            onClick={next}
            aria-label="Next testimonials"
            className="w-11 h-11 rounded-full flex items-center justify-center text-white"
            style={{ backgroundColor: BRAND }}
          >
            <ArrowRight size={16} />
          </button>
        </div>
      </div>

      <style>{`
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-40px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </section>
  );
}