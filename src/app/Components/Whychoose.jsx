import React from "react";
import Link from "next/link";

export default function WhyChoose() {
  const cards = [
    {
      title: "Custom Solutions",
      description:
        "A customised solution is a tailored answer to the specific training needs of a company or organisation. It is designed through a co-creation process, with the objective to accelerate business and strengthen individual skills and the team transformation process.",
      icon: "⚙️",
    },
    {
      title: "Expert Team",
      description:
        "Expert teams are characterized by members with specialized knowledge who effectively coordinate their individual expertise to achieve superior or near-optimal performance.",
      icon: "💼",
    },
    {
      title: "Support & Maintenance",
      description:
        "Support involves addressing user issues and providing assistance, while maintenance focuses on keeping the software running smoothly through updates, bug fixes, and performance enhancements.",
      icon: "🔧",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      text: "Working with [SoftwareCompany] has been an absolute pleasure. Their team of skilled professionals is not only knowledgeable in their field but also dedicated to providing top-notch service and support.",
      title: "CEO, TechCorp",
      stars: 5,
      img: "/assets/client1.jpg",
    },
    {
      stars: 5,
      text: "If you’re in search of a reliable, innovative software company, look no further than [SoftwareCompany]. Their team of seasoned professionals consistently exceeds expectations.",
      name: "Michael Chen",
      title: "Founder, StartupX",
      img: "/assets/client2.jpg",
    },
    {
      stars: 4,
      text: "The staff was great. The receptionists were very helpful and answered all our questions. The room was clean and bright. Will be coming back!",
      name: "Emily Rodriguez",
      title: "Director, Innovation Lab",
      img: "/assets/client3.jpg",
    },
  ];

  return (
    <section className="bg-white py-24 w-full">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* --- Why Choose Us Heading --- */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Why Choose ProSite?
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Discover the key benefits that make us your ideal tech partner.
        </p>

        {/* --- Image + Text Section --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-24">
          <div>
            <img
              src="/assets/img1.jpg" // 🔁 Change image path if needed
              alt="Why Choose Us"
              className="w-full rounded-xl shadow-md"
            />
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">
              Empowering Innovation Through Custom Technology
            </h3>
            <p className="text-gray-700 leading-relaxed">
              At ProSite, we go beyond development — we help businesses grow with smart, scalable, and user-focused solutions. Our approach ensures that every product we build aligns with your brand, goals, and market. Whether it's a fresh startup or an enterprise transformation, we deliver with clarity, care, and commitment.
            </p>
          </div>
        </div>

        {/* --- Card Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-28">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-gray-100 p-8 min-h-[420px] rounded-xl shadow hover:shadow-lg transition duration-300 flex flex-col justify-start items-center text-center"
            >
              <div className="text-5xl mb-4">{card.icon}</div>
              <h3 className="font-semibold text-xl mb-2">{card.title}</h3>
              <p className="text-gray-600">{card.description}</p>
            </div>
          ))}
        </div>

        {/* --- Testimonials --- */}
        <div className="bg-gray-100 rounded-3xl p-10 md:p-16 mb-28">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
            What Our Clients Say
          </h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            Don't just take our word for it – hear from our satisfied clients.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-stretch gap-10">
            {testimonials.map((t, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-6 w-full max-w-sm shadow-md hover:shadow-xl transition duration-300 flex flex-col text-center"
              >
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-20 h-20 rounded-full object-cover mx-auto mb-4"
                />
                <p className="text-gray-700 italic mb-4">“{t.text}”</p>
                <h4 className="font-semibold">{t.name}</h4>
                <p className="text-sm text-gray-500">{t.title}</p>
                <div className="flex justify-center mt-2">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">
                      ★
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- CTA --- */}
        <div className="bg-blue-600 text-white text-center py-20 mt-20 rounded-xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg mb-10 max-w-3xl mx-auto">
            ProSite is your trusted partner for scalable, custom-built software solutions. Let’s collaborate and make something amazing together.
          </p>
          <Link href="#contact-section">
            <button className="bg-white text-gray-700 font-medium px-6 py-3 rounded-lg shadow hover:shadow-lg hover:bg-gray-100 transition inline-flex items-center gap-2">
              Get In Touch <span>→</span>
            </button>
          </Link>
        </div>

        {/* --- Contact Section --- */}
        <div id="contact-section" className="bg-gray-100 py-20 mt-28 rounded-xl px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4">Let’s Connect</h2>
            <p className="text-gray-700 mb-10">
              Have a project in mind? Just want to say hello? Fill out the form below or reach out via email.
            </p>
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="border border-gray-300 rounded px-4 py-2 w-full"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="border border-gray-300 rounded px-4 py-2 w-full"
                />
              </div>
              <textarea
                placeholder="Your Message"
                rows="4"
                className="border border-gray-300 rounded px-4 py-2 w-full mb-6"
              ></textarea>
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
