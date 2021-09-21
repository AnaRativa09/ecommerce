import * as actionTypes from '../types/productsTypes';

const INITIAL_STATE = {
  dataProducts: [],
  cart: [],
};

const productsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.GET_PRODUCTS_LIST:
      return { ...state, dataProducts: action.payload };
    default:
      return state;
  }
};

export default productsReducer;
