import { Link } from "react-router-dom";

export default function CategoryCard({ category }) {
  return (
    <Link
      to={`/categories/${category.slug}`}
      className="group card-lift relative flex flex-col justify-end h-72 sm:h-80 rounded-sm overflow-hidden border border-white/15 hover:border-white/60"
    >
      <img
        src={category.image}
        alt={category.name}
        loading="lazy"
        className="img-mono absolute inset-0 w-full h-full object-cover group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/20" />
      <div className="relative p-6 flex flex-col gap-2">
        <span className="text-sm uppercase tracking-widest2 text-white/70">{category.bookCount} Books</span>
        <h3 className="font-display text-2xl text-white">{category.name}</h3>
        <p className="text-base text-white/60 line-clamp-2">{category.desc}</p>
        <span className="mt-2 text-sm uppercase tracking-widest2 text-white inline-flex items-center gap-2 group-hover:gap-3 transition-all">
          Explore Category →
        </span>
      </div>
    </Link>
  );
}
