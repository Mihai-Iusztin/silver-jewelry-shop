import { useContext } from 'react';
import Modal from './UI/Modal';
import ModalContext from '../store/ModalContext';

export default function Cart() {
  const modalCtx = useContext(ModalContext);

  return (
    <Modal open={modalCtx.userModal === 'cart'}>
      <h2>Your Shopping Cart</h2>
    </Modal>
  );
}
