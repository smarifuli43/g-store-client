import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Cartitem.css'

const CartItem = ({ item, qtyChangeHandler, removeCartHanler }) => {


  return (
    <div className='mb-3'>
      <div className=' d-flex align-items-center justify-content-between border-bottom'>
        <div className='cart-img d-lg-flex align-items-center'>
          <img src={item.img} alt='' className='img-fuild ' />
          <p>{item.name}</p>
        </div>
        <Link to={`/products/${111}`}></Link>
        <div className='d-flex align-items-center'>
          <button className='update me-2' onClick={() => qtyChangeHandler(item.product, item.qty-1)}>
            <i className='fas fa-minus'></i>
          </button>
          <span className='fs-3'>{item.qty}</span>
          <button className='update ms-2' onClick={() => qtyChangeHandler(item.product, item.qty+1)}>
            <i className='fas fa-plus '></i>
          </button>
          <h4 className='ms-3'> ${item.price * item.qty}</h4>

          <button
            className='border-0 bg-transparent ms-3'
            onClick={() => removeCartHanler(item.product)}
          >
            {' '}
            <i className='fas fa-trash text-danger fs-4'></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;