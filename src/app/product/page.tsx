'use client';
import React from 'react';
import Hero from '@/components/product/Hero';
import Cartridge from '@/components/product/Cartridge';
import Device from '@/components/product/Device';
import ImplPlan from '@/components/product/ImplPlan'

const Page = () => {
  return (
    <div className="min-h-screen bg-main">
      <Hero/>
      <div id="cartridge">
        <Cartridge/>
      </div>
      <div id="device">
        <Device/>
      </div>
      <div id="implementation-plan">
        <ImplPlan/>
      </div>
    </div>
  );
};

export default Page;