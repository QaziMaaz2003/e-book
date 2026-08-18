import SectionTitle from "../components/SectionTitle.jsx";
import Button from "../components/Button.jsx";

const stats = [
  { value: "300+", label: "Titles" },
  { value: "15", label: "Genres" },
  { value: "18,000+", label: "Books Delivered" },
  { value: "2019", label: "Founded" },
];

const values = [
  {
    title: "Curated, Not Dumped",
    desc: "Every book is chosen by hand. We'd rather have three hundred titles we can stand behind than thirty thousand we can't.",
  },
  {
    title: "Instant, Always",
    desc: "No shipping, no waiting. Your book is ready to read the moment checkout completes.",
  },
  {
    title: "Fair to Readers",
    desc: "Simple per-book pricing with no subscription lock-in — you pay for what you actually want to read.",
  },
  {
    title: "Built by Readers",
    desc: "Our small editorial team reads everything on the shelf before it goes live. If we wouldn't recommend it to a friend, it doesn't make the cut.",
  },
];

export default function About() {
  return (
    <div>
      <section className="border-b border-white/15 bg-black">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-24 sm:pt-32 pb-16 sm:pb-20">
          <SectionTitle
            eyebrow="Our Story"
            title="A smaller library, chosen on purpose"
            description="MyLibraryEra started in 2019 as a simple idea: a digital bookstore small enough to actually browse, where every title has been read and vetted before it's listed."
          />

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-14 max-w-3xl">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-display text-3xl sm:text-4xl text-white">{s.value}</p>
                <p className="text-sm text-white/50 uppercase tracking-widest2 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-5 sm:px-8 py-16 sm:py-20 flex flex-col gap-6">
        <h2 className="font-display text-2xl sm:text-3xl text-white">Why we built this</h2>
        <p className="text-white/65 text-lg leading-relaxed">
          Most digital bookstores compete on volume — millions of titles, endless scrolling, and
          recommendation engines that mostly repeat what you already bought. We wanted the opposite:
          a shelf small enough that browsing it feels like walking into a good independent bookstore,
          not searching a warehouse.
        </p>
        <p className="text-white/65 text-lg leading-relaxed">
          That means every title on MyLibraryEra — across fiction, thrillers, romance, sci-fi, business,
          self-help, and history — has been read and evaluated by our editorial team before it's added.
          Some well-known bestsellers don't make the cut. Some quieter, lesser-known titles do.
        </p>
        <p className="text-white/65 text-lg leading-relaxed">
          Reading should feel effortless from the moment you decide you want a book to the moment you
          open it. That's the whole product: a curated shelf, an honest price, and instant access —
          nothing else in the way.
        </p>
      </section>

      <section className="bg-black border-y border-white/15">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16 sm:py-20">
          <SectionTitle eyebrow="What We Stand For" title="How we choose what goes on the shelf" align="center" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {values.map((v) => (
              <div
                key={v.title}
                className="reveal bg-black border border-white/15 rounded-sm p-7 hover:border-white/50 transition-colors"
              >
                <h3 className="font-display text-xl text-white">{v.title}</h3>
                <p className="text-white/55 text-base mt-2 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-20 sm:py-24">
        <div className="relative overflow-hidden rounded-sm border border-white/25 bg-black p-10 sm:p-16 text-center flex flex-col items-center gap-6">
          <span className="eyebrow relative">Come Browse</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-white relative max-w-2xl">
            See the shelf for yourself
          </h2>
          <p className="text-white/55 max-w-md relative">
            Fifteen genres, three hundred titles, all chosen the same way — read first, listed second.
          </p>
          <Button to="/categories" variant="primary" className="relative hover:!bg-accent hover:!text-white">
            Explore Books
          </Button>
        </div>
      </section>
    </div>
  );
}
