import React, { useState } from 'react';
import SliderModel from '../Sliders/SliderModel';
import ImageCounter from '../UI/ImageCounter';

const HeaderEchantillon = ({ echantillon }) => {
  const [currentImage, setCurrentImage] = useState(1);

  return (
    <div className="w-full relative">
      <SliderModel onSlideChange={(index) => setCurrentImage(index + 1)}>
        {echantillon.image.map((img, i) => (
          <div key={i} className='w-full h-[100vw] bg-white flex justify-center items-center overflow-hidden'>
            <img src={img} alt={echantillon.name} className="w-full h-full object-cover"/>
          </div>
        ))}
      </SliderModel>
      <ImageCounter currentImage={currentImage} totalImages={echantillon.image.length} />
    </div>
  );
};

export default HeaderEchantillon; 