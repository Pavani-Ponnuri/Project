"use client";

import Image from "next/image";
import Projects from "./Components/Projects";
import Navbar from "./Components/Navbar";
// import CallToAction from "./Components/CTA";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import React from "react";
import Testimonials from "./Components/Testimonials";
import WhyChoose from "./Components/Whychoose";

export default function Home() {
  return (
    <div className="font-sans min-h-screen flex flex-col p-6 sm:p-10">
      {/* Navbar stays on top */}
      {/* <Navbar /> */}

      <main className="flex flex-col items-center sm:items-start gap-10 flex-grow">
        {/* Hero section */}
        <Hero />
        <WhyChoose />

        {/* Logos */}
        <div className="flex gap-6 items-center justify-center">
          {/* <Image
            src="/next.svg"
            alt="Next.js Logo"
            width={120}
            height={60}
            style={{ height: "auto", width: "auto", objectFit: "contain" }}
            priority
          /> */}
          <Image
            src="/vercel.svg"
            alt="Vercel Logo"
            width={120}
            height={60}
            //style={{ height: "auto", width: "auto", objectFit: "contain" }}
          />
        </div>
      <div>
        {/* Projects section */}
        {/* <Projects /> */}

        {/* CTA section */}
        {/* <CallToAction /> */}

        {/* <Footer /> */}
</div>
      </main>
      </div>
        
  );
}
