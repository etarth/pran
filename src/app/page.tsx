'use client';
import React from 'react';
import Hero from '@/components/home/Hero';
import Product from '@/components/home/Product';
import Awards from '@/components/home/Awards';

const Page = () => {
  return (
    <div className="min-h-screen bg-main">
      <Hero />
      <Product />
      <Awards />
    </div>
  );
};

export default Page;