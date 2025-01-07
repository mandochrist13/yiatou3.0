import React from 'react';
import ModalModel from './ModalModel';
import ButtonCta from '../Buttons/ButtonCta';

const ConfirmationModal = ({ isOpen, onClose, onConfirm, amount, paymentMethod }) => {
  return (
    <ModalModel
      title="Confirmation de paiement"
      active={isOpen}
      onClose={onClose}
    >
      <div className="p-4">
        <p className="text-center text-gray-700 mb-6">
          Vous allez être redirigé vers {paymentMethod} pour effectuer un paiement de {amount}
        </p>
        
        <div className="flex gap-4">
          <ButtonCta
            onClick={onClose}
            label="Annuler"
            ariaLabel="Annuler le paiement"
            className="w-full bg-gray-500 hover:bg-gray-600"
          >
            Annuler
          </ButtonCta>
          
          <ButtonCta
            onClick={onConfirm}
            label="Confirmer"
            ariaLabel="Confirmer le paiement"
            className="w-full"
          >
            Confirmer
          </ButtonCta>
        </div>
      </div>
    </ModalModel>
  );
};

export default ConfirmationModal; 