"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const BRAND = "#0FBA81";

export default function ScrollToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollUp = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button
      onClick={scrollUp}
      aria-label="Scroll to top"
      className="fixed bottom-8 right-8 w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg z-50 transition-all duration-300 hover:opacity-90 hover:-translate-y-1"
      style={{
        backgroundColor: BRAND,
        opacity: show ? 1 : 0,
        pointerEvents: show ? "auto" : "none",
        transform: show ? "translateY(0) scale(1)" : "translateY(20px) scale(0.8)",
      }}
    >
      <ArrowUp size={20} />
    </button>
  );
}