import { useState, useEffect } from "react";
import ShareProduct from "../Modals/ShareProduct";
import Desciption from "../Desciption";
import React from 'react';

/**
 * 
 * @param {{echantillon : Echantillons}} param0 
 * @returns 
 */
const DetailsEchantillon = ({echantillon}) => {
    const [activeModal, setActiveModal] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const totalImages = echantillon.image.length;

    const toggleModal = () => {
        setActiveModal(!activeModal);
    }

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % totalImages);
    }

    useEffect(() => {
        const intervalId = setInterval(nextImage, 5000);
        return () => clearInterval(intervalId);
    }, []);

    const getPriceByQuantity = (min, max) => {
        if (min >= 101) return 7000;
        if (min >= 51) return 7500;
        return 8500;
    };

    return (
        <div className="bg-white">
            <ShareProduct product={echantillon} toggleActiveShare={toggleModal} activeShare={activeModal}/>
            
            {/* Section livraison */}
            <div className="px-3 flex items-center gap-2 bg-[#ffe5af] -translate-y-2">
                <i className="fi fi-sr-check text-green-600 text-md mt-1"></i>
                <span className="text-sm text-gray-700">Livraison de suite à LBV</span>
            </div>

            {/* Section prix */}
            <div className="px-3 py-1">
                <div className="flex items-center gap-2">
                    <span className="text-xl font-bold">{echantillon.price?.toLocaleString()} FCFA</span>
                </div>
            </div>

            {/* Section description */}
            <div className="px-3 py-1 mb-3">
                <p className="text-gray-600 text-sm text-justify">
                    <Desciption texte={echantillon.description}/>
                </p>
            </div>

            {/* Bouton de partage */}
            <div className="px-3 py-1">
                <button 
                    onClick={toggleModal} 
                    className="w-full flex justify-center items-center gap-5 py-3 rounded bg-red-200 text-[#333333] border-dashed border-2 border-[#ef4444]"
                    aria-label="Partager pour gagner des points"
                    tabIndex={0}
                >
                    <span className="font-medium">Partages pour gagner <strong>+1500 FCFA</strong></span>
                    <i className="fi fi-br-refer-arrow"></i> 
                </button>
            </div>
        </div>
    );
}

export default DetailsEchantillon;