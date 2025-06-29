'use client';

import Link from 'next/link';
import React, { useState } from 'react';

const Product = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "What is Pran?",
      content: "Pran is a gentle and natural herbal solution designed to support holistic well-being. Our products are rooted in traditional wisdom and modern science to bring calm and clarity.",
      image: "Product Image 1"
    },
    {
      title: "Why Pran?",
      content: "Our mission is to deliver pure and thoughtful care through every product. From sourcing to packaging, Pran ensures quality, sustainability, and authenticity in every step.",
      image: "Product Image 2"
    }
  ];

  return (
    <section className="py-16 md:py-16 bg-white min-h-screen md:min-h-0">
      <div className="max-w-6xl mx-auto h-full px-4 flex flex-col md:flex-row items-center gap-12">
        
        {/* Mobile Version - Full Screen Carousel */}
        <div className="flex-1 w-full md:hidden flex flex-col justify-center min-h-[calc(100vh-8rem)]">
          <div className="space-y-8">
            {/* Content Section */}
            <div className="space-y-6">
              <h6 className="text-md text-black font-bold">{slides[currentSlide].title}</h6>
              <p className="text-gray-600">
                {slides[currentSlide].content}
              </p>
            </div>

            {/* Scrollable Image Carousel */}
            <div className="relative">
              <div 
                className="flex overflow-x-scroll snap-x snap-mandatory scrollbar-hide gap-4 pb-4"
                onScroll={(e) => {
                  const scrollLeft = e.currentTarget.scrollLeft;
                  const width = e.currentTarget.offsetWidth;
                  const newIndex = Math.round(scrollLeft / (width + 16)); // 16px gap
                  setCurrentSlide(Math.max(0, Math.min(newIndex, slides.length - 1)));
                }}
              >
                {slides.map((slide, index) => (
                  <div
                    key={index}
                    className="flex-none w-full aspect-square rounded-lg bg-gray-200 flex items-center justify-center snap-center"
                  >
                    <span className="text-gray-500">{slide.image}</span>
                  </div>
                ))}
              </div>

              {/* Navigation Dots */}
              <div className="flex justify-start space-x-2 mt-4">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentSlide ? 'bg-black' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Explore Button */}
            <Link href={"/product"} className='bg-black text-white text-sm px-6 py-2 rounded-md hover:opacity-90 w-fit'>
              Explore
            </Link>
          </div>
        </div>

        {/* Desktop Version - Original Two Column Layout */}
        <div className="hidden md:flex flex-1 w-full flex-col md:flex-row items-center gap-12">
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
            <Link href={"/product"} className='bg-black text-white text-sm px-6 py-2 rounded-md hover:opacity-90 w-fit'>
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

      </div>
    </section>
  );
};

export default Product;