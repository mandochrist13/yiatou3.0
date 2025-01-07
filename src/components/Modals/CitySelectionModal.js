import React from 'react';
import ModalModel from "./ModalModel";
// Importez les icônes nécessaires
import { FaCity, FaMoneyBillWave } from 'react-icons/fa';

const CitySelectionModal = ({ isOpen, onClose, onSelectCity, cities }) => {
  return (
    <ModalModel onClose={onClose} title="Sélectionnez une ville" active={isOpen}>
      <CitySelectionContent onSelectCity={onSelectCity} cities={cities} />
    </ModalModel>
  );
};

const CitySelectionContent = ({ onSelectCity, cities }) => {
  const handleKeyDown = (e, city) => {
    if (e.key === 'Enter' || e.key === ' ') {
      onSelectCity(city);
    }
  };

  return (
    <ul className="px-4 py-6 space-y-2">
      {cities.map((city) => (
        <li
          key={city.name}
          className="cursor-pointer p-3 hover:bg-gray-100 rounded-lg transition-colors duration-200 flex justify-between items-center"
          onClick={() => onSelectCity(city)}
          onKeyDown={(e) => handleKeyDown(e, city)}
          tabIndex={0}
          role="button"
          aria-label={`Sélectionner ${city.name}, prix: ${city.price} FCFA`}
        >
          <div className="flex items-center space-x-2">
            <FaMoneyBillWave className="text-green-500" />
            <span className="font-semibold">{city.price} FCFA</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaCity className="text-blue-500" />
            <span>{city.name}</span>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CitySelectionModal;
