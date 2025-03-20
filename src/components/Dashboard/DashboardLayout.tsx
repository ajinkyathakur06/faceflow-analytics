
import React, { ReactNode } from 'react';
import { Card } from '@/components/ui/card';

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="pt-20 px-4 md:px-8 pb-8 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
          <p className="text-gray-500">
            Welcome back, Admin. Here's what's happening with your attendance system.
          </p>
        </div>
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
