import React from 'react';
import { Check } from 'lucide-react';

const DeliveryPromises = ({ isSample = false, onStartClick }) => {
  const promises = [
    { icon: Check, text: "Respect des délais" },
    { icon: Check, text: "Retour produit" },
    { icon: Check, text: "2k de crédit de retard" },
    { icon: Check, text: "Remboursement" },
  ];

  return (
    <div className="bg-white p-4 border border-t-2 border-b-2 border-gray-100">
      <h3 className="font-medium text-md mb-3">Promesses de livraison</h3>
      <div className="grid grid-cols-2 gap-4">
        {promises.map((promise, index) => (
          <div key={index} className="flex items-center">
            <Check className="w-5 h-5 text-green-500" />
            <p className="text-sm text-gray-600">{promise.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeliveryPromises;
