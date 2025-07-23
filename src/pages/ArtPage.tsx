import React, { useEffect } from 'react';
import Art from '../components/Art';
import Footer from '../components/Footer';

const ArtPage: React.FC = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      {/* No Navbar here since it's already in App.tsx */}
      <Art />
      <Footer />
    </div>
  );
};

export default ArtPage;
