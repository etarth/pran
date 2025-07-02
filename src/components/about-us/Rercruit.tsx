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
      title: "Respiratory Health Expert",
      description: "Support us in ensuring the clinical safety and feasibility of inhalable wellness delivery.",
      jobDescription: [
        "Advise on pulmonary absorption and respiratory system safety",
        "Help assess vitamin/formula suitability for inhalation use", 
        "Contribute to clinical planning and build credibility in medical and partner discussions"
      ]
    },
    {
      id: 2,
      title: "Legal & Regulatory Expert",
      description: "Help us navigate the legal landscape of wellness technology.",
      jobDescription: [
        "Provide insights on health regulations, FDA classification, and compliance pathways",
        "Advise on intellectual property and technology licensing strategies",
        "Assist with legal agreements and partnerships with clinics and institutions"
      ]
    },
    {
      id: 3,
      title: "Finance & Strategy Expert",
      description: "Build the financial backbone of PRAN and help us scale smart.",
      jobDescription: [
        "Develop and maintain financial models, revenue strategy, and forecasts",
        "Analyze cost structure, pricing, and ROI for clinic partners",
        "Support fundraising efforts and investor relations"
      ]
    }
  ];

  const togglePosition = (index: number) => {
    setOpenPosition(openPosition === index ? -1 : index);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <h2 className="text-black text-md font-bold">Be a part of our journey</h2>
        </div>

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
                <div className="px-4 pb-6 space-y-4">
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {position.description}
                  </p>
                  <div>
                    <h4 className="text-sm font-medium text-black mb-2">Job Description:</h4>
                    <ul className="space-y-1">
                      {position.jobDescription.map((item, idx) => (
                        <li key={idx} className="text-gray-500 text-sm leading-relaxed">
                          • {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Join Us Button */}
        <div className="text-center mt-12">
          <button 
            onClick={() => setContactModalOpen(true)}
            className="bg-black text-white px-8 py-2 rounded-md text-sm font-medium hover:bg-[#05ac8a] transition-colors hover:cursor-pointer"
          >
            join us
          </button>
        </div>
      </div>
    </section>
  );
};

export default Recruit;