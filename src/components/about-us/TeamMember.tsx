"use client";

import React, { useState } from "react";
import { Linkedin, Mail, Phone, Check, ChevronLeft, ChevronRight } from "lucide-react";

const TeamMember = () => {
  const [selectedMember, setSelectedMember] = useState(0);
  const [copiedStates, setCopiedStates] = useState<Record<string, boolean>>({});

  const teamMembers = [
    {
      id: 1,
      nickname: "Thames",
      position: "CEO",
      fullName: "Worathas W.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur",
      image: "/api/placeholder/300/400",
      contact: {
        linkedin: "https://www.linkedin.com/in/thames-wongsatidporn-271500228?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        email: "thamesworathas@gmail.com",
        phone: "0631828345"
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
      contact: {
        linkedin: "#",
        email: "earth5556789@gmail.com",
        phone: "0970976927"
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
      contact: {
        linkedin: "https://www.linkedin.com/in/pataraton-hansuksakul-32bb2530a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        email: "pataratonh@gmail.com",
        phone: "0649514625"
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
      contact: {
        linkedin: "#",
        email: "jantmeduang.amy@gmail.com",
        phone: "0871124455"
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
      contact: {
        linkedin: "#",
        email: "harisjiman@gmail.com",
        phone: "0936769820"
      },
    }
  ];

  const currentMember = teamMembers[selectedMember];

  const copyToClipboard = async (text: string, id: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedStates(prev => ({ ...prev, [id]: true }));
      
      setTimeout(() => {
        setCopiedStates(prev => ({ ...prev, [id]: false }));
      }, 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const handleLinkedInClick = (url: string) => {
    if (url && url !== "#") {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  const nextSlide = () => {
    setSelectedMember((prev) => (prev + 1) % teamMembers.length);
  };

  const prevSlide = () => {
    setSelectedMember((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
  };

  const getRotatedMembers = () => {
    const rotated = [];
    for (let i = 0; i < teamMembers.length; i++) {
      const index = (selectedMember + i) % teamMembers.length;
      rotated.push(teamMembers[index]);
    }
    return rotated;
  };

  const rotatedMembers = getRotatedMembers();
  const mainMember = rotatedMembers[0];
  const otherMembers = rotatedMembers.slice(1, 5);

  const ClipboardButton = ({ text, id, icon: Icon, label }: {
    text: string;
    id: string;
    icon: any;
    label: string;
  }) => {
    const isCopied = copiedStates[id];
    
    return (
      <button
        onClick={() => copyToClipboard(text, id)}
        className={`
          w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 
          transform active:scale-95 relative group border
          ${isCopied 
            ? 'bg-gray-800 text-white border-gray-800' 
            : 'bg-transparent text-gray-600 border-gray-300 hover:bg-gray-50'
          }
        `}
        title={isCopied ? 'Copied!' : `Copy ${label}`}
      >
        {isCopied ? (
          <Check className="w-4 h-4" />
        ) : (
          <Icon className="w-4 h-4" />
        )}
        
        <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
          {isCopied ? 'Copied!' : `Copy ${label}`}
        </span>
      </button>
    );
  };

  const LinkedInButton = ({ url }: { url: string }) => {
    const isActive = url && url !== "#";
    
    return (
      <button
        onClick={() => handleLinkedInClick(url)}
        className={`
          w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 
          transform active:scale-95 relative group border
          ${isActive 
            ? 'bg-transparent text-gray-600 border-gray-300 hover:bg-gray-50' 
            : 'bg-transparent text-gray-400 border-gray-200 cursor-not-allowed'
          }
        `}
        disabled={!isActive}
        title={isActive ? "LinkedIn Profile" : "LinkedIn not available"}
      >
        <Linkedin className="w-4 h-4" />
        
        <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
          {isActive ? "LinkedIn Profile" : "LinkedIn not available"}
        </span>
      </button>
    );
  };

  return (
    <section className="py-16 md:py-20 bg-white min-h-screen md:min-h-0">
      <div className="flex flex-col gap-12 max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-black text-md font-bold text-center">Team Member</h2>

        {/* Mobile Version */}
        <div className="flex-1 w-full md:hidden flex flex-col justify-center min-h-[calc(100vh-12rem)]">
          <div className="space-y-8">
            <div className="relative">
              <div 
                className="flex overflow-x-scroll snap-x snap-mandatory scrollbar-hide gap-4 pb-4"
                onScroll={(e) => {
                  const scrollLeft = e.currentTarget.scrollLeft;
                  const width = e.currentTarget.offsetWidth;
                  const newIndex = Math.round(scrollLeft / (width + 16));
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

              <div className="flex justify-start space-x-2 mt-4">
                {teamMembers.map((_, dotIndex) => (
                  <button
                    key={dotIndex}
                    onClick={() => setSelectedMember(dotIndex)}
                    className={`w-1.5 h-1.5 rounded-full transition-colors ${
                      dotIndex === selectedMember ? 'bg-black' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>

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

              <div className="flex space-x-3">
                <LinkedInButton url={currentMember.contact.linkedin} />
                
                <ClipboardButton 
                  text={currentMember.contact.email}
                  id={`mobile-email-${currentMember.id}`}
                  icon={Mail}
                  label="email"
                />

                <ClipboardButton 
                  text={currentMember.contact.phone}
                  id={`mobile-phone-${currentMember.id}`}
                  icon={Phone}
                  label="phone"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Version */}
        <div className="hidden md:flex flex-col gap-12">
          <div className="flex justify-between items-center">
            <div className="bg-gray-200 rounded-lg h-[420px] w-64 flex items-center justify-center">
              <span className="text-gray-400">{mainMember.nickname} Image</span>
            </div>
            
            <div className="flex gap-6">
              {otherMembers.map((member, index) => {
                const memberIndex = (selectedMember + index + 1) % teamMembers.length;
                return (
                  <button
                    key={member.id}
                    onClick={() => setSelectedMember(memberIndex)}
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

          <div className="flex justify-center items-center space-x-4">
            <button
              onClick={prevSlide}
              className="text-gray-600 hover:text-black transition-colors p-1"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            
            <div className="flex space-x-2">
              {teamMembers.map((_, dotIndex) => (
                <button
                  key={dotIndex}
                  onClick={() => setSelectedMember(dotIndex)}
                  className={`w-1.5 h-1.5 rounded-full transition-colors ${
                    dotIndex === selectedMember ? 'bg-black' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="text-gray-600 hover:text-black transition-colors p-1"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          
          <div className="space-y-4">
            <div className="flex flex-col gap-2">
              <h3 className="text-md font-semibold text-black">
                {mainMember.nickname} {mainMember.position}
              </h3>
              <p className="text-gray-500 text-md">{mainMember.fullName}</p>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed w-96">
              {mainMember.description}
            </p>

            <div className="flex space-x-3">
              <LinkedInButton url={mainMember.contact.linkedin} />
              
              <ClipboardButton 
                text={mainMember.contact.email}
                id={`desktop-email-${mainMember.id}`}
                icon={Mail}
                label="email"
              />

              <ClipboardButton 
                text={mainMember.contact.phone}
                id={`desktop-phone-${mainMember.id}`}
                icon={Phone}
                label="phone"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamMember;