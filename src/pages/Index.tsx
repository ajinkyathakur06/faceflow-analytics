
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import { 
  Camera, 
  BarChart2, 
  Calendar, 
  Clock, 
  User, 
  ShieldCheck 
} from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 md:pt-40 md:pb-32">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <div className="inline-block px-3 py-1 mb-4 text-sm font-medium bg-blue-100 text-blue-800 rounded-full">
                Next-Gen Attendance System
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Smart Attendance <br /> 
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
                  with Face Recognition
                </span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 md:pr-8 leading-relaxed">
                Streamline your attendance management with our advanced facial recognition system. 
                Eliminate manual tracking, prevent proxy attendance, and access real-time reports.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/login">
                  <Button className="text-md px-6 py-6 bg-blue-600 hover:bg-blue-700">
                    Get Started
                  </Button>
                </Link>
                <Button variant="outline" className="text-md px-6 py-6">
                  Learn More
                </Button>
              </div>
            </div>
            
            <div className="flex-1 relative">
              <div className="relative z-10 bg-white rounded-2xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-blue-200/20"></div>
                <img 
                  src="https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80" 
                  alt="Facial Recognition" 
                  className="w-full rounded-2xl aspect-[4/3] object-cover mix-blend-overlay"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="p-2 rounded-lg bg-white/30 backdrop-blur-xl border border-white/20">
                    <div className="w-48 h-48 border-2 border-dashed border-blue-400 rounded-md flex items-center justify-center">
                      <div className="text-center p-4">
                        <Camera className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                        <p className="text-blue-800 font-medium">Face Detection</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements for design */}
              <div className="absolute top-1/4 -left-8 w-16 h-16 bg-blue-100 rounded-full"></div>
              <div className="absolute bottom-1/3 -right-6 w-12 h-12 bg-blue-200 rounded-full"></div>
              <div className="absolute -bottom-4 left-1/3 w-20 h-20 bg-blue-50 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Features</h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Our facial recognition attendance system offers a comprehensive solution for modern educational institutions and organizations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100 group">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                <Camera className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Facial Recognition</h3>
              <p className="text-gray-600">
                Advanced AI-powered facial recognition for contactless attendance marking.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100 group">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                <BarChart2 className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Detailed Reports</h3>
              <p className="text-gray-600">
                Generate comprehensive attendance reports and analytics instantly.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100 group">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                <Calendar className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Session Management</h3>
              <p className="text-gray-600">
                Create and manage sessions with customizable parameters and settings.
              </p>
            </div>
            
            {/* Feature 4 */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100 group">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                <Clock className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Real-time Processing</h3>
              <p className="text-gray-600">
                Process attendance in real-time with instant notifications and updates.
              </p>
            </div>
            
            {/* Feature 5 */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100 group">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                <User className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-semibold mb-2">User Management</h3>
              <p className="text-gray-600">
                Easily manage students, staff, and admin users with role-based access control.
              </p>
            </div>
            
            {/* Feature 6 */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100 group">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                <ShieldCheck className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure Authentication</h3>
              <p className="text-gray-600">
                Robust authentication system to ensure data security and privacy.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Attendance System?
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of institutions that have modernized their attendance tracking with our facial recognition system.
          </p>
          <Link to="/login">
            <Button className="bg-white text-blue-600 hover:bg-blue-50 text-md px-8 py-6">
              Get Started Today
            </Button>
          </Link>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-12 px-6 bg-gray-900 text-gray-400">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="mb-4 md:mb-0">
              <span className="text-xl font-semibold text-white">FaceFlow</span>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center">
            <p>&copy; {new Date().getFullYear()} FaceFlow. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
