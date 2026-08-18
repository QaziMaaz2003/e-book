export default function SectionTitle({ eyebrow, title, description, align = "left" }) {
  const alignment = align === "center" ? "items-center text-center mx-auto" : "items-start text-left";
  return (
    <div className={`flex flex-col gap-4 max-w-2xl ${alignment}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-medium leading-[1.1] text-white">
        {title}
      </h2>
      {description && (
        <p className="text-white/60 text-base sm:text-lg leading-relaxed">{description}</p>
      )}
    </div>
  );
}
