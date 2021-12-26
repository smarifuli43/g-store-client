import React, { useState } from 'react';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import { useDispatch, useSelector } from 'react-redux';
import { reseteCart } from '../../redux/actions/cartAction';
import { useForm } from 'react-hook-form';
import useAuth from '../../Hooks/useAuth';
import { Alert } from 'react-bootstrap';

const Checkout = () => {
  const { user } = useAuth();
  const [success, setSuccess] = useState();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const dispatch = useDispatch();

  const cartReset = () => {
    dispatch(reseteCart());
  };
  const getCartTotal = () => {
    return cartItems.reduce((price, item) => item.price * item.qty + price, 0);
  };
  const getCartCount = () => {
    return cartItems.reduce((qty, item) => qty + Number(item.qty), 0);
  };

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    const order = { ...data, status: 'pending', order: [...cartItems] };
    fetch('http://localhost:5000/orders', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          setSuccess(true);
          reset();
          setTimeout(() => {
            setSuccess(false);
          }, 5000);
        }
      });
    // cartReset();
  };

  return (
    <>
      <Header />
      <div className='container'>
        <div className='row my-5'>
          <div className='col-12 col-md-7 box-shadow p-4 data-form '>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                required
                placeholder='Name'
                {...register('name')}
                defaultValue={user.displayName}
              />

              <input
                required
                placeholder='Your Email'
                type='email'
                {...register('email')}
                defaultValue={user.email}
              />
              <input
                required
                placeholder='Your Mobile'
                type='text'
                {...register('phone')}
              />
              <input
                required
                placeholder='Your address'
                {...register('address')}
              />

              <button type='submit' className='btn-store w-100'>
                Place order
              </button>
              {success && (
                <Alert variant='success' className='mt-2 py-2'>
                  order confirm successfully
                </Alert>
              )}
            </form>
          </div>

          <div className='col-12 col-md-5 mt-5 mt-md-0 ps-md-4'>
            <div className=' bg-white box-shadow rounded-3 p-4 py-5'>
              <h4>Order summary</h4>
              <hr className='mb-4' />
              <p>Total: {getCartCount()} items</p>
              <h6>Price: ${getCartTotal()}</h6>
              {/* <button
                to={`/product/checkout`}
                className='btn-store px-3 w-100  text-center'
                onClick={cartReset}
              >
                Confirm order
              </button> */}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Checkout;
