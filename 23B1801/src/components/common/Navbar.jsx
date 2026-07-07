import { Link, NavLink } from "react-router-dom";
import { FaHospital } from "react-icons/fa";
const token = localStorage.getItem("access");
function Navbar() {
  const navLinkClass = ({ isActive }) =>
    `transition duration-300 ${
      isActive
        ? "text-blue-600 font-semibold"
        : "text-gray-700 hover:text-blue-600"
    }`;
    {token ? (
  <button
    onClick={() => {
      localStorage.clear();
      window.location.href = "/";
    }}
    className="bg-red-600 text-white px-4 py-2 rounded-lg"
  >
    Logout
  </button>
) : (
  <Link
    to="/login"
    className="bg-blue-600 text-white px-4 py-2 rounded-lg"
  >
    Login
  </Link>
)}

  return (
    <nav className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <FaHospital className="text-4xl text-blue-600" />

            <div>
              <h1 className="text-3xl font-bold text-blue-600">
                MediCare
              </h1>
            </div>
          </Link>

          {/* Navigation */}
          <div className="hidden md:flex items-center gap-8 text-lg">
            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>

            <NavLink to="/about" className={navLinkClass}>
              About
            </NavLink>

            <NavLink to="/doctors" className={navLinkClass}>
              Doctors
            </NavLink>

            <NavLink to="/departments" className={navLinkClass}>
              Departments
            </NavLink>

            <NavLink to="/contact" className={navLinkClass}>
              Contact
            </NavLink>
          </div>

          {/* Button */}
          <Link
            to="/appointment"
            className="bg-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-700 transition duration-300"
          >
            Book Appointment
          </Link>
          <button
              onClick={() => {
              localStorage.clear();
              window.location.href = "/login";
             }}
            className="bg-red-600 text-white px-4 py-2 rounded-lg"
          >
  Logout
</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;