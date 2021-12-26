import React, { useEffect } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import { useSelector, useDispatch } from 'react-redux';
import Product from '../Home/Products/Product';
//action
import { getProducts as listProducts } from '../../redux/actions/productAction';


const Shop = () => {

    const dispatch = useDispatch();
    const getProducts = useSelector((state) => state.getProducts);
    useEffect(() => {
      dispatch(listProducts());
    }, [dispatch]);
    const { products, loading, error } = getProducts;
  return (
    <>
      <Header />
      <div className='' style={{ background: '#F9FAFB' }}>
        <div className='container py-5'>
          <h2 className='heading-main'>Popular Products</h2>
          {loading ? (
            <div className='text-center my-5'>
              <Spinner animation='border' role='status'>
                <span className='visually-hidden'>Loading...</span>
              </Spinner>
            </div>
          ) : error ? (
            { error }
          ) : (
            <Row xs={2} md={3} lg={4} xl={5} className='g-4 mt-4'>
              {products?.map((product) => (
                <Product key={product._id} product={product}></Product>
              ))}
            </Row>
          )}
        </div>

      
      
      </div>
      <Footer />
    </>
  );
};

export default Shop;