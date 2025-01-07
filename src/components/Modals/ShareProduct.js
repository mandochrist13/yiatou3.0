import {IoLogoWhatsapp, IoLogoFacebook} from "react-icons/io5";
import {FaFacebookMessenger, FaInstagram} from "react-icons/fa";
import React, { useState } from 'react'
import ModalModel from "./ModalModel";
import ButtonCta from "../Buttons/ButtonCta";
import Login from "../../pages/auth/Login";
import FAQ from '../FAQ/FAQ';

export default function ShareProduct({toggleActiveShare, activeShare, product = null, isProduct = true}) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const toggleModal = () => {
    try {
      toggleActiveShare();
    } catch (error) {
      console.log("toggleActiveShare doit être une fonction");
    }
  }

  const handleLogin = () => {
    setIsLoggedIn(true);
    setShowLoginModal(false);
  }

  const toggleLoginModal = () => {
    setShowLoginModal(!showLoginModal);
  };

  return (
    <ModalModel 
      onClose={toggleModal} 
      topContent={isProduct ? <ProductImage image={product?.image[0]}/> : null} 
      title="Partage et gagne" 
      active={activeShare}
    >
      <ModalImageContent isProduct={isProduct} isLoggedIn={isLoggedIn} toggleLoginModal={toggleLoginModal} />
      {showLoginModal && <LoginModal onClose={toggleLoginModal} onLogin={handleLogin} />}
    </ModalModel>
  )
}

function ProductImage({image = ""}) { 
  return (
    <div className="w-full h-[50em] bg-black bg-opacity-50 flex justify-center items-center">
      <div className="w-[150px] h-[150px] bg-white rounded-lg overflow-hidden flex justify-center items-center mt-[630px]">
        <img src={image} alt="product share" className="w-full h-full object-cover"/>
      </div>
    </div>
  );
}

function ModalImageContent({isProduct = true, isLoggedIn, toggleLoginModal}) {
    const [showFAQ, setShowFAQ] = useState(false);

    const toggleFAQ = () => {
        setShowFAQ(!showFAQ);
    };

    const handleShare = (platform) => {
        if (!isLoggedIn) {
            console.log("Tu ne gagneras pas 1,000 FCFA de commission, car tu n'es pas connecté");
        } else {
            // Implement sharing logic here
            console.log(`Sharing on ${platform}`);
        }
    };

    const handleCopyLink = () => {
        if (!isLoggedIn) {
            alert("Tu ne gagneras pas 1,000 FCFA de commission, car tu n'es pas connecté");
        } else {
            // Implement copy link logic here
            console.log("Link copied");
        }
    };

    return (
      <div className="px-3 -my-8 mb-2">
        {!isProduct ? 
        <p className="mt-3 text-md text-center">Faites découvrir Yiatou à vos amis et gagnez encore plus de commission !</p> : 
        <p className="text-center text-sm relative">
          Tu gagneras <strong>+1,500 FCFA</strong> à chaque fois qu'un de tes amis achetera cet article avec ton lien.
          <button 
            className="inline-block align-middle ml-1 bg-white rounded-full p-1 cursor-pointer hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-500"
            onClick={toggleFAQ}
            aria-label="Afficher ou masquer la FAQ"
            aria-expanded={showFAQ}
          >
            <i className="fi fi-rr-info text-red-500 text-sm"></i>
          </button>
        </p>
        }
        
        {showFAQ && <FAQ onClose={toggleFAQ} />}
        
        <div className="flex gap-3 justify-between mt-8">
        <div className="flex flex-col gap-1 justify-center items-center cursor-pointer" onClick={() => handleShare('Instagram')}>
            <FaInstagram color="#E4405F" size={45}/>
            <p className="text-xs text-gray-500">Instagram</p>
          </div>
          <div className="flex flex-col gap-1 justify-center items-center cursor-pointer" onClick={() => handleShare('Facebook')}>
            <IoLogoFacebook color="#1877F2" size={45}/>
            <p className="text-xs text-gray-500">Facebook</p>
          </div>
          <div className="flex flex-col gap-1 justify-center items-center cursor-pointer" onClick={() => handleShare('Messenger')}>
            <FaFacebookMessenger color="#00B2FF" size={45}/>
            <p className="text-xs text-gray-500">Messenger</p>
          </div>
          <div className="flex flex-col gap-1 justify-center items-center cursor-pointer" onClick={() => handleShare('WhatsApp')}>
            <IoLogoWhatsapp color="#25D366" size={45}/>
            <p className="text-xs text-gray-500">WhatsApp</p>
          </div>
        </div>
        <div className="mt-6">
          <button 
            className="text-base rounded-md font-medium text-gray-700 w-full py-2 px-2 bg-gray-200 mb-3 border-2 border-dashed border-[#cccccc]"
            onClick={handleCopyLink}
          >
            Copier le lien
          </button>
        </div>
        {!isLoggedIn && isProduct && (
          <ButtonCta onClick={toggleLoginModal}>
            Connexion
          </ButtonCta>
        )}
      </div>
    );
}


function LoginModal({ onClose, onLogin }) {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Implement login logic here
        onLogin();
    };

    return (
        <ModalModel onClose={onClose} icon={<IconUser />} title="Connexion" active={true}>
            <Login/>
        </ModalModel>
    );
}

function IconUser() {
    return (
        <span className="px-2 py-2 text-white rounded-full bg-blue-600">
            <i className="fi fi-sr-user flex"></i>
        </span>
    )
}
