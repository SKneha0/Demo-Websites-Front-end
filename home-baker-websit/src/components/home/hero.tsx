"use client";
import { cakes } from "@/data/cakes";
import Image from "next/image";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/data/siteConfig";
import { getGeneralWhatsAppLink } from "@/lib/whatsapp";

export default function Hero() {
  const heroCake = cakes.find((cake) => cake.isBestSeller) || cakes[0];
  return (
    <section className="relative overflow-hidden bg-flour">
      <div className="container-wide grid items-center gap-12 py-16 md:grid-cols-2 md:py-24">
        {/* Left: Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="eyebrow">Homemade &bull; Fresh &bull; Made with Love</span>

          <h1 className="mt-4 text-4xl font-display font-semibold leading-tight text-crust sm:text-5xl md:text-6xl">
            {siteConfig.bakeryName}
          </h1>

          <p className="mt-5 max-w-md text-base text-cocoa sm:text-lg">
            {siteConfig.tagline}. Custom cakes, cupcakes &amp; more — baked
            fresh in Karachi, delivered with care.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button href="/gallery" variant="primary">
              View Our Cakes
            </Button>
            <Button
              href={getGeneralWhatsAppLink()}
              variant="whatsapp"
              target="_blank"
            >
              Order on WhatsApp
            </Button>
          </div>

          {/* Trust badges */}
          <div className="mt-10 flex flex-wrap gap-6 text-sm text-cocoa/70">
            <span>🎂 100+ Cakes Delivered</span>
            <span>⭐ 4.9/5 Customer Rating</span>
            <span>🚚 Karachi-wide Delivery</span>
          </div>
        </motion.div>

        {/* Right: Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="relative mx-auto aspect-square w-full max-w-md"
        >
          <div className="absolute inset-0 -z-10 translate-x-4 translate-y-4 rounded-full bg-berry/10" />
          <div className="relative h-full w-full overflow-hidden rounded-full border-8 border-white shadow-xl">
            <Image
              src={heroCake.image}
              alt={heroCake.name}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 90vw, 500px"
            />
          </div>
        </motion.div>
      </div>

      {/* Bottom scalloped edge (bakery/pastry feel) */}
      <div className="scallop-bottom h-0" style={{ ["--scallop-color" as string]: "#FBF6EE" }} />
    </section>
  );
}