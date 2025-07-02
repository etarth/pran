"use client";

import React from "react";
import { useModal } from "@/contexts/ModalContext";

const ImplPlan = () => {
  const { setContactModalOpen } = useModal();
  
  const milestones = [
    {
      id: 1,
      year: "2025",
      phase: "R&D & Patent Phase",
      description: "Discover engineering process, file PCT patent, define target markets, and file national patents.",
    },
    {
      id: 2,
      year: "2025-2026", 
      phase: "ISO & Regulatory",
      description: "Research at ISO 17025 lab, pass ISO 10993 tests, and setup ISO 13485 factory for manufacturing standards.",
    },
    {
      id: 3,
      year: "2026",
      phase: "Preclinical Studies",
      description: "Conduct preclinical trials to establish safety and efficacy data before human testing.",
    },
    {
      id: 4,
      year: "2026-2027",
      phase: "Phase I Clinical Trial",
      description: "First human testing phase to evaluate safety, dosage, and side effects in small groups.",
    },
    {
      id: 5,
      year: "2027-2029",
      phase: "Phase II & III Clinical Trials",
      description: "Large-scale clinical trials to confirm effectiveness and monitor adverse reactions before market approval.",
    }
  ];

  return (
    <section className="py-20 bg-[#F7F7F7]">
      <div className="flex flex-col max-w-6xl mx-auto px-8 gap-12">
        <h2 className="text-md font-bold text-black text-left">
          Implementation Plan
        </h2>

        <div className="relative">
          <div className="flex overflow-scroll">
            {milestones.map((milestone, index) => (
              <div key={milestone.id} className="flex flex-col gap-2 relative w-fit">
                {/* Timeline Dot and Line */}
                <div className="flex items-center w-[300px]">
                  <div className={`w-6 h-6 rounded-full ${
                    index === 0 ? 'bg-[#05ac8a]' : 'bg-gray-400'
                  }`}></div>
                  {/* Only show line if not the last item */}
                  {index < milestones.length - 1 && (
                    <div className={`w-full top-6 left-6 right-6 h-0.5 ${
                      index === 0 ? 'bg-[#05ac8a]' : 'bg-gray-400'
                    }`}></div>
                  )}
                </div>

                {/* Content */}
                <div className="space-y-4 pr-4">
                  <div className="space-y-1">
                    <h3 className="text-md font-medium text-black">
                      {milestone.year}
                    </h3>
                    <h4 className="text-sm font-medium text-[#05ac8a]">
                      {milestone.phase}
                    </h4>
                  </div>
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
          <button 
            onClick={() => setContactModalOpen(true)}
            className="bg-black text-white px-8 py-2 rounded-md text-sm font-medium transition-colors hover:bg-[#05ac8a]"
          >
            join us
          </button>
        </div>
      </div>
    </section>
  );
};

export default ImplPlan;