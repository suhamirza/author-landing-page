import React, { useEffect } from 'react';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import Divider from '../components/Divider';
import About from '../components/About';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  useEffect(() => {
    // Handle hash navigation on page load
    if (window.location.hash) {
      const sectionId = window.location.hash.substring(1); // Remove the '#'
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const navbarHeight = 60;
          const targetPosition = element.offsetTop - navbarHeight;
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }, 100); // Small delay to ensure DOM is ready
    }
  }, []);

  return (
    <div>
      <SEO 
        title="Hayat Khan - Dublin Sisters Series Author"
        description="Welcome to the official website of Hayat Khan, author of the Dublin Sisters series. Discover captivating novels featuring strong characters, beautiful storytelling, and immersive world-building."
        url="https://hayatkhantheauthor.com"
        image="https://hayatkhantheauthor.com/assets/logo.webp"
        imageAlt="Hayat Khan - Author of Dublin Sisters Series"
      />
      <Hero />
      <Divider />
      <About />
      <Divider />
      <Footer />
    </div>
  );
};

export default Home;
