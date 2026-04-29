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
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Full viewport hero */}
        <div className="min-h-screen flex flex-col items-center justify-center pb-24 px-4">
          <h1 className="text-purple-500 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
            Engineering & Mining Solutions You Can Trust <br />
            <span className="text-gray-300 text-xl sm:text-2xl md:text-3xl font-normal">
              Delivering high-quality engineering, mining, and construction
              services since 2014.
            </span>
          </h1>
          <div className="flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto">
            <Link to="/contact">
              <button className="w-full sm:w-auto bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-full font-semibold">
                Request a Quote
              </button>
            </Link>
            <Link to="/services">
              <button className="w-full sm:w-auto border border-green-400 text-green-400 hover:bg-green-400 hover:text-black px-6 py-3 rounded-full font-semibold">
                Our Services
              </button>
            </Link>
          </div>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16">
          {[
            { category: "Engineering", title: "Civil & mechanical projects" },
            { category: "Mining", title: "Exploration & extraction" },
            { category: "Construction", title: "Buildings & infrastructure" },
          ].map(({ category, title }) => (
            <div
              key={category}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 flex flex-col min-h-64"
            >
              <div className="flex-1 flex items-center justify-center">
                <div className="w-16 h-16 bg-white/20 rounded-xl" />
              </div>
              <div className="text-center mt-6">
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
        <div className="min-h-screen flex flex-col items-center justify-center pb-24 px-4">
          <h1 className="text-purple-500 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
            Need reliable engineering services? <br />
            <span className="text-gray-300">Contact us today.</span>
          </h1>
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
