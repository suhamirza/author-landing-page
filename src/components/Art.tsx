import React, { useState } from 'react';
import FadeContent from './Animations/FadeContent/FadeContent';
import Divider from './Divider';
import charArt1 from '../assets/images/charart1.webp';

const Art: React.FC = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const characterArtImages = [
    {
      src: charArt1,
      title: "Nawal & Salman",
      description: "Nawal & Salman, featured in Facing Fate & Forgiving you, seated on the jhoola"
    }
  ];

  const openLightbox = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setSelectedImage(null);
  };
  return (
    <div className="w-full min-h-screen bg-white">
      {/* Character Art Section */}
      <section id="character-art" className="w-full bg-white py-2 sm:py-2 lg:py-2">
        <div className="max-w-7xl mx-auto mt-20 px-4 sm:px-6 lg:px-8">
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

          {/* Character Art Gallery */}
          <FadeContent duration={800} delay={400} blur={false}>
            <div className="max-w-6xl mx-auto lg:ml-16 xl:ml-24">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {characterArtImages.map((image) => (
                  <button 
                    key={`character-art-${image.title.replace(/\s+/g, '-').toLowerCase()}`}
                    className="group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gold"
                    onClick={() => openLightbox(image.src)}
                  >
                    <div className="relative">
                      <img 
                        src={image.src} 
                        alt={image.title}
                        className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-4 left-4 right-4">
                          <h3 className="font-display font-bold text-white text-base md:text-lg mb-1">
                            {image.title}
                          </h3>
                          <p className="font-serif text-white/90 text-xs md:text-sm">
                            {image.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
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

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <button 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 border-none cursor-pointer"
          onClick={closeLightbox}
          onKeyDown={(e) => {
            if (e.key === 'Escape') {
              closeLightbox();
            }
          }}
          aria-label="Close lightbox"
        >
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={(e) => {
                e.stopPropagation();
                closeLightbox();
              }}
              className="absolute top-4 right-4 text-white hover:text-gold transition-colors duration-300 z-10"
              aria-label="Close lightbox"
            >
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            {selectedImage && (
              <img 
                src={selectedImage} 
                alt="Character Art" 
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            )}
          </div>
        </button>
      )}
    </div>
  );
};

export default Art;
