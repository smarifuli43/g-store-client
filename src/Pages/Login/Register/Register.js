import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../../Shared/Header/Header';
import { useForm } from 'react-hook-form';
import './Register.css';
import { Link } from 'react-router-dom';
import googleLogo from '../../../img/google-color.svg';
import useAuth from '../../../Hooks/useAuth';
import { Alert } from 'react-bootstrap';

const Register = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { createNewUser, signInWithGoogle, error, setError } = useAuth();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => handleCreateNewUser(data);

  const handleCreateNewUser = (user) => {
    const { email, password, firstName, lastName } = user;

    if (password.length < 8) {
      setError('Password must contained 8 character');
      return;
    }
    const isContainsSymbol = /^(?=.*[~`!@#$%^&*()--+={}[\]|\\:;"'<>,.?/_₹]).*$/;
    if (!isContainsSymbol.test(password)) {
      setError('Password must contain at least one Special Symbol.');
      return;
    }
    const isContainsNumber = /^(?=.*[0-9]).*$/;
    if (!isContainsNumber.test(password)) {
      setError('Password must contain at least one Digit.');
      return;
    }
    const isContainsUppercase = /^(?=.*[A-Z]).*$/;
    if (!isContainsUppercase.test(password)) {
      setError('Password must have at least one Uppercase Character.');
      return;
    }

    const displayName = `${firstName} ${lastName}`;
    createNewUser(email, password, displayName, navigate);
    reset();
  };

  const googleSignIn = () => {
    signInWithGoogle(navigate, location);
  };

  return (
    <>
      <Header />
      <div className='container my-5'>
        <div className='row d-flex justify-content-center '>
          <div
            className='col-10 col-md-8 col-lg-5 data-form box-shadow border'
            style={{
              borderRadius: '4px',
              padding: '30px 50px',
            }}
          >
            <h3 className='mb-4' style={{ fontWeight: 600 }}>
              Create an account
            </h3>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                required
                placeholder='First Name'
                {...register('firstName')}
              />
              <input
                required
                placeholder='Last Name'
                {...register('lastName')}
              />
              <input
                required
                placeholder='Your Email'
                type='email'
                {...register('email')}
              />
              <input
                required
                placeholder='Password'
                type='password'
                {...register('password')}
              />

              <button type='submit' className='btn-store w-100'>
                Create an account
              </button>
            </form>
            <p className='text-center mt-2 mb-0'>
              Already have an account?{' '}
              <span>
                {' '}
                <Link to='/login' className='text-decoration-underline '>
                  Login
                </Link>{' '}
              </span>
            </p>
            {error && (
              <Alert variant='danger' className='mt-2 py-2'>
                {error}
              </Alert>
            )}
            <div className=' d-flex justify-content-center my-3 mx-2 align-items-center mt-5'>
              <span className='hl'></span>
              <h5>Or</h5>
              <span className='hl'></span>
            </div>
            <button
              className='d-flex justify-content-between bg-transparent rounded-pill p-2 mt-3 w-100'
              style={{ border: '1px solid #C7C7C7' }}
              onClick={googleSignIn}
            >
              <img src={googleLogo} alt='' style={{ width: '28px' }} />
              <span className='pe-1 pe-md-5'>Continue with Google</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
