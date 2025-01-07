import React from 'react';
import { FaX } from 'react-icons/fa6';


const faqItems = [
    {
        Q: "Comment gagner de l'argent ?",
        R: [
            "Connectes-toi sur Yiatou.",
            "Partage un article avec ton lien unique avec tes amis.",
            "Tes amis s'inscrivent si ce n'est pas encore fait.",
            "Une fois qu'un de tes amis  commandé, tu seras informé par notification et tu pourras voir le total d'argent gagné depuis l'onglet 'Argent' de ton application.",
            "Une fois que tu as de l'argent dans ton compte, tu peux faire une demande de retrait pour recevoir ton argent sur ton compte Airtel Money."
        ],
        note: "Plus tu partages ton lien, plus tes amis achètent et plus tu gagnes de l'argent."
    },
    {
        Q: "Comment fonctionnent les liens ?",
        R: [
            "Chaque lien de partage est directement associé à ton compte si tu es connecté.",
            "Depuis la page d'accueil, tu peux cliquer sur le bouton de partage d'un article ou le faire depuis la page des détails.",
            "Si quelqu'un d'autre partage ton lien et qu'il génère des ventes, c'est à toi que l'argent sera reversé"
        ],
        note: "Si tu partages un produit sans être connecté, tu ne recevras aucune commission."
    }
];

function FAQ({ onClose }) {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-end z-50 animate-fade-in" onClick={onClose}>
            <div 
                className="bg-white rounded-t-2xl w-full max-h-[80vh] overflow-hidden animate-slide-up relative flex flex-col"
                style={{maxWidth: '500px'}}
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex justify-between items-center p-2 bg-white sticky top-0 z-10">
                    <div className="flex-1" />
                    <h2 className="text-[22px] font-bold flex-1 text-center">FAQs</h2>
                    <div className="flex-1 flex justify-end">
                        <button 
                            onClick={onClose} 
                            className='p-2 rounded-full bg-gray-50 text-gray-700 hover:bg-gray-100 transition-colors duration-200'
                            aria-label="Fermer"
                        >
                            <FaX />
                        </button>
                    </div>
                </div>
                <div className="overflow-y-auto p-6 pt-0">
                    <ul className="space-y-6">
                        {faqItems.map((item, index) => (
                            <li key={index} className="border-b pb-4 last:border-b-0">
                                <h3 className="font-semibold text-lg mb-2">Q: {item.Q}</h3>
                                <div className="text-gray-600 mb-2">
                                    <p className="font-medium">R:</p>
                                    <ol className="list-decimal pl-8 space-y-1">
                                        {item.R.map((point, idx) => (
                                            <li key={idx}>{point}</li>
                                        ))}
                                    </ol>
                                </div>
                                {item.note && (
                                    <p className="text-red-500 font-bold text-sm mt-2">{item.note}</p>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default FAQ;
