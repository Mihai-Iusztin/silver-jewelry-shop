import Header from './components/Header';
import Jewels from './components/Jewels';
import Cart from './components/Cart';
import { CartContextProvider } from './store/CartContext';
import { ModalContextProvider } from './store/ModalContext';

function App() {
  return (
    <ModalContextProvider>
      <CartContextProvider>
        <Header />
        <Jewels />
        <Cart />
      </CartContextProvider>
    </ModalContextProvider>
  );
}

export default App;
