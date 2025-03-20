
import React from 'react';
import Navbar from '@/components/Navbar';
import FaceScanner from '@/components/FaceRecognition/FaceScanner';
import FaceTrainer from '@/components/FaceRecognition/FaceTrainer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Recognition = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="pt-20 px-4 md:px-8 pb-8">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Face Recognition</h1>
            <p className="text-gray-500">
              Mark attendance using facial recognition technology
            </p>
          </div>
          
          <Tabs defaultValue="scanner" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="scanner">Recognition Scanner</TabsTrigger>
              <TabsTrigger value="trainer">Train Faces</TabsTrigger>
              <TabsTrigger value="history">Recognition History</TabsTrigger>
            </TabsList>
            
            <TabsContent value="scanner" className="focus-visible:outline-none focus-visible:ring-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <Card className="border-none shadow-md">
                    <CardHeader>
                      <CardTitle>Face Recognition Scanner</CardTitle>
                      <CardDescription>
                        Position your face in the camera frame to mark your attendance
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <FaceScanner />
                    </CardContent>
                  </Card>
                </div>
                
                <div>
                  <Card className="border-none shadow-md mb-6">
                    <CardHeader>
                      <CardTitle>Active Session</CardTitle>
                      <CardDescription>
                        Currently active session details
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-lg font-semibold">Advanced Mathematics</h3>
                          <p className="text-sm text-gray-500">Room 205</p>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-blue-50 p-3 rounded-lg">
                            <p className="text-xs text-blue-500 mb-1">Time</p>
                            <p className="text-sm font-medium">1:30 PM - 3:30 PM</p>
                          </div>
                          <div className="bg-green-50 p-3 rounded-lg">
                            <p className="text-xs text-green-500 mb-1">Instructor</p>
                            <p className="text-sm font-medium">Dr. Katherine Johnson</p>
                          </div>
                        </div>
                        
                        <div className="pt-2">
                          <p className="text-sm text-gray-500 mb-2">Attendance Progress</p>
                          <div className="w-full bg-gray-100 rounded-full h-2.5">
                            <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '45%' }}></div>
                          </div>
                          <div className="flex justify-between mt-1">
                            <span className="text-xs text-gray-500">11 students</span>
                            <span className="text-xs text-gray-500">24 total</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-none shadow-md">
                    <CardHeader>
                      <CardTitle>Instructions</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ol className="list-decimal pl-5 space-y-2 text-sm">
                        <li className="text-gray-600">Make sure you are in a well-lit environment.</li>
                        <li className="text-gray-600">Position your face clearly in the camera frame.</li>
                        <li className="text-gray-600">Remove any face coverings or items that may obstruct facial features.</li>
                        <li className="text-gray-600">Remain still during the scanning process.</li>
                        <li className="text-gray-600">Wait for the confirmation message before leaving.</li>
                      </ol>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="trainer" className="focus-visible:outline-none focus-visible:ring-0">
              <Card className="border-none shadow-md">
                <CardHeader>
                  <CardTitle>Train Face Recognition</CardTitle>
                  <CardDescription>
                    Capture photos to train the system to recognize specific individuals
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <FaceTrainer />
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="history" className="focus-visible:outline-none focus-visible:ring-0">
              <Card className="border-none shadow-md">
                <CardHeader>
                  <CardTitle>Recognition History</CardTitle>
                  <CardDescription>
                    Recent facial recognition attendance records
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <div 
                        key={i}
                        className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                      >
                        <div className="flex items-center">
                          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                            <span className="font-medium text-blue-600">{String.fromCharCode(65 + i)}</span>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium">
                              {[
                                'Advanced Mathematics',
                                'Introduction to Computer Science',
                                'Physics Lab',
                                'English Literature',
                                'Chemistry'
                              ][i]}
                            </h4>
                            <p className="text-xs text-gray-500">
                              {new Date(2023, 9, 15 - i).toLocaleDateString()} at {`${10 - i}:00 AM`}
                            </p>
                          </div>
                        </div>
                        <div className="text-sm">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            Successful
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Recognition;
