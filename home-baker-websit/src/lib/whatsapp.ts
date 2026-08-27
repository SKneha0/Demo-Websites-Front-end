import { OrderFormData } from "@/types";
import { siteConfig } from "@/data/siteConfig";

/**
 * Converts order form data into a formatted WhatsApp message
 * and returns a ready-to-use WhatsApp link.
 */
export function generateWhatsAppOrderLink(data: OrderFormData): string {
  const message = `
Hello! I'd like to place a cake order 🎂

*Name:* ${data.customerName}
*Phone:* ${data.phoneNumber}

*Order Details:*
${data.message}
  `.trim();
  

  const encodedMessage = encodeURIComponent(message);

  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodedMessage}`;
}

/**
 * Simple WhatsApp link without form data
 * (used for general "Order Now" / floating button)
 */
export function getGeneralWhatsAppLink(customMessage?: string): string {
  const defaultMessage = "Hello! I'd like to know more about your cakes.";
  const message = customMessage || defaultMessage;
  const encodedMessage = encodeURIComponent(message);

  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodedMessage}`;
}