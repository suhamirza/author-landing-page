import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SEO from '../components/SEO';
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
      <SEO 
        title="Character Art & Dublin Sisterverse | Hayat Khan"
        description="Explore exclusive character artwork and beautiful illustrations from the Dublin Sisters series and extended universe by Hayat Khan."
        url="https://hayatkhan.com/art"
        image="/src/assets/images/charart1.webp"
        imageAlt="Character Art from Dublin Sisters Series"
      />
      <Art />
      <Footer />
    </div>
  );
};

export default ArtPage;
