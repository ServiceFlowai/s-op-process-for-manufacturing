import React from 'react';

const Dashboard: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white p-4 shadow rounded-lg">
          <h2 className="text-lg font-semibold">Forecast Accuracy</h2>
          <p className="text-gray-600">85%</p>
        </div>
        <div className="bg-white p-4 shadow rounded-lg">
          <h2 className="text-lg font-semibold">Inventory Turns</h2>
          <p className="text-gray-600">12</p>
        </div>
        <div className="bg-white p-4 shadow rounded-lg">
          <h2 className="text-lg font-semibold">COGS</h2>
          <p className="text-gray-600">$1,200,000</p>
        </div>
        <div className="bg-white p-4 shadow rounded-lg">
          <h2 className="text-lg font-semibold">ROI for Supply Chain Improvements</h2>
          <p className="text-gray-600">150%</p>
        </div>
        <div className="bg-white p-4 shadow rounded-lg">
          <h2 className="text-lg font-semibold">Demand Plan Attainment</h2>
          <p className="text-gray-600">95%</p>
        </div>
        <div className="bg-white p-4 shadow rounded-lg">
          <h2 className="text-lg font-semibold">OpEx vs. CapEx Ratio</h2>
          <p className="text-gray-600">1.5</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;