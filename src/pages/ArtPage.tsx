import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Art from '../components/Art';
import Footer from '../components/Footer';

const ArtPage: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // Check if there's a hash in the URL
    if (location.hash) {
      // Wait a bit for the page to render, then scroll to the element
      setTimeout(() => {
        const element = document.getElementById(location.hash.substring(1));
        if (element) {
          const navbarHeight = 60; // Account for fixed navbar height
          const targetPosition = element.offsetTop - navbarHeight;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    } else {
      // No hash, scroll to top
      window.scrollTo(0, 0);
    }
  }, [location.hash]);

  return (
    <div className="min-h-screen">
      {/* No Navbar here since it's already in App.tsx */}
      <Art />
      <Footer />
    </div>
  );
};

export default ArtPage;
