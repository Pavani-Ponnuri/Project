import React from "react";
import Link from "next/link";
export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-md sticky top-0 z-50">
      <div className="text-2xl font-bold text-blue-600">ProSite</div>
      <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
        <li><a href="/" className="hover:text-pink-600">Home</a></li>
        <li><a href="/projects" className="hover:text-pink-600">Projects</a></li>
        <li><a href="/features" className="hover:text-pink-600">Features</a></li>
        <li><a href="/testimonials" className="hover:text-pink-600">Testimonials</a></li>
      </ul>
      
      <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-gold-700 transition-all duration-300">
        Login
      </button>
    </nav>
  );
};

//export default Navbar;
