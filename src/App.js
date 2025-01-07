import React from 'react';
import { CartProvider } from './context/CartContext';
import AppRoutes from './routes/AppRoutes';
import DetailsEchantillon from './components/Sections/DetailsEchantillon';
import { UserProvider } from './context/UserContext';
import { AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();

  return (
    <CartProvider>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <UserProvider>
            <AppRoutes />
          </UserProvider>
        </Routes>
      </AnimatePresence>
    </CartProvider>
  );
}

export default App; 