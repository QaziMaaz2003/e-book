import SectionTitle from "../components/SectionTitle.jsx";
import CategoryCard from "../components/CategoryCard.jsx";
import { categories } from "../data/categories.js";

export default function Categories() {
  return (
    <div>
      <section className="border-b border-white/15 bg-black">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-24 sm:pt-32 pb-16 sm:pb-20">
          <SectionTitle
            eyebrow="All Categories"
            title="Fifteen genres, three hundred stories"
            description="Fifteen curated shelves, twenty titles each — browse a 300-book collection built for modern digital readers."
          />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-16 sm:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((c) => (
            <CategoryCard key={c.slug} category={c} />
          ))}
        </div>
      </section>
    </div>
  );
}