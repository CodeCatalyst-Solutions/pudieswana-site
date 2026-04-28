const projects = [
  "Conveyor Belt Installation",
  "Hydraulic System Redesign",
  "LHD Fabrication Project",
  "Equipment Refurbishment",
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 text-white">
      <h2 className="text-3xl font-bold text-center text-purple-500 mb-10">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {projects.map((p, i) => (
          <div key={i} className="bg-gray-900 p-6 rounded">
            <h3 className="text-green-400 font-semibold">{p}</h3>
            <p className="text-gray-400 mt-2">
              Engineering and mining project delivered with precision and safety.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}