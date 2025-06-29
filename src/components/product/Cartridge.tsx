'use client';

import React from 'react';

const Cartridge = () => {
  const cartridgeCards = [
    {
      title: "Premium Cartridge",
      description: "Lorem ipsum dolor sit amet consectetur. Lorem tellus dui auctor pharetra aliquam mollis nam fusce. Tortor congue in tempor etiam ac. Ullamcorper convallis at nunc id vitae. Nisl id nisl nunc eros pretium id tortor facilisi ultrices.",
      image: "Cartridge Image 1"
    },
    {
      title: "Essential Cartridge",
      description: "Lorem ipsum dolor sit amet consectetur. Lorem tellus dui auctor pharetra aliquam mollis nam fusce. Tortor congue in tempor etiam ac. Ullamcorper convallis at nunc id vitae. Nisl id nisl nunc eros pretium id tortor facilisi ultrices.",
      image: "Cartridge Image 2"
    },
    {
      title: "Advanced Cartridge",
      description: "Lorem ipsum dolor sit amet consectetur. Lorem tellus dui auctor pharetra aliquam mollis nam fusce. Tortor congue in tempor etiam ac. Ullamcorper convallis at nunc id vitae. Nisl id nisl nunc eros pretium id tortor facilisi ultrices.",
      image: "Cartridge Image 3"
    },
    {
      title: "Signature Cartridge",
      description: "Lorem ipsum dolor sit amet consectetur. Lorem tellus dui auctor pharetra aliquam mollis nam fusce. Tortor congue in tempor etiam ac. Ullamcorper convallis at nunc id vitae. Nisl id nisl nunc eros pretium id tortor facilisi ultrices.",
      image: "Cartridge Image 4"
    }
  ];

  return (
    <section className="py-20 bg-background h-screen w-screen">
      <div className="flex flex-col max-w-6xl h-fit justify-center mx-auto items-center gap-12 py-12">
        <h2 className="text-black text-md font-bold">Cartridge</h2>

        {/* Mobile - Scrollable Carousel */}
        <div className="w-full md:hidden">
          <div className="flex overflow-x-scroll snap-x snap-mandatory scrollbar-hide gap-4 px-4">
            {cartridgeCards.map((card, index) => (
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

        {/* Desktop - Fixed Grid */}
        <div className="hidden md:block w-full">
          <div className="grid grid-cols-4 gap-4 px-4">
            {cartridgeCards.map((card, index) => (
              <div
                key={index}
                className="bg-gray-100 rounded-md p-2"
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

export default Cartridge;