import React from 'react';

const SupplyPlan: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Supply Plan Selection Tool</h1>
      <p className="text-gray-700">Select the most viable supply plan based on collaborative data.</p>
      <div className="mt-4">
        <h2 className="text-lg font-semibold">Available Plans</h2>
        <ul className="list-disc pl-5">
          <li>Plan A: Cost-effective, moderate risk</li>
          <li>Plan B: High efficiency, high risk</li>
          <li>Plan C: Balanced approach</li>
        </ul>
      </div>
    </div>
  );
};

export default SupplyPlan;