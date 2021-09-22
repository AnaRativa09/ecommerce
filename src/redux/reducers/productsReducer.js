import * as actionTypes from '../types/productsTypes';

const INITIAL_STATE = {
  dataProducts: [],
  cart: [],
};

const productsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.GET_PRODUCTS_LIST:
      return { ...state, dataProducts: action.payload };

    case actionTypes.ADD_TO_CART: {
      const productData = state.dataProducts.find((product) => product.id === action.payload.id);
      const inCart = state.cart.find((productInCart) => productInCart.id === action.payload.id);

      return {
        ...state,
        cart: inCart
          ? state.cart.map((productMap) => (productMap.id === action.payload.id
            ? { ...productMap, qty: productMap.qty + 1 }
            : productMap))
          : [...state.cart, { ...productData, qty: 1 }],
      };
    }

    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };

    case actionTypes.ADJUST_PRODUCT_QTY:
      return {
        ...state,
        cart: state.cart.map((item) => (item.id === action.payload.id
          ? { ...item, qty: action.payload.qty }
          : item)),
      };

    default:
      return state;
  }
};

export default productsReducer;
