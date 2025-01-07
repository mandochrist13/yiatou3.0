import { FaWhatsapp } from 'react-icons/fa6';

const ButtonWhatsapp = ({ children, phoneNumber, message }) => {
  const handleWhatsAppRedirect = () => {
    const phoneNumber = '+24177305184';
    const encodedMessage = encodeURIComponent(message || '');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      handleWhatsAppRedirect();
    }
  };

  return (
    <button
      onClick={handleWhatsAppRedirect}
      onKeyDown={handleKeyDown}
      className="flex font-medium gap-3 items-center justify-center w-full py-3 px-4 rounded-full text-white bg-green-600  transition-colors duration-200  "
      aria-label="Ouvrir WhatsApp"
      tabIndex={0}
      type="button"
    >
      <FaWhatsapp size={20} aria-hidden="true" />
      <span>{children}</span>
    </button>
  );
};

export default ButtonWhatsapp;
