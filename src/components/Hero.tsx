import React from 'react';
import { Sparkles, Heart } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('./img/hero.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      ></div>
      <div className="absolute inset-0 bg-black opacity-20"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 animate-float">
        <Sparkles className="text-white opacity-30" size={24} />
      </div>
      <div className="absolute bottom-32 right-16 animate-float" style={{ animationDelay: '1s' }}>
        <Heart className="text-brand-accent opacity-40" size={32} />
      </div>
      <div className="absolute top-1/3 right-10 animate-float" style={{ animationDelay: '2s' }}>
        <Sparkles className="text-brand-accent opacity-30" size={20} />
      </div>
      
      <div className="relative z-10 text-center text-white px-6 max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-fredoka mb-6 animate-fade-in-up text-shadow">
          Experience Pure
          <span className="block text-brand-accent">
            Wellness Bliss
          </span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 animate-fade-in-up opacity-90 font-larken" style={{ animationDelay: '0.3s' }}>
          Discover our premium collection of therapeutic massagers designed to elevate your wellness journey
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <button 
            onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-white text-brand-primaryblue rounded-full font-larken font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            Explore Collection
          </button>
          <button 
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 border-2 border-white text-white rounded-full font-larken font-semibold hover:bg-white hover:text-brand-primaryblue transition-all duration-300 transform hover:scale-105"
          >
            Our Story
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
