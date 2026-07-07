import { useEffect, useState } from "react";
import API from "../services/api";

function Doctors() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    API.get("doctors/")
      .then((res) => setDoctors(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="max-w-7xl mx-auto py-20 px-6">

      <h1 className="text-5xl font-bold text-center mb-12">
        Our Doctors
      </h1>

      <div className="grid md:grid-cols-3 gap-8">

        {doctors.map((doctor) => (
          <div
            key={doctor.id}
            className="bg-white shadow-lg rounded-xl p-8 text-center hover:shadow-xl transition"
          >

            <img
              src="https://placehold.co/250x250?text=Doctor"
              alt={doctor.name}
              className="rounded-full w-40 h-40 mx-auto mb-6 object-cover"
            />

            <h2 className="text-2xl font-bold">
              {doctor.name}
            </h2>

            <p className="text-blue-600 mt-2">
              {doctor.specialization}
            </p>

            <p className="mt-2">
              <strong>Experience:</strong> {doctor.experience} Years
            </p>

            <p>
              <strong>Email:</strong> {doctor.email}
            </p>

            <p>
              <strong>Phone:</strong> {doctor.phone}
            </p>

          </div>
        ))}

      </div>

    </div>
  );
}

export default Doctors;