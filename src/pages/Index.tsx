
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ProductShowcase from '../components/ProductShowcase';
import About from '../components/About';
import Benefits from '../components/Benefits';
import Contact from '../components/Contact';
import AutoscrollBar from '@/components/AutoscrollBar';
import CategorySection from '@/components/CategorySection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <AutoscrollBar />
      <CategorySection />
      <Hero />
      <ProductShowcase />
      <About />
      {/* <Benefits /> */}
      <Contact />
    </div>
  );
};

export default Index;
