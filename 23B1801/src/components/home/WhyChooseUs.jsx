import { FaUserMd, FaAmbulance, FaHeartbeat, FaHospital } from "react-icons/fa";

const features = [
  {
    icon: <FaUserMd size={40} className="text-blue-600" />,
    title: "Expert Doctors",
    desc: "Highly experienced specialists providing the best treatment.",
  },
  {
    icon: <FaAmbulance size={40} className="text-blue-600" />,
    title: "24/7 Emergency",
    desc: "Emergency care available around the clock.",
  },
  {
    icon: <FaHeartbeat size={40} className="text-blue-600" />,
    title: "Modern Equipment",
    desc: "Advanced technology for accurate diagnosis and treatment.",
  },
  {
    icon: <FaHospital size={40} className="text-blue-600" />,
    title: "Quality Care",
    desc: "Compassionate healthcare focused on every patient.",
  },
];

function WhyChooseUs() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-4">
          Why Choose Us?
        </h2>

        <p className="text-center text-gray-500 mb-12">
          We combine expert care with modern technology.
        </p>

        <div className="grid md:grid-cols-2 gap-8">

          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl p-8 flex gap-5"
            >
              {item.icon}

              <div>
                <h3 className="text-xl font-semibold mb-2">
                  {item.title}
                </h3>

                <p className="text-gray-600">
                  {item.desc}
                </p>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;