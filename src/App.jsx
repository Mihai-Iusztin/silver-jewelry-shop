import Header from './components/Header';
import Jewels from './components/Jewels';
import Cart from './components/Cart';
import Confirmation from './components/Confirmation';
import { CartContextProvider } from './store/CartContext';
import { ModalContextProvider } from './store/ModalContext';

function App() {
  return (
    <ModalContextProvider>
      <CartContextProvider>
        <Header />
        <Jewels />
        <Cart />
        <Confirmation />
      </CartContextProvider>
    </ModalContextProvider>
  );
}

export default App;
