
import React from 'react';
import { Brain, Moon, Zap, Shield, Heart, Smile } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Stress Relief",
      description: "Melt away tension and find your inner calm with targeted therapeutic massage"
    },
    {
      icon: <Moon className="w-8 h-8" />,
      title: "Better Sleep",
      description: "Improve sleep quality through relaxation and muscle tension release"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Muscle Recovery",
      description: "Accelerate recovery and reduce soreness after workouts or long days"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Pain Management",
      description: "Natural relief for chronic pain and muscle stiffness"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Improved Circulation",
      description: "Enhance blood flow and promote overall cardiovascular health"
    },
    {
      icon: <Smile className="w-8 h-8" />,
      title: "Enhanced Mood",
      description: "Boost endorphins and experience the joy of self-care"
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-gradient-to-br from-brand-secondaryViolet to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-fredoka mb-6 text-brand-primaryblue">
            Transform Your Wellness
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-larken">
            Discover the life-changing benefits of incorporating premium massage therapy into your daily routine
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
            >
              <div className="bg-brand-secondaryViolet rounded-full p-4 w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <div className="text-brand-primaryblue group-hover:text-brand-accent transition-colors duration-300">
                  {benefit.icon}
                </div>
              </div>
              <h3 className="text-xl font-fredoka mb-4 text-gray-800">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed font-larken">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-3xl p-8 shadow-xl max-w-4xl mx-auto">
            <h3 className="text-3xl font-fredoka mb-6 text-brand-primaryblue">
              Your Journey to Wellness Starts Here
            </h3>
            <p className="text-lg text-gray-600 mb-8 font-larken">
              Join thousands of satisfied customers who have transformed their daily wellness routine with MyLoveBliss products.
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-brand-primaryblue text-white rounded-full font-larken font-semibold hover:bg-opacity-90 hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Start Your Journey
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
