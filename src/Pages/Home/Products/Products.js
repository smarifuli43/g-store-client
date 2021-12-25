import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Product from './Product';
const Products = () => {
  const [products, setProducts] = useState([]);
  const [bakerys, setBakary] = useState([]);
  const [vegetables, setVegetables] = useState([]);
  const [fruits, setFruits] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/products')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
 
  return (
    <div className='' style={{ background: '#F9FAFB' }}>
      <div className='container py-5'>
        <h2 className='heading-main'>Popular Products</h2>
        <Row xs={2} md={3} lg={4} xl={5} className='g-4 mt-4'>
          {products.slice(0, 10).map((product) => (
            <Product key={product._id} product={product}></Product>
          ))}
        </Row>
      </div>

      <div className='container py-5'>
        <h2 className='heading-main'>Bakery Products</h2>
        <Row xs={2} md={3} lg={4} xl={5} className='g-4 mt-4'>
          {products
            .filter((product) => product.category === 'bakery')
            .map((product) => (
              <Product key={product._id} product={product}></Product>
            ))}
        </Row>
      </div>
      <div className='container py-5'>
        <h2 className='heading-main'>Top fruits</h2>
        <Row xs={2} md={3} lg={4} xl={5} className='g-4 mt-4'>
          {products
            .filter((product) => product.category === 'fruits')
            .map((product) => (
              <Product key={product._id} product={product}></Product>
            ))}
        </Row>
      </div>
      <div className='container py-5'>
        <h2 className='heading-main'>Top Vegetables</h2>
        <Row xs={2} md={3} lg={4} xl={5} className='g-4 mt-4'>
          {products
            .filter((product) => product.category === 'vegetables')
            .map((product) => (
              <Product key={product._id} product={product}></Product>
            ))}
        </Row>
      </div>
    </div>
  );
};

export default Products;
