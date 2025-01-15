import React, { useState } from "react";
import { Link } from "react-router-dom";
import ModalModel from "../../components/Modals/ModalModel";

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
          <div className=" mb-5 flex flex-col items-center gap-5 ">
            <div className=" ">
              <div className=" flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="assurance"
                    className="w-3.5 h-3.5 accent-blue-400"
                  />
                  <h2 className="text-md font-bold">Adresse 1</h2>
                </div>
                <button
                  // onClick={onEdit}
                  className="text-gray-600 hover:text-blue-600 transition-colors p-2 rounded-full hover:bg-gray-100"
                  aria-label="Modifier les informations"
                >
                  <i className="fi fi-rr-edit"></i>
                </button>{" "}
              </div>
              <p className=" ">
                Livraison à Mr. Dave Anguilet Walker, à l'adresse Beauséjour en
                face de chez Mamboundou.
              </p>{" "}
            </div>
            <div className=" ">
              <div className=" flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="assurance"
                    className="w-3.5 h-3.5 accent-blue-400"
                  />
                  <h2 className="text-md font-bold">Adresse 2</h2>
                </div>
                <button
                  // onClick={onEdit}
                  className="text-gray-600 hover:text-blue-600 transition-colors p-2 rounded-full hover:bg-gray-100"
                  aria-label="Modifier les informations"
                >
                  <i className="fi fi-rr-edit"></i>
                </button>{" "}
              </div>
              <p className=" ">
                Livraison à Mr. Dave Anguilet Walker, à l'adresse Beauséjour en
                face de chez Mamboundou.
              </p>{" "}
            </div>
            <button
                  // onClick={onEdit}
                  className="text-gray-800 border border-gray-800 p-2 rounded-md"
                  aria-label="Ajouter une adresse"
                >
                  Ajouter une adresse de livraison
                </button>{" "}
          </div>
        </ModalModel>
      )}
    </div>
  );
};

export default App;
