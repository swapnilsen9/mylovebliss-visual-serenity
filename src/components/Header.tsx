
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'glass-effect shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className={`text-2xl font-fredoka ${
            isScrolled ? 'text-brand-primary' : 'text-white'
          }`}>
            MyLoveBliss
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} className={`font-larken ${
              isScrolled ? 'text-brand-primary' : 'text-white'
            } hover:text-brand-accent transition-colors font-medium`}>Home</button>
            <button onClick={() => scrollToSection('products')} className={`font-larken ${
              isScrolled ? 'text-brand-primary' : 'text-white'
            } hover:text-brand-accent transition-colors font-medium`}>Products</button>
            <button onClick={() => scrollToSection('about')} className={`font-larken ${
              isScrolled ? 'text-brand-primary' : 'text-white'
            } hover:text-brand-accent transition-colors font-medium`}>About</button>
            <button onClick={() => scrollToSection('benefits')} className={`font-larken ${
              isScrolled ? 'text-brand-primary' : 'text-white'
            } hover:text-brand-accent transition-colors font-medium`}>Benefits</button>
            <button onClick={() => scrollToSection('contact')} className={`font-larken ${
              isScrolled ? 'text-brand-primary' : 'text-white'
            } hover:text-brand-accent transition-colors font-medium`}>Contact</button>
          </nav>

          <button 
            className={`md:hidden ${
              isScrolled ? 'text-brand-primary' : 'text-white'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 glass-effect rounded-lg">
            <nav className="flex flex-col space-y-4 px-4">
              <button onClick={() => scrollToSection('home')} className="font-larken text-brand-primary hover:text-brand-accent transition-colors text-left font-medium">Home</button>
              <button onClick={() => scrollToSection('products')} className="font-larken text-brand-primary hover:text-brand-accent transition-colors text-left font-medium">Products</button>
              <button onClick={() => scrollToSection('about')} className="font-larken text-brand-primary hover:text-brand-accent transition-colors text-left font-medium">About</button>
              <button onClick={() => scrollToSection('benefits')} className="font-larken text-brand-primary hover:text-brand-accent transition-colors text-left font-medium">Benefits</button>
              <button onClick={() => scrollToSection('contact')} className="font-larken text-brand-primary hover:text-brand-accent transition-colors text-left font-medium">Contact</button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
