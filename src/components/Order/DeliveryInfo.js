const DeliveryInfo = () => {
  return (
    <div className="px-3">
      <div className="mt-3">
        <h3 className="text-base font-medium mb-2 text-black">Livraison & Délais</h3> 
        <div className="flex flex-col gap-1">
          <DeliveryType
            label="Simples"
            price="10500 FCFA/KG"
            delay="10-14 jours"
          />
          <DeliveryType
            label="Liquides"
            price="10500 FCFA/KG"
            delay="14-21 jours"
          />
        </div>
      </div>
      <p className="mt-2 text-xs text-black font-medium">
        (Paiement du transport à la livraison)
      </p>
    </div>
  );
};

const DeliveryType = ({ label, price, delay }) => (
  <div className="flex items-center justify-between py-0.5">
    <div className="flex flex-wrap items-center gap-x-1">
      <span className="text-sm font-medium text-gray-700">{label}:</span>
      <span className="text-sm text-gray-600">{price}</span>
      <span className="text-sm text-gray-500">({delay})</span>
    </div>
  </div>
);

export default DeliveryInfo; 