import React from 'react';
import Art from '../components/Art';
import Footer from '../components/Footer';

const ArtPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* No Navbar here since it's already in App.tsx */}
      <Art />
      <Footer />
    </div>
  );
};

export default ArtPage;
