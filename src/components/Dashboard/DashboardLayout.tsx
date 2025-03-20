
import React, { ReactNode, useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Info } from 'lucide-react';

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const [networkInfo, setNetworkInfo] = useState<string | null>(null);

  useEffect(() => {
    // Function to get IP address
    const getNetworkInfo = async () => {
      try {
        // In a real app, this would be provided by the server
        // For demo purposes, we'll show the current URL
        const currentUrl = window.location.href;
        const urlObj = new URL(currentUrl);
        setNetworkInfo(`${urlObj.protocol}//${urlObj.hostname}:3000`);
      } catch (error) {
        console.error('Error getting network info:', error);
      }
    };

    getNetworkInfo();
  }, []);

  return (
    <div className="pt-20 px-4 md:px-8 pb-8 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
          <p className="text-gray-500">
            Welcome back, Admin. Here's what's happening with your attendance system.
          </p>
          
          {networkInfo && (
            <div className="mt-4 p-3 bg-blue-50 rounded-lg inline-flex items-start gap-2 max-w-lg">
              <Info className="w-5 h-5 text-blue-500 mt-0.5 shrink-0" />
              <div>
                <p className="text-sm font-medium text-blue-800">Local Network Access</p>
                <p className="text-xs text-blue-600">
                  This application is accessible on your local network at: <span className="font-mono bg-blue-100 px-1 py-0.5 rounded">{networkInfo}</span>
                </p>
                <p className="text-xs text-blue-600 mt-1">
                  Other devices on the same network can access this app using this address.
                </p>
              </div>
            </div>
          )}
        </div>
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
