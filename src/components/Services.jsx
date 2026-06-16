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
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid items-center gap-12 pb-16 text-left lg:grid-cols-[0.9fr_1fr] lg:pb-20">
          <div className="relative overflow-hidden rounded-lg border border-white/10 bg-white/5 shadow-2xl">
            <img
              src="/services/services_engineering.jpeg"
              alt="Engineering fabrication service work"
              className="h-[300px] w-full object-cover sm:h-[420px] lg:h-[500px]"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent p-5">
              <p className="text-sm font-semibold text-white">
                Fabrication, mining support, construction, transport, cleaning,
                and supply
              </p>
            </div>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.26em] text-green-400">
              Industrial service coverage
            </p>
            <h1 className="mb-6 text-4xl font-bold leading-tight text-purple-500 sm:text-5xl lg:text-6xl">
              Practical support for demanding sites
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-gray-300 sm:text-xl">
              Modern, reliable, corporate-strength services for mining,
              engineering, construction, logistics, cleaning, and supply needs.
            </p>

            <div className="mt-8 flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
              <a href="#service-grid">
                <button className="w-full rounded-full bg-purple-600 px-6 py-3 font-semibold hover:bg-purple-700 sm:w-auto">
                  Explore Services
                </button>
              </a>
              <Link to="/contact">
                <button className="w-full rounded-full border border-green-400 px-6 py-3 font-semibold text-green-400 hover:bg-green-400 hover:text-black sm:w-auto">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Service Cards */}
        <div
          id="service-grid"
          className="grid grid-cols-1 gap-6 sm:grid-cols-3"
        >
          {[
            {
              category: "Engineering",
              title: "Welding, fabrication, installation, inspection",
              image: "/services/services_engineering.jpeg",
            },
            {
              category: "Mining",
              title: "Underground work, conveyors, TMM repairs",
              image: "/services/services_mining.jpeg",
            },
            {
              category: "Construction",
              title: "Roads, housing, structural work",
              image: "/services/services_construction.jpg",
            },
            {
              category: "Transportation",
              title: "Waste removal, trucking, transporting workers",
              image: "/services/services_transportation.jpeg",
            },
            {
              category: "Cleaning",
              title: "Offices, schools, mining sites, parks, hospitals",
              image: "/services/services_cleaning.jpeg",
            },
            {
              category: "Supply",
              title:
                "TMM spares, lifting chains, valves, pumps, hydraulic hoses, drill steel, drill bits, bolts and nuts, and PPE",
              image: "/services/services_supply.png",
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
