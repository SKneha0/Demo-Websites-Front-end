"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { OrderFormData } from "@/types";
import { generateWhatsAppOrderLink } from "@/lib/whatsapp";

const initialFormData: OrderFormData = {
  customerName: "",
  phoneNumber: "",
  message: "",
};

export default function OrderForm() {
  const [formData, setFormData] = useState<OrderFormData>(initialFormData);
  const [errors, setErrors] = useState<Partial<Record<keyof OrderFormData, string>>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof OrderFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof OrderFormData, string>> = {};

    if (!formData.customerName.trim()) newErrors.customerName = "Please enter your name";
    if (!formData.phoneNumber.trim()) newErrors.phoneNumber = "Please enter your phone number";
    if (!formData.message.trim()) newErrors.message = "Please tell us what you'd like to order";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const whatsappUrl = generateWhatsAppOrderLink(formData);
    window.open(whatsappUrl, "_blank");
  };

  const inputStyles =
    "w-full rounded-sm border border-crust/15 bg-white px-4 py-3 text-sm text-crust placeholder:text-cocoa/40 focus:border-berry focus:outline-none";
  const labelStyles = "mb-1.5 block text-sm font-medium text-crust";
  const errorStyles = "mt-1 text-xs text-red-600";

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mx-auto max-w-xl space-y-5 rounded-lg bg-white p-6 shadow-md sm:p-8"
    >
      <div>
        <label htmlFor="customerName" className={labelStyles}>
          Your Name *
        </label>
        <input
          type="text"
          id="customerName"
          name="customerName"
          value={formData.customerName}
          onChange={handleChange}
          placeholder="e.g. Ayesha Khan"
          className={inputStyles}
        />
        {errors.customerName && <p className={errorStyles}>{errors.customerName}</p>}
      </div>

      <div>
        <label htmlFor="phoneNumber" className={labelStyles}>
          Phone Number *
        </label>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          placeholder="e.g. 0300 1234567"
          className={inputStyles}
        />
        {errors.phoneNumber && <p className={errorStyles}>{errors.phoneNumber}</p>}
      </div>

      <div>
        <label htmlFor="message" className={labelStyles}>
          What would you like to order? *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          placeholder="e.g. Birthday cake, chocolate flavor, 2 lbs, needed on 15th August"
          className={inputStyles}
        />
        {errors.message && <p className={errorStyles}>{errors.message}</p>}
      </div>

      <button type="submit" className="btn-whatsapp w-full">
        Send Order via WhatsApp
      </button>

      <p className="text-center text-xs text-cocoa/60">
        Clicking submit will open WhatsApp with your order details pre-filled.
      </p>
    </motion.form>
  );
}