const ImageCounter = ({ currentImage, totalImages }) => {
  return (
    <div className="absolute bottom-4 right-5 z-50">
      <div className="bg-black/45 text-white rounded-full text-xs font-light px-2">
        {currentImage} / {totalImages}
      </div>
    </div>
  );
};

export default ImageCounter; 