import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import logo from '../../../img/logo.png';
import './Header.css';
import { useSelector } from 'react-redux';

const Header = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const getCartCount = () => {
    return cartItems.reduce((qty, item) => qty + Number(item.qty), 0);
  };

  return (
    <div>
      <Navbar bg='light' variant='light' expand='lg'>
        <Container>
          <Navbar.Brand>
            <Link to='/home'>
              <img
                src={logo}
                alt=''
                style={{ width: '130px', height: '50px' }}
              />
            </Link>
          </Navbar.Brand>
          <Link
            to='/cart'
            className='ms-auto ms-lg-5 border-0 bg-transparent position-relative me-4'
          >
            <i className='fas fa-shopping-cart fs-3'></i>{' '}
            <span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger'>
              {getCartCount()}{' '}
              <span className='visually-hidden'>cart item</span>
            </span>
          </Link>
          <Navbar.Toggle
            aria-controls='responsive-navbar-nav'
            className='border-0 ms-auto'
          />

          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='ms-auto d-flex align-items-start align-items-lg-center '>
              <NavLink
                to='/home'
                className={({ isActive }) =>
                  isActive ? 'active mt-4 mt-lg-0' : 'ms-lg-4 mt-4 mt-lg-0 '
                }
              >
                Home
              </NavLink>

              <NavLink
                to='/shop'
                className={({ isActive }) =>
                  isActive ? 'active' : 'ms-lg-4 mt-4 mt-lg-0 '
                }
              >
                Shop
              </NavLink>
              {/* <NavLink
                to='/contact'
                className={({ isActive }) =>
                  isActive ? 'active' : 'ms-lg-4 mt-4 mt-lg-0 '
                }
              >
                Contact
              </NavLink> */}

              {
                <NavLink
                  to='/dashboard'
                  className={({ isActive }) =>
                    isActive ? 'active ' : 'ms-lg-4 mt-4 mt-lg-0 '
                  }
                >
                  Dashboard
                </NavLink>
              }
              {user?.email ? (
                <div>
                  <button
                    className='btn-store ms-lg-4 my-4 my-lg-0'
                    onClick={() => logout(navigate)}
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <Link className='btn-store ms-lg-4 my-4 my-lg-0' to='/login'>
                  Login
                </Link>
              )}
              <Navbar.Text>
                <h5 className='ms-2 mt-2'>{user?.displayName}</h5>
              </Navbar.Text>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
