import { useEffect, useState } from "react";
import API from "../services/api";

function Dashboard() {
  const [stats, setStats] = useState({
    doctors: 0,
    departments: 0,
    patients: 0,
    appointments: 0,
  });

  useEffect(() => {
    API.get("dashboard/")
      .then((res) => setStats(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="max-w-6xl mx-auto py-20 px-6">
      <h1 className="text-5xl font-bold mb-10">
        Dashboard
      </h1>

      <div className="grid md:grid-cols-4 gap-8">

        <div className="shadow-lg rounded-xl p-8">
          <h2 className="text-xl font-semibold">Doctors</h2>
          <p className="text-5xl text-blue-600 mt-5">
            {stats.doctors}
          </p>
        </div>

        <div className="shadow-lg rounded-xl p-8">
          <h2 className="text-xl font-semibold">Departments</h2>
          <p className="text-5xl text-blue-600 mt-5">
            {stats.departments}
          </p>
        </div>

        <div className="shadow-lg rounded-xl p-8">
          <h2 className="text-xl font-semibold">Patients</h2>
          <p className="text-5xl text-blue-600 mt-5">
            {stats.patients}
          </p>
        </div>

        <div className="shadow-lg rounded-xl p-8">
          <h2 className="text-xl font-semibold">Appointments</h2>
          <p className="text-5xl text-blue-600 mt-5">
            {stats.appointments}
          </p>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;