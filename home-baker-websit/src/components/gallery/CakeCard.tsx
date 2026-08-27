"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Cake } from "@/types";

interface CakeCardProps {
  cake: Cake;
  index?: number;
}

export default function CakeCard({ cake, index = 0 }: CakeCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, delay: (index % 4) * 0.08, ease: "easeOut" }}
      className="card-tilt group overflow-hidden rounded-lg bg-flour shadow-sm"
    >
      <div className="relative aspect-square w-full overflow-hidden">
        <Image
          src={cake.image}
          alt={cake.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 220px"
        />
        {cake.isBestSeller && (
          <span className="absolute left-2 top-2 rounded-full bg-berry px-2 py-0.5 text-[10px] font-semibold text-flour">
            Best Seller
          </span>
        )}
      </div>

      <div className="p-3">
        <h3 className="font-display text-sm font-semibold text-crust line-clamp-1">
          {cake.name}
        </h3>
        {cake.description && (
          <p className="mt-1 text-xs text-cocoa/70 line-clamp-2">
            {cake.description}
          </p>
        )}
        <p className="mt-2 text-sm font-semibold text-berry">
          Rs. {cake.price.toLocaleString()}
        </p>
      </div>
    </motion.div>
  );
}