import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
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
      const res = await API.post("auth/login/", form);

      localStorage.setItem("access", res.data.access);
      localStorage.setItem("refresh", res.data.refresh);

      alert("Login Successful");

      navigate("/dashboard");
    } catch (err) {
        console.error(err);
      alert("Invalid Username or Password");
    }
  };

  return (
    <div className="max-w-md mx-auto py-20">

      <h1 className="text-4xl font-bold mb-10 text-center">
        Login
      </h1>

      <form onSubmit={handleSubmit} className="space-y-6">

        <input
          type="text"
          name="username"
          placeholder="Username"
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

        <button className="bg-blue-600 text-white w-full p-4 rounded">
          Login
        </button>

      </form>

    </div>
  );
}

export default Login;