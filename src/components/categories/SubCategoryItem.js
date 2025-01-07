import React from 'react';

const SubCategoryItem = ({ subCategory, isSelected, onClick }) => {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      onClick(subCategory);
    }
  };

  return (
    <div
      className={`flex-shrink-0 px-4 py-1 mr-2 text-sm rounded-full cursor-pointer transition-colors
        ${isSelected 
          ? 'border-2 border-black' 
          : 'border border-gray-300 hover:border-gray-400'
        }`}
      role="button"
      tabIndex={0}
      onClick={() => onClick(subCategory)}
      onKeyDown={handleKeyDown}
    >
      {subCategory}
    </div>
  );
};

export default SubCategoryItem; 