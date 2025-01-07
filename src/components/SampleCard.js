import React, { useState } from 'react';
import { Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { formatPrice } from '../utils/utils';

const SampleCard = ({ image, price, id, name }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
      navigate(`/echantillonDetails/${id}`);
    }, 100);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      handleClick();
    }
  };

  return (
    <div 
      className={`relative flex-shrink-0 w-24 h-32 bg-white rounded-lg shadow-sm overflow-hidden mb-1 cursor-pointer transition-transform ${
        isAnimating ? 'transform scale-95' : ''
      }`}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-label={`Voir les détails de l'échantillon ${name} à ${formatPrice(price)}`}
    >
      {/* Badge -30% with flash icon */}
      <div className="absolute bg-red-600 text-white text-[10px] font-sans font-medium px-1 py-0.2 rounded rounded-bl-none rounded-tr-none rounded-br-lg rounded-tl-lg flex items-center space-x-1">   
        <Zap size={12} fill="currentColor" strokeWidth={1} />
        <span>-30%</span>
      </div>
      <img 
        src={Array.isArray(image) ? image[0] : image} 
        alt={name} 
        className="w-full h-3/4 object-cover" 
      />
      <div className="p-1 text-start">
        <p className="text-xs font-semibold">{formatPrice(price)}</p>
      </div>
    </div>
  );
};

export default SampleCard;
