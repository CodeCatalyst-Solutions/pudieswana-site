import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    category: "Engineering & Fabrication",
    title: "Drill Rig Fabricated Spares",
    summary: "Custom fabricated spares for drilling applications.",
    problem:
      "The site required durable replacement parts to keep drilling operations moving.",
    solution:
      "Fabricated spares were produced to match the required drilling equipment specifications.",
    outcome:
      "Supported equipment uptime and reduced the need for repeated part sourcing.",
    image: "/projects/optimized/number1.webp",
  },
  {
    id: 2,
    category: "Engineering & Fabrication",
    title: "Drill Rig Hose Guide Bracket & Impeller Work",
    summary: "Hose guide bracket, 15 kW and 45 kW impeller work.",
    problem:
      "Critical drill-rig components needed reliable manufacturing support.",
    solution:
      "Produced and supplied the bracket and impeller-related fabricated parts for the equipment.",
    outcome:
      "Improved part availability for ongoing maintenance and assembly work.",
    image: "/projects/optimized/number2.webp",
  },
  {
    id: 3,
    category: "Industrial Supply",
    title: "Special Impeller & Ball Valve",
    summary: "Mining application components supplied and fitted.",
    problem:
      "The operation needed specialised components for mining conditions.",
    solution:
      "Supplied a special impeller and a ball valve suited to the application.",
    outcome: "Helped keep the system aligned to mining site requirements.",
    image: "/projects/optimized/number3.webp",
  },
  {
    id: 4,
    category: "Engineering & Fabrication",
    title: "Drill Rig Bulkhead Bracket & Pipe Clamps",
    summary: "Bulkhead bracket, pipe clamps, hose clamps, and fittings.",
    problem:
      "The drill rig needed supporting hardware and secure mounting solutions.",
    solution:
      "Fabricated and supplied the bracket, clamps, and fittings required for the setup.",
    outcome: "Improved installation support and component stability.",
    image: "/projects/optimized/number4.webp",
  },
  {
    id: 5,
    category: "Mining Infrastructure",
    title: "Roof Support Face Plate",
    summary: "Support hardware for underground mining applications.",
    problem:
      "Underground support systems needed durable structural components.",
    solution:
      "Produced roof support face plate components for mining support use.",
    outcome: "Strengthened the company's underground support capability.",
    image: "/projects/optimized/number5.webp",
  },
  {
    id: 6,
    category: "Mining Infrastructure",
    title: "Ground Ripper Attachment & Conveyor Belt Work",
    summary: "Attachment and conveyor installation, extension, and splicing.",
    problem:
      "The site needed conveyor and support infrastructure work to keep material flow moving.",
    solution:
      "Completed ground ripper attachment work and conveyor belt installation, extension, splicing, and belt structure reclamation.",
    outcome:
      "Improved conveyor functionality and extended operating performance.",
    image: "/projects/optimized/number6.webp",
  },
  {
    id: 7,
    category: "Industrial Supply",
    title: "GAV Chain & Butterfly Valves",
    summary: "10 mm short link chain and valve supply.",
    problem: "The operation required consumables and flow-control components.",
    solution:
      "Supplied 10 mm short link GAV chain and butterfly valves for industrial use.",
    outcome:
      "Added to the company's supply capability for mining and engineering clients.",
    image: "/projects/optimized/number7.webp",
  },
  {
    id: 8,
    category: "Mining Infrastructure",
    title: "Rubber Lining",
    summary: "Rubber lining for industrial protection and durability.",
    problem: "Equipment and surfaces needed improved wear resistance.",
    solution:
      "Applied rubber lining to help protect components in demanding conditions.",
    outcome: "Improved service life and resistance to wear.",
    image: "/projects/optimized/number8.webp",
  },
  {
    id: 9,
    category: "Refurbishment & Maintenance",
    title: "TMM3 Repair, Refurbishment & Rebuild",
    summary: "Major repair and refurbishment work on TMM3 equipment.",
    problem:
      "Heavy equipment needed repairs, rebuilding, and maintenance support.",
    solution:
      "Completed stripping, repair, refurbishment, rebuilding, and maintenance work on TMM3 units.",
    outcome:
      "Restored equipment for continued use and operational reliability.",
    image: "/projects/optimized/number9.webp",
  },
  {
    id: 10,
    category: "Refurbishment & Maintenance",
    title: "Sandblasting, Welding/NDT, Painting & Inspection Bays",
    summary: "Workshop processes for repair and inspection.",
    problem:
      "Equipment needed controlled repair, inspection, and finishing environments.",
    solution:
      "Used the sandblasting, welding/NDT testing, painting, and inspection bays to process and assess components.",
    outcome:
      "Created a structured workflow for quality control and maintenance.",
    image: "/projects/optimized/number10.webp",
  },
  {
    id: 11,
    category: "Engineering & Fabrication",
    title: "Hydraulic Brake Block Redesign",
    summary: "Redesigned for easier maintenance access.",
    problem: "The original design made maintenance difficult.",
    solution:
      "Redesigned and manufactured a new hydraulic brake block to improve service access.",
    outcome: "Improved maintainability and reduced service difficulty.",
    image: "/projects/optimized/number11.webp",
  },
  {
    id: 12,
    category: "Engineering & Fabrication",
    title: "Power Head Frame Redesign + DPF Addition",
    summary: "Updated power head frame for new generation use.",
    problem:
      "The existing setup needed improvement for newer operational requirements.",
    solution:
      "Redesigned the overall power head frame and added DPF support to improve underground gas limitations.",
    outcome: "Improved equipment design for modern underground requirements.",
    image: "/projects/optimized/number12.webp",
  },
  {
    id: 13,
    category: "Refurbishment & Maintenance",
    title: "Group Pump Repair",
    summary: "In-progress assembly of a new generation design model.",
    problem:
      "The operation needed repaired complete units and structured assembly work.",
    solution:
      "Used the assembly bay to repair the group pump complete unit and support new generation model work.",
    outcome: "Improved repair capability and assembly output.",
    image: "/projects/optimized/number13.webp",
  },
  {
    id: 14,
    category: "Engineering & Fabrication",
    title: "Improved Steering System",
    summary: "Steering system improved with inline priority valve.",
    problem: "The steering system needed performance improvement.",
    solution:
      "Integrated an inline priority valve into the steering system design.",
    outcome: "Enhanced steering control and system responsiveness.",
    image: "/projects/optimized/number14.webp",
  },
  {
    id: 15,
    category: "Engineering & Fabrication",
    title: "Fabrication Output Towards Assembly + LHD Project",
    summary: "Fabrication work supporting final assembly.",
    problem:
      "Assembly required fabrication output for the next stage of build work.",
    solution:
      "Completed fabrication output towards assembly, including LHD Project 1 fabrication.",
    outcome: "Demonstrated strong fabrication-to-assembly capability.",
    image: "/projects/optimized/number15.webp",
  },
];

