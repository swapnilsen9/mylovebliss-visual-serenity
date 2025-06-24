
import React from 'react';
import { Heart, Zap, Shield, Award, Sparkles, Star } from 'lucide-react';

const CategoryStrip = () => {
  const categories = [
    {
      id: 'wellness',
      name: 'Wellness',
      icon: <Heart className="w-8 h-8" />,
      color: 'bg-brand-primaryPink'
    },
    {
      id: 'therapy',
      name: 'Therapy',
      icon: <Zap className="w-8 h-8" />,
      color: 'bg-brand-secondaryViolet'
    },
    {
      id: 'comfort',
      name: 'Comfort',
      icon: <Shield className="w-8 h-8" />,
      color: 'bg-brand-secondaryLilac'
    },
    {
      id: 'premium',
      name: 'Premium',
      icon: <Award className="w-8 h-8" />,
      color: 'bg-brand-secondaryPeach'
    },
    {
      id: 'relaxation',
      name: 'Relaxation',
      icon: <Sparkles className="w-8 h-8" />,
      color: 'bg-brand-neonGreen'
    },
    {
      id: 'luxury',
      name: 'Luxury',
      icon: <Star className="w-8 h-8" />,
      color: 'bg-brand-primaryPink'
    }
  ];

  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="bg-black py-8">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <h3 className="text-white text-2xl font-fredoka mb-2">Explore Our Categories</h3>
          <p className="text-gray-300 font-larken">Discover wellness solutions tailored to your needs</p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {categories.map((category) => (
            <div 
              key={category.id}
              onClick={scrollToProducts}
              className="flex flex-col items-center cursor-pointer group"
            >
              <div className={`w-16 h-16 md:w-20 md:h-20 rounded-full ${category.color} flex items-center justify-center text-white transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg mb-3`}>
                {category.icon}
              </div>
              <span className="text-white font-larken text-sm md:text-base text-center group-hover:text-brand-accent transition-colors duration-300">
                {category.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryStrip;
