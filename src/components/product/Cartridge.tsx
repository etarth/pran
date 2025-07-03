'use client';

import React from 'react';
import Image from 'next/image';

const Cartridge = () => {
  const cartridgeCards = [
    {
      title: "Cartridge",
      description: "The cartridge holds the liquid formulation (e.g., NAD+ or other treatments). It's designed for easy replacement, leak prevention, and optimal flow to the electrospray nozzle, ensuring smooth and efficient atomization delivery.",
      image: "/images/cartridge.png",
      alt: "Cartridge"
    },
    {
      title: "Cartridge explode diagram",
      description: "The exploded diagram highlights three essential components: the mouthpiece for aerosol intake, the cartridge reservoir for holding the therapeutic liquid, and the electrospray system that creates fine droplets through ionization for optimal delivery.",
      image: "/images/cartridgeExplode.png",
      alt: "Cartridge explode diagram"
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
                className="flex-none w-80 bg-gray-100 rounded-md snap-center p-2 flex flex-col"
              >
                <div className="p-4 flex-grow">
                  {/* Header */}
                  <h3 className="text-md font-bold text-black mb-4">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {card.description}
                  </p>
                </div>

                {/* Square Photo - Sticks to bottom */}
                <div className="w-full aspect-square bg-white rounded-md relative mt-auto">
                  <Image
                    src={card.image}
                    alt={card.alt}
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop - Fixed Grid */}
        <div className="hidden md:block w-full">
          <div className="grid grid-cols-2 gap-6 px-4 max-w-4xl mx-auto">
            {cartridgeCards.map((card, index) => (
              <div
                key={index}
                className="bg-gray-100 rounded-md p-4 flex flex-col h-fit"
              >
                <div className="flex-grow">
                  {/* Header */}
                  <h3 className="text-md font-bold text-black mb-6">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {card.description}
                  </p>
                </div>

                {/* Square Photo - Sticks to bottom */}
                <div className="w-full aspect-square bg-white rounded-md relative mt-6">
                  <Image
                    src={card.image}
                    alt={card.alt}
                    fill
                    className="object-cover rounded-md"
                  />
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