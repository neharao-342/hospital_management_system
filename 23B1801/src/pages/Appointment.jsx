import { useEffect, useState } from "react";
import API from "../services/api";

function Appointment() {
  const [doctors, setDoctors] = useState([]);

  const [form, setForm] = useState({
    name: "",
    age: "",
    gender: "",
    phone: "",
    email: "",
    address: "",

    doctor: "",
    appointment_date: "",
    appointment_time: "",
    notes: "",
  });

  useEffect(() => {
    API.get("doctors/")
      .then((res) => setDoctors(res.data));
  }, []);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const bookAppointment = async (e) => {
    e.preventDefault();

    try {

      const patient = await API.post("patients/", {
        name: form.name,
        age: form.age,
        gender: form.gender,
        phone: form.phone,
        email: form.email,
        address: form.address,
      });

      await API.post("appointments/", {
        patient: patient.data.id,
        doctor: form.doctor,
        appointment_date: form.appointment_date,
        appointment_time: form.appointment_time,
        notes: form.notes,
      });

      alert("Appointment Booked Successfully!");

    } catch (err) {
      console.log(err);
      alert("Booking Failed");
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-20">

      <h1 className="text-5xl font-bold mb-10">
        Book Appointment
      </h1>

      <form
        onSubmit={bookAppointment}
        className="grid md:grid-cols-2 gap-5"
      >

        <input
          name="name"
          placeholder="Full Name"
          onChange={handleChange}
          className="border p-4 rounded"
        />

        <input
          name="age"
          placeholder="Age"
          onChange={handleChange}
          className="border p-4 rounded"
        />

        <select
          name="gender"
          onChange={handleChange}
          className="border p-4 rounded"
        >
          <option>Gender</option>
          <option>Male</option>
          <option>Female</option>
        </select>

        <input
          name="phone"
          placeholder="Phone"
          onChange={handleChange}
          className="border p-4 rounded"
        />

        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="border p-4 rounded"
        />

        <input
          name="address"
          placeholder="Address"
          onChange={handleChange}
          className="border p-4 rounded"
        />

        <select
          name="doctor"
          onChange={handleChange}
          className="border p-4 rounded"
        >

          <option>Select Doctor</option>

          {doctors.map((d) => (
            <option
              key={d.id}
              value={d.id}
            >
              {d.name}
            </option>
          ))}

        </select>

        <input
          type="date"
          name="appointment_date"
          onChange={handleChange}
          className="border p-4 rounded"
        />

        <input
          type="time"
          name="appointment_time"
          onChange={handleChange}
          className="border p-4 rounded"
        />

        <textarea
          name="notes"
          placeholder="Notes"
          onChange={handleChange}
          className="border p-4 rounded md:col-span-2"
        />

        <button
          className="bg-blue-600 text-white p-4 rounded md:col-span-2"
        >
          Book Appointment
        </button>

      </form>

    </div>
  );
}

export default Appointment;