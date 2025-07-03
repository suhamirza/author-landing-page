import React from 'react';

const About: React.FC = () => {
  return (
    <div id="about" className="w-full bg-light-sage-green py-12 sm:py-16 lg:py-20">     
     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-24 xl:gap-32">
          
          {/* Text Content */}
          <div className="flex-1 max-w-2xl">
            {/* Header */}
            <div className="mb-8">
              <h2 className="font-serif font-semibold text-border-gold text-lg sm:text-xl mb-2">
                ABOUT THE
              </h2>
              <h1 className="font-display font-bold text-black text-4xl sm:text-5xl lg:text-6xl mb-4">
                AUTHOR
              </h1>
              {/* Divider Line */}
              <div className="w-16 h-1 bg-divider-gold mb-8"></div>
            </div>
            
            {/* Description */}
            <div className="space-y-6 text-black font-serif font-medium text-base sm:text-lg leading-relaxed">
              <p>
                Hayat Khan is an author of contemporary romance, specializing in stories that explore the 
                lives of Muslim, South Asian, and immigrant characters. Her novels delve into love stories that 
                endure and flourish amidst societal pressures, religious obligations, and family expectations.
              </p>
              
              <p>
                Hayat is deeply passionate about crafting narratives that not only resonate emotionally but 
                also courageously address cultural taboos, leaving a profound and lasting impact on the heart.
              </p>
            </div>
          </div>
          
          {/* Image */}
          <div className="flex-shrink-0">            
            <div className="relative">
              <img 
                src="/src/assets/images/hijabi.PNG" 
                alt="Hayat Khan - Author" 
                className="w-72 sm:w-80 md:w-96 lg:w-[26rem] xl:w-[30rem] h-auto"
              />
              {/* Decorative elements could be added here if needed */}
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default About;
