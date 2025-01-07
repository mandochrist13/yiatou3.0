import { useState, useEffect } from "react";
import ShareProduct from "../Modals/ShareProduct";
import Desciption from "../Desciption";
import React from 'react';

/**
 * 
 * @param {{product : Products}} param0 
 * @returns 
 */
const DetailsProduct = ({product}) => {
    const [activeModal, setActiveModal] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const totalImages = product.image.length;

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
            <ShareProduct product={product} toggleActiveShare={toggleModal} activeShare={activeModal}/>
            <div className="px-2 py-2 bg-gray-100 mt-2">
                <div className="grid grid-cols-3 gap-2">
                    <div className="flex flex-col justify-center items-center text-center min-h-[60px]">
                        <h3 className="text-[16px] font-bold">{getPriceByQuantity(10, 50).toLocaleString()} FCFA</h3>
                        <p className="text-[12px] text-gray-600 whitespace-nowrap">10-50 unités</p>
                    </div>
                    <div className="flex flex-col justify-center items-center text-center min-h-[60px]">
                        <h3 className="text-[16px] font-bold">{getPriceByQuantity(51, 100).toLocaleString()} FCFA</h3>
                        <p className="text-[12px] text-gray-600 whitespace-nowrap">51-100 unités</p>
                    </div>
                    <div className="flex flex-col justify-center items-center text-center min-h-[60px]">
                        <h3 className="text-[16px] font-bold">{getPriceByQuantity(101, 500).toLocaleString()} FCFA</h3>
                        <p className="text-[12px] text-gray-600 whitespace-nowrap">≥101-500 unités</p>
                    </div>
                </div>
            </div>
            <div className="px-2 py-3 flex flex-col gap-2">
                <p className="text-gray-600 mb-2 text-justify text-[14px]">
                    <Desciption texte={product.description}/>
                </p>
                <button 
                    onClick={toggleModal} 
                    className="flex justify-center items-center gap-5 py-3 rounded bg-red-200 text-[#333333] border-dashed border-2  border-[#ef4444]"
                >
                    <span className="font-medium">Partages pour gagner <strong>1500 FCFA</strong></span>
                    <i className="fi fi-br-refer-arrow"></i> 
                </button>
            </div>
        </div>
    );
}

export default DetailsProduct;
