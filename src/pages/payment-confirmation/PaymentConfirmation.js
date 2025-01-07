import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { formatPrice } from '../../utils/utils';
import ButtonCta from '../../components/Buttons/ButtonCta';
import { CheckCircle, XCircle } from 'lucide-react';
import MoreProduct from '../../components/Sections/MoreProduct';
import RelatedProducts from '../../components/Sections/RelatedProducts';

const PaymentConfirmation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { status = 'success' } = location.state || {};

  const paymentStatus = {
    success: {
      icon: <CheckCircle className="w-24 h-24 text-green-500 mx-auto mb-6" />,
      title: "Paiement réussi",
      message: "Félicitation Dave ! Ta commande a été passée avec succès. Tu paieras les frais de transport une fois la marchandise arrivée."
    },
    failed: {
      icon: <XCircle className="w-24 h-24 text-red-500 mx-auto mb-6" />,
      title: "Paiement échoué",
      message: "Désolé, votre paiement n'a pas pu être traité. Veuillez réessayer ou contacter notre service client."
    }
  };

  const currentStatus = status === 'success' ? paymentStatus.success : paymentStatus.failed;

  const handleReturnHome = () => {
    navigate('/');
  };

  return (
    <div className="w-full flex flex-col items-center justify-center translate-y-28">
      <div className="w-full px-3">
        {currentStatus.icon}
        
        <h1 className="text-xl font-bold text-gray-800 text-center mb-2">
          {currentStatus.title}
        </h1>
        
        <div className="space-y-6">
          <p className="text-gray-600 text-sm text-center mt-6">
            {currentStatus.message}
          </p>
        </div>
      </div>

      <div className="w-full  bg-gray-100 py-2 translate-y-12">
        <div className="max-w-7xl mx-auto px-3">
          <h2 className="text-md font-medium mb-2">
            Jettes d'abord un oeil
          </h2>
          <RelatedProducts />
        </div>
      </div>

      <div className="w-full px-3 mt-24 flex justify-center">
        <ButtonCta 
          onClick={handleReturnHome}
          className="w-64"
        >
         Aller à la page d'accueil
        </ButtonCta>
      </div>
    </div>
  );
};

export default PaymentConfirmation; 