import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Collaboration from './pages/Collaboration';
import FinancialInsights from './pages/FinancialInsights';
import SupplyPlan from './pages/SupplyPlan';
import Optimization from './pages/Optimization';
import Navbar from './components/Navbar';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/collaboration" element={<Collaboration />} />
        <Route path="/financial-insights" element={<FinancialInsights />} />
        <Route path="/supply-plan" element={<SupplyPlan />} />
        <Route path="/optimization" element={<Optimization />} />
      </Routes>
    </div>
  );
};

export default App;