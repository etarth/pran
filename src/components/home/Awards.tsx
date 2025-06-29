"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const Awards = () => {
  return (
    <section className="py-20 bg-[#F7F7F7]">
      <div className="flex flex-col max-w-6xl mx-auto items-center gap-12">
        <h2 className="text-black text-md font-bold">Awards</h2>

        <div className="flex gap-6 overflow-x-scroll w-full px-6 snap-x">
          <div className="flex flex-col justify-center gap-4 snap-center">
            <div className="relative bg-gray-200 w-full h-fit rounded-lg overflow-hidden">
              <Image
                src="/images/"
                alt="Pran logo"
                width={300}
                height={150}
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-black text-sm font-medium">Young Startup Entrepreneur Program 2025</h3>
              <p className="text-gray-500 text-sm">
                Description for award. Highlighting achievement or recognition
                in the field.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center gap-4 snap-center">
            <div className="relative bg-gray-200 w-full h-fit rounded-lg overflow-hidden">
              <Image
                src="/images/"
                alt="Pran logo"
                width={300}
                height={150}
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-black text-sm font-medium">Chula Startup Thailand League 2025</h3>
              <p className="text-gray-500 text-sm">
                Description for award. Highlighting achievement or recognition
                in the field.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center gap-4 snap-center">
            <div className="relative bg-gray-200 w-full h-fit rounded-lg overflow-hidden">
              <Image
                src="/images/"
                alt="Pran logo"
                width={300}
                height={150}
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-black text-sm font-medium">Startup Thailand League 2025 (regional)</h3>
              <p className="text-gray-500 text-sm">
                Description for award. Highlighting achievement or recognition
                in the field.
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
