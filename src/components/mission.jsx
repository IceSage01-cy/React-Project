const objectives = [
  {
    id: 1,
    text: "Build a simple and user-friendly online shoe store that allows customers to browse products easily.",
  },
  {
    id: 2,
    text: "Offer affordable and varied footwear options suitable for school, work, sports, and everyday use.",
  },
  {
    id: 3,
    text: "Provide a convenient online ordering and delivery process for customers.",
  },
  {
    id: 4,
    text: "Develop a clear and consistent brand identity for MOV through its products and website.",
  },
  {
    id: 5,
    text: "Establish reliable customer support with clear size charts and hassle-free exchange assistance.",
  },
];

const features = [
  {
    title: "Easy to browse",
    text: "A simple, user-friendly online store that makes finding the right pair effortless.",
  },
  {
    title: "Affordable & varied",
    text: "Footwear options for school, work, sports, and everyday use, at prices that fit a student budget.",
  },
  {
    title: "Convenient delivery",
    text: "A reliable online ordering process with delivery straight to your preferred location.",
  },
];

function Mission() {
  return (
    <>
      <section id="mission" className="bg-cyan-500 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="display text-5xl md:text-6xl">Our mission</h2>
          <p className="mt-8 max-w-4xl text-2xl font-semibold leading-snug md:text-3xl">
            MOV provides affordable, stylish, and comfortable footwear to
            students, young adults, and other customers through an accessible
            online store.
          </p>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed">
            We aim to make shoe shopping simple and convenient by offering
            useful choices, reliable service, and delivery to customers'
            preferred locations.
          </p>

          <div className="mt-16 grid gap-10 md:grid-cols-[1fr_2fr]">
            <div>
              <h3 className="display text-3xl">Our vision</h3>
            </div>
            <p className="max-w-2xl text-lg leading-relaxed">
              To become a trusted online footwear brand in the Philippines
              known for affordable, comfortable, and stylish shoes. MOV aims to
              make quality footwear accessible to more customers through a
              convenient online shopping experience.
            </p>
          </div>
        </div>
      </section>

      <section id="objectives" className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="display text-5xl md:text-6xl">Our objectives</h2>
          <p className="mt-4 max-w-md text-lg text-gray-900/70">
            What MOV is working toward, one pair at a time.
          </p>

          <ol className="mt-14 grid gap-x-10 gap-y-8 md:grid-cols-2">
            {objectives.map((objective) => (
              <li
                key={objective.id}
                className="flex gap-5 border-t-2 border-gray-900 pt-5"
              >
                <span className="display shrink-0 text-5xl text-cyan-500">
                  {objective.id}
                </span>
                <p className="text-lg leading-snug text-gray-900/85">
                  {objective.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="why-choose-us" className="bg-slate-200 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="display text-5xl md:text-6xl">Why choose MOV</h2>
          <p className="mt-4 max-w-md text-lg text-gray-900/70">
            Three reasons customers keep coming back.
          </p>

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.title} className="rounded-3xl bg-white p-7">
                <h3 className="wide border-l-4 border-cyan-500 pl-4 text-xl font-extrabold">
                  {feature.title}
                </h3>
                <p className="mt-4 leading-relaxed text-gray-900/75">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Mission;
