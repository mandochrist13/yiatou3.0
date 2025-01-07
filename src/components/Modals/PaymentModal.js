import React, { useState } from 'react';
import ModalModel from './ModalModel';
import ButtonCta from '../Buttons/ButtonCta';
import WhatsAppModal from './WhatsAppModal';
import { formatPrice } from '../../utils/utils';
import { FaWhatsapp } from 'react-icons/fa';
import { Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PaymentModal = ({ 
  isOpen, 
  onClose, 
  totalPrice,
  orderItems = [],
  userInfo = {},
  deliveryInfo = {},
  orderNumber = 'N/A'
}) => {
  const [selectedMethod, setSelectedMethod] = useState('Airtel');
  const [showWhatsAppModal, setShowWhatsAppModal] = useState(false);
  const navigate = useNavigate();


  const handlePaymentMethodSelect = (method) => {
    setSelectedMethod(method);
  };

  const handlePayment = () => {
    if (!selectedMethod) return;

    if (selectedMethod === 'WhatsApp') {
      setShowWhatsAppModal(true);
    } else if (selectedMethod === 'Airtel') {
      onClose();
      setTimeout(() => {
        navigate('/payment-confirmation', {
          state: {
            orderNumber,
            amount: totalPrice,
            paymentMethod: selectedMethod,
            userInfo,
            deliveryInfo
          }
        });
      }, 300);
    }
  };

  const formatWhatsAppMessage = () => {
    const userName = userInfo?.name || 'Non spécifié';
    const userPhone = userInfo?.phone || 'Non spécifié';
    const userEmail = userInfo?.email || 'Non spécifié';
    const deliveryAddress = deliveryInfo?.address || 'Non spécifié';
    const deliveryCity = deliveryInfo?.city || 'Non spécifié';
    const deliveryFee = deliveryInfo?.deliveryFee || 0;

    const message = [
      `🛍️ *Nouvelle Commande #${orderNumber}*\n`,
      `\n👤 *Informations Client*`,
      `Nom: ${userName}`,
      `Téléphone: ${userPhone}`,
      `Email: ${userEmail}`,
      
      `\n📍 *Adresse de Livraison*`,
      `${deliveryAddress}`,
      `${deliveryCity}`,
      
      `\n📝 *Détails de la Commande*`,
      ...(orderItems || []).map(item => 
        `- ${item.quantity}x ${item.name} (${formatPrice(item.price * item.quantity)})`
      ),
      
      `\n💰 *Récapitulatif*`,
      `Sous-total: ${formatPrice(totalPrice)}`,
      `Frais de livraison: ${formatPrice(deliveryFee)}`,
      `Total: ${formatPrice(totalPrice + deliveryFee)}`,
      
      `\n💳 *Paiement*`,
      `Mode de commande souhaité: WhatsApp Business`
    ].join('\n');

    return message;
  };

  const handleWhatsAppConfirm = () => {
    const phoneNumber = '+24177305184';
    const message = formatWhatsAppMessage();
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  const getButtonStyles = () => {
    if (selectedMethod === 'WhatsApp') {
      return 'bg-[#05c341] flex items-center justify-center gap-2 text-white';
    }
    return 'bg-red-600  text-white';
  };

  const getButtonContent = () => {
    if (selectedMethod === 'WhatsApp') {
      return (
        <>
          <FaWhatsapp className="w-6 h-6" />
          <span>Continuer sur WhatsApp</span>
        </>
      );
    }
    return `Payer (${formatPrice(totalPrice)})`;
  };

const paymentMethods = [
  {
    id: 'WhatsApp',
    logo: '/img/pro/whatsapp.png'
  },
  {
    id: 'Airtel',
    logo: '/img/pro/airtelmoney.png'
  }
];

  const getMethodColor = (methodId) => {
    return methodId === 'WhatsApp' ? '#05c341' : 'red';
  };

  const getBorderClass = (method, isSelected) => {
    if (!isSelected) {
      return method === 'WhatsApp' 
        ? 'border-[#05c341] hover:border-[#05c341] hover:scale-105'
        : 'border-red-600 hover:border-red-600 hover:scale-105';
    }
    
    return method === 'WhatsApp' 
      ? 'border-[#05c341] shadow-lg scale-105'
      : 'border-red-600 shadow-lg scale-105';
  };

  return (
    <>
      <ModalModel
        title="Paiement"
        active={isOpen}
        onClose={onClose}
      >
        <div className="flex gap-4 mb-4 -mt-4">
          {paymentMethods.map((method) => (
            <button
              key={method.id}
              role="radio"
              aria-checked={selectedMethod === method.id}
              onClick={() => handlePaymentMethodSelect(method.id)}
              className={`
                relative p-4 border-2 flex-1
                transition-all duration-300 ease-in-out
                flex flex-col items-center gap-4
                overflow-hidden
                focus:outline-none
                ${getBorderClass(method.id, selectedMethod === method.id)}
              `}
            >
              {selectedMethod === method.id && (
                <>
                  <div className={`
                    absolute -top-8 -right-8 w-16 h-16 
                    ${method.id === 'WhatsApp' ? 'bg-[#04c241]' : 'bg-red-500'} 
                    rotate-45
                  `} />
                  <div className="absolute top-1 right-1">
                    <Check className="w-4 h-4 text-white stroke-[3]" />
                  </div>
                </>
              )}
              
              <div className="h-16 flex items-center justify-center">
                <img
                  src={method.logo}
                  alt={method.title}
                  className="h-full w-auto object-contain"
                />
              </div>
              <span className="font-medium text-gray-800">{method.title}</span>
            </button>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="text-sm text-gray-600 mb-6 text-center px-4">
          En continuant, vous reconnaissez avoir lu et approuvé notre politique de confidentialité.
        </p>

        {/* Payment button */}
        <div className={`
          w-full transition-all duration-300
          ${!selectedMethod ? 'opacity-50' : ''}
        `}>
          <button
            onClick={handlePayment}
            disabled={!selectedMethod}
            className={`
              w-full h-12 text-md rounded-lg font-medium
              ${getButtonStyles()}
              disabled:cursor-not-allowed disabled:opacity-50
              transition-all duration-300 ease-in-out
              hover:scale-[1.02]
            `}
          >
            {getButtonContent()}
          </button>
        </div>
      </ModalModel>

      <WhatsAppModal
        isOpen={showWhatsAppModal}
        onClose={() => setShowWhatsAppModal(false)}
        onConfirm={handleWhatsAppConfirm}
      />
    </>
  );
};

export default PaymentModal; 