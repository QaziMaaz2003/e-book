import { useState, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import BookCard from "../components/BookCard.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import { categories } from "../data/categories.js";
import { books } from "../data/books.js";

export default function CategoryBooks() {
  const { slug } = useParams();
  const category = categories.find((c) => c.slug === slug);
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("popular");

  const categoryBooks = useMemo(() => books.filter((b) => b.categorySlug === slug), [slug]);

  const filtered = useMemo(() => {
    let list = categoryBooks.filter((b) => {
      const q = query.toLowerCase();
      return b.title.toLowerCase().includes(q) || b.author.toLowerCase().includes(q);
    });
    if (sort === "price-asc") list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "price-desc") list = [...list].sort((a, b) => b.price - a.price);
    if (sort === "rating") list = [...list].sort((a, b) => b.rating - a.rating);
    if (sort === "popular") list = [...list].sort((a, b) => b.reviews - a.reviews);
    return list;
  }, [categoryBooks, query, sort]);

  if (!category) {
    return (
      <div className="max-w-3xl mx-auto px-5 sm:px-8 py-24 text-center">
        <h1 className="font-display text-3xl text-white">Category not found</h1>
        <p className="text-white/55 mt-3">
          That shelf doesn't exist yet.{" "}
          <Link to="/categories" className="text-white hover:underline">
            Browse all categories
          </Link>
          .
        </p>
      </div>
    );
  }

  return (
    <div>
      <section className="border-b border-white/15 bg-black">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16 sm:py-20">
          <nav className="text-sm text-white/45 mb-6">
            <Link to="/" className="hover:text-white">MyLibraryEra</Link>
            <span className="mx-2">/</span>
            <Link to="/categories" className="hover:text-white">Categories</Link>
            <span className="mx-2">/</span>
            <span className="text-white/75">{category.name}</span>
          </nav>
          <SectionTitle eyebrow={`${category.bookCount} Books`} title={category.name} description={category.desc} />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-16 sm:py-20">
        <div className="flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between mb-10">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={`Search within ${category.name}`}
            className="w-full sm:max-w-xs bg-black border border-white/20 rounded-sm px-4 py-2.5 text-base text-white placeholder:text-white/40 outline-none focus:border-white"
          />
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="bg-black border border-white/20 rounded-sm px-4 py-2.5 text-base text-white outline-none focus:border-white"
          >
            <option value="popular">Sort: Most Popular</option>
            <option value="rating">Sort: Highest Rated</option>
            <option value="price-asc">Sort: Price (Low to High)</option>
            <option value="price-desc">Sort: Price (High to Low)</option>
          </select>
        </div>

        {filtered.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6">
            {filtered.map((b) => (
              <BookCard key={b.id} book={b} />
            ))}
          </div>
        ) : (
          <p className="text-white/55 text-center py-20">No books match your search in this category.</p>
        )}
      </section>
    </div>
  );
}
