import React from "react";

const SelectVariante = ({ unsplashId, alt }) => {
  const handleClick = () => {
    // Logique de clic à implémenter si nécessaire
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      handleClick();
    }
  };

  // Construire l'URL Unsplash avec l'ID fourni et les paramètres d'optimisation
  const imageUrl = `https://images.unsplash.com/photo-1688649593308-40dfbb552d00?q=80&w=327&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`;

  return (
    <button 
      className="w-[60px] h-[60px] shrink-0 relative flex justify-center items-center bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 overflow-hidden"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={`Sélectionner la variante ${alt}`}
      tabIndex="0"
    >
      <img 
        src={imageUrl} 
        alt={alt} 
        className="w-full h-full object-cover"
        loading="lazy"
      />
    </button>
  );
};

export default SelectVariante;
