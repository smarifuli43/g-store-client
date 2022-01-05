import * as actionTypes from '../constants/cartConstants';
import axios from 'axios';

export const addToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(
    `https://rocky-shore-10312.herokuapp.com/products/${id}`
  );
  dispatch({
    type: actionTypes.ADD_TO_CART,
    payload: {
      product: data._id,
      name: data.name,
      img: data.img,
      price: data.price,
      countStock: data.countStock,
      category: data.category,
      status: 'pending',
      qty: qty > 0 ? qty : 1,
    },
  });
  localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: actionTypes.REMOVE_FROM_CART,
    payload: id,
  });
  localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems));
};
export const reseteCart = () => (dispatch) => {
  dispatch({
    type: actionTypes.CART_RESET,
  });
  localStorage.removeItem('cart');
};
