const services = [
  "Engineering",
  "Mining",
  "Construction",
  "Transportation",
  "Cleaning",
  "Supply",
];

export default function Services() {
  return (
    <section id="services" className="py-20 px-6 text-white">
      <h2 className="text-3xl font-bold text-center text-purple-500 mb-10">
        Our Services
      </h2>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {services.map((s, i) => (
          <div key={i} className="bg-gray-900 p-6 rounded border border-gray-800">
            <h3 className="text-green-400 text-xl font-semibold">{s}</h3>
            <p className="text-gray-400 mt-2">
              Professional {s.toLowerCase()} solutions tailored to client needs.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}