'use client';

import React, { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import { useModal } from "@/contexts/ModalContext";

const Recruit = () => {
  const { setContactModalOpen } = useModal();
  const [openPosition, setOpenPosition] = useState(0); // First position open by default

  const positions = [
    {
      id: 1,
      title: "Open position 1",
      description: "Lorem ipsum dolor sit amet consectetur. Lorem tellus dui auctor pharetra aliquam mollis nam fusce. Tortor congue in tempor etiam ac. Ullamcorper convallis at nunc id vitae. Nisl id nisl nunc eros pretium id tortor facilisi ultrices."
    },
    {
      id: 2,
      title: "Open position 2",
      description: "Lorem ipsum dolor sit amet consectetur. Lorem tellus dui auctor pharetra aliquam mollis nam fusce. Tortor congue in tempor etiam ac. Ullamcorper convallis at nunc id vitae. Nisl id nisl nunc eros pretium id tortor facilisi ultrices."
    },
    {
      id: 3,
      title: "Open position 3",
      description: "Lorem ipsum dolor sit amet consectetur. Lorem tellus dui auctor pharetra aliquam mollis nam fusce. Tortor congue in tempor etiam ac. Ullamcorper convallis at nunc id vitae. Nisl id nisl nunc eros pretium id tortor facilisi ultrices."
    }
  ];

  const togglePosition = (index: number) => {
    setOpenPosition(openPosition === index ? -1 : index);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 space-y-6">
        {/* Header */}
        <h2 className="text-black text-md text-center font-bold">Be a part of our journey</h2>

        {/* Accordion */}
        <div className="space-y-0">
          {positions.map((position, index) => (
            <div key={position.id} className="border-b border-gray-300">
              {/* Accordion Header */}
              <button
                onClick={() => togglePosition(index)}
                className="w-full flex justify-between items-center py-6 text-left transition-colors px-4 hover:cursor-pointer"
              >
                <h3 className="text-md font-medium text-black">
                  {position.title}
                </h3>
                <div className="flex-shrink-0 ml-4">
                  {openPosition === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-600" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-600" />
                  )}
                </div>
              </button>

              {/* Accordion Content */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openPosition === index
                    ? 'max-h-96 opacity-100'
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-4 pb-6">
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {position.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Join Us Button */}
        <div className="text-center mt-12">
          <button 
            onClick={() => setContactModalOpen(true)}
            className="bg-black text-white px-8 py-2 rounded-md text-sm font-medium hover:bg-gray-800 transition-colors hover:cursor-pointer"
          >
            join us
          </button>
        </div>
      </div>
    </section>
  );
};

export default Recruit;