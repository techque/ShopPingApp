export const initialCart = [];

export const CartReducer = (cart, action) => {

  switch (action.type) {
    case 'ADD_TO_CART': 
      return [...cart, action.productId]
    
    case 'REMOVE_FROM_CART': 
      const productIndex = cart.findIndex(productId => productId === action.productId);

      let cartCopy = cart.slice();
      cartCopy.splice(productIndex, 1);

      return cartCopy;

    case 'REMOVE_ALL_FROM_CART': 
      return cart.filter(productId => productId !== action.productId);

    case 'REMOVE_CART': 
      return initialCart;
    
    default:
      throw new Error('Invalid cart action type!');
  }

};