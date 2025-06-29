'use client';
import React from 'react';
import Hero from '@/components/about-us/Hero';
import TeamMember from '@/components/about-us/TeamMember'
import Recruit from '@/components/about-us/Rercruit'

const Page = () => {
  return (
    <div className="min-h-screen bg-main">
      <Hero/>
      <TeamMember/>
      <Recruit/>
    </div>
  );
};

export default Page;