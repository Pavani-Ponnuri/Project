import React from "react";

export default function Hero() {
  return (
    <section className="w-full flex flex-col md:flex-row items-center justify-between gap-8 py-20 bg-gradient-to-r from-gray to-gray-900">
      {/* Left content */}
      <div className="flex-1 px-6 md:px-12 text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-extrabold text-black leading-tight">
          Professional Solutions for Your Business
        </h1>
        <p className="mt-6 text-lg text-black-300">
          We help businesses grow and succeed with innovative strategies and expert execution.
        </p>
        <button className="mt-8 bg-blue-600 text-white  px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300">
          Get Started
        </button>
      </div>

      {/* Right side image */}
      <div
        className="flex-1 h-[500px] md:h-[700px] bg-cover bg-center"
        style={{
          backgroundImage: "url('/assets/backimg.jpg')",
        }}
      ></div>
    </section>
  );
}
