"use client";

import React from "react";

const ImplPlan = () => {
  const milestones = [
    {
      id: 1,
      year: "2025",
      description: "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.",
    },
    {
      id: 2,
      year: "2025",
      description: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      id: 3,
      year: "2025",
      description: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      id: 4,
      year: "2025",
      description: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
        id: 5,
        year: "2025",
        description: "Lorem ipsum dolor sit amet consectetur.",
      }
  ];

  return (
    <section className="py-20 bg-[#F7F7F7]">
      <div className="flex flex-col max-w-6xl mx-auto px-4 gap-12">
        <h2 className="text-md font-bold text-black text-left">
          Implementation Plan
        </h2>

        <div className="relative">
          <div className="flex overflow-scroll">
            {milestones.map((milestone, index) => (
              <div key={milestone.id} className="flex flex-col gap-2 relative w-fit">
                {/* Timeline Dot and Line */}
                <div className="flex items-center w-[300px]">
                  <div className="w-6 h-6 bg-gray-400 rounded-full"></div>
                  {/* Only show line if not the last item */}
                  {index < milestones.length - 1 && (
                    <div className="w-full top-6 left-6 right-6 h-0.5 bg-gray-400"></div>
                  )}
                </div>

                {/* Content */}
                <div className="space-y-4 pr-4">
                  <h3 className="text-md font-medium text-black">
                    {milestone.year}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Join Us Button */}
        <div className="flex justify-start">
          <button className="bg-black text-white px-8 py-2 rounded-md text-sm font-medium hover:bg-gray-800 transition-colors">
            join us
          </button>
        </div>
      </div>
    </section>
  );
};

export default ImplPlan;