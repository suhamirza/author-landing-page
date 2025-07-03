import React from 'react';
import FadeContent from './Animations/FadeContent/FadeContent';
import flowersImage from '../assets/images/flowers.webp';

const Divider: React.FC = () => {
  return (
    <div className="w-full bg-white py-8 sm:py-12 lg:py-16 flex justify-center items-center">
      <div className="flex justify-center items-center max-w-md">
        <FadeContent duration={800} delay={200} blur={false}>
          <img 
            src={flowersImage} 
            alt="Floral Divider" 
            className="w-64 sm:w-80 md:w-96 lg:w-full h-auto opacity-90"
          />
        </FadeContent>
      </div>
    </div>
  );
};

export default Divider;
