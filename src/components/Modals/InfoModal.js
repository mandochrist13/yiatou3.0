import { X } from 'lucide-react';

const InfoModal = ({ isOpen, onClose, message }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/25 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg w-full max-w-sm">
        <div className="p-6">
          <p className="text-sm text-gray-600">{message}</p>
        </div>
        
        <div className="px-6 pb-6">
          <button
            onClick={onClose}
            className="w-full bg-[#ff5722] text-white py-2.5 rounded-lg font-medium hover:bg-yellow-500 transition-colors"
            aria-label="Fermer"
          >
            Ok
          </button>
        </div>
      </div>
    </div>
  );
};

export default InfoModal; 