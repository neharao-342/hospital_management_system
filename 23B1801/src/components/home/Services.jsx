import {
  FaHeart,
  FaBrain,
  FaBone,
  FaBaby,
  FaTooth,
  FaEye,
} from "react-icons/fa";

const services = [
  { icon: <FaHeart />, name: "Cardiology" },
  { icon: <FaBrain />, name: "Neurology" },
  { icon: <FaBone />, name: "Orthopedics" },
  { icon: <FaBaby />, name: "Pediatrics" },
  { icon: <FaTooth />, name: "Dental Care" },
  { icon: <FaEye />, name: "Eye Care" },
];

function Services() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-4">
          Our Services
        </h2>

        <p className="text-center text-gray-500 mb-12">
          Comprehensive healthcare services under one roof.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          {services.map((service, index) => (
            <div
              key={index}
              className="border rounded-xl p-8 text-center hover:bg-blue-600 hover:text-white transition duration-300"
            >
              <div className="text-5xl mb-5 flex justify-center">
                {service.icon}
              </div>

              <h3 className="text-2xl font-semibold">
                {service.name}
              </h3>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Services;