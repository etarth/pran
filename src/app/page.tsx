'use client';
import React from 'react';
import Hero from '@/components/home/Hero';
import Product from '@/components/home/Product';
import Awards from '@/components/home/Awards';

const Page = () => {
  return (
    <div className="min-h-screen w-screen bg-main overflow-x-hidden overflow-y-scroll">
      <Hero />
      <Product />
      <Awards />
    </div>
  );
};

export default Page;