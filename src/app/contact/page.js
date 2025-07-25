// src/app/contact/page.js

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-gray-50">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">Contact Us</h1>
      <p className="text-gray-700 text-center max-w-xl mb-10">
        We'd love to hear from you. Please fill out the form below and we'll get back to you shortly.
      </p>

      <form className="w-full max-w-md bg-white p-6 rounded-lg shadow-md space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
        />
        <textarea
          placeholder="Your Message"
          className="w-full p-3 border rounded-md h-32 resize-none focus:outline-none focus:ring-2 focus:ring-pink-400"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-pink-700 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
