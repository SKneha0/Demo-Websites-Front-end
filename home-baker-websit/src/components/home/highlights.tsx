"use client";

import { motion } from "framer-motion";
import { FaLeaf, FaPalette, FaTruck, FaHeart } from "react-icons/fa";

const highlights = [
  {
    icon: FaLeaf,
    title: "Fresh Ingredients",
    description: "Only the finest, freshest ingredients go into every bake.",
  },
  {
    icon: FaPalette,
    title: "Custom Designs",
    description: "Tell us your vision — we'll bring it to life on a cake.",
  },
  {
    icon: FaTruck,
    title: "On-Time Delivery",
    description: "Reliable delivery across Karachi, right when you need it.",
  },
  {
    icon: FaHeart,
    title: "Made with Love",
    description: "Every cake is baked by hand with genuine care and pride.",
  },
];

export default function Highlights() {
  return (
    <section className="bg-berry/5 py-16 md:py-20">
      <div className="container-wide">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                className="flex flex-col items-center text-center"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-berry/10 text-berry">
                  <Icon size={26} />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-crust">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-cocoa/70">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}