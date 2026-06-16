export default function About() {
  return (
    <section id="about" className="px-6 py-20 text-white sm:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 text-left lg:grid-cols-[1fr_0.85fr]">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.26em] text-green-400">
              About Pudieswana
            </p>
            <h1 className="mb-6 text-4xl font-bold leading-tight text-purple-500 sm:text-5xl">
              Engineering, mining, and industrial support with local roots
            </h1>

            <div className="max-w-3xl space-y-5 text-sm leading-7 text-gray-300 sm:text-base">
              <p>
                Founded in 2014 in Kuruman by Albert Maphanga and Tumisang
                Kaekae, Pudieswana Engineering & Mining (Pty) Ltd serves South
                Africa's industrial and mining sectors through engineering,
                construction, transportation, cleaning, and industrial supply.
              </p>
              <p>
                The company operates with a vision of quality, safety, and
                innovation, delivering ISO-standard solutions while uplifting
                communities through youth employment and a strong commitment to
                BEE.
              </p>
            </div>

            <div className="mt-10 grid max-w-2xl grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                ["2014", "Founded"],
                ["BEE", "Empowered"],
                ["ISO", "Standards"],
                ["SA", "Industrial sites"],
              ].map(([value, label]) => (
                <div key={label} className="border-l border-white/15 pl-4">
                  <p className="text-2xl font-bold text-white">{value}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.18em] text-gray-500">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-lg border border-white/10 bg-white/5 shadow-2xl">
            <img
              src="/about/about_quality.jpeg"
              alt="Pudieswana quality-focused industrial work"
              className="h-[320px] w-full object-cover sm:h-[430px]"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent p-5">
              <p className="text-sm font-semibold text-white">
                Quality, safety, compliance, and community upliftment
              </p>
            </div>
          </div>
        </div>

        {/* About Cards */}
        <div className="mt-20 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {[
            {
              category: "BEE",
              title: "Empowerment",
              image: "/about/about_bee.jpg",
            },
            {
              category: "Youth",
              title: "Employment",
              image: "/about/about_youth.jpg",
              imagePosition: "object-top",
            },
            {
              category: "Vision",
              title: "Quality",
              image: "/about/about_quality.jpeg",
            },
          ].map(
            ({ category, title, image, imagePosition = "object-center" }) => (
              <div
                key={category}
                className="flex min-h-64 flex-col rounded-lg border border-white/10 bg-white/10 p-5 text-left backdrop-blur-sm"
              >
                <div className="flex flex-1 items-center justify-center">
                  <img
                    src={image}
                    alt={category}
                    loading="lazy"
                    className={`h-40 w-full rounded-md object-cover ${imagePosition}`}
                  />
                </div>
                <div className="mt-5">
                  <p className="mb-1 text-sm text-gray-400">{category}</p>
                  <h3 className="text-lg font-semibold text-white">{title}</h3>
                </div>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
