import React from 'react';
import { Table } from 'react-bootstrap';

const MyOrder = ({ order,quantity }) => {
  console.log(order)
  return (
    <div className='row  d-flex justify-content-center mt-5'>
      <div className='col-12 col-md-10 col-lg-9 '>
        <div className='add-product box-shadow bg-white p-4 '>
          <h5 className='mb-3 '>Order: { quantity+1}</h5>

          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>status</th>
                <th>action</th>
              </tr>
            </thead>
            <tbody>
              {order?.order?.map((order, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{order.name}</td>
                  <td>{order.qty}</td>
                  <td>${order.price}</td>
                  <td>{order.status}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default MyOrder;