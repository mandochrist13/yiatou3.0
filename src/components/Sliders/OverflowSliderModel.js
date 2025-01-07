const OverflowSliderModel = ({ children }) => {
  return (
    <div className="flex px-3 overflow-x-auto flex-nowrap gap-6 scrollbar-hide">
      {children}
    </div>
  );
};

export default OverflowSliderModel;
