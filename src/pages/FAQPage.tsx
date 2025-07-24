import React, { useEffect } from 'react';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

const FAQPage: React.FC = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      {/* No Navbar here since it's already in App.tsx */}
      <FAQ />
      <Footer />
    </div>
  );
};

export default FAQPage;
