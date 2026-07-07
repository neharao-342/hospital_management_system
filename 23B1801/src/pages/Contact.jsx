function Contact() {
  return (
    <div className="max-w-5xl mx-auto py-20 px-6">
      <h1 className="text-5xl font-bold mb-12">Contact Us</h1>

      <div className="grid md:grid-cols-2 gap-12">

        <div>
          <h2 className="text-2xl font-semibold mb-6">
            Hospital Information
          </h2>

          <p>📍 Mumbai, Maharashtra</p>

          <p className="mt-4">📞 +91 9876543210</p>

          <p className="mt-4">✉ medicare@gmail.com</p>
        </div>

        <form className="space-y-5">

          <input
            className="w-full border p-4 rounded-lg"
            placeholder="Name"
          />

          <input
            className="w-full border p-4 rounded-lg"
            placeholder="Email"
          />

          <textarea
            className="w-full border p-4 rounded-lg"
            rows="5"
            placeholder="Message"
          />

          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg">
            Send
          </button>

        </form>

      </div>
    </div>
  );
}

export default Contact;