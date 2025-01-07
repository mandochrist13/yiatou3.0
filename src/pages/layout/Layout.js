import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="font-sans min-h-screen bg-gray-100/35">
      <div className="w-full min-h-screen max-w-[650px] m-auto">
        {children}
      </div>
    </div>
  );
};

export default Layout;
