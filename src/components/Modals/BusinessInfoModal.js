import React from 'react';

const BusinessInfoModal = ({ isOpen, onClose, onContinue }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-md w-full p-6">
        <h3 className="text-xl font-semibold mb-4">Lancez votre Business</h3>
        
        <div className="space-y-3 text-gray-600 text-sm mb-6">
          <p>Voici ce que nous vous proposons :</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Un accompagnement personnalisé</li>
            <li>Des prix compétitifs pour démarrer</li>
            <li>Une formation gratuite sur la vente</li>
            <li>Un support client disponible 7j/7</li>
          </ul>
        </div>

        <div className="flex justify-end space-x-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded"
          >
            Plus tard
          </button>
          <button
            onClick={onContinue}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Continuer
          </button>
        </div>
      </div>
    </div>
  );
};

export default BusinessInfoModal; 