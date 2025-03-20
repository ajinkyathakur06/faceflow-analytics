
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, Users } from 'lucide-react';

// Mock data - will be replaced with real data from backend
const recentSessions = [
  {
    id: 1,
    title: 'Introduction to Computer Science',
    date: 'Today, 10:00 AM',
    duration: '1h 30m',
    students: 32,
    status: 'active',
  },
  {
    id: 2,
    title: 'Advanced Mathematics',
    date: 'Today, 1:30 PM',
    duration: '2h 00m',
    students: 24,
    status: 'upcoming',
  },
  {
    id: 3,
    title: 'Physics Lab',
    date: 'Yesterday, 2:00 PM',
    duration: '3h 00m',
    students: 18,
    status: 'completed',
  },
  {
    id: 4,
    title: 'English Literature',
    date: 'Yesterday, 11:00 AM',
    duration: '1h 00m',
    students: 27,
    status: 'completed',
  },
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case 'active':
      return <Badge className="bg-green-500">Active</Badge>;
    case 'upcoming':
      return <Badge className="bg-blue-500">Upcoming</Badge>;
    case 'completed':
      return <Badge className="bg-gray-500">Completed</Badge>;
    default:
      return null;
  }
};

const SessionsOverview = () => {
  return (
    <Card className="border-none shadow-md">
      <CardHeader className="flex flex-row items-center justify-between pb-4">
        <CardTitle className="text-xl font-semibold">Recent Sessions</CardTitle>
        <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
          Create New Session
        </Button>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-500">Session</th>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-500">Date & Time</th>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-500">Duration</th>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-500">Students</th>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-500">Status</th>
                <th className="py-3 px-4 text-right text-sm font-medium text-gray-500">Action</th>
              </tr>
            </thead>
            <tbody>
              {recentSessions.map((session) => (
                <tr
                  key={session.id}
                  className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                >
                  <td className="py-3 px-4 text-sm font-medium">{session.title}</td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2 text-gray-400" />
                      {session.date}
                    </div>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2 text-gray-400" />
                      {session.duration}
                    </div>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-2 text-gray-400" />
                      {session.students}
                    </div>
                  </td>
                  <td className="py-3 px-4 text-sm">{getStatusBadge(session.status)}</td>
                  <td className="py-3 px-4 text-right">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-blue-600 hover:text-blue-800 hover:bg-blue-50"
                    >
                      View Details
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
};

export default SessionsOverview;
