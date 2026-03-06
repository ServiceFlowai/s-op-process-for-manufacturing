import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Users, DollarSign, Box, Settings } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex items-center px-3 py-2 text-gray-700 hover:text-gray-900">
              <Home className="w-5 h-5 mr-2" />
              Dashboard
            </Link>
            <Link to="/collaboration" className="flex items-center px-3 py-2 text-gray-700 hover:text-gray-900">
              <Users className="w-5 h-5 mr-2" />
              Collaboration
            </Link>
            <Link to="/financial-insights" className="flex items-center px-3 py-2 text-gray-700 hover:text-gray-900">
              <DollarSign className="w-5 h-5 mr-2" />
              Financial Insights
            </Link>
            <Link to="/supply-plan" className="flex items-center px-3 py-2 text-gray-700 hover:text-gray-900">
              <Box className="w-5 h-5 mr-2" />
              Supply Plan
            </Link>
            <Link to="/optimization" className="flex items-center px-3 py-2 text-gray-700 hover:text-gray-900">
              <Settings className="w-5 h-5 mr-2" />
              Optimization
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;