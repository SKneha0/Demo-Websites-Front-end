import type { Metadata } from "next";
import { cakes } from "@/data/cakes";
import { siteConfig } from "@/data/siteConfig";
import CategorySection from "@/components/gallery/CategorySection";
import type { CakeCategory } from "@/types";
import PageBanner from "@/components/ui/PageBanner";

export const metadata: Metadata = {
  title: "Cake Gallery",
  description: `Browse all cakes from ${siteConfig.bakeryName} — birthday, wedding, velvet, cupcakes, trending & custom designs.`,
};

const categorySections: { key: CakeCategory; title: string; subtitle: string }[] = [
  {
    key: "birthday",
    title: "Birthday Cakes",
    subtitle: "Fun, colorful designs to celebrate another year",
  },
  {
    key: "wedding",
    title: "Wedding Cakes",
    subtitle: "Elegant tiered cakes for your special day",
  },
  {
    key: "velvet",
    title: "Velvet Cakes",
    subtitle: "Soft, rich velvet cakes in every shade",
  },
  {
    key: "cupcakes",
    title: "Cupcakes",
    subtitle: "Perfectly portioned treats for any occasion",
  },
  {
    key: "trending",
    title: "Trending Cakes",
    subtitle: "This season's most-loved designs",
  },
  {
    key: "custom",
    title: "Custom Cakes",
    subtitle: "Fully personalized cakes, designed around your vision",
  },
];

export default function GalleryPage() {
  return (
    <div className="bg-white">
      {/* Page Header */}
        <PageBanner
              image="/images/banner/pages-banner.jpg"
              eyebrow="Our Cakes"
              title="Cake Gallery"
              subtitle="Explore our full range of handcrafted cakes brand new designs — every one baked fresh and made to order."
               />

      {/* Quick Category Nav */}
      <nav className="sticky top-[72px] z-30 border-b border-crust/10 bg-white/95 backdrop-blur-sm">
        <div className="container-wide flex flex-wrap justify-center gap-4 py-4 sm:gap-6">
          {categorySections.map((section) => (
            <a
              key={section.key}
              href={`#${section.key}`}
              className="text-sm font-medium text-cocoa transition-colors hover:text-berry"
            >
              {section.title}
            </a>
          ))}
        </div>
      </nav>

      {/* Category Sections */}
      {categorySections.map((section, sectionIndex) => {
        const sectionCakes = cakes.filter((cake) => cake.category === section.key);

        if (sectionCakes.length === 0) return null;

        return (
          <CategorySection
            key={section.key}
            id={section.key}
            title={section.title}
            subtitle={section.subtitle}
            cakes={sectionCakes}
            bgClass={sectionIndex % 2 === 1 ? "bg-flour" : "bg-white"}
          />
        );
      })}
    </div>
  );
}