import { IoImage } from "react-icons/io5";

export default function HistoriqueItem() {
  const handlePaymentComplete = () => {
    // TODO: Implémenter la logique de paiement ici
    console.log("Paiement en cours...");
  };

  return (
    <div className="bg-white px-3 py-5 my-2 rounded">
      <p className="flex justify-between items-center">
        <span className="font-medium">Commande YT-251</span>
        <span className="font-medium text-[13px] text-gray-500">14:26</span>
      </p>
      <div className="flex flex-col gap-4 mt-6">
        {/*  */}
        <div className="flex justify-between items-center">
          <div className="flex gap-3 items-center">
            <div className="w-[40px] h-[40px] bg-red-200 rounded flex justify-center items-center">
              <IoImage />
            </div>
            <p>X3 Clés USB 16 GB...</p>
          </div>
          <p>6,500 FCFA</p>
        </div>
        {/*  */}
        {/*  */}
        <div className="flex justify-between items-center">
          <div className="flex gap-3 items-center">
            <div className="w-[40px] h-[40px] bg-red-200 rounded flex justify-center items-center">
              <IoImage />
            </div>
            <p>X3 Clés USB 16 GB...</p>
          </div>
          <p>6,500 FCFA</p>
        </div>
        {/*  */}
        {/*  */}
        <div className="flex justify-between items-center mt-2">
            <p className="flex items-center gap-3">
                <span>Assurance</span>
            </p>
            <p>500 FCFA</p>
        </div>
        <div className="flex justify-between items-center">
            <p className="flex items-center gap-3">
                <span>Livraison</span>
                <span className="text-gray-500 text-[14px]">(Libreville)</span>
            </p>
            <p>2,000 FCFA</p>
        </div>
        <div className="flex justify-between items-center">
            <p className="flex items-center gap-3">
                <span>Frais Airtel Money</span>
            </p>
            <p>435 FCFA</p>
        </div>
        {/*  */}
        <div className="flex justify-between items-center">
            <p className="font-bold">TOTAL</p>
            <p className="flex gap-4">
                <span className="font-medium line-through text-gray-500">(12,000 FCFA)</span>
                <span className="font-bold">9,000 FCFA</span>
            </p>
        </div>
        
        {/* Ajout du bouton de paiement */}
        <button
          type="button"
          aria-label="Terminer le paiement"
          className="w-full mt-4 bg-red-500 hover:bg-red-600 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          onClick={handlePaymentComplete}
          onKeyDown={(e) => e.key === 'Enter' && handlePaymentComplete()}
        >
          Terminer le paiement
        </button>
      </div>
    </div>
  );
}