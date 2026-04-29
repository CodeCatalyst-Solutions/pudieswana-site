import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isValidEmail(form.email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");

    const res = await fetch("https://formspree.io/f/mbdwrrje", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });
    }
  };

  return (
    <section id="contact" className="py-20 px-6 text-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-purple-500 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
          Contact Us <br />
          <span className="text-gray-300 text-xl sm:text-2xl font-normal">
            We're here to support your business.
          </span>
        </h1>

        <div className="mt-10 text-gray-400 text-sm space-y-1">
          <p>📍 Randfontein, Gauteng, South Africa</p>

          <p>
            📞 Albert Maphanga:{" "}
            <a href="tel:+27729179369" className="hover:text-white">
              +27 72 917 9369
            </a>
          </p>

          <p>
            📞 Tumisang Kaekae:{" "}
            <a href="tel:+27736855060" className="hover:text-white">
              +27 73 685 5060
            </a>
          </p>

          <p>
            ✉️{" "}
            <a href="mailto:info@pudieswana.co.za" className="hover:text-white">
              info@pudieswana.co.za
            </a>
          </p>
        </div>

        {submitted ? (
          <p className="mt-12 text-green-400 font-semibold">
            Message sent! We'll be in touch soon.
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-12 max-w-xl mx-auto space-y-4 text-left"
          >
            <input
              className="w-full p-3 bg-gray-800 rounded-xl text-white placeholder-gray-500"
              placeholder="Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />
            <div>
              <input
                className={`w-full p-3 bg-gray-800 rounded-xl text-white placeholder-gray-500 ${error ? "border border-red-500" : ""}`}
                placeholder="Email"
                value={form.email}
                onChange={(e) => {
                  setForm({ ...form, email: e.target.value });
                  setError("");
                }}
              />
              {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
            </div>
            <textarea
              className="w-full p-3 bg-gray-800 rounded-xl text-white placeholder-gray-500 h-32"
              placeholder="Message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
            />
            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 py-3 rounded-full font-semibold"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
