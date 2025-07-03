import React from 'react';
import FadeContent from './Animations/FadeContent/FadeContent';
import flowersImage from '../assets/images/flowers.webp';

const Divider: React.FC = () => {
  return (
    <div className="w-full bg-white py-6 sm:py-8 lg:py-12 flex justify-center items-center">
      <div className="flex justify-center items-center max-w-xs">
        <FadeContent duration={800} delay={200} blur={false}>
          <img 
            src={flowersImage} 
            alt="Floral Divider" 
            className="w-48 sm:w-64 md:w-72 lg:w-full h-auto opacity-90"
          />
        </FadeContent>
      </div>
    </div>
  );
};

export default Divider;
