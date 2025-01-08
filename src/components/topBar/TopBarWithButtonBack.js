import React from "react";
import TopBarLayout from "../../pages/layout/TopBarLayout";
import { useNavigate } from "react-router-dom";

const TopBarWithButtonBack = ({title = null, link = -1}) => {
  const navigate = useNavigate();

  const handleBack = (e) => {
    e.preventDefault();
    if (link === -1) {
      navigate(-1);
    } else {
      navigate(link);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleBack(e);
    }
  };

  return (
    <TopBarLayout>
      <div className="w-full flex items-center justify-between h-[48px] px-3 relative">
        <button 
          onClick={handleBack}
          onKeyDown={handleKeyDown}
          className="absolute left-1 top-1/2 -translate-y-1/2 flex items-center"
          aria-label="Retour"
          tabIndex={0}
        >
          <i className="fi fi-br-angle-left flex items-center justify-center text-md w-6 h-6"></i>
        </button>
        <h2 className="text-lg font-medium w-full ml-4">{title}</h2>
      </div>
    </TopBarLayout>
  );
};

export default TopBarWithButtonBack;
