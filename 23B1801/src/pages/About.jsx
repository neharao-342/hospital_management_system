function About() {
  return (
    <div className="max-w-6xl mx-auto py-20 px-6">
      <h1 className="text-5xl font-bold text-blue-600 mb-6">About Us</h1>

      <p className="text-lg text-gray-600 leading-8">
        MediCare Hospital is committed to providing quality healthcare through
        experienced doctors, modern facilities, and compassionate patient care.
      </p>

      <div className="grid md:grid-cols-3 gap-8 mt-12">
        <div className="shadow-lg p-6 rounded-xl">
          <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
          <p>Deliver affordable and quality healthcare for everyone.</p>
        </div>

        <div className="shadow-lg p-6 rounded-xl">
          <h2 className="text-2xl font-semibold mb-3">Our Vision</h2>
          <p>Become one of the most trusted hospitals in the country.</p>
        </div>

        <div className="shadow-lg p-6 rounded-xl">
          <h2 className="text-2xl font-semibold mb-3">Our Values</h2>
          <p>Integrity, compassion, innovation and excellence.</p>
        </div>
      </div>
    </div>
  );
}

export default About;