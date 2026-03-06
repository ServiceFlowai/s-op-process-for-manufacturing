import React from 'react';

const FinancialInsights: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Real-Time Financial Insights</h1>
      <p className="text-gray-700">Access real-time financial insights to enable better OpEx and CapEx calculations.</p>
      <div className="mt-4">
        <h2 className="text-lg font-semibold">Financial Metrics</h2>
        <ul className="list-disc pl-5">
          <li>Operating Expenses: $500,000</li>
          <li>Capital Expenditures: $300,000</li>
          <li>Profit Margin: 20%</li>
        </ul>
      </div>
    </div>
  );
};

export default FinancialInsights;