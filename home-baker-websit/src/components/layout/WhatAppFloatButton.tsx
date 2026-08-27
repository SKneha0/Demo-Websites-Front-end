"use client";

import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import { getGeneralWhatsAppLink } from "@/lib/whatsapp";

export default function WhatsAppFloatButton() {
  return (
    <motion.a
      href={getGeneralWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Order on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.4, ease: "easeOut" }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <FaWhatsapp size={28} />
    </motion.a>
  );
}