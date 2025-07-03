"use client";

import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="bg-background h-screen">
      <div className="flex flex-col gap-12 px-6 w-full h-full text-center">
        <div className="relative bg-gray-200 w-full h-[600px] rounded-lg overflow-hidden">
          {/* Desktop Image */}
          <Image
            src="/images/hero.png"
            alt="Pran hero"
            fill
            style={{ objectFit: "cover" }}
            className="hidden md:block"
          />
          {/* Mobile Image */}
          <Image
            src="/images/heroMobile.png"
            alt="Pran hero mobile"
            fill
            style={{ objectFit: "cover" }}
            className="block md:hidden"
          />
        </div>
        <div className="flex flex-col gap-6">
          <p className="text-gray-500 max-w-2xl mx-auto">
            <span className="font-bold text-black">Pran</span> Lorem ipsum dolor
            sit amet consectetur. Lorem tellus dui auctor pharetra aliquam
            mollis nam fusce. Tortor congue in tempor etiam ac. Ullamcorper
            convallis at nunc id vitae. Nisi id nisl nunc eros pretium id tortor
            facilisi ultrices.
          </p>
          <Image
            src="/images/pran.png"
            alt="Pran logo"
            width={80}
            height={40}
            className="mx-auto my-4"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;