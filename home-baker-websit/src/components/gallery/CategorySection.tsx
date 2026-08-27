"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import CakeCard from "@/components/gallery/CakeCard";
import { Cake } from "@/types";

interface CategorySectionProps {
  id: string;
  title: string;
  subtitle: string;
  cakes: Cake[];
  bgClass?: string;
}

const INITIAL_COUNT = 4;

export default function CategorySection({
  id,
  title,
  subtitle,
  cakes,
  bgClass = "bg-white",
}: CategorySectionProps) {
  const [expanded, setExpanded] = useState(false);

  const visibleCakes = expanded ? cakes : cakes.slice(0, INITIAL_COUNT);
  const hasMore = cakes.length > INITIAL_COUNT;

  return (
    <section id={id} className={`scroll-mt-32 py-16 ${bgClass}`}>
      <div className="container-wide">
        <SectionHeading title={title} subtitle={subtitle} />

        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
          <AnimatePresence initial={false}>
            {visibleCakes.map((cake, index) => (
              <CakeCard key={cake.id} cake={cake} index={index} />
            ))}
          </AnimatePresence>
        </div>

        {hasMore && (
          <div className="mt-8 text-center">
            <button onClick={() => setExpanded(!expanded)} className="btn-secondary">
              {expanded ? "Show Less" : `See More ${title}`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}