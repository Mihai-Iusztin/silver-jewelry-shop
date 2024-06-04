import silverlandLogo from '../assets/silverland-logo.jpg';
import { FaShoppingCart } from 'react-icons/fa';
import { GrContact } from 'react-icons/gr';
import { FaShippingFast } from 'react-icons/fa';
import CartContext from '../store/CartContext';
import { useContext } from 'react';
import ModalContext from '../store/ModalContext';

export default function Header() {
  const cartCtx = useContext(CartContext);
  const modalCtx = useContext(ModalContext);

  function handleShowCart() {
    modalCtx.showCart();
  }

  const cartProductsTotal = cartCtx.products.reduce(
    (totalProducts, product) => {
      return totalProducts + product.quantity;
    },
    0
  ); //total number of the products from cart

  return (
    <header id="header">
      <div id="header-title">
        <div id="header-title-image">
          <img src={silverlandLogo} alt="Nice Silver Jewelry Shop" />
          <h1>My Silver Shop</h1>
        </div>
        <div>
          <button id="cart-btn">
            <FaShoppingCart color="red" onClick={handleShowCart} />{' '}
            {cartProductsTotal}
          </button>
        </div>
      </div>
      <div id="header-contact">
        <button id="contact-btn">
          <GrContact color="red" /> Contact Us
        </button>
        <p id="shipping-icon">
          <FaShippingFast color="red" /> Free Shipping
        </p>
      </div>
    </header>
  );
}
