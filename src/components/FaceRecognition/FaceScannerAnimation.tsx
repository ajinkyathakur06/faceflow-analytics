
import React from 'react';

const FaceScannerAnimation = () => {
  return (
    <div className="absolute inset-0 pointer-events-none face-scan-container">
      {/* Scanning line overlay */}
      <div className="face-scan-overlay"></div>
      
      {/* Pulsing circle */}
      <div className="pulse-animation"></div>
      
      {/* Corner markers */}
      <div className="absolute top-6 left-6 w-12 h-12 border-t-2 border-l-2 border-blue-500"></div>
      <div className="absolute top-6 right-6 w-12 h-12 border-t-2 border-r-2 border-blue-500"></div>
      <div className="absolute bottom-6 left-6 w-12 h-12 border-b-2 border-l-2 border-blue-500"></div>
      <div className="absolute bottom-6 right-6 w-12 h-12 border-b-2 border-r-2 border-blue-500"></div>
      
      {/* Status indicator */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <div className="bg-black/50 text-white px-4 py-2 rounded-full text-sm font-medium animate-pulse">
          Scanning...
        </div>
      </div>
    </div>
  );
};

export default FaceScannerAnimation;
