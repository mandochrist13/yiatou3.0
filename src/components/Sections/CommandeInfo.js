import { HelpCircle } from 'lucide-react';
import { useState, useEffect } from 'react';
import InfoModal from '../Modals/InfoModal';
import ProductList from '../Order/ProductList';
import DeliveryInfo from '../Order/DeliveryInfo';
import DeliveryPromises from '../Order/DeliveryPromises';

const CommandeInfo = ({ isEchantillon = false, onTotalChange }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [currentMessage, setCurrentMessage] = useState('');
    const [isInsuranceChecked, setIsInsuranceChecked] = useState(true);

    const infoMessages = {
        assurance: "L'assurance couvre la perte, le vol et les dommages pendant le transport. Elle représente 2% de la valeur déclarée de vos produits.",
        fraisPaiement: "Les frais de paiement correspondent aux frais de transaction et de gestion de votre commande.",
    };

    const orderProducts = [
        { id: 1, name: "X3 clés USB 16 GB", type: "simple", price: 6500 },
        { id: 2, name: "Batterie externe", type: "batterie", price: 6500 }
    ];

    const handleInfoClick = (messageKey) => {
        setCurrentMessage(infoMessages[messageKey]);
        setModalOpen(true);
    };

    // Calculs financiers
    const subtotal = orderProducts.reduce((sum, product) => sum + product.price, 0);
    const insuranceFee = 700;
    const paymentFee = Math.round(subtotal * 0.025);
    const total = subtotal + paymentFee + (isInsuranceChecked ? insuranceFee : 0);

    useEffect(() => {
        onTotalChange(total);
    }, [total, onTotalChange]);

    return (
        <>
            <div className="py-4 mt-3 bg-white pb-20">
                <div className="px-3 mt-3">
                    <h2 className="text-base font-medium">Résumé de la commande</h2>
                    <p className="uppercase font-medium my-2 text-sm">yt-123</p>
                    
                    <ProductList products={orderProducts} />

                    {/* Frais additionnels */}
                    <OrderFees
                        insuranceFee={insuranceFee}
                        paymentFee={paymentFee}
                        isInsuranceChecked={isInsuranceChecked}
                        onInsuranceChange={(e) => setIsInsuranceChecked(e.target.checked)}
                        onInfoClick={handleInfoClick}
                    />

                    {/* Total */}
                    <div className="flex justify-between items-center flex-wrap">
                        <p className="font-medium text-sm uppercase">TOTAL</p>
                        <p className="font-medium text-sm uppercase">
                            {total.toLocaleString()} FCFA
                        </p>
                    </div>
                </div>

                <div className="w-screen h-[2px] bg-gray-100 mt-3" />
                
                <DeliveryInfo />
                <div className="w-screen h-[2px] bg-gray-100 mt-3" />
                <DeliveryPromises isEchantillon={isEchantillon} />
            </div>

            <InfoModal 
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
                message={currentMessage}
            />
        </>
    );
};

const OrderFees = ({ insuranceFee, paymentFee, isInsuranceChecked, onInsuranceChange, onInfoClick }) => (
    <>
        <div className="my-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
                <input 
                    type="checkbox" 
                    id="assurance"
                    className="w-3.5 h-3.5 accent-yellow-400"
                    checked={isInsuranceChecked}
                    onChange={onInsuranceChange}
                />
                <label htmlFor="assurance" className="flex items-center gap-1">
                    <span className="font-medium text-sm">Assurance</span>
                    <button
                        onClick={() => onInfoClick('assurance')}
                        className="text-gray-500"
                        aria-label="Information sur l'assurance"
                    >
                        <HelpCircle className="w-4 h-4" />
                    </button>
                </label>
            </div>
            <p className="text-sm">{insuranceFee.toLocaleString()} FCFA</p>
        </div>

        <div className="mb-3 flex justify-between items-center">
            <div className="flex items-center gap-2">
                <span className="font-medium text-sm">Frais de Paiement (2.5%)</span>
                <button
                    onClick={() => onInfoClick('fraisPaiement')}
                    className="text-gray-500"
                    aria-label="Information sur les frais de paiement"
                >
                    <HelpCircle className="w-4 h-4" />
                </button>
            </div>
            <p className="text-sm">{paymentFee.toLocaleString()} FCFA</p>
        </div>

        <div className="w-full h-[1px] bg-gray-200 mb-3" />
    </>
);

export default CommandeInfo;
