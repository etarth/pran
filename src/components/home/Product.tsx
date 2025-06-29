'use client';

import { link } from 'fs';
import Link from 'next/link';
import path from 'path';
import React from 'react';

const Product = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto h-full px-4 flex flex-col md:flex-row items-center gap-12">
        {/* Left Column */}
        <div className="flex-1 space-y-16">
          <div>
            <h6 className="text-md text-black font-bold mb-6">What is Pran?</h6>
            <p className="text-gray-600">
              Pran is a gentle and natural herbal solution designed to support holistic well-being.
              Our products are rooted in traditional wisdom and modern science to bring calm and clarity.
            </p>
          </div>
          <div>
            <h2 className="text-md text-black font-bold mb-6">Why Pran?</h2>
            <p className="text-gray-600">
              Our mission is to deliver pure and thoughtful care through every product. From sourcing to packaging,
              Pran ensures quality, sustainability, and authenticity in every step.
            </p>
          </div>
          <Link href={"/product"} className='bg-accent text-white bg-black text-sm px-6 py-2 rounded-md hover:opacity-90'>
            Explore
          </Link>
        </div>

        {/* Right Column */}
        <div className="flex-1">
          <div className="w-full h-[400px] rounded-lg bg-gray-200 flex items-center justify-center">
            <span className="text-gray-500">Product Image</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;