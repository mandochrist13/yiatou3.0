import { Check } from 'lucide-react';

const DeliveryPromises = ({ isEchantillon }) => {
  const promises = [
    { text: "Respect des délais" },
    { text: "Retour produit" },
    { text: isEchantillon ? "Qualité" : "2k de crédit de retard" },
    { text: "Remboursement" }
  ];

  return (
    <div className="px-3">
      <div className="mt-3">
        <h3 className="font-medium text-md mb-2 text-black">Promesses de livraison</h3>
        <div className="grid grid-cols-2 gap-3">
          {promises.map((promise, index) => (
            <div key={index} className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-green-500" />
              <p className="text-sm text-gray-600">{promise.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DeliveryPromises; 