import { Link } from "react-router-dom";

export default function BookCard({ book }) {
  return (
    <Link
      to={`/books/${book.id}`}
      className="group card-lift flex flex-col bg-black border border-white/15 rounded-sm overflow-hidden hover:border-white/60 hover:shadow-card"
    >
      <div className="relative aspect-[2/3] overflow-hidden bg-black">
        <img
          src={book.image}
          alt={`Cover of ${book.title} by ${book.author}`}
          loading="lazy"
          className="img-mono w-full h-full object-cover group-hover:scale-105"
        />
        <span className="absolute top-3 left-3 bg-black/85 text-white text-sm tracking-widest2 uppercase px-2 py-1 rounded-sm border border-white/30">
          {book.category}
        </span>
      </div>
      <div className="flex flex-col gap-1.5 p-4 flex-1">
        <h3 className="font-display text-lg leading-snug text-white line-clamp-2 group-hover:text-white/80 transition-colors">
          {book.title}
        </h3>
        <p className="text-base text-white/55">{book.author}</p>
        <div className="flex items-center gap-1.5 mt-1 text-sm text-white/55">
          <span className="text-white">★</span>
          <span>{book.rating}</span>
          <span>· {book.reviews} reviews</span>
        </div>
        <div className="flex items-center justify-between mt-3 pt-3 border-t border-white/15">
          <span className="font-display text-lg text-white">${book.price.toFixed(2)}</span>
          <span className="text-sm uppercase tracking-widest2 text-white/70 group-hover:translate-x-0.5 group-hover:text-white transition-all">
            View →
          </span>
        </div>
      </div>
    </Link>
  );
}
