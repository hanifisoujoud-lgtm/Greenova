// src/pages/Logistics.js
import React, { useState, useEffect } from "react";

const Logistics = () => {
  const [shipments, setShipments] = useState([]);

  useEffect(() => {
    const fetchShipments = async () => {
      // Exemple de données mock
      const data = [
        { id: 1, orderId: 1, carrier: "DHL", status: "In Transit" },
        { id: 2, orderId: 2, carrier: "FedEx", status: "Delivered" },
        { id: 3, orderId: 3, carrier: "Local Transport", status: "Pending" },
      ];
      setShipments(data);
    };
    fetchShipments();
  }, []);

  return (
    <div className="logistics">
      <h1>Logistics</h1>
      <table>
        <thead>
          <tr>
            <th>Shipment ID</th>
            <th>Order ID</th>
            <th>Carrier</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {shipments.map((shipment) => (
            <tr key={shipment.id}>
              <td>{shipment.id}</td>
              <td>{shipment.orderId}</td>
              <td>{shipment.carrier}</td>
              <td>{shipment.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Logistics;