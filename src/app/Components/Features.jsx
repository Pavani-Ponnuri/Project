import React from "react";
import { FaLaptopCode, FaPalette, FaRocket } from "react-icons/fa";

const features = [
  {
    icon: <FaLaptopCode size={30} />,
    title: "Responsive Design",
    desc: "Looks great on all devices — mobile, tablet, and desktop.",
  },
  {
    icon: <FaPalette size={30} />,
    title: "Customizable Themes",
    desc: "Tweak colors, fonts, and layouts to match your style.",
  },
  {
    icon: <FaRocket size={30} />,
    title: "Fast Deployment",
    desc: "Go live in minutes with modern tools like Vercel & Netlify.",
  },
];

export default function Features() {
  return (
    <section className="py-20 px-6 md:px-20 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800">Why Choose Us?</h2>
        <p className="mt-4 text-gray-500 max-w-xl mx-auto">
          Everything you need to build and showcase your portfolio quickly and beautifully.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-blue-50 rounded-xl shadow-md p-8 text-center hover:shadow-xl transition-shadow"
          >
            <div className="text-blue-600 mb-4 flex justify-center">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800">{feature.title}</h3>
            <p className="mt-2 text-gray-600">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

//export default Features;
