import React from "react";
import { Zap } from "lucide-react";

const EchantillonCard = ({ echantillon }) => {
  return (
    <div className="flex flex-col bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="z-10 bg-red-600 w-10 text-white text-[12px] font-sans font-medium px-1 py-0.2 rounded rounded-bl-none rounded-tr-none rounded-br-lg rounded-tl-lg flex items-center space-x-1">
        <Zap size={12} fill="currentColor" strokeWidth={1} />
        <span>-30%</span>
      </div>
      <div className="relative w-full pt-[100%]">
        <img
          src={echantillon.image}
          alt={echantillon.title}
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      </div>

      <div className="p-2 flex flex-col justify-between flex-shrink-0">
        {/* Description */}
        <p className="text-[#333333] text-xs leading-tight block mb-0.5 whitespace-nowrap overflow-hidden text-ellipsis">
          {echantillon.title}
        </p>

        

        <div className="flex justify-between items-center">
          {/* Price */}
        <p className="text-[#333333] font-semibold text-sm mb-0.3">
          {echantillon.price.toFixed(2)} FCFA
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

export default EchantillonCard;
