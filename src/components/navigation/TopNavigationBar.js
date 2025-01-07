import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";
import { motion } from 'framer-motion';
import { useCart } from '../../context/CartContext';

const TopNavigationBar = ({ 
  isScrolled, 
  onCartClick, 
  onKeyDown,
  backLink = "/",
  className = "" 
}) => {
  const { getCartCount } = useCart();
  const cartCount = getCartCount();

  return (
    <div className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
      isScrolled ? 'bg-white' : 'bg-transparent'
    } ${className}`}>
      <div className="flex justify-between px-1.5 py-[8px]">
        <Link 
          to={backLink} 
          className={`inline-block p-2 rounded-full transition-all duration-300 ${
            isScrolled 
              ? 'bg-white text-gray-700' 
              : 'bg-black/30 text-white'
          }`}
        >
          <i className="fi fi-br-angle-left flex text-[15px]"></i>
        </Link>
        <motion.div 
          className="relative"
          whileTap={{ scale: 0.95 }}
        >
          <button
            onClick={onCartClick}
            onKeyDown={onKeyDown}
            className={`inline-block p-2 rounded-full transition-all duration-300 ${
              isScrolled 
                ? 'bg-white text-gray-700' 
                : 'bg-black/30 text-white'
            }`}
            aria-label="Voir le panier"
            tabIndex={0}
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="relative"
            >
              <i className="fi fi-rr-shopping-cart text-[15px] flex"></i>
              {cartCount > 0 && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-3 -right-3 bg-red-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center"
                >
                  {cartCount}
                </motion.div>
              )}
            </motion.div>
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default TopNavigationBar; 