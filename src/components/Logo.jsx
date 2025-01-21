import React from 'react';

const Logo = ({ className = '' }) => {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      {/* Cross and Heart Icon */}
      <div className="w-24 h-24 mb-2">
        <svg viewBox="0 0 100 100" className="w-full h-full fill-[#0047AB]">
          {/* Cross */}
          <path d="M35 20h30v20h20v20h-20v20h-30v-20h-20v-20h20z" />
          {/* Heart */}
          <path d="M50 45 C50 45 45 35 35 35 C25 35 25 45 25 45 C25 55 50 65 50 65 C50 65 75 55 75 45 C75 45 75 35 65 35 C55 35 50 45 50 45" />
        </svg>
      </div>
      
      {/* GoPrime Text */}
      <h1 className="text-4xl font-display text-[#0047AB] tracking-wide mb-1">
        GoPrime
      </h1>
      
      {/* Tagline */}
      <p className="text-lg text-[#0047AB] font-light tracking-wider text-center">
        The Path To Your Healthiest Prime
      </p>
    </div>
  );
};

export default Logo;
