import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Shared/Header/Header';
import { useForm } from 'react-hook-form';
import googleLogo from '../../../img/google-color.svg';
import PasswordReset from '../Reset/PasswordReset/PasswordReset';
import { Alert } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router';
import useAuth from '../../../Hooks/useAuth';


const Login = () => {
  const { signinWithEmailandPass, signInWithGoogle } =
    useAuth();
  const navigate = useNavigate()
  const location = useLocation();
  const [modalShow, setModalShow] = React.useState(false);

  const { register, handleSubmit, reset, error } = useForm();
  const onSubmit = (data) => {
    handleEmailandPassSignin(data);
  };
  //  email signin
  const handleEmailandPassSignin = (user) => {
    signinWithEmailandPass(user.email, user.password, navigate, location);
    reset();
  };
  const googleSignIn = () => {
    signInWithGoogle( navigate, location);
  };


  return (
    <>
      <Header />
      <div className='container my-5'>
        <div className='row d-flex justify-content-center '>
          <div
            className='col-10 col-md-8 col-lg-5 data-form'
            style={{
              border: '1px solid #ABABAB',
              borderRadius: '4px',
              padding: '30px 50px',
            }}
          >
            <h3 className='mb-4' style={{ fontWeight: 600 }}>
              Login
            </h3>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                placeholder='Your Email'
                type='email'
                {...register('email')}
                required
              />
              <input
                placeholder='Password'
                type='password'
                {...register('password')}
                required
                className='mb-2'
              />
              <span className='my-0 py-0' style={{ fontSize: '15px' }}>
                Forgot Password?
                <button
                  className='btn text-danger'
                  onClick={() => setModalShow(true)}
                >
                  {' '}
                  Reset Now
                </button>
              </span>
              <PasswordReset
                show={modalShow}
                onHide={() => setModalShow(false)}
              ></PasswordReset>
              <button type='submit' className='btn-store w-100'>
                Login
              </button>
            </form>
            <p className='text-center mt-2 mb-0'>
              Don't have an account?{' '}
              <span>
                {' '}
                <Link to='/register' className='text-decoration-underline '>
                  Register
                </Link>{' '}
              </span>
            </p>

            {error && (
              <Alert variant='danger' className='mx-3 py-2'>
                {error}
              </Alert>
            )}
          </div>
        </div>
        <div className='row d-flex justify-content-center px-md-5'>
          <div className='col-10 col-md-8 col-lg-5 text-center'>
            <div className=' d-flex justify-content-center my-3 mx-2 align-items-center'>
              <span className='hl'></span>
              <h5>Or</h5>
              <span className='hl'></span>
            </div>
            <button
              className='d-flex justify-content-between bg-transparent rounded-pill p-2 w-100'
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

export default Login;
