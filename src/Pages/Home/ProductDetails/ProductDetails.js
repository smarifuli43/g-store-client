import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../Shared/Header/Header';
import './ProductDetails.css';
import { useSelector, useDispatch } from 'react-redux';

// import action
import { getProductsDetails } from '../../../redux/actions/productAction';
import { addToCart } from '../../../redux/actions/cartAction';
import { Spinner } from 'react-bootstrap';
import Footer from '../../Shared/Footer/Footer';
const ProductDetails = () => {
  const { id } = useParams();
  // const [product, setProduct] = useState({});
  let [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const ProductDetails = useSelector((state) => state.getProductDetails);

  const { product, loading, error } = ProductDetails;
 

  useEffect(() => {
    if (product && id !== product._id) {
      dispatch(getProductsDetails(id));
    }
  }, [id, dispatch, product]);
  //   useEffect(() => {
  //     fetch(`http://localhost:5000/products/${id}`)
  //       .then((res) => res.json())
  //       .then((data) => setProduct(data));
  //   }, [id]);
  const { name, img, countStock, price, category, description } = product;
  const increase = () => {
    setQuantity(quantity++);
  };
  const decrease = () => {
    if (quantity > 1) {
      setQuantity(quantity--);
    } else {
      setQuantity(1);
    }
  };
  const addToCartHandler = () => {
    dispatch(addToCart(product._id, quantity));
  };

  return (
    <>
      <Header />
      <div style={{ background: '#F9FAFB', padding: '70px 0' }}>
        <div className=' container box-shadow bg-white '>
          {loading ? (
            <div className='text-center my-5'>
              <Spinner animation='border' role='status'>
                <span className='visually-hidden'>Loading...</span>
              </Spinner>
            </div>
          ) : error ? (
            { error }
          ) : (
            <>
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
                  <p className='mt-3'>{price}/kg</p>
                  <div className='d-flex align-items-center'>
                    <button
                      className='update me-4'
                      onClick={() => setQuantity(decrease)}
                    >
                      <i className='fas fa-minus'></i>
                    </button>
                    <span className='fs-4'>{quantity}</span>
                    <button
                      className='update ms-4'
                      onClick={() => setQuantity(increase)}
                    >
                      <i className='fas fa-plus '></i>
                    </button>
                    <h4 className='ms-5'> ${product.price * quantity}</h4>
                  </div>

                  <p className='text-muted mt-4'>{description}</p>
                  <button className='btn-store' onClick={addToCartHandler}>
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
                      <i className='fas fa-shipping-fast me-4'></i>
                      <span>
                        Free shipping apply to all orders over shipping $300
                      </span>
                    </div>
                    <div className='d-flex align-items-center text-muted mb-3'>
                      <i className='fas fa-exchange-alt me-4'></i>
                      <span>1 Day Returns if you change your mind</span>
                    </div>
                    <div className='d-flex align-items-center text-muted mb-3'>
                      <i className='fas fa-dollar-sign me-4'></i>
                      <span>Cash on Delivery Available</span>
                    </div>
                    <div className='d-flex align-items-center text-muted mb-3'>
                      <i className='fas fa-home me-4'></i>

                      <span>Home Delivery within 1 Hour</span>
                    </div>
                    <div className='d-flex align-items-center text-muted mb-3'>
                      <i className='fas fa-leaf me-4'></i>
                      <span>100% organic products</span>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default ProductDetails;
