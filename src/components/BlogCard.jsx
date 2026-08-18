function formatDate(iso) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogCard({ post }) {
  return (
    <div className="flex flex-col bg-black border border-white/15 rounded-sm overflow-hidden">
      <div className="relative aspect-[16/9] overflow-hidden bg-black">
        <img
          src={post.cover}
          alt={post.title}
          loading="lazy"
          className="img-mono w-full h-full object-cover"
        />
        <span className="absolute top-3 left-3 bg-black/85 text-white text-sm tracking-widest2 uppercase px-2 py-1 rounded-sm border border-white/30">
          {post.category}
        </span>
      </div>
      <div className="flex flex-col gap-2 p-5 flex-1">
        <span className="text-sm text-accent">{formatDate(post.date)} · {post.author}</span>
        <h3 className="font-display text-xl leading-snug text-white">{post.title}</h3>
        <p className="text-base text-white/55 line-clamp-3">{post.excerpt}</p>
      </div>
    </div>
  );
}
