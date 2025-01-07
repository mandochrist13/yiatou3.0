import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const Echantillons = ({ sampleText, samplePrice, sampleCommission, onOrder, sampleId }) => {
  const navigate = useNavigate();

  const handleNavigateToSamples = () => {
    navigate('/echantillons');
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      handleNavigateToSamples();
    }
  };

  return (
    <div className="bg-white p-4 border border-t-2 border-gray-100 relative">
      <div 
        className="flex justify-between items-center cursor-pointer"
        onClick={handleNavigateToSamples}
        onKeyDown={handleKeyDown}
        tabIndex="0"
        role="button"
        aria-label="Voir les détails des échantillons"
      >
        <h3 className="font-medium text-md">
          Échantillons <span className="text-xs font-normal text-gray-400">
            (Livraison en -2h sur LBV) 
            {sampleText && `, ${sampleText}`}
          </span>
        </h3>
        <FiChevronRight className="text-gray-400 text-2xl" />
      </div>
      <p className="text-sm mb-0">
        <span className="font-medium text-gray-400">
          {typeof samplePrice === 'number' ? samplePrice.toLocaleString() : '11.300'} FCFA 
          <span className='text-gray-400 text-sm'>  / pièce</span>
        </span>
        <p
          className="text-sm text-blue-600 focus:outline-none rounded ml-1 inline-flex items-center" 
        >
          Commander
          
        </p>
      </p>
    </div>
  );
};

export default Echantillons;
