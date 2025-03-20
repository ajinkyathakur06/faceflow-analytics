
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { User, Clock, CheckCircle, XCircle } from 'lucide-react';

// Mock data - will be replaced with real data from backend
const stats = [
  {
    title: 'Total Students',
    value: '156',
    icon: <User className="h-5 w-5 text-blue-500" />,
    change: '+12% from last month',
    positive: true,
  },
  {
    title: 'Attendance Rate',
    value: '92.4%',
    icon: <CheckCircle className="h-5 w-5 text-green-500" />,
    change: '+3.2% from last month',
    positive: true,
  },
  {
    title: 'Absences',
    value: '24',
    icon: <XCircle className="h-5 w-5 text-red-500" />,
    change: '-8% from last month',
    positive: true,
  },
  {
    title: 'Avg. Session Duration',
    value: '1h 24m',
    icon: <Clock className="h-5 w-5 text-purple-500" />,
    change: '+10min from last month',
    positive: true,
  },
];

const AttendanceStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => (
        <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-2 pt-6">
            <CardTitle className="text-sm font-medium text-gray-500">
              {stat.title}
            </CardTitle>
            <div className="p-2 rounded-full bg-gray-100">{stat.icon}</div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className={`text-xs ${stat.positive ? 'text-green-600' : 'text-red-600'}`}>
              {stat.change}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default AttendanceStats;
