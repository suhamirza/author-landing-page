import React from 'react';
import Art from '../components/Art';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const ArtPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      {/* Add some top padding to account for fixed navbar */}
      <div className="pt-20">
        <Art />
        <Footer />
      </div>
    </div>
  );
};

export default ArtPage;
