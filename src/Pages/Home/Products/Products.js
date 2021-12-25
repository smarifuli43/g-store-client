import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Product from './Product';

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/products')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className='container my-5'>
      <Row xs={1} md={3} lg={4} xl={5} className='g-4 mt-4'>
        {products.map((product) => (
          <Product key={product._id} product={product}></Product>
        ))}
      </Row>
    </div>
  );
};

export default Products;
