import React from 'react';
import FadeContent from './Animations/FadeContent/FadeContent';
import Divider from './Divider';

const Art: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-white">
      {/* Character Art Section */}
      <section id="character-art" className="w-full bg-white py-2 sm:py-2 lg:py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <FadeContent duration={800} delay={200} blur={false}>
            <div className="flex justify-center lg:justify-start mb-12">
              <div className="max-w-xl text-center lg:text-left lg:ml-16 xl:ml-24">
                <h2 className="font-serif font-semibold text-border-gold text-base sm:text-lg mb-2">
                  DUBLIN SISTERS
                </h2>
                <h1 className="font-display font-bold text-black text-3xl sm:text-4xl lg:text-5xl mb-3">
                  CHARACTER ART
                </h1>
                {/* Divider Line */}
                <div className="w-12 h-1 bg-divider-gold mb-6 mx-auto lg:mx-0"></div>
              </div>
            </div>
          </FadeContent>

          {/* Coming Soon Content */}
          <FadeContent duration={800} delay={400} blur={false}>
            <div className="flex justify-center items-center min-h-[300px]">
              <div className="text-center">
                <h3 className="font-display font-bold text-dark-purple text-2xl sm:text-3xl lg:text-4xl mb-4">
                  COMING SOON!
                </h3>
                <p className="font-serif text-black text-base sm:text-lg leading-relaxed max-w-md mx-auto">
                  Beautiful character illustrations from the Dublin Sisters series will be featured here.
                </p>
              </div>
            </div>
          </FadeContent>
        </div>
      </section>
        <Divider />
      {/* Dublin Sisterverse Section */}
      <section id="dublin-sisterverse" className="w-full py-16 sm:py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <FadeContent duration={800} delay={600} blur={false}>
            <div className="flex justify-center lg:justify-start mb-12">
              <div className="max-w-xl text-center lg:text-left lg:ml-16 xl:ml-24">
                <h2 className="font-serif font-semibold text-border-gold text-base sm:text-lg mb-2">
                  EXTENDED UNIVERSE
                </h2>
                <h1 className="font-display font-bold text-black text-3xl sm:text-4xl lg:text-5xl mb-3">
                  DUBLIN SISTERVERSE
                </h1>
                {/* Divider Line */}
                <div className="w-12 h-1 bg-divider-gold mb-6 mx-auto lg:mx-0"></div>
              </div>
            </div>
          </FadeContent>

          {/* Coming Soon Content */}
          <FadeContent duration={800} delay={800} blur={false}>
            <div className="flex justify-center items-center min-h-[300px]">
              <div className="text-center">
                <h3 className="font-display font-bold text-dark-purple text-2xl sm:text-3xl lg:text-4xl mb-4">
                  COMING SOON!
                </h3>
                <p className="font-serif text-black text-base sm:text-lg leading-relaxed max-w-md mx-auto">
                  Explore the expanded world of Dublin Sisters with exclusive artwork and universe details.
                </p>
              </div>
            </div>
          </FadeContent>
        </div>
      </section>
    </div>
  );
};

export default Art;
