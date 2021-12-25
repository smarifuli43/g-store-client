import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import './AddService.css';

/*
 */

const AddService = () => {
  const { register, handleSubmit, reset } = useForm();
  const [success, setSuccess] = useState();
  const onSubmit = (data) => {
    console.log(data)
    fetch('http://localhost:5000/products', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          setSuccess(true);
          reset();
          setTimeout(() => {
            setSuccess(false);
          }, 5000);
        }
      });
  };
  return (
    <div className='row  d-flex justify-content-center mt-5'>
      <div className='col-12 col-md-10 col-lg-9 '>
        <div className='add-product box-shadow bg-white p-4 '>
          <h3 className='mb-5 heading-main'>Add a Product</h3>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='col-12 d-md-flex'>
              <div className='w-100 '>
                <label htmlFor='name' className='mb-2'>
                 Product Title
                </label>
                <input
                  required
                  placeholder='Product Name'
                  {...register('name')}
                />
              </div>

              <div className='w-100 ps-0 ps-md-3'>
                <label htmlFor='price' className='mb-2'>
                  Price
                </label>
                <input
                  required
                  placeholder='Enter price'
                  {...register('price')}
                />
              </div>
            </div>
            <div className='col-12 '>
              <div className='w-100 '>
                <label htmlFor='image' className='mb-2'>
                  Image
                </label>
                <input required placeholder='Image Url' {...register('img')} />
              </div>
              <div className='w-100 '>
                <label htmlFor='category' className='mb-2'>
                  Category
                </label>
                <input required placeholder='Category name' {...register('category')} />
              </div>
              <div className='w-100 '>
                <label htmlFor='image' className='mb-2'>
                 Stock quantity
                </label>
                <input required placeholder='Product quantity' {...register('countStock')} />
              </div>

              <div className='w-100 '>
                <label htmlFor='description' className='mb-2'>
                  Description
                </label>
                <textarea
                  className='bg-white'
                  rows='4'
                  placeholder='Short description'
                  {...register('description', { required: true })}
                />
              </div>
            </div>
            <button
              type='submit'
              className='btn-store'
              style={{ marginLeft: `calc(100% - 115px)` }}
            >
              Submit
            </button>
            {success && (
              <Alert variant='success' className='mt-2 py-2'>
                Service added successfully
              </Alert>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddService;
