import React from 'react';
import FadeContent from './Animations/FadeContent/FadeContent';
import SplitText from './TextAnimations/SplitText/SplitText';

const Hero: React.FC = () => {
  return (
    <div id="home" className="relative min-h-screen">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/src/assets/images/background.webp')`
        }}
      />      {/* Hero Content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-end lg:justify-between min-h-screen px-4 sm:px-8 lg:px-40 pt-40 sm:pt-32 lg:pt-0 pb-24 lg:pb-0">
          {/* Book Cover - First on mobile, left on desktop */}
        <FadeContent duration={600} delay={200} blur={false}>
          <div className="flex-shrink-0 mb-8 lg:mb-0">          
            <div className="bg-light-green p-4 sm:p-6 relative">
              {/* Corner Borders - Responsive size and thickness */}
              <div className="absolute top-0 right-0 w-16 sm:w-24 lg:w-48 h-16 sm:h-24 lg:h-48 border-r-2 border-t-2 sm:border-r-3 sm:border-t-3 lg:border-r-4 lg:border-t-4 border-border-gold"></div>
              <div className="absolute bottom-0 left-0 w-16 sm:w-24 lg:w-48 h-16 sm:h-24 lg:h-48 border-l-2 border-b-2 sm:border-l-3 sm:border-b-3 lg:border-l-4 lg:border-b-4 border-border-gold"></div>
                {/* Book Image - Responsive size */}
              <img 
                src="/src/assets/images/booktwo.webp" 
                alt="Facing Fate Book Cover" 
                className="w-48 sm:w-64 md:w-72 lg:w-80 h-auto shadow-2xl"
              />
            </div>
          </div>
        </FadeContent>

        {/* Text Content - Second on mobile, right on desktop */}
        <div className="flex-1 max-w-2xl lg:ml-16 text-center mb-8 lg:mb-0">
          <SplitText
            text="GET YOUR OWN COPY NOW!"
            className="font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-dark-brown mb-6 lg:mb-8 leading-tight"
            delay={100}
            duration={0.8}
            ease="power3.out"
            splitType="words"
            from={{ opacity: 0, y: 50 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-50px"
          />
          <FadeContent duration={600} delay={200} blur={false}>
            <a 
              href="https://www.amazon.com/Forgiving-You-Dublin-Sisters-Book-ebook/dp/B0FD9H4HQ6?ref_=ast_author_mpb"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gold border-2 sm:border-3 lg:border-3 rounded-2xl border-dark-brown px-8 sm:px-12 py-3 sm:py-4 font-sans font-black text-white text-lg sm:text-xl uppercase tracking-wider hover:bg-light-gold transition-colors duration-300 shadow-lg"
            >
              BUY NOW
            </a>
          </FadeContent>
        </div>
      </div>      {/* Bottom Scrolling Text */}
      <FadeContent duration={1000} delay={600} blur={false}>
        <div className="absolute bottom-0 left-0 right-0 bg-sage-green border-t border-b sm:border-t-2 sm:border-b-2 border-dark-brown py-1 overflow-hidden">        <div className="flex animate-scroll">
          {/* Duplicate the text content for seamless loop */}
          {[...Array(2)].map((_, i) => (
            <div key={`scroll-group-${i}`} className="flex space-x-16 whitespace-nowrap flex-shrink-0">
              {[...Array(20)].map((_, j) => (
                <span key={`scroll-text-${i}-${j}`} className="text-dark-brown font-serif font-bold text-xl">
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
