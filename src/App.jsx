import Header from './components/Header';
import Jewels from './components/Jewels';
import { CartContextProvider } from './store/CartContext';

function App() {
  return (
    <CartContextProvider>
      <Header />
      <Jewels />
    </CartContextProvider>
  );
}

export default App;
