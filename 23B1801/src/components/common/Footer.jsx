function Footer() {
  return (
    <footer className="bg-slate-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">

        <div>
          <h2 className="text-2xl font-bold text-blue-400">
            MediCare
          </h2>

          <p className="mt-4 text-gray-300">
            Providing quality healthcare with experienced doctors,
            modern technology, and compassionate care.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">
            Quick Links
          </h3>

          <ul className="space-y-2 text-gray-300">
            <li>Home</li>
            <li>Doctors</li>
            <li>Departments</li>
            <li>Appointment</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">
            Contact
          </h3>

          <p>Email : hospital@gmail.com</p>

          <p>Phone : +91 9876543210</p>

          <p>Mumbai, India</p>
        </div>

      </div>

      <div className="text-center py-4 border-t border-gray-700">
        © 2026 MediCare Hospital. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;