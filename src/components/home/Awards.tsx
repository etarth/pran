"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const Awards = () => {
  return (
    <section className="py-20 bg-[#F7F7F7]">
      <div className="flex flex-col max-w-6xl mx-auto items-center gap-12">
        <h2 className="text-black text-md font-bold">Awards</h2>

        <div className="flex gap-6 overflow-x-scroll w-full justify-center px-6 snap-x">
          <div className="flex flex-col justify-center gap-4 snap-center w-[350px] flex-shrink-0">
            <div className="relative bg-gray-200 w-full h-[200px] rounded-lg overflow-hidden">
              <Image
                src="/images/ysep.JPG"
                alt="Pran logo"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-black text-sm font-medium">
                Young Startup Entrepreneur Program 2025
              </h3>
              <p className="text-gray-500 text-sm">
                3rd place out of a total of 160 participants after many rounds
                of mentorship and pitching
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center gap-4 snap-center w-[350px] flex-shrink-0">
            <div className="relative bg-gray-200 w-full h-[200px] rounded-lg overflow-hidden">
              <Image
                src="/images/custl.JPG"
                alt="Pran logo"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-black text-sm font-medium">
                Chula Startup Thailand League 2025
              </h3>
              <p className="text-gray-500 text-sm">
                Won the opportunity to represent Chula, after competing with
                other university-level startups
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center gap-4 snap-center w-[350px] flex-shrink-0">
            <div className="relative bg-gray-200 w-full h-[200px] rounded-lg overflow-hidden">
              <Image
                src="/images/stl.JPG"
                alt="Pran logo"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-black text-sm font-medium">
                Startup Thailand League 2025 (regional)
              </h3>
              <p className="text-gray-500 text-sm">
                Awarded 2nd place at the regional level out of more than 135
                teams from , advancing to the national round.
              </p>
            </div>
          </div>
        </div>

        <Link
          href={"/about-us"}
          className="bg-accent text-white bg-black w-fit text-sm px-8 py-2 rounded-md hover:opacity-90"
        >
          See our full journey
        </Link>
      </div>
    </section>
  );
};

export default Awards;