import React from 'react';

const Divider: React.FC = () => {
  return (
    <div className="w-full bg-white py-8 sm:py-12 lg:py-16 flex justify-center items-center">
      <div className="flex justify-center items-center max-w-md">
        <img 
          src="/src/assets/images/flowers.png" 
          alt="Floral Divider" 
          className="w-64 sm:w-80 md:w-96 lg:w-full h-auto opacity-90"
        />
      </div>
    </div>
  );
};

export default Divider;
