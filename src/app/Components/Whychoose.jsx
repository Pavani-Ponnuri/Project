import React from "react";
import Link from "next/link";

export default function WhyChoose() {
  const cards = [
    {
      title: "Custom Solutions",
      description:
        "A customised solution is a tailored answer to the specific training needs of a company or organisation. It is designed through a co-creation process, with the objective to accelerate business and strengthen individual skills and the team transformation process. Flexibility reigns supreme in these projects.",
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
      text: "Working with [SoftwareCompany] has been an absolute pleasure. Their team of skilled professionals is not only knowledgeable in their field but also dedicated to providing top-notch service and support. They took the time to understand our unique needs and developed a tailored solution that exceeded our expectations. I cannot recommend [SoftwareCompany] highly enough for any business seeking innovative software solutions and exceptional customer care.",
      title: "CEO, TechCorp",
      stars: 5,
      img: "/assets/client1.jpg",
    },
    {
      stars: 5,
      text: "If you’re in search of a reliable, innovative software company, look no further than [SoftwareCompany]. Their team of seasoned professionals consistently exceeds expectations, offering cutting-edge solutions and exceptional customer service. They took the time to understand our specific needs and provided a tailor-made solution that greatly improved our operations. We are thrilled with the results and highly recommend [SoftwareCompany] for any software development needs.",
      name: "Michael Chen",
      title: "Founder, StartupX",
      img: "/assets/client2.jpg",
    },
    {
      stars: 4,
      text: "The staff was great. The receptionists were very helpful and answered all our questions. The room was clean and bright, and the room service was always on time. Will be coming back! Thank you so much.",
      name: "Emily Rodriguez",
      title: "Director, Innovation Lab",
      img: "/assets/client3.jpg",
    },
  ];

  return (
    <section className="bg-white py-24 w-full">
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        {/* --- Why Choose Us --- */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Why Choose ProSite?
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Discover the key benefits that make us your ideal tech partner.
        </p>
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

        {/* --- Testimonials Section --- */}
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

        {/* --- CTA Section --- */}
        <div className="bg-blue-600 text-white text-center py-20 mt-20 rounded-xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg mb-10">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
          </p>
          <Link href="/contact">
            <button className="bg-white text-gray-700 font-medium px-6 py-3 rounded-lg shadow hover:shadow-lg hover:bg-gray-100 transition inline-flex items-center gap-2">
              Get In Touch <span>→</span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
