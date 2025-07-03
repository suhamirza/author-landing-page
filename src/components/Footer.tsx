import React from 'react';
import FadeContent from './Animations/FadeContent/FadeContent';
import logoImage from '../assets/images/logo.webp';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-sage-green py-12 sm:py-16 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          
          {/* Logo and Tagline Section */}
          <FadeContent duration={800} delay={200} blur={false}>
            <div className="lg:col-span-1 text-center">
              <div className="mb-4">
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
                <p className="font-serif font-medium text-black text-xs sm:text-sm leading-relaxed max-w-xs mx-auto">
                  DELVE INTO THE WORLD OF DUBLIN SISTERS WITH HAYAT KHAN!
                </p>
              </div>
            </div>
          </FadeContent>

          {/* Social Media Section - closer spacing on large screens */}
          <FadeContent duration={800} delay={400} blur={false}>
            <div className="lg:col-span-1 text-center lg:-mr-4">
              <h3 className="font-display font-bold text-dark-brown text-base sm:text-lg mb-3">
                SOCIAL MEDIA
              </h3>
              <div className="w-10 h-1 bg-gold mb-4 mx-auto"></div>
              
              <div className="space-y-3 flex flex-col items-center">
                <a 
                  href="https://www.instagram.com/hayatkhan_theauthor/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-serif font-medium text-dark-brown text-xs sm:text-sm hover:text-gold transition-colors duration-300 underline decoration-1 underline-offset-4"
                >
                  INSTAGRAM
                </a>
                <a 
                  href="https://www.goodreads.com/author/show/53820632.Hayat_Khan" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-serif font-medium text-dark-brown text-xs sm:text-sm hover:text-gold transition-colors duration-300 underline decoration-1 underline-offset-4"
                >
                  GOODREADS
                </a>
              </div>
            </div>
          </FadeContent>

          {/* About Author Section - closer spacing on large screens */}
          <FadeContent duration={800} delay={600} blur={false}>
            <div className="lg:col-span-1 text-center lg:-mx-2">
              <h3 className="font-display font-bold text-dark-brown text-base sm:text-lg mb-3">
                ABOUT AUTHOR
              </h3>
              <div className="w-10 h-1 bg-gold mb-4 mx-auto"></div>
              
              <div className="flex justify-center">
                <a 
                  href="#about" 
                  className="font-serif font-medium text-dark-brown text-xs sm:text-sm hover:text-gold transition-colors duration-300 underline decoration-1 underline-offset-4"
                >
                  LEARN MORE
                </a>
              </div>
            </div>
          </FadeContent>

          {/* Books Section - closer spacing on large screens */}
          <FadeContent duration={800} delay={800} blur={false}>
            <div className="lg:col-span-1 text-center lg:-ml-4">
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
          </FadeContent>
        </div>

        {/* Divider Line */}
        <FadeContent duration={600} delay={1000} blur={false}>
          <div className="w-full h-px bg-dark-brown/30 mt-14 lg:mt-16 mb-6 lg:mb-8"></div>
        </FadeContent>

        {/* Copyright */}
        <FadeContent duration={600} delay={1200} blur={false}>
          <div className="text-center">
            <p className="font-serif font-bold text-dark-brown text-xs sm:text-sm">
              Copyright © HAYAT KHAN
            </p>
          </div>
        </FadeContent>
      </div>
    </footer>
  );
};

export default Footer;