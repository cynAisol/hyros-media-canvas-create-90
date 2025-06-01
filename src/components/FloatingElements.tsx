
import React from 'react';

const FloatingElements: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Floating geometric shapes */}
      <div className="absolute top-10 left-10 w-4 h-4 bg-[#38B6FF] rounded-full animate-bounce opacity-30" style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
      <div className="absolute top-20 right-20 w-6 h-6 bg-white rounded-full animate-bounce opacity-20" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
      <div className="absolute bottom-20 left-1/4 w-3 h-3 bg-[#38B6FF] rotate-45 animate-pulse opacity-40" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-32 right-1/3 w-5 h-5 bg-white rotate-45 animate-pulse opacity-30" style={{ animationDelay: '3s' }}></div>
      <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-[#38B6FF] rounded-full animate-ping opacity-25" style={{ animationDelay: '4s' }}></div>
      <div className="absolute top-1/3 right-1/4 w-8 h-1 bg-white/20 animate-pulse" style={{ animationDelay: '5s' }}></div>
    </div>
  );
};

export default FloatingElements;
