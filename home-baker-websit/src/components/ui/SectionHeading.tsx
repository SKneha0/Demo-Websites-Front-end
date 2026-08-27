interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  title,
  subtitle,
  align = "center",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`mb-10 max-w-2xl ${alignment}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-gray-500 text-base md:text-lg">{subtitle}</p>
      )}
    </div>
  );
}