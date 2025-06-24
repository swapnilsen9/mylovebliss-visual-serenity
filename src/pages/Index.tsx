
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import CategoryStrip from '../components/CategoryStrip';
import ProductShowcase from '../components/ProductShowcase';
import About from '../components/About';
import Benefits from '../components/Benefits';
import Contact from '../components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <CategoryStrip />
      <ProductShowcase />
      <About />
      <Benefits />
      <Contact />
    </div>
  );
};

export default Index;
