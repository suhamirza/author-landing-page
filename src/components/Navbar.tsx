import React, { useState, useEffect } from 'react';
import logoImage from '../assets/images/logo.webp';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 60; // Account for fixed navbar height (reduced from 80)
      const targetPosition = element.offsetTop - navbarHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
    // Close mobile menu after navigation
    setIsMobileMenuOpen(false);
  };
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out shadow-md ${
      isScrolled 
        ? 'bg-white backdrop-blur-none' 
        : 'backdrop-blur-[2px] bg-white/20'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-0.5">
        <div className="flex justify-between items-center h-12">
          {/* Logo */}          <div className="flex-shrink-0">
            <img 
              src={logoImage} 
              alt="HK Logo" 
              className="h-9 w-auto"
              style={{
                filter: 'drop-shadow(0 0 15px rgb(212, 163, 115)) drop-shadow(0 0 30px rgba(212, 163, 115, 0.8)) drop-shadow(0 3px 6px rgba(212, 163, 115, 0.6))'
              }}
            />
          </div>

          {/* Navigation Links */}          <div className="hidden md:block">
            <div className="ml-8 flex items-baseline space-x-6">
              <button 
                onClick={() => scrollToSection('home')} 
                className="text-dark-brown font-sans font-extrabold text-base hover:text-light-brown transition-colors duration-300 cursor-pointer"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')} 
                className="text-dark-brown font-sans font-extrabold text-base hover:text-light-brown transition-colors duration-300 cursor-pointer"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('books')} 
                className="text-dark-brown font-sans font-extrabold text-base hover:text-light-brown transition-colors duration-300 cursor-pointer"
              >
                Books
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-dark-brown hover:text-gold focus:outline-none focus:ring-2 focus:ring-gold"
            >
              {isMobileMenuOpen ? (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-md border-t border-dark-brown/20">
            <button 
              onClick={() => scrollToSection('home')} 
              className="block w-full text-left px-3 py-2 text-dark-brown font-sans font-extrabold text-base hover:text-light-brown hover:bg-light-sage-green/50 transition-all duration-300 rounded-md"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="block w-full text-left px-3 py-2 text-dark-brown font-sans font-extrabold text-base hover:text-light-brown hover:bg-light-sage-green/50 transition-all duration-300 rounded-md"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('books')} 
              className="block w-full text-left px-3 py-2 text-dark-brown font-sans font-extrabold text-base hover:text-light-brown hover:bg-light-sage-green/50 transition-all duration-300 rounded-md"
            >
              Books
            </button>
          </div>
        </div>
      </div>    </nav>
  );
};

export default Navbar;
