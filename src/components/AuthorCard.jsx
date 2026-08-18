export default function AuthorCard({ author }) {
  return (
    <div className="flex flex-col items-center text-center gap-3 bg-black border border-white/15 rounded-sm p-6">
      <div className="relative w-20 h-20 rounded-full overflow-hidden border border-white/25">
        <img
          src={author.avatar}
          alt={author.name}
          loading="lazy"
          className="img-mono w-full h-full object-cover"
        />
      </div>
      <h3 className="font-display text-lg text-white">{author.name}</h3>
      <span className="text-sm uppercase tracking-widest2 text-accent">
        {author.bookCount} {author.bookCount === 1 ? "Book" : "Books"}
      </span>
      <div className="flex flex-wrap justify-center gap-1.5">
        {author.categories.map((category) => (
          <span
            key={category}
            className="text-xs border border-white/15 px-2 py-1 text-white/50 rounded-sm"
          >
            {category}
          </span>
        ))}
      </div>
      <p className="text-sm text-white/55 line-clamp-3">{author.bio}</p>
      <div className="w-full pt-3 mt-1 border-t border-white/10 text-left">
        <p className="text-[11px] uppercase tracking-widest2 text-white/35 mb-1">Their Books</p>
        <p className="text-xs leading-relaxed text-white/55 line-clamp-2">
          {author.books.join(" · ")}
        </p>
      </div>
    </div>
  );
}
