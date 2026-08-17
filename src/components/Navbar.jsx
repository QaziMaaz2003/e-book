import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import SearchBar from "./SearchBar.jsx";
import Button from "./Button.jsx";

const links = [
  { to: "/", label: "Home" },
  { to: "/categories", label: "Categories" },
  { to: "/about", label: "About Us" },
  { to: "/contact", label: "Contact Us" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setSearchOpen(false);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b
        transition-all duration-700 ease-in-out
        ${
          scrolled
            ? "bg-white/95 border-black/10 shadow-sm backdrop-blur-md"
            : "bg-black/20 border-white/10 backdrop-blur-sm"
        }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        <div className="h-16 sm:h-20 flex items-center justify-between gap-6">

          {/* Logo */}
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className={`shrink-0 font-display text-xl sm:text-2xl tracking-wide
              transition-all duration-700 ${
                scrolled ? "text-black" : "text-white"
              }`}
          >
            MyLibrary<span className="italic">Era</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                className={({ isActive }) =>
                  `text-base tracking-wide transition-all duration-700 ${
                    scrolled
                      ? isActive
                        ? "text-black"
                        : "text-black/55 hover:text-black"
                      : isActive
                        ? "text-white"
                        : "text-white/65 hover:text-white"
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          {/* Search + Explore */}
          <div className="hidden lg:flex items-center gap-5 w-full max-w-sm">

            <SearchBar scrolled={scrolled} />
<Button
  to="/categories"
  variant="outline"
  className={`whitespace-nowrap min-w-[145px] px-6 py-3 text-sm sm:text-base transition-all duration-700 ${
    scrolled
      ? "!bg-transparent !text-black !border-black/20 hover:!bg-black/[0.03]"
      : "!bg-transparent !text-white !border-white/30 hover:!bg-white/[0.05]"
  }`}
>
  Explore Books
</Button>

          </div>

          {/* Mobile */}
          <div className="flex lg:hidden items-center gap-4">

            <button
              aria-label="Toggle search"
              onClick={() => setSearchOpen((s) => !s)}
              className={`p-2 transition-all duration-700 ${
                scrolled ? "text-black" : "text-white"
              }`}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <circle
                  cx="11"
                  cy="11"
                  r="7"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M21 21l-4.3-4.3"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            <button
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((m) => !m)}
              className={`p-2 transition-all duration-700 ${
                scrolled ? "text-black" : "text-white"
              }`}
            >
              {menuOpen ? (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M6 6l12 12M18 6L6 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              ) : (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M3 6h18M3 12h18M3 18h18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              )}
            </button>

          </div>
        </div>

        {/* Mobile Search */}
        {searchOpen && (
          <div className="lg:hidden pb-4">
            <SearchBar
              scrolled={scrolled}
              onNavigate={() => setSearchOpen(false)}
            />
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } ${
          scrolled
            ? "bg-white border-t border-black/10"
            : "bg-black/90 border-t border-white/10"
        }`}
      >
        <nav className="flex flex-col px-5 sm:px-8 py-4 gap-1">

          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `py-3 text-base border-b last:border-b-0 transition-colors ${
                  scrolled
                    ? `border-black/10 ${
                        isActive ? "text-black" : "text-black/60"
                      }`
                    : `border-white/10 ${
                        isActive ? "text-white" : "text-white/70"
                      }`
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}

          <Button
            to="/categories"
            variant="primary"
            className="mt-4 w-full"
            onClick={() => setMenuOpen(false)}
          >
            Explore Books
          </Button>

        </nav>
      </div>
    </header>
  );
}