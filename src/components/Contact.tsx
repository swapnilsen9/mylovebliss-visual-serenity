
import React from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-brand-dark to-brand-primary text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-fredoka mb-6 text-shadow">
            Let's Connect
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto font-larken">
            Ready to embark on your wellness journey? We're here to guide you every step of the way.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-3xl font-fredoka mb-8">Get in Touch</h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-brand-accent rounded-full p-3">
                  <Mail className="w-6 h-6 text-brand-dark" />
                </div>
                <div>
                  <h4 className="font-semibold font-fredoka">Email Us</h4>
                  <p className="opacity-80 font-larken">hello@mylovebliss.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-brand-coral rounded-full p-3">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold font-fredoka">Call Us</h4>
                  <p className="opacity-80 font-larken">+1 (555) WELLNESS</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-brand-green rounded-full p-3">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold font-fredoka">Visit Us</h4>
                  <p className="opacity-80 font-larken">123 Wellness Boulevard<br />Bliss City, BC 12345</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h4 className="text-xl font-fredoka mb-6">Follow Our Journey</h4>
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
            <h3 className="text-3xl font-fredoka mb-8">Send Us a Message</h3>
            <form className="space-y-6">
              <div>
                <input 
                  type="text" 
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-white bg-opacity-10 border border-white border-opacity-20 rounded-lg focus:outline-none focus:border-brand-accent transition-colors font-larken"
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="Your Email"
                  className="w-full px-4 py-3 bg-white bg-opacity-10 border border-white border-opacity-20 rounded-lg focus:outline-none focus:border-brand-accent transition-colors font-larken"
                />
              </div>
              <div>
                <textarea 
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-3 bg-white bg-opacity-10 border border-white border-opacity-20 rounded-lg focus:outline-none focus:border-brand-accent transition-colors resize-none font-larken"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full py-4 bg-brand-accent text-brand-dark rounded-lg font-larken font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white border-opacity-20 text-center">
          <p className="opacity-80 font-larken">
            © 2024 MyLoveBliss. Crafted with love for your wellness journey.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
