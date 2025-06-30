"use client";

import Image from "next/image";
import React from "react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <section className="bg-background h-screen">
      <div className="flex flex-col justify-center gap-12 px-6 w-full h-full items-center bg-neutral-50 relative">
        
        {/* Content Section */}
        <div className="flex w-full justify-between max-w-6xl z-10">
          {/* Text Content */}
          <div className="w-64 md:w-96 text-start">
            <h6 className="text-md text-black font-bold mb-6">What is Pran?</h6>
            <p className="text-gray-600">
              Pran is a gentle and natural herbal solution designed to support
              holistic well-being. Our products are rooted in traditional wisdom
              and modern science to bring calm and clarity.
            </p>
          </div>

          {/* Desktop Submenu - Hidden on mobile */}
          <div className="hidden md:flex flex-col items-start justify-between py-2">
            <button
              onClick={() => scrollToSection('cartridge')}
              className="hover:text-black text-gray-500 text-sm transition-colors cursor-pointer text-left"
            >
              Cartridge
            </button>
            <button
              onClick={() => scrollToSection('device')}
              className="hover:text-black text-gray-500 text-sm transition-colors cursor-pointer text-left"
            >
              Device
            </button>
            <button
              onClick={() => scrollToSection('implementation-plan')}
              className="hover:text-black text-gray-500 text-sm transition-colors cursor-pointer text-left"
            >
              Implementation plan
            </button>
          </div>
        </div>

        {/* Responsive Image */}
        <div className="absolute bg-gray-200 w-4/5 md:w-2/5 h-4/5 md:h-4/5 rounded-md overflow-hidden z-0">
          <Image
            src=""
            alt="Pran logo"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;