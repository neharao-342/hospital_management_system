import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../../services/api";

function Doctors() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    API.get("doctors/")
      .then((res) => setDoctors(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-4">
          Our Doctors
        </h2>

        <p className="text-center text-gray-500 mb-12">
          Meet our experienced specialists.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          {doctors.slice(0, 3).map((doctor) => (
            <div
              key={doctor.id}
              className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition"
            >
              <img
                src="https://placehold.co/250x250?text=Doctor"
                alt={doctor.name}
                className="rounded-full mx-auto mb-6 w-40 h-40 object-cover"
              />

              <h3 className="text-2xl font-semibold">
                {doctor.name}
              </h3>

              <p className="text-blue-600 mt-2">
                {doctor.specialization}
              </p>

              <p className="text-gray-500 mt-2">
                {doctor.experience} Years Experience
              </p>

              <p className="text-gray-500 text-sm mt-1">
                {doctor.email}
              </p>

              <Link
                to="/doctors"
                className="inline-block mt-6 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
              >
                View Profile
              </Link>

            </div>
          ))}

        </div>

        <div className="text-center mt-12">
          <Link
            to="/doctors"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700"
          >
            View All Doctors
          </Link>
        </div>

      </div>
    </section>
  );
}

export default Doctors;