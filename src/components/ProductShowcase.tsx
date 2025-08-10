
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Zap, Shield, Award, Star } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'


const ProductShowcase = () => {
  const navigate = useNavigate();

  const products = [
    {
      id: "relaxa",
      name: "Relaxa",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=500&h=500&fit=crop",
      description: "A sleek & discreet full-body massager, Relaxa is designed with a pointed tip and 5 powerful intensities, to give you targeted stimulation, and hit all your sweet spots.",
      features: ["Silent & Powerful", "Compact & Travel Friendly", "Shower Friendly"],
      icon: <Zap className="w-6 h-6" />
    },
    {
      id: "flex-flow",
      name: "FlexFlow",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=500&h=500&fit=crop",
      description: "A unique way to experience pleasure is using the My Lovebliss- FlexFlow which provides sensation for both men and women giving you maximum pleasure you can ever feel. It consists of an egg with a remote for hands free use during your orgasms.",
      features: ["Waterproof", "Low Noise", "Remote Control"],
      icon: <Shield className="w-6 h-6" />
    },
    {
      id: "signature-relaxation",
      name: "Signature Relaxation Device",
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=500&h=500&fit=crop",
      description: "Your personal sanctuary of tranquility and therapeutic relief",
      features: ["Multiple Modes", "App Connected", "Premium Materials"],
      icon: <Award className="w-6 h-6" />
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
          <h2 className="text-4xl md:text-5xl font-larken font-semibold mb-6 text-brand-primaryblue">
            Premium Collection
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-larken">
            Each product in our collection is meticulously crafted to deliver an unparalleled wellness experience
          </p>
        </div>

        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={5}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          grabCursor={true}
          className="relative pb-10"
        >
          {products.map((product, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <div className="flex flex-col h-[500px] w-[300px] md:w-[366px] bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group">
                <div className="relative h-56 overflow-hidden">
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

                <div className="flex flex-col flex-grow p-6">
                  <div className="flex-grow">
                    <h3 className="text-xl font-fredoka mb-2 text-gray-800">{product.name}</h3>
                    <p className="text-gray-600 mb-4 text-sm font-larken">{product.description}</p>
                    <div className="space-y-1">
                      {product.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm">
                          <Star className="w-4 h-4 text-brand-orange mr-1" />
                          <span className="text-gray-600 font-larken">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => handleLearnMore(product.id)}
                    className="mt-4 w-full py-3 bg-brand-primaryblue text-white rounded-full font-larken font-semibold hover:bg-opacity-90 hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>



      </div>
    </section>
  );
};

export default ProductShowcase;
