import React from 'react';
import DashboardHeader from '../components/dashboard/DashboardHeader';
import SalesChart from '../components/dashboard/SalesChart';
import InventoryList from '../components/dashboard/InventoryList';

const Dashboard = () => {
  // Mock data for demonstration
  const salesData = [100, 150, 200, 250, 300];
  const inventoryItems = [
    { name: 'Item 1', quantity: 10 },
    { name: 'Item 2', quantity: 20 },
    { name: 'Item 3', quantity: 15 },
  ];

  return (
    <div className="dashboard">
      <DashboardHeader />
      <div className="dashboard-content">
        <SalesChart data={{ labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'], salesData }} />
        <InventoryList items={inventoryItems} />
      </div>
    </div>
  );
};

export default Dashboard;
