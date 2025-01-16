import React, { useState } from "react";
import { Link } from "react-router-dom";
import ModalModel from "../../components/Modals/ModalModel";
import AddLivraison from "../Modals/AddLivraison";

const LivraisonInfo = ({ onOpenLivraison }) => {
  const openModalLivraison = () => {
    try {
      if (onOpenLivraison) {
        onOpenLivraison();
      }
    } catch (error) {
      console.log("onClose doit être une fonction.");
    }
  };

  return (
    <div className="bg-white px-4 py-4 flex flex-col gap-2 items-start translate-y-8 border-b-2 border-gray-100">
      <h2 className="text-base font-medium">Informations de livraison</h2>
      <div className="grid grid-cols-[1fr_30px] w-full">
        <div className="flex flex-col gap-0.5">
          <p className="font-medium text-sm text-gray-700">Monsieur Dave</p>
          <p className="text-sm text-gray-700 font-medium">
            Beausejour - Libreville - 066612236
          </p>
        </div>
        <div className="flex justify-end items-center">
          <Link to="/informations">
            <i className="fi fi-br-angle-right w-5 h-5"></i>
          </Link>
        </div>
      </div>
      <button
        onClick={openModalLivraison}
        className="font-medium text-xs underline text-gray-600 "
      >
        Changer l'adresse de livraison
      </button>
    </div>
  );
};

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <LivraisonInfo onOpenLivraison={() => setIsModalOpen(true)} />
      {isModalOpen && (
        <ModalModel
        title="Où doit-on te livrer?"
        onClose={() => setIsModalOpen(false)}
      >
        <div className="mb-5 flex flex-col items-center gap-5">
          <AddLivraison
            onCreateLivraison={() => {
              console.log("Ajouter une nouvelle adresse");
              // Ajoutez ici la logique pour créer une nouvelle adresse
            }}
            onSave={(data) => {
              console.log("Adresse sélectionnée ou modifiée:", data);
              // Ajoutez ici la logique pour sauvegarder l'adresse ou la sélection
            }}
          />
        </div>
      </ModalModel>
      
      )}
    </div>
  );
};

export default App;
