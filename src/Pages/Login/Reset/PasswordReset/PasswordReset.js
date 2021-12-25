import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import { Alert, Form, Modal } from 'react-bootstrap';
import useAuth from '../../../../Hooks/useAuth';

const PasswordReset = (props) => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const { passwordReset, success, error, setSuccess, setError } = useAuth();
  // reset password
  const resetPassword = () => {
    passwordReset(email);
  };
  const handleMessage = () => {
    setSuccess('');
    setError('');
  };

  return (
    <div>
      <Modal
        {...props}
        size='lg'
        aria-labelledby='contained-modal-title-vcenter'
        centered
        
      >
        <Modal.Header
          closeButton
          onClick={handleMessage}
          className='border-0 pb-0'
        ></Modal.Header>
        <div className='mb-3'>
          <Modal.Body className='pt-4'>
            <Form.Control
              type='email'
              placeholder='Enter email'
              className='mb-3 py-2'
              onBlur={handleEmailChange}
            />
            <Button className='btn-store py-2' onClick={resetPassword}>
              Reset Password
            </Button>
          </Modal.Body>
          {success && (
            <Alert variant='info' className='mx-3 py-2'>
              Password reset email has been sent.
            </Alert>
          )}
          {error && (
            <Alert variant='danger' className='mx-3 py-2'>
              {error}
            </Alert>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default PasswordReset;
