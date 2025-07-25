import React from "react";

const testimonials = [
  {
    name: "Samantha Lee",
    role: "Startup Founder",
    message:
      "This site helped us showcase our product beautifully. The templates are sleek and super easy to customize.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Rahul Mehta",
    role: "UI/UX Designer",
    message:
      "A perfect solution for presenting design projects professionally. Loved the responsiveness!",
    avatar: "https://randomuser.me/api/portraits/men/36.jpg",
  },
  {
    name: "Emily Carter",
    role: "Freelance Developer",
    message:
      "Everything just worked out of the box. Clean code, great performance, and it looks amazing!",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 px-6 md:px-20 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800">What People Say</h2>
        <p className="mt-4 text-gray-500 max-w-xl mx-auto">
          Testimonials from our happy clients and users who’ve used our showcase site templates.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center space-x-4 mb-4">
              <img
                src={t.avatar}
                alt={t.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h4 className="font-semibold text-gray-800">{t.name}</h4>
                <p className="text-sm text-gray-500">{t.role}</p>
              </div>
            </div>
            <p className="text-gray-600 italic">“{t.message}”</p>
          </div>
        ))}
      </div>
    </section>
  );
};

//export default Testimonials;
