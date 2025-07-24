import React, { useState } from 'react';
import FadeContent from './Animations/FadeContent/FadeContent';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqData: FAQItem[] = [
    {
      question: "What is the Dublin Sisters series about?",
      answer: "The Dublin Sisters series is a contemporary romance collection that follows the lives of Muslim, South Asian, and immigrant women navigating love, family, faith, and personal growth in Dublin. Each book explores themes of forgiveness, fate, and the bonds that tie families together, while courageously addressing cultural taboos and societal pressures. These emotionally resonant love stories endure and flourish amidst religious obligations and family expectations, leaving a profound and lasting impact on readers."
    },
    {
      question: "Will there be more books in the Dublin Sisters series?",
      answer: "Yes! Hayat Khan is currently working on continuing the Dublin Sisters series. Follow her on social media for the latest updates on upcoming releases."
    },
    {
      question: "Where can I purchase the Dublin Sisters books?",
      answer: "All Dublin Sisters books are available on Amazon in both eBook and paperback formats. You can find direct links to purchase on the Books page of this website."
    },
    {
      question: "Can I contact Hayat Khan directly?",
      answer: "Absolutely! You can reach out to Hayat Khan via email at hayatkhantheauthor@gmail.com for inquiries, book club discussions, or collaboration opportunities."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full min-h-screen bg-white">
      {/* FAQ Section */}
      <section className="w-full bg-white py-2 sm:py-2 lg:py-2">
        <div className="max-w-7xl mx-auto mt-20 px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <FadeContent duration={800} delay={200} blur={false}>
            <div className="flex justify-center lg:justify-start mb-12">
              <div className="max-w-xl text-center lg:text-left lg:ml-16 xl:ml-24">
                <h2 className="font-serif font-semibold text-border-gold text-base sm:text-lg mb-2">
                  DUBLIN SISTERS
                </h2>
                <h1 className="font-display font-bold text-black text-3xl sm:text-4xl lg:text-5xl mb-3">
                  FREQUENTLY ASKED QUESTIONS
                </h1>
                {/* Divider Line */}
                <div className="w-12 h-1 bg-divider-gold mb-6 mx-auto lg:mx-0"></div>
              </div>
            </div>
          </FadeContent>

          {/* FAQ Content */}
          <FadeContent duration={800} delay={400} blur={false}>
            <div className="max-w-4xl mx-auto lg:ml-16 xl:ml-24">
              <div className="space-y-4">
                {faqData.map((faq, index) => (
                  <div 
                    key={`faq-${index}-${faq.question.slice(0, 20).replace(/\s+/g, '-')}`}
                    className="border border-sage-green/30 rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-sage-green/5 transition-colors duration-300"
                    >
                      <h3 className="font-display font-bold text-dark-brown text-lg sm:text-xl pr-4">
                        {faq.question}
                      </h3>
                      <svg
                        className={`w-6 h-6 text-dark-brown transform transition-transform duration-300 flex-shrink-0 ${
                          openIndex === index ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="px-6 pb-4">
                        <p className="font-serif text-black text-base sm:text-lg leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeContent>

          {/* Contact Section */}
          <FadeContent duration={800} delay={600} blur={false}>
            <div className="max-w-4xl mx-auto lg:ml-16 xl:ml-24 mt-12">
              <div className="text-center lg:text-left bg-sage-green/10 rounded-lg p-8">
                <h3 className="font-display font-bold text-dark-brown text-xl sm:text-2xl mb-4">
                  Still Have Questions?
                </h3>
                <p className="font-serif text-black text-base sm:text-lg leading-relaxed mb-6">
                  Don't see your question here? Feel free to reach out directly!
                </p>
                <a
                  href="mailto:hayatkhantheauthor@gmail.com"
                  className="inline-flex items-center font-serif font-medium text-dark-brown text-base sm:text-lg hover:text-gold transition-colors duration-300 underline decoration-2 underline-offset-4"
                >
                  Contact Hayat Khan
                  <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
              </div>
            </div>
          </FadeContent>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
