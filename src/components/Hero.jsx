import {
  Wrench,
  Brush,
  Package,
  BadgeCheck,
  ShieldCheck,
  Users,
  Leaf,
  Puzzle,
} from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  { icon: Wrench, label: "Transportation" },
  { icon: Brush, label: "Cleaning" },
  { icon: Package, label: "Supply" },
  { icon: BadgeCheck, label: "ISO Standards" },
  { icon: ShieldCheck, label: "Safety Driven" },
  { icon: Users, label: "Skilled Team" },
  { icon: Leaf, label: "Community" },
  { icon: Puzzle, label: "Custom Solutions" },
];

export default function Hero() {
  return (
    <section className="text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid min-h-[620px] items-center gap-12 py-16 text-left lg:grid-cols-[1fr_0.9fr] lg:py-20">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.26em] text-green-400">
              Kuruman born. Gauteng based. Industry ready.
            </p>
            <h1 className="mb-6 text-4xl font-bold leading-tight text-purple-500 sm:text-5xl lg:text-6xl">
              Engineering & mining solutions you can trust
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-gray-300 sm:text-xl">
              Delivering high-quality engineering, mining, construction,
              transport, cleaning, and supply services since 2014.
            </p>

            <div className="mt-8 flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
              <Link to="/contact">
                <button className="w-full rounded-full bg-purple-600 px-6 py-3 font-semibold hover:bg-purple-700 sm:w-auto">
                  Request a Quote
                </button>
              </Link>
              <Link to="/services">
                <button className="w-full rounded-full border border-green-400 px-6 py-3 font-semibold text-green-400 hover:bg-green-400 hover:text-black sm:w-auto">
                  Our Services
                </button>
              </Link>
            </div>

            <div className="mt-10 grid max-w-xl grid-cols-3 gap-4 border-t border-white/10 pt-6">
              {[
                ["2014", "Established"],
                ["6", "Core services"],
                ["ISO", "Driven quality"],
              ].map(([value, label]) => (
                <div key={label}>
                  <p className="text-2xl font-bold text-white">{value}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.18em] text-gray-500">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-lg border border-white/10 bg-white/5 shadow-2xl">
            <img
              src="/projects/optimized/project_featured.webp"
              alt="Pudieswana industrial mining equipment in workshop"
              className="h-[320px] w-full object-cover sm:h-[420px] lg:h-[520px]"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent p-5">
              <p className="text-sm font-semibold text-white">
                Mining equipment, fabrication, and maintenance support
              </p>
            </div>
          </div>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {[
            {
              category: "Engineering",
              title: "Civil & mechanical projects",
              image: "/home/home_engineering.jpeg",
            },
            {
              category: "Mining",
              title: "Exploration & extraction",
              image: "/home/home_mining.jpeg",
            },
            {
              category: "Construction",
              title: "Buildings & infrastructure",
              image: "/home/home_construction.jpg",
            },
          ].map(({ category, title, image }) => (
            <div
              key={category}
              className="flex min-h-64 flex-col rounded-lg border border-white/10 bg-white/10 p-5 text-left backdrop-blur-sm"
            >
              <div className="flex flex-1 items-center justify-center">
                <img
                  src={image}
                  alt={category}
                  loading="lazy"
                  className="h-40 w-full rounded-md object-cover"
                />
              </div>
              <div className="mt-5">
                <p className="text-sm text-gray-400 mb-1">{category}</p>
                <h3 className="text-white font-semibold text-lg">{title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Icon Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mt-16 py-10 border-t border-white/10">
          {features.map(({ icon: Icon, label }) => (
            <div key={label} className="flex flex-col items-center gap-3">
              <Icon className="text-gray-400" size={36} strokeWidth={1.2} />
              <span className="text-white font-semibold text-sm">{label}</span>
            </div>
          ))}
        </div>

        {/* Mini About */}
        <div className="text-left mt-10 pt-10 border-t border-white/10">
          <h3 className="text-white font-semibold mb-2">About Pudieswana</h3>
          <p className="text-gray-400 text-sm max-w-lg">
            Established in 2014 in Kuruman, South Africa, Pudieswana delivers
            quality engineering, mining, and construction services, with an
            uncompromising focus on safety, compliance, and client satisfaction.
          </p>
        </div>

        {/* Why Choose Us */}
        <div className="text-left mt-10 pt-10 border-t border-white/10">
          <h3 className="text-white font-semibold mb-2">Why Choose Us</h3>
          <p className="text-gray-400 text-sm max-w-lg">
            Our ISO-standard work processes ensure every project exceeds
            industry benchmarks for quality and safety.
            <br />
            <br />
            We employ a highly skilled and experienced workforce focused on
            innovative solutions and strict compliance.
            <br />
            <br />
            We are committed to community upliftment and provide custom
            solutions tailored to each client's unique needs.
          </p>
        </div>

        {/* Get In Touch */}
        <div className="my-20 border-y border-white/10 px-4 py-16 text-center">
          <h2 className="mb-6 text-3xl font-bold leading-tight text-purple-500 sm:text-4xl md:text-5xl">
            Need reliable engineering services? <br />
            <span className="text-gray-300">Contact us today.</span>
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto">
            <Link to="/contact">
              <button className="w-full sm:w-auto bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-full font-semibold">
                Get In Touch
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
