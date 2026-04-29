export default function About() {
  return (
    <section id="about" className="py-20 px-6 sm:px-16 text-white">

      <div className="min-h-screen flex flex-col pb-24">
        <h2 className="text-2xl sm:text-3xl font-bold text-purple-500 text-left mb-6">
          About Pudieswana Engineering & Mining (Pty) Ltd
        </h2>

        <p className="text-left text-gray-300 max-w-4xl text-sm sm:text-base">
          Founded in 2014 in Kuruman by Albert Maphanga and Tumisang Kaekae,
          Pudieswana Engineering & Mining (Pty) Ltd leads South Africa's industrial
          and mining sectors through expertise in engineering, construction, transportation,
          cleaning, and industrial supply. Our company operates with a vision of
          quality, safety, and innovation that shapes our operations and services.
          <br /><br />
          Our mission is to deliver reliable, ISO-standard solutions while uplifting
          communities through youth employment and a strong commitment to
          BEE. Every project reflects our dedication to safety, compliance, and
          sustainable development within the industries we serve.
          <br /><br />
          As a black empowered organization, Pudieswana Engineering & Mining puts
          people first. We invest in skilled professionals, champion transformation,
          and foster business growth by prioritizing quality work, community
          development, and transparent business practices in every engagement.
        </p>
      </div>

      {/* About Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16">
        {[
          { category: "BEE", title: "Empowerment" },
          { category: "Youth", title: "Employment" },
          { category: "Vision", title: "Quality" },
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

    </section>
  );
}
