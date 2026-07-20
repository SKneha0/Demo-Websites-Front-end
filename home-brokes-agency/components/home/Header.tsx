"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";

const BRAND = "#0FBA81";

const slides = [
  {
    image: "/image/hero-1.jpg",
    heading: "Live With Your",
    highlight: "Perfect Home",
    tail: "Family",
  },
  {
    image: "/image/hero-2.jpg",
    heading: "Discover Your",
    highlight: "Dream Property",
    tail: "Today",
  },
  {
    image: "/image/hero-3.jpg",
    heading: "Invest In A",
    highlight: "Bright Future",
    tail: "For You",
  },
];

export default function Header() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () =>
    setCurrent((i) => (i - 1 + slides.length) % slides.length);
  const nextSlide = () => setCurrent((i) => (i + 1) % slides.length);

  const slide = slides[current];

  return (
    <header className="relative">
      {/* Left: Text content */}
      <main  className="grid lg:grid-cols-2 min-h-162.5">
        
      
      <div className="flex items-center px-8 md:px-16 py-16 bg-white">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#0E1B3D] leading-tight mb-6">
            Find A <span style={{ color: BRAND }}>{slide.highlight}</span>{" "}
            <br className="hidden md:block" />
            {slide.heading} <br className="hidden md:block" />
            {slide.tail}
          </h1>

          <p className="text-gray-500 max-w-md mb-8">
            Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no.
            Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.
          </p>

          <a
            href="/contact"
            className="inline-block text-white font-semibold px-8 py-4 rounded-md transition hover:opacity-90"
            style={{ backgroundColor: BRAND }}
          >
            Get Started
          </a>
        </div>
      </div>
      
      {/* Right: Image slider */}
      <div className="relative overflow-hidden min-h-87.5">
        <img
          src={slide.image}
          alt="Property showcase"
          className="w-full h-full object-cover absolute inset-0"
        />

        {/* Slider controls */}
        <div className="absolute left-8 top-1/2 -translate-y-1/2 flex flex-col gap-4">
          <button
            onClick={prevSlide}
            aria-label="Previous image"
            className="w-14 h-14 rounded-full flex items-center justify-center text-white shadow-lg transition hover:opacity-90"
            style={{ backgroundColor: BRAND }}
          >
            <ChevronLeft size={22} />
          </button>
          <button
            onClick={nextSlide}
            aria-label="Next image"
            className="w-14 h-14 rounded-full flex items-center justify-center text-white shadow-lg transition hover:opacity-90"
            style={{ backgroundColor: BRAND }}
          >
            <ChevronRight size={22} />
          </button>
        </div>

        {/* Dots */}
        <div className="absolute bottom-6 right-8 flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to slide ${i + 1}`}
              className="w-2.5 h-2.5 rounded-full transition"
              style={{
                backgroundColor: i === current ? BRAND : "rgba(255,255,255,0.6)",
              }}
            />
          ))}
          </div>
        </div>
         </main>
         {/* Property Search Bar */}
      <div className="py-6 px-6 md:px-16" style={{ backgroundColor: BRAND }}>
        <form className="grid md:grid-cols-4 gap-4 max-w-6xl mx-auto">
          <input
            type="text"
            placeholder="Search Keyword"
            className="w-full px-5 py-4 rounded-md outline-none text-[#0E1B3D] bg-white"
          />
 
          <select
            defaultValue=""
            className="w-full px-5 py-4 rounded-md outline-none text-[#0E1B3D] bg-white"
          >
            <option value="" disabled>
              Property Type
            </option>
            <option value="house">House</option>
            <option value="apartment">Apartment</option>
            <option value="villa">Villa</option>
            <option value="office">Office</option>
          </select>
 
          <select
            defaultValue=""
            className="w-full px-5 py-4 rounded-md outline-none text-[#0E1B3D] bg-white"
          >
            <option value="" disabled>
              Location
            </option>
            <option value="karachi">Karachi</option>
            <option value="lahore">Lahore</option>
            <option value="islamabad">Islamabad</option>
          </select>
 
          <button
            type="submit"
            className="flex items-center justify-center gap-2 bg-[#0E1B3D] hover:opacity-90 text-white font-semibold px-6 py-4 rounded-md transition"
          >
            <Search size={18} />
            Search
          </button>
        </form>
      </div>
        



    </header>
  );
}