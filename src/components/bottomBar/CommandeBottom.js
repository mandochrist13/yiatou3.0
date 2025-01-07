import { useState } from 'react';
import ButtonCta from '../Buttons/ButtonCta';
import PaymentModal from '../Modals/PaymentModal';

const CommandeBottom = ({ totalAmount = 0 }) => {
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  
  const handleContinue = () => {
    setIsPaymentModalOpen(true);
  };

  const formattedTotal = `${totalAmount.toLocaleString()} FCFA`;

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-3 py-4 grid grid-cols-2 gap-4">
        <div className="flex items-center justify-start">
          <span className="text-lg font-bold">{formattedTotal}</span>
        </div>
        
        <ButtonCta 
          onClick={handleContinue}
          label="Continuer"
          ariaLabel="Continuer vers le paiement"
          className="w-full h-12"
        >
          Continuer
        </ButtonCta>
      </div>

      <PaymentModal
        isOpen={isPaymentModalOpen}
        onClose={() => setIsPaymentModalOpen(false)}
        totalPrice={totalAmount}
      />
    </>
  );
};

export default CommandeBottom;
