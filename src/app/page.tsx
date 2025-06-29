'use client';
import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import ContactModal from '@/components/ContactModal';
import Footer from '@/components/Footer';
import Hero from '@/components/home/Hero';
import Product from '@/components/home/Product';
import Awards from '@/components/home/Awards';

const Page = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-main">
      <Navigation setContactModalOpen={setContactModalOpen} />
      <ContactModal isOpen={contactModalOpen} setIsOpen={setContactModalOpen} />

      <Hero />
      <Product />
      <Awards />

      <Footer />
    </div>
  );
};

export default Page;
