import React, { useEffect, useState } from 'react';
import './Orders.css';
import { toast } from 'react-toastify';
import axios from 'axios';
import { assets } from "../../assets/assets"; // Correct the import

const Orders = ({ url }) => {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    try {
      const response = await axios.get(url + "/api/order/list");
      if (response.data.success) {
        setOrders(response.data.data);
        console.log(response.data.data);
      } else {
        toast.error("Error fetching orders");
      }
    } catch (error) {
      console.error("Error fetching orders:", error);
      toast.error("Error fetching orders");
    }
  };


  const statusHandler=async (event,orderId)=>{
      const response=await axios.post(url+"/api/order/staus",{
        orderId,
        staus:event.target.value
      })
      if(response,data.success){
        await fetchAllOrders();
      }
  }

  useEffect(() => {
    fetchAllOrders();
  }, []); // Empty dependency array ensures this runs only once

  return (
    <div className='order add'>
      <h3>Order Page</h3>
      <div className='order-list'>
        {orders.map((order, index) => (
          <div key={index} className='order-item'>
            <img src={assets.parcel_icon} alt='Parcel Icon' />
            <div>
              <p className='order-item-food'>
                {order.items.map((item, itemIndex) => (
                  <span key={itemIndex}>
                    {item.name} x{item.quantity}
                    {itemIndex < order.items.length - 1 && ', '}
                  </span>
                ))}
              </p>
              <p className='order-item-name'>{order.address.firstname + " " + order.address.lastname}</p>
              <div className='order-item-address'>
                <p>{order.address.street + ","}</p>
                <p>{order.address.city + ", " + order.address.state + ", " + order.address.country + ", " + order.address.zipcode}</p>
              </div>
              <div className='order-item-details'>
                <p className='order-item-phone'>{order.address.phone}</p>
                <p className='order-item-price'>${order.amount}.00</p>
                <p className='order-item-items'>Items: {order.items.length}</p>
                <select onChange={(event)=>statusHandler(event,order._id)} value={order.status}className='order-item-select'>
                  <option value="Food Processing">Food Processing</option>
                  <option value="Out For Delivery">Out For Delivery</option>
                  <option value="Delivered">Delivered</option>
                </select>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
