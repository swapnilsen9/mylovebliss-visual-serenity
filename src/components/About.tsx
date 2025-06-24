
import React from 'react';
import { Heart, Users, Award, Sparkles } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-fredoka mb-8 text-brand-primaryblue">
              Crafting Wellness, One Touch at a Time
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed font-larken">
              At MyLoveBliss, we believe that wellness is not just a destination—it's a beautiful journey of self-care and mindful living. Our passion for creating premium massage products stems from a deep understanding of the transformative power of therapeutic touch.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed font-larken">
              Every product in our collection is designed with love, precision, and an unwavering commitment to quality. We don't just create massagers; we craft experiences that nurture your body, mind, and spirit.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4">
                <div className="bg-brand-secondaryViolet rounded-full p-3">
                  <Heart className="w-6 h-6 text-brand-primaryblue" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2 font-fredoka">Made with Love</h4>
                  <p className="text-sm text-gray-600 font-larken">Every detail crafted with care and passion</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-brand-accent bg-opacity-20 rounded-full p-3">
                  <Users className="w-6 h-6 text-brand-primaryblue" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2 font-fredoka">Customer First</h4>
                  <p className="text-sm text-gray-600 font-larken">Your wellness journey is our priority</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-brand-secondaryViolet rounded-full p-3">
                  <Award className="w-6 h-6 text-brand-primaryblue" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2 font-fredoka">Premium Quality</h4>
                  <p className="text-sm text-gray-600 font-larken">Only the finest materials and technology</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-brand-accent bg-opacity-20 rounded-full p-3">
                  <Sparkles className="w-6 h-6 text-brand-primaryblue" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2 font-fredoka">Innovation</h4>
                  <p className="text-sm text-gray-600 font-larken">Cutting-edge wellness technology</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="brand-gradient rounded-3xl p-8 text-center shadow-2xl">
              <h3 className="text-3xl font-fredoka text-white mb-6 text-shadow">Our Mission</h3>
              <p className="text-lg text-white opacity-90 leading-relaxed text-shadow font-larken">
                "To empower individuals on their wellness journey by providing exceptional massage products that bring comfort, relief, and joy to everyday life."
              </p>
              <div className="mt-8 flex justify-center space-x-8">
                <div className="text-center">
                  <div className="text-3xl font-fredoka text-white">10K+</div>
                  <div className="text-sm text-white opacity-80 font-larken">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-fredoka text-white">5★</div>
                  <div className="text-sm text-white opacity-80 font-larken">Average Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-fredoka text-white">3</div>
                  <div className="text-sm text-white opacity-80 font-larken">Premium Products</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
