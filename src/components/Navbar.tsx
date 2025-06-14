import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out shadow-md ${
      isScrolled 
        ? 'bg-white backdrop-blur-none' 
        : 'backdrop-blur-[2px] bg-white/20'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}          <div className="flex-shrink-0">
            <img 
              src="/src/assets/images/logo.png" 
              alt="HK Logo" 
              className="h-12 w-auto"
              style={{
                filter: 'drop-shadow(0 0 20px rgb(212, 163, 115)) drop-shadow(0 0 40px rgba(212, 163, 115, 0.8)) drop-shadow(0 4px 8px rgba(212, 163, 115, 0.6))'
              }}
            />
          </div>

          {/* Navigation Links */}          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a 
                href="#home" 
                className="text-dark-brown font-sans font-extrabold text-lg hover:text-light-brown transition-colors duration-300"
              >
                Home
              </a>
              <a 
                href="#about" 
                className="text-dark-brown font-sans font-extrabold text-lg hover:text-light-brown transition-colors duration-300"
              >
                About
              </a>
              <a 
                href="#books" 
                className="text-dark-brown font-sans font-extrabold text-lg hover:text-light-brown transition-colors duration-300"
              >
                Books
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-dark-brown hover:text-gold focus:outline-none focus:ring-2 focus:ring-gold">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>    </nav>
  );
};

export default Navbar;
