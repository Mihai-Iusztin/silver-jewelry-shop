import { currencyFormatter } from '../util/currencyFormatter';
import Button from './UI/Button';
import CartContext from '../store/CartContext';
import { useContext } from 'react';

export default function JewelProduct({ gem }) {
  const cartCtx = useContext(CartContext);

  function addProductToCart() {
    cartCtx.addProduct(gem);
  }

  return (
    <li className="gem-item">
      <article>
        <img src={`http://localhost:3000/${gem.image}`} alt={gem.name} />
        <div>
          <h2>{gem.name}</h2>
          <h5>{currencyFormatter.format(gem.price)}</h5>
          <p>{gem.description}</p>
        </div>
        <p>
          <button onClick={addProductToCart} className="addToCart-btn">
            Add to Order
          </button>
        </p>
      </article>
    </li>
  );
}
