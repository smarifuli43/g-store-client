import React, { useEffect, useState } from 'react';
import useAuth from '../../../../Hooks/useAuth';
import MyOrder from './MyOrder';

const MyOrders = () => {
  const { user } = useAuth();

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/myorders?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
      });
  }, [user]);
  return (
    <div className='row  d-flex justify-content-center mt-3'>
      <div className='col-12 col-md-10 col-lg-9 '>
        <h3 className='mb-3 heading-main'>My Orders</h3>

        {
          orders.length === 0 ? 
            <div className="box-shadow p-5 bg-white">You have no order</div> :
            orders.map((order, index) => (
          <MyOrder key={order._id} order={order} quantity={index}></MyOrder>
        ))
        }
      
      </div>
    </div>
  );
};

export default MyOrders;
