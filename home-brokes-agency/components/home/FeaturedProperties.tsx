"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { MapPin, Ruler, BedDouble, Bath } from "lucide-react";

const BRAND = "#0FBA81";

type Filter = "Featured" | "For Sell" | "For Rent";

const properties: {
  id: number;
  image: string;
  tag: "For Sell" | "For Rent";
  category: string;
  price: string;
  title: string;
  location: string;
  sqft: string;
  beds: number;
  baths: number;
}[] = [
  {
    id: 1,
    image: "/image/hero-1.jpg",
    tag: "For Sell",
    category: "Appartment",
    price: "$12,345",
    title: "Golden Urban House For Sell",
    location: "123 Street, New York, USA",
    sqft: "1000 Sqft",
    beds: 3,
    baths: 2,
  },
  {
    id: 2,
    image: "/image/home-2.jpg",
    tag: "For Rent",
    category: "Villa",
    price: "$12,345",
    title: "Golden Urban House For Sell",
    location: "123 Street, New York, USA",
    sqft: "1000 Sqft",
    beds: 3,
    baths: 2,
  },
  {
    id: 3,
    image: "/image/home-3.jpg",
    tag: "For Sell",
    category: "Office",
    price: "$12,345",
    title: "Golden Urban House For Sell",
    location: "123 Street, New York, USA",
    sqft: "1000 Sqft",
    beds: 3,
    baths: 2,
  },
  {
    id: 4,
    image: "/image/home-4.jpg",
    tag: "For Rent",
    category: "Building",
    price: "$12,345",
    title: "Golden Urban House For Sell",
    location: "123 Street, New York, USA",
    sqft: "1000 Sqft",
    beds: 3,
    baths: 2,
  },
  {
    id: 5,
    image: "/image/home-5.jpg",
    tag: "For Sell",
    category: "Home",
    price: "$12,345",
    title: "Golden Urban House For Sell",
    location: "123 Street, New York, USA",
    sqft: "1000 Sqft",
    beds: 3,
    baths: 2,
  },
  {
    id: 6,
    image: "/image/home-6.jpg",
    tag: "For Rent",
    category: "Shop",
    price: "$12,345",
    title: "Golden Urban House For Sell",
    location: "123 Street, New York, USA",
    sqft: "1000 Sqft",
    beds: 3,
    baths: 2,
  },
];

export default function FeaturedProperties() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [filter, setFilter] = useState<Filter>("Featured");

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

  const filtered =
    filter === "Featured"
      ? properties
      : properties.filter((p) => p.tag === filter);

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Header row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0E1B3D] mb-4">
              Property Listing
            </h2>
            <p className="text-gray-500 max-w-xl">
              Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut
              dolore lorem kasd vero ipsum sit eirmod sit diam justo sed
              rebum.
            </p>
          </div>

          {/* Filter tabs */}
          <div className="flex gap-3 shrink-0">
            {(["Featured", "For Sell", "For Rent"] as Filter[]).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className="px-5 py-2.5 rounded-md font-medium border transition-all duration-300"
                style={
                  filter === f
                    ? { backgroundColor: BRAND, borderColor: BRAND, color: "#fff" }
                    : { borderColor: BRAND, color: "#0E1B3D", backgroundColor: "transparent" }
                }
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((p, i) => (
            <div
              key={p.id}
              className="group bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(30px)",
                transition: `opacity 0.6s ease ${i * 0.1}s, transform 0.6s ease ${i * 0.1}s, box-shadow 0.4s ease, translate 0.4s ease`,
              }}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <span
                  className="absolute top-4 left-4 text-white text-sm font-semibold px-4 py-1.5 rounded-md"
                  style={{ backgroundColor: BRAND }}
                >
                  {p.tag}
                </span>
                <span className="absolute bottom-0 left-4 translate-y-1/2 bg-white text-sm font-semibold px-4 py-1.5 rounded-md shadow-md">
                  <span style={{ color: BRAND }}>{p.category}</span>
                </span>
              </div>

              {/* Content */}
              <div className="p-6 pt-8">
                <p
                  className="text-xl font-bold mb-2 transition-colors"
                  style={{ color: BRAND }}
                >
                  {p.price}
                </p>
                <h3 className="text-lg font-bold text-[#0E1B3D] mb-3 transition-colors group-hover:text-[#0FBA81]">
                  {p.title}
                </h3>
                <div className="flex items-center gap-1 text-gray-500 text-sm mb-5">
                  <MapPin size={14} style={{ color: BRAND }} />
                  {p.location}
                </div>

                <div className="flex items-center justify-between text-sm text-gray-500 border-t pt-4">
                  <span className="flex items-center gap-1.5">
                    <Ruler size={16} style={{ color: BRAND }} />
                    {p.sqft}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <BedDouble size={16} style={{ color: BRAND }} />
                    {p.beds} Bed
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Bath size={16} style={{ color: BRAND }} />
                    {p.baths} Bath
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Browse more button */}
        <div className="text-center mt-14">
          <a
            href="/"
            className="inline-block font-semibold px-10 py-4 rounded-md text-white transition-all duration-300 hover:opacity-90 hover:-translate-y-0.5 hover:shadow-lg"
            style={{ backgroundColor: BRAND }}
          >
            Browse More Property
          </a>
        </div>
      </div>
    </section>
  );
}