import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Products.css';

const Product = (props) => {
  const { name, img, price, countStock, weight } = props.product;
 
  return (
    <div>
      <Card className='h-100 card '>
        <Card.Img variant='top' src={img} />
        <Card.Body>
          <Card.Title className='mb-0'>
            <Link to='/' className='product-name'>
              {name}
            </Link>
          </Card.Title>
          {countStock > 0 ? (
            <p className='text-success'>In stock</p>
          ) : (
            <p className='text-danger'>out of stock</p>
          )}
          <div className='d-flex align-items-center justify-content-between'>
            <h6>${price}/{ weight} Kg</h6>
            <button className='cart-btn'>
              <i class='fas fa-cart-plus'></i> Add
            </button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Product;
