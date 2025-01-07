import React, { useState } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import SelectVariante from "../Buttons/SelectVariante";
import OverflowSliderModel from "../Sliders/OverflowSliderModel";
import Modal from "../Modals/Modal";

const SelectProductColor = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="py-0 bg-white">
            <div className="flex items-center justify-between px-3 py-4 mb-2">
                <p className="font-medium text-md">Variation (5)</p>
                <button
                    onClick={handleOpenModal}
                    className="focus:outline-none"
                    aria-label="Ouvrir les détails des variations"
                >
                    <FiChevronRight className="text-gray-400 text-2xl" />
                </button>
            </div>
            <OverflowSliderModel>
                <SelectVariante/>
                <SelectVariante/>
                <SelectVariante/>
                <SelectVariante/>
                <SelectVariante/>
                <SelectVariante/>
            </OverflowSliderModel>
            {isModalOpen && (
                <Modal onClose={handleCloseModal}>
                    
                </Modal>
            )}
        </div>
    );
}

export default SelectProductColor;
