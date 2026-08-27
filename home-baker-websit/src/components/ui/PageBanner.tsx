import Image from "next/image";

interface PageBannerProps {
  image: string;
  eyebrow: string;
  title: string;
  subtitle: string;
}

export default function PageBanner({ image, eyebrow, title, subtitle }: PageBannerProps) {
  return (
    <div className="relative flex h-[45vh] min-h-[320px] items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src={image}
        alt={title}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      {/* Dark gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60" />

      {/* Text Content */}
      <div className="relative z-10 mx-auto max-w-2xl px-4 text-center">
        <span className="inline-flex items-center gap-2 text-xs sm:text-sm uppercase tracking-[0.25em] text-white font-semibold drop-shadow-md">
          {eyebrow}
        </span>
        <h1 className="mt-3 font-display text-4xl font-semibold text-white drop-shadow-lg sm:text-5xl md:text-6xl">
          {title}
        </h1>
        <p className="mx-auto mt-4 max-w-lg text-sm text-white/90 drop-shadow-md sm:text-base">
          {subtitle}
        </p>
      </div>
    </div>
  );
}