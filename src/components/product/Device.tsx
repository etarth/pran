"use client";

import React from "react";
import Image from "next/image";

const Device = () => {
  const deviceCards = [
    {
      title: "Device explode diagram",
      description:
        "This exploded diagram shows the internal components of Pran, a device designed to efficiently deliver therapeutic compounds like NAD+ using advanced electrospray technology for precise atomization.",
      image: "/images/deviceExplode.png",
      alt: "Device explode diagram"
    },
    {
      title: "ESP32 – Smart Controller",
      description:
        "Acts as the brain of the device, managing voltage, spray patterns, and safety. Enables Bluetooth/Wi-Fi for app connectivity and electrospray parameter updates.",
      image: "/images/esp32.png",
      alt: "ESP32 Smart Controller"
    },
    {
      title: "Electrospray Nozzle – Atomization System",
      description:
        "Uses high voltage to create fine droplets through electrospray ionization, ensuring optimal particle size for effective compound delivery without thermal degradation.",
      image: "/images/electrospray.png",
      alt: "Electrospray Nozzle Atomization System"
    },
    {
      title: "Battery – Power Supply",
      description:
        "High-voltage capable battery powers the electrospray system, designed for consistent performance and supports fast charging for reliable operation.",
      image: "/images/battery.png",
      alt: "Battery Power Supply"
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
                <h3 className="text-md font-bold text-black">
                  Device explode diagram
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  This exploded diagram shows the internal components of Pran, a
                  device designed to efficiently deliver therapeutic compounds
                  like NAD+ using advanced electrospray technology for precise
                  atomization and optimal bioavailability.
                </p>
              </div>

              <div className="w-1/2 bg-white rounded-md relative">
                <Image
                  src="/images/deviceExplode.png"
                  alt="Pran electrospray device"
                  fill
                  className="object-cover rounded-md"
                />
              </div>
            </div>

            <div className="min-w-[900px] h-[420px] bg-gray-100 rounded-md snap-center flex p-2">
              <div className="w-1/2 flex flex-col gap-2">
                <div className="w-full h-full bg-gray-200 rounded-md relative">
                  <Image
                    src="/images/esp32.png"
                    alt="ESP32 Smart Controller"
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
                <div className="flex w-full h-full gap-2">
                  <div className="w-full h-full bg-gray-200 rounded-md relative">
                    <Image
                      src="/images/battery.png"
                      alt="Battery Power Supply"
                      fill
                      className="object-cover rounded-md"
                    />
                  </div>
                  <div className="w-full h-full bg-gray-200 rounded-md relative">
                    <Image
                      src="/images/electrospray.png"
                      alt="Electrospray Nozzle System"
                      fill
                      className="object-cover rounded-md"
                    />
                  </div>
                </div>
              </div>

              <div className="w-1/2 p-8 flex flex-col justify-center gap-6">
                <h3 className="text-lg font-bold text-black text-start mb-2">
                  Main Components
                </h3>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-bold text-black mb-1">
                      ESP32 – Smart Controller
                    </h4>
                    <p className="text-gray-600 text-xs leading-relaxed">
                      Acts as the brain of the device, managing voltage levels,
                      spray patterns, and safety protocols. Enables Bluetooth/Wi-Fi 
                      for app connectivity and electrospray parameter updates.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-black mb-1">
                      Electrospray Nozzle – Atomization System
                    </h4>
                    <p className="text-gray-600 text-xs leading-relaxed">
                      Uses high voltage to create fine droplets through electrospray
                      ionization, ensuring optimal particle size for effective 
                      compound delivery without thermal degradation.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-black mb-1">
                      Battery – Power Supply
                    </h4>
                    <p className="text-gray-600 text-xs leading-relaxed">
                      High-voltage capable battery powers the electrospray system,
                      designed for consistent performance and supports fast 
                      charging for reliable operation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Carousel - Updated with 4 Cards */}
        <div className="w-full md:hidden">
          <div className="flex overflow-x-scroll snap-x snap-mandatory scrollbar-hide gap-4 px-4">
            {deviceCards.map((card, index) => (
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
      </div>
    </section>
  );
};

export default Device;