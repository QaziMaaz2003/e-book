import { useState } from "react";
import SectionTitle from "../components/SectionTitle.jsx";

const info = [
  { label: "Address", value: "500 W Madison St, Suite 2200, Chicago, IL 60661" },
  { label: "Phone", value: "(312) 555-0172" },
  { label: "Email", value: "hello@mylibraryera.com" },
  { label: "Hours", value: "Mon–Fri, 9:00 AM – 6:00 PM CT" },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  function validate() {
    const errs = {};

    if (!form.name.trim()) errs.name = "Full name is required.";

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = "Enter a valid email address.";
    }

    if (!form.subject.trim()) {
      errs.subject = "Subject is required.";
    }

    if (!form.message.trim() || form.message.trim().length < 10) {
      errs.message = "Message should be at least 10 characters.";
    }

    return errs;
  }

  function handleSubmit(e) {
    e.preventDefault();

    const errs = validate();
    setErrors(errs);

    if (Object.keys(errs).length === 0) {
      setSubmitted(true);
      setForm({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }
  }

  return (
    <div>
      {/* Contact Hero */}
      <section className="border-b border-white/15 bg-black">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-32 sm:pt-36 pb-16 sm:pb-20">          <SectionTitle
          eyebrow="Contact Us"
          title="We'd love to hear from you"
          description="Questions about an order, a title, or a partnership? Reach our Chicago team directly."
        />
        </div>
      </section>

      {/* Contact Content */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-16 sm:py-20 grid lg:grid-cols-[1fr_1.4fr] gap-12">
        {/* Contact Information */}
        <div className="flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-5">
            {info.map((i) => (
              <div
                key={i.label}
                className="bg-black border border-white/15 rounded-sm p-5"
              >
                <p className="text-sm uppercase tracking-widest2 text-accent">
                  {i.label}
                </p>

                <p className="text-white mt-1.5">
                  {i.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-black border border-white/15 rounded-sm p-6 sm:p-10">
          {submitted ? (
            <div className="flex flex-col items-center text-center gap-4 py-10">
              <div className="w-14 h-14 rounded-full bg-white/10 border border-white/40 flex items-center justify-center text-white text-2xl">
                ✓
              </div>

              <h3 className="font-display text-2xl text-white">
                Message sent
              </h3>

              <p className="text-white/55 text-base max-w-sm">
                Thank you for reaching out. Our Chicago team will reply within
                one business day.
              </p>

              <button
                onClick={() => setSubmitted(false)}
                className="mt-2 text-white text-base hover:text-accent hover:underline decoration-accent/60 transition-colors"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="name"
                    className="text-sm uppercase tracking-widest2 text-accent"
                  >
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

                  {errors.name && (
                    <p className="text-white underline decoration-white/50 text-sm mt-1">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="text-sm uppercase tracking-widest2 text-accent"
                  >
                    Email
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

                  {errors.email && (
                    <p className="text-white underline decoration-white/50 text-sm mt-1">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="phone"
                    className="text-sm uppercase tracking-widest2 text-accent"
                  >
                    Phone
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
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="text-sm uppercase tracking-widest2 text-accent"
                  >
                    Subject
                  </label>

                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={form.subject}
                    onChange={handleChange}
                    className="w-full mt-1.5 bg-black border border-white/20 rounded-sm px-4 py-2.5 text-base text-white outline-none focus:border-white"
                    placeholder="Order question"
                  />

                  {errors.subject && (
                    <p className="text-white underline decoration-white/50 text-sm mt-1">
                      {errors.subject}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="text-sm uppercase tracking-widest2 text-accent"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full mt-1.5 bg-black border border-white/20 rounded-sm px-4 py-2.5 text-base text-white outline-none focus:border-white resize-none"
                  placeholder="How can we help?"
                />

                {errors.message && (
                  <p className="text-white underline decoration-white/50 text-sm mt-1">
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="mt-2 self-start bg-white text-black px-7 py-3 rounded-sm text-base font-medium hover:bg-accent hover:text-white transition-colors"              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}