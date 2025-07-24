import React, { useEffect } from 'react';
import BonusScenes from '../components/BonusScenes';
import Footer from '../components/Footer';

const BonusScenesPage: React.FC = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      {/* No Navbar here since it's already in App.tsx */}
      <BonusScenes />
      <Footer />
    </div>
  );
};

export default BonusScenesPage;
