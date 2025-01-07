import React, { useState } from 'react';
import ModalModel from "./ModalModel";

const colorOptions = [
  { name: 'Noir', image: '/path/to/black-image.jpg' },
  { name: 'Vert', image: '/path/to/green-image.jpg' },
  { name: 'Jaune', image: '/path/to/yellow-image.jpg' },
];

// Fonction pour formater le prix en francs CFA
const formatPrice = (price) => {
  return new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'XOF' }).format(price);
};

const Modal = ({ isOpen, onClose, productImage, price, minPurchase }) => {
  const handleContinue = () => {
    // Implement the logic for continuing with the purchase
    console.log('Continuing with purchase');
  };

  return (
    <ModalModel onClose={onClose} title="Variations" titleClassName="text-xl font-bold " active={isOpen}>
      <ModalContent 
        productImage={productImage}
        price={price}
        minPurchase={minPurchase}
      />
      <div className="px-3 bg-white">
        <button
          onClick={handleContinue}
          className="w-full h-14 rounded-md bg-[#ff5722] text-white py-2 px-3  focus:outline-none text-base font-semibold"
          aria-label="Continuer l'achat"
        >
          Continuer
        </button>
      </div>
    </ModalModel>
  );
};

const ModalContent = ({ productImage, price, minPurchase }) => {
  const [quantities, setQuantities] = useState({ Noir: 0, Vert: 0, Jaune: 0 });

  const handleQuantityChange = (color, change) => {
    setQuantities(prev => ({
      ...prev,
      [color]: Math.max(0, prev[color] + change)
    }));
  };

  const calculateTotal = () => {
    return Object.values(quantities).reduce((sum, quantity) => sum + quantity, 0) * price;
  };

  return (
    <div className="px-3 pt-1 pb-4">
      <div className="mb-4">
        <h3 className="font-semibold text-sm mb-1">Prix unitaire</h3>
        <div className="flex items-center space-x-3">
          <img src={productImage} alt="Product" className="w-16 h-16 object-cover rounded" />
          <div>
            <p className="font-bold text-lg">{formatPrice(price)}</p>
            <p className="text-xs text-gray-600">Achat min. {minPurchase} pièces</p>
          </div>
        </div>
      </div>

      <div>
        <h3 className="font-medium text-xs mb-1 text-gray-500">Couleur</h3>
        <ul className="space-y-2">
          {colorOptions.map((color) => (
            <li key={color.name} className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <img src={color.image} alt={color.name} className="w-12 h-12 object-cover" />
                <span className='text-sm font-semibold text-black'>{color.name}</span>
              </div>
              <div className="flex items-center space-x-1 border border-[#cccccc] rounded-full">
                <button
                  onClick={() => handleQuantityChange(color.name, -1)}
                  className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center focus:outline-none"
                  aria-label={`Diminuer la quantité de ${color.name}`}
                >
                  -
                </button>
                <span className="w-6 text-center text-sm">{quantities[color.name]}</span>
                <button
                  onClick={() => handleQuantityChange(color.name, 1)}
                  className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center focus:outline-none"
                  aria-label={`Augmenter la quantité de ${color.name}`}
                >
                  +
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-4 pt-3 border-t border-[#cccccc]">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold text-xl">TOTAL</h3>
          <p className="font-bold text-xl">{formatPrice(calculateTotal())}</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
