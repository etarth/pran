"use client";

import React, { useState } from "react";
import { Linkedin, Facebook, Instagram } from "lucide-react";

const TeamMember = () => {
  const [selectedMember, setSelectedMember] = useState(0);

  const teamMembers = [
    {
      id: 1,
      nickname: "Thame",
      position: "CEO",
      fullName: "Worathas W.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur",
      image: "/api/placeholder/300/400",
      social: {
        linkedin: "#",
        facebook: "#",
        instagram: "#"
      },
    },
    {
      id: 2,
      nickname: "Earth",
      position: "CTO",
      fullName: "Ratchaphon S.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur",
      image: "/api/placeholder/300/400",
      social: {
        linkedin: "https://www.linkedin.com/in/ratchaphon-suwangerd/",
        facebook: "#",
        instagram: "#"
      },
    },
    {
      id: 3,
      nickname: "Music",
      position: "CFO",
      fullName: "Pataraton H.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur",
      image: "/api/placeholder/300/400",
      social: {
        linkedin: "#",
        facebook: "#",
        instagram: "#"
      },
    },
    {
      id: 4,
      nickname: "Amy",
      position: "COO",
      fullName: "Jantemduang K.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur",
      image: "/api/placeholder/300/400",
      social: {
        linkedin: "#",
        facebook: "#",
        instagram: "#"
      },
    },
    {
      id: 5,
      nickname: "Haris",
      position: "CIO",
      fullName: "Haris J.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur",
      image: "/api/placeholder/300/400",
      social: {
        linkedin: "#",
        facebook: "#",
        instagram: "#"
      },
    }
  ];

  const currentMember = teamMembers[selectedMember];
  const otherMembers = teamMembers
    .filter((_, index) => index !== selectedMember)
    .slice(0, 4);

  const handleSocialClick = (url: string) => {
    if (url && url !== "#") {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section className="py-16 md:py-20 bg-white min-h-screen md:min-h-0">
      <div className="flex flex-col gap-12 max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-black text-md font-bold text-center">Team Member</h2>

        {/* Mobile Version - Carousel Layout */}
        <div className="flex-1 w-full md:hidden flex flex-col justify-center min-h-[calc(100vh-12rem)]">
          <div className="space-y-8">
            {/* Scrollable Image Carousel */}
            <div className="relative">
              <div 
                className="flex overflow-x-scroll snap-x snap-mandatory scrollbar-hide gap-4 pb-4"
                onScroll={(e) => {
                  const scrollLeft = e.currentTarget.scrollLeft;
                  const width = e.currentTarget.offsetWidth;
                  const newIndex = Math.round(scrollLeft / (width + 16)); // 16px gap
                  setSelectedMember(Math.max(0, Math.min(newIndex, teamMembers.length - 1)));
                }}
              >
                {teamMembers.map((member) => (
                  <div
                    key={member.id}
                    className="flex-none w-full rounded-lg bg-gray-200 flex items-center justify-center snap-center"
                    style={{ aspectRatio: '9/13' }}
                  >
                    <span className="text-gray-500">{member.nickname}</span>
                  </div>
                ))}
              </div>

              {/* Navigation Dots */}
              <div className="flex justify-start space-x-2 mt-4">
                {teamMembers.map((_, dotIndex) => (
                  <button
                    key={dotIndex}
                    onClick={() => setSelectedMember(dotIndex)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      dotIndex === selectedMember ? 'bg-black' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Member Info Section - Below Picture */}
            <div className="space-y-4">
              <div className="flex flex-col gap-2">
                <h3 className="text-md font-semibold text-black">
                  {currentMember.nickname} {currentMember.position}
                </h3>
                <p className="text-gray-500 text-md">{currentMember.fullName}</p>
              </div>

              <p className="text-gray-600 text-sm leading-relaxed">
                {currentMember.description}
              </p>

              {/* Social Icons */}
              <div className="flex space-x-3">
                <button 
                  onClick={() => handleSocialClick(currentMember.social.linkedin)}
                  className={`w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center transition-colors ${
                    currentMember.social.linkedin !== "#" 
                      ? "hover:bg-gray-600 hover:text-white cursor-pointer" 
                      : "cursor-not-allowed opacity-50"
                  }`}
                  disabled={currentMember.social.linkedin === "#"}
                >
                  <Linkedin className="w-4 h-4" />
                </button>

                <button 
                  onClick={() => handleSocialClick(currentMember.social.facebook)}
                  className={`w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center transition-colors ${
                    currentMember.social.facebook !== "#" 
                      ? "hover:bg-gray-600 hover:text-white cursor-pointer" 
                      : "cursor-not-allowed opacity-50"
                  }`}
                  disabled={currentMember.social.facebook === "#"}
                >
                  <Facebook className="w-4 h-4" />
                </button>

                <button 
                  onClick={() => handleSocialClick(currentMember.social.instagram)}
                  className={`w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center transition-colors ${
                    currentMember.social.instagram !== "#" 
                      ? "hover:bg-gray-600 hover:text-white cursor-pointer" 
                      : "cursor-not-allowed opacity-50"
                  }`}
                  disabled={currentMember.social.instagram === "#"}
                >
                  <Instagram className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Version - Original Layout */}
        <div className="hidden md:flex flex-col gap-12">
          {/* Top Section - Large Selected Member + 4 Other Members */}
          <div className="flex justify-between items-center">
            {/* Large Selected Member Image */}
            <div className="bg-gray-200 rounded-lg h-[420px] w-64 flex items-center justify-center">
              <span className="text-gray-400">Selected Member Image</span>
            </div>
            
            {/* 4 Other Team Members */}
            <div className="flex gap-6">
              {otherMembers.map((member) => {
                const originalIndex = teamMembers.findIndex(
                  (m) => m.id === member.id
                );
                return (
                  <button
                    key={member.id}
                    onClick={() => setSelectedMember(originalIndex)}
                    className="bg-gray-200 rounded-lg h-80 w-52 flex items-center justify-center transition-all hover:bg-gray-300 hover:scale-105"
                  >
                    <span className="text-gray-400 text-sm">
                      {member.nickname}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
          
          {/* Bottom Section - Member Details */}
          <div className="space-y-4">
            <div className="flex flex-col gap-2">
              <h3 className="text-md font-semibold text-black">
                {currentMember.nickname} {currentMember.position}
              </h3>
              <p className="text-gray-500 text-md">{currentMember.fullName}</p>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed w-96">
              {currentMember.description}
            </p>

            {/* Social Icons */}
            <div className="flex space-x-3">
              <button 
                onClick={() => handleSocialClick(currentMember.social.linkedin)}
                className={`w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center transition-colors ${
                  currentMember.social.linkedin !== "#" 
                    ? "hover:bg-gray-600 hover:text-white cursor-pointer" 
                    : "cursor-not-allowed opacity-50"
                }`}
                disabled={currentMember.social.linkedin === "#"}
              >
                <Linkedin className="w-4 h-4" />
              </button>

              <button 
                onClick={() => handleSocialClick(currentMember.social.facebook)}
                className={`w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center transition-colors ${
                  currentMember.social.facebook !== "#" 
                    ? "hover:bg-gray-600 hover:text-white cursor-pointer" 
                    : "cursor-not-allowed opacity-50"
                  }`}
                disabled={currentMember.social.facebook === "#"}
              >
                <Facebook className="w-4 h-4" />
              </button>

              <button 
                onClick={() => handleSocialClick(currentMember.social.instagram)}
                className={`w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center transition-colors ${
                  currentMember.social.instagram !== "#" 
                    ? "hover:bg-gray-600 hover:text-white cursor-pointer" 
                    : "cursor-not-allowed opacity-50"
                  }`}
                disabled={currentMember.social.instagram === "#"}
              >
                <Instagram className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamMember;