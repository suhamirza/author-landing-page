import React from 'react';
import FadeContent from './Animations/FadeContent/FadeContent';
import SplitText from './TextAnimations/SplitText/SplitText';
import backgroundImage from '../assets/images/background.webp';
import bookTwoImage from '../assets/images/booktwo.webp';

const Hero: React.FC = () => {
  return (
    <div id="home" className="relative min-h-screen">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${backgroundImage})`
        }}
      />      {/* Hero Content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center lg:justify-between min-h-screen px-4 sm:px-6 lg:px-32 pt-32 pb-16 lg:pt-0 lg:pb-0">
          {/* Book Cover - First on mobile, left on desktop */}
        <FadeContent duration={600} delay={200} blur={false}>
          <div className="flex-shrink-0 mb-6 lg:mb-0">          
            <div className="group bg-light-green p-3 sm:p-4 relative cursor-pointer transition-all duration-700 ease-out hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-dark-brown/30 transform-gpu">
              {/* Animated glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-border-gold/20 via-transparent to-border-gold/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out rounded-lg"></div>
              
              {/* Enhanced corner borders with hover animation */}
              <div className="absolute top-0 right-0 w-12 sm:w-18 lg:w-36 h-12 sm:h-18 lg:h-36 border-r-2 border-t-2 sm:border-r-3 sm:border-t-3 lg:border-r-4 lg:border-t-4 border-border-gold transition-all duration-500 group-hover:border-gold group-hover:scale-110"></div>
              <div className="absolute bottom-0 left-0 w-12 sm:w-18 lg:w-36 h-12 sm:h-18 lg:h-36 border-l-2 border-b-2 sm:border-l-3 sm:border-b-3 lg:border-l-4 lg:border-b-4 border-border-gold transition-all duration-500 group-hover:border-gold group-hover:scale-110"></div>
        
              
              {/* Book Image with enhanced hover effect */}
              <img 
                src={bookTwoImage} 
                alt="Facing Fate Book Cover" 
                className="w-48 sm:w-56 md:w-64 lg:w-64 h-auto shadow-2xl"
              />
            </div>
          </div>
        </FadeContent>

        {/* Text Content - Second on mobile, right on desktop */}
        <div className="flex-1 max-w-xl lg:ml-12 text-center mb-6 lg:mb-0">
          <SplitText
            text="GET YOUR OWN COPY NOW!"
            className="font-display font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-dark-brown mb-4 lg:mb-6 leading-tight"
            delay={100}
            duration={0.8}
            ease="power3.out"
            splitType="words"
            from={{ opacity: 0, y: 50 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-50px"
          />
          <FadeContent duration={600} delay={800} blur={false}>
            <a 
              href="https://www.amazon.com/Forgiving-You-Dublin-Sisters-Book-ebook/dp/B0FD9H4HQ6?ref_=ast_author_mpb"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-block bg-gold border-2 sm:border-1 lg:border-2 rounded-xl border-dark-brown px-6 sm:px-8 py-2 sm:py-3 font-sans font-black text-white text-base sm:text-lg uppercase tracking-wider transition-all duration-500 ease-out shadow-lg hover:shadow-2xl hover:shadow-gold/50 transform hover:scale-105 hover:-translate-y-1 overflow-hidden"
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-gold via-light-gold to-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
              
              {/* Shimmer effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out"></div>
              </div>
              
              {/* Pulsing ring */}
              <div className="absolute inset-0 rounded-2xl border-2 border-white/50 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 ease-out"></div>
              
              {/* Button text */}
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                BUY NOW
              </span>
            </a>
          </FadeContent>
        </div>
      </div>      {/* Bottom Scrolling Text */}
      <FadeContent duration={1000} delay={600} blur={false}>
        <div className="absolute bottom-0 left-0 right-0 bg-sage-green border-t border-b border-dark-brown py-0.5 overflow-hidden">
          <div className="flex animate-scroll">
            {/* Duplicate the text content for seamless loop */}
            {[...Array(2)].map((_, i) => (
              <div key={`scroll-group-${i}`} className="flex space-x-12 whitespace-nowrap flex-shrink-0">
                {[...Array(20)].map((_, j) => (
                  <span key={`scroll-text-${i}-${j}`} className="text-dark-brown font-serif font-bold text-base">
                    Buy now
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </FadeContent>
    </div>
  );
};

export default Hero;
