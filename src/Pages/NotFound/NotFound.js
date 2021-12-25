import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {

  return (
    <div className='position-absolute top-50 start-50 translate-middle text-center'>
      <h1 style={{ color: '#5C2EDE', fontSize: '80px' }}>404</h1>
      <h2 className='mb-5'>The page you looking for is not available!</h2>
      <Link to='/home' className='btn-store'>
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;