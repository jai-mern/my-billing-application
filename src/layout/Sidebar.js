import React from 'react';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li><a href="/">Dashboard</a></li>
        <li><a href="/inventory">Inventory</a></li>
        <li><a href="/billing">Billing</a></li>
        {/* Add additional sidebar links here */}
      </ul>
    </div>
  );
};

export default Sidebar;
