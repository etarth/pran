"use client";

import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="bg-background h-screen">
      <div className="flex flex-col px-6 w-full h-full gap-12 text-center justify-end bg-background">
        <div className="flex flex-col gap-6">
          <h2 className="text-black text-md font-bold">Team</h2>

          <p className="text-gray-500 max-w-2xl mx-auto">
            <span className="font-bold text-black">Pran</span> Lorem ipsum dolor
            sit amet consectetur. Lorem tellus dui auctor pharetra aliquam
            mollis nam fusce. Tortor congue in tempor etiam ac. Ullamcorper
            convallis at nunc id vitae. Nisi id nisl nunc eros pretium id tortor
            facilisi ultrices.
          </p>
        </div>

        <div className="relative bg-gray-200 w-full h-2/3 rounded-t-lg overflow-hidden">
          <Image
            src="/images/team.png"
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
