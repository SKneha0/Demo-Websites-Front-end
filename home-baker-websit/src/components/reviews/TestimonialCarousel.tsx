"use client";

import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { reviews } from "@/data/reviews";
import SectionHeading from "@/components/ui/SectionHeading";

export default function TestimonialCarousel() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container-wide">
        <SectionHeading
          title="What Our Customers Say"
          subtitle="Real feedback from real celebrations"
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              className="rounded-lg bg-flour p-6 shadow-sm"
            >
              {/* Stars */}
              <div className="flex gap-1 text-caramel">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FaStar
                    key={i}
                    size={14}
                    className={i < review.rating ? "text-caramel" : "text-crust/15"}
                  />
                ))}
              </div>

              {/* Comment */}
              <p className="mt-4 text-sm text-cocoa">&ldquo;{review.comment}&rdquo;</p>

              {/* Customer Name */}
              <div className="mt-5 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-berry/10 text-sm font-semibold text-berry">
                  {review.customerName.charAt(0)}
                </div>
                <p className="text-sm font-semibold text-crust">
                  {review.customerName}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}