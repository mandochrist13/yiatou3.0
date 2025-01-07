import React from 'react';
import ButtonCta from '../Buttons/ButtonCta';
import BottomBarLayout from '../../pages/layout/BottomBarLayout';

const BottomActions = ({ toggleModal }) => {
  const handleOrder = () => {
    try {
      toggleModal();
    } catch (error) {
      console.log('ToggleModal doit être une fonction');
    }
  };

  const handleAddToCart = () => {
    console.log('Echantillon ajouté au panier');
  };

  return (
    <BottomBarLayout>
      <div className="shadow-lg w-full mt-1 py-2 px-3 flex justify-between gap-2">
        <ButtonCta
          onClick={handleOrder}
          variant="green"
          className="flex-1 text-lg font-bold"
        >
          Commander
        </ButtonCta>
        <ButtonCta
          onClick={handleAddToCart}
          className="flex-1 flex items-center justify-center text-lg font-bold"
        >
          Ajouter au panier
        </ButtonCta>
      </div>
    </BottomBarLayout>
  );
};

export default BottomActions; 