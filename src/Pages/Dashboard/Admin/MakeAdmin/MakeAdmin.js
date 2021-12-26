import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import './MakeAdmin.css';

const MakeAdmin = () => {
  const { register, handleSubmit, reset } = useForm();
  const [success, setSuccess] = useState();
  const [error, setError] = useState(false);
  const onSubmit = (data) => {
    const email = data.email;
    const user = { email };
    fetch('https://rocky-shore-10312.herokuapp.com/users/admin', {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          setSuccess(true);
          setError(false);
          reset();
        }
        if (data.modifiedCount === 0) {
          setSuccess(false);
          setError(true);
          reset();
        }
      });
  };
  return (
    <div className='row  d-flex justify-content-center '>
      <div className='col-12 col-md-10 col-lg-9 '>
        <div className='box-shadow admin bg-white p-4 '>
          <h3 className='mb-5 heading-main'>Make Admin</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='col-12 d-md-flex'>
              <div className='w-100 '>
                <label htmlFor='name' className='mb-2'>
                  Enter email
                </label>
                <input
                  required
                  type='email'
                  placeholder='Example@gmail.com'
                  {...register('email')}
                />
              </div>
            </div>
            <button type='submit' className='btn-store'>
              Submit
            </button>
          </form>
        </div>
        {success && (
          <Alert variant='success' className='mt-2 py-2'>
            Admin added successfully
          </Alert>
        )}

        {error && (
          <Alert variant='danger' className='mt-2 py-2'>
            Aready Added
          </Alert>
        )}
      </div>
    </div>
  );
};

export default MakeAdmin;
