import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronLeft } from 'react-icons/fa';

const TopBarWithButtonBackLikeTemu = ({ link, className = "", title }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${className}`}>
      <div className={`flex items-center px-4 transition-all duration-300 ${isScrolled ? 'h-12' : 'h-16'}`}>
        <Link 
          to={link}
          className="flex items-center justify-center"
          aria-label="Retour"
        >
          <FaChevronLeft className="text-md text-[#333333]" />
        </Link>
        
        <div className="flex-1 flex justify-center items-center transition-all duration-300">
          <div className="flex items-center gap-2 justify-center">
            <img 
              src="/icons/shield-check.svg" 
              alt="Nos engagements Yiatou"
              className={`object-contain transition-all duration-300 ${
                isScrolled 
                  ? 'w-16 h-6' 
                  : 'w-36 h-16'
              } [filter:invert(45%)_sepia(85%)_saturate(402%)_hue-rotate(71deg)_brightness(92%)_contrast(89%)]`}
            />
            {isScrolled && (
              <span className="text-md font-medium text-[#418920] whitespace-nowrap -translate-x-3">
                Nos engagements Yiatou
              </span>
            )}
          </div>
        </div>
        {/* Élément vide pour équilibrer le layout */}
        <div className="w-6"></div>
      </div>
    </div>
  );
};

export default TopBarWithButtonBackLikeTemu;
