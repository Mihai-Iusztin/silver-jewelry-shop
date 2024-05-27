import { createContext, useReducer } from 'react';

const CartContext = createContext({
  products: [],
  addProduct: (product) => {},
  removeProduct: (id) => {},
});

function cartReducer(state, action) {
  if (action.type === 'ADD_PRODUCT') {
    const updatedProducts = [...state.products]; //make one copy to not mutate the original

    const existingProductIndex = state.products.findIndex(
      (product) => product.id === action.product.id
    ); //verify if the product is already in the cart and find it's index

    if (existingProductIndex === -1) {
      // the product is not in the cart
      updatedProducts.push({ ...action.product, quantity: 1 }); // add the product to the cart and add the quantity property
    } else {
      //the product is already in the cart
      const existingProduct = state.products[existingProductIndex]; //find the existing product based on it's index
      const updatedProduct = {
        ...existingProduct,
        quantity: existingProduct.quantity + 1, //update the existing product with new quantity
      };
      updatedProducts[existingProductIndex] = updatedProduct; // update the cart with the new ,updated product
    }

    return { ...state, products: updatedProducts }; // return the new, updated state
  }
  if (action.type === 'REMOVE_PRODUCT') {
    const existingProductIndex = state.products.findIndex((product) => {
      product.id === action.id; // find the index of the product based on it's id
    });
    const existingProduct = state.products[existingProductIndex]; // save the selected product
    const updatedProducts = [...state.products]; // copy of array
    if (existingProduct.quantity === 1) {
      updatedProducts.splice(existingProductIndex, 1); //remove the product from the array
    } else {
      const updatedProduct = {
        ...existingProduct,
        quantity: existingProduct.quantity - 1,
      }; // if the quantity > 1 update the quantity
      updatedProducts[existingProductIndex] = updatedProduct;
    }
    return { ...state, items: updatedProducts };
  }

  return state;
}

export function CartContextProvider({ children }) {
  const [cart, dispatchCart] = useReducer(cartReducer, { products: [] });

  function addProduct(product) {
    dispatchCart({ type: 'ADD_PRODUCT', product: product });
  }

  function removeProduct(id) {
    dispatchCart({ type: 'REMOVE_PRODUCT', id: id });
  }

  const cartContext = {
    products: cart.products,
    addProduct: addProduct,
    removeProduct: removeProduct,
  };

  console.log(cartContext);
  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
}

export default CartContext;
