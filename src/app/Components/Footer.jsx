import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
} from "react-icons/hi";

export default function Footer() {
  return (
    <>
      {/* === Floating Vertical Social Bar === */}
      <div className="fixed top-1/2 left-0 transform -translate-y-1/2 z-50 hidden lg:block">
        <div className="flex flex-col space-y-1">
          <a
            href="https://www.facebook.com/people/Virtutix/61556397495998/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white p-4 flex justify-center items-center hover:bg-black transition"
          >
            <FaFacebookF size={20} />
          </a>
          <a
            href="https://twitter.com/VirtutixHQ"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-sky-400 text-white p-4 flex justify-center items-center hover:bg-black transition"
          >
            <FaTwitter size={20} />
          </a>
          <a
            href="https://www.linkedin.com/company/virtutix/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 text-white p-4 flex justify-center items-center hover:bg-black transition"
          >
            <FaLinkedinIn size={20} />
          </a>
          <a
            href="https://www.instagram.com/virtutix/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-pink-600 text-white p-4 flex justify-center items-center hover:bg-black transition"
          >
            <FaInstagram size={20} />
          </a>
        </div>
      </div>

      {/* === Main Footer === */}
      <footer className="bg-gray-900 text-white px-6 md:px-20 py-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* --- Company Info --- */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-blue-600 text-white w-8 h-8 flex items-center justify-center rounded-md font-bold text-lg">
                V
              </div>
              <h2 className="text-xl font-semibold">Virtutix</h2>
            </div>
            <p className="text-gray-300 mb-6">
              We are a data-driven technology company helping businesses grow
              through innovative software solutions across industries.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/people/Virtutix/61556397495998/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href="https://twitter.com/VirtutixHQ"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="https://www.linkedin.com/company/virtutix/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                <FaLinkedinIn size={20} />
              </a>
              <a
                href="https://www.instagram.com/virtutix/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                <FaInstagram size={20} />
              </a>
            </div>
          </div>

          {/* --- Quick Links --- */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* --- Contact Info --- */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start gap-2">
                <HiOutlineMail className="text-blue-500 mt-1" />
                <span>hello@virtutix.com</span>
              </li>
              <li className="flex items-start gap-2">
                <HiOutlinePhone className="text-blue-500 mt-1" />
                <span>+91 99999 99999</span>
              </li>
              <li className="flex items-start gap-2">
                <HiOutlineLocationMarker className="text-blue-500 mt-1" />
                <span>Virtutix HQ, Hyderabad, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* --- Bottom Footer --- */}
        <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-400 text-sm">
          © 2024 Virtutix. All rights reserved.
        </div>
      </footer>
    </>
  );
}
