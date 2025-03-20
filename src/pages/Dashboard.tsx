
import React from 'react';
import Navbar from '@/components/Navbar';
import DashboardLayout from '@/components/Dashboard/DashboardLayout';
import AttendanceStats from '@/components/Dashboard/AttendanceStats';
import SessionsOverview from '@/components/Dashboard/SessionsOverview';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Mock data for chart
const attendanceData = [
  { name: 'Mon', present: 92, absent: 8 },
  { name: 'Tue', present: 85, absent: 15 },
  { name: 'Wed', present: 90, absent: 10 },
  { name: 'Thu', present: 88, absent: 12 },
  { name: 'Fri', present: 95, absent: 5 },
  { name: 'Sat', present: 78, absent: 22 },
  { name: 'Sun', present: 75, absent: 25 },
];

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <DashboardLayout>
        <AttendanceStats />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Attendance Chart */}
          <Card className="border-none shadow-md">
            <CardHeader className="pb-2">
              <CardTitle className="text-xl font-semibold">Weekly Attendance</CardTitle>
            </CardHeader>
            <CardContent className="pt-2">
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={attendanceData}
                    margin={{ top: 20, right: 20, left: 20, bottom: 20 }}
                    barGap={0}
                    barCategoryGap={20}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="present" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="absent" fill="#f87171" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
          
          {/* Recent Activity */}
          <Card className="border-none shadow-md">
            <CardHeader className="pb-2">
              <CardTitle className="text-xl font-semibold">Recent Activity</CardTitle>
            </CardHeader>
            <CardContent className="pt-2">
              <div className="space-y-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="flex items-start p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="text-blue-600 font-medium">{String.fromCharCode(64 + i)}</span>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium">
                        {[
                          'John Doe marked attendance',
                          'New session created: Physics Lab',
                          'Attendance report generated',
                          'Face recognition system updated',
                          'Sarah Johnson marked attendance',
                        ][i - 1]}
                      </h4>
                      <p className="text-xs text-gray-500 mt-1">
                        {`${i * 10} minutes ago`}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
        
        <SessionsOverview />
      </DashboardLayout>
    </div>
  );
};

export default Dashboard;
