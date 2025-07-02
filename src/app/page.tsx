'use client';
import React from 'react';
import Hero from '@/components/home/Hero';
import Product from '@/components/home/MissionVision';
import Awards from '@/components/home/Awards';
import WhyUs from '@/components/home/WhyUs';

const Page = () => {
  return (
    <div className="min-h-screen w-screen bg-main overflow-x-hidden overflow-y-scroll">
      <Hero />
      <Product />
      <WhyUs/>
      <Awards />
    </div>
  );
};

export default Page;