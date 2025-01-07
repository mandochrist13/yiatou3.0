import '../styles/App.scss';
import '../styles/global.scss';
import AppRoutes from '../routes/AppRoutes';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CartProvider } from '../context/CartContext';

function App() {
  return (
    <CartProvider>
      <AppRoutes />
    </CartProvider>
  );
}

export default App;
