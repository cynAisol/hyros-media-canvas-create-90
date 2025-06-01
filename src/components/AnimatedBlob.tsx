
import React from 'react';

interface AnimatedBlobProps {
  size?: 'small' | 'medium' | 'large';
  color?: 'blue' | 'black' | 'white';
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'center';
  delay?: number;
}

const AnimatedBlob: React.FC<AnimatedBlobProps> = ({ 
  size = 'medium', 
  color = 'blue', 
  position = 'center',
  delay = 0 
}) => {
  const sizeClasses = {
    small: 'w-32 h-32',
    medium: 'w-64 h-64',
    large: 'w-96 h-96'
  };

  const colorClasses = {
    blue: 'bg-[#38B6FF]',
    black: 'bg-black',
    white: 'bg-white'
  };

  const positionClasses = {
    'top-left': 'top-0 left-0 -translate-x-1/2 -translate-y-1/2',
    'top-right': 'top-0 right-0 translate-x-1/2 -translate-y-1/2',
    'bottom-left': 'bottom-0 left-0 -translate-x-1/2 translate-y-1/2',
    'bottom-right': 'bottom-0 right-0 translate-x-1/2 translate-y-1/2',
    'center': 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
  };

  return (
    <div 
      className={`absolute ${sizeClasses[size]} ${colorClasses[color]} ${positionClasses[position]} rounded-full blur-3xl opacity-20 pointer-events-none select-none`}
      style={{
        animation: `blob-float 8s ease-in-out infinite ${delay}s, blob-morph 12s ease-in-out infinite ${delay * 0.5}s`
      }}
    />
  );
};

export default AnimatedBlob;
