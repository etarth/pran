"use client";

import React from "react";

const Device = () => {
  const deviceCards = [
    {
      title: "Lorem ipsum",
      description:
        "Lorem ipsum dolor sit amet consectetur. Lorem tellus dui auctor pharetra aliquam mollis nam fusce. Tortor congue in tempor etiam ac. Ullamcorper convallis at nunc id vitae. Nisl id nisl nunc eros pretium id tortor facilisi ultrices.",
      image: "Device Image 1",
    },
    {
      title: "Lorem ipsum",
      description:
        "Lorem ipsum dolor sit amet consectetur. Lorem tellus dui auctor pharetra aliquam mollis nam fusce. Tortor congue in tempor etiam ac. Ullamcorper convallis at nunc id vitae. Nisl id nisl nunc eros pretium id tortor facilisi ultrices.",
      image: "Device Image 2",
    },
    {
      title: "Device Title 3",
      description:
        "Lorem ipsum dolor sit amet consectetur. Lorem tellus dui auctor pharetra aliquam mollis nam fusce. Tortor congue in tempor etiam ac. Ullamcorper convallis at nunc id vitae. Nisl id nisl nunc eros pretium id tortor facilisi ultrices.",
      image: "Device Image 3",
    },
  ];

  return (
    <section className="py-20 bg-white h-fit w-screen">
      <div className="flex flex-col max-w-6xl h-fit justify-center mx-auto items-center gap-12 py-12">
        <h2 className="text-black text-md font-bold">Device</h2>

        {/* Desktop Carousel */}
        <div className="w-full relative hidden md:block">
          <div
            className="flex h-fit w-full gap-6 overflow-x-auto rounded-md snap-x snap-mandatory scrollbar-hide px-4"
            style={{
              scrollbarWidth: "none" /* Firefox */,
              msOverflowStyle: "none" /* IE and Edge */,
            }}
          >
            <div className="min-w-[900px] h-[420px] bg-gray-100 rounded-md snap-center flex p-2">
              <div className="w-1/2 p-12 flex flex-col justify-center gap-12">
                <h3 className="text-md font-bold text-black">Lorem ipsum</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur. Lorem tellus dui
                  auctor pharetra aliquam mollis nam fusce. Tortor congue in
                  tempor etiam ac. Ullamcorper convallis at nunc id vitae. Nisl
                  id nisl nunc eros pretium id tortor facilisi ultrices.
                </p>
              </div>

              <div className="w-1/2 bg-gray-200 rounded-md flex items-center justify-center">
                <span className="text-gray-400">Device Image</span>
              </div>
            </div>

            <div className="min-w-[900px] h-[420px] bg-gray-100 rounded-md snap-center flex p-2">
              <div className="w-1/2 flex flex-col gap-2">
                <div className="w-full h-full bg-gray-200 rounded-md"></div>
                <div className="flex w-full h-full gap-2">
                  <div className="w-full h-full bg-gray-200 rounded-md"></div>
                  <div className="w-full h-full bg-gray-200 rounded-md"></div>
                </div>
              </div>

              <div className="w-1/2 p-12 flex flex-col justify-center gap-12 items-center">
                <h3 className="text-md font-bold text-black">Lorem ipsum</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur. Lorem tellus dui
                  auctor pharetra aliquam mollis nam fusce. Tortor congue in
                  tempor etiam ac. Ullamcorper convallis at nunc id vitae. Nisl
                  id nisl nunc eros pretium id tortor facilisi ultrices.
                </p>
              </div>
            </div>
            <div className="min-w-[900px] h-[420px] bg-gray-100 rounded-md snap-center flex"></div>
          </div>
        </div>

        {/* Mobile Carousel - Consistent Layout */}
        <div className="w-full md:hidden">
          <div className="flex overflow-x-scroll snap-x snap-mandatory scrollbar-hide gap-4 px-4">
            {deviceCards.map((card, index) => (
              <div
                key={index}
                className="flex-none w-80 bg-gray-100 rounded-md snap-center p-2"
              >
                <div className="p-4">
                  {/* Header */}
                  <h3 className="text-md font-bold text-black mb-4">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {card.description}
                  </p>
                </div>

                {/* Square Photo */}
                <div className="w-full aspect-square bg-gray-200 rounded-md flex items-center justify-center">
                  <span className="text-gray-400">{card.image}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Device;
