import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoImage from '../assets/images/logo.webp';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    // Only scroll if we're on the home page
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        const navbarHeight = 60; // Account for fixed navbar height (reduced from 80)
        const targetPosition = element.offsetTop - navbarHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    }
    // Close mobile menu after navigation
    setIsMobileMenuOpen(false);
  };

  const handleHomeClick = () => {
    setIsMobileMenuOpen(false);
    // If we're already on home, scroll to top
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleAboutClick = () => {
    setIsMobileMenuOpen(false);
    // If we're on home page, scroll to about section
    if (location.pathname === '/') {
      scrollToSection('about');
    } else {
      // Navigate to home with hash and let Home component handle scrolling
      window.location.href = '/#about';
    }
  };

  const handleBooksClick = () => {
    setIsMobileMenuOpen(false);
    // If we're already on books page, scroll to top
    if (location.pathname === '/books') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleArtClick = () => {
    setIsMobileMenuOpen(false);
    // If we're already on art page, scroll to top
    if (location.pathname === '/art') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleBonusScenesClick = () => {
    setIsMobileMenuOpen(false);
    // If we're already on bonus scenes page, scroll to top
    if (location.pathname === '/bonus-scenes') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleFAQClick = () => {
    setIsMobileMenuOpen(false);
    // If we're already on FAQ page, scroll to top
    if (location.pathname === '/faq') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out shadow-md ${
      isScrolled || location.pathname === '/books'
        ? 'bg-white backdrop-blur-none' 
        : 'backdrop-blur-[2px] bg-white/20'
    }`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-0.5">
        <div className="flex justify-between items-center h-12">
          {/* Logo */}
          <div className="flex-shrink-0 ml-4">
            <Link to="/" onClick={handleHomeClick}>
              <img 
                src={logoImage} 
                alt="HK Logo" 
                className="h-9 w-auto"
                style={{
                  filter: 'drop-shadow(0 0 15px rgb(212, 163, 115)) drop-shadow(0 0 30px rgba(212, 163, 115, 0.8)) drop-shadow(0 3px 6px rgba(212, 163, 115, 0.6))'
                }}
              />
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block mr-4">
            <div className="flex items-baseline space-x-6">
              <Link 
                to="/" 
                onClick={handleHomeClick}
                className="text-dark-brown font-sans font-extrabold text-base hover:text-light-brown transition-colors duration-300 cursor-pointer"
              >
                Home
              </Link>
              <button 
                onClick={handleAboutClick}
                className="text-dark-brown font-sans font-extrabold text-base hover:text-light-brown transition-colors duration-300 cursor-pointer"
              >
                About
              </button>
              <Link 
                to="/books" 
                onClick={handleBooksClick}
                className="text-dark-brown font-sans font-extrabold text-base hover:text-light-brown transition-colors duration-300 cursor-pointer"
              >
                Books
              </Link>
              <Link 
                to="/art" 
                onClick={handleArtClick}
                className="text-dark-brown font-sans font-extrabold text-base hover:text-light-brown transition-colors duration-300 cursor-pointer"
              >
                Art
              </Link>
              <Link 
                to="/bonus-scenes" 
                onClick={handleBonusScenesClick}
                className="text-dark-brown font-sans font-extrabold text-base hover:text-light-brown transition-colors duration-300 cursor-pointer"
              >
                Bonus Scenes
              </Link>
              <Link 
                to="/faq" 
                onClick={handleFAQClick}
                className="text-dark-brown font-sans font-extrabold text-base hover:text-light-brown transition-colors duration-300 cursor-pointer"
              >
                FAQ
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden mr-4">
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
        <div className={`md:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-md border-t border-dark-brown/20">
            <Link 
              to="/" 
              onClick={handleHomeClick}
              className="block w-full text-left px-3 py-2 text-dark-brown font-sans font-extrabold text-base hover:text-light-brown hover:bg-light-sage-green/50 transition-all duration-300 rounded-md"
            >
              Home
            </Link>
            <button 
              onClick={handleAboutClick}
              className="block w-full text-left px-3 py-2 text-dark-brown font-sans font-extrabold text-base hover:text-light-brown hover:bg-light-sage-green/50 transition-all duration-300 rounded-md"
            >
              About
            </button>
            <Link 
              to="/books" 
              onClick={handleBooksClick}
              className="block w-full text-left px-3 py-2 text-dark-brown font-sans font-extrabold text-base hover:text-light-brown hover:bg-light-sage-green/50 transition-all duration-300 rounded-md"
            >
              Books
            </Link>
            <Link 
              to="/art" 
              onClick={handleArtClick}
              className="block w-full text-left px-3 py-2 text-dark-brown font-sans font-extrabold text-base hover:text-light-brown hover:bg-light-sage-green/50 transition-all duration-300 rounded-md"
            >
              Art
            </Link>
            <Link 
              to="/bonus-scenes" 
              onClick={handleBonusScenesClick}
              className="block w-full text-left px-3 py-2 text-dark-brown font-sans font-extrabold text-base hover:text-light-brown hover:bg-light-sage-green/50 transition-all duration-300 rounded-md"
            >
              Bonus Scenes
            </Link>
            <Link 
              to="/faq" 
              onClick={handleFAQClick}
              className="block w-full text-left px-3 py-2 text-dark-brown font-sans font-extrabold text-base hover:text-light-brown hover:bg-light-sage-green/50 transition-all duration-300 rounded-md"
            >
              FAQ
            </Link>
          </div>
        </div>
      </div>    </nav>
  );
};

export default Navbar;
