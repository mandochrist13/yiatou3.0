import React, { useState } from 'react';
import { FiTag, FiTrendingUp } from 'react-icons/fi';
import { FaPlane, FaMoneyBillWave, FaCalculator } from 'react-icons/fa';
import BusinessInfoModal from '../Modals/BusinessInfoModal';

const CoutLivraison = ({ numberOfPieces = 20, onStartClick }) => {
    const [showModal, setShowModal] = useState(false);

    const handleInfoClick = () => {
        setShowModal(true);
    };

    const handleContinue = () => {
        setShowModal(false);
        if (onStartClick) {
            onStartClick();
        }
    };

    const businessItems = [
        { label: "Prix d'achat", value: `14,000 FCFA (${numberOfPieces} pièces)`, icon: FiTag },
        { label: "Transport", value: "7,500 FCFA /Kg", icon: FaPlane },
        { label: "Prix de revient", value: "1,075 FCFA /1", icon: FaCalculator },
        { label: "Prix de vente", value: "2,500 FCFA /1", icon: FiTrendingUp },
        { label: "Bénéfice", value: `1,425 x ${numberOfPieces} = 28,500 FCFA`, icon: FaMoneyBillWave },
    ];

    return (
        <div className="py-2 px-4 bg-white border border-b-2 border-gray-100">
            <div className="mt-0">
                <div className="flex items-center gap-2 mb-2">
                    <h2 className="text-md font-medium">Lance ton Business</h2>
                    <button
                        onClick={handleInfoClick}
                        className="w-4 h-4 rounded-full border border-gray-300 bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-gray-200 text-xs"
                        aria-label="Plus d'informations sur le business"
                    >
                        ?
                    </button>
                </div>
                <table className="w-full text-sm border-collapse border border-[#cccccc] mb-4">
                    <tbody>
                        {businessItems.map((item, index) => (
                            <tr 
                                key={index} 
                                className={`
                                    ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}
                                    ${index === businessItems.length - 1 ? 'font-semibold bg-green-100' : ''}
                                `}
                            >
                                <td className="py-2 pl-2 pr-4 border border-[#cccccc]">
                                    <div className="flex items-center">
                                        <div className="w-4 h-4 text-gray-500 flex-shrink-0 mr-2">
                                            <item.icon className="w-full h-full" />
                                            {item.label === "Prix de vente" && (
                                                <FiTrendingUp className="w-2 h-2 absolute -mt-2 ml-2 text-green-500" />
                                            )}
                                        </div>
                                        <span className="text-gray-600">{item.label}</span>
                                    </div>
                                </td>
                                <td className="py-2 pr-2 border border-[#cccccc] text-[#333333] text-right">{item.value}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <BusinessInfoModal
                isOpen={showModal}
                onClose={() => setShowModal(false)}
                onContinue={handleContinue}
            />
        </div>
    );
}

export default CoutLivraison;
