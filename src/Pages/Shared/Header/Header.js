import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import logo from '../../../img/logo.png';
import './Header.css';

const Header = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

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
          <Navbar.Toggle
            aria-controls='responsive-navbar-nav'
            className='border-0'
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
                to='/about'
                className={({ isActive }) =>
                  isActive ? 'active' : 'ms-lg-4 mt-4 mt-lg-0 '
                }
              >
                About
              </NavLink>
              <NavLink
                to='/contact'
                className={({ isActive }) =>
                  isActive ? 'active' : 'ms-lg-4 mt-4 mt-lg-0 '
                }
              >
                Contact
              </NavLink>

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
