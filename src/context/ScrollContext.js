import React, { createContext, useContext, useState, useEffect } from 'react';

const ScrollContext = createContext();

export const useScrollContext = () => {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error('useScrollContext must be used within a ScrollProvider');
  }
  return context;
};

export const ScrollProvider = ({ children }) => {
  const [isScrolledPastSlider, setIsScrolledPastSlider] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sliderHeight = 300; // Ajustez cette valeur selon la hauteur réelle de votre slider
      setIsScrolledPastSlider(window.scrollY > sliderHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ScrollContext.Provider value={{ isScrolledPastSlider }}>
      {children}
    </ScrollContext.Provider>
  );
};
