import silverlandLogo from '../assets/silverland-logo.jpg';
import { FaShoppingCart } from 'react-icons/fa';
import { GrContact } from 'react-icons/gr';
import { FaShippingFast } from 'react-icons/fa';

export default function Header() {
  return (
    <header id="header">
      <div id="header-title">
        <div id="header-title-image">
          <img src={silverlandLogo} alt="Nice Silver Jewelry Shop" />
          <h1>My Silver Shop</h1>
        </div>
        <div>
          <button id="cart-btn">
            <FaShoppingCart color="red" /> (0)
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
