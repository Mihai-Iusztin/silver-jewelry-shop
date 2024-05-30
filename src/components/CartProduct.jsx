export default function CartProduct({ name, price, quantity }) {
  return (
    <li className="cart-product">
      <div>
        {name} - {quantity} x {price}
      </div>
      <div className="cart-product-qty">
        <button>-</button>
        <span>{quantity}</span>
        <button>+</button>
      </div>
    </li>
  );
}
