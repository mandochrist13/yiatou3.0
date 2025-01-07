import React, { useState } from 'react';
import ModalModel from "./ModalModel";
import { IoLogoWhatsapp, IoLogoFacebook, IoLogoTiktok, IoLogoInstagram } from "react-icons/io5";

export default function ShareContentModal({ isOpen, onClose, shareUrl = window.location.href }) {
  return (
    <ModalModel onClose={onClose} title="Partager" active={isOpen}>
      <ShareContent shareUrl={shareUrl} />
    </ModalModel>
  );
}

function ShareContent({ shareUrl }) {
  const [copySuccess, setCopySuccess] = useState(false);

  const socialLinks = [
    {
      name: 'WhatsApp',
      icon: <IoLogoWhatsapp className="text-[#25D366]" size={30} />,
      url: `whatsapp://send?text=${encodeURIComponent(shareUrl)}`,
    },
    {
      name: 'Facebook',
      icon: <IoLogoFacebook className="text-[#1877F2]" size={30} />,
      url: `https://www.facebook.com/dialog/share?app_id=YOUR_APP_ID&href=${encodeURIComponent(shareUrl)}&display=popup`,
    },
    {
      name: 'TikTok',
      icon: <IoLogoTiktok className="text-black" size={30} />,
      url: `https://www.tiktok.com/@${encodeURIComponent(shareUrl)}`,
    },
    {
      name: 'Instagram',
      icon: <IoLogoInstagram className="text-[#E4405F]" size={30} />,
      url: `instagram://share?url=${encodeURIComponent(shareUrl)}`,
    },
  ];

  const handleShare = (social) => {
    if (navigator.share && social.name === 'WhatsApp') {
      navigator.share({
        title: document.title,
        text: "Regarde ce que j'ai trouvé !",
        url: shareUrl
      }).catch(console.error);
    } else {
      window.open(social.url, '_blank', 'noopener,noreferrer');
    }
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const handleKeyDown = (e, callback) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      callback();
    }
  };

  return (
    <div className="px-4 py-6">
      <p className="text-center my-3 text-sm">
        Tu gagneras <strong>+1,500 FCFA</strong> à chaque fois qu'un de tes amis achetera cet article avec ton lien.
      </p>
      <div className="flex gap-3 justify-between mt-10">
        {socialLinks.map((social) => (
          <button
            key={social.name}
            onClick={() => handleShare(social)}
            className="flex flex-col gap-1 justify-center items-center hover:opacity-80 transition-opacity"
            aria-label={`Partager sur ${social.name}`}
            tabIndex={0}
            onKeyDown={(e) => handleKeyDown(e, () => handleShare(social))}
          >
            {social.icon}
            <p className="font-medium text-gray-700">{social.name}</p>
          </button>
        ))}
      </div>
      <div className="mt-10">
        <button
          className="text-lg rounded-md font-medium text-gray-700 w-full py-2 px-2 bg-gray-200 mb-3 border-2 border-dashed border-[#cccccc] hover:bg-gray-300 transition-colors"
          onClick={handleCopyLink}
          onKeyDown={(e) => handleKeyDown(e, handleCopyLink)}
          aria-label="Copier le lien de partage"
        >
          {copySuccess ? 'Lien copié !' : 'Copier le lien'}
        </button>
      </div>
    </div>
  );
}
