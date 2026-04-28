export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-gray-950 via-gray-900 to-purple-900 text-white py-24">
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
          Engineering & Mining <br />
          <span className="text-purple-500">Solutions You Can Trust</span>
        </h1>

        {/* Subtext */}
        <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
          Delivering high-quality engineering, mining, and construction services
          since 2014. Built on safety, precision, and reliability.
        </p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <button className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded font-semibold">
            Request a Quote
          </button>

          <button className="border border-green-400 text-green-400 hover:bg-green-400 hover:text-black px-6 py-3 rounded font-semibold">
            View Services
          </button>
        </div>
      </div>
    </section>
  );
}