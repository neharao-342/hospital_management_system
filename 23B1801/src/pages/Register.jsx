import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("auth/register/", form);

      alert("Registration Successful");

      navigate("/login");
    } catch (err) {
        console.error(err);
      alert("Registration Failed");
    }
  };

  return (
    <div className="max-w-md mx-auto py-20">

      <h1 className="text-4xl font-bold mb-10 text-center">
        Register
      </h1>

      <form onSubmit={handleSubmit} className="space-y-6">

        <input
          name="username"
          placeholder="Username"
          onChange={handleChange}
          className="border p-4 w-full rounded"
        />

        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="border p-4 w-full rounded"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          className="border p-4 w-full rounded"
        />

        <button className="bg-green-600 text-white w-full p-4 rounded">
          Register
        </button>

      </form>

    </div>
  );
}

export default Register;