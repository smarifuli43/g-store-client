import React from 'react';
import Header from '../Shared/Header/Header';
import './Cart.css';
import CartItem from './CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart, removeFromCart } from '../../redux/actions/cartAction';
import Footer from '../Shared/Footer/Footer';

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const dispatch = useDispatch();
  const qtyChangeHandler = (id, qty) => {
    dispatch(addToCart(id, qty));
  };
  const removeCartHanler = (id) => {
    dispatch(removeFromCart(id));
  };

  const getCartTotal = () => {
    return cartItems.reduce((price, item) => item.price * item.qty + price, 0);
  };
    const getCartCount = () => {
      return cartItems.reduce((qty, item) => qty + Number(item.qty), 0);
    };
  return (
    <>
      <Header />
      <div className='container  my-5'>
        <div className='row'>
          <div className='col-12 col-md-8 box-shadow p-lg-3  '>
            {getCartCount() === 0 ? (
              <div className='p-4 d-flex align-items-center'>
                <p className=' m-0 '>Your cart is empty</p>{' '}
                <Link to='/' className='text-success ms-3 p-0'>
                  <i className='fas fa-home me-1'></i>
                  Go home
                </Link>
              </div>
            ) : (
              cartItems.map((item) => (
                <CartItem
                  key={item.product}
                  item={item}
                  qtyChangeHandler={qtyChangeHandler}
                  removeCartHanler={removeCartHanler}
                ></CartItem>
              ))
            )}
          </div>

          <div className='col-12 col-md-4 mt-5 mt-md-0 ps-md-4'>
            <div className=' bg-white box-shadow rounded-3 p-4 py-5'>
              <p>Total: {getCartCount()} items</p>
              <h6>Price: ${getCartTotal()}</h6>
              <hr />
              <Link
                to={`/product/checkout`}
                className='btn-store px-0 d-block text-center'
              >
                Proced to checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Cart;