const categories = [
  "All",
  "Engineering & Fabrication",
  "Refurbishment & Maintenance",
  "Mining Infrastructure",
  "Industrial Supply",
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return projects;
    return projects.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setSelectedProject(null);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

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
        <div className="mt-12 h-[300px] w-full overflow-hidden rounded-lg border border-white/10 bg-white/10 sm:h-[430px]">
          <img
            src="/projects/optimized/project_featured.webp"
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

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-3 mt-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
                activeCategory === category
                  ? "bg-purple-600 text-white"
                  : "bg-white/10 text-gray-300 hover:bg-white/20"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {filteredProjects.map((project) => (
            <button
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="overflow-hidden rounded-lg border border-white/10 bg-white/10 text-left backdrop-blur-sm transition hover:bg-white/15"
            >
              <div className="w-full h-56 overflow-hidden bg-gray-900">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              <div className="p-6">
                <p className="text-xs uppercase tracking-[0.2em] text-green-400 mb-2">
                  {project.category}
                </p>
                <h3 className="text-white font-semibold text-base leading-snug">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mt-3">{project.summary}</p>
                <p className="text-purple-400 text-sm mt-4 font-medium">
                  Click to view details
                </p>
              </div>
            </button>
          ))}
        </div>

        {/* CTA */}
        <div className="my-20 border-y border-white/10 px-4 py-16">
          <h2 className="mb-6 text-3xl font-bold leading-tight text-purple-500 sm:text-4xl md:text-5xl">
            Ready for bold results? <br />
            <span className="text-gray-300 text-xl sm:text-2xl font-normal">
              Contact Pudieswana Engineering & Mining now.
            </span>
          </h2>
          <Link to="/contact">
            <button className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-full font-semibold">
              Request a Quote
            </button>
          </Link>
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
          <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-xl border border-white/10 bg-gray-950 shadow-2xl">
            {/* Close button pinned to top-right of the modal box */}
            <div className="relative">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full rounded-t-xl object-contain bg-gray-900"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 bg-black/60 hover:bg-black/80 text-white w-10 h-10 rounded-full"
                aria-label="Close modal"
              >
                ×
              </button>
            </div>

            <div className="p-6 text-left">
              <p className="text-xs uppercase tracking-[0.2em] text-green-400 mb-2">
                {selectedProject.category}
              </p>
              <h3 className="text-2xl font-bold text-white">
                {selectedProject.title}
              </h3>

              <div className="mt-5 space-y-4 text-sm text-gray-300">
                <p>
                  <span className="text-white font-semibold">Problem:</span>{" "}
                  {selectedProject.problem}
                </p>
                <p>
                  <span className="text-white font-semibold">Solution:</span>{" "}
                  {selectedProject.solution}
                </p>
                <p>
                  <span className="text-white font-semibold">Outcome:</span>{" "}
                  {selectedProject.outcome}
                </p>
              </div>

              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="bg-purple-600 hover:bg-purple-700 px-5 py-2 rounded-full font-semibold"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
