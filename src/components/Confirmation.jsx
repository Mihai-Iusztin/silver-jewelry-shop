import { useContext } from 'react';
import Button from './UI/Button';
import Input from './UI/Input';
import Modal from './UI/Modal';
import ModalContext from '../store/ModalContext';

export default function Confirmation() {
  const modalCtx = useContext(ModalContext);

  return (
    <Modal open={modalCtx.userModal === 'confirmation'}>
      <form action="">
        <h3>Confirm your Order</h3>
        <h5>Total amount:</h5>

        <Input label="Name" type="text" id="name" />
        <Input label="Email" type="email" id="email" />
        <Input label="Phone" type="number" id="phone" />
        <div>
          <Input label="City" type="text" id="city" />
          <Input label="Street" type="text" id="street" />
          <Input label="Postal Code" type="text" id="postal-code" />
        </div>
        <div>
          <Button type="button">Close</Button>
          <Button>Send the Order</Button>
        </div>
      </form>
    </Modal>
  );
}
