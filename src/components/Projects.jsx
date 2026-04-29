const projects = [
  "Conveyor Belt Installation",
  "Hydraulic System Redesign",
  "LHD Fabrication Project",
  "Equipment Refurbishment",
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 text-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-purple-500 text-4xl md:text-5xl font-bold leading-tight mb-6 text-center">
          Industrial Projects <br />
          <span className="text-gray-300">Modern solutions for South Africa’s mining & engineering sector.</span>
        </h1>
      </div>

      {/* Featured Project Block */}
      <div className="mt-20 text-center">
        <div className="w-full rounded-2xl overflow-hidden bg-white/10 flex items-center justify-center" style={{ height: '480px' }}>
          <img src="/project-feature.jpg" alt="Featured project" className="w-full h-full object-cover" />
        </div>
        
      </div>

      <div className="max-w-3xl mx-auto px-6 text-center">
        <h1 className="text-purple-500 text-2xl md:text-3xl font-bold leading-tight mb-6 text-center">
          Case studies with real outcomes. <br />
          <span className="text-gray-300">See how Pudieswana Engineering & Mining delivers success through bold industrial projects.</span>
        </h1>
      </div>

      {/* Case Study Cards */}
      <div className="grid md:grid-cols-2 gap-6">
        {[
          { category: "CASE", title: "Conveyor Installation" },
          { category: "CASE", title: "Equipment Refurbishment" },
          { category: "CASE", title: "Hydraulic Redesign" },
          { category: "CASE", title: "Fabrication Projects" },
        ].map(({ category, title }) => (
          <div key={category} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 flex flex-col min-h-64">
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

      {/* Conveyor Belt Installation Block */}
      <div className="mt-20 text-center">
        <div className="w-full rounded-2xl overflow-hidden bg-white/10 flex items-center justify-center" style={{ height: '480px' }}>
          <img src="/project-feature.jpg" alt="Featured project" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Mini About */}
        <div className="text-left mt-10 pt-10">
          <h3 className="text-white font-semibold mb-2">Conveyor Belt Installation</h3>
          <p className="text-gray-400 text-sm max-w-lg">
            <b>Problem:</b> Outdated and malfunctioning conveyor lines created bottlenecks and downtime at a mining site.<br /> 
            <b>Solution:</b> Engineered and installed new high-torque conveyor systems with customized load handling. <br />
            <b>Outcome:</b> Increased throughput by 25% with zero safety incidents.
          </p>
        </div>

      {/* Equipment Refurbishment Block */}
      <div className="mt-20 text-center">
        <div className="w-full rounded-2xl overflow-hidden bg-white/10 flex items-center justify-center" style={{ height: '480px' }}>
          <img src="/project-feature.jpg" alt="Featured project" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Mini About */}
        <div className="text-left mt-10 pt-10">
          <h3 className="text-white font-semibold mb-2">Equipment Refurbishment</h3>
          <p className="text-gray-400 text-sm max-w-lg">
            <b>Problem:</b> Aging processing machinery slowed production and raised maintenance costs.<br />
            <b>Solution:</b> Full mechanical overhaul including advanced hydraulic retrofits and structural upgrades.<br /> 
            <b>Outcome:</b> Improved reliability, reduced downtime, and significantly cut maintenance expenses.
          </p>
        </div>

      {/* Hydraulic Redesign Block */}
      <div className="mt-20 text-center">
        <div className="w-full rounded-2xl overflow-hidden bg-white/10 flex items-center justify-center" style={{ height: '480px' }}>
          <img src="/project-feature.jpg" alt="Featured project" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Mini About */}
        <div className="text-left mt-10 pt-10">
          <h3 className="text-white font-semibold mb-2">Hydraulic Redesign</h3>
          <p className="text-gray-400 text-sm max-w-lg">
            <b>Problem:</b> Inefficient hydraulic systems led to operational delays and increased energy usage.<br />
            <b>Solution:</b> Redesigned the hydraulic circuit with energy-saving valves and precision controls. <br />
            <b>Outcome:</b> Reduced energy consumption by 15% and optimized process speed.
          </p>
        </div>

        {/* Fabrication Projects Block */}
      <div className="mt-20 text-center">
        <div className="w-full rounded-2xl overflow-hidden bg-white/10 flex items-center justify-center" style={{ height: '480px' }}>
          <img src="/project-feature.jpg" alt="Fabrication Projects" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Mini About */}
        <div className="text-left mt-10 pt-10">
          <h3 className="text-white font-semibold mb-2">Fabrication Projects</h3>
          <p className="text-gray-400 text-sm max-w-lg">
            <b>Problem:</b> Complex on-site structures required custom fabrication for rapid deployment.<br />
            <b>Solution:</b> Delivered bespoke steel fabrication and high-precision assemblies ready for field fit-up. <br />
            <b>Outcome:</b> Achieved project delivery two weeks ahead of deadline with certified quality control.
          </p>
        </div>

      
      {/* Full viewport hero */}
      <div className="min-h-screen flex flex-col items-center justify-center pb-24">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h1 className="text-purple-500 text-4xl md:text-5xl font-bold leading-tight mb-6 text-center">
          Ready for bold results? <br />
          <span className="text-gray-300">Contact Pudieswana Engineering & Mining now for industrial solutions.</span>
        </h1>

        <div className="flex flex-col md:flex-row justify-center gap-4">
          <button className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-full font-semibold">
            Request a Quote
          </button>
        </div>
      </div>
      </div>

    </section>
  );
}