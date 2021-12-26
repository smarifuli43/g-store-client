import React from 'react';
import { Carousel } from 'react-bootstrap';

import './Banner.css';

const Banner = () => {
  return (
    <div className='container-fluid'>
      <Carousel variant='dark' controls={false} className='carousel'>
        <Carousel.Item className='carousel-item'>
          <div className='container'>
            <div className='row '>
              <div className='col-12 col-md-8 col-lg-6'>
                <h1 className='text-dark fw-bold'>
                  Get the best quality vegetables
                </h1>
                <p className='text-muted fw-light'>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Doloremque labore praesentium est quis minus ratione saepe.
                </p>
                <button className='btn-store'>Shop Now</button>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item className='carousel-item'>
          <div className='container'>
            <div className='row '>
              <div className='col-12 col-md-8 col-lg-6'>
                <h1 className='text-dark fw-bold'>
                  Feed your family the best products
                </h1>
                <p className='text-muted fw-light'>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Doloremque labore praesentium est quis minus ratione saepe.
                </p>
                <button className='btn-store'>Shop Now</button>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item className='carousel-item'>
          <div className='container'>
            <div className='row '>
              <div className='col-12 col-md-8 col-lg-6'>
                <h1 className='text-dark fw-bold'>
                  More than 100 types of bakery product
                </h1>
                <p className='text-muted fw-light'>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Doloremque labore praesentium est quis minus ratione saepe.
                </p>
                <button className='btn-store'>Shop Now</button>
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
