export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 text-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-purple-500 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
          Contact Us <br />
          <span className="text-gray-300 text-xl sm:text-2xl font-normal">
            We're here to support your business.
          </span>
        </h1>

        <div className="mt-10 text-gray-400 text-sm">
          Kuruman, South Africa · Phone: +27 00 000 0000 · Email:
          info@pudieswana.co.za
        </div>

        <div className="mt-12 max-w-xl mx-auto space-y-4 text-left">
          <input
            className="w-full p-3 bg-gray-800 rounded-xl text-white placeholder-gray-500"
            placeholder="Name"
          />
          <input
            className="w-full p-3 bg-gray-800 rounded-xl text-white placeholder-gray-500"
            placeholder="Email"
          />
          <textarea
            className="w-full p-3 bg-gray-800 rounded-xl text-white placeholder-gray-500 h-32"
            placeholder="Message"
          />
          <button className="w-full bg-purple-600 hover:bg-purple-700 py-3 rounded-full font-semibold">
            Send Message
          </button>
        </div>
      </div>
    </section>
  );
}
