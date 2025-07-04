"use client";

import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="bg-background h-screen">
      <div className="flex flex-col px-4 py-4 md:py-0 md:px-6 -mt-16 w-full h-full gap-24 md:gap-12 text-center justify-end items-center bg-background">
        <div className="flex flex-col gap-4 md:gap-6">
          <h2 className="text-black text-md font-bold">Team</h2>

          <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base px-2 md:px-0">
            <span className="font-bold text-black">Pran</span> At PRAN, we’re
            building a new way to recharge — delivering essential nutrients
            through your breath, not a needle. We combine science, convenience,
            and comfort to bring wellness into your daily routine — anytime,
            anywhere.
          </p>
        </div>

        {/* Mobile Image - Centered with natural ratio */}
        <div className="relative max-w-4xl w-full md:hidden">
          <Image
            src="/images/teamMobile.png"
            alt="Pran team"
            width={800}
            height={600}
            className="w-full h-auto rounded-md object-cover"
            style={{ maxHeight: "50vh" }}
          />
        </div>

        {/* Desktop Image - Original layout */}
        <div className="relative bg-gray-200 w-full h-2/3 rounded-t-md overflow-hidden mb-0 hidden md:block">
          <Image
            src="/images/team.png"
            alt="Pran team"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
