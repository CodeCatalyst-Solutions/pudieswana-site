import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 text-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-purple-500 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
          Industrial Projects <br />
          <span className="text-gray-300 text-xl sm:text-2xl font-normal">
            Modern solutions for South Africa's mining & engineering sector.
          </span>
        </h1>

        {/* Featured image */}
        <div
          className="mt-16 w-full rounded-2xl overflow-hidden bg-white/10"
          style={{ height: "300px" }}
        >
          <img
            src="/project-feature.jpg"
            alt="Featured project"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="mt-8 text-center">
          <h2 className="text-white font-bold text-lg sm:text-xl">
            Case studies with real outcomes.
          </h2>
          <p className="text-gray-400 text-sm mt-1">
            See how Pudieswana Engineering & Mining delivers success through
            bold industrial projects.
          </p>
        </div>

        {/* Case Study Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
          {[
            {
              title: "Conveyor Belt Installation",
              problem: "Outdated conveyor lines created bottlenecks.",
              solution: "Installed new high-torque conveyor systems.",
              outcome:
                "Increased throughput by 25% with zero safety incidents.",
            },
            {
              title: "Equipment Refurbishment",
              problem: "Aging machinery slowed production.",
              solution: "Full mechanical overhaul with hydraulic retrofits.",
              outcome: "Reduced downtime and cut maintenance expenses.",
            },
            {
              title: "Hydraulic Redesign",
              problem: "Inefficient hydraulics caused delays.",
              solution: "Redesigned circuit with energy-saving valves.",
              outcome: "Reduced energy consumption by 15%.",
            },
            {
              title: "Fabrication Projects",
              problem: "Complex structures required custom fabrication.",
              solution: "Delivered bespoke steel fabrication assemblies.",
              outcome: "Project delivered two weeks ahead of deadline.",
            },
          ].map(({ title, problem, solution, outcome }) => (
            <div
              key={title}
              className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden"
            >
              <div
                className="w-full bg-white/10 flex items-center justify-center"
                style={{ height: "200px" }}
              >
                <img
                  src="/project-feature.jpg"
                  alt={title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 text-left">
                <h3 className="text-white font-semibold text-lg mb-3">
                  {title}
                </h3>
                <p className="text-gray-400 text-sm">
                  <span className="text-white font-medium">Problem:</span>{" "}
                  {problem}
                  <br />
                  <span className="text-white font-medium">Solution:</span>{" "}
                  {solution}
                  <br />
                  <span className="text-white font-medium">Outcome:</span>{" "}
                  {outcome}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="min-h-screen flex flex-col items-center justify-center pb-24 px-4">
          <h1 className="text-purple-500 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
            Ready for bold results? <br />
            <span className="text-gray-300 text-xl sm:text-2xl font-normal">
              Contact Pudieswana Engineering & Mining now.
            </span>
          </h1>
          <Link to="/contact">
            <button className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-full font-semibold">
              Request a Quote
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
