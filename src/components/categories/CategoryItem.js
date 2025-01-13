import React from 'react';

const CategoryItem = ({ item, isSelected, onClick }) => {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault(); // Empêche les comportements par défaut (comme le défilement avec la touche Espace)
      onClick(item.link, item.category);
    }
  };

  return (
    <div
      className="flex flex-col items-center gap-1 cursor-pointer min-w-[4rem]"
      onClick={() => onClick(item.link, item.category)}
      role="button"
      tabIndex={0}
      aria-label={`Catégorie ${item.title}`}
      onKeyDown={handleKeyDown}
    >
      <div 
        className={`w-16 h-16 rounded-full overflow-hidden shadow-sm mb-2 transition-transform ${
          isSelected ? 'ring-2 ring-black ring-offset-4 ring-offset-white scale-110' : 'hover:scale-105'
        }`}
      >
        <img
          src={item.image}
          alt={item.title || "Image de catégorie"}
          className="w-full h-full object-cover"
          onError={(e) => e.target.src = '/path/to/fallback-image.jpg'} // Fallback si l'image échoue
        />
      </div>
      <span 
        className={`text-xs whitespace-nowrap ${
          isSelected 
            ? 'p-0.4 px-3 bg-black text-white text-sm rounded-full' 
            : 'text-gray-800'
        }`}
      >
        {item.title}
      </span>
    </div>
  );
};

export default CategoryItem;
