import { useState, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import Button from "../components/Button.jsx";
import BookCard from "../components/BookCard.jsx";
import PurchaseForm from "../components/PurchaseForm.jsx";
import { books } from "../data/books.js";

export default function BookDetails() {
  const { id } = useParams();
  const [showForm, setShowForm] = useState(false);
  const book = books.find((b) => String(b.id) === id);

  const related = useMemo(() => {
    if (!book) return [];
    return books
      .filter((b) => b.categorySlug === book.categorySlug && b.id !== book.id)
      .slice(0, 4);
  }, [book]);

  if (!book) {
    return (
      <div className="max-w-3xl mx-auto px-5 sm:px-8 py-24 text-center">
        <h1 className="font-display text-3xl text-white">Book not found</h1>
        <p className="text-white/55 mt-3">
          This title may have moved.{" "}
          <Link to="/categories" className="text-white hover:text-accent hover:underline decoration-accent/60">
            Browse all categories
          </Link>
          .
        </p>
      </div>
    );
  }

  return (
    <div>
      <section className="max-w-7xl mx-auto px-5 sm:px-8 pt-28 sm:pt-32">
        <nav className="text-sm text-white/45 mb-8">
          <Link to="/" className="hover:text-accent hover:underline decoration-accent/60 transition-colors">MyLibraryEra</Link>
          <span className="mx-2">/</span>
          <Link to={`/categories/${book.categorySlug}`} className="hover:text-accent hover:underline decoration-accent/60 transition-colors">{book.category}</Link>
          <span className="mx-2">/</span>
          <span className="text-white/75">{book.title}</span>
        </nav>
      </section>

      <section className="max-w-7xl mx-auto px-5 sm:px-8 pb-16 sm:pb-20 grid lg:grid-cols-[380px_1fr] gap-12">
        <div className="reveal">
          <img
            src={book.image}
            alt={`Cover of ${book.title} by ${book.author}`}
            className="img-mono w-full rounded-sm border border-white/20 shadow-card object-cover aspect-[2/3]"
          />
        </div>

        <div className="reveal flex flex-col gap-6" style={{ animationDelay: "0.08s" }}>
          <div>
            <span className="eyebrow">{book.category}</span>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl text-white mt-3 leading-tight">
              {book.title}
            </h1>
            <p className="text-white/60 text-lg mt-2">by {book.author}</p>
          </div>

          <div className="flex items-center gap-4 text-base text-white/80">
            <span className="flex items-center gap-1">
              <span className="text-accent">★★★★★</span>
              <span className="ml-1">{book.rating}</span>
            </span>
            <span className="text-white/40">·</span>
            <span className="text-white/55">{book.reviews} reviews</span>
          </div>

          <p className="text-white/80 leading-relaxed max-w-2xl">{book.description}</p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-6 border-y border-white/15 max-w-xl">
            <div>
              <p className="text-sm uppercase tracking-widest2 text-white/45">Pages</p>
              <p className="text-white mt-1">{book.pages}</p>
            </div>
            <div>
              <p className="text-sm uppercase tracking-widest2 text-white/45">Published</p>
              <p className="text-white mt-1">{book.year}</p>
            </div>
            <div>
              <p className="text-sm uppercase tracking-widest2 text-white/45">Publisher</p>
              <p className="text-white mt-1">{book.publisher}</p>
            </div>
            <div>
              <p className="text-sm uppercase tracking-widest2 text-white/45">Format</p>
              <p className="text-white mt-1">{book.format}</p>
            </div>
          </div>

          <div className="flex items-center gap-6 mt-2">
            <span className="font-display text-4xl text-accent">${book.price.toFixed(2)}</span>
            <Button variant="primary" onClick={() => setShowForm(true)}>
              Buy Now
            </Button>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="bg-black border-t border-white/15">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16 sm:py-20">
            <span className="eyebrow">Same Shelf</span>
            <h2 className="font-display text-2xl sm:text-3xl text-white mt-3 mb-10">You May Also Like</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 sm:gap-6">
              {related.map((b) => (
                <BookCard key={b.id} book={b} />
              ))}
            </div>
          </div>
        </section>
      )}

      {showForm && <PurchaseForm book={book} onClose={() => setShowForm(false)} />}
    </div>
  );
}