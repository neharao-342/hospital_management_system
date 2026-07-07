import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import heroImg from "../../assets/images/hero.png";

function Hero() {
  return (
    <section className="bg-gradient-to-br from-sky-50 via-white to-blue-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-24 flex flex-col-reverse lg:flex-row items-center justify-between gap-16">

        {/* Left Side */}
        <motion.div
          className="lg:w-1/2"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="uppercase tracking-widest text-blue-600 font-semibold">
            Welcome to MediCare Hospital
          </span>

          <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mt-5">
            Exceptional
            <br />

            <span className="text-blue-600">
              Healthcare
            </span>

            <br />

            For Every Patient
          </h1>

          <p className="mt-8 text-lg text-gray-600 leading-8">
            Experience compassionate healthcare with highly qualified doctors,
            advanced medical technology, and patient-centered treatment
            available 24 hours a day.
          </p>

          <div className="mt-10 flex flex-wrap gap-5">
            <Link
              to="/appointment"
              className="bg-blue-600 text-white px-8 py-4 rounded-xl font-medium hover:bg-blue-700 transition"
            >
              Book Appointment
            </Link>

            <Link
              to="/doctors"
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-medium hover:bg-blue-600 hover:text-white transition"
            >
              Meet Doctors
            </Link>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-3 gap-10 mt-16">
            <div>
              <h2 className="text-4xl font-bold text-blue-600">150+</h2>
              <p className="text-gray-600 mt-2">Expert Doctors</p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-blue-600">25+</h2>
              <p className="text-gray-600 mt-2">Departments</p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-blue-600">10000+</h2>
              <p className="text-gray-600 mt-2">Happy Patients</p>
            </div>
          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          className="lg:w-1/2 flex justify-center relative"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src={heroImg}
            alt="Doctor"
            className="w-full max-w-xl"
          />

          {/* Card 1 */}
          <div className="absolute top-10 -left-4 bg-white rounded-2xl shadow-xl px-6 py-4">
            <h3 className="text-2xl font-bold text-blue-600">
              24/7
            </h3>

            <p className="text-gray-500">
              Emergency Care
            </p>
          </div>

          {/* Card 2 */}
          <div className="absolute bottom-10 -right-4 bg-white rounded-2xl shadow-xl px-6 py-4">
            <h3 className="text-2xl font-bold text-blue-600">
              ★ 4.9
            </h3>

            <p className="text-gray-500">
              Patient Rating
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;