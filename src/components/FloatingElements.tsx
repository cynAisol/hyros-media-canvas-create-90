
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
      
      {/* Additional floating elements */}
      <div className="absolute top-1/4 left-1/2 w-3 h-8 bg-gradient-to-b from-[#38B6FF] to-transparent opacity-20 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      <div className="absolute bottom-1/4 right-1/2 w-6 h-2 bg-white/30 rounded-full animate-bounce" style={{ animationDelay: '2.5s', animationDuration: '2s' }}></div>
      <div className="absolute top-3/4 left-3/4 w-4 h-4 border-2 border-[#38B6FF] rounded-full animate-spin opacity-20" style={{ animationDuration: '8s' }}></div>
      <div className="absolute top-1/6 right-1/6 w-1 h-6 bg-gradient-to-t from-white to-transparent opacity-25 animate-pulse" style={{ animationDelay: '3.5s' }}></div>
    </div>
  );
};

export default FloatingElements;
