import React from 'react';

const Collaboration: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Integrated Platform for Collaboration</h1>
      <p className="text-gray-700">This platform integrates inputs from demand, supply, and finance to enhance collaboration and visibility.</p>
      <div className="mt-4">
        <h2 className="text-lg font-semibold">Current Collaborations</h2>
        <ul className="list-disc pl-5">
          <li>Demand Planning Meetings</li>
          <li>Supply Chain Coordination</li>
          <li>Financial Forecasting Sessions</li>
        </ul>
      </div>
    </div>
  );
};

export default Collaboration;