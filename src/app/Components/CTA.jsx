import React from "react";

export default function CallToAction() {
  return (
    <section className="bg-indigo-600 text-white py-20 px-6 md:px-20 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">
        Ready to showcase your next big idea?
      </h2>
      <p className="mb-8 text-lg max-w-2xl mx-auto">
        Build your professional presence today with a powerful and elegant portfolio site.
      </p>
      <a
        href="#contact"
        className="inline-block bg-white text-indigo-600 font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition"
      >
        Get Started
      </a>
    </section>
  );
};

//export default CallToAction;
