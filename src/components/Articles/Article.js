import React from "react";
import { Link } from "react-router-dom";
import { Products } from "../../utils/utils";

const useTextAnimation = (texts, interval) => {
 const [currentTextIndex, setCurrentTextIndex] = React.useState(0);
 const [isVisible, setIsVisible] = React.useState(true);


 React.useEffect(() => {
   const intervalId = setInterval(() => {
     setIsVisible(false);
     setTimeout(() => {
       setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
       setIsVisible(true);
     }, 300);
   }, interval);
   return () => clearInterval(intervalId);
 }, [texts, interval]);


 return { currentText: texts[currentTextIndex], isVisible };
};


/**
* @param {{share : Function, product : Products}} param0
* @returns
*/
const Article = ({ share = null, product }) => {
 const handleShare = () => {
   try {
     if (typeof share === 'function') {
       share();
     }
   } catch (error) {
     console.log('pas une fonction');
   }
 };


 const { currentText, isVisible: isTextVisible } = useTextAnimation(
   ["Échantillon dispo", "Livraison dispo"],
   3000
 );


 // Réduire à 15 caractères pour une carte plus compacte
 let truncatedDescription = product.description.slice(0, 30) + "...";


 return (
   <div 
     className="w-full bg-white rounded-lg shadow-sm relative overflow-hidden flex flex-col"
   >
     {/* Image */}
     <Link to={`/produit-details/${product.id}`} className="block relative">
       <div className="aspect-w-1 aspect-h-1 w-full">
         <img
           className="w-full h-full object-cover object-center"
           src={product.image[0]}
           alt={product.name}
         />
       </div>
     </Link>


     {/* Content */}
     <div className="p-2 flex flex-col justify-between flex-shrink-0">
       {/* Description */}
       <Link
         to={`/produit-details/${product.id}`}
         className="text-[#333333] text-xs leading-tight block mb-0.5 whitespace-nowrap overflow-hidden text-ellipsis"
       >
         {truncatedDescription}
       </Link>


       {/* Price */}
       <p className="text-[#333333] font-bold text-md mb-0.3">
         {product.prix.toLocaleString()} FCFA
       </p>


       <div className="flex justify-between items-center">
         {/* Sample/Delivery Info */}
         {product.sampleAvailable ? (
           <p className={`text-[12px] font-base leading-tight text-green-600 transition-opacity duration-300 ease-in-out ${
             isTextVisible ? 'opacity-100' : 'opacity-0'
           }`}>
             {currentText}
           </p>
         ) : (
           <p className="text-[12px] font-base leading-tight text-gray-600">
             Achat min: {product.minPurchase} 
           </p>
         )}


         {/* Share Button */}
         <button
           className="bg-gray-100 p-1.5 rounded-full transition-transform duration-300 ease-in-out hover:rotate-180 focus:rotate-180"
           onClick={handleShare}
           aria-label="Partager"
         >
           <i className="fi fi-rr-refer-arrow text-[15px] flex"></i>
         </button>
       </div>
     </div>
   </div>
 );
};


export default Article;
