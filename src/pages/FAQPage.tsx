import React, { useEffect } from 'react';
import SEO from '../components/SEO';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

const FAQPage: React.FC = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <SEO 
        title="FAQ - Frequently Asked Questions | Hayat Khan"
        description="Get answers to frequently asked questions about the Dublin Sisters series, Hayat Khan's writing process, and upcoming releases."
        url="https://hayatkhantheauthor.com/faq"
        image="/src/assets/images/logo.webp"
        imageAlt="FAQ about Dublin Sisters Series and Hayat Khan"
      />
      <FAQ />
      <Footer />
    </div>
  );
};

export default FAQPage;
