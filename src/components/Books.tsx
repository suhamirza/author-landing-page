import React, { useCallback, useState, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

const Books: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: 'center',
    containScroll: 'trimSnaps'
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState<number>(0);
  const [showModal, setShowModal] = useState(false);

  const books = [
    {
      id: 1,
      title: "Facing Fate",
      image: "/src/assets/images/bookone.jpg",
      available: true,
      blurb: `A mesmerising tale of love, passion, betrayal and revenge.

Nawal's Struggles
She was abandoned on her wedding day. The groom disappeared. Accusations flew. Her honor was at stake, and her family's reputation was on the line. One man saved her from all this misery—or was it yet another cruel twist of fate?

Salman's Obsession
He had wanted her for as long as he could remember. The expectations and prying eyes of those around him never wavered his resolve to make her his. Everything was going according to his plans—until the other came and shattered it all, breaking his heart into a million pieces. Now, he was determined to change fate and make her his.

Daud's Rage
Life was never fair. Those who should have protected him treated him unjustly, and everything was taken from him. He would no longer sit back and accept his fate. He would fight for it. A seething blaze simmered within him, and he was ready to burn anyone who crossed his path—even those who were innocent.`
    },    {
      id: 2,
      title: "Forgiving You",
      image: "/src/assets/images/booktwo.jpeg",
      available: true,
      blurb: `A stirring journey of love and redemption where forgiveness mends hearts and love redeems even the darkest of souls.

Nawal's Determination
She was forced into a matrimonial union she never wanted. It took her ages to accept him. Just as she was falling in love with her husband, her past played the ultimate betrayal card, destroying the path to her happiness. Time was running out to seek forgiveness and, most of all, to prove her love. But was it already too late?

Salman's Resolve
He loved her like a madman. For her, he had learned to be patient and become the man she wanted. But she betrayed him in the cruellest way possible. His heart bled and his soul wept. He wasn't a forgiving man, so why should he give her another chance?

Daud's Redemption
He had done what he set out to do, so why wasn't it enough? Darkness was consuming him, threatening to destroy him completely. Until her. He had hurt her, rejected her, yet deep down his soul had always cried for her. But would she ever forgive him?

Susan's Strength
Life was lonely, until he came into her world, giving her a gift she'd never dreamt of. She thought she had finally found her happily ever after, but then he chose another. Life taught her a harsh reality. Now, as a broken man, he was back. But was she strong enough to forgive him?`
    },
    {
      id: 3,
      title: "Third Book", 
      image: "",
      available: false,
      blurb: "The third book in the Dublin Sisters series will complete the trilogy with an unforgettable conclusion. More details will be revealed as the series progresses!"
    }
  ];

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);
  const openModal = (bookIndex: number) => {
    setSelectedBook(bookIndex);
    setIsModalOpen(true);
    // Trigger animation after state update
    setTimeout(() => setShowModal(true), 10);
  };
  const closeModal = () => {
    setShowModal(false);
    // Close modal after animation completes
    setTimeout(() => setIsModalOpen(false), 300);
  };

  const formatBlurb = (text: string) => {
    // Split the text by lines and format character headings
    const lines = text.split('\n');
    return lines.map((line, index) => {
      // Check if line contains character headings (ends with specific character names)
      if (line.includes("Struggles") || line.includes("Obsession") || line.includes("Rage") || 
          line.includes("Determination") || line.includes("Resolve") || line.includes("Redemption") || 
          line.includes("Strength")) {
        return (
          <div key={index} className="font-bold mt-4 first:mt-0">
            {line}
          </div>
        );
      }
      // Regular text
      return line ? <div key={index}>{line}</div> : <div key={index} className="h-4"></div>;
    });
  };
  return (
    <>
      <div className="w-full bg-white py-8 sm:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-LEFT mb-12">
          <h2 className="font-serif font-semibold text-border-gold text-lg sm:text-xl mb-2">
            DUBLIN SISTERS
          </h2>
          <h1 className="font-display font-bold text-black text-4xl sm:text-5xl lg:text-6xl mb-4">
            BOOKS
          </h1>
          {/* Divider Line */}
          <div className="w-16 h-1 bg-gold mb-8"></div>
        </div>

        {/* Embla Carousel */}
        <div className="relative">          {/* Previous Button */}
          <button
            onClick={scrollPrev}
            className="absolute left-1 sm:left-4 top-1/2 -translate-y-1/2 z-10 group cursor-pointer"
          >
            <div className="relative w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-white/90 backdrop-blur-sm rounded-full shadow-2xl flex items-center justify-center border border-gold/30 group-hover:border-gold group-hover:bg-white group-hover:shadow-gold-glow transition-all duration-500 ease-out">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gold/10 to-light-gold/20 group-hover:from-gold/20 group-hover:to-light-gold/30 transition-all duration-500"></div>
              <svg className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 text-dark-brown group-hover:text-gold transition-all duration-300 transform group-hover:-translate-x-0.5 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/>
              </svg>
            </div>
          </button>

          {/* Next Button */}
          <button
            onClick={scrollNext}
            className="absolute right-1 sm:right-4 top-1/2 -translate-y-1/2 z-10 group cursor-pointer"
          >
            <div className="relative w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-white/90 backdrop-blur-sm rounded-full shadow-2xl flex items-center justify-center border border-gold/30 group-hover:border-gold group-hover:bg-white group-hover:shadow-gold-glow transition-all duration-500 ease-out">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gold/10 to-light-gold/20 group-hover:from-gold/20 group-hover:to-light-gold/30 transition-all duration-500"></div>
              <svg className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 text-dark-brown group-hover:text-gold transition-all duration-300 transform group-hover:translate-x-0.5 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
              </svg>
            </div>
          </button>

          <div className="embla overflow-hidden mx-8 sm:mx-12 md:mx-16" ref={emblaRef}>
            <div className="embla__container flex">
              {books.map((book, index) => (
                <div key={book.id} className="embla__slide flex-[0_0_100%] min-w-0 px-6 sm:px-8 md:px-4">
                  <div className="text-center">
                    <button 
                      className="cursor-pointer transform hover:scale-105 transition-transform duration-300 bg-transparent border-none p-0"
                      onClick={() => openModal(index)}
                    >
                      {book.available ? (
                        <img
                          src={book.image}
                          alt={book.title}
                          className="w-64 md:w-80 h-auto rounded-lg shadow-xl mx-auto"
                        />
                      ) : (
                        <div className="w-64 md:w-80 aspect-[3/4] bg-gray-300 rounded-lg shadow-xl mx-auto flex items-center justify-center">
                          <div className="text-center px-4">
                            <h3 className="font-display font-bold text-lg text-gray-600">
                              {book.title}
                            </h3>
                            <p className="font-serif text-sm text-gray-500 mt-2">
                              COMING SOON!
                            </p>
                          </div>
                        </div>
                      )}
                    </button>
                    <h3 className="mt-4 font-display font-bold text-xl text-black">
                      {book.title}
                    </h3>
                    <button
                      onClick={() => openModal(index)}
                      className="mt-2 font-display font-bold text-black text-sm hover:text-gold transition-colors duration-300 uppercase tracking-wider bg-transparent border-none cursor-pointer"
                    >
                      CLICK TO read BLURB
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>        </div>
      </div>
    </div>    {/* Modal */}    {isModalOpen && (
      <div className={`fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm transition-all duration-300 ease-out ${showModal ? 'opacity-100' : 'opacity-0'}`}>
        <div className={`relative bg-light-sage-green rounded-2xl shadow-2xl max-w-5xl mx-4 p-6 sm:p-8 lg:p-12 max-h-[90vh] overflow-y-auto scrollbar-custom transform transition-all duration-300 ease-out ${showModal ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 translate-y-4'}`}>
          
          {/* Close Button */}
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-dark-brown hover:text-gold transition-colors duration-300"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
            </svg>
          </button>          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12">
            
            {/* Book Cover */}
            <div className="flex-shrink-0">
              {books[selectedBook].available ? (
                <img 
                  src={books[selectedBook].image} 
                  alt={books[selectedBook].title}
                  className="w-48 sm:w-64 lg:w-80 h-auto shadow-xl rounded-lg"
                />
              ) : (
                <div className="w-48 sm:w-64 lg:w-80 h-64 sm:h-80 lg:h-96 bg-gray-300 rounded-lg shadow-xl flex flex-col items-center justify-center text-gray-600">
                  <div className="text-center px-4">
                    <h3 className="font-display font-bold text-lg sm:text-xl mb-2">
                      {books[selectedBook].title}
                    </h3>
                    <p className="font-serif text-sm sm:text-base font-medium">
                      COMING SOON!
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Blurb Content */}
            <div className="flex-1 max-w-2xl">
              <h2 className="font-display font-bold text-black text-2xl sm:text-3xl lg:text-4xl mb-6">
                {books[selectedBook].title}
              </h2>
                <div className="font-serif text-black text-base sm:text-lg leading-relaxed">
                {formatBlurb(books[selectedBook].blurb)}
              </div>

              {books[selectedBook].available && (
                <div className="mt-8">
                  <a 
                    href="https://www.amazon.com/Facing-Fate-Dublin-Sisters-Book-ebook/dp/B0DXDMGGZ9"
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="inline-block bg-gold border-2 sm:border-2 lg:border-3 rounded-2xl border-dark-brown px-6 sm:px-8 py-2 sm:py-3 font-sans font-black text-white text-base sm:text-lg uppercase tracking-wider hover:bg-light-gold transition-colors duration-300 shadow-lg"
                  >
                    BUY NOW
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    )}
    </>
  );
};

export default Books;
