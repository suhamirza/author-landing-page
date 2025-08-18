import React, { useEffect } from 'react';
import SEO from '../components/SEO';
import BonusScenes from '../components/BonusScenes';
import Footer from '../components/Footer';

const BonusScenesPage: React.FC = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <SEO 
        title="Bonus Scenes - Dublin Sisters Series | Hayat Khan"
        description="Read exclusive bonus scenes and deleted chapters from the Dublin Sisters series. Dive deeper into the world created by Hayat Khan."
        url="https://hayatkhantheauthor.com/bonus-scenes"
        image="/src/assets/images/logo.webp"
        imageAlt="Bonus Scenes from Dublin Sisters Series"
      />
      <BonusScenes />
      <Footer />
    </div>
  );
};

export default BonusScenesPage;
