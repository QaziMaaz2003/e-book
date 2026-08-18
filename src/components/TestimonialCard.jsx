export default function TestimonialCard({ testimonial }) {
  return (
    <div className="reveal flex flex-col gap-4 bg-black border border-white/15 rounded-sm p-7 hover:border-white/40 transition-colors">
      <div className="flex items-center gap-1 text-white">
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} className={i < testimonial.rating ? "text-accent" : "text-white/20"}>★</span>
        ))}
      </div>
      <p className="text-white/70 text-base leading-relaxed">“{testimonial.text}”</p>
      <div className="mt-2 pt-4 border-t border-white/15 flex flex-col gap-0.5">
        <span className="font-display text-lg text-white">{testimonial.name}</span>
        <span className="text-sm text-white/45">{testimonial.role} · purchased {testimonial.book}</span>
      </div>
    </div>
  );
}
