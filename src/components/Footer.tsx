import React from 'react';
import FadeContent from './Animations/FadeContent/FadeContent';
import logoImage from '../assets/images/logo.webp';
import { FaInstagram, FaAmazon, FaTiktok, FaEnvelope } from 'react-icons/fa';
import { SiGoodreads } from 'react-icons/si';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-sage-green py-12 sm:py-16 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop Layout */}
        <div className="hidden lg:flex lg:items-start lg:w-full">
          
          {/* Logo and Tagline Section - Fixed Left */}
          <FadeContent duration={800} delay={200} blur={false}>
            <div className="flex flex-col lg:w-80 lg:pl-8 lg:pr-8">
              <div className="mb-6">
                {/* Logo */}
                <div className="flex items-center justify-start mb-4">
                  <img 
                    src={logoImage} 
                    alt="HK Logo" 
                    className="w-16 h-16 sm:w-20 sm:h-20"
                    style={{
                      filter: 'drop-shadow(0 0 20px rgba(174, 112, 50, 1)) drop-shadow(0 0 40px rgba(174, 112, 50, 0.8)) drop-shadow(0 0 60px rgba(174, 112, 50, 0.6)) drop-shadow(0 4px 20px rgba(0, 0, 0, 0.3))'
                    }}
                  />
                </div>
                {/* Tagline */}
                <p className="font-serif font-medium text-black text-xs sm:text-sm leading-relaxed max-w-xs mb-8 text-left">
                  DELVE INTO THE WORLD OF DUBLIN SISTERS WITH HAYAT KHAN!
                </p>
              </div>
              
              {/* Social Media Icons */}
              <div className="flex justify-start space-x-4 mt-auto">
                <a 
                  href="https://www.instagram.com/hayatkhan_theauthor/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-dark-brown hover:text-gold transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                >
                  <FaInstagram size={24} />
                </a>
                <a 
                  href="https://www.goodreads.com/author/show/53820632.Hayat_Khan" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-dark-brown hover:text-gold transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                >
                  <SiGoodreads size={24} />
                </a>
                <a 
                  href="https://www.amazon.com/stores/author/B0DR6GJ65B?ingress=0&visitId=c91dd43f-eb35-4a9e-87b7-05a161801480" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-dark-brown hover:text-gold transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                >
                  <FaAmazon size={24} />
                </a>
                <a 
                  href="https://www.tiktok.com/@hayatkhan.theauthor" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-dark-brown hover:text-gold transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                >
                  <FaTiktok size={24} />
                </a>
                <a 
                  href="mailto:hayatkhantheauthor@gmail.com" 
                  className="text-dark-brown hover:text-gold transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                >
                  <FaEnvelope size={24} />
                </a>
              </div>
            </div>
          </FadeContent>

          {/* Links Section - Starts immediately after logo column */}
          <FadeContent duration={800} delay={600} blur={false}>
            <div className="flex justify-start items-start">
              <div className="flex space-x-24">{/* Back to original spacing */}
                
                {/* About Author Section */}
                <div className="text-center min-w-[120px]">
                  <h3 className="font-display font-bold text-dark-brown text-base sm:text-lg mb-3">
                    ABOUT AUTHOR
                  </h3>
                  <div className="w-10 h-1 bg-gold mb-4 mx-auto"></div>
                  
                  <div className="space-y-3 flex flex-col items-center">
                    <a 
                      href="#about" 
                      className="font-serif font-medium text-dark-brown text-xs sm:text-sm hover:text-gold transition-colors duration-300 underline decoration-1 underline-offset-4"
                    >
                      ABOUT
                    </a>
                    <a 
                      href="https://www.amazon.com/stores/author/B0DR6GJ65B?ingress=0&visitId=c91dd43f-eb35-4a9e-87b7-05a161801480" 
                      target='_blank'
                      className="font-serif font-medium text-dark-brown text-xs sm:text-sm hover:text-gold transition-colors duration-300 underline decoration-1 underline-offset-4"
                    >
                      LEARN MORE
                    </a>
                  </div>
                </div>

                {/* Books Section */}
                <div className="text-center min-w-[120px]">
                  <h3 className="font-display font-bold text-dark-brown text-base sm:text-lg mb-3">
                    BOOKS
                  </h3>
                  <div className="w-10 h-1 bg-gold mb-4 mx-auto"></div>
                  
                  <div className="space-y-3 flex flex-col items-center">
                    <a 
                      href="https://www.amazon.com/Facing-Fate-Dublin-Sisters-Book-ebook/dp/B0DXDMGGZ9" 
                      target='_blank'
                      className="font-serif font-medium text-dark-brown text-xs sm:text-sm hover:text-gold transition-colors duration-300 underline decoration-1 underline-offset-4"
                    >
                      FACING FATE
                    </a>
                    <a 
                      href="https://www.amazon.com/Forgiving-You-Dublin-Sisters-Book-ebook/dp/B0FD9H4HQ6?ref_=ast_author_mpb" 
                      target='_blank'
                      className="font-serif font-medium text-dark-brown text-xs sm:text-sm hover:text-gold transition-colors duration-300 underline decoration-1 underline-offset-4"
                    >
                      FORGIVING YOU
                    </a>
                  </div>
                </div>

                {/* Art Section */}
                <div className="text-center min-w-[120px]">
                  <h3 className="font-display font-bold text-dark-brown text-base sm:text-lg mb-3">
                    ART
                  </h3>
                  <div className="w-10 h-1 bg-gold mb-4 mx-auto"></div>
                  
                  <div className="space-y-3 flex flex-col items-center">
                    <a 
                      href="/art#character-art" 
                      className="font-serif font-medium text-dark-brown text-xs sm:text-sm hover:text-gold transition-colors duration-300 underline decoration-1 underline-offset-4"
                    >
                      CHARACTER ART
                    </a>
                    <a 
                      href="/art#dublin-sisterverse" 
                      className="font-serif font-medium text-dark-brown text-xs sm:text-sm hover:text-gold transition-colors duration-300 underline decoration-1 underline-offset-4"
                    >
                      DUBLIN SISTERVERSE
                    </a>
                  </div>
                </div>
                {/* Bonus Scenes Section */}  
                <div className="text-center min-w-[120px]">
                  <h3 className="font-display font-bold text-dark-brown text-base sm:text-lg mb-3">
                    BONUS SCENES
                  </h3>
                  <div className="w-10 h-1 bg-gold mb-4 mx-auto"></div>
                  
                  <div className="space-y-3 flex flex-col items-center">
                    <a 
                      href="/bonus-scenes" 
                      className="font-serif font-medium text-dark-brown text-xs sm:text-sm hover:text-gold transition-colors duration-300 underline decoration-1 underline-offset-4"
                    >
                      BONUS SCENES
                    </a>
                  </div>
                </div>  
                {/* Easy to add more sections here with same structure */}
                
              </div>
            </div>
          </FadeContent>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden">
          {/* Logo and Tagline Section */}
          <FadeContent duration={800} delay={200} blur={false}>
            <div className="text-center mb-12">
              <div className="mb-6">
                {/* Logo */}
                <div className="flex items-center justify-center mb-4">
                  <img 
                    src={logoImage} 
                    alt="HK Logo" 
                    className="w-16 h-16 sm:w-20 sm:h-20"
                    style={{
                      filter: 'drop-shadow(0 0 20px rgba(174, 112, 50, 1)) drop-shadow(0 0 40px rgba(174, 112, 50, 0.8)) drop-shadow(0 0 60px rgba(174, 112, 50, 0.6)) drop-shadow(0 4px 20px rgba(0, 0, 0, 0.3))'
                    }}
                  />
                </div>
                {/* Tagline */}
                <p className="font-serif font-medium text-black text-xs sm:text-sm leading-relaxed max-w-xs mx-auto mb-8">
                  DELVE INTO THE WORLD OF DUBLIN SISTERS WITH HAYAT KHAN!
                </p>
              </div>
            </div>
          </FadeContent>

          {/* Links Section Mobile */}
          <FadeContent duration={800} delay={600} blur={false}>
            <div className="flex justify-center mb-12">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-16 max-w-lg sm:max-w-2xl justify-items-center">
                
                {/* About Author Section */}
                <div className="text-center min-w-[120px]">
                  <h3 className="font-display font-bold text-dark-brown text-base sm:text-lg mb-3">
                    ABOUT AUTHOR
                  </h3>
                  <div className="w-10 h-1 bg-gold mb-4 mx-auto"></div>
                  
                  <div className="space-y-3 flex flex-col items-center">
                    <a 
                      href="#about" 
                      className="font-serif font-medium text-dark-brown text-xs sm:text-sm hover:text-gold transition-colors duration-300 underline decoration-1 underline-offset-4"
                    >
                      ABOUT
                    </a>
                    <a 
                      href="https://www.amazon.com/stores/author/B0DR6GJ65B?ingress=0&visitId=c91dd43f-eb35-4a9e-87b7-05a161801480" 
                      target='_blank'
                      className="font-serif font-medium text-dark-brown text-xs sm:text-sm hover:text-gold transition-colors duration-300 underline decoration-1 underline-offset-4"
                    >
                      LEARN MORE
                    </a>
                  </div>
                </div>

                {/* Books Section */}
                <div className="text-center min-w-[120px]">
                  <h3 className="font-display font-bold text-dark-brown text-base sm:text-lg mb-3">
                    BOOKS
                  </h3>
                  <div className="w-10 h-1 bg-gold mb-4 mx-auto"></div>
                  
                  <div className="space-y-3 flex flex-col items-center">
                    <a 
                      href="https://www.amazon.com/Facing-Fate-Dublin-Sisters-Book-ebook/dp/B0DXDMGGZ9" 
                      target='_blank'
                      className="font-serif font-medium text-dark-brown text-xs sm:text-sm hover:text-gold transition-colors duration-300 underline decoration-1 underline-offset-4"
                    >
                      FACING FATE
                    </a>
                    <a 
                      href="https://www.amazon.com/Forgiving-You-Dublin-Sisters-Book-ebook/dp/B0FD9H4HQ6?ref_=ast_author_mpb" 
                      target='_blank'
                      className="font-serif font-medium text-dark-brown text-xs sm:text-sm hover:text-gold transition-colors duration-300 underline decoration-1 underline-offset-4"
                    >
                      FORGIVING YOU
                    </a>
                  </div>
                </div>

                {/* Art Section */}
                <div className="text-center min-w-[120px]">
                  <h3 className="font-display font-bold text-dark-brown text-base sm:text-lg mb-3">
                    ART
                  </h3>
                  <div className="w-10 h-1 bg-gold mb-4 mx-auto"></div>
                  
                  <div className="space-y-3 flex flex-col items-center">
                    <a 
                      href="/art#character-art" 
                      className="font-serif font-medium text-dark-brown text-xs sm:text-sm hover:text-gold transition-colors duration-300 underline decoration-1 underline-offset-4"
                    >
                      CHARACTER ART
                    </a>
                    <a 
                      href="/art#dublin-sisterverse" 
                      className="font-serif font-medium text-dark-brown text-xs sm:text-sm hover:text-gold transition-colors duration-300 underline decoration-1 underline-offset-4"
                    >
                      DUBLIN SISTERVERSE
                    </a>
                  </div>
                </div>
                {/* Bonus Scenes Section */}
                <div className="text-center min-w-[120px]">
                  <h3 className="font-display font-bold text-dark-brown text-base sm:text-lg mb-3">
                    BONUS SCENES
                  </h3>
                  <div className="w-10 h-1 bg-gold mb-4 mx-auto"></div>
                  <div className="space-y-3 flex flex-col items-center">
                    <a 
                      href="/bonus-scenes" 
                      className="font-serif font-medium text-dark-brown text-xs sm:text-sm hover:text-gold transition-colors duration-300 underline decoration-1 underline-offset-4"
                    >
                      BONUS SCENES
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </FadeContent>

          {/* Social Media Icons Section - Mobile Only */}
          <FadeContent duration={800} delay={800} blur={false}>
            <div className="lg:hidden flex justify-center order-3">
              <div className="flex justify-center space-x-4 mt-8">
                <a 
                  href="https://www.instagram.com/hayatkhan_theauthor/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-dark-brown hover:text-gold transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                >
                  <FaInstagram size={24} />
                </a>
                <a 
                  href="https://www.goodreads.com/author/show/53820632.Hayat_Khan" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-dark-brown hover:text-gold transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                >
                  <SiGoodreads size={24} />
                </a>
                <a 
                  href="https://www.amazon.com/stores/author/B0DR6GJ65B?ingress=0&visitId=c91dd43f-eb35-4a9e-87b7-05a161801480" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-dark-brown hover:text-gold transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                >
                  <FaAmazon size={26} />
                </a>
                <a 
                  href="https://www.tiktok.com/@hayatkhan.theauthor" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-dark-brown hover:text-gold transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                >
                  <FaTiktok size={24} />
                </a>
                <a 
                  href="mailto:hayatkhantheauthor@gmail.com" 
                  className="text-dark-brown hover:text-gold transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                >
                  <FaEnvelope size={24} />
                </a>
              </div>
            </div>
          </FadeContent>
        </div>

        {/* Divider Line */}
        <FadeContent duration={600} delay={1000} blur={false}>
          <div className="w-full h-px bg-dark-brown/30 mt-6 lg:mt-4 mb-2 lg:mb-2"></div>
        </FadeContent>

        {/* Copyright */}
        <FadeContent duration={600} delay={1200} blur={false}>
          <div className="hidden lg:flex lg:justify-between lg:items-center lg:pl-8 lg:pr-8">
            <p className="font-serif font-bold text-dark-brown text-xs sm:text-sm">
              Copyright © HAYAT KHAN
            </p>
            <p className="font-serif font-bold text-dark-brown text-xs sm:text-sm">
              Designed with 💚 by Suha Mirza
            </p>
          </div>
          {/* Mobile Copyright */}
          <div className="lg:hidden flex flex-col items-center space-y-1">
            <p className="font-serif font-bold text-dark-brown text-xs sm:text-sm">
              Copyright © HAYAT KHAN
            </p>
            <p className="font-serif font-bold text-dark-brown text-xs sm:text-sm">
              Designed with 💚 by Suha Mirza
            </p>
          </div>
        </FadeContent>
      </div>
    </footer>
  );
};

export default Footer;