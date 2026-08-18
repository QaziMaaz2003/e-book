import { Link } from "react-router-dom";
import Button from "../components/Button.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import BookCard from "../components/BookCard.jsx";
import CategoryCard from "../components/CategoryCard.jsx";
import Newsletter from "../components/Newsletter.jsx";
import ShelfMarquee from "../components/ShelfMarquee.jsx";
import AuthorCard from "../components/AuthorCard.jsx";
import BlogCard from "../components/BlogCard.jsx";
import TestimonialCard from "../components/TestimonialCard.jsx";
import FAQAccordion from "../components/FAQAccordion.jsx";
import { books } from "../data/books.js";
import { categories } from "../data/categories.js";
import { authors } from "../data/authors.js";
import { posts } from "../data/blog.js";
import { testimonials } from "../data/testimonials.js";
import { faqs } from "../data/faqs.js";

const featured = [...books].sort((a, b) => b.rating - a.rating).slice(0, 8);
const spotlightAuthors = authors.slice(0, 8);
const latestPosts = posts.slice(0, 6);
const topTestimonials = testimonials.slice(0, 6);

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1526243741027-444d633d7365?auto=format&fit=crop&w=2400&q=90";

const whyItems = [
  { title: "Wide Selection", desc: "300 titles across 15 genres, from quiet literary fiction to fast-paced thrillers." },
  { title: "Instant Digital Access", desc: "No shipping, no waiting. Your book is ready the moment you check out." },
  { title: "Secure Checkout", desc: "A simple, protected purchase flow built around your privacy." },
  { title: "Curated Collection", desc: "Every title is chosen, not dumped — quality over sheer volume." },
  { title: "Affordable Pricing", desc: "Fair prices for readers, without subscription lock-in." },
  { title: "Easy Discovery", desc: "Search, browse by genre, or follow 'You May Also Like' trails." },
];

const steps = [
  { n: "01", title: "Browse or Search", desc: "Explore by genre, or use search to jump straight to a title or author." },
  { n: "02", title: "Pick Your Format", desc: "Every book ships as EPUB, PDF, and MOBI — pick what your device reads best." },
  { n: "03", title: "Secure Checkout", desc: "Pay with any major card through an encrypted, protected checkout flow." },
  { n: "04", title: "Start Reading", desc: "Your download link lands in your inbox instantly — no waiting, no shipping." },
];

const stats = [
  { value: "4.8/5", label: "Average Rating" },
  { value: "1,200+", label: "Verified Reviews" },
  { value: "18,000+", label: "Books Delivered" },
  { value: "96%", label: "Would Recommend" },
];

