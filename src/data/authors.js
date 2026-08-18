// MyLibraryEra — author profiles are derived from the book catalog.
// Adding a new author to books.js automatically adds them here.
import { books } from "./books.js";

const avatarPool = [
  "1500648767791-00dcc994a43e",
  "1494790108377-be9c29b29330",
  "1534528741775-53994a69daeb",
  "1506794778202-cad84cf45f1d",
  "1507003211169-0a1dd7228f2d",
  "1544005313-94ddf0286df2",
  "1488426862026-3ee34a7d66df",
  "1551836022-d5d88e9218df",
  "1531123897727-8f129e1688ce",
  "1524504388940-b1c1722653e1"
];

const categoryBio = {
  "Fiction": "character-driven fiction about memory, relationships, and the details of ordinary life.",
  "Mystery & Thriller": "atmospheric mysteries and page-turning thrillers built around secrets, clues, and sharp turns.",
  "Romance": "emotionally precise love stories about timing, connection, second chances, and the courage to choose someone.",
  "Science Fiction & Fantasy": "imaginative speculative worlds where wonder, technology, magic, and human questions meet.",
  "Business & Finance": "practical books about strategy, leadership, money, and building work that lasts.",
  "Self-Help & Personal Development": "clear, compassionate guidance for habits, focus, confidence, resilience, and sustainable growth.",
  "History & Biography": "research-rich narratives that bring people, places, and turning points from the past to life.",
  "Children & Young Adult": "imaginative stories that invite younger readers into warm, curious, adventurous worlds.",
  "Science & Technology": "accessible writing that makes complex scientific and technological ideas useful and memorable.",
  "Health & Wellness": "approachable wellbeing guidance grounded in practical habits, movement, rest, and everyday balance.",
  "Travel & Adventure": "curious journeys, vivid places, and adventurous stories that make the world feel larger.",
  "Cooking & Food": "approachable recipes and food stories that connect kitchen craft with culture and everyday life.",
  "Arts & Culture": "thoughtful books about design, music, film, visual culture, and creative life.",
  "Poetry & Literary Classics": "lyrical writing that explores language, memory, longing, beauty, and the inner life.",
  "Education & Learning": "practical ideas for studying, teaching, research, skill-building, and lifelong curiosity."
};

const slugify = (value) =>
  value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

const grouped = books.reduce((acc, book) => {
  const key = book.author;
  if (!acc[key]) acc[key] = [];
  acc[key].push(book);
  return acc;
}, {});

export const authors = Object.values(grouped).map((authorBooks, index) => {
  const first = authorBooks[0];
  return {
    slug: slugify(first.author),
    name: first.author,
    category: first.category,
    categorySlug: first.categorySlug,
    categories: [...new Set(authorBooks.map((book) => book.category))],
    bio: `${first.author} writes ${categoryBio[first.category]}`,
    avatar: `https://images.unsplash.com/photo-${avatarPool[index % avatarPool.length]}?auto=format&fit=crop&w=300&h=300&q=85&facepad=2`,
    bookCount: authorBooks.length,
    bookIds: authorBooks.map((book) => book.id),
    books: authorBooks.map((book) => book.title)
  };
});
