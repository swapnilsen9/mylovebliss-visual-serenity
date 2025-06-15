
import React from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 to-purple-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-shadow">
            Let's Connect
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Ready to embark on your wellness journey? We're here to guide you every step of the way.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-3xl font-bold mb-8">Get in Touch</h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-purple-600 rounded-full p-3">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold">Email Us</h4>
                  <p className="opacity-80">hello@mylovebliss.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-pink-600 rounded-full p-3">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold">Call Us</h4>
                  <p className="opacity-80">+1 (555) WELLNESS</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-purple-600 rounded-full p-3">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold">Visit Us</h4>
                  <p className="opacity-80">123 Wellness Boulevard<br />Bliss City, BC 12345</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h4 className="text-xl font-bold mb-6">Follow Our Journey</h4>
              <div className="flex space-x-4">
                <button className="bg-white bg-opacity-10 hover:bg-opacity-20 rounded-full p-3 transition-all duration-300 transform hover:scale-110">
                  <Instagram className="w-6 h-6" />
                </button>
                <button className="bg-white bg-opacity-10 hover:bg-opacity-20 rounded-full p-3 transition-all duration-300 transform hover:scale-110">
                  <Facebook className="w-6 h-6" />
                </button>
                <button className="bg-white bg-opacity-10 hover:bg-opacity-20 rounded-full p-3 transition-all duration-300 transform hover:scale-110">
                  <Twitter className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>

          <div className="glass-effect rounded-3xl p-8">
            <h3 className="text-3xl font-bold mb-8">Send Us a Message</h3>
            <form className="space-y-6">
              <div>
                <input 
                  type="text" 
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-white bg-opacity-10 border border-white border-opacity-20 rounded-lg focus:outline-none focus:border-purple-400 transition-colors"
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="Your Email"
                  className="w-full px-4 py-3 bg-white bg-opacity-10 border border-white border-opacity-20 rounded-lg focus:outline-none focus:border-purple-400 transition-colors"
                />
              </div>
              <div>
                <textarea 
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-3 bg-white bg-opacity-10 border border-white border-opacity-20 rounded-lg focus:outline-none focus:border-purple-400 transition-colors resize-none"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white border-opacity-20 text-center">
          <p className="opacity-80">
            © 2024 MyLoveBliss. Crafted with love for your wellness journey.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
