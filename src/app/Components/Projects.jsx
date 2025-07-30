import Link from "next/link";

const projects = [
  {
    title: "Creative Portfolio",
    image: "/images/creative.jpg",
    link: "/projects/creative",
  },
  {
    title: "Business Website",
    image: "/images/business.png",
    link: "/projects/business",
  },
  {
    title: "E-commerce UI",
    image: "/images/ecommerce.png",
    link: "/projects/ecommerce",
  },
];

export default function Projects() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-6">Project Showcase</h2>
        <p className="text-center text-gray-600 mb-10">
          Browse through our beautifully crafted templates ready for customization.
          Each project is designed to be fully responsive and easy to adapt to your needs.
          Whether you need a portfolio, business site, or e-commerce UI, we have you covered.
          
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col"
            >
              <img
                src="/image.jpg" /* ✅ Use dynamic image */
                alt={project.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <Link href="https://virtutix.com/"> 
              {/* <Link href="https://www.youtube.com/@VIRTUTIX"></Link>Optional: change to real links */}
                <span className="text-pink-600 hover:underline mt-auto cursor-pointer">
                  View Project →
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
