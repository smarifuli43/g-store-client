import React, { useEffect, useState } from 'react';
import ManageOrder from './ManageOrder';

const ManageOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/orders`)
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
      });
  }, []);
  return (
    <div className='row  d-flex justify-content-center mt-2'>
      <div className='col-12 col-md-10 col-lg-9 '>
        <h3 className='mb-3 heading-main'>All Orders</h3>

        {orders.length === 0 ? (
          <div className='box-shadow p-5 bg-white'>You have no order</div>
        ) : (
          orders.map((order, index) => (
            <ManageOrder
              key={order._id}
              order={order}
              quantity={index}
            ></ManageOrder>
          ))
        )}
      </div>
    </div>
  );
};

export default ManageOrders;
