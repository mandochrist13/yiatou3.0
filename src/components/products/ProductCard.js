import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="flex flex-col bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="relative w-full pt-[100%]">
        <img
          src={product.image}
          alt={product.title}
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      </div>
      <div className="p-2">
        <h3 className="text-sm font-medium text-gray-800 line-clamp-2">
          {product.title}
        </h3>
        <p className="text-sm font-bold text-gray-900 mt-1">
          {product.price.toFixed(2)} FCFA
        </p>
      </div>
    </div>
  );
};

export default ProductCard; 