import type { Metadata } from "next";
import PageBanner from "@/components/ui/PageBanner";
import OrderForm from "@/components/order/orderFrom";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Place Your Order",
  description: `Order a custom cake from ${siteConfig.bakeryName} — fill in your details and we'll confirm on WhatsApp.`,
};

export default function OrderPage() {
  return (
    <div className="bg-flour">
      <PageBanner
       image="/images/banner/pages-banner.jpg"
        eyebrow="Order Now"
        title="Place Your Order"
        subtitle="Fill in your cake details below and we'll confirm everything with you on WhatsApp."
      />

      <div className="py-16">
        <OrderForm />
      </div>
    </div>
  );
}