import React from 'react';
import FadeContent from './Animations/FadeContent/FadeContent';
import authorImage from '../assets/images/hijabi.webp';

const About: React.FC = () => {
  return (
    <div id="about" className="w-full bg-light-sage-green py-8 sm:py-12 lg:py-16">     
     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 xl:gap-24">
          
          {/* Text Content */}
          <div className="flex-1 max-w-xl text-center lg:text-left">
            {/* Header */}
            <FadeContent duration={800} delay={200} blur={false}>
              <div className="mb-6">
                <h2 className="font-serif font-semibold text-border-gold text-base sm:text-lg mb-2">
                  ABOUT THE
                </h2>
                <h1 className="font-display font-bold text-black text-3xl sm:text-4xl lg:text-5xl mb-3">
                  AUTHOR
                </h1>
                {/* Divider Line */}
                <div className="w-12 h-1 bg-divider-gold mb-6 mx-auto lg:mx-0"></div>
              </div>
            </FadeContent>
            
            {/* Description */}
            <FadeContent duration={800} delay={400} blur={false}>
              <div className="space-y-4 text-black font-serif font-medium text-sm sm:text-base leading-relaxed">
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
            </FadeContent>
          </div>
          
          {/* Image */}
          <div className="flex-shrink-0">            
            <FadeContent duration={800} delay={600} blur={false}>
              <div className="relative">
                <img 
                  src={authorImage} 
                  alt="Hayat Khan - Author" 
                  className="w-56 sm:w-64 md:w-72 lg:w-80 xl:w-96 h-auto"
                />
                {/* Decorative elements could be added here if needed */}
              </div>
            </FadeContent>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default About;
