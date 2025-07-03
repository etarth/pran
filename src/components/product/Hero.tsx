"use client";

import Image from "next/image";
import React from "react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section className="bg-background h-screen">
      <div className="flex flex-col justify-center gap-12 px-6 w-full h-full items-center bg-neutral-50 relative">
        {/* Mobile Layout */}
        <div className="md:hidden flex flex-col items-center justify-start gap-8 z-10 h-full pt-16">
          {/* Image on top for mobile */}
          <div className="bg-[#eeeeee] w-full h-3/5 rounded-md overflow-hidden relative">
            <Image
              src="/images/device.png"
              alt="Pran device"
              fill
              className="object-cover"
            />
          </div>

          {/* Text below image for mobile */}
          <div className="text-center px-4">
            <h6 className="text-md text-black font-bold mb-6">Pran</h6>
            <p className="text-gray-600">
              Your health, reimagined. <br/>
              Pran simplifies wellness through an
              innovative device and smart cartridge system—bringing convenience
              and care into your daily routine, painlessly.
            </p>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex w-full justify-between max-w-6xl z-10">
          {/* Text Content */}
          <div className="w-96 text-start">
            <h6 className="text-md text-black font-bold mb-6">Pran</h6>
            <p className="text-gray-600">
              Your health, reimagined. <br/>
              Pran simplifies wellness through an
              innovative device and smart cartridge system—bringing convenience
              and care into your daily routine, painlessly.
            </p>
          </div>

          {/* Desktop Submenu */}
          <div className="flex flex-col items-start justify-between py-2">
            <button
              onClick={() => scrollToSection("cartridge")}
              className="hover:text-black text-gray-500 text-sm transition-colors cursor-pointer text-left"
            >
              Cartridge
            </button>
            <button
              onClick={() => scrollToSection("device")}
              className="hover:text-black text-gray-500 text-sm transition-colors cursor-pointer text-left"
            >
              Device
            </button>
            <button
              onClick={() => scrollToSection("implementation-plan")}
              className="hover:text-black text-gray-500 text-sm transition-colors cursor-pointer text-left"
            >
              Implementation plan
            </button>
          </div>
        </div>

        {/* Desktop Image - Positioned absolutely */}
        <div className="hidden md:block absolute bg-[#eeeeee] w-2/5 h-4/5 rounded-md overflow-hidden z-0">
          <Image
            src="/images/device.png"
            alt="Pran device"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
