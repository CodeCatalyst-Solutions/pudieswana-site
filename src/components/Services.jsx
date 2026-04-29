import {
  Wrench,
  Trash2,
  Bus,
  Brush,
  Building2,
  Package,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

const iconItems = [
  { icon: Wrench, label: "Logistics" },
  { icon: Trash2, label: "Waste Removal" },
  { icon: Bus, label: "Worker Transport" },
  { icon: Brush, label: "Industrial Cleaning" },
  { icon: Building2, label: "Commercial Cleaning" },
  { icon: Package, label: "Spares & PPE" },
  { icon: Zap, label: "Valves & Pumps" },
  { icon: Zap, label: "Drilling Equipment" },
];

export default function Services() {
  return (
    <section id="services" className="py-20 px-6 text-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Full viewport hero */}
        <div className="min-h-screen flex flex-col items-center justify-center pb-24 px-4">
          <h1 className="text-purple-500 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
            Industrial Services <br />
            <span className="text-gray-300 text-xl sm:text-2xl font-normal">
              Modern, Reliable, Corporate-strength.
            </span>
          </h1>
          <div className="flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto">
            <Link to="/contact">
              <button className="w-full sm:w-auto bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-full font-semibold">
                Explore Services
              </button>
            </Link>
            <Link to="/contact">
              <button className="w-full sm:w-auto border border-green-400 text-green-400 hover:bg-green-400 hover:text-black px-6 py-3 rounded-full font-semibold">
                Contact Us
              </button>
            </Link>
          </div>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            {
              category: "Engineering",
              title: "Welding, fabrication, installation, inspection",
            },
            {
              category: "Mining",
              title: "Underground work, conveyors, TMM repairs",
            },
            {
              category: "Construction",
              title: "Roads, housing, structural work",
            },
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
          {iconItems.map(({ icon: Icon, label }) => (
            <div key={label} className="flex flex-col items-center gap-3">
              <Icon className="text-gray-400" size={36} strokeWidth={1.2} />
              <span className="text-white font-semibold text-sm">{label}</span>
            </div>
          ))}
        </div>

        {/* Comprehensive Service Coverage */}
        <div className="text-left mt-10 pt-10 border-t border-white/10">
          <h3 className="text-white font-semibold mb-2">
            Comprehensive Service Coverage
          </h3>
          <p className="text-gray-400 text-sm max-w-lg">
            From engineering excellence and robust mining solutions to expert
            construction and highly efficient logistics, Pudieswana delivers a
            diverse set of industrial services to South Africa's most demanding
            sectors. Our capabilities cover welding, fabrication, and
            installation, as well as workplace safety and cleaning services that
            keep your site at peak performance.
          </p>
        </div>

        {/* Why Choose Pudieswana */}
        <div className="text-left mt-10 pt-10 border-t border-white/10">
          <h3 className="text-white font-semibold mb-2">
            Why Choose Pudieswana
          </h3>
          <p className="text-gray-400 text-sm max-w-lg">
            We pride ourselves on our modern approach and strong corporate
            values. Our teams deliver each service with reliability, precision,
            and absolute commitment to safety and quality.
            <br />
            <br />
            From underground mining and conveyor systems to turnkey construction
            projects, we ensure every job is professionally managed and exceeds
            expectations every step of the way.
            <br />
            <br />
            We adapt to your unique industrial challenges, providing spares,
            PPE, and specialized equipment supply as part of our integrated
            offerings.
          </p>
        </div>
      </div>
    </section>
  );
}
