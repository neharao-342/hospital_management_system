function Stats() {
  return (
    <section className="max-w-6xl mx-auto py-20">

      <h2 className="text-5xl font-bold text-center mb-16">
        Hospital Statistics
      </h2>

      <div className="grid md:grid-cols-4 gap-8 text-center">

        <div className="shadow-lg p-8 rounded-xl">
          <h3 className="text-5xl font-bold text-blue-600">
            100+
          </h3>

          <p className="mt-4">
            Doctors
          </p>
        </div>

        <div className="shadow-lg p-8 rounded-xl">
          <h3 className="text-5xl font-bold text-blue-600">
            25+
          </h3>

          <p className="mt-4">
            Departments
          </p>
        </div>

        <div className="shadow-lg p-8 rounded-xl">
          <h3 className="text-5xl font-bold text-blue-600">
            5000+
          </h3>

          <p className="mt-4">
            Happy Patients
          </p>
        </div>

        <div className="shadow-lg p-8 rounded-xl">
          <h3 className="text-5xl font-bold text-blue-600">
            24/7
          </h3>

          <p className="mt-4">
            Emergency Service
          </p>
        </div>

      </div>

    </section>
  );
}

export default Stats;