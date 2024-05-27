import { currencyFormatter } from '../util/currencyFormatter';
import Button from './UI/Button';
import CartContext from '../store/CartContext';
import { useContext } from 'react';

export default function JewelProduct({ gem }) {
  const cartCtx = useContext(CartContext);

  function addProductToCart() {
    cartCtx.addProduct(gem);
  }
  console.log(cartCtx);
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
          <Button onClick={addProductToCart}>Add to Order</Button>
        </p>
      </article>
    </li>
  );
}
