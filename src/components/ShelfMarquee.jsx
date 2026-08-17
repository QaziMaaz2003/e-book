import { books } from "../data/books.js";

// Signature element: a scrolling "shelf" of book titles + authors, echoing
// how a real library shelf reads left to right — an endless row of spines.
export default function ShelfMarquee() {
  const picks = books.filter((_, i) => i % 7 === 0).slice(0, 14);
  const loop = [...picks, ...picks];

  return (
    <div className="relative overflow-hidden border-y border-white/15 bg-black py-4">
      <div className="flex w-max animate-shelf">
        {loop.map((b, i) => (
          <div
            key={`${b.id}-${i}`}
            className="flex items-center gap-3 px-8 shrink-0 border-r border-white/15"
          >
            <span className="font-display text-white text-lg whitespace-nowrap">{b.title}</span>
            <span className="text-white/50 text-sm uppercase tracking-widest2 whitespace-nowrap">{b.author}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
