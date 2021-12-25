import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../Shared/Header/Header';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);
  console.log(product);
  const { name, img, countStock, price, category , description} = product;
  return (
    <>
      <Header />
      <div style={{ background: '#F9FAFB' ,padding:'70px 0' }}>
        <div className=' container box-shadow bg-white '>
          <div className='row p-3 p-md-5'>
            <div className='col-12 col-lg-4 text-center'>
              <img src={img} alt='' className='img-fluid' />
            </div>
            <div className='col-12 col-md-6 col-lg-4'>
              <h4>{name}</h4>
              {countStock > 0 ? (
                <button
                  className='border-0 rounded-3'
                  style={{ backgroundColor: '#c3f5d69a', color: '#09a043' }}
                >
                  In stock
                </button>
              ) : (
                <button
                  className='border-0 rounded-3 text-danger'
                  style={{ backgroundColor: '#f7c1c18f' }}
                >
                  out of stock
                </button>
              )}

              <h3 className='mt-4'> ${price}</h3>
              <p className='text-muted'>{description}</p>
              <button className='btn-store'>
                <i className='fas fa-cart-plus'></i> Add to cart
              </button>
              <p className='mt-3'>
                Category: <span className='text-muted '>{category}</span>
              </p>
            </div>
            <div className='col-12 col-md-6 col-lg-4 mt-5 '>
              <div
                className='px-4 py-5'
                style={{ background: '#f9f9f9', borderRadius: '10px' }}
              >
                <div className='d-flex align-items-center text-muted mb-3'>
                  <i class='fas fa-shipping-fast me-4'></i>
                  <span>
                    Free shipping apply to all orders over shipping $300
                  </span>
                </div>
                <div className='d-flex align-items-center text-muted mb-3'>
                  <i class='fas fa-exchange-alt me-4'></i>
                  <span>1 Day Returns if you change your mind</span>
                </div>
                <div className='d-flex align-items-center text-muted mb-3'>
                  <i class='fas fa-dollar-sign me-4'></i>
                  <span>Cash on Delivery Available</span>
                </div>
                <div className='d-flex align-items-center text-muted mb-3'>
                  <i class='fas fa-home me-4'></i>

                  <span>Home Delivery within 1 Hour</span>
                </div>
                <div className='d-flex align-items-center text-muted mb-3'>
                  <i class='fas fa-leaf me-4'></i>
                  <span>
                   100% organic products
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
