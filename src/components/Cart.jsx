import { useContext } from 'react';
import Modal from './UI/Modal';
import ModalContext from '../store/ModalContext';
import CartContext from '../store/CartContext';
import CartProduct from './CartProduct';
import { currencyFormatter } from '../util/currencyFormatter';
import Button from './UI/Button';

export default function Cart() {
  const modalCtx = useContext(ModalContext);
  const cartCtx = useContext(CartContext);

  console.log(cartCtx);

  const cartTotal = cartCtx.products.reduce((total, product) => {
    return total + product.price * product.quantity;
  }, 0);

  function handleClose() {
    modalCtx.hideModal();
  }

  return (
    <Modal open={modalCtx.userModal === 'cart'} className="cart-modal">
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartCtx.products.map((product) => (
          <CartProduct
            key={product.id}
            name={product.name}
            price={product.price}
            quantity={product.quantity}
            onRemove={() => cartCtx.removeProduct(product.id)}
            onAdd={() => cartCtx.addProduct(product)}
          ></CartProduct>
        ))}
      </ul>
      <h3 className="cart-total">
        Total {currencyFormatter.format(cartTotal)}
      </h3>
      <div className="cart-btn">
        <Button onClick={handleClose}>Close</Button>
        {cartCtx.products.length > 0 && <Button>Confirm</Button>}
      </div>
    </Modal>
  );
}
