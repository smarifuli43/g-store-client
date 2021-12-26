import React, { useState } from 'react';
import { Table } from 'react-bootstrap';

const ManageOrder = ({ order, quantity }) => {
  const [status, setStatus] = useState(order.status);

  const removeOrderHandler = (id) => {
    console.log(id);
    const proceed = window.confirm('Are you sure you want to delete?');
    if (proceed === true) {
      const url = `http://localhost:5000/orders/${id}`;
      fetch(url, {
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            console.log('deleted successfully');
            alert('deleted successfully');
            //  const remaining = orders.filter((order) => order._id !== id);
            //  setOrders(remaining);
            window.location.reload();
          }
        });
    }
  };
  const updateStatus = (id) => {
    fetch(`http://localhost:5000/orders/${id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          setStatus('shifted');
        }
      });
  };
  return (
    <div className='row  d-flex justify-content-center mt-5'>
      <div className='col-12 col-md-10 col-lg-9 '>
        <div className='add-product box-shadow bg-white p-4 '>
          <div className='d-flex justify-content-between align-items-center mb-3'>
            <h5 className='mb-3 '>Order: {quantity + 1}</h5>

            <p>status: {status}</p>
            <div className=''>
              <button
                className='border-0 bg-transparent ms-3'
                onClick={() => removeOrderHandler(order._id)}
              >
                {' '}
                <i className='fas fa-trash text-danger fs-4'></i>
              </button>
              <button
                className='border-0 bg-transparent ms-3'
                onClick={() => updateStatus(order._id)}
              >
                <i className='fas fa-check-square fs-4 text-success'></i>
              </button>
            </div>
          </div>

          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Quantity</th>
                <th>Price</th>
               
              </tr>
            </thead>
            <tbody>
              {order?.order?.map((order, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{order.name}</td>
                  <td>{order.qty}</td>
                  <td>${order.price}</td>
              
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default ManageOrder;
