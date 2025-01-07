import React from 'react';
import { FaImage } from "react-icons/fa";

const MoreArticleItem = ({ imageUrl, price }) => {
    return (
        <div className="relative flex-shrink-0 w-24 h-32 bg-white rounded-lg shadow-sm overflow-hidden mb-1">
            <div className="w-full h-3/4 bg-gray-200 flex justify-center items-center">
                {imageUrl ? (
                    <img 
                        src={imageUrl} 
                        alt="Product" 
                        className="w-full h-full object-cover"
                    />
                ) : (
                    <FaImage className="text-gray-400" size={24}/>
                )}
            </div>
            <div className="p-1 text-start">
                <p className="text-xs font-semibold">
                    {price ? `${price} FCFA` : 'Prix non disponible'}
                </p>
            </div>
        </div>
    );
}

export default MoreArticleItem;
