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
      {/* Why Choose Us */}
        <div className="text-left mt-10 pt-10 border-t border-white/10">
          <h3 className="text-white font-semibold mb-2">Why Choose Us</h3>
          <p className="text-gray-400 text-sm max-w-lg">
            Our ISO-standard work processes ensure every project exceeds industry
            benchmarks for quality and safety.
            <br />
            <br />
            We employ a highly skilled and experienced workforce focused on innovative 
            solutions and strict compliance.
            <br />
            <br />
            We are committed to community upliftment and provide custom solutions 
            tailored to each client’s unique needs.
          </p>
        </div>
    </section>
  );
}