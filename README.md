# MyLibraryEra

A modern ebook marketplace / digital library front-end built with **React + Vite + Tailwind CSS + React Router**.

## Getting Started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── components/     Reusable UI (Navbar, Footer, BookCard, CategoryCard, SearchBar,
│                    SectionTitle, Button, Newsletter, ShelfMarquee, PurchaseForm)
├── pages/           Home, Categories, CategoryBooks, BookDetails, About, Contact, NotFound
├── data/            books.js (70 books) and categories.js (7 categories)
├── App.jsx          Routes
├── main.jsx         App entry + Router
└── index.css        Tailwind + global styles/animations
```

## Notes

- **Book cover images** currently use `picsum.photos` seeded placeholders so every
  book has a unique, consistent cover. Swap the `image` field in
  `src/data/books.js` for real cover art (or your own uploaded images) whenever
  you're ready — the data/image relationship is already wired throughout every
  page (cards, details, related books).
- **Buy Now** and the **Contact form** are fully working on the front end but do
  not call a real backend or payment processor — they simulate submission and
  show a confirmation message. Both forms are structured so a real API call can
  be dropped in later (see `handleSubmit` in `PurchaseForm.jsx` and
  `Contact.jsx`).
- **Contact details** (address, phone, email, map) are Chicago-based placeholders
  in `Footer.jsx` and `Contact.jsx` — replace with your real business info.
- Design tokens (colors, fonts) live in `tailwind.config.js` if you want to
  retheme the site.
