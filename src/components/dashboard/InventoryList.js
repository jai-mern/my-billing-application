import React from 'react';

const InventoryList = ({ items }) => {
  return (
    <div className="inventory-list">
      <h3>Inventory List</h3>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item.name} - {item.quantity}</li>
        ))}
      </ul>
    </div>
  );
};

export default InventoryList;
