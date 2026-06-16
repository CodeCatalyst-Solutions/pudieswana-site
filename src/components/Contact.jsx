import { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";

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
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center">
          <h1 className="text-purple-500 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
            Contact Us <br />
            <span className="text-gray-300 text-xl sm:text-2xl font-normal">
              We're here to support your business.
            </span>
          </h1>
        </div>

        <div className="mt-12 grid gap-10 text-left lg:grid-cols-[0.85fr_1fr]">
          <div className="space-y-6">
            {[
              {
                icon: MapPin,
                label: "Location",
                value: "Randfontein, Gauteng, South Africa",
              },
              {
                icon: Phone,
                label: "Albert Maphanga",
                value: "+27 72 917 9369",
                href: "tel:+27729179369",
              },
              {
                icon: Phone,
                label: "Tumisang Kaekae",
                value: "+27 73 685 5060",
                href: "tel:+27736855060",
              },
              {
                icon: Mail,
                label: "Email",
                value: "info@pudieswanaengineering.co.za",
                href: "mailto:info@pudieswanaengineering.co.za",
              },
            ].map(({ icon: Icon, label, value, href }) => (
              <div
                key={label}
                className="flex gap-4 border-b border-white/10 pb-5 last:border-b-0"
              >
                <div className="flex h-10 w-10 flex-none items-center justify-center rounded-lg border border-white/10 bg-white/5 text-green-400">
                  <Icon size={20} strokeWidth={1.8} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{label}</p>
                  {href ? (
                    <a
                      href={href}
                      className="mt-1 block text-sm text-gray-400 hover:text-white"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="mt-1 text-sm text-gray-400">{value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {submitted ? (
            <p className="rounded-lg border border-green-400/30 bg-green-400/10 p-6 text-green-300 font-semibold">
              Message sent! We'll be in touch soon.
            </p>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="space-y-4 rounded-lg border border-white/10 bg-white/5 p-5"
            >
              <input
                className="w-full rounded-lg border border-white/10 bg-gray-900 p-3 text-white placeholder-gray-500 outline-none focus:border-purple-400"
                placeholder="Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />
              <div>
                <input
                  className={`w-full rounded-lg border bg-gray-900 p-3 text-white placeholder-gray-500 outline-none focus:border-purple-400 ${
                    error ? "border-red-500" : "border-white/10"
                  }`}
                  placeholder="Email"
                  type="email"
                  value={form.email}
                  onChange={(e) => {
                    setForm({ ...form, email: e.target.value });
                    setError("");
                  }}
                  required
                />
                {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
              </div>
              <textarea
                className="h-32 w-full rounded-lg border border-white/10 bg-gray-900 p-3 text-white placeholder-gray-500 outline-none focus:border-purple-400"
                placeholder="Message"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
              />
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-purple-600 py-3 font-semibold hover:bg-purple-700"
              >
                <Send size={18} />
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
