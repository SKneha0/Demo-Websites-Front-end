"use client";
 
import { useEffect, useRef, useState } from "react";
import {
  Building,
  Home,
  Landmark,
  Store,
  Building2,
  Warehouse,
  Hotel,
  ParkingSquare,
} from "lucide-react";
 
const BRAND = "#0FBA81";
 
const types = [
  { icon: Building2, label: "Apartment" },
  { icon: Home, label: "Villa" },
  { icon: Landmark, label: "Home" },
  { icon: Building, label: "Office" },
  { icon: Warehouse, label: "Building" },
  { icon: Hotel, label: "Townhouse" },
  { icon: Store, label: "Shop" },
  { icon: ParkingSquare, label: "Garage" },
];
 
export default function PropertyTypes() {
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
      { threshold: 0.15 }
    );
 
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
 
  return (
    <section ref={sectionRef} className="py-16 bg-white relative overflow-hidden">

      <div className="text-center max-w-xl mx-auto mb-14">
          
          <h2 className="text-3xl md:text-4xl font-bold text-[#0E1B3D]">
            Property Types
          </h2>
          <p className="text-gray-500 mt-3">
            Hand-picked homes and apartments from our latest listings, ready
            for you to view.
          </p>
        </div>

      <div className="container mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {types.map(({ icon: Icon, label }, i) => (
            <div
              key={label}
              className="p-2 rounded-2xl"
              style={{
                backgroundColor: `${BRAND}0D`,
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(24px)",
                transition: `opacity 0.6s ease ${i * 0.08}s, transform 0.6s ease ${i * 0.08}s`,
              }}
            >
              <div
                className="group bg-white rounded-xl p-8 text-center border-2 border-dashed transition-all duration-500 hover:-translate-y-2 hover:shadow-xl cursor-pointer"
                style={{ borderColor: `${BRAND}55` }}
              >
                <span
                  className="w-24 h-24 mx-auto rounded-full border border-dashed flex items-center justify-center mb-5 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
                  style={{ borderColor: BRAND }}
                >
                  <Icon
                    size={34}
                    style={{ color: BRAND }}
                    strokeWidth={1.5}
                  />
                </span>
                <h3 className="text-[#0E1B3D] font-bold text-lg mb-1">
                  {label}
                </h3>
                <p className="text-sm font-medium" style={{ color: BRAND }}>
                  123 Properties
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}