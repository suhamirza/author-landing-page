import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/src/assets/images/background.jpg')`
        }}
      />      {/* Hero Content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-end lg:justify-between min-h-screen px-4 sm:px-8 lg:px-40 pt-40 sm:pt-32 lg:pt-0 pb-24 lg:pb-0">
          {/* Book Cover - First on mobile, left on desktop */}
        <div className="flex-shrink-0 mb-8 lg:mb-0">          
          <div className="bg-light-green p-4 sm:p-6 relative">
            {/* Corner Borders - Responsive size and thickness */}
            <div className="absolute top-0 right-0 w-16 sm:w-24 lg:w-48 h-16 sm:h-24 lg:h-48 border-r-2 border-t-2 sm:border-r-3 sm:border-t-3 lg:border-r-4 lg:border-t-4 border-border-gold"></div>
            <div className="absolute bottom-0 left-0 w-16 sm:w-24 lg:w-48 h-16 sm:h-24 lg:h-48 border-l-2 border-b-2 sm:border-l-3 sm:border-b-3 lg:border-l-4 lg:border-b-4 border-border-gold"></div>
              {/* Book Image - Responsive size */}
            <img 
              src="/src/assets/images/bookone.jpg" 
              alt="Facing Fate Book Cover" 
              className="w-48 sm:w-64 md:w-72 lg:w-80 h-auto shadow-2xl"
            />
          </div>
        </div>

        {/* Text Content - Second on mobile, right on desktop */}
        <div className="flex-1 max-w-2xl lg:ml-16 text-center mb-8 lg:mb-0">
          <h1 className="font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-dark-brown mb-6 lg:mb-8 leading-tight">
            GET YOUR OWN
            <br />
            COPY NOW!
          </h1>
            <a 
            href="https://www.amazon.com/Facing-Fate-Dublin-Sisters-Book-ebook/dp/B0DXDMGGZ9/ref=sr_1_1?crid=3N20QB1NN63FM&dib=eyJ2IjoiMSJ9.uZl-SpLWydzEwRhjwb0dVQ.FavJBcTNd8V_xHdK2y8wmJNci_FXRrKEyavaxPlN2_4&dib_tag=se&keywords=facing+fate+hayat+khan&qid=1749862682&sprefix=facing+fate+haya%2Caps%2C226&sr=8-1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gold border-2 sm:border-3 lg:border-3 rounded-2xl border-dark-brown px-8 sm:px-12 py-3 sm:py-4 font-sans font-black text-white text-lg sm:text-xl uppercase tracking-wider hover:bg-light-gold transition-colors duration-300 shadow-lg"
          >
            BUY NOW
          </a>
        </div>
      </div>      {/* Bottom Scrolling Text */}
      <div className="absolute bottom-0 left-0 right-0 bg-sage-green border-t border-b sm:border-t-2 sm:border-b-2 border-dark-brown py-1 overflow-hidden">
        <div className="flex animate-scroll">
          {/* Duplicate the text content for seamless loop */}
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex space-x-16 whitespace-nowrap flex-shrink-0">
              {[...Array(20)].map((_, j) => (
                <span key={j} className="text-dark-brown font-serif font-bold text-xl">
                  Buy now
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
