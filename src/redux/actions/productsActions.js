import axios from 'axios';
import * as actionTypes from '../types/productsTypes';

export const getProducts = () => async (dispatch) => {
  const responseData = await axios.get('https://superfuds-assets.s3-sa-east-1.amazonaws.com/utils/product.json');

  dispatch({
    type: actionTypes.GET_PRODUCTS_LIST,
    payload: responseData.data,
  });
};

export const addToCart = (productID) => ({
  type: actionTypes.ADD_TO_CART,
  payload: { id: productID },
});

export const removeFromCart = (productID) => ({
  type: actionTypes.REMOVE_FROM_CART,
  payload: { id: productID },
});
