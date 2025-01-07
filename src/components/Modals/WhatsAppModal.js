import React from 'react';
import ModalModel from './ModalModel';
import ButtonCta from '../Buttons/ButtonCta';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppModal = ({ isOpen, onClose, onConfirm }) => {
  const handleConfirm = () => {
    if (onConfirm && typeof onConfirm === 'function') {
      onConfirm();
    }
    onClose();
  };

  return (
    <ModalModel
      title="Conversation WhatsApp"
      active={isOpen}
      onClose={onClose}
    >
      <div className="flex flex-col items-center px-4">
        <div className="flex-1 flex flex-col items-center justify-center w-full mb-6">
          <div className="w-24 h-24">
            <img 
              src="/img/pro/whatsappbusiness.png"
              alt="WhatsApp Business"
              className="w-full h-full object-contain"
            />
          </div>
          
          <p className="text-sm text-gray-600 text-center mt-2">
            Vous serez redirigé vers WhatsApp pour finaliser votre commande avec notre service client. 
            Un récapitulatif de votre commande sera automatiquement généré.
          </p>
        </div>

        <div className="w-full">
          <button
            onClick={handleConfirm}
            className="w-full h-12 text-md rounded-lg font-medium
              bg-[#64ca5d] text-white
              flex items-center justify-center gap-2
              transition-all duration-300 ease-in-out
              hover:scale-[1.02]"
          >
            <FaWhatsapp className="w-6 h-6" />
            <span>Aller sur WhatsApp</span>
          </button>
        </div>
      </div>
    </ModalModel>
  );
};

export default WhatsAppModal; 