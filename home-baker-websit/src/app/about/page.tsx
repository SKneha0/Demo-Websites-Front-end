import type { Metadata } from "next";
import Image from "next/image";
import PageBanner from "@/components/ui/PageBanner";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/data/siteConfig";
import { getGeneralWhatsAppLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn more about ${siteConfig.bakeryName} — our story, our passion for baking, and what makes our cakes special.`,
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      <PageBanner
        image="/images/banner/pages-banner.jpg"
        eyebrow="Our Story"
        title="About Us"
        subtitle="A little bakery built on big love for baking."
      />

      {/* Story Section */}
      <section className="py-16">
        <div className="container-wide grid items-center gap-12 md:grid-cols-2">
          <div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-lg shadow-md">
            <Image
              src="/images/cupcakes/cupcakes-4.jpg"
              alt={`Inside ${siteConfig.bakeryName}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 90vw, 480px"
            />
          </div>

          <div>
  <span className="eyebrow">Since Day One</span>
  <h2 className="mt-4 font-display text-3xl font-semibold text-crust sm:text-4xl">
    Baked with Love, Shared with Joy
  </h2>
  <p className="mt-5 text-cocoa">
    {siteConfig.bakeryName} started as a small home kitchen project,
    driven by a simple love for baking and a desire to bring a
    little sweetness into every celebration. What began with a
    handful of orders among friends and family has grown into a
    bakery trusted by customers across Karachi.
  </p>
  <p className="mt-4 text-cocoa">
    Every cake we make is baked fresh to order, using quality
    ingredients and a whole lot of care. Whether it's a birthday,
    wedding, or just because — we treat every order like it's for
    someone we love.
  </p>

  {/* Stats Row */}
  <div className="mt-8 grid grid-cols-3 gap-4 border-t border-crust/10 pt-6">
    <div>
      <p className="font-display text-2xl font-semibold text-berry sm:text-3xl">
        500+
      </p>
      <p className="mt-1 text-xs text-cocoa/70 sm:text-sm">
        Cakes Delivered
      </p>
    </div>
    <div>
      <p className="font-display text-2xl font-semibold text-berry sm:text-3xl">
        4.9★
      </p>
      <p className="mt-1 text-xs text-cocoa/70 sm:text-sm">
        Customer Rating
      </p>
    </div>
    <div>
      <p className="font-display text-2xl font-semibold text-berry sm:text-3xl">
        3+
      </p>
      <p className="mt-1 text-xs text-cocoa/70 sm:text-sm">
        Years Baking
      </p>
    </div>
  </div>
</div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-flour py-16">
        <div className="container-wide grid grid-cols-1 gap-8 text-center sm:grid-cols-3">
          <div>
            <h3 className="font-display text-lg font-semibold text-crust">
              🍰 Fresh, Always
            </h3>
            <p className="mt-2 text-sm text-cocoa/80">
              Every cake is baked to order — never pre-made, never frozen.
            </p>
          </div>
          <div>
            <h3 className="font-display text-lg font-semibold text-crust">
              🎨 Made Your Way
            </h3>
            <p className="mt-2 text-sm text-cocoa/80">
              From flavor to design, every detail is tailored to you.
            </p>
          </div>
          <div>
            <h3 className="font-display text-lg font-semibold text-crust">
              ❤️ Baked with Care
            </h3>
            <p className="mt-2 text-sm text-cocoa/80">
              Small-batch baking means every cake gets our full attention.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 text-center">
        <h2 className="font-display text-2xl font-semibold text-crust sm:text-3xl">
          Ready to order your next cake?
        </h2>
        <p className="mx-auto mt-3 max-w-md text-cocoa">
          Let's create something sweet together — reach out and let's talk
          about your next celebration.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <Button href="/order" variant="primary">
            Place an Order
          </Button>
          <Button href={getGeneralWhatsAppLink()} variant="whatsapp" target="_blank">
            Chat on WhatsApp
          </Button>
        </div>
      </section>
    </div>
  );
}