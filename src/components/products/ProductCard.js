import React from "react";

const ProductCard = ({ product }) => {
  // const handleShare = () => {
  //   try {
  //     if (typeof share === 'function') {
  //       share();
  //     }
  //   } catch (error) {
  //     console.log('pas une fonction');
  //   }
  // };

  return (
    <div className="flex flex-col bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="relative w-full pt-[100%]">
        <img
          src={product.image}
          alt={product.title}
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      </div>

      <div className="p-2 flex flex-col justify-between flex-shrink-0">
        {/* Description */}
        <p className="text-[#333333] font-bold text-md mb-0.3">
          {product.title}
        </p>

        {/* Price */}
        <p className="text-[#333333] font-semibold text-sm mb-0.3">
          {product.price.toFixed(2)} FCFA
        </p>

        <div className="flex justify-between items-center">
          {/* Sample/Delivery Info 
          {product.sampleAvailable ? (
            <p
              className={`text-[12px] font-base leading-tight text-green-600 transition-opacity duration-300 ease-in-out ${
                isTextVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              {currentText}
            </p>
          ) : (
            <p className="text-[12px] font-base leading-tight text-gray-600">
              Achat min: {product.minPurchase}
            </p>
          )}*/}
          <p className="text-[12px] font-base leading-tight text-gray-600">
            Achat min: {product.minPurchase}
          </p>
          {/* Share Button */}
          <button
            className="bg-gray-100 p-1.5 rounded-full transition-transform duration-300 ease-in-out hover:rotate-180 focus:rotate-180"
            // onClick={handleShare}
            aria-label="Partager"
          >
            <i className="fi fi-rr-refer-arrow text-[15px] flex"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
