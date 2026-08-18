import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { books } from "../data/books.js";

export default function SearchBar({
  variant = "navbar",
  onNavigate,
  scrolled = false,
}) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);

  const wrapRef = useRef(null);
  const navigate = useNavigate();

  const results =
    query.trim().length > 0
      ? books
          .filter((b) => {
            const q = query.toLowerCase();

            return (
              b.title.toLowerCase().includes(q) ||
              b.author.toLowerCase().includes(q) ||
              b.category.toLowerCase().includes(q)
            );
          })
          .slice(0, 6)
      : [];

  useEffect(() => {
    function handleClick(e) {
      if (
        wrapRef.current &&
        !wrapRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClick);

    return () =>
      document.removeEventListener("mousedown", handleClick);
  }, []);

  function goToBook(id) {
    setQuery("");
    setOpen(false);

    if (onNavigate) {
      onNavigate();
    }

    navigate(`/books/${id}`);
  }

  const isNavbar = variant === "navbar";

  return (
    <div
      ref={wrapRef}
      className="relative w-full"
    >

      {/* Search Input */}
      <div
        className={`
          flex items-center gap-2
          rounded-sm px-3 py-2.5
          border
          transition-all duration-700 ease-in-out
          ${
            isNavbar
              ? scrolled
                ? "bg-black/[0.03] border-black/15 focus-within:border-black/40"
                : "bg-white/[0.08] border-white/20 focus-within:border-white/50"
              : "bg-black border-white/15"
          }
        `}
      >

        {/* Search Icon */}
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          className={`shrink-0 transition-colors duration-700 ${
            scrolled
              ? "text-black/45"
              : "text-white/55"
          }`}
        >
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

        {/* Input */}
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          placeholder="Search books..."
          aria-label="Search books"
          className={`
            bg-transparent
            outline-none
            text-sm sm:text-base
            w-full
            transition-colors duration-700
            ${
              scrolled
                ? "text-black placeholder:text-black/40"
                : "text-white placeholder:text-white/45"
            }
          `}
        />

      </div>

      {/* Search Results */}
      {open && results.length > 0 && (
        <div
          className={`
            absolute z-30 mt-2 w-full
            rounded-sm overflow-hidden
            border shadow-lg
            transition-all duration-300
            ${
              scrolled
                ? "bg-white border-black/10"
                : "bg-black/95 border-white/15"
            }
          `}
        >

          {results.map((b) => (
            <button
              key={b.id}
              onClick={() => goToBook(b.id)}
              className={`
                w-full flex items-center gap-3
                px-3 py-3 text-left
                transition-colors
                ${
                  scrolled
                    ? "hover:bg-black/[0.04]"
                    : "hover:bg-white/[0.06]"
                }
              `}
            >

              <img
                src={b.image}
                alt=""
                className="img-mono w-8 h-11 object-cover rounded-[2px]"
              />

              <span className="flex flex-col overflow-hidden">

                <span
                  className={`
                    text-sm sm:text-base truncate
                    ${
                      scrolled
                        ? "text-black"
                        : "text-white"
                    }
                  `}
                >
                  {b.title}
                </span>

                <span
                  className={`
                    text-sm truncate
                    ${
                      scrolled
                        ? "text-black/50"
                        : "text-white/50"
                    }
                  `}
                >
                  {b.author} · {b.category}
                </span>

              </span>

            </button>
          ))}

        </div>
      )}

      {/* No Results */}
      {open &&
        query.trim().length > 0 &&
        results.length === 0 && (
          <div
            className={`
              absolute z-30 mt-2 w-full
              rounded-sm px-3 py-3
              border shadow-lg
              text-sm sm:text-base
              ${
                scrolled
                  ? "bg-white border-black/10 text-black/50"
                  : "bg-black/95 border-white/15 text-white/50"
              }
            `}
          >
            No books match "{query}".
          </div>
        )}

    </div>
  );
}