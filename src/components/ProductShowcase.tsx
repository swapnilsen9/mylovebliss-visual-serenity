
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Zap, Shield, Award, Star } from 'lucide-react';

const ProductShowcase = () => {
  const navigate = useNavigate();

  const products = [
    {
      id: "premium-deep-tissue",
      name: "Premium Deep Tissue Massager",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=500&h=500&fit=crop",
      description: "Professional-grade percussion therapy for ultimate muscle relief",
      features: ["6 Speed Settings", "4 Hour Battery", "Whisper Quiet"],
      icon: <Zap className="w-6 h-6" />
    },
    {
      id: "luxury-wellness-roller",
      name: "Luxury Wellness Roller",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=500&h=500&fit=crop",
      description: "Elegant design meets therapeutic effectiveness for daily wellness",
      features: ["Ergonomic Design", "Heat Therapy", "Smart Controls"],
      icon: <Shield className="w-6 h-6" />
    },
    {
      id: "signature-relaxation",
      name: "Signature Relaxation Device",
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=500&h=500&fit=crop",
      description: "Your personal sanctuary of tranquility and therapeutic relief",
      features: ["Multiple Modes", "App Connected", "Premium Materials"],
      icon: <Award className="w-6 h-6" />
    }
  ];

  const handleLearnMore = (productId: string) => {
    scrollTo(0, 0); // Scroll to top when navigating
    navigate(`/product/${productId}`);
  };

  return (
    <section id="products" className="py-20 bg-gradient-to-br from-brand-secondaryViolet to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-fredoka mb-6 text-brand-primaryblue">
            Premium Collection
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-larken">
            Each product in our collection is meticulously crafted to deliver an unparalleled wellness experience
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div 
              key={index}
              className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group"
            >
              <div className="relative overflow-hidden h-64">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg">
                  <div className="text-brand-primaryblue">
                    {product.icon}
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-fredoka mb-4 text-gray-800">{product.name}</h3>
                <p className="text-gray-600 mb-6 font-larken">{product.description}</p>
                
                <div className="space-y-2 mb-6">
                  {product.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <Star className="w-4 h-4 text-brand-orange mr-2" />
                      <span className="text-sm text-gray-600 font-larken">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <button 
                  onClick={() => handleLearnMore(product.id)}
                  className="w-full py-3 bg-brand-primaryblue text-white rounded-full font-larken font-semibold hover:bg-opacity-90 hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
