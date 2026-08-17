import { useState } from "react";

export default function PurchaseForm({ book, onClose }) {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  function validate() {
    const errs = {};
    if (!form.name.trim()) errs.name = "Full name is required.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "Enter a valid email address.";
    if (!/^[0-9+\-()\s]{7,}$/.test(form.phone)) errs.phone = "Enter a valid phone number.";
    return errs;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      // Frontend-only simulation. A real backend/payment integration
      // can replace this block later.
      setSubmitted(true);
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-md bg-black border border-white/25 rounded-sm shadow-card p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          aria-label="Close purchase form"
          className="absolute top-4 right-4 text-white/50 hover:text-white"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>

        {submitted ? (
          <div className="flex flex-col items-center text-center gap-4 py-6">
            <div className="w-14 h-14 rounded-full bg-white/10 border border-white/40 flex items-center justify-center text-white text-2xl">
              ✓
            </div>
            <h3 className="font-display text-2xl text-white">Thank you!</h3>
            <p className="text-white/60 text-base leading-relaxed">
              Your purchase request has been received. We will contact you via email with the next steps.
            </p>
            <button
              onClick={onClose}
              className="mt-2 bg-white text-black px-6 py-2.5 rounded-sm text-base font-medium hover:bg-white/85 transition-colors"
            >
              Done
            </button>
          </div>
        ) : (
          <>
            <span className="eyebrow">Buy Now</span>
            <h3 className="font-display text-2xl text-white mt-2">Complete your purchase</h3>
            <p className="text-white/55 text-base mt-1">
              This is a frontend demo — no payment is charged. We'll follow up by email.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-6">
              <div>
                <label className="text-sm uppercase tracking-widest2 text-white/50">Book</label>
                <input
                  type="text"
                  value={book.title}
                  readOnly
                  disabled
                  className="w-full mt-1.5 bg-black border border-white/15 rounded-sm px-4 py-2.5 text-base text-white/60 cursor-not-allowed"
                />
              </div>

              <div>
                <label htmlFor="name" className="text-sm uppercase tracking-widest2 text-white/50">
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full mt-1.5 bg-black border border-white/20 rounded-sm px-4 py-2.5 text-base text-white outline-none focus:border-white"
                  placeholder="Jane Doe"
                />
                {errors.name && <p className="text-white underline decoration-white/50 text-sm mt-1">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="text-sm uppercase tracking-widest2 text-white/50">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full mt-1.5 bg-black border border-white/20 rounded-sm px-4 py-2.5 text-base text-white outline-none focus:border-white"
                  placeholder="jane@email.com"
                />
                {errors.email && <p className="text-white underline decoration-white/50 text-sm mt-1">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="phone" className="text-sm uppercase tracking-widest2 text-white/50">
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full mt-1.5 bg-black border border-white/20 rounded-sm px-4 py-2.5 text-base text-white outline-none focus:border-white"
                  placeholder="(312) 555-0172"
                />
                {errors.phone && <p className="text-white underline decoration-white/50 text-sm mt-1">{errors.phone}</p>}
              </div>

              <div>
                <label htmlFor="message" className="text-sm uppercase tracking-widest2 text-white/50">
                  Additional Message <span className="normal-case tracking-normal">(optional)</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows="3"
                  className="w-full mt-1.5 bg-black border border-white/20 rounded-sm px-4 py-2.5 text-base text-white outline-none focus:border-white resize-none"
                  placeholder="Anything you'd like us to know?"
                />
              </div>

              <button
                type="submit"
                className="mt-2 bg-white text-black px-6 py-3 rounded-sm text-base font-medium hover:bg-white/85 transition-colors"
              >
                Confirm Purchase — ${book.price.toFixed(2)}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
