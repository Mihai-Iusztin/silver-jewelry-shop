import { useContext } from 'react';
import Button from './UI/Button';
import Input from './UI/Input';
import Modal from './UI/Modal';
import ModalContext from '../store/ModalContext';
import CartContext from '../store/CartContext';

export default function Confirmation() {
  const modalCtx = useContext(ModalContext);
  const cartCtx = useContext(CartContext);

  const totalAmount = cartCtx.products.reduce((total, product) => {
    return total + product.quantity * product.price;
  }, 0);

  function handleModalClose() {
    modalCtx.hideModal();
  }

  function handleSubmit(event) {
    event.preventDefault();

    const fd = new FormData(event.target);
    console.log(fd); // FormData
    const enteredData = Object.fromEntries(fd.entries());
    console.log(enteredData); // {name: IM, phone: 666}

    fetch('http://localhost:3000/orders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        order: {
          products: cartCtx.products,
          customer: enteredData,
        },
      }),
    });
  }

  return (
    <Modal open={modalCtx.userModal === 'confirmation'}>
      <form onSubmit={handleSubmit}>
        <h3>Confirm your Order</h3>
        <h5>Total amount: {totalAmount}</h5>

        <Input label="Name" type="text" id="name" />
        <Input label="Email" type="email" id="email" />
        <Input label="Phone" type="number" id="phone" />
        <div className="input-code">
          <Input label="City" type="text" id="city" />
          <Input label="Street" type="text" id="street" />
          <Input label="Postal Code" type="text" id="postal-code" />
        </div>
        <div className="input-btn">
          <Button type="button" onClick={handleModalClose}>
            Close
          </Button>
          <Button>Send the Order</Button>
        </div>
      </form>
    </Modal>
  );
}
