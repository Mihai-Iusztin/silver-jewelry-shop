import { createContext, useState } from 'react';

const ModalContext = createContext({
  userModal: '',
  showCart: () => {},
  showConfirmation: () => {},
  hideModal: () => {},
});

export function ModalContextProvider({ children }) {
  const [userModal, setUserModal] = useState('');

  function showCart() {
    setUserModal('chart');
  }

  function showConfirmation() {
    setUserModal('confirmation');
  }

  function hideModal() {
    setUserModal('');
  }

  const userModalCtx = {
    userModal: userModal,
    showCart,
    showConfirmation,
    hideModal,
  };

  return (
    <ModalContext.Provider value={userModalCtx}>
      {children}
    </ModalContext.Provider>
  );
}

export default ModalContext;
