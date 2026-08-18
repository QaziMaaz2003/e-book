import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setEmail("");
  }

  return (
    <div className="bg-black border border-white/15 rounded-sm p-8 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
      <div className="max-w-md">
        <h3 className="font-display text-2xl text-white">Get new releases in your inbox</h3>
        <p className="text-white/55 text-base mt-2">
          One email a week. New arrivals, staff picks, and quiet-hour reading recommendations.
        </p>
      </div>
      {submitted ? (
        <p className="text-white text-base">You're on the list — welcome to MyLibraryEra.</p>
      ) : (
        <form onSubmit={handleSubmit} className="flex w-full sm:w-auto gap-3">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@email.com"
            className="flex-1 sm:w-64 bg-black border border-white/20 rounded-sm px-4 py-3 text-base text-white placeholder:text-white/40 outline-none focus:border-white"
          />
          <button
            type="submit"
            className="bg-white text-black px-5 py-3 rounded-sm text-base font-medium hover:bg-white/85 transition-colors whitespace-nowrap"
          >
            Subscribe
          </button>
        </form>
      )}
    </div>
  );
}
