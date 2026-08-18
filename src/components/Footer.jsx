import { Link } from "react-router-dom";
import { categories } from "../data/categories.js";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-black border-t border-white/10 mt-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="lg:col-span-1">
          <Link to="/" className="font-display text-2xl text-white">
            MyLibrary<span className="italic">Era</span>
          </Link>
          <p className="text-white/50 text-base leading-relaxed mt-4 max-w-xs">
            A modern digital library where readers discover, buy, and start reading great ebooks in minutes.
          </p>

        </div>

        <div>
          <h3 className="eyebrow mb-5">Quick Links</h3>
          <ul className="flex flex-col gap-3 text-base text-white/70">
            <li><Link to="/" className="hover:text-accent hover:underline decoration-accent/60 transition-colors">Home</Link></li>
            <li><Link to="/categories" className="hover:text-accent hover:underline decoration-accent/60 transition-colors">Categories</Link></li>
            <li><Link to="/about" className="hover:text-accent hover:underline decoration-accent/60 transition-colors">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-accent hover:underline decoration-accent/60 transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="eyebrow mb-5">Categories</h3>
          <ul className="flex flex-col gap-3 text-base text-white/70">
            {categories.slice(0, 5).map((c) => (
              <li key={c.slug}>
                <Link to={`/categories/${c.slug}`} className="hover:text-accent hover:underline decoration-accent/60 transition-colors">
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="eyebrow mb-5">Contact</h3>
          <ul className="flex flex-col gap-3 text-base text-white/70">
            <li>500 W Madison St, Chicago, IL 60661</li>
            <li>
              <a href="tel:+13125550172" className="hover:text-accent hover:underline decoration-accent/60 transition-colors">(312) 555-0172</a>
            </li>
            <li>
              <a href="mailto:hello@mylibraryera.com" className="hover:text-accent hover:underline decoration-accent/60 transition-colors">
                hello@mylibraryera.com
              </a>
            </li>
            <li className="text-white/50">Mon–Fri, 9:00 AM – 6:00 PM CT</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-white/40">
          <span>© {year} MyLibraryEra. All rights reserved.</span>
          <span>Chicago, Illinois · Built for readers everywhere</span>
        </div>
      </div>
    </footer>
  );
}
