import { useEffect, useState } from "react";
import API from "../services/api";

function Departments() {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    API.get("departments/")
      .then((res) => setDepartments(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="max-w-6xl mx-auto py-20 px-6">
      <h1 className="text-5xl font-bold text-center mb-12">
        Departments
      </h1>

      <div className="grid md:grid-cols-4 gap-8">
        {departments.map((dept) => (
          <div
            key={dept.id}
            className="shadow-lg rounded-xl p-8 text-center hover:bg-blue-600 hover:text-white transition"
          >
            <h2 className="text-xl font-semibold">
              {dept.name}
            </h2>

            <p className="mt-3 text-sm">
              {dept.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Departments;