"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { cakes } from "@/data/cakes";

export default function BestSellers() {
  const bestSellers = cakes.filter((cake) => cake.isBestSeller).slice(0, 4);

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container-wide">
        <SectionHeading
          title="Our Best Sellers"
          subtitle="Handpicked favorites, loved by our customers again and again"
        />

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {bestSellers.map((cake, index) => (
            <motion.div
              key={cake.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              className="card-tilt group overflow-hidden rounded-lg bg-flour shadow-md"
            >
              <div className="relative aspect-square w-full overflow-hidden">
                <Image
                  src={cake.image}
                  alt={cake.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 280px"
                />
                <span className="absolute left-3 top-3 rounded-full bg-berry px-3 py-1 text-xs font-semibold text-flour">
                  Best Seller
                </span>
              </div>

              <div className="p-5">
                <h3 className="font-display text-lg font-semibold text-crust">
                  {cake.name}
                </h3>
                {cake.description && (
                  <p className="mt-1 text-sm text-cocoa/70 line-clamp-2">
                    {cake.description}
                  </p>
                )}
                <p className="mt-3 text-base font-semibold text-berry">
                  From Rs. {cake.price.toLocaleString()}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button href="/gallery" variant="secondary">
            View Full Menu
          </Button>
        </div>
      </div>
    </section>
  );
}