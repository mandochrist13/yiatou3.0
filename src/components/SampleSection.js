import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa';
import SampleCard from './SampleCard';
import { samples } from '../utils/utils';
import Promises from './Promesses/Promises';

const SampleSection = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/echantillonDetails');
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      handleNavigate();
    }
  };

  const handleSampleClick = (sampleId) => {
    navigate(`/echantillonDetails/${sampleId}`);
  };

  return (
    <section className="py-2 border-b-2 border-gray-100 bg-white overflow-hidden">
      <div className="mb-2 px-3">
        <Promises />
      </div>
      <div className="flex justify-between items-center px-3">
        <div className="flex items-center justify-between w-full mt-2">
          <h2 className="text-md font-bold text-[#333333]">Échantillons</h2>
          <div className="flex items-center mr-3">
            <span className="text-[#333333] text-xs font-normal">Voir plus</span>
            <button
              className="text-[#333333] rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-300"
              onClick={handleNavigate}
              onKeyDown={handleKeyDown}
              aria-label="Voir plus de détails sur les échantillons"
              tabIndex={0}
            >
              <FaChevronRight className="text-xs" />
            </button>
          </div>
        </div>
      </div>
      <p className="text-[12px] font-normal text-[#333333] opacity-90 px-3">
        Livraison tout de suite
      </p>
      <div className="mt-2 relative">
        <div className="flex overflow-x-auto space-x-2 scrollbar-hide pl-3 pr-[3vw]">
          {samples.map((sample) => (
            <div key={sample.id} onClick={() => handleSampleClick(sample.id)}>
              <SampleCard
                id={sample.id}
                image={sample.image}
                price={sample.price}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SampleSection;
