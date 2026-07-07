const reviews = [
  {
    name: "Amit Sharma",
    review:
      "Excellent doctors and very friendly staff. Highly recommended.",
  },
  {
    name: "Priya Singh",
    review:
      "Quick appointment process and great treatment experience.",
  },
  {
    name: "Rahul Mehta",
    review:
      "Very clean hospital with professional doctors.",
  },
];

function Testimonials() {
  return (
    <section className="bg-gray-100 py-20">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          Patient Testimonials
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {reviews.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8"
            >

              <p className="italic text-gray-600">
                "{item.review}"
              </p>

              <h3 className="mt-6 font-bold text-blue-600">
                {item.name}
              </h3>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Testimonials;