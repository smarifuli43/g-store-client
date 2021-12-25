import React from 'react';
import logo from '../../../img/logo.png'

const Footer = () => {
  return (
    <div style={{ background: '#222222' }}>
      <div className='container py-5'>
        <div className='row '>
          <div className='col-12 col-md-6 col-lg-5 text-white'>
            <img src={logo} alt="" width='250px'  className='mb-3'/>
            <p>
              <i className='fas fa-map-marker-alt me-3 fs-5'></i>
              H#000 (0th Floor), Road #00, New DOHS, Mohakhali, Dhaka,
              Bangladesh
            </p>
          </div>
          <div className='col-12 col-md-6 col-lg-7'>
            <div className='row'>
              <div className='col-12 col-md-6 col-lg-4'>
                <h5 className='text-white mb-3'>Company</h5>
                <ul className='list-unstyled '>
                  <li>
                    <a className='text-white-50' href='/'>
                      About
                    </a>
                  </li>
                  <li>
                    <a className='text-white-50' href='/'>
                      Project
                    </a>
                  </li>
                  <li>
                    <a className='text-white-50' href='/'>
                      {' '}
                      Our Team
                    </a>
                  </li>
                  <li>
                    <a className='text-white-50' href='/'>
                      {' '}
                      Terms Conditions
                    </a>
                  </li>
                  <li>
                    <a className='text-white-50' href='/'>
                      {' '}
                      Submit Listing
                    </a>
                  </li>
                </ul>
              </div>
              <div className='col-12 col-md-6 col-lg-4'>
                <h5 className='text-white mb-3'>Quick Links</h5>
                <ul className='list-unstyled '>
                  <li>
                    <a className='text-white-50' href='/'>
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a className='text-white-50' href='/'>
                      Sales
                    </a>
                  </li>
                  <li>
                    <a className='text-white-50' href='/'>
                      {' '}
                      Contact
                    </a>
                  </li>
                  <li>
                    <a className='text-white-50' href='/'>
                      Our blog
                    </a>
                  </li>
                </ul>
              </div>
              <div className='col-12 col-md-10 col-lg-4'>
                <h5 className='text-white mb-3'>About Us</h5>
                <small className='text-white-50'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
                  commodo ipsum duis laoreet maecenas. Feugiat{' '}
                </small>
                <ul className='list-unstyled d-flex justify-content-between w-50 mt-3'>
                  <li>
                    <a className='text-white' href='/'>
                      {' '}
                      <i className='fab fa-facebook'></i>
                    </a>
                  </li>
                  <li>
                    <a className='text-white' href='/'>
                      {' '}
                      <i className='fab fa-instagram'></i>
                    </a>
                  </li>
                  <li>
                    <a className='text-white' href='/'>
                      {' '}
                      <i className='fab fa-twitter'></i>
                    </a>
                  </li>
                  <li>
                    <a className='text-white' href='/'>
                      <i className='fab fa-linkedin'></i>
                    </a>
                  </li>
                </ul>
                <div className=''></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className='my-0 text-muted text-center pb-4'>
        Copyright &copy; -
        <span className='mx-1'>{new Date().getFullYear()}</span>
        <span>
          Developed by{' '}
          <a
            className='text-white text-decoration-underline'
            rel='noreferrer'
            target='_blank'
            href='https://smariful.com'
          >
            Ariful
          </a>
        </span>
      </p>
    </div>
  );
};

export default Footer;
