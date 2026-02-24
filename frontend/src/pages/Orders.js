// src/pages/Orders.js
import React, { useState, useEffect } from "react";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  // Exemple de récupération de données (mock)
  useEffect(() => {
    const fetchOrders = async () => {
      // Remplace avec ton API réelle
      const data = [
        { id: 1, product: "Tomatoes", quantity: 10, status: "Pending" },
        { id: 2, product: "Fertilizer", quantity: 5, status: "Shipped" },
        { id: 3, product: "Seeds", quantity: 20, status: "Delivered" },
      ];
      setOrders(data);
    };
    fetchOrders();
  }, []);

  return (
    <div className="orders">
      <h1>Orders</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Product</th>
            <th>Quantity</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.product}</td>
              <td>{order.quantity}</td>
              <td>{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;