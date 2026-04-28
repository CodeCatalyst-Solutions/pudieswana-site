const points = [
  "ISO-standard compliance",
  "Skilled workforce",
  "Safety-first approach",
  "Community upliftment",
  "Custom engineering solutions",
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 px-6 text-white">
      <h2 className="text-3xl font-bold text-center text-purple-500 mb-10">
        Why Choose Us
      </h2>

      <ul className="max-w-3xl mx-auto space-y-4 text-center text-gray-300">
        {points.map((p, i) => (
          <li key={i}>• {p}</li>
        ))}
      </ul>
    </section>
  );
}