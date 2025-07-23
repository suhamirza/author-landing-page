import React, { useState } from 'react';
import FadeContent from './Animations/FadeContent/FadeContent';
import bookOneImage from '../assets/images/bookone.webp';
import bookTwoImage from '../assets/images/booktwo.webp';

const Books: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState<number>(0);
  const [showModal, setShowModal] = useState(false);

  const books = [
    {
      id: 1,
      title: "Facing Fate",
      image: bookOneImage,
      available: true,
      amazonUrl: "https://www.amazon.com/Facing-Fate-Dublin-Sisters-Book-ebook/dp/B0DXDMGGZ9",
      blurb: `A mesmerising tale of love, passion, betrayal and revenge.

Nawal's Struggles
She was abandoned on her wedding day. The groom disappeared. Accusations flew. Her honor was at stake, and her family's reputation was on the line. One man saved her from all this misery—or was it yet another cruel twist of fate?

Salman's Obsession
He had wanted her for as long as he could remember. The expectations and prying eyes of those around him never wavered his resolve to make her his. Everything was going according to his plans—until the other came and shattered it all, breaking his heart into a million pieces. Now, he was determined to change fate and make her his.

Daud's Rage
Life was never fair. Those who should have protected him treated him unjustly, and everything was taken from him. He would no longer sit back and accept his fate. He would fight for it. A seething blaze simmered within him, and he was ready to burn anyone who crossed his path—even those who were innocent.`
    },
    {
      id: 2,
      title: "Forgiving You",
      image: bookTwoImage,
      available: true,
      amazonUrl: "https://www.amazon.com/Forgiving-You-Dublin-Sisters-Book-ebook/dp/B0FD9H4HQ6?ref_=ast_author_mpb", // Update with actual URL
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
      amazonUrl: "",
      blurb: "The third book in the Dublin Sisters series will come out soon!"
    }
  ];

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
      // Create a unique key based on content and position
      const uniqueKey = line ? `${line.slice(0, 20)}-${index}` : `empty-${index}`;
      
      // Check if line contains character headings (ends with specific character names)
      if (line.includes("Struggles") || line.includes("Obsession") || line.includes("Rage") || 
          line.includes("Determination") || line.includes("Resolve") || line.includes("Redemption") || 
          line.includes("Strength")) {
        return (
          <div key={`heading-${uniqueKey}`} className="font-bold mt-4 first:mt-0">
            {line}
          </div>
        );
      }
      // Regular text
      return line ? <div key={`text-${uniqueKey}`}>{line}</div> : <div key={`space-${uniqueKey}`} className="h-4"></div>;
    });
  };
  return (
    <>
      <div id="books" className="w-full bg-white pb-16 sm:pb-20 lg:pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeContent duration={800} delay={200} blur={false}>
          <div className="flex justify-center lg:justify-start mt-20 mb-8">
            <div className="max-w-xl text-center lg:text-left lg:ml-16 xl:ml-24">
              <h2 className="font-serif font-semibold text-border-gold text-base sm:text-lg mb-2">
                DUBLIN SISTERS
              </h2>
              <h1 className="font-display font-bold text-black text-3xl sm:text-4xl lg:text-5xl mb-3">
                BOOKS
              </h1>
              {/* Divider Line */}
              <div className="w-12 h-1 bg-divider-gold mb-6 mx-auto lg:mx-0"></div>
            </div>
          </div>
        </FadeContent>

        {/* Books Grid */}
        <FadeContent duration={800} delay={400} blur={false}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
            {books.map((book) => (
              <div key={book.id} className="flex flex-col items-center text-center group">
                {/* Book Cover */}
                <div className="relative mb-6 transform transition-transform duration-300 group-hover:scale-105">
                  {book.available ? (
                    <img
                      src={book.image}
                      alt={book.title}
                      className="w-48 sm:w-56 lg:w-64 h-auto rounded-lg shadow-xl"
                    />
                  ) : (
                    <div className="w-48 sm:w-56 lg:w-64 h-64 sm:h-84 lg:h-102 bg-gray-300 rounded-lg shadow-xl flex items-center justify-center">
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
                </div>

                {/* Book Title */}
                <h3 className="font-display font-bold text-xl lg:text-2xl text-black mb-4">
                  {book.title}
                </h3>

                {/* Button Container */}
                <div className="flex flex-col sm:flex-row gap-3 w-full max-w-sm">
                  {/* View Blurb Button */}
                  <button
                    onClick={() => openModal(book.id - 1)} // Convert ID to index
                    className={`group relative ${book.available ? 'flex-1' : 'px-4 py-2 mx-auto'} bg-white border-2 border-gold rounded-2xl ${book.available ? 'px-6 py-3' : ''} font-sans font-bold text-gold text-sm uppercase tracking-wider transition-all duration-300 ease-out shadow-md hover:shadow-lg hover:shadow-gold/20 transform hover:scale-[1.02] hover:-translate-y-0.5 overflow-hidden cursor-pointer`}
                  >
                    {/* Subtle background shift on hover */}
                    <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                    
                    {/* Minimal shimmer */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/20 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-600 ease-out"></div>
                    </div>
                    
                    {/* Button text */}
                    <span className="relative z-10">View Blurb</span>
                  </button>

                  {/* Buy Now Button (only for available books) */}
                  {book.available && (
                    <a 
                      href={book.amazonUrl}
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="group relative flex-1 bg-dark-purple rounded-2xl px-6 py-3 font-sans font-bold text-white text-sm uppercase tracking-wider transition-all duration-300 ease-out shadow-md hover:shadow-lg hover:shadow-light-purple/20 transform hover:scale-[1.02] hover:-translate-y-0.5 overflow-hidden inline-block text-center"
                    >
                      {/* Subtle color shift on hover */}
                      <div className="absolute inset-0 bg-light-purple opacity-0 group-hover:opacity-20 transition-opacity duration-400 rounded-2xl"></div>
                      
                      {/* Minimal shimmer */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-600 ease-out"></div>
                      </div>
                      
                      {/* Button text */}
                      <span className="relative z-10">Buy Now</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </FadeContent>
      </div>
    </div>    {/* Modal */}    {isModalOpen && (
      <div className={`fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm transition-all duration-300 ease-out ${showModal ? 'opacity-100' : 'opacity-0'}`}>
        <div className={`relative bg-purple rounded-2xl shadow-2xl max-w-5xl mx-4 p-6 sm:p-8 lg:p-12 max-h-[90vh] overflow-y-auto scrollbar-custom transform transition-all duration-300 ease-out ${showModal ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 translate-y-4'}`}>
          
          {/* Close Button */}
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-dark-purple hover:text-light-purple transition-colors duration-300"
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
                  className="w-36 sm:w-48 lg:w-64 h-auto shadow-xl rounded-lg"
                />
              ) : (
                <div className="w-36 sm:w-48 lg:w-64 h-48 sm:h-64 lg:h-80 bg-gray-300 rounded-lg shadow-xl flex flex-col items-center justify-center text-gray-600">
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
              <h2 className="font-display font-bold text-black text-xl sm:text-2xl lg:text-3xl mb-4">
                {books[selectedBook].title}
              </h2>
              <div className="font-serif text-black text-sm sm:text-base leading-relaxed">
                {formatBlurb(books[selectedBook].blurb)}
              </div>
            </div>
          </div>
        </div>
      </div>
    )}
    </>
  );
};

export default Books;
