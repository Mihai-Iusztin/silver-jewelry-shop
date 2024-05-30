export default function CartProduct({
  name,
  price,
  quantity,
  onRemove,
  onAdd,
}) {
  return (
    <li className="cart-product">
      <div>
        {name} - {quantity} x {price}
      </div>
      <div className="cart-product-qty">
        <button onClick={onRemove}>-</button>
        <span>{quantity}</span>
        <button onClick={onAdd}>+</button>
      </div>
    </li>
  );
}