export default function Home() {
  return (
    <div id="top">
      {/* Hero — full-bleed atmospheric background image, faded and dark, with
          content set on top so it reads like a title page rather than a
          photo placed beside text. */}
      <section className="relative overflow-hidden border-b border-white/15 min-h-[640px] flex items-center">
        <img
          src={HERO_IMAGE}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover opacity-[0.28] grayscale blur-[1.5px] scale-105"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/75" />

        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-24 sm:py-32 relative w-full">
          <div className="reveal flex flex-col gap-6 max-w-2xl">
            <span className="eyebrow text-base sm:text-base tracking-[0.15em]">The Modern Digital Library</span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-medium leading-[1.05] text-white">
              Every book you'll
              <br /> want next, <span className="italic">already open.</span>
            </h1>
            <p className="text-white/70 text-lg sm:text-xl max-w-xl leading-relaxed">
              MyLibraryEra is where readers discover and buy ebooks worth staying up for — fiction, thrillers,
              romance, sci-fi, business, growth, and history, curated and delivered instantly.
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-2">
              <Button to="/categories" variant="primary" className="hover:!bg-accent hover:!text-white">Explore Books</Button>
              <Button to="/about" variant="outline">How It Works</Button>
            </div>
            <div className="flex items-center gap-8 mt-6 pt-6 border-t border-white/20">
              <div>
                <p className="font-display text-3xl text-white">300+</p>
                <p className="text-sm text-white/50 uppercase tracking-widest2 mt-1">Titles</p>
              </div>
              <div>
                <p className="font-display text-3xl text-white">15</p>
                <p className="text-sm text-white/50 uppercase tracking-widest2 mt-1">Genres</p>
              </div>
              <div>
                <p className="font-display text-3xl text-white">24/7</p>
                <p className="text-sm text-white/50 uppercase tracking-widest2 mt-1">Instant Access</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ShelfMarquee />

      {/* Featured Books */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-20 sm:py-24">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <SectionTitle eyebrow="Reader Favorites" title="Featured Books" />
          <Link to="/categories" className="text-base text-white hover:text-accent hover:underline decoration-accent/60 whitespace-nowrap transition-colors">
            View all categories →
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6">
          {featured.map((b) => (
            <BookCard key={b.id} book={b} />
          ))}
        </div>
      </section>

      {/* Browse Categories */}
      <section className="bg-black border-y border-white/15">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-20 sm:py-24">
          <SectionTitle
            eyebrow="Browse by Genre"
            title="Find your shelf"
            description="Fifteen curated categories, twenty handpicked titles each — built for the way readers actually browse."
            align="center"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {categories.map((c) => (
              <CategoryCard key={c.slug} category={c} />
            ))}
          </div>
        </div>
      </section>

      {/* Why MyLibraryEra */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-20 sm:py-24">
        <SectionTitle eyebrow="Why MyLibraryEra" title="Built for how you actually read" align="center" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {whyItems.map((w) => (
            <div
              key={w.title}
              className="reveal bg-black border border-white/15 rounded-sm p-7 hover:border-white/50 transition-colors"
            >
              <h3 className="font-display text-xl text-white">{w.title}</h3>
              <p className="text-white/55 text-base mt-2 leading-relaxed">{w.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-black border-y border-white/15">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-20 sm:py-24">
          <SectionTitle eyebrow="How It Works" title="From browse to bookshelf in four steps" align="center" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {steps.map((s) => (
              <div key={s.n} className="reveal flex flex-col gap-2 border-t border-white/25 pt-5">
                <span className="font-display text-3xl text-white/30">{s.n}</span>
                <h3 className="font-display text-lg text-white">{s.title}</h3>
                <p className="text-white/55 text-base leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust stats */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="text-center sm:text-left">
              <p className="font-display text-3xl sm:text-4xl text-white">{s.value}</p>
              <p className="text-sm text-white/50 uppercase tracking-widest2 mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Author Spotlight */}
      <section className="bg-black border-y border-white/15">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-20 sm:py-24">
          <SectionTitle
            eyebrow="Meet the Writers"
            title="Author Spotlight"
            description="A selection of the 75 writers on our shelf, with their books and categories represented across the full collection."
            align="center"
          />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mt-12">
            {spotlightAuthors.map((a) => (
              <AuthorCard key={a.slug} author={a} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-20 sm:py-24">
        <SectionTitle
          eyebrow="Reader Stories"
          title="What Readers Are Saying"
          description="Real feedback from readers who bought and finished books through MyLibraryEra."
          align="center"
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {topTestimonials.map((t) => (
            <TestimonialCard key={t.name} testimonial={t} />
          ))}
        </div>
      </section>

      {/* Blog / Journal */}
      <section className="bg-black border-y border-white/15">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-20 sm:py-24">
          <SectionTitle
            eyebrow="The Journal"
            title="Reading Life & Recommendations"
            description="Essays, author notes, and reading advice from the MyLibraryEra editorial team."
            align="center"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {latestPosts.map((p) => (
              <BlogCard key={p.slug} post={p} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-5 sm:px-8 py-20 sm:py-24">
        <SectionTitle
          eyebrow="Questions"
          title="Frequently Asked Questions"
          description="Everything you need to know about buying, downloading, and reading on MyLibraryEra."
          align="center"
        />
        <div className="flex flex-col gap-12 mt-12">
          {faqs.map((group) => (
            <div key={group.group}>
              <h3 className="font-display text-xl sm:text-2xl text-white mb-2">{group.group}</h3>
              <FAQAccordion items={group.items} />
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 pb-20 sm:pb-24">
        <div className="relative overflow-hidden rounded-sm border border-white/25 bg-black p-10 sm:p-16 text-center flex flex-col items-center gap-6">
          <span className="eyebrow relative">Your Next Chapter</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-white relative max-w-2xl">
            Find Your Next Great Read
          </h2>
          <p className="text-white/55 max-w-md relative">
            Three hundred titles, fifteen genres, one library that fits in your pocket.
          </p>
          <Button to="/categories" variant="primary" className="relative hover:!bg-accent hover:!text-white">
            Explore Books
          </Button>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 sm:px-8 pb-24">
        <Newsletter />
      </section>
    </div>
  );
}
