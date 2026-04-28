export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 text-white">
      <h2 className="text-3xl font-bold text-center text-purple-500 mb-10">
        Contact Us
      </h2>

      <div className="max-w-xl mx-auto space-y-4">
        <input className="w-full p-3 bg-gray-800 rounded" placeholder="Name" />
        <input className="w-full p-3 bg-gray-800 rounded" placeholder="Email" />
        <textarea className="w-full p-3 bg-gray-800 rounded" placeholder="Message" />

        <button className="w-full bg-purple-600 py-3 rounded-full">
          Send Message
        </button>
      </div>

      <p className="text-center text-gray-400 mt-6">
        Kuruman, South Africa
      </p>
    </section>
  );
}