"use client";

import React from "react";
import Image from "next/image";

const WhyUs = () => {
  return (
    <section className="pt-20 pb-6 bg-white">
      <div className="flex flex-col items-center gap-12">
        <div className="flex flex-col max-w-6xl mx-auto items-center gap-12 px-4">
          <h2 className="text-black text-md font-bold">Why us ?</h2>
          <p className="text-sm text-center text-gray-500 md:max-w-2xl max-w-xs">
            Our team brings together experts from multiple fields, especially
            medical and legal, ensuring PRAN is safe, compliant, and reliable.
            Together, we deliver trusted innovation for better wellness.
          </p>
        </div>

        <div className="w-full px-6 rounded-md">
          <Image
            src="/images/overallTeam.png"
            alt="Overall team"
            width={1920}
            height={600}
            className="w-full h-auto object-cover rounded-md"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
